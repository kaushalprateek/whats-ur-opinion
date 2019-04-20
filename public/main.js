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

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\"></div>\r\n<div class=\"container\">\r\n  <h3>Create Survey</h3>\r\n  <div class=\"row\">\r\n    <div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">MCQ Survey Template</h5>\r\n        <p class=\"card-text\">\r\n          Product feedback\r\n        </p>\r\n        <a href=\"#\" class=\"btn btn-primary\"> C R E A T E</a>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Agree/Disagre Survey Template</h5>\r\n        <p class=\"card-text\">\r\n          Sample survey 2!!\r\n        </p>\r\n        <a href=\"#\" class=\"btn btn-primary\">C R E A T E</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contact-details/contact-details.component */ "./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contact-delete/contact-delete.component */ "./src/app/contacts/contact-delete/contact-delete.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _survey_app_survey_app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./survey-app/survey-app.component */ "./src/app/survey-app/survey-app.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");

// Modules


// Components














var routes = [
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: "Home" } },
    { path: "about", component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { title: "About" } },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"], data: { title: "Admin" }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    {
        path: "User",
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"],
        data: { title: "User" },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "Surveyapp",
        component: _survey_app_survey_app_component__WEBPACK_IMPORTED_MODULE_14__["SurveyAppComponent"],
        data: { title: "SurveyApp" }
    },
    {
        path: "test",
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_15__["TestComponent"],
        data: { title: "SurveyApp" }
    },
    {
        path: "contact",
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        data: { title: "Contact" },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "contact/contact-list",
        component: _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"],
        data: { title: "Contact List" },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "contact/contact-list/add",
        component: _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailsComponent"],
        data: { title: "Add Contact" },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "contact/contact-list/edit/:id",
        component: _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailsComponent"],
        data: { title: "Edit Contact" },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "contact/contact-list/delete/:id",
        component: _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_9__["ContactDeleteComponent"],
        data: { title: "Add Contact" },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "register",
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
        data: { title: "Register" }
    },
    { path: "login", component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], data: { title: "Register" } },
    { path: "logout", redirectTo: "/login", pathMatch: "full" },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
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

module.exports = "<app-header></app-header>\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>\r\n"

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
        this.title = 'COMP308-W2019-Lesson8b';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contacts/contact-details/contact-details.component */ "./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contacts/contact-delete/contact-delete.component */ "./src/app/contacts/contact-delete/contact-delete.component.ts");
/* harmony import */ var _test_survey_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./test/survey.component */ "./src/app/test/survey.component.ts");
/* harmony import */ var _test_survey_creator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./test/survey.creator.component */ "./src/app/test/survey.creator.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _survey_app_survey_app_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./survey-app/survey-app.component */ "./src/app/survey-app/survey-app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");

// Modules





// Components















// Services


// Route Guards





