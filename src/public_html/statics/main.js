(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _archives_organizer_organizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archives/organizer/organizer.component */ "./src/app/archives/organizer/organizer.component.ts");
/* harmony import */ var _core_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/users/users.component */ "./src/app/core/users/users.component.ts");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");






var routes = [
    {
        path: 'archives',
        component: _archives_organizer_organizer_component__WEBPACK_IMPORTED_MODULE_3__["OrganizerComponent"]
    },
    {
        path: 'users',
        component: _core_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]
    },
    {
        path: 'login',
        component: _core_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'logout',
        component: _core_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DATAinLex';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            preserveWhitespaces: true,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _archives_file_explorer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archives/file-explorer.module */ "./src/app/archives/file-explorer.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var simple_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! simple-pdf-viewer */ "./node_modules/simple-pdf-viewer/esm5/simple-pdf-viewer.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_material_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var _core_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/users/users.component */ "./src/app/core/users/users.component.ts");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _core_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
                _core_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                simple_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__["SimplePdfViewerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _archives_file_explorer_module__WEBPACK_IMPORTED_MODULE_5__["FileExplorerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _core_material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]
            ],
            providers: [_services_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/archives/file-explorer.module.ts":
/*!**************************************************!*\
  !*** ./src/app/archives/file-explorer.module.ts ***!
  \**************************************************/
/*! exports provided: FileExplorerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExplorerModule", function() { return FileExplorerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-explorer/file-explorer.component */ "./src/app/archives/file-explorer/file-explorer.component.ts");
/* harmony import */ var _modals_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/rename-dialog/rename-dialog.component */ "./src/app/archives/modals/rename-dialog/rename-dialog.component.ts");
/* harmony import */ var _modals_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/new-folder-dialog/new-folder-dialog.component */ "./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var simple_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! simple-pdf-viewer */ "./node_modules/simple-pdf-viewer/esm5/simple-pdf-viewer.js");
/* harmony import */ var _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organizer/organizer.component */ "./src/app/archives/organizer/organizer.component.ts");
/* harmony import */ var _core_material_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/material/material.module */ "./src/app/core/material/material.module.ts");













var FileExplorerModule = /** @class */ (function () {
    function FileExplorerModule() {
    }
    FileExplorerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_6__["FileExplorerComponent"], _modals_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RenameDialogComponent"], _modals_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NewFolderDialogComponent"], _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_11__["OrganizerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                simple_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__["SimplePdfViewerModule"],
                _core_material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]
            ],
            exports: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_6__["FileExplorerComponent"]],
            entryComponents: [_modals_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NewFolderDialogComponent"], _modals_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RenameDialogComponent"]]
        })
    ], FileExplorerModule);
    return FileExplorerModule;
}());



/***/ }),

