(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/page/dapp/ethMail/config.json":
/*!*******************************************!*\
  !*** ./src/page/dapp/ethMail/config.json ***!
  \*******************************************/
/*! exports provided: ABI, contractAddress, bytecode, default */
/***/ (function(module) {

module.exports = {"ABI":[{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"sender","type":"address"}],"name":"FwMail","type":"event"},{"constant":false,"inputs":[{"name":"fwMailId","type":"bytes32"},{"name":"recipient","type":"address[]"},{"name":"cc","type":"address[]"}],"name":"fwSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"reMailId","type":"bytes32"}],"name":"ReMail","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"author","type":"address"},{"indexed":false,"name":"title","type":"string"},{"indexed":false,"name":"unixtime","type":"uint256"},{"indexed":false,"name":"body","type":"string"},{"indexed":false,"name":"theMailId","type":"bytes32"}],"name":"MailInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mailId","type":"bytes32"},{"indexed":true,"name":"recipient","type":"address"}],"name":"SendMailToRecipient","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mailId","type":"bytes32"},{"indexed":true,"name":"cc","type":"address"}],"name":"SendMailToCC","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mailId","type":"bytes32"},{"indexed":true,"name":"author","type":"address"}],"name":"AuthorSendMail","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"cc","type":"address"}],"name":"SendMailToCCIndexMailId","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"sender","type":"address"}],"name":"SendMailFrom","type":"event"},{"constant":false,"inputs":[{"name":"recipient","type":"address[]"},{"name":"cc","type":"address[]"},{"name":"title","type":"string"},{"name":"body","type":"string"},{"name":"reMailId","type":"bytes32"}],"name":"send","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"recipient","type":"address"}],"name":"SendMailToRecipientIndexMailId","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"}],"contractAddress":"0xbf52a106aadfbea806ae449255badff46f1bed1b","bytecode":"608060405234801561001057600080fd5b50610640806100206000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416635a90d80a8114610052578063d2c4273a14610082575b600080fd5b005b34801561005e57600080fd5b506100506004803590602480358082019290810135916044359081019101356100c9565b34801561008e57600080fd5b50610050602460048035828101929082013591813580830192908201359160443580830192908201359160643591820191013560843561022b565b60408051338152905160009187917fe0471c6881157b630869ae092193641f351bb2e0673fca64cdca1a9320771f3c9181900360200190a260408051338152905187917f308817cf4ccaebde988575e54c4d6c9fe737a82c7b7ff15e35859a70c10dd2f1919081900360200190a25060005b838110156101ad5784848281811061014f57fe5b604080518a815290516020928302949094013573ffffffffffffffffffffffffffffffffffffffff16937fe1f7611cd7bb491a2e50669c6067a25a90d9ff86a50856f8aaf195cd65b8ba0b93509081900390910190a260010161013b565b5060005b81811015610223578484828181106101c557fe5b604080518a815290516020928302949094013573ffffffffffffffffffffffffffffffffffffffff16937fea53c726a49e8869fa3d98c0ab830b89103cc0e7fe0a547ffcc74254cd14898293509081900390910190a26001016101b1565b505050505050565b60006102ef8a8a808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050508989808060200260200160405190810160405280939291908181526020018383602002808284375050604080516020601f8f018190048102820181019092528d815294508d93508c925082915084018382808284375050604080516020601f8e018190048102820181019092528c815294508c93508b925082915084018382808284375061033a945050505050565b9050811561032e5760408051828152905183917f301342e243c4f88d6a6e25400271368760dcc814d11e209777732a8cee934c9e919081900360200190a25b50505050505050505050565b600080600080364260405180848480828437919091019283525050604080516020928190038301812033825291519195508594507fe0471c6881157b630869ae092193641f351bb2e0673fca64cdca1a9320771f3c935081900390910190a260408051828152905133917f2720870df18b20d75cd28d70ceca458d4162aaced01ffcfbd91596f7bf5d3898919081900360200190a280600019167f2f3572dc4bc62fb20c566d1fcb675d4b093abf756c34d102945e8871ecd02da033874288604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200184815260200180602001838103835286818151815260200191508051906020019080838360005b8381101561047257818101518382015260200161045a565b50505050905090810190601f16801561049f5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156104d25781810151838201526020016104ba565b50505050905090810190601f1680156104ff5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a2600091505b865182101561058d57868281518110151561052c57fe5b602090810290910181015160408051848152905173ffffffffffffffffffffffffffffffffffffffff909216927fe1f7611cd7bb491a2e50669c6067a25a90d9ff86a50856f8aaf195cd65b8ba0b92918290030190a2600190910190610515565b600091505b855182101561060a5786828151811015156105a957fe5b602090810290910181015160408051848152905173ffffffffffffffffffffffffffffffffffffffff909216927fea53c726a49e8869fa3d98c0ab830b89103cc0e7fe0a547ffcc74254cd14898292918290030190a2600190910190610592565b96955050505050505600a165627a7a723058203b4ff44ddec4b102b6bb78bd9cc8376a2d88b4089814a5bcd331298c4486f4a10029"};

/***/ }),

/***/ "./src/page/dapp/ethMail/sendMail.jsx":
/*!********************************************!*\
  !*** ./src/page/dapp/ethMail/sendMail.jsx ***!
  \********************************************/
/*! exports provided: default, SendMail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SendMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMail", function() { return SendMail; });
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.json */ "./src/page/dapp/ethMail/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/page/dapp/ethMail/config.json", 1);





var _jsxFileName = "/Users/linyitang/github/newWallet2/src/page/dapp/ethMail/sendMail.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var SendMail =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SendMail, _Component);

  function SendMail(props) {
    var _this;

    Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SendMail);

    _this = Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SendMail).call(this, props));
    _this.state = {
      title: '',
      recipients: [],
      ccs: [],
      body: '',
      reMailID: _this.props.reMailID || '',
      fwMailID: _this.props.fwMailID || ''
    };
    return _this;
  }

  Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SendMail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "\u5BEB\u4FE1")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u6A19\u984C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        placeholder: "Title",
        maxLength: "50",
        onChange: function onChange(e) {
          _this2.state.title = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u6536\u4EF6\u4EBA"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        placeholder: "Recipient",
        maxLength: "42",
        onChange: this.activeRecipient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "\u526F\u672C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        placeholder: "CC",
        maxLength: "42",
        onChange: this.activeCC,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "\u5167\u5BB9"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
        onChange: function onChange(e) {
          _this2.state.body = e.target.value;
        },
        className: "form-control",
        rows: "3",
        placeholder: "Text",
        style: {
          "margin": "0px 3px 0px 0px",
          "width": "100%",
          "height": "291px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "pull-left btn btn-primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "\u9001\u4EF6"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SendMail;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SendMail, "SendMail", "/Users/linyitang/github/newWallet2/src/page/dapp/ethMail/sendMail.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=21.chunk.js.map