function jwtTokenGetter() {
    return localStorage.getItem("id_token");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__["BasePageComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__["ContactListComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_17__["ContactDetailsComponent"],
                _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_18__["ContactDeleteComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_27__["UserComponent"],
                _survey_app_survey_app_component__WEBPACK_IMPORTED_MODULE_26__["SurveyAppComponent"],
                _test_survey_component__WEBPACK_IMPORTED_MODULE_19__["SurveyComponent"],
                _test_survey_creator_component__WEBPACK_IMPORTED_MODULE_20__["SurveyCreatorComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_25__["TestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__["FlashMessagesModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter
                    }
                })
            ],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__["FlashMessagesService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtZGVsZXRlL2NvbnRhY3QtZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDeleteComponent", function() { return ContactDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/contact */ "./src/app/models/contact.ts");






var ContactDeleteComponent = /** @class */ (function () {
    function ContactDeleteComponent(activatedRoute, flashMessage, contactListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.contactListService = contactListService;
        this.router = router;
    }
    ContactDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.contact = new src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
        });
        this.deleteContact(this.contact);
    };
    ContactDeleteComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.contactListService.deleteContact(contact).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 3000 });
                _this.router.navigate(['/contact/contact-list']);
            }
            else {
                _this.flashMessage.show('Delete Contact Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/contact/contact-list']);
            }
        });
    };
    ContactDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-delete',
            template: __webpack_require__(/*! ./contact-delete.component.html */ "./src/app/contacts/contact-delete/contact-delete.component.html"),
            styles: [__webpack_require__(/*! ./contact-delete.component.css */ "./src/app/contacts/contact-delete/contact-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactDeleteComponent);
    return ContactDeleteComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Content for the Details Page -->\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-3 col-md-6\">\n          <h1>{{ title }}</h1>\n\n          <form class=\"form\" (submit)=\"onDetailsPageSubmit()\">\n              <div class=\"form-group\">\n                  <label for=\"FirstNameTextField\">First Name</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"FirstNameTextField\"\n                  placeholder=\"Enter First Name\"\n                  name=\"firstName\"\n                  [(ngModel)]=\"contact.firstName\"\n                  value=\"{{ contact.firstName }}\"\n                  required>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"LastNameTextField\">Last Name</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"LastNameTextField\"\n                  placeholder=\"Enter Last Name\"\n                  name=\"lastName\"\n                  [(ngModel)]=\"contact.lastName\"\n                  value=\"{{ contact.lastName }}\"\n                  required>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"AgeTextField\">Age</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"AgeTextField\"\n                  placeholder=\"Enter Age\"\n                  name=\"age\"\n                  [(ngModel)]=\"contact.age\"\n                  value=\"{{ contact.age }}\"\n                  required>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"fas fa-edit\"></i> {{ title }}</button>\n              <a routerLink=\"/contact/contact-list\" class=\"btn btn-warning\">\n                  <i class=\"fas fa-undo\"></i> Cancel</a>\n          </form>\n\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/contact */ "./src/app/models/contact.ts");






var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent(activatedRoute, flashMessage, contactListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.contactListService = contactListService;
        this.router = router;
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.contact = new src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
        });
        if (this.title === "Edit Contact") {
            this.getContact(this.contact);
        }
    };
    ContactDetailsComponent.prototype.getContact = function (contact) {
        var _this = this;
        this.contactListService.getContact(contact).subscribe(function (data) {
            _this.contact = data.contact;
        });
    };
    ContactDetailsComponent.prototype.onDetailsPageSubmit = function () {
        var _this = this;
        switch (this.title) {
            case "Add Contact":
                this.contactListService.addContact(this.contact).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, {
                            cssClass: "alert-success",
                            timeOut: 3000
                        });
                        _this.router.navigate(["/contact/contact-list"]);
                    }
                    else {
                        _this.flashMessage.show("Add Contact Failed", {
                            cssClass: "alert-danger",
                            timeOut: 3000
                        });
                        _this.router.navigate(["/contact/contact-list"]);
                    }
                });
                break;
            case "Edit Contact":
                this.contactListService.editContact(this.contact).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, {
                            cssClass: "alert-success",
                            timeOut: 3000
                        });
                        _this.router.navigate(["/contact/contact-list"]);
                    }
                    else {
                        _this.flashMessage.show("Edit Contact Failed", {
                            cssClass: "alert-danger",
                            timeOut: 3000
                        });
                        _this.router.navigate(["/contact/contact-list"]);
                    }
                });
                break;
        }
    };
    ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-contact-details",
            template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/contacts/contact-details/contact-details.component.html"),
            styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/contacts/contact-details/contact-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-offset-3 col-md-6\">\n      <h1>Contact List</h1>\n      <a\n        class=\"btn btn-primary\"\n        routerLink=\"/contact/contact-list/add\"\n        role=\"button\"\n      >\n        <i class=\"fas fa-plus-circle\"></i> Add a Survey</a\n      >\n      <br />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactListService, flashMessage, router) {
        this.contactListService = contactListService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contacts = new Array();
        this.displayContactList();
    };
    ContactListComponent.prototype.onDeleteClick = function () {
        if (!confirm('Are You Sure?')) {
            this.router.navigate(['/contact/contact-list']);
        }
    };
    ContactListComponent.prototype.displayContactList = function () {
        var _this = this;
        this.contactListService.getList().subscribe(function (data) {
            if (data.success) {
                _this.contacts = data.contactList;
            }
            else {
                _this.flashMessage.show('User must be logged-in', { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
    };
    ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contacts/contact-list/contact-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/contact.ts":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1></h1>\r\n<div>\r\n  <link\r\n    href=\"https://surveyjs.azureedge.net/1.0.81/survey.css\"\r\n    type=\"text/css\"\r\n    rel=\"stylesheet\"\r\n  />\r\n\r\n  <survey [json]=\"json\" (submitSurvey)=\"sendData($event)\"></survey>\r\n</div>\r\n\r\n<div class=\"container\" ng-controller=\"fetchdata\">\r\n  <pre id=\"json\"></pre>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");



var AboutComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AboutComponent, _super);
    function AboutComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = "app works!";
        _this.json = {
            title: "Product Feedback Survey Example",
            showProgressBar: "top",
            pages: [
                {
                    elements: [
                        {
                            type: "radiogroup",
                            name: "Choose below food items you like?",
                            renderAs: "box1",
                            choices: ["Salmon", "Talapia", "Singhns"]
                        },
                        {
                            type: "radiogroup",
                            name: "How would you rate us?",
                            renderAs: "box2",
                            choices: ["Good", "Bad", "Excellent"]
                        },
                        {
                            type: "radiogroup",
                            name: "Rate our customer service:",
                            renderAs: "box3",
                            choices: ["ok!!", "Good!!", "Excellent!!"]
                        },
                        {
                            type: "radiogroup",
                            name: "Rate us out of 3?",
                            renderAs: "box4",
                            choices: ["One", "Two", "Three"]
                        },
                        {
                            type: "radiogroup",
                            name: "Would you like to visit again?",
                            renderAs: "box5",
                            choices: ["Yes", "No"]
                        }
                    ]
                }
            ]
        };
        return _this;
    }
    AboutComponent.prototype.onSurveySaved = function (survey) {
        this.json = survey;
    };
    AboutComponent.prototype.sendData = function (result) {
        console.log(result);
        alert("The results are:" + JSON.stringify(result));
        document.getElementById("json").innerHTML = JSON.stringify(result, undefined, 6);
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-about",
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn()\" class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"card\">\r\n        <h5 class=\"card-header alert-success\">Secure</h5>\r\n\r\n          <a routerLink=\"\" class=\"btn btn-primary\">\r\n            <i class=\"fas fa-users fa-lg\"></i> Surveys!!!</a>\r\n\r\n          <html>\r\n            <script type=\"text/javascript\"></script>\r\n\r\n            <form method=\"post\" onsubmit=\"return validate(this)\">\r\n              <table>\r\n                <tr>\r\n                  <td valign=\"top\">\r\n                    <div id=\"newlink\">\r\n                      <div class=\"feed\">\r\n                        <div>\r\n                          <label for=\"Question\">Question:</label>\r\n                          <input type=\"text\" id=\"q1\" name=\"feedurl[]\" />\r\n                        </div>\r\n                        <div>\r\n                          <label for=\"Answer1\">Ans1:</label>\r\n                          <input type=\"text\" id=\"a1\" name=\"feedurl[]\" />\r\n                        </div>\r\n                        <div>\r\n                          <label for=\"Answer2\">Ans2:</label>\r\n                          <input type=\"text\" id=\"a2\" name=\"feedurl[]\" />\r\n                        </div>\r\n                        <div>\r\n                          <label for=\"Answer3\">Ans3:</label>\r\n                          <input type=\"text\" id=\"a3\" name=\"feedurl[]\" />\r\n                        </div>\r\n                        <div>\r\n                          <label for=\"Answer4\">Ans4:</label>\r\n                          <input type=\"text\" id=\"a4\" name=\"feedurl[]\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n\r\n              <p>\r\n                <br />\r\n                <input type=\"submit\" name=\"submit1\" />\r\n                <input type=\"reset\" name=\"reset1\" />\r\n              </p>\r\n              <p id=\"addnew\">\r\n                <button (submit)=\"add_feed()\">Add New</button>\r\n              </p>\r\n            </form>\r\n            <!-- Template. This whole data will be added directly to working form above -->\r\n            <div id=\"newlinktpl\" style=\"display:none\">\r\n              <div>\r\n                <label for=\"Question\">Question:</label>\r\n                <input type=\"text\" id=\"q1\" name=\"feedurl[]\" />\r\n              </div>\r\n              <div>\r\n                <label for=\"Answer1\">Ans1:</label>\r\n                <input type=\"text\" id=\"a1\" name=\"feedurl[]\" />\r\n              </div>\r\n              <div>\r\n                <label for=\"Answer2\">Ans2:</label>\r\n                <input type=\"text\" id=\"a2\" name=\"feedurl[]\" />\r\n              </div>\r\n              <div>\r\n                <label for=\"Answer3\">Ans3:</label>\r\n                <input type=\"text\" id=\"a3\" name=\"feedurl[]\" />\r\n              </div>\r\n              <div>\r\n                <label for=\"Answer4\">Ans4:</label>\r\n                <input type=\"text\" id=\"a4\" name=\"feedurl[]\" />\r\n              </div>\r\n            </div>\r\n          </html>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContactComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactComponent, _super);
    function ContactComponent(route, authService) {
        var _this = _super.call(this, route) || this;
        _this.authService = authService;
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.isLoggedIn = function () {
        return this.authService.loggedIn();
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-contact",
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ContactComponent);
    return ContactComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_3__["BasePageComponent"]));

function add_feed() {
    var div1 = document.createElement("div");
    // Get template data
    div1.innerHTML = document.getElementById("newlinktpl").innerHTML;
    // append to our form, so that template data
    //become part of form
    document.getElementById("newlink").appendChild(div1);
}


/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-image: url(\"/assets/img/foot-bridge.jpg\");\r\n  background-color: #8f2424;\r\n  height: 100%;\r\n}\r\n\r\n.row::after {\r\n  content: \"\";\r\n\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n[class*=\"col-\"] {\r\n  float: left;\r\n  padding: 15px;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Lucida Sans\", sans-serif;\r\n  background-image: url(\"/assets/img/foot-bridge.jpg\");\r\n}\r\n\r\n.header {\r\n  background-color: #9933cc;\r\n  color: #ffffff;\r\n  padding: 15px;\r\n}\r\n\r\n.menu ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.menu li {\r\n  padding: 8px;\r\n  margin-bottom: 7px;\r\n  background-color: #33b5e5;\r\n  color: #ffffff;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.menu li:hover {\r\n  background-color: #0099cc;\r\n}\r\n\r\n.aside {\r\n  background-color: #33b5e5;\r\n  padding: 15px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.footer {\r\n  background-color: #0099cc;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  padding: 15px;\r\n}\r\n\r\n/* For mobile phones: */\r\n\r\n[class*=\"col-\"] {\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  /* For tablets: */\r\n  .col-s-1 {\r\n    width: 8.33%;\r\n  }\r\n  .col-s-2 {\r\n    width: 16.66%;\r\n  }\r\n  .col-s-3 {\r\n    width: 25%;\r\n  }\r\n  .col-s-4 {\r\n    width: 33.33%;\r\n  }\r\n  .col-s-5 {\r\n    width: 41.66%;\r\n  }\r\n  .col-s-6 {\r\n    width: 50%;\r\n  }\r\n  .col-s-7 {\r\n    width: 58.33%;\r\n  }\r\n  .col-s-8 {\r\n    width: 66.66%;\r\n  }\r\n  .col-s-9 {\r\n    width: 75%;\r\n  }\r\n  .col-s-10 {\r\n    width: 83.33%;\r\n  }\r\n  .col-s-11 {\r\n    width: 91.66%;\r\n  }\r\n  .col-s-12 {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  /* For desktop: */\r\n  .col-1 {\r\n    width: 8.33%;\r\n  }\r\n  .col-2 {\r\n    width: 16.66%;\r\n  }\r\n  .col-3 {\r\n    width: 25%;\r\n  }\r\n  .col-4 {\r\n    width: 33.33%;\r\n  }\r\n  .col-5 {\r\n    width: 41.66%;\r\n  }\r\n  .col-6 {\r\n    width: 50%;\r\n  }\r\n  .col-7 {\r\n    width: 58.33%;\r\n  }\r\n  .col-8 {\r\n    width: 66.66%;\r\n  }\r\n  .col-9 {\r\n    width: 75%;\r\n  }\r\n  .col-10 {\r\n    width: 83.33%;\r\n  }\r\n  .col-11 {\r\n    width: 91.66%;\r\n  }\r\n  .col-12 {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakI7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakI7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Zvb3QtYnJpZGdlLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGYyNDI0O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnJvdzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5bY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9mb290LWJyaWRnZS5qcGdcIik7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTMzY2M7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLm1lbnUgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1lbnUgbGkge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzYjVlNTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuXHJcbi5tZW51IGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWNjO1xyXG59XHJcblxyXG4uYXNpZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM2I1ZTU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG5bY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAvKiBGb3IgdGFibGV0czogKi9cclxuICAuY29sLXMtMSB7XHJcbiAgICB3aWR0aDogOC4zMyU7XHJcbiAgfVxyXG4gIC5jb2wtcy0yIHtcclxuICAgIHdpZHRoOiAxNi42NiU7XHJcbiAgfVxyXG4gIC5jb2wtcy0zIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5jb2wtcy00IHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgfVxyXG4gIC5jb2wtcy01IHtcclxuICAgIHdpZHRoOiA0MS42NiU7XHJcbiAgfVxyXG4gIC5jb2wtcy02IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5jb2wtcy03IHtcclxuICAgIHdpZHRoOiA1OC4zMyU7XHJcbiAgfVxyXG4gIC5jb2wtcy04IHtcclxuICAgIHdpZHRoOiA2Ni42NiU7XHJcbiAgfVxyXG4gIC5jb2wtcy05IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG4gIC5jb2wtcy0xMCB7XHJcbiAgICB3aWR0aDogODMuMzMlO1xyXG4gIH1cclxuICAuY29sLXMtMTEge1xyXG4gICAgd2lkdGg6IDkxLjY2JTtcclxuICB9XHJcbiAgLmNvbC1zLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLyogRm9yIGRlc2t0b3A6ICovXHJcbiAgLmNvbC0xIHtcclxuICAgIHdpZHRoOiA4LjMzJTtcclxuICB9XHJcbiAgLmNvbC0yIHtcclxuICAgIHdpZHRoOiAxNi42NiU7XHJcbiAgfVxyXG4gIC5jb2wtMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAuY29sLTQge1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICB9XHJcbiAgLmNvbC01IHtcclxuICAgIHdpZHRoOiA0MS42NiU7XHJcbiAgfVxyXG4gIC5jb2wtNiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAuY29sLTcge1xyXG4gICAgd2lkdGg6IDU4LjMzJTtcclxuICB9XHJcbiAgLmNvbC04IHtcclxuICAgIHdpZHRoOiA2Ni42NiU7XHJcbiAgfVxyXG4gIC5jb2wtOSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxuICAuY29sLTEwIHtcclxuICAgIHdpZHRoOiA4My4zMyU7XHJcbiAgfVxyXG4gIC5jb2wtMTEge1xyXG4gICAgd2lkdGg6IDkxLjY2JTtcclxuICB9XHJcbiAgLmNvbC0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n  <style>\r\n    body,h1 {font-family: \"Raleway\", sans-serif;color: rgb(17, 17, 17)}\r\n    body, html {height: 100%}\r\n    .bgimg {\r\n        background-image: url('/assets/img/Survey-home.jpg');\r\n        min-height: 100%;\r\n        background-position: center;\r\n        background-size: cover;\r\n    }\r\n    </style>\r\n<div class=\"bgimg w3-display-container w3-animate-opacity w3-text-white\">\r\n  <div class=\"w3-display-topleft w3-padding-large w3-xlarge\">\r\n  </div>\r\n  <div class=\"w3-display-middle\">\r\n    <h1 class=\"w3-jumbo w3-animate-top\"></h1>\r\n    <hr class=\"w3-border-grey\" style=\"margin:auto;width:50%\">\r\n    <p class=\"w3-large w3-center\"></p>\r\n  </div>\r\n  <div style=\"height:500px; width:300px\"></div>\r\n</div>\r\n</body>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent(route) {
        return _super.call(this, route) || this;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-offset-4 col-md-4\">\n      <h1>Please Login</h1>\n      <form autocomplete=\"off\" (submit)=\"onLoginSubmit()\">\n        <fieldset class=\"form-group\">\n          <label for=\"username\">Username:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.username\"\n            name=\"username\"\n            placeholder=\"Enter Username\"\n            id=\"username\"\n            required\n            autofocus\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.password\"\n            name=\"password\"\n            placeholder=\"Enter Password\"\n            id=\"password\"\n            required\n            autocomplete=\"off\"\n          />\n          or\n          <a routerLink=\"/register\">Register Here</a>\n        </fieldset>\n        <fieldset class=\"form-group text-right\">\n          <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" />\n          <a routerLink=\"/home\">\n            <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\" />\n          </a>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.authenticateUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-success",
                    timeOut: 3000
                });
                _this.router.navigate(["/home"]);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-danger",
                    timeOut: 3000
                });
                _this.router.navigate(["/login"]);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col col-md-12\">\n      <h1 class=\"display-2\"><strong>Error: 404</strong>-Page Not Found</h1>\n      <a routerLink=\"/home\" class=\"btn btn-primary btn-lg\"><i class=\"fas fa-undo-alt fa-lg\"></i> Take Me Home</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-offset-4 col-md-4\">\n      <h1>Please Register</h1>\n      <form autocomplete=\"off\" (submit)=\"onRegisterSubmit()\">\n        <fieldset class=\"form-group\">\n          <label for=\"username\">Username:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.username\"\n            name=\"username\"\n            placeholder=\"Enter Username\"\n            id=\"username\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.password\"\n            name=\"password\"\n            placeholder=\"Enter Password\"\n            id=\"password\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.email\"\n            name=\"email\"\n            placeholder=\"Enter Email\"\n            id=\"email\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"displayName\">Display Name:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.displayName\"\n            name=\"displayName\"\n            placeholder=\"Enter Display Name\"\n            id=\"displayName\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group text-right\">\n          <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" />\n          <a routerLink=\"/home\">\n            <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\" />\n          </a>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and may log in', { cssClass: 'alert-success', timeOut: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('A registration Error Occurred', { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Jhc2UtcGFnZS9iYXNlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Welcome to {{ title }}</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BasePageComponent = /** @class */ (function () {
    function BasePageComponent(route) {
        this.route = route;
    }
    BasePageComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
    };
    BasePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-page',
            template: __webpack_require__(/*! ./base-page.component.html */ "./src/app/partials/base-page/base-page.component.html"),
            styles: [__webpack_require__(/*! ./base-page.component.css */ "./src/app/partials/base-page/base-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BasePageComponent);
    return BasePageComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.year = date.getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul#menu {\r\n    clear: both;\r\n    float: right;\r\n    list-style: none;\r\n    margin: 0px 10px 0 0px;\r\n    border-bottom:1px solid #333333; /*Remove to create tab effect*/\r\n    width:500px; /*If tab effect is not being used, this will define how long the bottom border will be*/\r\n    }\r\n     \r\n    ul#menu li {\r\n    display: inline;\r\n    list-style: none;\r\n    }\r\n     \r\n    ul#menu li a {\r\n    margin-right:5px;\r\n    color: #FFFFFF;\r\n    display: block;\r\n    float:left;\r\n    font: 14px/100% Arial, Helvetica, sans-serif;\r\n    line-height: 32px;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n    padding: 0 10px;\r\n    background-color:#aaaaaa; /*A basic background color is set incase the image will not load*/\r\n    border:1px solid #333333;\r\n    border-bottom:none;\r\n    }\r\n     \r\n    .nav{\r\n\r\n        background-color:rgb(174, 250, 250); \r\n\r\n    }\r\n     \r\n    body{\r\n        background: #8999A8;\r\n    }\r\n     \r\n    .navbar, .dropdown-menu{\r\n    background:rgba(255,255,255,0.25);\r\n    border: none;\r\n    \r\n    }\r\n     \r\n    .nav>li>a, .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover, .dropdown-menu>li>a, .dropdown-menu>li{\r\n      border-bottom: 3px solid transparent;\r\n    }\r\n     \r\n    .nav>li>a:focus, .nav>li>a:hover,.nav .open>a, .nav .open>a:focus, .nav .open>a:hover, .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover{\r\n      border-bottom: 3px solid transparent;\r\n      background: none;\r\n    }\r\n     \r\n    .navbar a, .dropdown-menu>li>a, .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover, .navbar-toggle{\r\n     color: #fff;\r\n    }\r\n     \r\n    .dropdown-menu{\r\n        box-shadow:none;\r\n    }\r\n     \r\n    .nav li:hover:nth-child(8n+1), .nav li.active:nth-child(8n+1){\r\n      border-bottom: #C4E17F 3px solid;\r\n    }\r\n     \r\n    .nav li:hover:nth-child(8n+2), .nav li.active:nth-child(8n+2){\r\n      border-bottom: #F7FDCA 3px solid;\r\n    }\r\n     \r\n    .nav li:hover:nth-child(8n+3), .nav li.active:nth-child(8n+3){\r\n      border-bottom: #FECF71 3px solid;\r\n    }\r\n     \r\n    .nav li:hover:nth-child(8n+4), .nav li.active:nth-child(8n+4){\r\n      border-bottom: #F0776C 3px solid;\r\n    }\r\n     \r\n    .nav li:hover:nth-child(8n+5), .nav li.active:nth-child(8n+5){\r\n      border-bottom: #DB9DBE 3px solid;\r\n    }\r\n     \r\n    .nav li:hover:nth-child(8n+6), .nav li.active:nth-child(8n+6){\r\n      border-bottom: #C49CDE 3px solid;\r\n    }\r\n     \r\n    .nav li:hover:nth-child(8n+7), .nav li.active:nth-child(8n+7){\r\n      border-bottom: #669AE1 3px solid;\r\n    }\r\n     \r\n    .nav li:hover:nth-child(8n+8), .nav li.active:nth-child(8n+8){\r\n      border-bottom: #62C2E4 3px solid;\r\n    }\r\n     \r\n    .navbar-toggle .icon-bar{\r\n        color: #fff;\r\n        background: #fff;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLCtCQUErQixFQUFFLDhCQUE4QjtJQUMvRCxXQUFXLEVBQUUsdUZBQXVGO0lBQ3BHOztJQUVBO0lBQ0EsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjs7SUFFQTtJQUNBLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHdCQUF3QixFQUFFLGlFQUFpRTtJQUMzRix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCOztJQUVBOztRQUVJLG1DQUFtQzs7SUFFdkM7O0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7O0lBQ0E7SUFDQSxpQ0FBaUM7SUFDakMsWUFBWTs7SUFFWjs7SUFFQTtNQUNFLG9DQUFvQztJQUN0Qzs7SUFDQTtNQUNFLG9DQUFvQztNQUNwQyxnQkFBZ0I7SUFDbEI7O0lBQ0E7S0FDQyxXQUFXO0lBQ1o7O0lBQ0E7UUFFSSxlQUFlO0lBQ25COztJQUVBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUNBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUNBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUNBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUNBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUNBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUNBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUNBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsI21lbnUge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwIDBweDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICMzMzMzMzM7IC8qUmVtb3ZlIHRvIGNyZWF0ZSB0YWIgZWZmZWN0Ki9cclxuICAgIHdpZHRoOjUwMHB4OyAvKklmIHRhYiBlZmZlY3QgaXMgbm90IGJlaW5nIHVzZWQsIHRoaXMgd2lsbCBkZWZpbmUgaG93IGxvbmcgdGhlIGJvdHRvbSBib3JkZXIgd2lsbCBiZSovXHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICB1bCNtZW51IGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICB1bCNtZW51IGxpIGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgZm9udDogMTRweC8xMDAlIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhYWFhYWE7IC8qQSBiYXNpYyBiYWNrZ3JvdW5kIGNvbG9yIGlzIHNldCBpbmNhc2UgdGhlIGltYWdlIHdpbGwgbm90IGxvYWQqL1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZ7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3NCwgMjUwLCAyNTApOyBcclxuXHJcbiAgICB9XHJcbiAgICBib2R5e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4OTk5QTg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLCAuZHJvcGRvd24tbWVudXtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjI1KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2PmxpPmEsIC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXMsIC5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIsIC5kcm9wZG93bi1tZW51PmxpPmEsIC5kcm9wZG93bi1tZW51Pmxpe1xyXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAubmF2PmxpPmE6Zm9jdXMsIC5uYXY+bGk+YTpob3ZlciwubmF2IC5vcGVuPmEsIC5uYXYgLm9wZW4+YTpmb2N1cywgLm5hdiAub3Blbj5hOmhvdmVyLCAuZHJvcGRvd24tbWVudT5saT5hOmZvY3VzLCAuZHJvcGRvd24tbWVudT5saT5hOmhvdmVye1xyXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIGEsIC5kcm9wZG93bi1tZW51PmxpPmEsIC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXMsIC5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIsIC5uYXZiYXItdG9nZ2xle1xyXG4gICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzpub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2IGxpOmhvdmVyOm50aC1jaGlsZCg4bisxKSwgLm5hdiBsaS5hY3RpdmU6bnRoLWNoaWxkKDhuKzEpe1xyXG4gICAgICBib3JkZXItYm90dG9tOiAjQzRFMTdGIDNweCBzb2xpZDtcclxuICAgIH1cclxuICAgIC5uYXYgbGk6aG92ZXI6bnRoLWNoaWxkKDhuKzIpLCAubmF2IGxpLmFjdGl2ZTpudGgtY2hpbGQoOG4rMil7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICNGN0ZEQ0EgM3B4IHNvbGlkO1xyXG4gICAgfVxyXG4gICAgLm5hdiBsaTpob3ZlcjpudGgtY2hpbGQoOG4rMyksIC5uYXYgbGkuYWN0aXZlOm50aC1jaGlsZCg4biszKXtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogI0ZFQ0Y3MSAzcHggc29saWQ7XHJcbiAgICB9XHJcbiAgICAubmF2IGxpOmhvdmVyOm50aC1jaGlsZCg4bis0KSwgLm5hdiBsaS5hY3RpdmU6bnRoLWNoaWxkKDhuKzQpe1xyXG4gICAgICBib3JkZXItYm90dG9tOiAjRjA3NzZDIDNweCBzb2xpZDtcclxuICAgIH1cclxuICAgIC5uYXYgbGk6aG92ZXI6bnRoLWNoaWxkKDhuKzUpLCAubmF2IGxpLmFjdGl2ZTpudGgtY2hpbGQoOG4rNSl7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICNEQjlEQkUgM3B4IHNvbGlkO1xyXG4gICAgfVxyXG4gICAgLm5hdiBsaTpob3ZlcjpudGgtY2hpbGQoOG4rNiksIC5uYXYgbGkuYWN0aXZlOm50aC1jaGlsZCg4bis2KXtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogI0M0OUNERSAzcHggc29saWQ7XHJcbiAgICB9XHJcbiAgICAubmF2IGxpOmhvdmVyOm50aC1jaGlsZCg4bis3KSwgLm5hdiBsaS5hY3RpdmU6bnRoLWNoaWxkKDhuKzcpe1xyXG4gICAgICBib3JkZXItYm90dG9tOiAjNjY5QUUxIDNweCBzb2xpZDtcclxuICAgIH1cclxuICAgIC5uYXYgbGk6aG92ZXI6bnRoLWNoaWxkKDhuKzgpLCAubmF2IGxpLmFjdGl2ZTpudGgtY2hpbGQoOG4rOCl7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICM2MkMyRTQgM3B4IHNvbGlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\"\r\n    ><img\r\n      src=\"/assets/img/logo1.png\"\r\n      alt=\"Logo\"\r\n      height=\"50\"\r\n      width=\"100\"\r\n    />Whats-UR-Opinion</a\r\n  >\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <ul id=\"menu\">\r\n    <li><a routerLink=\"/\">Home</a></li>\r\n    <li><a routerLink=\"/about\">Take survey</a></li>\r\n    <li><a routerLink=\"/contact\"> Admin Surveys</a></li>\r\n    <li\r\n      *ngIf=\"isLoggedIn()\"\r\n      class=\"navbar-text text-success ml-5 mr-5 d-none d-lg-inline\"\r\n    >\r\n      <i class=\"fas fa-lg fa-user\"></i> Welcome, {{ user.displayName }}\r\n    </li>\r\n    <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n      <a (click)=\"onLogoutClick()\" routerLink=\"/logout\" class=\"nav-link\"\r\n        >Logout</a\r\n      >\r\n    </li>\r\n    <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\">\r\n      <a routerLink=\"/login\" class=\"nav-link\"> Login</a>\r\n    </li>\r\n  </ul>\r\n  <!-- <div class=\"navbar-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"navbar navbar-fixed-top\">\r\n            <div class=\"container\">\r\n                <div class=\"navbar-header\">\r\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <a class=\"navbar-brand\" href=\"#\">Logo</a>\r\n                </div>\r\n                <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n                    <ul class=\"nav navbar-nav\">\r\n                        <li class=\"active\"><a href=\"#\" class=\"\">Home</a></li>\r\n                        <li class=\" dropdown\">\r\n                            <a href=\"#\" class=\"dropdown-toggle \" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Departments <span class=\"caret\"></span></a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li class=\" dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle \" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">View Departments</a>\r\n                                </li>\r\n                                <li><a href=\"#\">Add New</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li><a href=\"#\">Add New</a></li>\r\n                        <li class=\" dropdown\"><a href=\"#\" class=\"dropdown-toggle \" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Managers <span class=\"caret\"></span></a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a href=\"#\">View Managers</a></li>\r\n                                <li><a href=\"#\">Add New</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\" dropdown\"><a href=\"#\" class=\"dropdown-toggle active\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Staff <span class=\"caret\"></span></a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a href=\"#\">View Staff</a></li>\r\n                                <li><a href=\"#\">Add New</a></li>\r\n                                <li><a href=\"#\">Bulk Upload</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\" down\"><a href=\"#\" class=\"dropdown-toggle active\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">HR <span class=\"caret\"></span></a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a href=\"#\">Change Time Entry</a></li>\r\n                                <li><a href=\"#\">Report</a></li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                    <ul class=\"nav navbar-nav pull-right\">\r\n                        <li class=\" dropdown\"><a href=\"#\" class=\"dropdown-toggle active\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Signed in as  <span class=\"caret\"></span></a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a href=\"#\">Change Password</a></li>\r\n                                <li><a href=\"#\">My Profile</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"\"><a href=\"#\">Logout</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</div> -->\r\n  <!--<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/\"\r\n          ><i class=\"fas fa-lg fa-igloo\"></i> Home\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/about\"\r\n          ><i class=\"fa fa-lg fa-info\"></i> About</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/contact\"\r\n          ><i class=\"fa fa-lg fa-phone\"></i> Surveys</a\r\n        >\r\n      </li>\r\n\r\n      <li\r\n        *ngIf=\"isLoggedIn()\"\r\n        class=\"navbar-text text-success ml-5 mr-5 d-none d-lg-inline\"\r\n      >\r\n        <i class=\"fas fa-lg fa-user\"></i> Welcome, {{ user.displayName }}\r\n      </li>\r\n\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a (click)=\"onLogoutClick()\" routerLink=\"/logout\" class=\"nav-link\">\r\n          <i class=\"fas fa-lg fa-sign-out-alt\"></i> Logout</a\r\n        >\r\n      </li>\r\n\r\n      <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\">\r\n        <a routerLink=\"/login\" class=\"nav-link\">\r\n          <i class=\"fas fa-lg fa-sign-in-alt\"></i> Login</a\r\n        >\r\n      </li>\r\n    </ul>\r\n  </div>*/ -->\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 5000 });
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        var result = this.authService.loggedIn();
        if (result) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        return result;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        // private endpoint = 'https://comp308-w2019-lesson10b.herokuapp.com/api/';
        this.endpoint = "http://localhost:3000/api/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.endpoint + "register", user, this.httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.endpoint + "login", user, this.httpOptions);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem("id_token", "Bearer " + token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get(this.endpoint + "logout", this.httpOptions);
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtService.isTokenExpired(this.authToken);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/contact-list.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/contact-list.service.ts ***!
  \**************************************************/
/*! exports provided: ContactListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListService", function() { return ContactListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");




var ContactListService = /** @class */ (function () {
    function ContactListService(http) {
        this.http = http;
        this.authToken = null;
        //private endpoint = 'https://comp308-w2019-lesson10b.herokuapp.com/api/contact-list/';
        this.endpoint = "http://localhost:3000/api/contact-list/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ContactListService.prototype.getList = function () {
        this.loadToken();
        return this.http.get(this.endpoint, this.httpOptions);
    };
    ContactListService.prototype.getContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + "edit/" + contact._id, this.httpOptions);
    };
    ContactListService.prototype.addContact = function (contact) {
        this.loadToken();
        return this.http.post(this.endpoint + "add", contact, this.httpOptions);
    };
    ContactListService.prototype.editContact = function (contact) {
        this.loadToken();
        return this.http.post(this.endpoint + "edit/" + contact._id, contact, this.httpOptions);
    };
    ContactListService.prototype.deleteContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + "delete/" + contact._id, this.httpOptions);
    };
    ContactListService.prototype.loadToken = function () {
        var token = localStorage.getItem("id_token");
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set("Authorization", this.authToken);
    };
    ContactListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactListService);
    return ContactListService;
}());