/***/ "./src/app/archives/file-explorer/file-explorer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/archives/file-explorer/file-explorer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdmVzL2ZpbGUtZXhwbG9yZXIvZmlsZS1leHBsb3Jlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/archives/file-explorer/file-explorer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/archives/file-explorer/file-explorer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n    <span>\n        <fa-icon class=\"\" [icon]=\"faBalanceScale\"></fa-icon> <b> Datai&#414;</b>Lex\n    </span>\n        <span class=\"spacer\"></span>\n        <p style=\"font-size:12px;padding-top:10px\">\n            <mat-form-field appearance=\"standard\">\n                <mat-label>Buscar arquivos</mat-label>\n                <input matInput placeholder=\"\">\n              </mat-form-field>\n        </p>\n        <button mat-button><mat-icon>search</mat-icon></button>\n        <!--<button mat-button><mat-icon>file_copy</mat-icon> Arquivos </button>\n        <button mat-button> <mat-icon>help_outline</mat-icon> Ajuda</button>-->\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item routerLink=\"['/logout'\">\n        <mat-icon color=\"accent\">clear</mat-icon>\n        <span>SAIR</span>\n      </button>\n      <button mat-menu-item disabled>\n        <mat-icon>notifications</mat-icon>\n        <span>Alertas</span>\n      </button>\n      <button mat-menu-item>\n        <mat-icon>help_outline</mat-icon>\n        <span>Ajuda</span>\n      </button>\n    </mat-menu>\n     </mat-toolbar-row>\n     </mat-toolbar>\n     \n<mat-toolbar>\n  <mat-icon *ngIf=\"canNavigateUp\" class=\"pointer\" (click)=\"navigateUp()\">arrow_back</mat-icon>\n  <span style=\"margin-left: 8px;\"> {{ path || 'Arquivos /' }}{{ selected }} </span>\n  <span class=\"spacer\"></span>\n  <fa-icon class=\"pointer file-or-folder file-or-folder-icon\" (click)=\"openNewFolderDialog()\" [icon]=\"faFolderPlus\"></fa-icon>\n</mat-toolbar>\n\n<div class=\"list-container mat-elevation-z8\" [ngClass]=\"{'visible': showFile}\">\n  <mat-table #table [dataSource]=\"fileElements\">\n    <ng-container matColumnDef=\"list\">\n      <mat-cell\n        *matCellDef=\"let element\"\n        flexLayout=\"column\"\n        (click)=\"navigate(element)\"\n        (contextmenu)=\"openMenu($event, menuTrigger)\"\n        class=\"file-or-folder\"\n      >\n      <span [matMenuTriggerFor]=\"rootMenu\" [matMenuTriggerData]=\"{element: element}\" #menuTrigger=\"matMenuTrigger\"></span>\n        <span\n          [matMenuTriggerFor]=\"rootMenu\"\n          [matMenuTriggerData]=\"{element: element}\"\n          #menuTrigger=\"matMenuTrigger\">\n        </span>\n        <fa-icon class=\"file-or-folder-icon pointer\" [icon]=\"faFolder\" *ngIf=\"element.isFolder\"></fa-icon>\n        <fa-icon class=\"file-or-folder-icon pointer\" [icon]=\"faFilePDF\" *ngIf=\"!element.isFolder\" (click)=\"openDocument('assets/'+element.file, element.name)\"></fa-icon>\n        <span class=\"pointer\" *ngIf=\"element.isFolder\">{{element.name}}</span>\n        <span class=\"pointer\" *ngIf=\"!element.isFolder\" (click)=\"openDocument(element.file, element.name)\">{{element.name}}</span>\n    </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"class=\"file-or-folder\">\n          <span class=\"spacer\"></span>\n        <a  type=\"button\" (click)=\"deleteElement(element)\">\n          <mat-icon class=\"pointer icon\" color=\"warn\">delete</mat-icon>\n        </a>\n      </mat-cell>\n    </ng-container>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n\n<section id=\"viewer\" [ngClass]=\"{'visible': showFile}\" style=\"height: 100%; margin-top:10px; padding-bottom: 30px;\">\n    <p *ngIf=\"pdfViewer.getNumberOfPages() === 1\">\n        <button color=\"warn\" mat-mini-fab (click)=\"fechar()\" style=\"float:right;margin-right: 20px;font-size:30px;\">&times;</button>\n      </p>\n  <p *ngIf=\"pdfViewer.getNumberOfPages() > 1\">\n    Página: {{ pdfViewer.getCurrentPage() }} de {{ pdfViewer.getNumberOfPages() }}\n    <button color=\"primary\" mat-raised-button (click)=\"pdfViewer.prevPage()\" [disabled]=\"pdfViewer.getCurrentPage() === 1\">Anterior</button>&nbsp;\n    <button color=\"primary\" mat-raised-button (click)=\"pdfViewer.nextPage()\" [disabled]=\"pdfViewer.getCurrentPage() === pdfViewer.getNumberOfPages()\">Próxima</button>&nbsp;\n    <button color=\"warn\" mat-mini-fab (click)=\"fechar()\" style=\"float:right;margin-right: 20px;font-size:30px;\">&times;</button>\n  </p>\n  <simple-pdf-viewer #pdfViewer [src]=\"\"></simple-pdf-viewer>\n</section>\n\n<mat-menu #rootMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <ng-template matMenuContent let-element=\"element\">\n    <button mat-menu-item\n    [matMenuTriggerFor]=\"moveToMenu\"\n    [matMenuTriggerData]=\"{self: element}\">\n    <mat-icon>open_with</mat-icon>\n    <span>Mover para</span>\n  </button>\n  <button mat-menu-item (click)=\"openRenameDialog(element)\">\n    <mat-icon>edit</mat-icon>\n    <span>Renomear</span>\n  </button>\n  <button mat-menu-item (click)=\"deleteElement(element)\">\n    <mat-icon color=\"warn\">delete</mat-icon>\n      <span>Apagar</span>\n  </button>\n  </ng-template>\n</mat-menu>\n\n<mat-menu #moveToMenu=\"matMenu\">\n  <ng-template matMenuContent let-self=\"self\">\n    <ng-container *ngFor=\"let element of fileElements\">\n      <button\n        *ngIf=\"element.isFolder && element.id !== self.id\"\n        mat-menu-item\n        (click)=\"moveElement(self, element)\">\n        {{element.name}}\n      </button>\n    </ng-container>\n  </ng-template>\n</mat-menu>\n\n\n"

