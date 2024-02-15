"use strict";
(self["webpackChunkCountryApp"] = self["webpackChunkCountryApp"] || []).push([["src_app_countries_countries_module_ts"],{

/***/ 3068:
/*!*******************************************************************************!*\
  !*** ./src/app/countries/components/country-table/country-table.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryTableComponent: () => (/* binding */ CountryTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



function CountryTableComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No hay pa\u00EDses que mostrar\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/countries/by", a1];
};
function CountryTableComponent_ng_template_1_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td")(15, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const country_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", country_r4.coatOfArms.svg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", country_r4.coatOfArms.png);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", country_r4.flags.svg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", country_r4.name.common);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r4.name.official);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r4.capital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, country_r4.population));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, country_r4.cca3));
  }
}
function CountryTableComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Escudo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bandera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Capital");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Poblaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CountryTableComponent_ng_template_1_tr_17_Template, 17, 13, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.countries);
  }
}
class CountryTableComponent {
  constructor() {
    this.countries = [];
  }
  static #_ = this.ɵfac = function CountryTableComponent_Factory(t) {
    return new (t || CountryTableComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CountryTableComponent,
    selectors: [["countries-table"]],
    inputs: {
      countries: "countries"
    },
    decls: 3,
    vars: 2,
    consts: [["class", "alert alert-warning text-center", 4, "ngIf", "ngIfElse"], ["table", ""], [1, "alert", "alert-warning", "text-center"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [3, "src", "alt"], [3, "routerLink"]],
    template: function CountryTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountryTableComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountryTableComponent_ng_template_1_Template, 18, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.countries.length === 0)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
    styles: ["img[_ngcontent-%COMP%]{\n      width: 25px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291bnRyaWVzL2NvbXBvbmVudHMvY291bnRyeS10YWJsZS9jb3VudHJ5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLFdBQVc7SUFDYiIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 6998:
/*!*******************************************************!*\
  !*** ./src/app/countries/countries-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountriesRoutingModule: () => (/* binding */ CountriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_by_capital_pages_by_capital_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/by-capital-pages/by-capital-pages.component */ 489);
/* harmony import */ var _pages_by_region_page_by_region_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/by-region-page/by-region-page.component */ 7594);
/* harmony import */ var _pages_by_country_page_by_country_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/by-country-page/by-country-page.component */ 7043);
/* harmony import */ var _pages_country_page_country_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/country-page/country.component */ 5250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: 'by-capital',
  component: _pages_by_capital_pages_by_capital_pages_component__WEBPACK_IMPORTED_MODULE_0__.ByCapitalPagesComponent
}, {
  path: 'by-country',
  component: _pages_by_country_page_by_country_page_component__WEBPACK_IMPORTED_MODULE_2__.ByCountryPageComponent
}, {
  path: 'by-region',
  component: _pages_by_region_page_by_region_page_component__WEBPACK_IMPORTED_MODULE_1__.ByRegionPageComponent
}, {
  path: 'by/:id',
  component: _pages_country_page_country_component__WEBPACK_IMPORTED_MODULE_3__.CountryComponent
}, {
  path: '**',
  redirectTo: 'by-capital'
}];
class CountriesRoutingModule {
  static #_ = this.ɵfac = function CountriesRoutingModule_Factory(t) {
    return new (t || CountriesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CountriesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CountriesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 776:
/*!***********************************************!*\
  !*** ./src/app/countries/countries.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountriesModule: () => (/* binding */ CountriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pages_by_capital_pages_by_capital_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/by-capital-pages/by-capital-pages.component */ 489);
/* harmony import */ var _pages_by_region_page_by_region_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/by-region-page/by-region-page.component */ 7594);
/* harmony import */ var _pages_by_country_page_by_country_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/by-country-page/by-country-page.component */ 7043);
/* harmony import */ var _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries-routing.module */ 6998);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _components_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/country-table/country-table.component */ 3068);
/* harmony import */ var _pages_country_page_country_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/country-page/country.component */ 5250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);