/***/ }),

/***/ "./src/app/survey-app/survey-app.component.css":
/*!*****************************************************!*\
  !*** ./src/app/survey-app/survey-app.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  padding-top: 10px;\r\n}\r\n.surveyTitile {\r\n  font-size: 40px;\r\n  background-color: #fee151;\r\n  color: #343a40;\r\n}\r\n.surveyTitile,\r\n::-webkit-input-placeholder {\r\n  /* Edge */\r\n  color: #343a40;\r\n}\r\n.question {\r\n  color: #343a40;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  text-decoration: none;\r\n}\r\n.input-group {\r\n  padding: 10px;\r\n}\r\n.question {\r\n  width: 90%;\r\n}\r\n.questionrow {\r\n  padding-bottom: 10px;\r\n}\r\n/* Testing Zone */\r\n#content {\r\n  width: 100%;\r\n  height: 90px;\r\n  border: 1px solid black;\r\n}\r\n#contentInside {\r\n  width: 100px;\r\n  height: 70px;\r\n  margin: 7px;\r\n  border: 1px solid black;\r\n  display: inline-flex;\r\n}\r\ni {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5LWFwcC9zdXJ2ZXktYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBOztFQUVFLFNBQVM7RUFDVCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUEsaUJBQWlCO0FBRWpCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zdXJ2ZXktYXBwL3N1cnZleS1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5zdXJ2ZXlUaXRpbGUge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlMTUxO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcbi5zdXJ2ZXlUaXRpbGUsXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogRWRnZSAqL1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcbi5xdWVzdGlvbiB7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnF1ZXN0aW9uIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5xdWVzdGlvbnJvdyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRlc3RpbmcgWm9uZSAqL1xyXG5cclxuI2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4jY29udGVudEluc2lkZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBtYXJnaW46IDdweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5pIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/survey-app/survey-app.component.html":