/***/ }),

/***/ "./src/app/archives/file-explorer/file-explorer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/archives/file-explorer/file-explorer.component.ts ***!
  \*******************************************************************/
/*! exports provided: FileExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExplorerComponent", function() { return FileExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _modals_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/new-folder-dialog/new-folder-dialog.component */ "./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.ts");
/* harmony import */ var _modals_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/rename-dialog/rename-dialog.component */ "./src/app/archives/modals/rename-dialog/rename-dialog.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var simple_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simple-pdf-viewer */ "./node_modules/simple-pdf-viewer/esm5/simple-pdf-viewer.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");









var FileExplorerComponent = /** @class */ (function () {
    function FileExplorerComponent(dialog, router, authenticationService) {
        this.dialog = dialog;
        this.router = router;
        this.authenticationService = authenticationService;
        this.faFolder = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFolder"];
        this.faFolderPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFolderPlus"];
        this.faFilePDF = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"];
        this.faBalanceScale = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBalanceScale"];
        this.selected = '';
        this.nomeArquivo = '';
        this.showFile = false;
        this.displayedColumns = ['list', 'actions'];
        this.folderAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elementRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elementRenamed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elementMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.navigatedDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.navigatedUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.bookmarks = [];
    }
    FileExplorerComponent.prototype.deleteElement = function (element) {
        this.elementRemoved.emit(element);
    };
    FileExplorerComponent.prototype.navigate = function (element) {
        if (element.isFolder) {
            this.showFile = false;
            this.navigatedDown.emit(element);
            console.log('elemento: ', element);
        }
    };
    FileExplorerComponent.prototype.navigateUp = function () {
        this.showFile = false;
        this.navigatedUp.emit();
    };
    FileExplorerComponent.prototype.moveElement = function (element, moveTo) {
        this.elementMoved.emit({ element: element, moveTo: moveTo });
    };
    FileExplorerComponent.prototype.openNewFolderDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NewFolderDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.folderAdded.emit({ name: res });
            }
        });
    };
    FileExplorerComponent.prototype.openRenameDialog = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RenameDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                element.name = res;
                _this.elementRenamed.emit(element);
            }
        });
    };
    FileExplorerComponent.prototype.openMenu = function (event, viewChild) {
        event.preventDefault();
        viewChild.openMenu();
    };
    FileExplorerComponent.prototype.openDocument = function (document, name) {
        this.selected = name;
        this.showFile = true;
        this.pdfViewer.openUrl('assets/files/' + document);
    };
    // how to create bookmark
    FileExplorerComponent.prototype.createBookmark = function () {
        var _this = this;
        this.pdfViewer.createBookmark().then(function (bookmark) {
            if (bookmark) {
                _this.bookmarks.push(bookmark);
            }
        });
    };
    FileExplorerComponent.prototype.fechar = function () {
        this.selected = '';
        this.showFile = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FileExplorerComponent.prototype, "fileElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileExplorerComponent.prototype, "canNavigateUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileExplorerComponent.prototype, "path", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileExplorerComponent.prototype, "folderAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileExplorerComponent.prototype, "elementRemoved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileExplorerComponent.prototype, "elementRenamed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileExplorerComponent.prototype, "elementMoved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileExplorerComponent.prototype, "navigatedDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileExplorerComponent.prototype, "navigatedUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(simple_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["SimplePdfViewerComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", simple_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["SimplePdfViewerComponent"])
    ], FileExplorerComponent.prototype, "pdfViewer", void 0);
    FileExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-explorer',
            template: __webpack_require__(/*! ./file-explorer.component.html */ "./src/app/archives/file-explorer/file-explorer.component.html"),
            styles: [__webpack_require__(/*! ./file-explorer.component.css */ "./src/app/archives/file-explorer/file-explorer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
    ], FileExplorerComponent);
    return FileExplorerComponent;
}());



