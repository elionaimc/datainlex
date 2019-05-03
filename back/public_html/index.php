<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

// loads .env configurations allowing access like $_ENV[VARIABLE_NAME]
$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load(); // must use ->overload(); if wants overwrite pre-existents variables
$dotenv->required(['DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME']);// throws a error if not exists a .env file with these params

$config['displayErrorDetails'] = true; // SHOULD change to false on production environment
$config['addContentLengthHeader'] = false;
$config['determineRouteBeforeAppMiddleware'] = true;
$config['db']['host']   = $_ENV['DB_HOST'];
$config['db']['user']   = $_ENV['DB_USER'];
$config['db']['pass']   = $_ENV['DB_PASS'];
$config['db']['dbname'] = $_ENV['DB_NAME'];

$app = new \Slim\App(['settings' => $config]); // starts Slim app with defined settings

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->add(function (Request $request, Response $response, callable $next) {
    $uri = $request->getUri();
    $path = $uri->getPath();
    if ($path != '/' && substr($path, -1) == '/') {
        // permanently redirect paths with a trailing slash
        // to their non-trailing counterpart
        $uri = $uri->withPath(substr($path, 0, -1));
        
        if($request->getMethod() == 'GET') {
            return $response->withRedirect((string)$uri, 301);
        }
        else {
            return $next($request->withUri($uri), $response);
        }
    }

    return $next($request, $response);
});

$container = $app->getContainer();
//$environment = $container['environment'];
$container['logger'] = function($c) {
    $logger = new \Monolog\Logger('logger');
    $file_handler = new \Monolog\Handler\StreamHandler('../logs/app.log');
    $logger->pushHandler($file_handler);
    return $logger;
};

$container['db'] = function ($c) {
    $db = $c['settings']['db'];
    $pdo = new PDO('mysql:host=192.254.140.238;dbname=datainle_main', 'root', 'lalunadevalencia.2019@');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $this->logger->addInfo("Usuário acessou a rota /hello informando o valor $name", ["hello" => $name]);
    $response->getBody()->write("Hello, $name");
});


$app->group('/api', function () use ($app) {
    $app->map(['POST', 'OPTIONS'], '/auth', function (Request $request, Response $response, $args) use ($app) {
        if ($request->isOptions()) {
            return $response->withJson(["login" => "OPTIONS"], 200  )->withHeader('Access-Control-Allow-Origin', '*');
        }
        // $res = $response;
        // try {
        //     $command = 'select name, password from users where username = :username';
        //     $query = $this->db->prepare($command);
        //     $query->execute(["username" => $request->getParsedBody()["username"]]);
        //     $u = $query->fetch($this->db::FETCH_ASSOC);

        //     if (!$u["password"]) { // username not found
        //         $result =  ["success" => false, "message" => "username not found."];
        //         $this->logger->addInfo("Login attempt failed with data atached: ", $request->getParsedBody());
        //     } else if (!password_verify($request->getParsedBody()["password"], $u["password"])) { // wrong password
        //         $result =  ["success" => false, "message" => "wrong password."];
        //     } else { // username and password are OK
        //         $token = bin2hex(random_bytes(64));
        //         $query->execute('UPDATE users SET token = '. $token .' WHERE $username = '. $request->getParsedBody()["username"]);
        //         $user = ["name" => $u["name"], "token" => $token];
        //         $result = ["sucess" => true, "user" => $user];
        //     }

        //     $res = $response->withJson($result, 200);
        // } catch (\Throwable $th) { // error
        //     $msg = ["success" => false, "message" => "database error."];
        //     $res = $response->withJson(var_dump($this->db), 401);
        // }
        $result = $request->getParsedBody();
        if ($request->getParsedBody()["username"] === "hellen@datainlex.tech" || $request->getParsedBody()["username"] === "ruth@datainlex.tech") {
            if ($request->getParsedBody()["password"] === "lalunadevalencia.2019@") {
                $token = bin2hex(random_bytes(64));
                $user = ["name" => "Helena", "token" => $token];
                 $result = ["sucess" => true, "user" => $user];
            }
        }
          $res = $response->withJson($result)->withHeader('Content-type', 'application/json; charset=UTF8');
          return $res;
    });

});

$app->get('/assets/[{file}]', function (Request $request, Response $response, array $args) {
    $file = $args['file'];
    if (file_exists("./statics/assets/".$file)) {
    $this->logger->addInfo("User get existent file at route /assets/$file");
    return $response->write(file_get_contents("./statics/assets/".$file));
    } else {
        $this->logger->addInfo("User accessed inexistent route /assets/$file");
        $msg = ["success" => false, "message" => "resource unavailable."];
        return $response->withJson($msg, 404);
    }
});


// every route not defined before will be ignored by this and point to static route /
$app->group('/', function () use ($app) {
    $app->get('[{route}]', function(Request $request, Response $response) {
        if (file_exists('./statics/' . $request->getAttribute('route'))) {
            return $response->write(file_get_contents("./statics/".$request->getAttribute('route')));
        } else {
            return $response->getBody()->write(file_get_contents("./statics/index.html"));
        }
    });
});

$app->group('/api', function () {
    // Due to the behaviour of browsers when sending PUT or DELETE request, you must add the OPTIONS method. Read about preflight.
    $this->map(['PUT', 'OPTIONS'], '/{user_id:[0-9]+}', function ($request, $response, $arguments) {
        // Your code here...
    });
});

$app->run();