/*!******************************************************!*\
  !*** ./src/app/survey-app/survey-app.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"row surveyTitile\">\r\n      <div class=\"col-md-12\">\r\n        <form>\r\n          <input\r\n            type=\"text\"\r\n            name=\"surveyTitile\"\r\n            placeholder=\"MCQ Survey Template\"\r\n          />\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n\r\n    <!-- question starts  -->\r\n    <form class=\"form\" (submit)=\"onSurveyPageSubmit()\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">submit</button>\r\n      <div class=\"row questionrow\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"question\">\r\n                <h4>\r\n                  1)\r\n                  <input\r\n                    type=\"text\"\r\n                    name=\"question\"\r\n                    id=\"Q1TextField\"\r\n                    placeholder=\"Enter Question Here \"\r\n                    name=\"Q1TextField\"\r\n                    [(ngModel)]=\"survey.Q1\"\r\n                    value=\"{{ survey.Q1 }}\"\r\n                  />\r\n                </h4>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <input\r\n                          type=\"radio\"\r\n                          aria-label=\"Radio button for following text input\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      aria-label=\"Text input with radio button\"\r\n                      id=\"O1TextField\"\r\n                      placeholder=\"Enter Question Here \"\r\n                      name=\"O1TextField\"\r\n                      [(ngModel)]=\"survey.O1\"\r\n                      value=\"{{ survey.O1 }}\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <input\r\n                          type=\"radio\"\r\n                          aria-label=\"Radio button for following text input\"\r\n                          id=\"O2TextField\"\r\n                          placeholder=\"Enter Question Here \"\r\n                          name=\"O2TextField\"\r\n                          [(ngModel)]=\"survey.O2\"\r\n                          value=\"{{ survey.O2 }}\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      aria-label=\"Text input with radio button\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <input\r\n                          type=\"radio\"\r\n                          aria-label=\"Radio button for following text input\"\r\n                          id=\"O3TextField\"\r\n                          placeholder=\"Enter Question Here \"\r\n                          name=\"O3TextField\"\r\n                          [(ngModel)]=\"survey.O3\"\r\n                          value=\"{{ survey.O3 }}\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      aria-label=\"Text input with radio button\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <input\r\n                          type=\"radio\"\r\n                          aria-label=\"Radio button for following text input\"\r\n                          id=\"O4TextField\"\r\n                          placeholder=\"Enter Question Here \"\r\n                          name=\"O4TextField\"\r\n                          [(ngModel)]=\"survey.O4\"\r\n                          value=\"{{ survey.O4 }}\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      aria-label=\"Text input with radio button\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <!-- question ends -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/survey-app/survey-app.component.ts":
/*!****************************************************!*\
  !*** ./src/app/survey-app/survey-app.component.ts ***!
  \****************************************************/