class CountriesModule {
  static #_ = this.ɵfac = function CountriesModule_Factory(t) {
    return new (t || CountriesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: CountriesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__.CountriesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CountriesModule, {
    declarations: [_pages_by_capital_pages_by_capital_pages_component__WEBPACK_IMPORTED_MODULE_0__.ByCapitalPagesComponent, _pages_by_country_page_by_country_page_component__WEBPACK_IMPORTED_MODULE_2__.ByCountryPageComponent, _pages_by_region_page_by_region_page_component__WEBPACK_IMPORTED_MODULE_1__.ByRegionPageComponent, _pages_country_page_country_component__WEBPACK_IMPORTED_MODULE_6__.CountryComponent, _components_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_5__.CountryTableComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__.CountriesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ }),

/***/ 489:
/*!********************************************************************************!*\
  !*** ./src/app/countries/pages/by-capital-pages/by-capital-pages.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByCapitalPagesComponent: () => (/* binding */ ByCapitalPagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/countries.service */ 195);
/* harmony import */ var _shared_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/search-box/search-box.component */ 8626);
/* harmony import */ var _components_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/country-table/country-table.component */ 3068);




class ByCapitalPagesComponent {
  constructor(countriesService) {
    this.countriesService = countriesService;
    this.countries = [];
  }
  searchByCapital(term) {
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
    });
  }
  static #_ = this.ɵfac = function ByCapitalPagesComponent_Factory(t) {
    return new (t || ByCapitalPagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_countries_service__WEBPACK_IMPORTED_MODULE_0__.CountriesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ByCapitalPagesComponent,
    selectors: [["by-capital"]],
    decls: 10,
    vars: 1,
    consts: [[1, "row"], [1, "col"], ["placeholder", "Buscar por capital", 3, "onValue"], [3, "countries"]],
    template: function ByCapitalPagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Por Capital");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "shared-search-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onValue", function ByCapitalPagesComponent_Template_shared_search_box_onValue_5_listener($event) {
          return ctx.searchByCapital($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 0)(8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "countries-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("countries", ctx.countries);
      }
    },
    dependencies: [_shared_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__.SearchBoxComponent, _components_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_2__.CountryTableComponent],
    encapsulation: 2
  });
}


/***/ }),

/***/ 7043:
/*!******************************************************************************!*\
  !*** ./src/app/countries/pages/by-country-page/by-country-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByCountryPageComponent: () => (/* binding */ ByCountryPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/countries.service */ 195);
/* harmony import */ var _shared_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/search-box/search-box.component */ 8626);
/* harmony import */ var _components_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/country-table/country-table.component */ 3068);




class ByCountryPageComponent {
  constructor(countriesService) {
    this.countriesService = countriesService;
    this.countries = [];
  }
  searchByCountry(term) {
    this.countriesService.searchCountry(term).subscribe(countries => {
      this.countries = countries;
    });
  }
  static #_ = this.ɵfac = function ByCountryPageComponent_Factory(t) {
    return new (t || ByCountryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_countries_service__WEBPACK_IMPORTED_MODULE_0__.CountriesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ByCountryPageComponent,
    selectors: [["by-country"]],
    decls: 10,
    vars: 1,
    consts: [[1, "row"], [1, "col"], ["placeholder", "Buscar por pa\u00EDs", 3, "onValue"], [3, "countries"]],
    template: function ByCountryPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Por Pa\u00EDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "shared-search-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onValue", function ByCountryPageComponent_Template_shared_search_box_onValue_5_listener($event) {
          return ctx.searchByCountry($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 0)(8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "countries-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("countries", ctx.countries);
      }
    },
    dependencies: [_shared_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__.SearchBoxComponent, _components_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_2__.CountryTableComponent],
    encapsulation: 2
  });
}


/***/ }),

/***/ 7594:
/*!****************************************************************************!*\
  !*** ./src/app/countries/pages/by-region-page/by-region-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByRegionPageComponent: () => (/* binding */ ByRegionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/countries.service */ 195);
/* harmony import */ var _shared_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/search-box/search-box.component */ 8626);
/* harmony import */ var _components_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/country-table/country-table.component */ 3068);




