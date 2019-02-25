(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./src/contract/index.js":
/*!*******************************!*\
  !*** ./src/contract/index.js ***!
  \*******************************/
/*! exports provided: default, toAbi, toHumanReadable, deployErc20Token, deployMutiWalletToken, Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toAbi", function() { return toAbi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHumanReadable", function() { return toHumanReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployErc20Token", function() { return deployErc20Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployMutiWalletToken", function() { return deployMutiWalletToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.json */ "./src/contract/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/contract/config.json", 1);
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_6__);





(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





function toHumanReadable(abi) {
  if (!Array.isArray(abi)) {
    return;
  }

  abi = abi.filter(function (v) {
    return v.type !== 'fallback';
  });
  var hrabi = abi.map(function (v) {
    var type = v.type;
    var name = v.name ? ' ' + v.name : '';
    var inputs = v.inputs ? v.inputs.map(function (i) {
      return i.type + (i.indexed ? ' indexed' : '') + (i.name ? ' ' + i.name : '');
    }).join() : '';
    var stateMutability = v.stateMutability ? v.stateMutability !== "nonpayable" ? ' ' + v.stateMutability : '' : '';
    var returns = v.outputs ? v.outputs.length >= 0 ? " returns (".concat(v.outputs.map(function (i) {
      return i.type + (i.name ? ' ' + i.name : '');
    }).join(), ")") : '' : '';
    return "".concat(type).concat(name, "(").concat(inputs, ")").concat(stateMutability).concat(returns);
  });
  return JSON.stringify(hrabi, null, 2);
}

function toAbi(hrabi) {
  if (!Array.isArray(hrabi)) {
    return;
  }

  var abi = new ethers_index_js__WEBPACK_IMPORTED_MODULE_4__["utils"].Interface(hrabi).abi.map(function (abi) {
    abi = JSON.parse(JSON.stringify(abi));
    delete abi.gas;

    if (abi.stateMutability === null) {
      delete abi.stateMutability;
    }

    return abi;
  });
  return JSON.stringify(abi, null, 2);
}

function deployErc20Token(_x, _x2, _x3, _x4) {
  return _deployErc20Token.apply(this, arguments);
}

function _deployErc20Token() {
  _deployErc20Token = Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name, symbol, decimals, wallet) {
    var erc20, contract;
    return _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            erc20 = new ethers_index_js__WEBPACK_IMPORTED_MODULE_4__["ContractFactory"](_config_json__WEBPACK_IMPORTED_MODULE_5__.erc20.abi, _config_json__WEBPACK_IMPORTED_MODULE_5__.erc20.bytecode);
            erc20 = erc20.connect(wallet);
            _context.next = 4;
            return erc20.deploy(name, symbol, decimals);

          case 4:
            contract = _context.sent;
            return _context.abrupt("return", contract);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _deployErc20Token.apply(this, arguments);
}

function deployMutiWalletToken(_x5, _x6, _x7, _x8) {
  return _deployMutiWalletToken.apply(this, arguments);
}

function _deployMutiWalletToken() {
  _deployMutiWalletToken = Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_owners, _required, _daylimit, wallet) {
    var mutiWallet, contract;
    return _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mutiWallet = new ethers_index_js__WEBPACK_IMPORTED_MODULE_4__["ContractFactory"](_config_json__WEBPACK_IMPORTED_MODULE_5__.mutiWallet.abi, _config_json__WEBPACK_IMPORTED_MODULE_5__.mutiWallet.bytecode);
            mutiWallet = mutiWallet.connect(wallet);
            _context2.next = 4;
            return mutiWallet.deploy(name, symbol, decimals);

          case 4:
            contract = _context2.sent;
            return _context2.abrupt("return", contract);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _deployMutiWalletToken.apply(this, arguments);
}

function Event(contract, eventName) {
  var _contract$filters;

  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var fromBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var toBlock = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'latest';
  args = Array.isArray(args) ? args : [args];

  var event = (_contract$filters = contract.filters)[eventName].apply(_contract$filters, Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(args));

  var abi = contract.interface.abi.find(function (v) {
    return v.name === eventName;
  }).inputs;

  var filter = Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    fromBlock: fromBlock,
    toBlock: toBlock
  }, event);

  return this.getLogs(filter).then(function (result) {
    var coder = new ethers_index_js__WEBPACK_IMPORTED_MODULE_4__["utils"].AbiCoder();
    var abi1 = abi.filter(function (v) {
      return v.indexed;
    });
    var abi2 = abi.filter(function (v) {
      return !v.indexed;
    });
    var r = result.map(function (r) {
      r.topics.shift();
      var topics = r.topics.map(function (t, i) {
        return coder.decode([abi1[i]], t)[0];
      });
      var datas = coder.decode(abi2, r.data);

      var _r = abi.map(function (v) {
        return v.indexed ? topics.shift() : datas.shift();
      });

      _r.transactionHash = r.transactionHash;
      _r.blockNumber = Number(r.blockNumber);
      return _r;
    });
    return r;
  });
  return Promise.resolve(1);
}

