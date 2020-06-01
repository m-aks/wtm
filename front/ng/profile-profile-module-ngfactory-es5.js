function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module-ngfactory"], {
  /***/
  "./node_modules/@angular/material/checkbox/index.ngfactory.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/material/checkbox/index.ngfactory.js ***!
    \********************************************************************/

  /*! exports provided: _MatCheckboxRequiredValidatorModuleNgFactory, MatCheckboxModuleNgFactory, RenderType_MatCheckbox, View_MatCheckbox_0, View_MatCheckbox_Host_0, MatCheckboxNgFactory */

  /***/
  function node_modulesAngularMaterialCheckboxIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModuleNgFactory", function () {
      return _MatCheckboxRequiredValidatorModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxModuleNgFactory", function () {
      return MatCheckboxModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatCheckbox", function () {
      return RenderType_MatCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatCheckbox_0", function () {
      return View_MatCheckbox_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatCheckbox_Host_0", function () {
      return View_MatCheckbox_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxNgFactory", function () {
      return MatCheckboxNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var _MatCheckboxRequiredValidatorModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["_MatCheckboxRequiredValidatorModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["_MatCheckboxRequiredValidatorModule"], [])]);
    });

    var MatCheckboxModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], [])]);
    });

    var styles_MatCheckbox = ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"];

    var RenderType_MatCheckbox = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatCheckbox,
      data: {}
    });

    function View_MatCheckbox_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        _inputElement: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, {
        ripple: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, [["label", 1]], null, 16, "label", [["class", "mat-checkbox-layout"]], [[1, "for", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "div", [["class", "mat-checkbox-inner-container"]], [[2, "mat-checkbox-inner-container-no-side-margin", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, [[1, 0], ["input", 1]], null, 0, "input", [["class", "mat-checkbox-input cdk-visually-hidden"], ["type", "checkbox"]], [[8, "id", 0], [8, "required", 0], [8, "checked", 0], [1, "value", 0], [8, "disabled", 0], [1, "name", 0], [8, "tabIndex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-checked", 0]], [[null, "change"], [null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _co._onInteractionEvent($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co._onInputClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 3, "div", [["class", "mat-checkbox-ripple mat-focus-indicator mat-ripple"], ["matRipple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 212992, [[2, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
        centered: [0, "centered"],
        radius: [1, "radius"],
        animation: [2, "animation"],
        disabled: [3, "disabled"],
        trigger: [4, "trigger"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](7, {
        enterDuration: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "div", [["class", "mat-ripple-element mat-checkbox-persistent-ripple"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "div", [["class", "mat-checkbox-frame"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 3, "div", [["class", "mat-checkbox-background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, ":svg:svg", [[":xml:space", "preserve"], ["class", "mat-checkbox-checkmark"], ["focusable", "false"], ["version", "1.1"], ["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, ":svg:path", [["class", "mat-checkbox-checkmark-path"], ["d", "M4.1,12.7 9,17.6 20.3,6.3"], ["fill", "none"], ["stroke", "white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "div", [["class", "mat-checkbox-mixedmark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, [["checkboxLabel", 1]], null, 4, "span", [["class", "mat-checkbox-label"]], null, [[null, "cdkObserveContent"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("cdkObserveContent" === en) {
          var pd_0 = _co._onLabelTextChange() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 1196032, null, 0, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["CdkObserveContent"], [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ContentObserver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, {
        event: "cdkObserveContent"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "span", [["style", "display:none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\xA0"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_13 = true;
        var currVal_14 = 20;

        var currVal_15 = _ck(_v, 7, 0, 150);

        var currVal_16 = _co._isRippleDisabled();

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2);

        _ck(_v, 6, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.inputId;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).textContent || !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).textContent.trim();

        _ck(_v, 3, 0, currVal_1);

        var currVal_2 = _co.inputId;
        var currVal_3 = _co.required;
        var currVal_4 = _co.checked;
        var currVal_5 = _co.value;
        var currVal_6 = _co.disabled;
        var currVal_7 = _co.name;
        var currVal_8 = _co.tabIndex;
        var currVal_9 = _co.ariaLabel || null;
        var currVal_10 = _co.ariaLabelledby;

        var currVal_11 = _co._getAriaChecked();

        _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11);

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).unbounded;

        _ck(_v, 5, 0, currVal_12);
      });
    }

    function View_MatCheckbox_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], null, null, View_MatCheckbox_0, RenderType_MatCheckbox)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckbox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 12763136, null, 0, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [8, null], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MAT_CHECKBOX_CLICK_ACTION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MAT_CHECKBOX_DEFAULT_OPTIONS"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).id;

        var currVal_1 = null;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).indeterminate;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).checked;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).labelPosition == "before";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    var MatCheckboxNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-checkbox", _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckbox"], View_MatCheckbox_Host_0, {
      disableRipple: "disableRipple",
      color: "color",
      tabIndex: "tabIndex",
      ariaLabel: "aria-label",
      ariaLabelledby: "aria-labelledby",
      id: "id",
      required: "required",
      labelPosition: "labelPosition",
      name: "name",
      value: "value",
      checked: "checked",
      disabled: "disabled",
      indeterminate: "indeterminate"
    }, {
      change: "change",
      indeterminateChange: "indeterminateChange"
    }, ["*"]);
    /***/

  },

  /***/
  "./node_modules/@angular/material/chips/index.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/material/chips/index.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: MatChipsModuleNgFactory, RenderType_MatChipList, View_MatChipList_0, View_MatChipList_Host_0, MatChipListNgFactory */

  /***/
  function node_modulesAngularMaterialChipsIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipsModuleNgFactory", function () {
      return MatChipsModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatChipList", function () {
      return RenderType_MatChipList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatChipList_0", function () {
      return View_MatChipList_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatChipList_Host_0", function () {
      return View_MatChipList_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipListNgFactory", function () {
      return MatChipListNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MatChipsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MAT_CHIPS_DEFAULT_OPTIONS"], {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]]
      }, [])]);
    });

    var styles_MatChipList = [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"];

    var RenderType_MatChipList = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatChipList,
      data: {}
    });

    function View_MatChipList_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mat-chip-list-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
    }

    function View_MatChipList_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-chip-list", [["class", "mat-chip-list"]], [[1, "tabindex", 0], [1, "aria-describedby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-multiselectable", 0], [1, "role", 0], [2, "mat-chip-list-disabled", null], [2, "mat-chip-list-invalid", null], [2, "mat-chip-list-required", null], [1, "aria-orientation", 0], [8, "id", 0]], [[null, "focus"], [null, "blur"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).focus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._blur() !== false;
          ad = pd_1 && ad;
        }

        if ("keydown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._keydown($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, View_MatChipList_0, RenderType_MatChipList)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], null, [_angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChipList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1556480, null, 1, _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChipList"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        chips: 1
      })], function (_ck, _v) {
        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._tabIndex;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._ariaDescribedby || null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).role ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).required : null;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled.toString();

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).errorState;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).multiple;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).role;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).errorState;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).required;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).ariaOrientation;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._uid;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]);
      });
    }

    var MatChipListNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-chip-list", _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChipList"], View_MatChipList_Host_0, {
      errorStateMatcher: "errorStateMatcher",
      multiple: "multiple",
      compareWith: "compareWith",
      value: "value",
      required: "required",
      placeholder: "placeholder",
      disabled: "disabled",
      ariaOrientation: "aria-orientation",
      selectable: "selectable",
      tabIndex: "tabIndex"
    }, {
      change: "change",
      valueChange: "valueChange"
    }, ["*"]);
    /***/

  },

  /***/
  "./node_modules/@angular/material/icon/index.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@angular/material/icon/index.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: MatIconModuleNgFactory, RenderType_MatIcon, View_MatIcon_0, View_MatIcon_Host_0, MatIconNgFactory */

  /***/
  function node_modulesAngularMaterialIconIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconModuleNgFactory", function () {
      return MatIconModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatIcon", function () {
      return RenderType_MatIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatIcon_0", function () {
      return View_MatIcon_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatIcon_Host_0", function () {
      return View_MatIcon_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatIconNgFactory", function () {
      return MatIconNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MatIconModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], [])]);
    });

    var styles_MatIcon = [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"];

    var RenderType_MatIcon = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatIcon,
      data: {}
    });

    function View_MatIcon_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
    }

    function View_MatIcon_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, View_MatIcon_0, RenderType_MatIcon)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).inline;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).color !== "warn";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    var MatIconNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-icon", _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], View_MatIcon_Host_0, {
      color: "color",
      inline: "inline",
      svgIcon: "svgIcon",
      fontSet: "fontSet",
      fontIcon: "fontIcon"
    }, {}, ["*"]);
    /***/

  },

  /***/
  "./node_modules/@angular/material/menu/index.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@angular/material/menu/index.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: _MatMenuDirectivesModuleNgFactory, MatMenuModuleNgFactory, RenderType__MatMenu, View__MatMenu_0, View__MatMenu_Host_0, _MatMenuNgFactory, RenderType_MatMenuItem, View_MatMenuItem_0, View_MatMenuItem_Host_0, MatMenuItemNgFactory */

  /***/
  function node_modulesAngularMaterialMenuIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModuleNgFactory", function () {
      return _MatMenuDirectivesModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuModuleNgFactory", function () {
      return MatMenuModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType__MatMenu", function () {
      return RenderType__MatMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View__MatMenu_0", function () {
      return View__MatMenu_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View__MatMenu_Host_0", function () {
      return View__MatMenu_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuNgFactory", function () {
      return _MatMenuNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatMenuItem", function () {
      return RenderType_MatMenuItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatMenuItem_0", function () {
      return View_MatMenuItem_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatMenuItem_Host_0", function () {
      return View_MatMenuItem_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuItemNgFactory", function () {
      return MatMenuItemNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var _MatMenuDirectivesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], [])]);
    });

    var MatMenuModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], [])]);
    });

    var styles__MatMenu = [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"];

    var RenderType__MatMenu = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles__MatMenu,
      data: {
        "animation": [{
          type: 7,
          name: "transformMenu",
          definitions: [{
            type: 0,
            name: "void",
            styles: {
              type: 6,
              styles: {
                opacity: 0,
                transform: "scale(0.8)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: "void => enter",
            animation: {
              type: 3,
              steps: [{
                type: 11,
                selector: ".mat-menu-content, .mat-mdc-menu-content",
                animation: {
                  type: 4,
                  styles: {
                    type: 6,
                    styles: {
                      opacity: 1
                    },
                    offset: null
                  },
                  timings: "100ms linear"
                },
                options: null
              }, {
                type: 4,
                styles: {
                  type: 6,
                  styles: {
                    transform: "scale(1)"
                  },
                  offset: null
                },
                timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
              }],
              options: null
            },
            options: null
          }, {
            type: 1,
            expr: "* => void",
            animation: {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0
                },
                offset: null
              },
              timings: "100ms 25ms linear"
            },
            options: null
          }],
          options: {}
        }, {
          type: 7,
          name: "fadeInItems",
          definitions: [{
            type: 0,
            name: "showing",
            styles: {
              type: 6,
              styles: {
                opacity: 1
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: "void => *",
            animation: [{
              type: 6,
              styles: {
                opacity: 0
              },
              offset: null
            }, {
              type: 4,
              styles: null,
              timings: "400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View__MatMenu_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mat-menu-panel"], ["role", "menu"], ["tabindex", "-1"]], [[8, "id", 0], [24, "@transformMenu", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-describedby", 0]], [[null, "keydown"], [null, "click"], [null, "@transformMenu.start"], [null, "@transformMenu.done"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("keydown" === en) {
          var pd_0 = _co._handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.closed.emit("click") !== false;
          ad = pd_1 && ad;
        }

        if ("@transformMenu.start" === en) {
          var pd_2 = _co._onAnimationStart($event) !== false;
          ad = pd_2 && ad;
        }

        if ("@transformMenu.done" === en) {
          var pd_3 = _co._onAnimationDone($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "mat-menu-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_5 = "mat-menu-panel";
        var currVal_6 = _co._classList;

        _ck(_v, 1, 0, currVal_5, currVal_6);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.panelId;
        var currVal_1 = _co._panelAnimationState;
        var currVal_2 = _co.ariaLabel || null;
        var currVal_3 = _co.ariaLabelledby || null;
        var currVal_4 = _co.ariaDescribedby || null;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
      });
    }

    function View__MatMenu_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        templateRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2]], null, 0, null, View__MatMenu_1))], null, null);
    }

    function View__MatMenu_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "mat-menu", [], null, null, null, View__MatMenu_0, RenderType__MatMenu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 1294336, null, 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _allItems: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        items: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
        lazyContent: 0
      })], function (_ck, _v) {
        _ck(_v, 3, 0);
      }, null);
    }

    var _MatMenuNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-menu", _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], View__MatMenu_Host_0, {
      backdropClass: "backdropClass",
      ariaLabel: "aria-label",
      ariaLabelledby: "aria-labelledby",
      ariaDescribedby: "aria-describedby",
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: "overlapTrigger",
      hasBackdrop: "hasBackdrop",
      panelClass: "class",
      classList: "classList"
    }, {
      closed: "closed",
      close: "close"
    }, ["*"]);

    var styles_MatMenuItem = [];

    var RenderType_MatMenuItem = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatMenuItem,
      data: {}
    });

    function View_MatMenuItem_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "mat-menu-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
        disabled: [0, "disabled"],
        trigger: [1, "trigger"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.disableRipple || _co.disabled;

        var currVal_2 = _co._getHostElement();

        _ck(_v, 2, 0, currVal_1, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).unbounded;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_MatMenuItem_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, View_MatMenuItem_0, RenderType_MatMenuItem)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 180224, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_PANEL"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).role;

        var currVal_1 = true;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._highlighted;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._triggersSubmenu;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._getTabIndex();

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled.toString();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled || null;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    var MatMenuItemNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[mat-menu-item]", _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], View_MatMenuItem_Host_0, {
      disabled: "disabled",
      disableRipple: "disableRipple",
      role: "role"
    }, {}, ["*"]);
    /***/

  },

  /***/
  "./node_modules/@angular/material/sidenav/index.ngfactory.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/material/sidenav/index.ngfactory.js ***!
    \*******************************************************************/

  /*! exports provided: MatSidenavModuleNgFactory, RenderType_MatDrawerContent, View_MatDrawerContent_0, View_MatDrawerContent_Host_0, MatDrawerContentNgFactory, RenderType_MatDrawer, View_MatDrawer_0, View_MatDrawer_Host_0, MatDrawerNgFactory, RenderType_MatDrawerContainer, View_MatDrawerContainer_0, View_MatDrawerContainer_Host_0, MatDrawerContainerNgFactory, RenderType_MatSidenavContent, View_MatSidenavContent_0, View_MatSidenavContent_Host_0, MatSidenavContentNgFactory, RenderType_MatSidenav, View_MatSidenav_0, View_MatSidenav_Host_0, MatSidenavNgFactory, RenderType_MatSidenavContainer, View_MatSidenavContainer_0, View_MatSidenavContainer_Host_0, MatSidenavContainerNgFactory */

  /***/
  function node_modulesAngularMaterialSidenavIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavModuleNgFactory", function () {
      return MatSidenavModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatDrawerContent", function () {
      return RenderType_MatDrawerContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatDrawerContent_0", function () {
      return View_MatDrawerContent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatDrawerContent_Host_0", function () {
      return View_MatDrawerContent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDrawerContentNgFactory", function () {
      return MatDrawerContentNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatDrawer", function () {
      return RenderType_MatDrawer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatDrawer_0", function () {
      return View_MatDrawer_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatDrawer_Host_0", function () {
      return View_MatDrawer_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDrawerNgFactory", function () {
      return MatDrawerNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatDrawerContainer", function () {
      return RenderType_MatDrawerContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatDrawerContainer_0", function () {
      return View_MatDrawerContainer_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatDrawerContainer_Host_0", function () {
      return View_MatDrawerContainer_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDrawerContainerNgFactory", function () {
      return MatDrawerContainerNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatSidenavContent", function () {
      return RenderType_MatSidenavContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSidenavContent_0", function () {
      return View_MatSidenavContent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSidenavContent_Host_0", function () {
      return View_MatSidenavContent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavContentNgFactory", function () {
      return MatSidenavContentNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatSidenav", function () {
      return RenderType_MatSidenav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSidenav_0", function () {
      return View_MatSidenav_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSidenav_Host_0", function () {
      return View_MatSidenav_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavNgFactory", function () {
      return MatSidenavNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatSidenavContainer", function () {
      return RenderType_MatSidenavContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSidenavContainer_0", function () {
      return View_MatSidenavContainer_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSidenavContainer_Host_0", function () {
      return View_MatSidenavContainer_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavContainerNgFactory", function () {
      return MatSidenavContainerNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MatSidenavModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], [])]);
    });

    var styles_MatDrawerContent = [];

    var RenderType_MatDrawerContent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatDrawerContent,
      data: {}
    });

    function View_MatDrawerContent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
    }

    function View_MatDrawerContent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-drawer-content", [["class", "mat-drawer-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, View_MatDrawerContent_0, RenderType_MatDrawerContent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1294336, null, 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._container._contentMargins.left;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._container._contentMargins.right;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    var MatDrawerContentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-drawer-content", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContent"], View_MatDrawerContent_Host_0, {}, {}, ["*"]);

    var styles_MatDrawer = [];

    var RenderType_MatDrawer = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatDrawer,
      data: {
        "animation": [{
          type: 7,
          name: "transform",
          definitions: [{
            type: 0,
            name: "open, open-instant",
            styles: {
              type: 6,
              styles: {
                transform: "none",
                visibility: "visible"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 0,
            name: "void",
            styles: {
              type: 6,
              styles: {
                "box-shadow": "none",
                visibility: "hidden"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: "void => open-instant",
            animation: {
              type: 4,
              styles: null,
              timings: "0ms"
            },
            options: null
          }, {
            type: 1,
            expr: "void <=> open, open-instant => void",
            animation: {
              type: 4,
              styles: null,
              timings: "400ms cubic-bezier(0.25, 0.8, 0.25, 1)"
            },
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_MatDrawer_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mat-drawer-inner-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
    }

    function View_MatDrawer_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-drawer", [["class", "mat-drawer"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, View_MatDrawer_0, RenderType_MatDrawer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 3325952, null, 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["ɵangular_material_src_material_sidenav_sidenav_a"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).position === "end";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "over";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "push";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "side";

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).opened;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationState;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    var MatDrawerNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-drawer", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], View_MatDrawer_Host_0, {
      position: "position",
      mode: "mode",
      disableClose: "disableClose",
      autoFocus: "autoFocus",
      opened: "opened"
    }, {
      openedChange: "openedChange",
      _openedStream: "opened",
      openedStart: "openedStart",
      _closedStream: "closed",
      closedStart: "closedStart",
      onPositionChanged: "positionChanged"
    }, ["*"]);

    var styles_MatDrawerContainer = [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"];

    var RenderType_MatDrawerContainer = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatDrawerContainer,
      data: {}
    });

    function View_MatDrawerContainer_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "mat-drawer-backdrop"]], [[2, "mat-drawer-shown", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co._onBackdropClicked() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co._isShowingBackdrop();

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_MatDrawerContainer_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-drawer-content", [["class", "mat-drawer-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, View_MatDrawerContent_0, RenderType_MatDrawerContent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1294336, [[1, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](0, 2)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._container._contentMargins.left;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._container._contentMargins.right;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_MatDrawerContainer_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        _userContent: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatDrawerContainer_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatDrawerContainer_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.hasBackdrop;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = !_co._content;

        _ck(_v, 6, 0, currVal_1);
      }, null);
    }

    function View_MatDrawerContainer_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "mat-drawer-container", [["class", "mat-drawer-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, View_MatDrawerContainer_0, RenderType_MatDrawerContainer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        _content: 0
      })], function (_ck, _v) {
        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._backdropOverride;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var MatDrawerContainerNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-drawer-container", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], View_MatDrawerContainer_Host_0, {
      autosize: "autosize",
      hasBackdrop: "hasBackdrop"
    }, {
      backdropClick: "backdropClick"
    }, ["mat-drawer", "mat-drawer-content", "*"]);

    var styles_MatSidenavContent = [];

    var RenderType_MatSidenavContent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatSidenavContent,
      data: {}
    });

    function View_MatSidenavContent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
    }

    function View_MatSidenavContent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, View_MatSidenavContent_0, RenderType_MatSidenavContent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1294336, null, 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._container._contentMargins.left;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._container._contentMargins.right;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    var MatSidenavContentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-sidenav-content", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], View_MatSidenavContent_Host_0, {}, {}, ["*"]);

    var styles_MatSidenav = [];

    var RenderType_MatSidenav = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatSidenav,
      data: {
        "animation": [{
          type: 7,
          name: "transform",
          definitions: [{
            type: 0,
            name: "open, open-instant",
            styles: {
              type: 6,
              styles: {
                transform: "none",
                visibility: "visible"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 0,
            name: "void",
            styles: {
              type: 6,
              styles: {
                "box-shadow": "none",
                visibility: "hidden"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: "void => open-instant",
            animation: {
              type: 4,
              styles: null,
              timings: "0ms"
            },
            options: null
          }, {
            type: 1,
            expr: "void <=> open, open-instant => void",
            animation: {
              type: 4,
              styles: null,
              timings: "400ms cubic-bezier(0.25, 0.8, 0.25, 1)"
            },
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_MatSidenav_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mat-drawer-inner-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
    }

    function View_MatSidenav_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, View_MatSidenav_0, RenderType_MatSidenav)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 3325952, null, 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["ɵangular_material_src_material_sidenav_sidenav_a"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).position === "end";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "over";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "push";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "side";

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).opened;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).fixedInViewport;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).fixedTopGap : null;
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).fixedBottomGap : null;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationState;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
      });
    }

    var MatSidenavNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-sidenav", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], View_MatSidenav_Host_0, {
      position: "position",
      mode: "mode",
      disableClose: "disableClose",
      autoFocus: "autoFocus",
      opened: "opened",
      fixedInViewport: "fixedInViewport",
      fixedTopGap: "fixedTopGap",
      fixedBottomGap: "fixedBottomGap"
    }, {
      openedChange: "openedChange",
      _openedStream: "opened",
      openedStart: "openedStart",
      _closedStream: "closed",
      closedStart: "closedStart",
      onPositionChanged: "positionChanged"
    }, ["*"]);

    var styles_MatSidenavContainer = [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"];

    var RenderType_MatSidenavContainer = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatSidenavContainer,
      data: {}
    });

    function View_MatSidenavContainer_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "mat-drawer-backdrop"]], [[2, "mat-drawer-shown", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co._onBackdropClicked() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co._isShowingBackdrop();

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_MatSidenavContainer_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-sidenav-content", [["cdkScrollable", ""], ["class", "mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, View_MatSidenavContent_0, RenderType_MatSidenavContent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollable"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1294336, null, 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](0, 2)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._container._contentMargins.left;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._container._contentMargins.right;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_MatSidenavContainer_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        _userContent: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSidenavContainer_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSidenavContainer_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.hasBackdrop;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = !_co._content;

        _ck(_v, 6, 0, currVal_1);
      }, null);
    }

    function View_MatSidenavContainer_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, View_MatSidenavContainer_0, RenderType_MatSidenavContainer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        _content: 0
      })], function (_ck, _v) {
        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._backdropOverride;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var MatSidenavContainerNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-sidenav-container", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], View_MatSidenavContainer_Host_0, {
      autosize: "autosize",
      hasBackdrop: "hasBackdrop"
    }, {
      backdropClick: "backdropClick"
    }, ["mat-sidenav", "mat-sidenav-content", "*"]);
    /***/

  },

  /***/
  "./node_modules/@angular/material/slide-toggle/index.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/slide-toggle/index.ngfactory.js ***!
    \************************************************************************/

  /*! exports provided: _MatSlideToggleRequiredValidatorModuleNgFactory, MatSlideToggleModuleNgFactory, RenderType_MatSlideToggle, View_MatSlideToggle_0, View_MatSlideToggle_Host_0, MatSlideToggleNgFactory */

  /***/
  function node_modulesAngularMaterialSlideToggleIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModuleNgFactory", function () {
      return _MatSlideToggleRequiredValidatorModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleModuleNgFactory", function () {
      return MatSlideToggleModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatSlideToggle", function () {
      return RenderType_MatSlideToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSlideToggle_0", function () {
      return View_MatSlideToggle_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSlideToggle_Host_0", function () {
      return View_MatSlideToggle_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleNgFactory", function () {
      return MatSlideToggleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var _MatSlideToggleRequiredValidatorModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], [])]);
    });

    var MatSlideToggleModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], [])]);
    });

    var styles_MatSlideToggle = [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"];

    var RenderType_MatSlideToggle = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatSlideToggle,
      data: {}
    });

    function View_MatSlideToggle_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        _thumbEl: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, {
        _thumbBarEl: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 3, {
        _inputElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, [["label", 1]], null, 13, "label", [["class", "mat-slide-toggle-label"]], [[1, "for", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, [[2, 0], ["toggleBar", 1]], null, 7, "div", [["class", "mat-slide-toggle-bar"]], [[2, "mat-slide-toggle-bar-no-side-margin", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, [[3, 0], ["input", 1]], null, 0, "input", [["class", "mat-slide-toggle-input cdk-visually-hidden"], ["role", "switch"], ["type", "checkbox"]], [[8, "id", 0], [8, "required", 0], [8, "tabIndex", 0], [8, "checked", 0], [8, "disabled", 0], [1, "name", 0], [1, "aria-checked", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0]], [[null, "change"], [null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _co._onChangeEvent($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co._onInputClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, [[1, 0], ["thumbContainer", 1]], null, 5, "div", [["class", "mat-slide-toggle-thumb-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "div", [["class", "mat-slide-toggle-thumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 3, "div", [["class", "mat-slide-toggle-ripple mat-focus-indicator mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
        centered: [0, "centered"],
        radius: [1, "radius"],
        animation: [2, "animation"],
        disabled: [3, "disabled"],
        trigger: [4, "trigger"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](10, {
        enterDuration: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "div", [["class", "mat-ripple-element mat-slide-toggle-persistent-ripple"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, [["labelContent", 1]], null, 4, "span", [["class", "mat-slide-toggle-content"]], null, [[null, "cdkObserveContent"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("cdkObserveContent" === en) {
          var pd_0 = _co._onLabelTextChange() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 1196032, null, 0, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["CdkObserveContent"], [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ContentObserver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, {
        event: "cdkObserveContent"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "span", [["style", "display:none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\xA0"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_12 = true;
        var currVal_13 = 20;

        var currVal_14 = _ck(_v, 10, 0, 150);

        var currVal_15 = _co.disableRipple || _co.disabled;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3);

        _ck(_v, 9, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.inputId;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).textContent || !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).textContent.trim();

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.inputId;
        var currVal_3 = _co.required;
        var currVal_4 = _co.tabIndex;
        var currVal_5 = _co.checked;
        var currVal_6 = _co.disabled;
        var currVal_7 = _co.name;

        var currVal_8 = _co.checked.toString();

        var currVal_9 = _co.ariaLabel;
        var currVal_10 = _co.ariaLabelledby;

        _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).unbounded;

        _ck(_v, 8, 0, currVal_11);
      });
    }

    function View_MatSlideToggle_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-slide-toggle", [["class", "mat-slide-toggle"]], [[8, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null]], null, null, View_MatSlideToggle_0, RenderType_MatSlideToggle)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggle"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1228800, null, 0, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).id;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled ? null : 0 - 1;
        var currVal_2 = null;
        var currVal_3 = null;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).checked;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).labelPosition == "before";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
      });
    }

    var MatSlideToggleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-slide-toggle", _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggle"], View_MatSlideToggle_Host_0, {
      disabled: "disabled",
      disableRipple: "disableRipple",
      color: "color",
      tabIndex: "tabIndex",
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: "aria-label",
      ariaLabelledby: "aria-labelledby",
      required: "required",
      checked: "checked"
    }, {
      change: "change",
      toggleChange: "toggleChange",
      dragChange: "dragChange"
    }, ["*"]);
    /***/

  },

  /***/
  "./node_modules/@angular/material/toolbar/index.ngfactory.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/material/toolbar/index.ngfactory.js ***!
    \*******************************************************************/

  /*! exports provided: MatToolbarModuleNgFactory, RenderType_MatToolbar, View_MatToolbar_0, View_MatToolbar_Host_0, MatToolbarNgFactory */

  /***/
  function node_modulesAngularMaterialToolbarIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarModuleNgFactory", function () {
      return MatToolbarModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatToolbar", function () {
      return RenderType_MatToolbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatToolbar_0", function () {
      return View_MatToolbar_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatToolbar_Host_0", function () {
      return View_MatToolbar_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarNgFactory", function () {
      return MatToolbarNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MatToolbarModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], [])]);
    });

    var styles_MatToolbar = [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"];

    var RenderType_MatToolbar = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatToolbar,
      data: {}
    });

    function View_MatToolbar_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1)], null, null);
    }

    function View_MatToolbar_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-toolbar", [["class", "mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, View_MatToolbar_0, RenderType_MatToolbar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _toolbarRows: 1
      })], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._toolbarRows.length > 0;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._toolbarRows.length === 0;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    var MatToolbarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-toolbar", _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], View_MatToolbar_Host_0, {
      color: "color"
    }, {}, ["*", "mat-toolbar-row"]);
    /***/

  },

  /***/
  "./src/app/profile/notification/notification.component.css.shim.ngstyle.js":
  /*!*********************************************************************************!*\
    !*** ./src/app/profile/notification/notification.component.css.shim.ngstyle.js ***!
    \*********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppProfileNotificationNotificationComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".notifications[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 95vh;\r\n    background-color: rgba(255, 0, 0, 0.22);\r\n}\r\n\r\n.notification[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n    color: white;\r\n    margin: 5px 10px 5px 30px;\r\n    background-color: #323232;\r\n    width: 380px;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 2px #3f3f3f;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    font-size: 16px;\r\n    padding: 5px;\r\n    color: #ffbb00;\r\n    background: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: rgba(59, 59, 59, 0.9);\r\n}\r\n\r\n.go-to-button[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    width: 30px;\r\n    height: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDk1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yMik7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDVweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcclxuICAgIHdpZHRoOiAzODBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4ICMzZjNmM2Y7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICNmZmJiMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1OSwgNTksIDU5LCAwLjkpO1xyXG59XHJcblxyXG4uZ28tdG8tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/profile/notification/notification.component.ngfactory.js":
  /*!**************************************************************************!*\
    !*** ./src/app/profile/notification/notification.component.ngfactory.js ***!
    \**************************************************************************/

  /*! exports provided: RenderType_NotificationComponent, View_NotificationComponent_0, View_NotificationComponent_Host_0, NotificationComponentNgFactory */

  /***/
  function srcAppProfileNotificationNotificationComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_NotificationComponent", function () {
      return RenderType_NotificationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_NotificationComponent_0", function () {
      return View_NotificationComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_NotificationComponent_Host_0", function () {
      return View_NotificationComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponentNgFactory", function () {
      return NotificationComponentNgFactory;
    });
    /* harmony import */


    var _notification_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./notification.component.css.shim.ngstyle */
    "./src/app/profile/notification/notification.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification.component */
    "./src/app/profile/notification/notification.component.ts");
    /* harmony import */


    var _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/tasks.service */
    "./src/app/profile/shared/services/tasks.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_NotificationComponent = [_notification_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_NotificationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_NotificationComponent,
      data: {}
    });

    function View_NotificationComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "notification flex-row ver-flex-center hor-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "flex-row ver-flex-center hor-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [["class", "go-to-button flex-row ver-flex-center hor-flex-center"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onGoto(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Go to task"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["class", "close-button flex-row ver-flex-center hor-flex-center"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onHide(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["X"]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.notifyTimestamp, "short"));

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_NotificationComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "notifications flex-column ver-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NotificationComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.taskNotifications;

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_NotificationComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-notification", [], null, null, null, View_NotificationComponent_0, RenderType_NotificationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"], [_shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], null, null)], null, null);
    }

    var NotificationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-notification", _notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"], View_NotificationComponent_Host_0, {
      enable: "enable"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/profile/notification/notification.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/profile/notification/notification.component.ts ***!
    \****************************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppProfileNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
    });

    var NotificationComponent = /*#__PURE__*/function () {
      function NotificationComponent(tasksService, router) {
        _classCallCheck(this, NotificationComponent);

        this.tasksService = tasksService;
        this.router = router;
        this.enable = false;
        this.taskNotifications = [];
      }

      _createClass(NotificationComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }, {
        key: "toggleEnableNotifications",
        value: function toggleEnableNotifications() {
          var _this = this;

          this.enable = !this.enable;

          if (this.enable) {
            this.subscription = this.tasksService.check$.subscribe(function (tasks) {
              console.log('Notification tick');

              if (tasks.length) {
                var _iterator = _createForOfIteratorHelper(tasks),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var task = _step.value;

                    _this.taskNotifications.push(task);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            });
          }

          if (!this.enable) {
            this.subscription.unsubscribe();
          }
        }
      }, {
        key: "onGoto",
        value: function onGoto(notification) {
          this.router.navigate(['/profile', 'tasks'], {
            queryParams: {
              select: notification.id
            }
          });
          this.onHide(notification);
        }
      }, {
        key: "onHide",
        value: function onHide(notification) {
          this.taskNotifications = this.taskNotifications.filter(function (task) {
            return task.id !== notification.id;
          });
        }
      }]);

      return NotificationComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/profile.component.css.shim.ngstyle.js":
  /*!***************************************************************!*\
    !*** ./src/app/profile/profile.component.css.shim.ngstyle.js ***!
    \***************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppProfileProfileComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["mat-slide-toggle[_ngcontent-%COMP%] {\r\n    margin: 0 30px 0 90px;\r\n}\r\n\r\nmat-slide-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%] {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1000;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    height: 60px;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    margin-right: 45px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    min-width: 160px;\r\n    height: 100%;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    opacity: .6;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    width: 100%;\r\n    height: calc(100% - 3px);\r\n    position: absolute;\r\n    border-bottom: 3px solid #ff0000;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBLDREQUE0RCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgICBtYXJnaW46IDAgMzBweCAwIDkwcHg7XHJcbn1cclxuXHJcbm1hdC1zbGlkZS10b2dnbGUgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5uYXYtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5hdi1iYXIgLmxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5uYXYtYmFyIC5sZWZ0IC50aXRsZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm5hdi1iYXIgLmxlZnQgbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXYtYmFyIC5sZWZ0IG5hdiBhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxufVxyXG5cclxuLm5hdi1iYXIgLmxlZnQgbmF2IGEuYWN0aXZlLWxpbmsge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5hdi1iYXIgLmxlZnQgbmF2IGEuYWN0aXZlLWxpbms6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDNweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmMDAwMDtcclxufVxyXG5cclxuLm5hdi1iYXIgLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ngfactory.js":
  /*!********************************************************!*\
    !*** ./src/app/profile/profile.component.ngfactory.js ***!
    \********************************************************/

  /*! exports provided: RenderType_ProfileComponent, View_ProfileComponent_0, View_ProfileComponent_Host_0, ProfileComponentNgFactory */

  /***/
  function srcAppProfileProfileComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ProfileComponent", function () {
      return RenderType_ProfileComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProfileComponent_0", function () {
      return View_ProfileComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProfileComponent_Host_0", function () {
      return View_ProfileComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponentNgFactory", function () {
      return ProfileComponentNgFactory;
    });
    /* harmony import */


    var _profile_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profile.component.css.shim.ngstyle */
    "./src/app/profile/profile.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/toolbar/index.ngfactory */
    "./node_modules/@angular/material/toolbar/index.ngfactory.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_slide_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/slide-toggle/index.ngfactory */
    "./node_modules/@angular/material/slide-toggle/index.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/menu/index.ngfactory */
    "./node_modules/@angular/material/menu/index.ngfactory.js");
    /* harmony import */


    var _notification_notification_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./notification/notification.component.ngfactory */
    "./src/app/profile/notification/notification.component.ngfactory.js");
    /* harmony import */


    var _notification_notification_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./notification/notification.component */
    "./src/app/profile/notification/notification.component.ts");
    /* harmony import */


    var _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/services/tasks.service */
    "./src/app/profile/shared/services/tasks.service.ts");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./shared/services/contacts.service */
    "./src/app/profile/shared/services/contacts.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ProfileComponent = [_profile_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ProfileComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ProfileComponent,
      data: {}
    });

    function View_ProfileComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_ProfileComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please wait..."]))], null, null);
    }

    function View_ProfileComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 53, "mat-toolbar", [["class", "nav-bar mat-toolbar"], ["color", "primary"], ["role", "heading"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]], {
        color: [0, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _toolbarRows: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 27, "div", [["class", "left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Web Task Manager "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 24, "nav", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 7, "a", [["class", "mat-focus-indicator"], ["mat-button", ""], ["routerLinkActive", "active-link"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, [[3, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](10, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Tasks"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 7, "a", [["class", "mat-focus-indicator"], ["mat-button", ""], ["routerLinkActive", "active-link"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, [[5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](18, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Contacts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 7, "a", [["class", "mat-focus-indicator"], ["mat-button", ""], ["routerLinkActive", "active-link"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, [[7, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](26, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Remainders"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 22, "div", [["class", "right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 4, "mat-slide-toggle", [["class", "mat-slide-toggle"]], [[8, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"]], function (_v, en, $event) {
        var ad = true;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).toggleEnableNotifications() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_slide_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatSlideToggle_0"], _node_modules_angular_material_slide_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatSlideToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggle"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 1228800, null, 0, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]]], null, {
        change: "change"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Notifications"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 16777216, null, null, 6, "button", [["aria-haspopup", "true"], ["class", "mat-focus-indicator mat-menu-trigger"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._handleMousedown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._handleClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"]], {
        menu: [0, "menu"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["person"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 9, "mat-menu", [["xPosition", "before"]], null, null, null, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View__MatMenu_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 1294336, [["menu", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_DEFAULT_OPTIONS"]], {
        xPosition: [0, "xPosition"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _allItems: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        items: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, 0, 2, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.onSignOut() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 180224, [[8, 4], [9, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Sign Out"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["elseBlock", 2]], null, 0, null, View_ProfileComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "app-notification", [], null, null, null, _notification_notification_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_NotificationComponent_0"], _notification_notification_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_NotificationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 180224, [["notificationComponent", 4]], 0, _notification_notification_component__WEBPACK_IMPORTED_MODULE_21__["NotificationComponent"], [_shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_22__["TasksService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = "primary";

        _ck(_v, 1, 0, currVal_2);

        var currVal_9 = _ck(_v, 10, 0, "/profile", "tasks");

        _ck(_v, 9, 0, currVal_9);

        var currVal_10 = "active-link";

        _ck(_v, 11, 0, currVal_10);

        var currVal_17 = _ck(_v, 18, 0, "/profile", "contacts");

        _ck(_v, 17, 0, currVal_17);

        var currVal_18 = "active-link";

        _ck(_v, 19, 0, currVal_18);

        var currVal_25 = _ck(_v, 26, 0, "/profile", "remainders");

        _ck(_v, 25, 0, currVal_25);

        var currVal_26 = "active-link";

        _ck(_v, 27, 0, currVal_26);

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45);

        _ck(_v, 39, 0, currVal_39);

        _ck(_v, 41, 0);

        var currVal_43 = "before";

        _ck(_v, 45, 0, currVal_43);

        var currVal_51 = _co.tasksLoaded && _co.contactsLoaded;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56);

        _ck(_v, 55, 0, currVal_51, currVal_52);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).tabIndex || 0;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled || null;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled.toString();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationMode === "NoopAnimations";

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).target;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).href;

        _ck(_v, 7, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).tabIndex || 0;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled || null;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled.toString();

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._animationMode === "NoopAnimations";

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).target;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).href;

        _ck(_v, 15, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).tabIndex || 0;
        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled || null;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled.toString();

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._animationMode === "NoopAnimations";

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).target;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).href;

        _ck(_v, 23, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).id;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).disabled ? null : 0 - 1;
        var currVal_29 = null;
        var currVal_30 = null;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).checked;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).disabled;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).labelPosition == "before";
        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._animationMode === "NoopAnimations";

        _ck(_v, 32, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled || null;
        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._animationMode === "NoopAnimations";
        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).menuOpen || null;
        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).menuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).menu.panelId : null;

        _ck(_v, 37, 0, currVal_35, currVal_36, currVal_37, currVal_38);

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).inline;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).color !== "warn";

        _ck(_v, 40, 0, currVal_40, currVal_41);

        var currVal_42 = _co.auth.userLogin;

        _ck(_v, 43, 0, currVal_42);

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).role;

        var currVal_45 = true;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._highlighted;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._triggersSubmenu;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._getTabIndex();

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).disabled.toString();

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).disabled || null;

        _ck(_v, 51, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50);
      });
    }

    function View_ProfileComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-profile", [], null, null, null, View_ProfileComponent_0, RenderType_ProfileComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"], [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"], _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_22__["TasksService"], _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_25__["ContactsService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ProfileComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-profile", _profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"], View_ProfileComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(auth, tasksService, contactsService) {
        _classCallCheck(this, ProfileComponent);

        this.auth = auth;
        this.tasksService = tasksService;
        this.contactsService = contactsService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.contactsService.getAll().subscribe(function () {
            _this2.contactsLoaded = true;

            _this2.tasksService.getAll().subscribe(function () {
              return _this2.tasksLoaded = true;
            });
          });
          this.tasksService.startChecking();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tasksService.stopChecking();
        }
      }, {
        key: "onSignOut",
        value: function onSignOut() {
          this.tasksService.stopChecking();
          this.auth.signOut();
        }
      }]);

      return ProfileComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/profile.module.ngfactory.js":
  /*!*****************************************************!*\
    !*** ./src/app/profile/profile.module.ngfactory.js ***!
    \*****************************************************/

  /*! exports provided: ProfileModuleNgFactory */

  /***/
  function srcAppProfileProfileModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModuleNgFactory", function () {
      return ProfileModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profile_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile.module */
    "./src/app/profile/profile.module.ts");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/dialog/index.ngfactory */
    "./node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _tasks_tasks_page_tasks_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tasks/tasks-page/tasks-page.component.ngfactory */
    "./src/app/profile/tasks/tasks-page/tasks-page.component.ngfactory.js");
    /* harmony import */


    var _tasks_shared_components_task_action_task_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tasks/shared/components/task-action/task-action.component.ngfactory */
    "./src/app/profile/tasks/shared/components/task-action/task-action.component.ngfactory.js");
    /* harmony import */


    var _tasks_shared_components_task_contacts_task_contacts_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tasks/shared/components/task-contacts/task-contacts.component.ngfactory */
    "./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.ngfactory.js");
    /* harmony import */


    var _profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile.component.ngfactory */
    "./src/app/profile/profile.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/services/dialog-overview.service */
    "./src/app/profile/shared/services/dialog-overview.service.ts");
    /* harmony import */


    var _shared_services_xml_builder_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/services/xml-builder.service */
    "./src/app/profile/shared/services/xml-builder.service.ts");
    /* harmony import */


    var _shared_services_file_manager_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/services/file-manager.service */
    "./src/app/profile/shared/services/file-manager.service.ts");
    /* harmony import */


    var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../shared/services/snackbar.service */
    "./src/app/shared/services/snackbar.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/services/contacts.service */
    "./src/app/profile/shared/services/contacts.service.ts");
    /* harmony import */


    var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../shared/services/http.service */
    "./src/app/shared/services/http.service.ts");
    /* harmony import */


    var _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shared/services/tasks.service */
    "./src/app/profile/shared/services/tasks.service.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/fesm2015/grid-list.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_profile_shared_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./shared/profile-shared.module */
    "./src/app/profile/shared/profile-shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tasks_shared_tasks_shared_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./tasks/shared/tasks-shared.module */
    "./src/app/profile/tasks/shared/tasks-shared.module.ts");
    /* harmony import */


    var _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./tasks/tasks.module */
    "./src/app/profile/tasks/tasks.module.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/fesm2015/keycodes.js");
    /* harmony import */


    var _tasks_tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./tasks/tasks-page/tasks-page.component */
    "./src/app/profile/tasks/tasks-page/tasks-page.component.ts");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var ProfileModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_profile_module__WEBPACK_IMPORTED_MODULE_1__["ProfileModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainerNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _tasks_tasks_page_tasks_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TasksPageComponentNgFactory"], _tasks_shared_components_task_action_task_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["TaskActionComponentNgFactory"], _tasks_shared_components_task_contacts_task_contacts_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TaskContactsComponentNgFactory"], _profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ProfileComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_17__["DialogOverviewService"], _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_17__["DialogOverviewService"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_xml_builder_service__WEBPACK_IMPORTED_MODULE_18__["XmlBuilderService"], _shared_services_xml_builder_service__WEBPACK_IMPORTED_MODULE_18__["XmlBuilderService"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_file_manager_service__WEBPACK_IMPORTED_MODULE_19__["FileManagerService"], _shared_services_file_manager_service__WEBPACK_IMPORTED_MODULE_19__["FileManagerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_20__["SnackbarService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_20__["SnackbarService"], [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBar"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_22__["ContactsService"], _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_22__["ContactsService"], [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_23__["HttpService"], _shared_services_xml_builder_service__WEBPACK_IMPORTED_MODULE_18__["XmlBuilderService"], _shared_services_file_manager_service__WEBPACK_IMPORTED_MODULE_19__["FileManagerService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_20__["SnackbarService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_24__["TasksService"], _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_24__["TasksService"], [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_23__["HttpService"], _shared_services_file_manager_service__WEBPACK_IMPORTED_MODULE_19__["FileManagerService"], _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_22__["ContactsService"], _shared_services_xml_builder_service__WEBPACK_IMPORTED_MODULE_18__["XmlBuilderService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_20__["SnackbarService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_34__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_34__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_37__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_37__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_38__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_38__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_44__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_44__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_profile_shared_module__WEBPACK_IMPORTED_MODULE_45__["ProfileSharedModule"], _shared_profile_shared_module__WEBPACK_IMPORTED_MODULE_45__["ProfileSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_46__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_46__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_46__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_46__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tasks_shared_tasks_shared_module__WEBPACK_IMPORTED_MODULE_47__["TasksSharedModule"], _tasks_shared_tasks_shared_module__WEBPACK_IMPORTED_MODULE_47__["TasksSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_48__["TasksModule"], _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_48__["TasksModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _profile_module__WEBPACK_IMPORTED_MODULE_1__["ProfileModule"], _profile_module__WEBPACK_IMPORTED_MODULE_1__["ProfileModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__["MAT_CHIPS_DEFAULT_OPTIONS"], {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_49__["ENTER"]]
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_46__["ROUTES"], function () {
        return [[{
          path: "",
          component: _tasks_tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_50__["TasksPageComponent"]
        }], [{
          path: "",
          component: _profile_component__WEBPACK_IMPORTED_MODULE_51__["ProfileComponent"],
          children: [{
            path: "",
            redirectTo: "/profile/tasks",
            pathMatch: "full"
          }, {
            path: "tasks",
            loadChildren: _profile_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
          }, {
            path: "remainders",
            loadChildren: _profile_module__WEBPACK_IMPORTED_MODULE_1__["ɵ1"]
          }, {
            path: "contacts",
            loadChildren: _profile_module__WEBPACK_IMPORTED_MODULE_1__["ɵ2"]
          }]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule, ɵ0, ɵ1, ɵ2 */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
      return ɵ2;
    });

    var ɵ0 = function ɵ0() {
      return __webpack_require__.e(
      /*! import() | tasks-tasks-module-ngfactory */
      "tasks-tasks-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./tasks/tasks.module.ngfactory */
      "./src/app/profile/tasks/tasks.module.ngfactory.js")).then(function (m) {
        return m.TasksModuleNgFactory;
      });
    },
        ɵ1 = function ɵ1() {
      return __webpack_require__.e(
      /*! import() | remainders-remainders-module-ngfactory */
      "remainders-remainders-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./remainders/remainders.module.ngfactory */
      "./src/app/profile/remainders/remainders.module.ngfactory.js")).then(function (m) {
        return m.RemaindersModuleNgFactory;
      });
    },
        ɵ2 = function ɵ2() {
      return __webpack_require__.e(
      /*! import() | contacts-contacts-module-ngfactory */
      "contacts-contacts-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./contacts/contacts.module.ngfactory */
      "./src/app/profile/contacts/contacts.module.ngfactory.js")).then(function (m) {
        return m.ContactsModuleNgFactory;
      });
    }; // SearchService,


    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };
    /***/

  },

  /***/
  "./src/app/profile/shared/components/isotope-container/isotope-container.component.css.shim.ngstyle.js":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/profile/shared/components/isotope-container/isotope-container.component.css.shim.ngstyle.js ***!
    \*************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppProfileSharedComponentsIsotopeContainerIsotopeContainerComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".main-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    color: #5f6368;\r\n    margin-left: 20px;\r\n    margin-bottom: 0;\r\n    height: 20px;\r\n}\r\n\r\n.isotope-container[_ngcontent-%COMP%] {\r\n    width: calc(100% - 10px);\r\n    min-height: calc(100% - 20px);\r\n    padding: 0 5px 5px 5px;\r\n}\r\n\r\n.isotope-container[_ngcontent-%COMP%]     * {\r\n    margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9zaGFyZWQvY29tcG9uZW50cy9pc290b3BlLWNvbnRhaW5lci9pc290b3BlLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3NoYXJlZC9jb21wb25lbnRzL2lzb3RvcGUtY29udGFpbmVyL2lzb3RvcGUtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmlzb3RvcGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgcGFkZGluZzogMCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuLmlzb3RvcGUtY29udGFpbmVyIDo6bmctZGVlcCAqIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/profile/shared/components/isotope-container/isotope-container.component.ngfactory.js":
  /*!******************************************************************************************************!*\
    !*** ./src/app/profile/shared/components/isotope-container/isotope-container.component.ngfactory.js ***!
    \******************************************************************************************************/

  /*! exports provided: RenderType_IsotopeContainerComponent, View_IsotopeContainerComponent_0, View_IsotopeContainerComponent_Host_0, IsotopeContainerComponentNgFactory */

  /***/
  function srcAppProfileSharedComponentsIsotopeContainerIsotopeContainerComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_IsotopeContainerComponent", function () {
      return RenderType_IsotopeContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_IsotopeContainerComponent_0", function () {
      return View_IsotopeContainerComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_IsotopeContainerComponent_Host_0", function () {
      return View_IsotopeContainerComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsotopeContainerComponentNgFactory", function () {
      return IsotopeContainerComponentNgFactory;
    });
    /* harmony import */


    var _isotope_container_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./isotope-container.component.css.shim.ngstyle */
    "./src/app/profile/shared/components/isotope-container/isotope-container.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _isotope_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./isotope-container.component */
    "./src/app/profile/shared/components/isotope-container/isotope-container.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_IsotopeContainerComponent = [_isotope_container_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_IsotopeContainerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_IsotopeContainerComponent,
      data: {}
    });

    function View_IsotopeContainerComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h2", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.title;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_IsotopeContainerComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        container: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "main-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_IsotopeContainerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, [[1, 0], ["container", 1]], null, 1, "div", [["class", "isotope-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.title;

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_IsotopeContainerComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-isotope-container", [], null, null, null, View_IsotopeContainerComponent_0, RenderType_IsotopeContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4374528, null, 0, _isotope_container_component__WEBPACK_IMPORTED_MODULE_3__["IsotopeContainerComponent"], [], null, null)], null, null);
    }

    var IsotopeContainerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-isotope-container", _isotope_container_component__WEBPACK_IMPORTED_MODULE_3__["IsotopeContainerComponent"], View_IsotopeContainerComponent_Host_0, {
      selector: "selector",
      title: "title"
    }, {}, ["*"]);
    /***/

  },

  /***/
  "./src/app/profile/shared/components/isotope-container/isotope-container.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/profile/shared/components/isotope-container/isotope-container.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: IsotopeContainerComponent */

  /***/
  function srcAppProfileSharedComponentsIsotopeContainerIsotopeContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsotopeContainerComponent", function () {
      return IsotopeContainerComponent;
    });

    var IsotopeContainerComponent = /*#__PURE__*/function () {
      function IsotopeContainerComponent() {
        _classCallCheck(this, IsotopeContainerComponent);
      }

      _createClass(IsotopeContainerComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          if (this.container) {
            this.isotope = new Isotope(this.container.nativeElement, {
              itemSelector: this.selector,
              layoutMode: 'masonry'
            });
            this.mutationsObserver = new MutationObserver(function (mutations) {
              console.log(mutations);

              var _iterator2 = _createForOfIteratorHelper(mutations),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var mutation = _step2.value;

                  if (mutation.addedNodes.length) {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                      _this3.isotope.prepended(mutation.addedNodes.item(i));
                    }
                  }

                  if (mutation.removedNodes.length) {
                    for (var _i = 0; _i < mutation.removedNodes.length; _i++) {
                      _this3.isotope.remove(mutation.removedNodes.item(_i));
                    }
                  }

                  _this3.isotope.layout();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            });
            this.mutationsObserver.observe(this.container.nativeElement, {
              childList: true,
              attributeFilter: ['class']
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.mutationsObserver) {
            this.isotope.destroy();
            this.mutationsObserver.disconnect();
          }
        }
      }]);

      return IsotopeContainerComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/shared/components/search/search.component.css.shim.ngstyle.js":
  /*!***************************************************************************************!*\
    !*** ./src/app/profile/shared/components/search/search.component.css.shim.ngstyle.js ***!
    \***************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppProfileSharedComponentsSearchSearchComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".search-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: white;\r\n    width: 600px;\r\n    height: 40px;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 4px #a9a9a9;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 8px #a9a9a9;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    width: 500px;\r\n    min-width: 200px;\r\n    border: none;\r\n    height: 40px;\r\n    padding-left: 10px;\r\n    border-left: 0.1em solid #b7b7b7;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   .filters-button[_ngcontent-%COMP%] {\r\n    background: rgba(247, 247, 247, 0.8);\r\n    outline: none;\r\n    border: none;\r\n    width: 100px;\r\n    height: 40px;\r\n\r\n    font-size: 17px;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   .filters-button[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: rgba(233, 233, 233, 0.8);\r\n}\r\n\r\n.active-selector[_ngcontent-%COMP%] {\r\n    width: 9px;\r\n    height: 9px;\r\n    content: url('circle.png');\r\n}\r\n\r\n  .mat-menu-panel {\r\n    margin-top: 20px;\r\n    width: 140px;\r\n}\r\n\r\n.mat-menu-item[_ngcontent-%COMP%] {\r\n    padding: 0 6px;\r\n}\r\n\r\n.active-selectors[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 100px;\r\n    width: 500px;\r\n    height: 100px;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap;\r\n}\r\n\r\nmat-chip[_ngcontent-%COMP%]:hover   .deactivate-selector[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n.deactivate-selector[_ngcontent-%COMP%]:hover {\r\n    text-shadow: 0 0 2px red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9zaGFyZWQvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZOztJQUVaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCOztJQUV2QixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7O0lBRVosZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLDBCQUE0QztBQUNoRDs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhOztJQUViLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9zaGFyZWQvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAjYTlhOWE5O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4ICNhOWE5YTk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IC5pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuMWVtIHNvbGlkICNiN2I3Yjc7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IC5maWx0ZXJzLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuOCk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggLmZpbHRlcnMtYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC44KTtcclxufVxyXG5cclxuLmFjdGl2ZS1zZWxlY3RvciB7XHJcbiAgICB3aWR0aDogOXB4O1xyXG4gICAgaGVpZ2h0OiA5cHg7XHJcbiAgICBjb250ZW50OiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9jaXJjbGUucG5nXCIpO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4ubWF0LW1lbnUtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxufVxyXG5cclxuLmFjdGl2ZS1zZWxlY3RvcnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbm1hdC1jaGlwOmhvdmVyIC5kZWFjdGl2YXRlLXNlbGVjdG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5kZWFjdGl2YXRlLXNlbGVjdG9yOmhvdmVyIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4IHJlZDtcclxufVxyXG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/profile/shared/components/search/search.component.ngfactory.js":
  /*!********************************************************************************!*\
    !*** ./src/app/profile/shared/components/search/search.component.ngfactory.js ***!
    \********************************************************************************/

  /*! exports provided: RenderType_SearchComponent, View_SearchComponent_0, View_SearchComponent_Host_0, SearchComponentNgFactory */

  /***/
  function srcAppProfileSharedComponentsSearchSearchComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_SearchComponent", function () {
      return RenderType_SearchComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SearchComponent_0", function () {
      return View_SearchComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SearchComponent_Host_0", function () {
      return View_SearchComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponentNgFactory", function () {
      return SearchComponentNgFactory;
    });
    /* harmony import */


    var _search_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./search.component.css.shim.ngstyle */
    "./src/app/profile/shared/components/search/search.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/menu/index.ngfactory */
    "./node_modules/@angular/material/menu/index.ngfactory.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/fesm2015/chips.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _node_modules_angular_material_chips_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/chips/index.ngfactory */
    "./node_modules/@angular/material/chips/index.ngfactory.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./search.component */
    "./src/app/profile/shared/components/search/search.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_SearchComponent = [_search_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_SearchComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SearchComponent,
      data: {}
    });

    function View_SearchComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.name;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_SearchComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.name;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_SearchComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["class", "active-selector"]], null, null, null, null, null))], null, null);
    }

    function View_SearchComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.activeSelector(_v.context.$implicit) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_SearchComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_SearchComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_SearchComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_7 = _co.isActiveSelector(_v.context.$implicit);

        _ck(_v, 3, 0, currVal_7);

        var currVal_8 = !_co.isActiveSelector(_v.context.$implicit);

        _ck(_v, 5, 0, currVal_8);

        var currVal_9 = _co.isActiveSelector(_v.context.$implicit);

        _ck(_v, 7, 0, currVal_9);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role;

        var currVal_1 = true;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._highlighted;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._triggersSubmenu;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex();

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_SearchComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "mat-chip", [["class", "mat-chip mat-focus-indicator"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-chip-selected", null], [2, "mat-chip-with-avatar", null], [2, "mat-chip-with-trailing-icon", null], [2, "mat-chip-disabled", null], [2, "_mat-animation-noopable", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "click"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        if ("focus" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).focus() !== false;
          ad = pd_2 && ad;
        }

        if ("blur" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._blur() !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, [[4, 4]], 3, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        avatar: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        trailingIcon: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        removeIcon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["class", "deactivate-selector"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.deactivateSelector(_v.parent.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["X "]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabIndex;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).avatar;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).trailingIcon || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).removeIcon;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationsDisabled;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString();

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).ariaSelected;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_9 = _v.parent.context.$implicit.name;

        _ck(_v, 6, 0, currVal_9);
      });
    }

    function View_SearchComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.isActive;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_SearchComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [["class", "search-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 2, "button", [["aria-haspopup", "true"], ["class", "filters-button mat-menu-trigger"]], [[1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleMousedown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]], {
        menu: [0, "menu"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Filters "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "mat-menu", [["xPosition", "before"]], null, null, null, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View__MatMenu_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 1294336, [["menu", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_DEFAULT_OPTIONS"]], {
        xPosition: [0, "xPosition"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _allItems: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        items: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        lazyContent: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_SearchComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, [["searchInput", 1]], null, 0, "input", [["class", "input"], ["placeholder", "Search"], ["type", "text"]], null, [[null, "input"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _co.onInput(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).value) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["class", "active-selectors"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "mat-chip-list", [["class", "mat-chip-list"]], [[1, "tabindex", 0], [1, "aria-describedby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-multiselectable", 0], [1, "role", 0], [2, "mat-chip-list-disabled", null], [2, "mat-chip-list-invalid", null], [2, "mat-chip-list-required", null], [1, "aria-orientation", 0], [8, "id", 0]], [[null, "focus"], [null, "blur"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).focus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._blur() !== false;
          ad = pd_1 && ad;
        }

        if ("keydown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._keydown($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_chips_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatChipList_0"], _node_modules_angular_material_chips_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatChipList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], null, [_angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 1556480, null, 1, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        chips: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_SearchComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7);

        _ck(_v, 2, 0, currVal_2);

        var currVal_3 = "before";

        _ck(_v, 7, 0, currVal_3);

        var currVal_4 = _co.searchOptions.subSelectors;

        _ck(_v, 12, 0, currVal_4);

        _ck(_v, 17, 0);

        var currVal_17 = _co.searchOptions.subSelectors;

        _ck(_v, 20, 0, currVal_17);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).menuOpen || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).menuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).menu.panelId : null;

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._tabIndex;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._ariaDescribedby || null;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).role ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).required : null;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled.toString();

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).errorState;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).multiple;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).role;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).errorState;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).required;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ariaOrientation;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._uid;

        _ck(_v, 15, 1, [currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]);
      });
    }

    function View_SearchComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-search", [], null, null, null, View_SearchComponent_0, RenderType_SearchComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], [], null, null)], null, null);
    }

    var SearchComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-search", _search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], View_SearchComponent_Host_0, {
      searchOptions: "searchOptions"
    }, {
      onInputEvent: "onInputEvent"
    }, []);
    /***/

  },

  /***/
  "./src/app/profile/shared/components/search/search.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/profile/shared/components/search/search.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppProfileSharedComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.onInputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SearchComponent, [{
        key: "activeSelector",
        value: function activeSelector(category) {
          category.isActive = true;
        }
      }, {
        key: "deactivateSelector",
        value: function deactivateSelector(category) {
          category.isActive = false;
        }
      }, {
        key: "isActiveSelector",
        value: function isActiveSelector(category) {
          return category.isActive;
        }
      }, {
        key: "onInput",
        value: function onInput(value) {
          this.inputValue = value;
          var searchResult = {
            value: value,
            subSelectors: this.searchOptions.subSelectors.filter(function (selector) {
              return selector.isActive;
            })
          };
          this.onInputEvent.emit(searchResult);
        }
      }, {
        key: "searchAndMark",
        value: function searchAndMark() {
          this.clearAll(); // Получаем активные под-селекторы

          var activeSubSelectors = this.searchOptions.subSelectors.filter(function (ctg) {
            return ctg.isActive;
          }); // Если активных под-селекторов нет, то берем все

          var curSelectors = activeSubSelectors.length ? activeSubSelectors : this.searchOptions.subSelectors; // Находим элементы с селектором

          var elements = document.querySelectorAll(this.searchOptions.selector);

          for (var i = 0; i < elements.length; i++) {
            var element = elements.item(i);
            this.markBySelectors(this.inputValue, element, curSelectors);
          }
        }
      }, {
        key: "markBySelectors",
        value: function markBySelectors(value, element, selectors) {
          var _iterator3 = _createForOfIteratorHelper(selectors),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var selector = _step3.value;
              // Находим дочерний элемент через под-селектор
              var child = element.querySelector(selector.selector); // Если он есть

              if (child) {
                var startMarkIndex = child.textContent.search(value);

                if (startMarkIndex !== -1) {
                  this.mark(child, startMarkIndex, value.length);
                  child.classList.add('searcher-mark');
                }
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "clearAll",
        value: function clearAll() {
          var elements = document.querySelectorAll(this.searchOptions.selector);

          for (var i = 0; i < elements.length; i++) {
            var markedElements = elements.item(i).querySelectorAll('.searcher-mark');

            for (var j = 0; j < markedElements.length; j++) {
              markedElements.item(j).innerHTML = markedElements.item(j).textContent;
              markedElements.item(j).classList.remove('searcher-mark');
            }
          }
        }
      }, {
        key: "mark",
        value: function mark(element, start, end) {
          element.innerHTML = element.textContent.substring(0, start) + '<mark>' + element.textContent.substring(start, start + end) + '</mark>' + element.textContent.substring(start + end);
        }
      }]);

      return SearchComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/shared/profile-shared.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/profile/shared/profile-shared.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileSharedModule */

  /***/
  function srcAppProfileSharedProfileSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileSharedModule", function () {
      return ProfileSharedModule;
    });

    var ProfileSharedModule = function ProfileSharedModule() {
      _classCallCheck(this, ProfileSharedModule);
    };
    /***/

  },

  /***/
  "./src/app/profile/shared/services/contacts.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/profile/shared/services/contacts.service.ts ***!
    \*************************************************************/

  /*! exports provided: ContactsService */

  /***/
  function srcAppProfileSharedServicesContactsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsService", function () {
      return ContactsService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ContactsService = /*#__PURE__*/function () {
      function ContactsService(http, xmlBuilder, fileManager, snackbarService) {
        _classCallCheck(this, ContactsService);

        this.http = http;
        this.xmlBuilder = xmlBuilder;
        this.fileManager = fileManager;
        this.snackbarService = snackbarService;
        this.REQUEST_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl, "/ContactActionServlet");
      }

      _createClass(ContactsService, [{
        key: "getAll",
        value: function getAll() {
          var _this4 = this;

          return this.http.get(this.REQUEST_URL, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return _this4.xmlBuilder.xmlToContacts(response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (contacts) {
            return _this4.contacts = contacts;
          }));
        }
      }, {
        key: "add",
        value: function add(newContact) {
          var _this5 = this;

          var params = {
            action: 'add',
            xml: this.xmlBuilder.contactToXml(newContact)
          };
          this.http.post(this.REQUEST_URL, params).subscribe(function (generatedId) {
            newContact.id = +generatedId;

            _this5.contacts.push(newContact);

            _this5.snackbarService.openSnackBar("Contact added");
          });
        }
      }, {
        key: "update",
        value: function update(contact) {
          var _this6 = this;

          var params = {
            action: 'update',
            xml: this.xmlBuilder.contactToXml(contact)
          };
          this.http.post(this.REQUEST_URL, params).subscribe(function () {
            var index = _this6.contacts.findIndex(function (ct) {
              return ct.id === contact.id;
            });

            _this6.contacts[index] = contact;

            _this6.snackbarService.openSnackBar("Contact edited");
          });
        }
      }, {
        key: "delete",
        value: function _delete(contact) {
          var _this7 = this;

          var params = {
            action: 'delete',
            xml: this.xmlBuilder.contactToXml(contact)
          };
          this.http.post(this.REQUEST_URL, params).subscribe(function () {
            _this7.contacts = _this7.contacts.filter(function (ct) {
              return ct.id !== contact.id;
            });

            _this7.snackbarService.openSnackBar("Contact deleted");
          });
        }
      }, {
        key: "import",
        value: function _import() {
          var _this8 = this;

          this.fileManager.upload();
          var sub = this.fileManager.uploadResult.subscribe(function (result) {
            var params = {
              action: 'import',
              xml: result
            };

            _this8.http.post(_this8.REQUEST_URL, params).subscribe(function () {
              _this8.getAll().subscribe();

              _this8.snackbarService.openSnackBar("Contacts import success");
            }, function () {
              return _this8.snackbarService.openSnackBar("Contacts import fail");
            }, function () {
              return sub.unsubscribe();
            });
          });
        }
      }, {
        key: "export",
        value: function _export(contacts) {
          this.fileManager.unload(this.xmlBuilder.contactsToXml(contacts && contacts.length ? contacts : this.contacts), 'contacts-export.xml');
        }
      }, {
        key: "search",
        value: function search(value, categories) {
          var _this9 = this;

          var params = {
            value: value
          };

          if (categories.length) {
            var _iterator4 = _createForOfIteratorHelper(categories),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var category = _step4.value;
                params[category] = true;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          return this.http.get(this.REQUEST_URL, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return _this9.xmlBuilder.xmlToContacts(response);
          }));
        }
      }]);

      return ContactsService;
    }();
    /***/

  },

  /***/
  "./src/app/profile/shared/services/dialog-overview.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/profile/shared/services/dialog-overview.service.ts ***!
    \********************************************************************/

  /*! exports provided: DialogOverviewService */

  /***/
  function srcAppProfileSharedServicesDialogOverviewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogOverviewService", function () {
      return DialogOverviewService;
    });

    var DialogOverviewService = /*#__PURE__*/function () {
      function DialogOverviewService(matDialog) {
        _classCallCheck(this, DialogOverviewService);

        this.matDialog = matDialog;
      }

      _createClass(DialogOverviewService, [{
        key: "openDialog",
        value: function openDialog(component, data, changeUrl) {
          var dialog = this.matDialog.open(component, {
            width: '500px',
            data: data
          });
          return dialog.afterClosed();
        }
      }]);

      return DialogOverviewService;
    }();
    /***/

  },

  /***/
  "./src/app/profile/shared/services/file-manager.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/profile/shared/services/file-manager.service.ts ***!
    \*****************************************************************/

  /*! exports provided: FileManagerService */

  /***/
  function srcAppProfileSharedServicesFileManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileManagerService", function () {
      return FileManagerService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FileManagerService = /*#__PURE__*/function () {
      function FileManagerService() {
        var _this10 = this;

        _classCallCheck(this, FileManagerService);

        this.reader = new FileReader();
        this.form = document.createElement("form");
        this.inputElement = document.createElement('input');
        this.inputElement.setAttribute('type', 'file');
        this.inputElement.setAttribute('hidden', 'hidden');
        this.inputElement.setAttribute('multiple', 'false');
        this.inputElement.setAttribute('accept', 'xml/');
        this.linkElement = document.createElement('a');
        this.linkElement.style.display = 'none';
        this.uploadResult = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        this.inputElement.onchange = function (event) {
          new Promise(function (resolve) {
            _this10.reader.onload = function () {
              resolve(_this10.reader.result);
            };
          }).then(function (r) {
            _this10.uploadResult.next(r);

            _this10.form.reset();
          });

          _this10.reader.readAsText(event.target.files[0]);
        };

        this.form.appendChild(this.inputElement);
        this.form.appendChild(this.linkElement);
        document.body.appendChild(this.form);
      }

      _createClass(FileManagerService, [{
        key: "unload",
        value: function unload(content, fileName) {
          var file = new File([content], '');
          this.linkElement.setAttribute('href', URL.createObjectURL(file));
          this.linkElement.setAttribute('download', fileName);
          this.linkElement.click();
          URL.revokeObjectURL(this.linkElement.getAttribute('href'));
          this.linkElement.removeAttribute('href');
          this.linkElement.removeAttribute('download');
        }
      }, {
        key: "upload",
        value: function upload() {
          this.inputElement.click();
        }
      }]);

      return FileManagerService;
    }();
    /***/

  },

  /***/
  "./src/app/profile/shared/services/tasks.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/shared/services/tasks.service.ts ***!
    \**********************************************************/

  /*! exports provided: TasksService */

  /***/
  function srcAppProfileSharedServicesTasksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksService", function () {
      return TasksService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TasksService = /*#__PURE__*/function () {
      function TasksService(http, fileManager, contactsService, xmlBuilder, snackbarService) {
        _classCallCheck(this, TasksService);

        this.http = http;
        this.fileManager = fileManager;
        this.contactsService = contactsService;
        this.xmlBuilder = xmlBuilder;
        this.snackbarService = snackbarService;
        this.REQUEST_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl, "/TaskActionServlet");
      }

      _createClass(TasksService, [{
        key: "getAll",
        value: function getAll() {
          var _this11 = this;

          return this.http.get(this.REQUEST_URL, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return _this11.xmlBuilder.xmlToTasks(response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (tasks) {
            return _this11.tasks = tasks;
          }));
        }
      }, {
        key: "startChecking",
        value: function startChecking() {
          var _this12 = this;

          this.check$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.checkSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () {
            return _this12.http.post(_this12.REQUEST_URL, {
              action: 'check'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return _this12.xmlBuilder.xmlToTasks(response);
            }));
          })).subscribe(function (tasks) {
            var _iterator5 = _createForOfIteratorHelper(tasks),
                _step5;

            try {
              var _loop = function _loop() {
                var task = _step5.value;

                var index = _this12.tasks.findIndex(function (tsk) {
                  return tsk.id === task.id;
                });

                _this12.tasks[index] = task;
              };

              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            _this12.check$.next(tasks);
          });
        }
      }, {
        key: "stopChecking",
        value: function stopChecking() {
          if (this.checkSubscription && this.check$) {
            this.checkSubscription.unsubscribe();
            this.check$.complete();
          }
        }
      }, {
        key: "add",
        value: function add(newTask) {
          var _this13 = this;

          var params = {
            action: 'add',
            xml: this.xmlBuilder.taskToXml(newTask)
          };
          this.http.post(this.REQUEST_URL, params).subscribe(function (generatedId) {
            newTask.id = +generatedId;

            _this13.tasks.push(newTask);

            _this13.snackbarService.openSnackBar("Task added");
          });
        }
      }, {
        key: "update",
        value: function update(task) {
          var _this14 = this;

          var params = {
            action: 'update',
            xml: this.xmlBuilder.taskToXml(task)
          };
          this.http.post(this.REQUEST_URL, params).subscribe(function () {
            var index = _this14.tasks.findIndex(function (tsk) {
              return tsk.id === task.id;
            });

            _this14.tasks[index] = task;

            _this14.snackbarService.openSnackBar("Task edited");
          });
        }
      }, {
        key: "delete",
        value: function _delete(task) {
          var _this15 = this;

          var params = {
            action: 'delete',
            xml: this.xmlBuilder.taskToXml(task)
          };
          this.http.post(this.REQUEST_URL, params).subscribe(function () {
            _this15.tasks = _this15.tasks.filter(function (tsk) {
              return tsk.id !== task.id;
            });

            _this15.snackbarService.openSnackBar("Task deleted");
          });
        }
      }, {
        key: "search",
        value: function search(value, categories) {
          var _this16 = this;

          var params = {
            value: value
          };

          if (categories.length) {
            var _iterator6 = _createForOfIteratorHelper(categories),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var category = _step6.value;
                params[category] = true;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          return this.http.get(this.REQUEST_URL, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return _this16.xmlBuilder.xmlToTasks(response);
          }));
        }
      }, {
        key: "import",
        value: function _import() {
          var _this17 = this;

          this.fileManager.upload();
          var sub = this.fileManager.uploadResult.subscribe(function (result) {
            var params = {
              action: 'import',
              xml: result
            };

            _this17.http.post(_this17.REQUEST_URL, params).subscribe(function () {
              _this17.contactsService.getAll().subscribe(function () {
                return _this17.getAll().subscribe();
              });

              _this17.snackbarService.openSnackBar("Tasks import success");
            }, function () {
              return _this17.snackbarService.openSnackBar("Tasks import fail");
            }, function () {
              return sub.unsubscribe();
            });
          });
        }
      }, {
        key: "export",
        value: function _export(tasks) {
          this.fileManager.unload(this.xmlBuilder.tasksToXml(tasks && tasks.length ? tasks : this.tasks), 'tasks-export.xml');
        }
      }]);

      return TasksService;
    }();
    /***/

  },

  /***/
  "./src/app/profile/shared/services/xml-builder.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/profile/shared/services/xml-builder.service.ts ***!
    \****************************************************************/

  /*! exports provided: XmlBuilderService */

  /***/
  function srcAppProfileSharedServicesXmlBuilderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XmlBuilderService", function () {
      return XmlBuilderService;
    });

    var XmlBuilderService = /*#__PURE__*/function () {
      function XmlBuilderService(_datePipe) {
        _classCallCheck(this, XmlBuilderService);

        this._datePipe = _datePipe;
      }

      _createClass(XmlBuilderService, [{
        key: "tasksToXml",
        value: function tasksToXml(tasks) {
          var tasksElement = document.createElement("tasks");

          var _iterator7 = _createForOfIteratorHelper(tasks),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var task = _step7.value;
              tasksElement.appendChild(this.createTaskElement(task));
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          return tasksElement.outerHTML;
        }
      }, {
        key: "contactsToXml",
        value: function contactsToXml(contacts) {
          var contactsElement = document.createElement("contacts");

          var _iterator8 = _createForOfIteratorHelper(contacts),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var contact = _step8.value;
              contactsElement.appendChild(this.createContactElement(contact));
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          return contactsElement.outerHTML;
        }
      }, {
        key: "taskToXml",
        value: function taskToXml(task) {
          return this.createTaskElement(task).outerHTML;
        }
      }, {
        key: "contactToXml",
        value: function contactToXml(contact) {
          return this.createContactElement(contact).outerHTML;
        }
      }, {
        key: "xmlToTasks",
        value: function xmlToTasks(xml) {
          var root;

          if (typeof xml === 'string') {
            var parser = new DOMParser();
            root = parser.parseFromString(xml, 'text/xml');
          } else {
            root = xml;
          }

          var taskElements = root.querySelector('tasks');
          var tasks = [];

          for (var i = 0; i < taskElements.childNodes.length; i++) {
            var taskElement = taskElements.childNodes.item(i);
            var id = taskElement.querySelector('id').innerHTML;
            var name = taskElement.querySelector('name').innerHTML;
            var description = taskElement.querySelector('description').innerHTML;
            var completed = taskElement.querySelector('completed').innerHTML;
            var fixed = taskElement.querySelector('fixed').innerHTML;
            console.log(fixed);
            var notifyDatetime = taskElement.querySelector('notify-timestamp').innerHTML;
            var contacts = this.xmlToContacts(taskElement, 'task-contacts');
            tasks.push({
              id: +id,
              name: name,
              description: description,
              completed: completed === "true",
              fixed: fixed === "true",
              notifyTimestamp: new Date(notifyDatetime),
              contacts: contacts
            });
          }

          return tasks;
        }
      }, {
        key: "xmlToContacts",
        value: function xmlToContacts(xml, tag) {
          var root;

          if (typeof xml === 'string') {
            var parser = new DOMParser();
            root = parser.parseFromString(xml, 'text/xml');
          } else {
            root = xml;
          }

          var contacts = [];
          var contactElements = root.querySelector(tag ? tag : 'contacts');

          for (var i = 0; i < contactElements.childNodes.length; i++) {
            var contactElement = contactElements.childNodes.item(i);
            var id = contactElement.querySelector('id').innerHTML;
            var name = contactElement.querySelector('name').innerHTML;
            var phone_number = contactElement.querySelector('phone-number').innerHTML;
            contacts.push({
              id: +id,
              name: name,
              phone_number: phone_number
            });
          }

          return contacts;
        }
      }, {
        key: "createTaskElement",
        value: function createTaskElement(task) {
          var taskElement = document.createElement('task');

          if (task.id) {
            taskElement.appendChild(this.createElement('id', task.id));
          }

          taskElement.appendChild(this.createElement('name', task.name));
          taskElement.appendChild(this.createElement('description', task.description));
          taskElement.appendChild(this.createElement('completed', task.completed));
          taskElement.appendChild(this.createElement('fixed', task.fixed));

          var notifyDatetime = this._datePipe.transform(task.notifyTimestamp, "yyyy-MM-dd HH:mm");

          taskElement.appendChild(this.createElement('notify-timestamp', notifyDatetime));

          if (task.contacts) {
            var contacts = document.createElement('task-contacts');

            var _iterator9 = _createForOfIteratorHelper(task.contacts),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var contact = _step9.value;
                contacts.appendChild(this.createContactElement(contact));
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            taskElement.appendChild(contacts);
          }

          return taskElement;
        }
      }, {
        key: "createContactElement",
        value: function createContactElement(contact) {
          var contactElement = document.createElement('contact');

          if (contact.id) {
            contactElement.appendChild(this.createElement('id', contact.id));
          }

          contactElement.appendChild(this.createElement('name', contact.name));
          contactElement.appendChild(this.createElement('phone-number', contact.phone_number));
          return contactElement;
        }
      }, {
        key: "createElement",
        value: function createElement(elementName, content) {
          var element = document.createElement(elementName);
          element.innerText = content;
          return element;
        }
      }]);

      return XmlBuilderService;
    }();
    /***/

  },

  /***/
  "./src/app/profile/tasks/pipes/fixed-tasks.pipe.ts":
  /*!*********************************************************!*\
    !*** ./src/app/profile/tasks/pipes/fixed-tasks.pipe.ts ***!
    \*********************************************************/

  /*! exports provided: FixedTasksPipe */

  /***/
  function srcAppProfileTasksPipesFixedTasksPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedTasksPipe", function () {
      return FixedTasksPipe;
    });

    var FixedTasksPipe = /*#__PURE__*/function () {
      function FixedTasksPipe() {
        _classCallCheck(this, FixedTasksPipe);
      }

      _createClass(FixedTasksPipe, [{
        key: "transform",
        value: function transform(tasks, filter) {
          if (!tasks) return [];

          if (tasks && filter === 'fixed') {
            return tasks.filter(function (task) {
              return task.fixed;
            });
          } else if (tasks && filter === 'unfixed') {
            return tasks.filter(function (task) {
              return !task.fixed;
            });
          }
        }
      }]);

      return FixedTasksPipe;
    }();
    /***/

  },

  /***/
  "./src/app/profile/tasks/shared/components/task-action/task-action.component.css.shim.ngstyle.js":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/profile/tasks/shared/components/task-action/task-action.component.css.shim.ngstyle.js ***!
    \*******************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppProfileTasksSharedComponentsTaskActionTaskActionComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["input[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n}\r\ninput.underline[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #5b5b5b;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n  border: none;\r\n  min-height: 100px;\r\n}\r\n.columns[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.left-column[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n  border-right: 2px solid #a5a5a5;\r\n  padding-right: 10px;\r\n  margin-right: 10px;\r\n}\r\n.right-column[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n  height: 100%;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  width: 214px;\r\n  border: 1px solid lightgray;\r\n  overflow-y: scroll;\r\n  height: 160px;\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS90YXNrcy9zaGFyZWQvY29tcG9uZW50cy90YXNrLWFjdGlvbi90YXNrLWFjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBRW5CLHlCQUF5QjtBQUN6QixnREFBZ0Q7QUFFaEQsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsbUNBQW1DO0FBQ25DLHlCQUF5QjtBQUV6Qix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLElBQUk7QUFFSixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUVqQixtQkFBbUI7QUFDbkIsNEJBQTRCO0FBQzVCLGlDQUFpQztBQUNqQyx5QkFBeUI7QUFDekIsSUFBSTtBQUVKLDJDQUEyQztBQUMzQyxzQkFBc0I7QUFDdEIsSUFBSTtBQUVKLGtDQUFrQztBQUNsQyxnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsSUFBSTtBQUVKLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBRWpCLDJDQUEyQztBQUMzQywrQ0FBK0M7QUFDL0Msd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QixJQUFJO0FBRUo7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdGFza3Mvc2hhcmVkL2NvbXBvbmVudHMvdGFzay1hY3Rpb24vdGFzay1hY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZm9ybSB7Ki9cclxuLyogIHdpZHRoOiA3MDBweDsqL1xyXG4vKiAgaGVpZ2h0OiA0NjBweDsqL1xyXG5cclxuLyogIGJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cclxuLyogIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTsqL1xyXG5cclxuLyogIGRpc3BsYXk6IGZsZXg7Ki9cclxuLyogIGZsZXgtZGlyZWN0aW9uOiByb3c7Ki9cclxuLyogIGZsZXgtd3JhcDogd3JhcDsqL1xyXG4vKiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7Ki9cclxuLyogIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cclxuXHJcbi8qICBtYXJnaW4tbGVmdDogNDBweDsqL1xyXG4vKiAgbWFyZ2luLXRvcDogNDBweDsqL1xyXG4vKn0qL1xyXG5cclxuLyoubWFpbi1pbmZvLWJveCB7Ki9cclxuLyogIHdpZHRoOiA0NSU7Ki9cclxuLyogIGhlaWdodDogNTAlOyovXHJcblxyXG4vKiAgZGlzcGxheTogZmxleDsqL1xyXG4vKiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xyXG4vKiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyovXHJcbi8qICBhbGlnbi1pdGVtczogY2VudGVyOyovXHJcbi8qfSovXHJcblxyXG4vKi5tYWluLWluZm8tYm94IG1hdC1mb3JtLWZpZWxkIHRleHRhcmVhIHsqL1xyXG4vKiAgbWF4LWhlaWdodDogNzBweDsqL1xyXG4vKn0qL1xyXG5cclxuLyoubWFpbi1pbmZvLWJveCBtYXQtZm9ybS1maWVsZCB7Ki9cclxuLyogIHdpZHRoOiA5MCU7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLmRhdGV0aW1lIHsqL1xyXG4vKiAgZGlzcGxheTogZmxleDsqL1xyXG4vKiAgZmxleC1kaXJlY3Rpb246IHJvdzsqL1xyXG4vKiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cclxuLyogIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLmRhdGV0aW1lIG1hdC1mb3JtLWZpZWxkIHsqL1xyXG4vKiAgd2lkdGg6IDQwJTsqL1xyXG4vKn0qL1xyXG5cclxuLyouY29udGFjdHMgeyovXHJcbi8qICB3aWR0aDogNDUlOyovXHJcbi8qICBoZWlnaHQ6IDUwJTsqL1xyXG5cclxuLyogIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40OSk7Ki9cclxuLyogIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyovXHJcbi8qICBib3JkZXItcmFkaXVzOiA0cHg7Ki9cclxuLyogIG92ZXJmbG93LXk6IGF1dG87Ki9cclxuLyp9Ki9cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQudW5kZXJsaW5lIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzViNWI1YjtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNvbHVtbnMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxlZnQtY29sdW1uIHtcclxuICB3aWR0aDogNDglO1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNhNWE1YTU7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2x1bW4ge1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgd2lkdGg6IDIxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuIl19 */"];
    /***/
  },

  /***/
  "./src/app/profile/tasks/shared/components/task-action/task-action.component.ngfactory.js":
  /*!************************************************************************************************!*\
    !*** ./src/app/profile/tasks/shared/components/task-action/task-action.component.ngfactory.js ***!
    \************************************************************************************************/

  /*! exports provided: RenderType_TaskActionComponent, View_TaskActionComponent_0, View_TaskActionComponent_Host_0, TaskActionComponentNgFactory */

  /***/
  function srcAppProfileTasksSharedComponentsTaskActionTaskActionComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TaskActionComponent", function () {
      return RenderType_TaskActionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TaskActionComponent_0", function () {
      return View_TaskActionComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TaskActionComponent_Host_0", function () {
      return View_TaskActionComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskActionComponentNgFactory", function () {
      return TaskActionComponentNgFactory;
    });
    /* harmony import */


    var _task_action_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./task-action.component.css.shim.ngstyle */
    "./src/app/profile/tasks/shared/components/task-action/task-action.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_checkbox_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../node_modules/@angular/material/checkbox/index.ngfactory */
    "./node_modules/@angular/material/checkbox/index.ngfactory.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _shared_directives_text_area_auto_resize_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/directives/text-area-auto-resize.directive */
    "./src/app/shared/directives/text-area-auto-resize.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _task_action_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./task-action.component */
    "./src/app/profile/tasks/shared/components/task-action/task-action.component.ts");
    /* harmony import */


    var _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../shared/services/contacts.service */
    "./src/app/profile/shared/services/contacts.service.ts");
    /* harmony import */


    var _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../shared/services/tasks.service */
    "./src/app/profile/shared/services/tasks.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_TaskActionComponent = [_task_action_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_TaskActionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TaskActionComponent,
      data: {}
    });

    function View_TaskActionComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_angular_material_checkbox_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCheckbox_0"], _node_modules_angular_material_checkbox_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 12763136, null, 0, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [8, null], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MAT_CHECKBOX_CLICK_ACTION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MAT_CHECKBOX_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, 0, [" ", " ", " "]))], function (_ck, _v) {
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.id, "");

        _ck(_v, 4, 0, currVal_14);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

        var currVal_1 = null;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).indeterminate;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).checked;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).labelPosition == "before";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13]);

        var currVal_15 = _v.context.$implicit.name;
        var currVal_16 = _v.context.$implicit.phone_number;

        _ck(_v, 7, 0, currVal_15, currVal_16);
      });
    }

    function View_TaskActionComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 46, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.submitHandler() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "input", [["autocomplete", "false"], ["class", "mat-dialog-title"], ["formControlName", "name"], ["mat-dialog-title", ""], ["placeholder", "Enter a task name..."]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 29, "div", [["class", "columns flex-row hor-flex-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 21, "div", [["class", "left-column flex-column ver-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "textarea", [["formControlName", "description"], ["placeholder", "Enter a task description"], ["textAreaAutoResize", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "keyup"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("keyup" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onKeyup() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _shared_directives_text_area_auto_resize_directive__WEBPACK_IMPORTED_MODULE_8__["TextAreaAutoResize"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 12, "div", [["class", "flex-column ver-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 5, "input", [["autocomplete", "false"], ["class", "underline"], ["formControlName", "date"], ["type", "date"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "input", [["autocomplete", "false"], ["class", "underline"], ["formControlName", "time"], ["type", "time"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 6, "div", [["class", "right-column flex-column ver-space-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 5, "ul", [["formGroupName", "contacts"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaskActionComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 4, "div", [["class", "flex-row hor-flex-center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], {
        disabled: [0, "disabled"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](46, 0, [" ", " "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.form;

        _ck(_v, 2, 0, currVal_7);

        var currVal_16 = "name";

        _ck(_v, 8, 0, currVal_16);

        _ck(_v, 11, 0);

        var currVal_24 = "description";

        _ck(_v, 17, 0, currVal_24);

        var currVal_32 = "date";

        _ck(_v, 26, 0, currVal_32);

        var currVal_40 = "time";

        _ck(_v, 32, 0, currVal_40);

        var currVal_48 = "contacts";

        _ck(_v, 37, 0, currVal_48);

        var currVal_49 = _co.contactsService.contacts;

        _ck(_v, 41, 0, currVal_49);

        var currVal_52 = _co.form.invalid;

        _ck(_v, 45, 0, currVal_52);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).id;

        _ck(_v, 5, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending;

        _ck(_v, 14, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassUntouched;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassTouched;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPristine;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassDirty;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassValid;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassInvalid;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPending;

        _ck(_v, 23, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31);

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassUntouched;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassTouched;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPristine;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassDirty;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassValid;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassInvalid;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPending;

        _ck(_v, 29, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39);

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassUntouched;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassTouched;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassPristine;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassDirty;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassValid;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassInvalid;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassPending;

        _ck(_v, 36, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47);

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).disabled || null;
        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._animationMode === "NoopAnimations";

        _ck(_v, 44, 0, currVal_50, currVal_51);

        var currVal_53 = _co.submitValue;

        _ck(_v, 46, 0, currVal_53);
      });
    }

    function View_TaskActionComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-task-action", [], null, null, null, View_TaskActionComponent_0, RenderType_TaskActionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _task_action_component__WEBPACK_IMPORTED_MODULE_12__["TaskActionComponent"], [_shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_13__["ContactsService"], _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_14__["TasksService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TaskActionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-task-action", _task_action_component__WEBPACK_IMPORTED_MODULE_12__["TaskActionComponent"], View_TaskActionComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/profile/tasks/shared/components/task-action/task-action.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/profile/tasks/shared/components/task-action/task-action.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: TaskActionComponent */

  /***/
  function srcAppProfileTasksSharedComponentsTaskActionTaskActionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskActionComponent", function () {
      return TaskActionComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TaskActionComponent = /*#__PURE__*/function () {
      function TaskActionComponent(contactsService, tasksService, _datePipe, router, thisDialog, data) {
        _classCallCheck(this, TaskActionComponent);

        this.contactsService = contactsService;
        this.tasksService = tasksService;
        this._datePipe = _datePipe;
        this.router = router;
        this.thisDialog = thisDialog;
        this.data = data;
      }

      _createClass(TaskActionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();

          if (this.data['action'] === 'create') {
            this.setCreateFormValues();
          }

          if (this.data['action'] === 'edit') {
            this.setEditFormValues();
          }
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'time': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'contacts': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({})
          });
          var contacts = this.form.get('contacts');

          var _iterator10 = _createForOfIteratorHelper(this.contactsService.contacts),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var contact = _step10.value;
              contacts.addControl('' + contact.id, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false));
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }, {
        key: "setEditFormValues",
        value: function setEditFormValues() {
          var _this18 = this;

          this.task = Object.assign({}, this.data['task']);
          this.form.get('name').setValue(this.task.name);
          this.form.get('description').setValue(this.task.description);
          this.form.get('date').setValue(this._datePipe.transform(this.task.notifyTimestamp, "yyyy-MM-dd"));
          this.form.get('time').setValue(this._datePipe.transform(this.task.notifyTimestamp, "HH:mm"));
          var contacts = this.form.get('contacts');

          var _iterator11 = _createForOfIteratorHelper(this.task.contacts),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var contact = _step11.value;
              contacts.get('' + contact.id).setValue(true);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          this.submitValue = 'Edit';

          this.submitHandler = function () {
            return _this18.edit();
          };
        }
      }, {
        key: "setCreateFormValues",
        value: function setCreateFormValues() {
          var _this19 = this;

          this.submitValue = 'Create';
          var date = new Date();
          this.form.get('date').setValue(this._datePipe.transform(date, "yyyy-MM-dd"));
          this.form.get('time').setValue(this._datePipe.transform(date, "HH:mm"));

          this.submitHandler = function () {
            return _this19.create();
          };
        }
      }, {
        key: "edit",
        value: function edit() {
          this.task.name = this.form.value.name;
          this.task.description = this.form.value.description;
          this.task.notifyTimestamp = new Date(this.form.value.date + ' ' + this.form.value.time);
          this.task.completed = new Date() > this.task.notifyTimestamp;
          this.task.contacts = this.getCheckedContactsArray();
          this.tasksService.update(this.task);
          this.thisDialog.close(true);
          this.router.navigate([], {
            replaceUrl: true
          });
        }
      }, {
        key: "create",
        value: function create() {
          this.task = {
            name: this.form.value.name,
            description: this.form.value.description,
            fixed: false,
            notifyTimestamp: new Date(this.form.value.date + ' ' + this.form.value.time),
            contacts: this.getCheckedContactsArray()
          };
          this.task.completed = new Date() > this.task.notifyTimestamp;
          this.tasksService.add(this.task);
          this.thisDialog.close(true);
          this.router.navigate([], {
            replaceUrl: true
          });
        }
      }, {
        key: "getCheckedContactsArray",
        value: function getCheckedContactsArray() {
          var _this20 = this;

          var contacts = [];
          var contactsGroup = this.form.get('contacts');

          var _loop2 = function _loop2(controlName) {
            if (contactsGroup.controls[controlName].value) {
              var contact = _this20.contactsService.contacts.find(function (ct) {
                return ct.id === +controlName;
              });

              contacts.push(contact);
            }
          };

          for (var controlName in contactsGroup.controls) {
            _loop2(controlName);
          }

          return contacts;
        }
      }]);

      return TaskActionComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/tasks/shared/components/task-card/task-card.component.css.shim.ngstyle.js":
  /*!***************************************************************************************************!*\
    !*** ./src/app/profile/tasks/shared/components/task-card/task-card.component.css.shim.ngstyle.js ***!
    \***************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppProfileTasksSharedComponentsTaskCardTaskCardComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".task-card[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  max-width: 250px;\r\n  min-width: 250px;\r\n  border: 1px solid rgba(225, 225, 225, 0.9);\r\n  border-radius: 6px;\r\n  transition: box-shadow .1s linear;\r\n}\r\n\r\n.task-card.selected[_ngcontent-%COMP%] {\r\n  background-color: #bcbcbc;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 1px 6px #b4b4b4;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n  padding-top: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  -webkit-hyphens: auto;\r\n      -ms-hyphens: auto;\r\n          hyphens: auto;\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n  padding-top: 10px;\r\n  font-size: 15px;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .date-contacts-block[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n  padding-top: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .date-contacts-block[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n  background-color: lightgrey;\r\n  border-radius: 10px;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  opacity: 0.8;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .date-contacts-block[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:hover{\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .date-contacts-block[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .alarm-clock-completed[_ngcontent-%COMP%] {\r\n  width: 17px;\r\n  height: 17px;\r\n  content: url('alarm-clock.png');\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .date-contacts-block[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .alarm-clock[_ngcontent-%COMP%] {\r\n  width: 17px;\r\n  height: 17px;\r\n  content: url('alarm-clock2.png');\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .date-contacts-block[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-right: 5px;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .date-contacts-block[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n  width: 26px;\r\n  height: 26px;\r\n  border-radius: 50%;\r\n  background-color: #bfbfbf;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .date-contacts-block[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(103, 58, 183, 0.76);\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]:hover   .actions[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\r\n  padding: 20px 10px 0 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  opacity: 0;\r\n  transition: opacity .1s linear;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .push-pin[_ngcontent-%COMP%] {\r\n  opacity: 0.7;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .push-pin[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  opacity: 1;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .push-pin.pushed[_ngcontent-%COMP%] {\r\n  content: url('pushed-pin.png');\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .push-pin.un-pushed[_ngcontent-%COMP%] {\r\n  content: url('unpushed-pin.png');\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\r\n  width: 18px;\r\n  height: 20px;\r\n  content: url('menu.png');\r\n  opacity: 0.7;\r\n}\r\n\r\n.task-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS90YXNrcy9zaGFyZWQvY29tcG9uZW50cy90YXNrLWNhcmQvdGFzay1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIscUJBQWE7TUFBYixpQkFBYTtVQUFiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFrRDtBQUNwRDs7QUFHQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThEO0FBQ2hFOztBQUVBO0VBQ0UsZ0NBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0Q7RUFDeEQsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdGFza3Mvc2hhcmVkL2NvbXBvbmVudHMvdGFzay1jYXJkL3Rhc2stY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI1LCAyMjUsIDIyNSwgMC45KTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMXMgbGluZWFyO1xyXG59XHJcblxyXG4udGFzay1jYXJkLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiY2JjO1xyXG59XHJcblxyXG4udGFzay1jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDFweCA2cHggI2I0YjRiNDtcclxufVxyXG5cclxuLnRhc2stY2FyZCAudGl0bGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrLWNhcmQgLmRlc2NyaXB0aW9uIHtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBoeXBoZW5zOiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnRhc2stY2FyZCAuZGF0ZS1jb250YWN0cy1ibG9jayB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGFzay1jYXJkIC5kYXRlLWNvbnRhY3RzLWJsb2NrIC5kYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbi50YXNrLWNhcmQgLmRhdGUtY29udGFjdHMtYmxvY2sgLmRhdGU6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWNhcmQgLmRhdGUtY29udGFjdHMtYmxvY2sgLmRhdGUgLmFsYXJtLWNsb2NrLWNvbXBsZXRlZCB7XHJcbiAgd2lkdGg6IDE3cHg7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIGNvbnRlbnQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2FsYXJtLWNsb2NrLnBuZ1wiKTtcclxufVxyXG5cclxuLnRhc2stY2FyZCAuZGF0ZS1jb250YWN0cy1ibG9jayAuZGF0ZSAuYWxhcm0tY2xvY2sge1xyXG4gIHdpZHRoOiAxN3B4O1xyXG4gIGhlaWdodDogMTdweDtcclxuICBjb250ZW50OiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9hbGFybS1jbG9jazIucG5nXCIpO1xyXG59XHJcblxyXG5cclxuLnRhc2stY2FyZCAuZGF0ZS1jb250YWN0cy1ibG9jayAuY29udGFjdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnRhc2stY2FyZCAuZGF0ZS1jb250YWN0cy1ibG9jayAuY29udGFjdHMgLmNvbnRhY3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xyXG59XHJcblxyXG4udGFzay1jYXJkIC5kYXRlLWNvbnRhY3RzLWJsb2NrIC5jb250YWN0cyAuY29udGFjdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAzLCA1OCwgMTgzLCAwLjc2KTtcclxufVxyXG5cclxuLnRhc2stY2FyZDpob3ZlciAuYWN0aW9ucyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnRhc2stY2FyZCAuYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDAgMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzIGxpbmVhcjtcclxufVxyXG5cclxuLnRhc2stY2FyZCAuYWN0aW9ucyAucHVzaC1waW4ge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrLWNhcmQgLmFjdGlvbnMgLnB1c2gtcGluOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnRhc2stY2FyZCAuYWN0aW9ucyAucHVzaC1waW4ucHVzaGVkIHtcclxuICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3B1c2hlZC1waW4ucG5nXCIpO1xyXG59XHJcblxyXG4udGFzay1jYXJkIC5hY3Rpb25zIC5wdXNoLXBpbi51bi1wdXNoZWQge1xyXG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdW5wdXNoZWQtcGluLnBuZ1wiKTtcclxufVxyXG5cclxuLnRhc2stY2FyZCAuYWN0aW9ucyAubWVudSB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWVudS5wbmdcIik7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4udGFzay1jYXJkIC5hY3Rpb25zIC5tZW51OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/profile/tasks/shared/components/task-card/task-card.component.ngfactory.js":
  /*!********************************************************************************************!*\
    !*** ./src/app/profile/tasks/shared/components/task-card/task-card.component.ngfactory.js ***!
    \********************************************************************************************/

  /*! exports provided: RenderType_TaskCardComponent, View_TaskCardComponent_0, View_TaskCardComponent_Host_0, TaskCardComponentNgFactory */

  /***/
  function srcAppProfileTasksSharedComponentsTaskCardTaskCardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TaskCardComponent", function () {
      return RenderType_TaskCardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TaskCardComponent_0", function () {
      return View_TaskCardComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TaskCardComponent_Host_0", function () {
      return View_TaskCardComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskCardComponentNgFactory", function () {
      return TaskCardComponentNgFactory;
    });
    /* harmony import */


    var _task_card_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./task-card.component.css.shim.ngstyle */
    "./src/app/profile/tasks/shared/components/task-card/task-card.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../../node_modules/@angular/material/menu/index.ngfactory */
    "./node_modules/@angular/material/menu/index.ngfactory.js");
    /* harmony import */


    var _task_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./task-card.component */
    "./src/app/profile/tasks/shared/components/task-card/task-card.component.ts");
    /* harmony import */


    var _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/tasks.service */
    "./src/app/profile/shared/services/tasks.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../shared/services/dialog-overview.service */
    "./src/app/profile/shared/services/dialog-overview.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_TaskCardComponent = [_task_card_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_TaskCardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TaskCardComponent,
      data: {}
    });

    function View_TaskCardComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["class", "alarm-clock-completed"]], null, null, null, null, null))], null, null);
    }

    function View_TaskCardComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["class", "alarm-clock"]], null, null, null, null, null))], null, null);
    }

    function View_TaskCardComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "contact flex-row ver-flex-center hor-flex-center"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openContacts() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name[0].toUpperCase();

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_TaskCardComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "contact flex-row ver-flex-center hor-flex-center"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openContacts() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" +", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.task.contacts.length - 3;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_TaskCardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 41, "div", [["class", "task-card"]], [[8, "id", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.hideSelect() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        selected: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "title name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 12, "div", [["class", "date-contacts-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "date notify-timestamp flex-row ver-flex-center hor-flex-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaskCardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaskCardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "div", [["class", "contacts"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaskCardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaskCardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "img", [["class", "push-pin"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.Fix() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](24, {
        "pushed": 0,
        "un-pushed": 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 16777216, null, null, 1, "img", [["aria-haspopup", "true"], ["class", "menu mat-menu-trigger"]], [[1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleMousedown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]], {
        menu: [0, "menu"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 15, "mat-menu", [["xPosition", "before"]], null, null, null, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View__MatMenu_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 1294336, [["menu", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_DEFAULT_OPTIONS"]], {
        xPosition: [0, "xPosition"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _allItems: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        items: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 2, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.onEdit() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Edit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 2, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.onCopy() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Copy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 2, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.onDelete() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Delete"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = "task-card";

        var currVal_2 = _ck(_v, 3, 0, _co.isSelected);

        _ck(_v, 2, 0, currVal_1, currVal_2);

        var currVal_6 = _co.task.completed;

        _ck(_v, 13, 0, currVal_6);

        var currVal_7 = !_co.task.completed;

        _ck(_v, 15, 0, currVal_7);

        var currVal_8 = _co.task.contacts.slice(0, 3);

        _ck(_v, 18, 0, currVal_8);

        var currVal_9 = _co.task.contacts.length > 3;

        _ck(_v, 20, 0, currVal_9);

        var currVal_10 = "push-pin";

        var currVal_11 = _ck(_v, 24, 0, _co.task.fixed, !_co.task.fixed);

        _ck(_v, 23, 0, currVal_10, currVal_11);

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28);

        _ck(_v, 26, 0, currVal_14);

        var currVal_15 = "before";

        _ck(_v, 28, 0, currVal_15);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.task.id, "");

        _ck(_v, 1, 0, currVal_0);

        var currVal_3 = _co.task.name;

        _ck(_v, 5, 0, currVal_3);

        var currVal_4 = _co.task.description;

        _ck(_v, 7, 0, currVal_4);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.task.notifyTimestamp, "short"));

        _ck(_v, 10, 0, currVal_5);

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).menuOpen || null;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).menuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).menu.panelId : null;

        _ck(_v, 25, 0, currVal_12, currVal_13);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).role;

        var currVal_17 = true;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._highlighted;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._triggersSubmenu;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._getTabIndex();

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled.toString();

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled || null;

        _ck(_v, 34, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).role;

        var currVal_24 = true;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._highlighted;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._triggersSubmenu;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._getTabIndex();

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled.toString();

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled || null;

        _ck(_v, 37, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).role;

        var currVal_31 = true;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._highlighted;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._triggersSubmenu;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._getTabIndex();

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled.toString();

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled || null;

        _ck(_v, 40, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36);
      });
    }

    function View_TaskCardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-task-card", [], null, null, null, View_TaskCardComponent_0, RenderType_TaskCardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _task_card_component__WEBPACK_IMPORTED_MODULE_8__["TaskCardComponent"], [_shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_9__["TasksService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_11__["DialogOverviewService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null);
    }

    var TaskCardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-task-card", _task_card_component__WEBPACK_IMPORTED_MODULE_8__["TaskCardComponent"], View_TaskCardComponent_Host_0, {
      task: "task"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/profile/tasks/shared/components/task-card/task-card.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/profile/tasks/shared/components/task-card/task-card.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TaskCardComponent */

  /***/
  function srcAppProfileTasksSharedComponentsTaskCardTaskCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskCardComponent", function () {
      return TaskCardComponent;
    });
    /* harmony import */


    var _task_action_task_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../task-action/task-action.component */
    "./src/app/profile/tasks/shared/components/task-action/task-action.component.ts");
    /* harmony import */


    var _task_contacts_task_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../task-contacts/task-contacts.component */
    "./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.ts");

    var TaskCardComponent = /*#__PURE__*/function () {
      function TaskCardComponent(tasksService, route, dialogOverview, el) {
        _classCallCheck(this, TaskCardComponent);

        this.tasksService = tasksService;
        this.route = route;
        this.dialogOverview = dialogOverview;
        this.el = el;
      }

      _createClass(TaskCardComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this21 = this;

          this.route.queryParams.subscribe(function (params) {
            if (+params["select"] === _this21.task.id) {
              _this21.isSelected = true;

              _this21.el.nativeElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          });
        }
      }, {
        key: "onCopy",
        value: function onCopy() {
          var clone = Object.assign({}, this.task);
          clone.id = null;
          this.tasksService.add(clone);
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.tasksService["delete"](this.task);
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          this.dialogOverview.openDialog(_task_action_task_action_component__WEBPACK_IMPORTED_MODULE_0__["TaskActionComponent"], {
            action: 'edit',
            task: Object.assign({}, this.task)
          });
        }
      }, {
        key: "Fix",
        value: function Fix() {
          var clone = Object.assign(this.task);
          clone.fixed = !clone.fixed;
          this.tasksService.update(clone);
        }
      }, {
        key: "openContacts",
        value: function openContacts() {
          this.dialogOverview.openDialog(_task_contacts_task_contacts_component__WEBPACK_IMPORTED_MODULE_1__["TaskContactsComponent"], {
            task: Object.assign({}, this.task)
          });
        }
      }, {
        key: "hideSelect",
        value: function hideSelect() {
          this.isSelected = false;
        }
      }]);

      return TaskCardComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.css.shim.ngstyle.js":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.css.shim.ngstyle.js ***!
    \***********************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppProfileTasksSharedComponentsTaskContactsTaskContactsComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".container[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-height: 120px;\r\n    overflow-y: scroll;\r\n    background: #f6f6f6;\r\n    border: 1px solid lightgray;\r\n    border-radius: 4px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    margin: 4px;\r\n    list-style-type: circle;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS90YXNrcy9zaGFyZWQvY29tcG9uZW50cy90YXNrLWNvbnRhY3RzL3Rhc2stY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdGFza3Mvc2hhcmVkL2NvbXBvbmVudHMvdGFzay1jb250YWN0cy90YXNrLWNvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxudWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"];
    /***/
  },

  /***/
  "./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.ngfactory.js":
  /*!****************************************************************************************************!*\
    !*** ./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.ngfactory.js ***!
    \****************************************************************************************************/

  /*! exports provided: RenderType_TaskContactsComponent, View_TaskContactsComponent_0, View_TaskContactsComponent_Host_0, TaskContactsComponentNgFactory */

  /***/
  function srcAppProfileTasksSharedComponentsTaskContactsTaskContactsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TaskContactsComponent", function () {
      return RenderType_TaskContactsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TaskContactsComponent_0", function () {
      return View_TaskContactsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TaskContactsComponent_Host_0", function () {
      return View_TaskContactsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskContactsComponentNgFactory", function () {
      return TaskContactsComponentNgFactory;
    });
    /* harmony import */


    var _task_contacts_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./task-contacts.component.css.shim.ngstyle */
    "./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _task_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./task-contacts.component */
    "./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_TaskContactsComponent = [_task_contacts_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_TaskContactsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TaskContactsComponent,
      data: {}
    });

    function View_TaskContactsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "span", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co["goto"](_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.phone_number;

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_TaskContactsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h2", [["class", "mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "span", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contacts:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaskContactsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 2, 0);

        var currVal_2 = _co.task.contacts;

        _ck(_v, 10, 0, currVal_2);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.task.name;

        _ck(_v, 3, 0, currVal_1);
      });
    }

    function View_TaskContactsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-task-contacts", [], null, null, null, View_TaskContactsComponent_0, RenderType_TaskContactsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _task_contacts_component__WEBPACK_IMPORTED_MODULE_4__["TaskContactsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TaskContactsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-task-contacts", _task_contacts_component__WEBPACK_IMPORTED_MODULE_4__["TaskContactsComponent"], View_TaskContactsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/profile/tasks/shared/components/task-contacts/task-contacts.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: TaskContactsComponent */

  /***/
  function srcAppProfileTasksSharedComponentsTaskContactsTaskContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskContactsComponent", function () {
      return TaskContactsComponent;
    });

    var TaskContactsComponent = /*#__PURE__*/function () {
      function TaskContactsComponent(router, thisDialog, data) {
        _classCallCheck(this, TaskContactsComponent);

        this.router = router;
        this.thisDialog = thisDialog;
        this.data = data;
      }

      _createClass(TaskContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.task = this.data["task"];
        }
      }, {
        key: "goto",
        value: function goto(contact) {
          this.router.navigate(['/profile', 'contacts'], {
            queryParams: {
              select: contact.id
            }
          });
          this.thisDialog.close();
        }
      }]);

      return TaskContactsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/tasks/shared/tasks-shared.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/profile/tasks/shared/tasks-shared.module.ts ***!
    \*************************************************************/

  /*! exports provided: TasksSharedModule */

  /***/
  function srcAppProfileTasksSharedTasksSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksSharedModule", function () {
      return TasksSharedModule;
    });

    var TasksSharedModule = function TasksSharedModule() {
      _classCallCheck(this, TasksSharedModule);
    };
    /***/

  },

  /***/
  "./src/app/profile/tasks/tasks-page/tasks-page.component.css.shim.ngstyle.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/profile/tasks/tasks-page/tasks-page.component.css.shim.ngstyle.js ***!
    \***********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppProfileTasksTasksPageTasksPageComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["mat-sidenav-content[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 30px;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.fixed-tasks[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.other-tasks[_ngcontent-%COMP%] {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS90YXNrcy90YXNrcy1wYWdlL3Rhc2tzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdGFza3MvdGFza3MtcGFnZS90YXNrcy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250ZW50IC5zZWFyY2gtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLmZpeGVkLXRhc2tzIHtcclxuXHJcbn1cclxuXHJcbi5vdGhlci10YXNrcyB7XHJcblxyXG59XHJcbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/profile/tasks/tasks-page/tasks-page.component.ngfactory.js":
  /*!****************************************************************************!*\
    !*** ./src/app/profile/tasks/tasks-page/tasks-page.component.ngfactory.js ***!
    \****************************************************************************/

  /*! exports provided: RenderType_TasksPageComponent, View_TasksPageComponent_0, View_TasksPageComponent_Host_0, TasksPageComponentNgFactory */

  /***/
  function srcAppProfileTasksTasksPageTasksPageComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TasksPageComponent", function () {
      return RenderType_TasksPageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TasksPageComponent_0", function () {
      return View_TasksPageComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TasksPageComponent_Host_0", function () {
      return View_TasksPageComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksPageComponentNgFactory", function () {
      return TasksPageComponentNgFactory;
    });
    /* harmony import */


    var _tasks_page_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tasks-page.component.css.shim.ngstyle */
    "./src/app/profile/tasks/tasks-page/tasks-page.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_components_task_card_task_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/components/task-card/task-card.component.ngfactory */
    "./src/app/profile/tasks/shared/components/task-card/task-card.component.ngfactory.js");
    /* harmony import */


    var _shared_components_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/components/task-card/task-card.component */
    "./src/app/profile/tasks/shared/components/task-card/task-card.component.ts");
    /* harmony import */


    var _shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/tasks.service */
    "./src/app/profile/shared/services/tasks.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/services/dialog-overview.service */
    "./src/app/profile/shared/services/dialog-overview.service.ts");
    /* harmony import */


    var _shared_components_isotope_container_isotope_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/isotope-container/isotope-container.component.ngfactory */
    "./src/app/profile/shared/components/isotope-container/isotope-container.component.ngfactory.js");
    /* harmony import */


    var _shared_components_isotope_container_isotope_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/components/isotope-container/isotope-container.component */
    "./src/app/profile/shared/components/isotope-container/isotope-container.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pipes_fixed_tasks_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../pipes/fixed-tasks.pipe */
    "./src/app/profile/tasks/pipes/fixed-tasks.pipe.ts");
    /* harmony import */


    var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/sidenav/index.ngfactory */
    "./node_modules/@angular/material/sidenav/index.ngfactory.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/toolbar/index.ngfactory */
    "./node_modules/@angular/material/toolbar/index.ngfactory.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _shared_components_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../shared/components/search/search.component.ngfactory */
    "./src/app/profile/shared/components/search/search.component.ngfactory.js");
    /* harmony import */


    var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../shared/components/search/search.component */
    "./src/app/profile/shared/components/search/search.component.ts");
    /* harmony import */


    var _tasks_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./tasks-page.component */
    "./src/app/profile/tasks/tasks-page/tasks-page.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_TasksPageComponent = [_tasks_page_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_TasksPageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TasksPageComponent,
      data: {}
    });

    function View_TasksPageComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-task-card", [["class", "task"]], null, null, null, _shared_components_task_card_task_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TaskCardComponent_0"], _shared_components_task_card_task_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TaskCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _shared_components_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_3__["TaskCardComponent"], [_shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        task: [0, "task"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      }, function (_ck, _v) {
        var currVal_1 = _v.context.last ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 29).searchAndMark() : "";

        _ck(_v, 2, 0, currVal_1);
      });
    }

    function View_TasksPageComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "app-isotope-container", [["selector", ".task"], ["title", "Searched tasks"]], null, null, null, _shared_components_isotope_container_isotope_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_IsotopeContainerComponent_0"], _shared_components_isotope_container_isotope_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_IsotopeContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4374528, null, 0, _shared_components_isotope_container_isotope_container_component__WEBPACK_IMPORTED_MODULE_8__["IsotopeContainerComponent"], [], {
        selector: [0, "selector"],
        title: [1, "title"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_TasksPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ".task";
        var currVal_1 = "Searched tasks";

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_2 = _co.searchedTasks;

        _ck(_v, 4, 0, currVal_2);
      }, null);
    }

    function View_TasksPageComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-task-card", [["class", "task"]], null, null, null, _shared_components_task_card_task_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TaskCardComponent_0"], _shared_components_task_card_task_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TaskCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _shared_components_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_3__["TaskCardComponent"], [_shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        task: [0, "task"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_TasksPageComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "app-isotope-container", [["selector", ".task"], ["title", "Fixed tasks"]], null, null, null, _shared_components_isotope_container_isotope_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_IsotopeContainerComponent_0"], _shared_components_isotope_container_isotope_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_IsotopeContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4374528, null, 0, _shared_components_isotope_container_isotope_container_component__WEBPACK_IMPORTED_MODULE_8__["IsotopeContainerComponent"], [], {
        selector: [0, "selector"],
        title: [1, "title"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_TasksPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_fixed_tasks_pipe__WEBPACK_IMPORTED_MODULE_10__["FixedTasksPipe"], [])], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ".task";
        var currVal_1 = "Fixed tasks";

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform(_co.tasksService.tasks, "fixed"));

        _ck(_v, 4, 0, currVal_2);
      }, null);
    }

    function View_TasksPageComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-task-card", [["class", "task"]], null, null, null, _shared_components_task_card_task_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TaskCardComponent_0"], _shared_components_task_card_task_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TaskCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _shared_components_task_card_task_card_component__WEBPACK_IMPORTED_MODULE_3__["TaskCardComponent"], [_shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        task: [0, "task"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_TasksPageComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "app-isotope-container", [["selector", ".task"], ["title", "Other tasks"]], null, null, null, _shared_components_isotope_container_isotope_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_IsotopeContainerComponent_0"], _shared_components_isotope_container_isotope_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_IsotopeContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4374528, null, 0, _shared_components_isotope_container_isotope_container_component__WEBPACK_IMPORTED_MODULE_8__["IsotopeContainerComponent"], [], {
        selector: [0, "selector"],
        title: [1, "title"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_TasksPageComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_fixed_tasks_pipe__WEBPACK_IMPORTED_MODULE_10__["FixedTasksPipe"], [])], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ".task";
        var currVal_1 = "Other tasks";

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform(_co.tasksService.tasks, "unfixed"));

        _ck(_v, 4, 0, currVal_2);
      }, null);
    }

    function View_TasksPageComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No tasks"]))], null, null);
    }

    function View_TasksPageComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No searched tasks"]))], null, null);
    }

    function View_TasksPageComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 42, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _content: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 19, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["mode", "side"], ["opened", ""], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 3325952, [[1, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_material_sidenav_sidenav_a"]]], {
        mode: [0, "mode"],
        opened: [1, "opened"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 17, "mat-toolbar", [["class", "mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _toolbarRows: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 4, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, [[3, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onAddTask() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Add Task "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 4, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, [[3, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onImport() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Import "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 1, 4, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, [[3, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onExport() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Export "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 1, 17, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 1294336, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 2, "div", [["class", "search-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "app-search", [], null, [[null, "onInputEvent"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("onInputEvent" === en) {
          var pd_0 = _co.onSearch($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _shared_components_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_SearchComponent_0"], _shared_components_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_SearchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 49152, [["searchComponent", 4]], 0, _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_23__["SearchComponent"], [], {
        searchOptions: [0, "searchOptions"]
      }, {
        onInputEvent: "onInputEvent"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_TasksPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_TasksPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_fixed_tasks_pipe__WEBPACK_IMPORTED_MODULE_10__["FixedTasksPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_TasksPageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_fixed_tasks_pipe__WEBPACK_IMPORTED_MODULE_10__["FixedTasksPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, 0, 4, "div", [["class", "flex-row hor-flex-center ver-flex-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TasksPageComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TasksPageComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 1, 0);

        var currVal_11 = "side";
        var currVal_12 = "";

        _ck(_v, 6, 0, currVal_11, currVal_12);

        _ck(_v, 26, 0);

        var currVal_23 = _co.searchOptions;

        _ck(_v, 29, 0, currVal_23);

        var currVal_24 = !_co.noSearchedTasks;

        _ck(_v, 31, 0, currVal_24);

        var currVal_25 = !_co.searchNow && !_co.searchedTasks.length && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform(_co.tasksService.tasks, "fixed")).length;

        _ck(_v, 33, 0, currVal_25);

        var currVal_26 = !_co.searchNow && !_co.searchedTasks.length && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).transform(_co.tasksService.tasks, "unfixed")).length;

        _ck(_v, 36, 0, currVal_26);

        var currVal_27 = !_co.tasksService.tasks.length;

        _ck(_v, 40, 0, currVal_27);

        var currVal_28 = _co.searchNow && _co.noSearchedTasks;

        _ck(_v, 42, 0, currVal_28);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._backdropOverride;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).position === "end";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).mode === "over";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).mode === "push";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).mode === "side";

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).opened;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedInViewport;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedTopGap : null;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedBottomGap : null;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationState;

        _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._toolbarRows.length > 0;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._toolbarRows.length === 0;

        _ck(_v, 7, 0, currVal_13, currVal_14);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).disabled || null;
        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._animationMode === "NoopAnimations";

        _ck(_v, 12, 0, currVal_15, currVal_16);

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled || null;
        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationMode === "NoopAnimations";

        _ck(_v, 17, 0, currVal_17, currVal_18);

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled || null;
        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._animationMode === "NoopAnimations";

        _ck(_v, 22, 0, currVal_19, currVal_20);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._container._contentMargins.left;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._container._contentMargins.right;

        _ck(_v, 25, 0, currVal_21, currVal_22);
      });
    }

    function View_TasksPageComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tasks-page", [], null, null, null, View_TasksPageComponent_0, RenderType_TasksPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _tasks_page_component__WEBPACK_IMPORTED_MODULE_24__["TasksPageComponent"], [_shared_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"], _shared_services_dialog_overview_service__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TasksPageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tasks-page", _tasks_page_component__WEBPACK_IMPORTED_MODULE_24__["TasksPageComponent"], View_TasksPageComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/profile/tasks/tasks-page/tasks-page.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/profile/tasks/tasks-page/tasks-page.component.ts ***!
    \******************************************************************/

  /*! exports provided: TasksPageComponent */

  /***/
  function srcAppProfileTasksTasksPageTasksPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksPageComponent", function () {
      return TasksPageComponent;
    });
    /* harmony import */


    var _shared_components_task_action_task_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/components/task-action/task-action.component */
    "./src/app/profile/tasks/shared/components/task-action/task-action.component.ts");

    var TasksPageComponent = /*#__PURE__*/function () {
      function TasksPageComponent(tasksService, dialogOverview) {
        _classCallCheck(this, TasksPageComponent);

        this.tasksService = tasksService;
        this.dialogOverview = dialogOverview;
        this.searchedTasks = [];
        this.noSearchedTasks = true;
        this.searchNow = false;
      }

      _createClass(TasksPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchOptions = {
            uniqueAttribute: 'id',
            selector: '.task',
            subSelectors: [{
              name: 'name',
              selector: '.name',
              isActive: false
            }, {
              name: 'description',
              selector: '.description',
              isActive: false
            }, {
              name: 'time',
              selector: '.notify-timestamp',
              isActive: false
            }]
          };
        }
      }, {
        key: "onSearch",
        value: function onSearch(event) {
          var _this22 = this;

          if (event["value"] === '') {
            this.searchedTasks = [];
            this.noSearchedTasks = true;
            this.searchNow = false;
            return;
          }

          this.tasksService.search(event["value"], event["subSelectors"]).subscribe(function (tasks) {
            _this22.searchedTasks = tasks;
            _this22.noSearchedTasks = !_this22.searchedTasks.length;
            _this22.searchNow = true;
          });
        }
      }, {
        key: "onExport",
        value: function onExport() {
          if (this.searchedTasks.length) {
            this.tasksService["export"](this.searchedTasks);
          } else {
            this.tasksService["export"]();
          }
        }
      }, {
        key: "onImport",
        value: function onImport() {
          this.tasksService["import"]();
        }
      }, {
        key: "onAddTask",
        value: function onAddTask() {
          this.dialogOverview.openDialog(_shared_components_task_action_task_action_component__WEBPACK_IMPORTED_MODULE_0__["TaskActionComponent"], {
            action: 'create'
          });
        }
      }]);

      return TasksPageComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/tasks/tasks.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/profile/tasks/tasks.module.ts ***!
    \***********************************************/

  /*! exports provided: TasksModule */

  /***/
  function srcAppProfileTasksTasksModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksModule", function () {
      return TasksModule;
    });

    var TasksModule = function TasksModule() {
      _classCallCheck(this, TasksModule);
    };
    /***/

  },

  /***/
  "./src/app/shared/directives/text-area-auto-resize.directive.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/directives/text-area-auto-resize.directive.ts ***!
    \**********************************************************************/

  /*! exports provided: TextAreaAutoResize */

  /***/
  function srcAppSharedDirectivesTextAreaAutoResizeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextAreaAutoResize", function () {
      return TextAreaAutoResize;
    });

    var TextAreaAutoResize = /*#__PURE__*/function () {
      function TextAreaAutoResize(element, renderer) {
        _classCallCheck(this, TextAreaAutoResize);

        this.element = element;
        this.renderer = renderer;
        this.renderer.setStyle(this.element.nativeElement, 'resize', 'none');
      }

      _createClass(TextAreaAutoResize, [{
        key: "onKeyup",
        value: function onKeyup() {
          this.renderer.setStyle(this.element.nativeElement, 'overflow', 'hidden');
          this.renderer.setStyle(this.element.nativeElement, 'height', '0');
          var height = +this.element.nativeElement.style.minHeight + +this.element.nativeElement.scrollHeight;
          this.renderer.setStyle(this.element.nativeElement, 'height', height + 'px');
        }
      }]);

      return TextAreaAutoResize;
    }();
    /***/

  }
}]);
//# sourceMappingURL=profile-profile-module-ngfactory-es5.js.map