/*! exports provided: SurveyAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyAppComponent", function() { return SurveyAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SurveyAppComponent = /** @class */ (function () {
    function SurveyAppComponent() {
        this.fieldArray = [];
        this.newAttribute = {};
        this.firstField = true;
        this.firstFieldName = "Option A";
        this.questionCount = 1;
    }
    SurveyAppComponent.prototype.ngOnInit = function () { };
    SurveyAppComponent.prototype.addFieldValue = function (index) {
        if (this.fieldArray.length <= 2) {
            this.fieldArray.push(this.newAttribute);
            this.newAttribute = {};
        }
        else {
        }
    };
    SurveyAppComponent.prototype.deleteFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
    };
    SurveyAppComponent.prototype.onEditCloseItems = function () {
        this.isEditItems = !this.isEditItems;
    };
    SurveyAppComponent.prototype.onSubmitForm = function (survey) {
        console.log("result", survey);
    };
    SurveyAppComponent.prototype.onAddQuestion = function () { };
    // Logic For the Survey Storage
    SurveyAppComponent.prototype.onSurveyPageSubmit = function () {
        console.log(this.survey);
    };
    SurveyAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-app",
            template: __webpack_require__(/*! ./survey-app.component.html */ "./src/app/survey-app/survey-app.component.html"),
            styles: [__webpack_require__(/*! ./survey-app.component.css */ "./src/app/survey-app/survey-app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SurveyAppComponent);
    return SurveyAppComponent;
}());



/***/ }),