class ByRegionPageComponent {
  constructor(countriesService) {
    this.countriesService = countriesService;
    this.countries = [];
  }
  searchByRegion(region) {
    this.countriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries;
    });
  }
  static #_ = this.ɵfac = function ByRegionPageComponent_Factory(t) {
    return new (t || ByRegionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_countries_service__WEBPACK_IMPORTED_MODULE_0__.CountriesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ByRegionPageComponent,
    selectors: [["by-region"]],
    decls: 10,
    vars: 1,
    consts: [[1, "row"], [1, "col"], ["placeholder", "Buscar por Regi\u00F3n", 3, "onValue"], [3, "countries"]],
    template: function ByRegionPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Por Regi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "shared-search-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onValue", function ByRegionPageComponent_Template_shared_search_box_onValue_5_listener($event) {
          return ctx.searchByRegion($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 0)(8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "countries-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("countries", ctx.countries);
      }
    },
    dependencies: [_shared_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__.SearchBoxComponent, _components_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_2__.CountryTableComponent],
    encapsulation: 2
  });
}


/***/ }),

/***/ 5250:
/*!*******************************************************************!*\
  !*** ./src/app/countries/pages/country-page/country.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryComponent: () => (/* binding */ CountryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/countries.service */ 195);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function CountryComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Espere por favor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CountryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 4)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pa\u00EDs: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3)(9, "div", 5)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Escudo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Bandera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 9)(21, "li", 10)(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Poblaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 10)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "C\u00F3digo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 10)(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Coordenadas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 10)(34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Region:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11)(38, "div", 8)(39, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Traducciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 12)(42, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.name.common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.country.coatOfArms.svg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r2.country.coatOfArms.png);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.country.flags.svg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r2.country.flags.png);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.country.population, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.country.cca3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.country.capitalInfo.latlng, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.country.region, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["esp"].common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["bre"].common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["ces"].common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["cym"].common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["deu"].common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["est"].common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["fin"].common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["ita"].common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["kor"].common);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.country.translations["per"].common);
  }
}
class CountryComponent {
  constructor(activateRouter, coutriesService, router) {
    this.activateRouter = activateRouter;
    this.coutriesService = coutriesService;
    this.router = router;
  }
  ngOnInit() {
    this.activateRouter.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(({
      id
    }) => this.coutriesService.searchCountryByAlphaCode(id))).subscribe(country => {
      if (!country) return this.router.navigateByUrl('');
      //  return country = country;
      return this.country = country;
    });
  }
  static #_ = this.ɵfac = function CountryComponent_Factory(t) {
    return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_countries_service__WEBPACK_IMPORTED_MODULE_0__.CountriesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CountryComponent,
    selectors: [["app-country-page"]],
    decls: 3,
    vars: 2,
    consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [1, "alert", "alert-info", "text-center"], [1, "row"], [1, "col-12"], [1, "col-3"], [1, "img-thumbnail", 3, "src", "alt"], [1, "img-thumbnail", "img-fluid", 3, "src", "alt"], [1, "col"], [1, "list-group"], [1, "list-group-item"], [1, "row", "mt-2"], [1, "d-flex", "flex-wrap"], [1, "badge", "bg-primary", "m-1"]],
    template: function CountryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CountryComponent_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CountryComponent_div_2_Template, 62, 19, "div", 1);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.country)("ngIfElse", _r0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    encapsulation: 2
  });
}


/***/ }),

/***/ 195:
/*!*********************************************************!*\
  !*** ./src/app/countries/services/countries.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountriesService: () => (/* binding */ CountriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);



class CountriesService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://restcountries.com/v3.1';
  }
  searchCountryByAlphaCode(code) {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(countries => countries.length > 0 ? countries[0] : null), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null)));
  }
  searchCapital(term) {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
  }
  searchCountry(term) {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
  }
  searchRegion(region) {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
  }
  static #_ = this.ɵfac = function CountriesService_Factory(t) {
    return new (t || CountriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CountriesService,
    factory: CountriesService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_countries_countries_module_ts.js.map