/***/ }),

/***/ "./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdmVzL21vZGFscy9uZXctZm9sZGVyLWRpYWxvZy9uZXctZm9sZGVyLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Criar uma nova pasta</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Nome da pasta\" [(ngModel)]=\"folderName\" />\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>\n    Cancelar\n  </button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">\n    OK\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewFolderDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFolderDialogComponent", function() { return NewFolderDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewFolderDialogComponent = /** @class */ (function () {
    function NewFolderDialogComponent() {
    }
    NewFolderDialogComponent.prototype.ngOnInit = function () {
    };
    NewFolderDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-folder-dialog',
            template: __webpack_require__(/*! ./new-folder-dialog.component.html */ "./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-folder-dialog.component.css */ "./src/app/archives/modals/new-folder-dialog/new-folder-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewFolderDialogComponent);
    return NewFolderDialogComponent;
}());



/***/ }),

/***/ "./src/app/archives/modals/rename-dialog/rename-dialog.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/archives/modals/rename-dialog/rename-dialog.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdmVzL21vZGFscy9yZW5hbWUtZGlhbG9nL3JlbmFtZS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/archives/modals/rename-dialog/rename-dialog.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/archives/modals/rename-dialog/rename-dialog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Renomear uma pasta</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Nome da pasta\" [(ngModel)]=\"folderName\" />\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>\n    Cancelar\n  </button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">\n    OK\n  </button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/archives/modals/rename-dialog/rename-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/archives/modals/rename-dialog/rename-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: RenameDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameDialogComponent", function() { return RenameDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RenameDialogComponent = /** @class */ (function () {
    function RenameDialogComponent() {
    }
    RenameDialogComponent.prototype.ngOnInit = function () {
    };
    RenameDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rename-dialog',
            template: __webpack_require__(/*! ./rename-dialog.component.html */ "./src/app/archives/modals/rename-dialog/rename-dialog.component.html"),
            styles: [__webpack_require__(/*! ./rename-dialog.component.css */ "./src/app/archives/modals/rename-dialog/rename-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RenameDialogComponent);
    return RenameDialogComponent;
}());



/***/ }),

