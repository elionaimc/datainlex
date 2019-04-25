<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

// basics configuration
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

// database configs
$config['db']['host']   = 'localhost';
$config['db']['user']   = 'root';
$config['db']['pass']   = '12345678';
$config['db']['dbname'] = 'datainle_main';

// default Slim App without configs
// $app = new \Slim\App;

// Slim App with configs defined as settings variable
$app = new \Slim\App(['settings' => $config]);
$container = $app->getContainer(); // loads dependency through Dependency Injection Container

$container['logger'] = function($c) {
    $logger = new \Monolog\Logger('lex_logger');
    $file_handler = new \Monolog\Handler\StreamHandler('../logs/app.log');
    $logger->pushHandler($file_handler);
    return $logger;
};

$container['db'] = function ($c) {
    $db = $c['settings']['db'];
    $pdo = new PDO('mysql:host=' . $db['host'] . ';dbname=' . $db['dbname'],
        $db['user'], $db['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->get('/archives', function (Request $request, Response $response, array $args) {
    $name = '<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Datainlex</title>
      <base href="/">
    
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="favicon.ico">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="styles.6f0f18aac473cc78ac43.css"></head>
    <body>
      <app-root></app-root>
    <script type="text/javascript" src="runtime.356473f8baee14a45729.js"></script><script type="text/javascript" src="es2015-polyfills.d6d94601d9e615678f11.js" nomodule></script><script type="text/javascript" src="polyfills.0fe533ee82f2c1e93238.js"></script><script type="text/javascript" src="main.258b95af22cc7a462ce4.js"></script></body>
    </html>';
    $response->getBody()->write($name);
    //$this->logger->addInfo('Acessando o módulo Angular/Archives', array('username' => 'elionaimc'));

    return $response;
});

$app->get('/', function (Request $request, Response $response, array $args) {
    $name = '<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Datainlex</title>
      <base href="/">
    
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="favicon.ico">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="styles.6f0f18aac473cc78ac43.css"></head>
    <body>
      <app-root></app-root>
    <script type="text/javascript" src="runtime.356473f8baee14a45729.js"></script><script type="text/javascript" src="es2015-polyfills.d6d94601d9e615678f11.js" nomodule></script><script type="text/javascript" src="polyfills.0fe533ee82f2c1e93238.js"></script><script type="text/javascript" src="main.258b95af22cc7a462ce4.js"></script></body>
    </html>';
    $response->getBody()->write($name);
    //$this->logger->addInfo('Acessando o módulo Angular/Archives', array('username' => 'elionaimc'));

    return $response;
});

//$app->redirect('/', '/archives', 301);

$app->get('/api/users/{password}', function (Request $request, Response $response, array $args) {
    $command = "select * from users";
    $query = $this->db->prepare($command);
    $query->execute();
    $result = $query->fetchAll($this->db::FETCH_ASSOC);

    //Content Type JSON Cross Domain JSON
    $newResponse = $response->withHeader('Content-type', 'application/json')
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    

    return $args['password'] === 'lalunadevalencia.2019@' ? $response->withJson($result) : $response;
});

$app->get('/api/documentos/{password}', function (Request $request, Response $response, array $args) {
    $command = "select * from documentos";
    $query = $this->db->prepare($command);
    $query->execute();
    $result = $query->fetchAll($this->db::FETCH_ASSOC);

    //Content Type JSON Cross Domain JSON
    $newResponse = $response->withHeader('Content-type', 'application/json')
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    

    return $args['password'] === 'lalunadevalencia.2019@' ? $response->withJson($result) : $response;
});




$app->run();
