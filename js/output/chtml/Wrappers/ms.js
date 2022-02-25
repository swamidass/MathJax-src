"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHTMLms = void 0;
var Wrapper_js_1 = require("../Wrapper.js");
var ms_js_1 = require("../../common/Wrappers/ms.js");
var ms_js_2 = require("../../../core/MmlTree/MmlNodes/ms.js");
var CHTMLms = (function (_super) {
    __extends(CHTMLms, _super);
    function CHTMLms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLms.kind = ms_js_2.MmlMs.prototype.kind;
    return CHTMLms;
}(ms_js_1.CommonMsMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLms = CHTMLms;
//# sourceMappingURL=ms.js.map