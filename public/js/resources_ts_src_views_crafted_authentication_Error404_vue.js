"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_crafted_authentication_Error404_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
  name: "error-404",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=template&id=1f8fadd3&ts=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=template&id=1f8fadd3&ts=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex flex-column flex-center flex-column-fluid p-10"
};
var _hoisted_2 = ["src"];

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "fw-bold mb-10",
  style: {
    "color": "#a3a3c7"
  }
}, " Seems there is nothing here ", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Return Home");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Illustration"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.getIllustrationsPath('18.png'),
    alt: "",
    "class": "mw-100 mb-10 h-lg-450px"
  }, null, 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Illustration"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Message"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Message"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Link"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/dashboard",
    "class": "btn btn-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Link")]);
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

/***/ "./resources/ts/src/views/crafted/authentication/Error404.vue":
/*!********************************************************************!*\
  !*** ./resources/ts/src/views/crafted/authentication/Error404.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Error404_vue_vue_type_template_id_1f8fadd3_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error404.vue?vue&type=template&id=1f8fadd3&ts=true */ "./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=template&id=1f8fadd3&ts=true");
/* harmony import */ var _Error404_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error404.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=script&lang=ts");
/* harmony import */ var C_wamp64_www_metronic_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_metronic_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Error404_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Error404_vue_vue_type_template_id_1f8fadd3_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/crafted/authentication/Error404.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=script&lang=ts":
/*!********************************************************************************************!*\
  !*** ./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error404_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error404_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error404.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=template&id=1f8fadd3&ts=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=template&id=1f8fadd3&ts=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error404_vue_vue_type_template_id_1f8fadd3_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error404_vue_vue_type_template_id_1f8fadd3_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error404.vue?vue&type=template&id=1f8fadd3&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/authentication/Error404.vue?vue&type=template&id=1f8fadd3&ts=true");


/***/ })

}]);