/***/ "./src/app/test/survey.component.ts":
/*!******************************************!*\
  !*** ./src/app/test/survey.component.ts ***!
  \******************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! surveyjs-widgets */ "./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inputmask/dist/inputmask/phone-codes/phone.js */ "./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_4__);





surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["icheck"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
survey_angular__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("questionbase", {
    popupdescription: "text"
});
survey_angular__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
        this.submitSurvey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SurveyComponent.prototype.click = function (result) {
        console.log(result);
    };
    SurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_2__["Model"](this.json);
        surveyModel.onAfterRenderQuestion.add(function (survey, options) {
            if (!options.question.popupdescription) {
                return;
            }
            // Add a button;
            var btn = document.createElement("button");
            btn.className = "btn btn-info btn-xs";
            btn.innerHTML = "More Info";
            var question = options.question;
            btn.onclick = function () {
                // showDescription(question);
                alert(options.question.popupdescription);
            };
            var header = options.htmlElement.querySelector("h5");
            var span = document.createElement("span");
            span.innerHTML = "  ";
            header.appendChild(span);
            header.appendChild(btn);
        });
        surveyModel.onComplete.add(function (result) { return _this.submitSurvey.emit(result.data); });
        survey_angular__WEBPACK_IMPORTED_MODULE_2__["SurveyNG"].render("surveyElement", { model: surveyModel });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SurveyComponent.prototype, "submitSurvey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SurveyComponent.prototype, "json", void 0);
    SurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: "survey",
            template: "\n    <div class=\"survey-container contentcontainer codecontainer\">\n      <div id=\"surveyElement\"></div>\n    </div>\n  ",
            styles: [""]
        })
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/test/survey.creator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test/survey.creator.component.ts ***!
  \**************************************************/
