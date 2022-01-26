(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/project/project.component */ "./src/app/component/project/project.component.ts");






const routerOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};
const routes = [
    {
        path: '',
        component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'project',
        component: _component_project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_component_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/project/project.component */ "./src/app/component/project/project.component.ts");
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-particles */ "./node_modules/ng-particles/__ivy_ngcc__/fesm2015/ng-particles.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ng_particles__WEBPACK_IMPORTED_MODULE_8__["NgParticlesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _component_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ng_particles__WEBPACK_IMPORTED_MODULE_8__["NgParticlesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _component_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ng_particles__WEBPACK_IMPORTED_MODULE_8__["NgParticlesModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 0, consts: [["id", "contact", 1, "contact"], [1, "text-center"], [1, "underline"], ["href", "mailto:parag.badala@gmail.com"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ontac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Have a job or a project for me? Feel free to contact me via social media or mail. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " E-Mail: parag.badala@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Phone: +91 9872446349 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "E-MAIL ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact[_ngcontent-%COMP%] {\n\tcolor: black;\n\tmargin-bottom: 80px;\n}\n\n.contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tfont-weight: 700;\n\tfont-size: 36px;\n\tpadding-bottom: 5px;\n\tmargin: 40px 0px;\n\t\n}\n\n.underline[_ngcontent-%COMP%] {\n\tborder-bottom: 1px solid #ffb000;\n}\n\n.contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tfont-size: 15.5px;\n}\n\n.contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n\tpadding: 12px;\n\tbackground-color: #ffb000;\n\tcolor: white;\n\tborder: 0px;\n\tbox-shadow: 3px 3px 3px 0px rgba(205,200,205,1);\n}\n\n.contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n\tbackground-color: orange;\n\ttransition-duration: 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFdBQVc7Q0FDWCwrQ0FBK0M7QUFDaEQ7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIseUJBQXlCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhY3Qge1xuXHRjb2xvcjogYmxhY2s7XG5cdG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb250YWN0IGgyIHtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zaXplOiAzNnB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRtYXJnaW46IDQwcHggMHB4O1xuXHQvKiBtYXJnaW4tYm90dG9tOiA0MHB4OyAqL1xufVxuXG4udW5kZXJsaW5lIHtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmIwMDA7XG59XG5cbi5jb250YWN0IHAge1xuXHRmb250LXNpemU6IDE1LjVweDtcbn1cblxuLmNvbnRhY3QgYnV0dG9uIHtcblx0cGFkZGluZzogMTJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYjAwMDtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IDBweDtcblx0Ym94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4IHJnYmEoMjA1LDIwMCwyMDUsMSk7XG59XG5cbi5jb250YWN0IGJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return [""]; };
const _c1 = function () { return ["/project"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 29, vars: 10, consts: [[1, "nav-down"], [1, "navbar", "navbar-default", "_navbar-height"], [1, "container"], [1, "navbar-header"], ["href", "#", 1, "navbar-brand", "_navbar-link"], ["src", "assets/images/logo3.png"], ["type", "button", "data-toggle", "collapse", "data-target", "#bs-example-navbar-collapse-1", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], ["id", "bs-example-navbar-collapse-1", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], ["id", "home-btn", 1, "normal-links", 3, "routerLink"], ["id", "about-btn", 1, "normal-links", 3, "routerLink", "fragment"], ["id", "portfolio-btn", 1, "normal-links", 3, "routerLink", "fragment"], ["id", "project-btn", 1, "normal-links", 3, "routerLink"], ["id", "contact-btn", 1, "normal-links", 3, "routerLink", "fragment"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ".")("fragment", "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ".")("fragment", "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ".")("fragment", "contact");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%] {\n\tmargin-bottom: 0px !important;\n\tpadding: 12px !important;\n\tbackground-color: #FFB000!important;\n\tborder: 0 !important;\n\tborder-radius: 0 !important;\n}\n\n._navbar-height[_ngcontent-%COMP%] {\n\tmin-height: 100px;\n}\n\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%] {\n\tfont-size: 19px;\n\tfont-weight: 700;\n\tcolor: black !important;\n\tpadding-right: 0px;\n\tpadding-left: 0px;\n\tmargin: 15px;\n\tpadding-bottom: 5px;\n}\n\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\tborder-bottom: 3px solid black;\n\tcursor: pointer;\n}\n\n._navbar-link[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: -15%;\n\tleft: 8%;\n}\n\n._navbar-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\theight: auto; \n\tmargin-top: 6px;\n}\n\n@media only screen \n  and (min-width: 300px) \n  and (max-width: 768px) { \n\t._navbar-link[_ngcontent-%COMP%] {\n\t\tposition: absolute;\n\t\ttop: -9%;\n\t\tleft: 8%;\n\t}\n\t\n\t._navbar-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\t\theight: 55px; \n\t\tmargin-top: 6px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDZCQUE2QjtDQUM3Qix3QkFBd0I7Q0FDeEIsbUNBQW1DO0NBQ25DLG9CQUFvQjtDQUNwQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsUUFBUTtBQUNUOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7OztDQUdDO0VBQ0Msa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0NBQ1Q7O0NBRUE7RUFDQyxZQUFZO0VBQ1osZUFBZTtDQUNoQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuXHRtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcblx0cGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMDAwIWltcG9ydGFudDtcblx0Ym9yZGVyOiAwICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuLl9uYXZiYXItaGVpZ2h0IHtcblx0bWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5uYXZiYXIgbGkgYSwgLm5hdmJhci1icmFuZCB7XG5cdGZvbnQtc2l6ZTogMTlweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmctcmlnaHQ6IDBweDtcblx0cGFkZGluZy1sZWZ0OiAwcHg7XG5cdG1hcmdpbjogMTVweDtcblx0cGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLm5hdmJhciBsaSBhOmhvdmVyIHtcblx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5fbmF2YmFyLWxpbmsge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTE1JTtcblx0bGVmdDogOCU7XG59XG5cbi5fbmF2YmFyLWxpbmsgaW1nIHtcblx0aGVpZ2h0OiBhdXRvOyBcblx0bWFyZ2luLXRvcDogNnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAobWluLXdpZHRoOiAzMDBweCkgXG4gIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcblx0Ll9uYXZiYXItbGluayB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogLTklO1xuXHRcdGxlZnQ6IDglO1xuXHR9XG5cdFxuXHQuX25hdmJhci1saW5rIGltZyB7XG5cdFx0aGVpZ2h0OiA1NXB4OyBcblx0XHRtYXJnaW4tdG9wOiA2cHg7XG5cdH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-particles */ "./node_modules/ng-particles/__ivy_ngcc__/fesm2015/ng-particles.js");




class HomeComponent {
    constructor(route) {
        this.route = route;
        this.id = "tsparticles";
        this.particlesOptions = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: !0,
                        value_area: 500
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: .6,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 1,
                        opacity_min: .2,
                        sync: !1
                    }
                },
                size: {
                    value: 4,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 35,
                        size_min: .8,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 150,
                    color: "#ffffff",
                    opacity: .3,
                    width: 2
                },
                move: {
                    enable: !0,
                    speed: 1,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "window",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: !1,
                        mode: "repulse"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: .8
                        }
                    },
                    bubble: {
                        distance: 800,
                        size: 80,
                        duration: 2,
                        opacity: .8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: !0
        };
    }
    particlesLoaded(container) {
        console.log(container);
    }
    particlesInit(main) {
        console.log(main);
        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    }
    ngOnInit() {
    }
    navigateProject() {
        this.route.navigate(['/project']);
    }
    checkSection(e) {
        console.log(e);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 92, vars: 2, consts: [[1, "row", "jumbotron", "main-frame"], [3, "id", "options", "particlesLoaded", "particlesInit"], [1, "main-frame-content", "text-center"], [1, "main-info"], [1, "social-icons"], ["target", "_blank", "href", "https://www.facebook.com/parag.badala"], ["src", "assets/images/facebook.png"], ["target", "_blank", "href", "https://www.linkedin.com/in/paragbadala/"], ["src", "assets/images/linkedin.png"], ["target", "_blank", "href", "https://github.com/ParagBadala"], ["src", "assets/images/github.png"], ["id", "about", 1, "about"], [1, "container"], [1, "text-center"], [1, "underline"], [1, "row"], [1, "col-md-5"], ["src", "assets/images/profile2.jpeg"], [1, "col-md-7"], [1, "bio"], ["id", "portfolio", 1, "portfolio"], [1, "col-md-3", "col-sm-6", "col-xs-12"], [1, "card"], ["src", "assets/images/instaBot1.jpg"], ["src", "assets/images/spyChat.png"], ["src", "assets/images/webCrawler.png"], ["src", "assets/images/portfolio.png"], [1, "col-md-offset-4", "col-sm-offset-4", "col-xs-offset-3", "col-xs-6", "col-sm-4"], [1, "learn-more", "center-block", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-particles", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("particlesLoaded", function HomeComponent_Template_ng_particles_particlesLoaded_1_listener($event) { return ctx.particlesLoaded($event); })("particlesInit", function HomeComponent_Template_ng_particles_particlesInit_1_listener($event) { return ctx.particlesInit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Parag Badala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Developer. Coder. Software Engineer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "bou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " PARAG BADALA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "A Full Stack Javascript developer(MEAN/MERN), traveller, footballer and a csgo player with a IT professional experience of 2+ years.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "In my short career, i have worked on various projects in field of frontend & backend development, python and developed a IOT devices for the disable peoples. Also have a patent of seat locator system for theaters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Apart from my professional interest i keenly enjoy playing football. I have participated at national footbal competition and have deep interest in playing e-sports games. I have participated in e-sports competitions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "I am trained by Cisco Netcad Acadmey and done various certificaton.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Recent Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Instabot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Terminal bot app using python that allows you to use the various features of the Instagram like, comments, post. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Spychat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " It is a python project in which we can send message encoded behind the image and the reciever can decode that message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Webcrawler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " It is WebCrawler which will help in making the sitemap for the website which is basically all the links and pages of the websites. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " My portfolio site contains detail description about me and my projects. Built using angular framework. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_88_listener() { return ctx.navigateProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Check More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("options", ctx.particlesOptions);
    } }, directives: [ng_particles__WEBPACK_IMPORTED_MODULE_2__["NgParticlesComponent"]], styles: [".main-frame[_ngcontent-%COMP%] {\n    background: url('background2.jpg') no-repeat center center fixed;\n      background-size: cover;\n      height: 90vh;\n  }\n  \n  .main-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      color: black;\n  }\n  \n  .main-info[_ngcontent-%COMP%] {\n      margin: 100px auto;\n  }\n  \n  .about[_ngcontent-%COMP%], .portfolio[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%] {\n\tcolor: black;\n\tmargin-bottom: 80px;\n}\n  \n  .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .portfolio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tfont-weight: 700;\n\tfont-size: 36px;\n\tpadding-bottom: 5px;\n\tmargin: 20px 0px;\n\tmargin-bottom: 40px;\n}\n  \n  .underline[_ngcontent-%COMP%] {\n\tborder-bottom: 1px solid #ffb000;\n}\n  \n  .about[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n\tmargin: 20px 0px;\n\tbox-shadow: 5px 5px 5px 0px rgba(205,200,205,1);\n}\n  \n  .about[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%] {\n\tpadding: 0px;\n}\n  \n  .about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\twidth: 100%;\n}\n  \n  .bio[_ngcontent-%COMP%] {\n\tpadding: 25px;\n}\n  \n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tfont-size: 15.5px;\n}\n  \n  .bio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n\tmargin: 0 0 10px;\n    font-size: 1.4em;\n    text-transform: uppercase;\n\tletter-spacing: 1px;\n\tfont-family: Open Sans Condensed\n}\n  \n  .portfolio[_ngcontent-%COMP%] {\n\tmargin: 30px 0px;\n\tbackground-color: #ffb000;\n}\n  \n  .portfolio[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n\tmargin: 35px 0px;\n}\n  \n  .portfolio[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n\tpadding: 15px;\n}\n  \n  .card[_ngcontent-%COMP%] {\n\tbackground-color: white;\n\tbox-shadow: 5px 5px 5px 0px rgba(135,130, 135,1);\n\theight: 345px;\n}\n  \n  .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\twidth: 100%;\n}\n  \n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n\tfont-weight: 700;\n\ttext-align: center;\n}\n  \n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tpadding: 10px;\n}\n  \n  .card[_ngcontent-%COMP%]:hover {\n\ttransform: scale(1.1);\n\ttransition-duration: 0.1s;\n}\n  \n  button.learn-more[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n\tborder: 0;\n  transition: all 0.5s cubic-bezier(0.65, -0.25, 0.25, 1.95);\n  font-weight: 900;\n  color: #202121;\n  padding: 1.25rem 2rem;\n  background: #fff;\n  text-transform: uppercase;\n  text-align: center;\n}\n  \n  button.learn-more[_ngcontent-%COMP%]:hover, button.learn-more[_ngcontent-%COMP%]:focus, button.learn-more[_ngcontent-%COMP%]:active {\n  letter-spacing: 0.125rem;\n}\n  \n  @media only screen and (max-width: 399px) {\n\t.main-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n\t\tfont-size: 5vw\n\t}\n\n\t.portfolio[_ngcontent-%COMP%] {\n\t\tpadding-bottom: 5px;\n\t}\n\n\t.bio[_ngcontent-%COMP%] {\n\t\tpadding: 3px !important;\n\t\tmargin-top: 15px;\n\t}\n\n\t.card[_ngcontent-%COMP%] {\n\t\theight: 360px;\n\t}\n\n}\n  \n  @media only screen \n  and (min-width: 400px) \n  and (max-width: 768px) { \n\t.main-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n\t\tfont-size: 5vw\n\t}\n\t.bio[_ngcontent-%COMP%] {\n\t\tpadding: 3px !important;\n\t\tmargin-top: 15px;\n\t}\n\t.card[_ngcontent-%COMP%] {\n\t\theight: 10%;\n\t}\n}\n  \n  @media only screen \n  and (min-width: 500px) \n  and (max-width: 768px) { \n\t.card[_ngcontent-%COMP%] {\n\t\theight: 10%;\n\t\twidth: 50%;\n\t\tdisplay: block;\n  margin-left: auto;\n  margin-right: auto;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0VBQXFGO01BQ25GLHNCQUFzQjtNQUN0QixZQUFZO0VBQ2hCOztFQUVBO01BQ0ksWUFBWTtFQUNoQjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFQTtDQUNELFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7O0VBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztFQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDOztFQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLCtDQUErQztBQUNoRDs7RUFFQTtDQUNDLFlBQVk7QUFDYjs7RUFFQTtDQUNDLFdBQVc7QUFDWjs7RUFFQTtDQUNDLGFBQWE7QUFDZDs7RUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7RUFFQTtDQUNDLGdCQUFnQjtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7Q0FDNUIsbUJBQW1CO0NBQ25CO0FBQ0Q7O0VBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0FBQzFCOztFQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztFQUVBO0NBQ0MsYUFBYTtBQUNkOztFQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGdEQUFnRDtDQUNoRCxhQUFhO0FBQ2Q7O0VBRUE7Q0FDQyxXQUFXO0FBQ1o7O0VBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztFQUVBO0NBQ0MsYUFBYTtBQUNkOztFQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLHlCQUF5QjtBQUMxQjs7RUFFQTtDQUNDLHFCQUFxQjtDQUNyQixTQUFTO0VBRVIsMERBQTBEO0VBQzFELGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztFQUdBO0NBQ0M7RUFDQztDQUNEOztDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDs7QUFFRDs7RUFFQTs7O0NBR0M7RUFDQztDQUNEO0NBQ0E7RUFDQyx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxXQUFXO0NBQ1o7QUFDRDs7RUFFQTs7O0NBR0M7RUFDQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1mcmFtZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBoZWlnaHQ6IDkwdmg7XG4gIH1cbiAgXG4gIC5tYWluLWluZm8gaDEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAubWFpbi1pbmZvIHtcbiAgICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgfVxuXG4gIC5hYm91dCwgLnBvcnRmb2xpbywgLmNvbnRhY3Qge1xuXHRjb2xvcjogYmxhY2s7XG5cdG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5hYm91dCBoMiwgLnBvcnRmb2xpbyBoMiwgLmNvbnRhY3QgaDIge1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXNpemU6IDM2cHg7XG5cdHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdG1hcmdpbjogMjBweCAwcHg7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi51bmRlcmxpbmUge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYjAwMDtcbn1cblxuLmFib3V0IC5yb3cge1xuXHRtYXJnaW46IDIwcHggMHB4O1xuXHRib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSgyMDUsMjAwLDIwNSwxKTtcbn1cblxuLmFib3V0IC5jb2wtbWQtNSB7XG5cdHBhZGRpbmc6IDBweDtcbn1cblxuLmFib3V0IGltZyB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uYmlvIHtcblx0cGFkZGluZzogMjVweDtcbn1cblxuLmJpbyBwIHtcblx0Zm9udC1zaXplOiAxNS41cHg7XG59XG5cbi5iaW8gaDMge1xuXHRtYXJnaW46IDAgMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0Zm9udC1mYW1pbHk6IE9wZW4gU2FucyBDb25kZW5zZWRcbn1cblxuLnBvcnRmb2xpbyB7XG5cdG1hcmdpbjogMzBweCAwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmIwMDA7XG59XG5cbi5wb3J0Zm9saW8gLnJvdyB7XG5cdG1hcmdpbjogMzVweCAwcHg7XG59XG5cbi5wb3J0Zm9saW8gLmNvbC1tZC0zIHtcblx0cGFkZGluZzogMTVweDtcbn1cblxuLmNhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMTM1LDEzMCwgMTM1LDEpO1xuXHRoZWlnaHQ6IDM0NXB4O1xufVxuXG4uY2FyZCBpbWcge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQgaDMge1xuXHRmb250LXdlaWdodDogNzAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGgzLCAuY2FyZCBwIHtcblx0cGFkZGluZzogMTBweDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG59XG5cbmJ1dHRvbi5sZWFybi1tb3JlIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRib3JkZXI6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjUsIC0wLjI1LCAwLjI1LCAxLjk1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjUsIC0wLjI1LCAwLjI1LCAxLjk1KTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMyMDIxMjE7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9uLmxlYXJuLW1vcmU6aG92ZXIsIGJ1dHRvbi5sZWFybi1tb3JlOmZvY3VzLCBidXR0b24ubGVhcm4tbW9yZTphY3RpdmUge1xuICBsZXR0ZXItc3BhY2luZzogMC4xMjVyZW07XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTlweCkge1xuXHQubWFpbi1pbmZvIGgye1xuXHRcdGZvbnQtc2l6ZTogNXZ3XG5cdH1cblxuXHQucG9ydGZvbGlvIHtcblx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHR9XG5cblx0LmJpbyB7XG5cdFx0cGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLXRvcDogMTVweDtcblx0fVxuXG5cdC5jYXJkIHtcblx0XHRoZWlnaHQ6IDM2MHB4O1xuXHR9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIFxuICBhbmQgKG1pbi13aWR0aDogNDAwcHgpIFxuICBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXG5cdC5tYWluLWluZm8gaDJ7XG5cdFx0Zm9udC1zaXplOiA1dndcblx0fVxuXHQuYmlvIHtcblx0XHRwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHR9XG5cdC5jYXJkIHtcblx0XHRoZWlnaHQ6IDEwJTtcblx0fVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAobWluLXdpZHRoOiA1MDBweCkgXG4gIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcblx0LmNhcmQge1xuXHRcdGhlaWdodDogMTAlO1xuXHRcdHdpZHRoOiA1MCU7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdH1cbn1cblxuXG5cblxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/project/project.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/project/project.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_projectData_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/projectData/projects */ "./src/assets/projectData/projects.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProjectComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.projectImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.projectDes, " ");
} }
class ProjectComponent {
    constructor() {
        this.projects = _assets_projectData_projects__WEBPACK_IMPORTED_MODULE_1__["projectDetails"];
    }
    ngOnInit() {
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 7, vars: 1, consts: [["id", "portfolio", 1, "portfolio"], [1, "container-fluid"], [1, "row"], ["class", "col-lg-3 col-md-4 col-sm-6 col-xs-12 _card-padding", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-xs-12", "_card-padding"], [1, "card"], [3, "src"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectComponent_div_3_Template, 9, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".portfolio[_ngcontent-%COMP%] {\n\tmargin: 30px 0px 15px 0px;\n\t\n}\n\n.portfolio[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n\tmargin: 35px 0px 0px 0px;\n}\n\n.portfolio[_ngcontent-%COMP%]   ._card-padding[_ngcontent-%COMP%] {\n\tpadding:30px;\n}\n\n.card[_ngcontent-%COMP%] {\n\tbackground-color: white;\n\tbox-shadow: 5px 5px 5px 0px rgba(135,130, 135,1);\n\theight: 360px;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\twidth: 100%;\n\theight: 150px;\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n\tfont-weight: 700;\n\ttext-align: center;\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tpadding: 10px;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n\ttransform: scale(1.1);\n\ttransition-duration: 0.1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixnREFBZ0Q7Q0FDaEQsYUFBYTtBQUNkOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIseUJBQXlCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRmb2xpbyB7XG5cdG1hcmdpbjogMzBweCAwcHggMTVweCAwcHg7XG5cdC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmIwMDA7ICovXG59XG5cbi5wb3J0Zm9saW8gLnJvdyB7XG5cdG1hcmdpbjogMzVweCAwcHggMHB4IDBweDtcbn1cblxuLnBvcnRmb2xpbyAuX2NhcmQtcGFkZGluZyB7XG5cdHBhZGRpbmc6MzBweDtcbn1cblxuLmNhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMTM1LDEzMCwgMTM1LDEpO1xuXHRoZWlnaHQ6IDM2MHB4O1xufVxuXG4uY2FyZCBpbWcge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhcmQgaDMge1xuXHRmb250LXdlaWdodDogNzAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIGgzLCAuY2FyZCBwIHtcblx0cGFkZGluZzogMTBweDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/assets/projectData/projects.ts":
/*!********************************************!*\
  !*** ./src/assets/projectData/projects.ts ***!
  \********************************************/
/*! exports provided: projectDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectDetails", function() { return projectDetails; });
const projectDetails = [
    {
        "projectName": "DealNoDeal",
        "projectDes": "It a lucky drawer game developed with angular with many complex algorithm applied for different situation",
        "projectImg": "assets/images/dealNoDeal.PNG",
        "projectLink": ""
    },
    {
        "projectName": "Mosam",
        "projectDes": "It is a weather forecast app with features of data analytics and creating the graphs with different paramters",
        "projectImg": "assets/images/weatherApp5.PNG",
        "projectLink": ""
    },
    {
        "projectName": "MedicX",
        "projectDes": "It is an online medical report portal contains features of role base authentication, uploading and downloading the report of patients",
        "projectImg": "assets/images/medicalPortal.PNG",
        "projectLink": ""
    },
    {
        "projectName": "Smart Table",
        "projectDes": "It is an angular library which takes JSON data and generate table with functionality of dynamic columns and rows, filtering, sorting, dynamic pagination",
        "projectImg": "assets/images/smartTable.PNG",
        "projectLink": ""
    },
    {
        "projectName": "BuyOut",
        "projectDes": "It is an e-commerce website designed in vanilla javascript and used NodeJS as a backend for serving the apis.",
        "projectImg": "assets/images/eCommerce.PNG",
        "projectLink": ""
    },
    {
        "projectName": "Form Generator",
        "projectDes": "It is an angular application which creates a JSON object of form which is then converted into angular reactive forms ",
        "projectImg": "assets/images/dynamicForm.PNG",
        "projectLink": ""
    },
    {
        "projectName": "Imtehaan",
        "projectDes": "It is a eLearning test platform with user and admin portals of taking and giving the online test, contains security features",
        "projectImg": "assets/images/mcqPortal2.PNG",
        "projectLink": ""
    },
    {
        "projectName": "Portfolio",
        "projectDes": "My portfolio site contains detail description about me and my projects. Built using angular framework.",
        "projectImg": "assets/images/portfolio.png",
        "projectLink": ""
    },
    {
        "projectName": "Movie Store",
        "projectDes": "It is a movie database which help user to maintain its movie collection records and is developed using angular",
        "projectImg": "../../.images/furious-fan.PNG",
        "projectLink": ""
    },
    {
        "projectName": "Webcrawler",
        "projectDes": "It is WebCrawler which will help in making the sitemap for the website which is basically all the links and pages of the websites.",
        "projectImg": "assets/images/webCrawler.png",
        "projectLink": ""
    },
    {
        "projectName": "Spychat",
        "projectDes": "It is a python project in which we can send message encoded behind the image and the reciever can decode that message.",
        "projectImg": "assets/images/spyChat.png",
        "projectLink": ""
    },
    {
        "projectName": "Instabot",
        "projectDes": "Terminal bot app using python that allows you to use the various features of the Instagram like, comments, post.",
        "projectImg": "assets/images/instaBot1.jpg",
        "projectLink": ""
    }
];


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paragbadala/Documents/Personal/Projects/Portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map