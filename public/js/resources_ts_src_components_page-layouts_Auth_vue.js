"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_components_page-layouts_Auth_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/page-layouts/Auth.vue?vue&type=script&lang=ts":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/page-layouts/Auth.vue?vue&type=script&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/enums/StoreEnums */ "./resources/ts/src/store/enums/StoreEnums.ts");
/* harmony import */ var _core_helpers_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/helpers/assets */ "./resources/ts/src/core/helpers/assets.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "auth",
  components: {},
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      store.dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "bg-body");
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      store.dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
    return {
      getIllustrationsPath: _core_helpers_assets__WEBPACK_IMPORTED_MODULE_2__.getIllustrationsPath
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/page-layouts/Auth.vue?vue&type=template&id=2f7977a6&ts=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/page-layouts/Auth.vue?vue&type=template&id=2f7977a6&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "mb-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "Logo",
  src: "media/logos/logo-1.svg",
  "class": "h-45px"
})], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex flex-center flex-column-auto p-10\"><!--begin::Links--><div class=\"d-flex align-items-center fw-bold fs-6\"><a href=\"#\" class=\"text-muted text-hover-primary px-2\">About</a><a href=\"#\" class=\"text-muted text-hover-primary px-2\">Contact</a><a href=\"#\" class=\"text-muted text-hover-primary px-2\">Contact Us</a></div><!--end::Links--></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundImage: 'url(' + _ctx.getIllustrationsPath('14.png') + ')'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Logo"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Footer"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Footer")], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./resources/ts/src/core/helpers/assets.ts":
/*!*************************************************!*\
  !*** ./resources/ts/src/core/helpers/assets.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIllustrationsPath": () => (/* binding */ getIllustrationsPath)
/* harmony export */ });
/* harmony import */ var _core_helpers_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/helpers/config */ "./resources/ts/src/core/helpers/config.ts");

var getIllustrationsPath = function getIllustrationsPath(illustrationName) {
  return "media/illustrations/".concat(_core_helpers_config__WEBPACK_IMPORTED_MODULE_0__.illustrationsSet.value, "/").concat(illustrationName);
};

/***/ }),

/***/ "./resources/ts/src/core/helpers/config.ts":
/*!*************************************************!*\
  !*** ./resources/ts/src/core/helpers/config.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "displaySidebar": () => (/* binding */ displaySidebar),
/* harmony export */   "footerWidthFluid": () => (/* binding */ footerWidthFluid),
/* harmony export */   "headerWidthFluid": () => (/* binding */ headerWidthFluid),
/* harmony export */   "headerLeft": () => (/* binding */ headerLeft),
/* harmony export */   "asideDisplay": () => (/* binding */ asideDisplay),
/* harmony export */   "toolbarWidthFluid": () => (/* binding */ toolbarWidthFluid),
/* harmony export */   "toolbarDisplay": () => (/* binding */ toolbarDisplay),
/* harmony export */   "loaderEnabled": () => (/* binding */ loaderEnabled),
/* harmony export */   "contentWidthFluid": () => (/* binding */ contentWidthFluid),
/* harmony export */   "loaderLogo": () => (/* binding */ loaderLogo),
/* harmony export */   "asideEnabled": () => (/* binding */ asideEnabled),
/* harmony export */   "asideTheme": () => (/* binding */ asideTheme),
/* harmony export */   "subheaderDisplay": () => (/* binding */ subheaderDisplay),
/* harmony export */   "asideMenuIcons": () => (/* binding */ asideMenuIcons),
/* harmony export */   "themeLightLogo": () => (/* binding */ themeLightLogo),
/* harmony export */   "themeDarkLogo": () => (/* binding */ themeDarkLogo),
/* harmony export */   "headerMenuIcons": () => (/* binding */ headerMenuIcons),
/* harmony export */   "illustrationsSet": () => (/* binding */ illustrationsSet)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/index */ "./resources/ts/src/store/index.ts");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


/**
 * Returns layout config
 * @returns {object}
 */

var config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig();
});
/**
 * Set the sidebar display
 * @returns {boolean}
 */

var displaySidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("sidebar.display");
});
/**
 * Check if footer container is fluid
 * @returns {boolean}
 */

var footerWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("footer.width") === "fluid";
});
/**
 * Check if header container is fluid
 * @returns {boolean}
 */

var headerWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.width") === "fluid";
});
/**
 * Returns header left part type
 * @returns {string}
 */

var headerLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.left");
});
/**
 * Set the aside display
 * @returns {boolean}
 */

var asideDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.display") === true;
});
/**
 * Check if toolbar width is fluid
 * @returns {boolean}
 */

var toolbarWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("toolbar.width") === "fluid";
});
/**
 * Set the toolbar display
 * @returns {boolean}
 */

var toolbarDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("toolbar.display");
});
/**
 * Check if the page loader is enabled
 * @returns {boolean}
 */

var loaderEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("loader.display");
});
/**
 * Check if container width is fluid
 * @returns {boolean}
 */

var contentWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("content.width") === "fluid";
});
/**
 * Page loader logo image
 * @returns {string}
 */

var loaderLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.BASE_URL + _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("loader.logo");
});
/**
 * Check if the aside menu is enabled
 * @returns {boolean}
 */

var asideEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return !!_store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.display");
});
/**
 * Set the aside theme
 * @returns {string}
 */

var asideTheme = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.theme");
});
/**
 * Set the subheader display
 * @returns {boolean}
 */

var subheaderDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("toolbar.display");
});
/**
 * Set the aside menu icon type
 * @returns {string}
 */

var asideMenuIcons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.menuIcon");
});
/**
 * Light theme logo image
 * @returns {string}
 */

var themeLightLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("main.logo.light");
});
/**
 * Dark theme logo image
 * @returns {string}
 */

var themeDarkLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("main.logo.dark");
});
/**
 * Set the header menu icon type
 * @returns {string}
 */

var headerMenuIcons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.menuIcon");
});
/**
 * Illustrations set
 * @returns {string}
 */

var illustrationsSet = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("illustrations.set");
});

/***/ }),

/***/ "./resources/ts/src/components/page-layouts/Auth.vue":
/*!***********************************************************!*\
  !*** ./resources/ts/src/components/page-layouts/Auth.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Auth_vue_vue_type_template_id_2f7977a6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth.vue?vue&type=template&id=2f7977a6&ts=true */ "./resources/ts/src/components/page-layouts/Auth.vue?vue&type=template&id=2f7977a6&ts=true");
/* harmony import */ var _Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth.vue?vue&type=script&lang=ts */ "./resources/ts/src/components/page-layouts/Auth.vue?vue&type=script&lang=ts");
/* harmony import */ var C_wamp64_www_metronic_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_metronic_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Auth_vue_vue_type_template_id_2f7977a6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/components/page-layouts/Auth.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/components/page-layouts/Auth.vue?vue&type=script&lang=ts":
/*!***********************************************************************************!*\
  !*** ./resources/ts/src/components/page-layouts/Auth.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Auth.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/page-layouts/Auth.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/components/page-layouts/Auth.vue?vue&type=template&id=2f7977a6&ts=true":
/*!*************************************************************************************************!*\
  !*** ./resources/ts/src/components/page-layouts/Auth.vue?vue&type=template&id=2f7977a6&ts=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Auth_vue_vue_type_template_id_2f7977a6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Auth_vue_vue_type_template_id_2f7977a6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Auth.vue?vue&type=template&id=2f7977a6&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/page-layouts/Auth.vue?vue&type=template&id=2f7977a6&ts=true");


/***/ })

}]);