/*! exports provided: SurveyCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCreatorComponent", function() { return SurveyCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var survey_knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-knockout */ "./node_modules/survey-knockout/survey.ko.js");
/* harmony import */ var survey_knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var survey_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-creator */ "./node_modules/survey-creator/survey-creator.js");
/* harmony import */ var survey_creator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_creator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! surveyjs-widgets */ "./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inputmask/dist/inputmask/phone-codes/phone.js */ "./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_inputmask_phone_codes_phone_js__WEBPACK_IMPORTED_MODULE_5__);






surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["icheck"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["select2"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["inputmask"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["jquerybarrating"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["jqueryuidatepicker"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["nouislider"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["select2tagbox"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["signaturepad"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["sortablejs"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["ckeditor"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["autocomplete"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_4__["bootstrapslider"](survey_knockout__WEBPACK_IMPORTED_MODULE_2__);
var CkEditor_ModalEditor = {
    afterRender: function (modalEditor, htmlElement) {
        var editor = window["CKEDITOR"].replace(htmlElement);
        editor.on("change", function () {
            modalEditor.editingValue = editor.getData();
        });
        editor.setData(modalEditor.editingValue);
    },
    destroy: function (modalEditor, htmlElement) {
        var instance = window["CKEDITOR"].instances[htmlElement.id];
        if (instance) {
            instance.removeAllListeners();
            window["CKEDITOR"].remove(instance);
        }
    }
};
survey_creator__WEBPACK_IMPORTED_MODULE_3__["SurveyPropertyModalEditor"].registerCustomWidget("html", CkEditor_ModalEditor);
var SurveyCreatorComponent = /** @class */ (function () {
    function SurveyCreatorComponent() {
        var _this = this;
        this.surveySaved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveMySurvey = function () {
            console.log(JSON.stringify(_this.surveyCreator.text));
            _this.surveySaved.emit(JSON.parse(_this.surveyCreator.text));
        };
    }
    SurveyCreatorComponent.prototype.ngOnInit = function () {
        survey_knockout__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
        survey_knockout__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
        var options = { showEmbededSurveyTab: true, generateValidJSON: true };
        this.surveyCreator = new survey_creator__WEBPACK_IMPORTED_MODULE_3__["SurveyCreator"]("surveyCreatorContainer", options);
        this.surveyCreator.text = JSON.stringify(this.json);
        this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SurveyCreatorComponent.prototype, "json", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SurveyCreatorComponent.prototype, "surveySaved", void 0);
    SurveyCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "survey-creator",
            template: "\n    <div id=\"surveyCreatorContainer\"></div>\n  ",
            styles: [""]
        })
    ], SurveyCreatorComponent);
    return SurveyCreatorComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  {{ title }}\r\n</h1>\r\n\r\n<h1>Survey</h1>\r\n<survey [json]=\"json\" (submitSurvey)=\"sendData($event)\"></survey>\r\n\r\n<h1>Survey JS Creator</h1>\r\n<survey-creator\r\n  [json]=\"json\"\r\n  (surveySaved)=\"onSurveySaved($event)\"\r\n></survey-creator>\r\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content for the Details Page -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-offset-5 col-md-6\">\r\n      <h1>{{ title }}</h1>\r\n\r\n      <form class=\"form\" (submit)=\"onDetailsPageSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"FirstNameTextField\">Name</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"FirstNameTextField\"\r\n            placeholder=\"Enter Name\"\r\n            name=\"firstName\"\r\n            [(ngModel)]=\"User.username\"\r\n            value=\"{{ User.username }}\"\r\n            required\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"FirstNameTextField\">Display Name</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"FirstNameTextField\"\r\n            placeholder=\"Enter Display Name\"\r\n            name=\"firstName\"\r\n            [(ngModel)]=\"User.displayName\"\r\n            value=\"{{ User.displayName }}\"\r\n            required\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"LastNameTextField\">Email</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"LastNameTextField\"\r\n            placeholder=\"Enter Email\"\r\n            name=\"lastName\"\r\n            [(ngModel)]=\"User.email\"\r\n            value=\"{{ User.email }}\"\r\n            required\r\n          />\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">\r\n          <i class=\"fas fa-edit\"></i> {{ title }}\r\n        </button>\r\n        <a routerLink=\"/admin\" class=\"btn btn-warning\">\r\n          <i class=\"fas fa-undo\"></i> Cancel</a\r\n        >\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user",
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\owner\Desktop\whats-ur-opinion\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map