/***/ "./src/app/archives/organizer/organizer.component.css":
/*!************************************************************!*\
  !*** ./src/app/archives/organizer/organizer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdmVzL29yZ2FuaXplci9vcmdhbml6ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/archives/organizer/organizer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/archives/organizer/organizer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"box-sizing: border-box;\">\n  <mat-card style=\"height: 100%; box-sizing: border-box; padding: 0;\">\n    <app-file-explorer [fileElements]=\"fileElements | async\" [path]=\"currentPath\" [canNavigateUp]=\"canNavigateUp\"\n      (folderAdded)=\"addFolder($event)\" (elementRemoved)=\"removeElement($event)\" (navigatedDown)=\"navigateToFolder($event)\"\n      (navigatedUp)=\"navigateUp()\" (elementRenamed)=\"renameElement($event)\" (elementMoved)=\"moveElement($event)\"\n      style=\"overflow:hidden !important\">\n    </app-file-explorer>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/archives/organizer/organizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/archives/organizer/organizer.component.ts ***!
  \***********************************************************/
/*! exports provided: OrganizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerComponent", function() { return OrganizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");



var OrganizerComponent = /** @class */ (function () {
    function OrganizerComponent(fileService) {
        this.fileService = fileService;
        this.title = 'DATAinLex';
        this.canNavigateUp = false;
    }
    OrganizerComponent.prototype.ngOnInit = function () {
        var folderA = this.fileService.add({ name: 'Processo 001-2019', isFolder: true, parent: 'root' });
        this.fileService.add({ name: '1.1.- Negativamente a causa compleja.pdf', isFolder: false, parent: 'root', file: '01.pdf' });
        this.fileService.add({ name: 'Processo 002-2019', isFolder: true, parent: 'root' });
        this.fileService.add({ name: '1.3.- Recurso de apelación contra Auto de 26 de mayo.pdf', isFolder: false, parent: 'root', file: '02.pdf' });
        this.fileService.add({ name: '1.5.- Recurso de reforma y sub. de apelación contra auto de 30 de mayo.pdf', isFolder: false, parent: folderA.id, file: '03.pdf' });
        this.fileService.add({ name: '1.6.- Pidiendo notificación auto incoación dil. prev. y nulidad de lo actuado.pdf', isFolder: false, parent: folderA.id, file: '04.pdf' });
        this.updateFileElementQuery();
    };
    OrganizerComponent.prototype.updateFileElementQuery = function () {
        this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
    };
    OrganizerComponent.prototype.addFolder = function (folder) {
        this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
        this.updateFileElementQuery();
    };
    OrganizerComponent.prototype.removeElement = function (element) {
        this.fileService.delete(element.id);
        this.updateFileElementQuery();
    };
    OrganizerComponent.prototype.moveElement = function (event) {
        this.fileService.update(event.element.id, { parent: event.moveTo.id });
        this.updateFileElementQuery();
    };
    OrganizerComponent.prototype.renameElement = function (element) {
        this.fileService.update(element.id, { name: element.name });
        this.updateFileElementQuery();
    };
    OrganizerComponent.prototype.pushToPath = function (path, folderName) {
        var p = path ? path : '';
        p += folderName + " /";
        return p;
    };
    OrganizerComponent.prototype.popFromPath = function (path) {
        var p = path ? path : '';
        var split = p.split('/');
        split.splice(split.length - 2, 1);
        p = split.join('/');
        return p;
    };
    OrganizerComponent.prototype.navigateUp = function () {
        if (this.currentRoot && this.currentRoot.parent === 'root') {
            this.currentRoot = null;
            this.canNavigateUp = false;
            this.updateFileElementQuery();
        }
        else {
            this.currentRoot = this.fileService.get(this.currentRoot.parent);
            this.updateFileElementQuery();
        }
        this.currentPath = this.popFromPath(this.currentPath);
    };
    OrganizerComponent.prototype.navigateToFolder = function (element) {
        this.currentRoot = element;
        this.updateFileElementQuery();
        this.currentPath = this.pushToPath(this.currentPath, element.name);
        this.canNavigateUp = true;
    };
    OrganizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organizer',
            template: __webpack_require__(/*! ./organizer.component.html */ "./src/app/archives/organizer/organizer.component.html"),
            styles: [__webpack_require__(/*! ./organizer.component.css */ "./src/app/archives/organizer/organizer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
    ], OrganizerComponent);
    return OrganizerComponent;
}());