var _default = {
  toAbi: toAbi,
  toHumanReadable: toHumanReadable,
  deployErc20Token: deployErc20Token,
  deployMutiWalletToken: deployMutiWalletToken,
  Event: Event
};
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(toHumanReadable, "toHumanReadable", "/Users/linyitang/github/newWallet2/src/contract/index.js");
  reactHotLoader.register(toAbi, "toAbi", "/Users/linyitang/github/newWallet2/src/contract/index.js");
  reactHotLoader.register(deployErc20Token, "deployErc20Token", "/Users/linyitang/github/newWallet2/src/contract/index.js");
  reactHotLoader.register(deployMutiWalletToken, "deployMutiWalletToken", "/Users/linyitang/github/newWallet2/src/contract/index.js");
  reactHotLoader.register(Event, "Event", "/Users/linyitang/github/newWallet2/src/contract/index.js");
  reactHotLoader.register(_default, "default", "/Users/linyitang/github/newWallet2/src/contract/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/dapp/ethMail/config.json":
/*!*******************************************!*\
  !*** ./src/page/dapp/ethMail/config.json ***!
  \*******************************************/
/*! exports provided: ABI, contractAddress, bytecode, default */
/***/ (function(module) {

module.exports = {"ABI":[{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"sender","type":"address"}],"name":"FwMail","type":"event"},{"constant":false,"inputs":[{"name":"fwMailId","type":"bytes32"},{"name":"recipient","type":"address[]"},{"name":"cc","type":"address[]"}],"name":"fwSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"reMailId","type":"bytes32"}],"name":"ReMail","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"author","type":"address"},{"indexed":false,"name":"title","type":"string"},{"indexed":false,"name":"unixtime","type":"uint256"},{"indexed":false,"name":"body","type":"string"},{"indexed":false,"name":"theMailId","type":"bytes32"}],"name":"MailInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mailId","type":"bytes32"},{"indexed":true,"name":"recipient","type":"address"}],"name":"SendMailToRecipient","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mailId","type":"bytes32"},{"indexed":true,"name":"cc","type":"address"}],"name":"SendMailToCC","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mailId","type":"bytes32"},{"indexed":true,"name":"author","type":"address"}],"name":"AuthorSendMail","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"cc","type":"address"}],"name":"SendMailToCCIndexMailId","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"sender","type":"address"}],"name":"SendMailFrom","type":"event"},{"constant":false,"inputs":[{"name":"recipient","type":"address[]"},{"name":"cc","type":"address[]"},{"name":"title","type":"string"},{"name":"body","type":"string"},{"name":"reMailId","type":"bytes32"}],"name":"send","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mailId","type":"bytes32"},{"indexed":false,"name":"recipient","type":"address"}],"name":"SendMailToRecipientIndexMailId","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"}],"contractAddress":"0xbf52a106aadfbea806ae449255badff46f1bed1b","bytecode":"608060405234801561001057600080fd5b50610640806100206000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416635a90d80a8114610052578063d2c4273a14610082575b600080fd5b005b34801561005e57600080fd5b506100506004803590602480358082019290810135916044359081019101356100c9565b34801561008e57600080fd5b50610050602460048035828101929082013591813580830192908201359160443580830192908201359160643591820191013560843561022b565b60408051338152905160009187917fe0471c6881157b630869ae092193641f351bb2e0673fca64cdca1a9320771f3c9181900360200190a260408051338152905187917f308817cf4ccaebde988575e54c4d6c9fe737a82c7b7ff15e35859a70c10dd2f1919081900360200190a25060005b838110156101ad5784848281811061014f57fe5b604080518a815290516020928302949094013573ffffffffffffffffffffffffffffffffffffffff16937fe1f7611cd7bb491a2e50669c6067a25a90d9ff86a50856f8aaf195cd65b8ba0b93509081900390910190a260010161013b565b5060005b81811015610223578484828181106101c557fe5b604080518a815290516020928302949094013573ffffffffffffffffffffffffffffffffffffffff16937fea53c726a49e8869fa3d98c0ab830b89103cc0e7fe0a547ffcc74254cd14898293509081900390910190a26001016101b1565b505050505050565b60006102ef8a8a808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050508989808060200260200160405190810160405280939291908181526020018383602002808284375050604080516020601f8f018190048102820181019092528d815294508d93508c925082915084018382808284375050604080516020601f8e018190048102820181019092528c815294508c93508b925082915084018382808284375061033a945050505050565b9050811561032e5760408051828152905183917f301342e243c4f88d6a6e25400271368760dcc814d11e209777732a8cee934c9e919081900360200190a25b50505050505050505050565b600080600080364260405180848480828437919091019283525050604080516020928190038301812033825291519195508594507fe0471c6881157b630869ae092193641f351bb2e0673fca64cdca1a9320771f3c935081900390910190a260408051828152905133917f2720870df18b20d75cd28d70ceca458d4162aaced01ffcfbd91596f7bf5d3898919081900360200190a280600019167f2f3572dc4bc62fb20c566d1fcb675d4b093abf756c34d102945e8871ecd02da033874288604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200184815260200180602001838103835286818151815260200191508051906020019080838360005b8381101561047257818101518382015260200161045a565b50505050905090810190601f16801561049f5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156104d25781810151838201526020016104ba565b50505050905090810190601f1680156104ff5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a2600091505b865182101561058d57868281518110151561052c57fe5b602090810290910181015160408051848152905173ffffffffffffffffffffffffffffffffffffffff909216927fe1f7611cd7bb491a2e50669c6067a25a90d9ff86a50856f8aaf195cd65b8ba0b92918290030190a2600190910190610515565b600091505b855182101561060a5786828151811015156105a957fe5b602090810290910181015160408051848152905173ffffffffffffffffffffffffffffffffffffffff909216927fea53c726a49e8869fa3d98c0ab830b89103cc0e7fe0a547ffcc74254cd14898292918290030190a2600190910190610592565b96955050505050505600a165627a7a723058203b4ff44ddec4b102b6bb78bd9cc8376a2d88b4089814a5bcd331298c4486f4a10029"};