/***/ }),

/***/ "./src/app/core/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/core/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"center center\" layout-fill>\n  <div id=\"martillo\" flex style=\"height: -webkit-calc(100vh - 8em)\"><mat-card class=\"example-card\">\n        <mat-card-header>\n          <mat-card-title>\n              <h3><fa-icon class=\"\" [icon]=\"faBalanceScale\"></fa-icon> <b> Datai&#414;</b>Lex</h3>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content layout-align=\"center center\">\n          <form class=\"example-form\" #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n                  <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"E-mail\" [(ngModel)]=\"username\" name=\"username\" required>\n                  </mat-form-field>\n\n                  <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Senha\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n              </mat-form-field>\n          </form>\n        </mat-card-content>\n        <mat-card-actions style=\"text-align:center;padding:10px;\">\n          <button mat-raised-button (click)=\"login(f)\" color=\"primary\" type=\"submit\" [disabled]=\"!f.form.valid\">\n              <mat-icon>power_settings_new</mat-icon> ENTRAR\n          </button>\n        </mat-card-actions>\n      </mat-card></div>\n    \n</div>\n\n  "

/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.error = null;
        this.returnUrl = '';
        this.faBalanceScale = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBalanceScale"];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if ('/logout' === this.router.url) {
            this.logout();
        }
        else {
            console.log();
        }
    };
    LoginComponent.prototype.login = function (f) {
        var _this = this;
        this.submitted = true;
        if (f.invalid) {
            return null;
        }
        this.authenticationService.login(f.value.username, f.value.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (user) {
            if (!user.token) {
                console.log('Nível de acesso não autorizado.', user);
                _this.error = 'Nível de acesso não autorizado.';
            }
            else {
                console.log('Nível de acesso autorizado.', user);
                _this.router.navigate(['/archives']);
            }
        }, function (error) {
            _this.error = 'Verifique as informações e tente novamente.';
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/archives']);
        console.log('rota de logout');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/material/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/core/users/users.component.css":
/*!************************************************!*\
  !*** ./src/app/core/users/users.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/users/users.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/users/users.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/core/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/core/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);




var FileService = /** @class */ (function () {
    function FileService() {
        this.map = new Map();
    }
    FileService.prototype.add = function (fileElement) {
        fileElement.id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
        this.map.set(fileElement.id, this.clone(fileElement));
        return fileElement;
    };
    FileService.prototype.delete = function (id) {
        this.map.delete(id);
    };
    FileService.prototype.update = function (id, update) {
        var element = this.map.get(id);
        element = Object.assign(element, update);
        this.map.set(element.id, element);
    };
    FileService.prototype.queryInFolder = function (folderId) {
        var _this = this;
        var result = [];
        this.map.forEach(function (element) {
            if (element.parent === folderId) {
                result.push(_this.clone(element));
            }
        });
        if (!this.querySubject) {
            this.querySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](result);
        }
        else {
            this.querySubject.next(result);
        }
        return this.querySubject.asObservable();
    };
    FileService.prototype.get = function (id) {
        return this.map.get(id);
    };
    FileService.prototype.clone = function (element) {
        return JSON.parse(JSON.stringify(element));
    };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/auth", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (success) {
            if (success.user && success.user.token) {
                localStorage.setItem('currentUser', JSON.stringify(success.user));
                _this.currentUserSubject.next(success.user);
            }
            else {
                return false;
            }
            return success.user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                localStorage.removeItem('currentUser');
                return [2 /*return*/, true];
            });
        });
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'http://localhost/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\www\datainlex\front\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map