/***/ }),

/***/ "./src/page/dapp/ethMail/inbox.jsx":
/*!*****************************************!*\
  !*** ./src/page/dapp/ethMail/inbox.jsx ***!
  \*****************************************/
/*! exports provided: default, Inbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inbox", function() { return Inbox; });
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.json */ "./src/page/dapp/ethMail/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/page/dapp/ethMail/config.json", 1);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _contract_config_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../contract/config.json */ "./src/contract/config.json");
var _contract_config_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contract/config.json */ "./src/contract/config.json", 1);
/* harmony import */ var _contract_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../contract/index */ "./src/contract/index.js");






var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/github/newWallet2/src/page/dapp/ethMail/inbox.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








var Inbox = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Inbox, _Component);

  function Inbox(props) {
    var _this;

    Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Inbox);

    _this = Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Inbox).call(this, props));
    _this.state = {
      authors: [],
      mails: [],
      ccs: [],
      info: []
    };
    return _this;
  }

  Object(_Users_linyitang_github_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Inbox, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "\u6536\u4EF6\u593E")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
        className: "table table-striped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        style: {
          "width": "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "#"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "\u5BC4\u4EF6\u8005"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "\u6A19\u984C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u6642\u9593"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\u95B1\u8B80"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, " ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "CC")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
        className: "table table-striped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        style: {
          "width": "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "#"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u5BC4\u4EF6\u8005"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u6A19\u984C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\u6642\u9593"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "\u95B1\u8B80"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "\u5DF2\u5BC4\u51FA")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
        className: "table table-striped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        style: {
          "width": "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "#"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\u5BC4\u4EF6\u8005"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "\u6A19\u984C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "\u6642\u9593"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "\u95B1\u8B80"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, " ")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Inbox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Inbox, "Inbox", "/Users/linyitang/github/newWallet2/src/page/dapp/ethMail/inbox.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=23.chunk.js.map