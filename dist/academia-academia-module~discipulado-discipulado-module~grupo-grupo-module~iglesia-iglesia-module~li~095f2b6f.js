(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academia-academia-module~discipulado-discipulado-module~grupo-grupo-module~iglesia-iglesia-module~li~095f2b6f"],{

/***/ "./node_modules/sweetalert2/src/SweetAlert.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/SweetAlert.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _staticMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticMethods.js */ "./node_modules/sweetalert2/src/staticMethods.js");
/* harmony import */ var _instanceMethods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceMethods.js */ "./node_modules/sweetalert2/src/instanceMethods.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");






let currentInstance

// SweetAlert constructor
function SweetAlert (...args) {
  // Prevent run in Node env
  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return
  }

  // Check for the existence of Promise
  /* istanbul ignore if */
  if (typeof Promise === 'undefined') {
    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["error"])('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)')
  }

  currentInstance = this

  const outerParams = Object.freeze(this.constructor.argsToParams(args))

  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  })

  const promise = this._main(this.params)
  _privateProps_js__WEBPACK_IMPORTED_MODULE_4__["default"].promise.set(this, promise)
}

// `catch` cannot be the name of a module export, so we define our thenable methods here instead
SweetAlert.prototype.then = function (onFulfilled) {
  const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_4__["default"].promise.get(this)
  return promise.then(onFulfilled)
}
SweetAlert.prototype.finally = function (onFinally) {
  const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_4__["default"].promise.get(this)
  return promise.finally(onFinally)
}

// Assign instance methods from src/instanceMethods/*.js to prototype
Object.assign(SweetAlert.prototype, _instanceMethods_js__WEBPACK_IMPORTED_MODULE_3__)

// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, _staticMethods_js__WEBPACK_IMPORTED_MODULE_2__)

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(_instanceMethods_js__WEBPACK_IMPORTED_MODULE_3__).forEach(key => {
  SweetAlert[key] = function (...args) {
    if (currentInstance) {
      return currentInstance[key](...args)
    }
  }
})

SweetAlert.DismissReason = _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__["DismissReason"]

/* harmony default export */ __webpack_exports__["default"] = (SweetAlert);


/***/ }),

/***/ "./node_modules/sweetalert2/src/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/sweetalert2/src/constants.js ***!
  \***************************************************/
/*! exports provided: RESTORE_FOCUS_TIMEOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTORE_FOCUS_TIMEOUT", function() { return RESTORE_FOCUS_TIMEOUT; });
const RESTORE_FOCUS_TIMEOUT = 100


/***/ }),

/***/ "./node_modules/sweetalert2/src/globalState.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/globalState.js ***!
  \*****************************************************/
/*! exports provided: default, restoreActiveElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreActiveElement", function() { return restoreActiveElement; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/sweetalert2/src/constants.js");


const globalState = {}

/* harmony default export */ __webpack_exports__["default"] = (globalState);

// Restore previous active (focused) element
const restoreActiveElement = () => {
  return new Promise(resolve => {
    const x = window.scrollX
    const y = window.scrollY
    globalState.restoreFocusTimeout = setTimeout(() => {
      if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
        globalState.previousActiveElement.focus()
        globalState.previousActiveElement = null
      } else if (document.body) {
        document.body.focus()
      }
      resolve()
    }, _constants_js__WEBPACK_IMPORTED_MODULE_0__["RESTORE_FOCUS_TIMEOUT"]) // issues/900
    if (typeof x !== 'undefined' && typeof y !== 'undefined') { // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y)
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods.js ***!
  \*********************************************************/
/*! exports provided: hideLoading, disableLoading, getInput, close, closePopup, closeModal, closeToast, enableButtons, disableButtons, enableConfirmButton, disableConfirmButton, enableInput, disableInput, showValidationMessage, resetValidationMessage, getProgressSteps, setProgressSteps, showProgressSteps, hideProgressSteps, _main, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceMethods/hideLoading.js */ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableLoading", function() { return _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__["disableLoading"]; });

/* harmony import */ var _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceMethods/getInput.js */ "./node_modules/sweetalert2/src/instanceMethods/getInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInput", function() { return _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__["getInput"]; });

/* harmony import */ var _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceMethods/close.js */ "./node_modules/sweetalert2/src/instanceMethods/close.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closePopup", function() { return _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__["closePopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__["closeModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeToast", function() { return _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__["closeToast"]; });

/* harmony import */ var _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceMethods/enable-disable-elements.js */ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableButtons", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["enableButtons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableButtons", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["disableButtons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableConfirmButton", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["enableConfirmButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableConfirmButton", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["disableConfirmButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableInput", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["enableInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableInput", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["disableInput"]; });

/* harmony import */ var _instanceMethods_show_reset_validation_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceMethods/show-reset-validation-error.js */ "./node_modules/sweetalert2/src/instanceMethods/show-reset-validation-error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showValidationMessage", function() { return _instanceMethods_show_reset_validation_error_js__WEBPACK_IMPORTED_MODULE_4__["showValidationMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetValidationMessage", function() { return _instanceMethods_show_reset_validation_error_js__WEBPACK_IMPORTED_MODULE_4__["resetValidationMessage"]; });

/* harmony import */ var _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instanceMethods/progress-steps.js */ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProgressSteps", function() { return _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__["getProgressSteps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProgressSteps", function() { return _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__["setProgressSteps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showProgressSteps", function() { return _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__["showProgressSteps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideProgressSteps", function() { return _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__["hideProgressSteps"]; });

/* harmony import */ var _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instanceMethods/_main.js */ "./node_modules/sweetalert2/src/instanceMethods/_main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_main", function() { return _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__["_main"]; });

/* harmony import */ var _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceMethods/update.js */ "./node_modules/sweetalert2/src/instanceMethods/update.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__["update"]; });











/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/_main.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/_main.js ***!
  \***************************************************************/
/*! exports provided: _main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_main", function() { return _main; });
/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_Timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Timer.js */ "./node_modules/sweetalert2/src/utils/Timer.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_setParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/setParameters.js */ "./node_modules/sweetalert2/src/utils/setParameters.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _utils_openPopup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/openPopup.js */ "./node_modules/sweetalert2/src/utils/openPopup.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");











function _main (userParams) {
  Object(_utils_params_js__WEBPACK_IMPORTED_MODULE_0__["showWarningsForParams"])(userParams)

  const innerParams = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"], userParams)
  Object(_utils_setParameters_js__WEBPACK_IMPORTED_MODULE_5__["default"])(innerParams)
  Object.freeze(innerParams)
  _privateProps_js__WEBPACK_IMPORTED_MODULE_8__["default"].innerParams.set(this, innerParams)

  // clear the previous timer
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout.stop()
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout
  }

  // clear the restore focus timeout
  clearTimeout(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].restoreFocusTimeout)

  const domCache = {
    popup: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getPopup"](),
    container: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getContainer"](),
    content: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getContent"](),
    actions: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getActions"](),
    confirmButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getConfirmButton"](),
    cancelButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getCancelButton"](),
    closeButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getCloseButton"](),
    validationMessage: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getValidationMessage"](),
    progressSteps: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getProgressSteps"]()
  }
  _privateProps_js__WEBPACK_IMPORTED_MODULE_8__["default"].domCache.set(this, domCache)

  const constructor = this.constructor

  return new Promise((resolve) => {
    // functions to handle all closings/dismissals
    const succeedWith = (value) => {
      this.closePopup({ value })
    }
    const dismissWith = (dismiss) => {
      this.closePopup({ dismiss })
    }

    _privateMethods_js__WEBPACK_IMPORTED_MODULE_9__["default"].swalPromiseResolve.set(this, resolve)

    // Close on timer
    if (innerParams.timer) {
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout = new _utils_Timer_js__WEBPACK_IMPORTED_MODULE_3__["default"](() => {
        dismissWith('timer')
        delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout
      }, innerParams.timer)
    }

    // Get the value of the popup input
    const getInputValue = () => {
      const input = this.getInput()
      if (!input) {
        return null
      }
      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0
        case 'radio':
          return input.checked ? input.value : null
        case 'file':
          return input.files.length ? input.files[0] : null
        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value
      }
    }

    // input autofocus
    if (innerParams.input) {
      setTimeout(() => {
        const input = this.getInput()
        if (input) {
          _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["focusInput"](input)
        }
      }, 0)
    }

    const confirm = (value) => {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading() // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        this.resetValidationMessage()
        const preConfirmPromise = Promise.resolve().then(() => innerParams.preConfirm(value, innerParams.validationMessage))
        preConfirmPromise.then(
          (preConfirmValue) => {
            if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"](domCache.validationMessage) || preConfirmValue === false) {
              this.hideLoading()
            } else {
              succeedWith(preConfirmValue || value)
            }
          }
        )
      } else {
        succeedWith(value)
      }
    }

    // Mouse interactions
    const onButtonEvent = (e) => {
      const target = e.target
      const { confirmButton, cancelButton } = domCache
      const targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target))
      const targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target))

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            this.disableButtons()
            if (innerParams.input) {
              const inputValue = getInputValue()

              if (innerParams.inputValidator) {
                this.disableInput()
                const validationPromise = Promise.resolve().then(() => innerParams.inputValidator(inputValue, innerParams.validationMessage))
                validationPromise.then(
                  (validationMessage) => {
                    this.enableButtons()
                    this.enableInput()
                    if (validationMessage) {
                      this.showValidationMessage(validationMessage)
                    } else {
                      confirm(inputValue)
                    }
                  }
                )
              } else if (!this.getInput().checkValidity()) {
                this.enableButtons()
                this.showValidationMessage(innerParams.validationMessage)
              } else {
                confirm(inputValue)
              }
            } else {
              confirm(true)
            }

            // Clicked 'cancel'
          } else if (targetedCancel && constructor.isVisible()) {
            this.disableButtons()
            dismissWith(constructor.DismissReason.cancel)
          }
          break
        default:
      }
    }

    const buttons = domCache.popup.querySelectorAll('button')
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent
      buttons[i].onmouseover = onButtonEvent
      buttons[i].onmouseout = onButtonEvent
      buttons[i].onmousedown = onButtonEvent
    }

    // Closing popup by close button
    domCache.closeButton.onclick = () => {
      dismissWith(constructor.DismissReason.close)
    }

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = () => {
        if (
          innerParams.showConfirmButton ||
          innerParams.showCancelButton ||
          innerParams.showCloseButton ||
          innerParams.input
        ) {
          return
        }
        dismissWith(constructor.DismissReason.close)
      }
    } else {
      let ignoreOutsideClick = false

      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      domCache.popup.onmousedown = () => {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined
          // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup
          if (e.target === domCache.container) {
            ignoreOutsideClick = true
          }
        }
      }

      // Ignore click events that had mousedown on the container but mouseup on the popup
      domCache.container.onmousedown = () => {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined
          // We also need to check if the mouseup target is a child of the popup
          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true
          }
        }
      }

      domCache.container.onclick = (e) => {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false
          return
        }
        if (e.target !== domCache.container) {
          return
        }
        if (Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["callIfFunction"])(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop)
        }
      }
    }

    // Reverse buttons (Confirm on the right side)
    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton)
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton)
    }

    // Focus handling
    const setFocus = (index, increment) => {
      const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getFocusableElements"](innerParams.focusCancel)
      // search for visible elements and select the next possible match
      for (let i = 0; i < focusableElements.length; i++) {
        index = index + increment

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1
        }

        return focusableElements[index].focus()
      }
      // no visible focusable elements, focus the popup
      domCache.popup.focus()
    }

    const keydownHandler = (e, innerParams) => {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation()
      }

      const arrowKeys = [
        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
        'Left', 'Right', 'Up', 'Down' // IE11
      ]

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && this.getInput() && e.target.outerHTML === this.getInput().outerHTML) {
          if (['textarea', 'file'].includes(innerParams.input)) {
            return // do not submit
          }

          constructor.clickConfirm()
          e.preventDefault()
        }

        // TAB
      } else if (e.key === 'Tab') {
        const targetElement = e.target

        const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getFocusableElements"](innerParams.focusCancel)
        let btnIndex = -1
        for (let i = 0; i < focusableElements.length; i++) {
          if (targetElement === focusableElements[i]) {
            btnIndex = i
            break
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1)
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1)
        }
        e.stopPropagation()
        e.preventDefault()

        // ARROWS - switch focus between buttons
      } else if (arrowKeys.includes(e.key)) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"](domCache.cancelButton)) {
          domCache.cancelButton.focus()
          // and vice versa
        } else if (document.activeElement === domCache.cancelButton && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"](domCache.confirmButton)) {
          domCache.confirmButton.focus()
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["callIfFunction"])(innerParams.allowEscapeKey) === true) {
        e.preventDefault()
        dismissWith(constructor.DismissReason.esc)
      }
    }

    if (_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandlerAdded) {
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownTarget.removeEventListener('keydown', _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandler, { capture: _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownListenerCapture })
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandlerAdded = false
    }

    if (!innerParams.toast) {
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandler = (e) => keydownHandler(e, innerParams)
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownListenerCapture = innerParams.keydownListenerCapture
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownTarget.addEventListener('keydown', _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandler, { capture: _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownListenerCapture })
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandlerAdded = true
    }

    this.enableButtons()
    this.hideLoading()
    this.resetValidationMessage()

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"]['toast-column'])
    } else {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["removeClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"]['toast-column'])
    }

    // inputs
    const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea']
    const setInputPlaceholder = (input) => {
      if (!input.placeholder || innerParams.inputPlaceholder) {
        input.placeholder = innerParams.inputPlaceholder
      }
    }
    let input
    for (let i = 0; i < inputTypes.length; i++) {
      const inputClass = _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"][inputTypes[i]]
      const inputContainer = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getChildByClass"](domCache.content, inputClass)
      input = this.getInput(inputTypes[i])

      // set attributes
      if (input) {
        for (let j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            const attrName = input.attributes[j].name
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName)
            }
          }
        }
        for (let attr in innerParams.inputAttributes) {
          // Do not set a placeholder for <input type="range">
          // it'll crash Edge, #1298
          if (inputTypes[i] === 'range' && attr === 'placeholder') {
            continue
          }

          input.setAttribute(attr, innerParams.inputAttributes[attr])
        }
      }

      // set class
      inputContainer.className = inputClass
      if (innerParams.inputClass) {
        _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](inputContainer, innerParams.inputClass)
      }

      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](inputContainer)
    }

    let populateInputOptions
    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url': {
        input = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getChildByClass"](domCache.content, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].input)
        if (typeof innerParams.inputValue === 'string' || typeof innerParams.inputValue === 'number') {
          input.value = innerParams.inputValue
        } else if (!Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["isPromise"])(innerParams.inputValue)) {
          Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["warn"])(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof innerParams.inputValue}"`)
        }
        setInputPlaceholder(input)
        input.type = innerParams.input
        _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](input)
        break
      }
      case 'file': {
        input = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getChildByClass"](domCache.content, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].file)
        setInputPlaceholder(input)
        input.type = innerParams.input
        _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](input)
        break
      }
      case 'range': {
        const range = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getChildByClass"](domCache.content, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].range)
        const rangeInput = range.querySelector('input')
        const rangeOutput = range.querySelector('output')
        rangeInput.value = innerParams.inputValue
        rangeInput.type = innerParams.input
        rangeOutput.value = innerParams.inputValue
        _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](range)
        break
      }
      case 'select': {
        const select = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getChildByClass"](domCache.content, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].select)
        select.innerHTML = ''
        if (innerParams.inputPlaceholder) {
          const placeholder = document.createElement('option')
          placeholder.innerHTML = innerParams.inputPlaceholder
          placeholder.value = ''
          placeholder.disabled = true
          placeholder.selected = true
          select.appendChild(placeholder)
        }
        populateInputOptions = (inputOptions) => {
          inputOptions.forEach(inputOption => {
            const optionValue = inputOption[0]
            const optionLabel = inputOption[1]
            const option = document.createElement('option')
            option.value = optionValue
            option.innerHTML = optionLabel
            if (innerParams.inputValue.toString() === optionValue.toString()) {
              option.selected = true
            }
            select.appendChild(option)
          })
          _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](select)
          select.focus()
        }
        break
      }
      case 'radio': {
        const radio = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getChildByClass"](domCache.content, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].radio)
        radio.innerHTML = ''
        populateInputOptions = (inputOptions) => {
          inputOptions.forEach(inputOption => {
            const radioValue = inputOption[0]
            const radioLabel = inputOption[1]
            const radioInput = document.createElement('input')
            const radioLabelElement = document.createElement('label')
            radioInput.type = 'radio'
            radioInput.name = _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].radio
            radioInput.value = radioValue
            if (innerParams.inputValue.toString() === radioValue.toString()) {
              radioInput.checked = true
            }
            const label = document.createElement('span')
            label.innerHTML = radioLabel
            label.className = _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].label
            radioLabelElement.appendChild(radioInput)
            radioLabelElement.appendChild(label)
            radio.appendChild(radioLabelElement)
          })
          _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](radio)
          const radios = radio.querySelectorAll('input')
          if (radios.length) {
            radios[0].focus()
          }
        }
        break
      }
      case 'checkbox': {
        const checkbox = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getChildByClass"](domCache.content, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].checkbox)
        const checkboxInput = this.getInput('checkbox')
        checkboxInput.type = 'checkbox'
        checkboxInput.value = 1
        checkboxInput.id = _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].checkbox
        checkboxInput.checked = Boolean(innerParams.inputValue)
        let label = checkbox.querySelector('span')
        label.innerHTML = innerParams.inputPlaceholder
        _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](checkbox)
        break
      }
      case 'textarea': {
        const textarea = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getChildByClass"](domCache.content, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].textarea)
        textarea.value = innerParams.inputValue
        setInputPlaceholder(textarea)
        _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](textarea)
        break
      }
      case null: {
        break
      }
      default:
        Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["error"])(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${innerParams.input}"`)
        break
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      const processInputOptions = inputOptions => populateInputOptions(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["formatInputOptions"])(inputOptions))
      if (Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["isPromise"])(innerParams.inputOptions)) {
        constructor.showLoading()
        innerParams.inputOptions.then((inputOptions) => {
          this.hideLoading()
          processInputOptions(inputOptions)
        })
      } else if (typeof innerParams.inputOptions === 'object') {
        processInputOptions(innerParams.inputOptions)
      } else {
        Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["error"])(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof innerParams.inputOptions}`)
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(innerParams.input) && Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["isPromise"])(innerParams.inputValue)) {
      constructor.showLoading()
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](input)
      innerParams.inputValue.then((inputValue) => {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + ''
        _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](input)
        input.focus()
        this.hideLoading()
      })
        .catch((err) => {
          Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["error"])('Error in inputValue promise: ' + err)
          input.value = ''
          _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](input)
          input.focus()
          this.hideLoading()
        })
    }

    Object(_utils_openPopup_js__WEBPACK_IMPORTED_MODULE_7__["openPopup"])(innerParams)

    if (!innerParams.toast) {
      if (!Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["callIfFunction"])(innerParams.allowEnterKey)) {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur()
        }
      } else if (innerParams.focusCancel && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"](domCache.cancelButton)) {
        domCache.cancelButton.focus()
      } else if (innerParams.focusConfirm && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"](domCache.confirmButton)) {
        domCache.confirmButton.focus()
      } else {
        setFocus(-1, 1)
      }
    }

    // fix scroll
    domCache.container.scrollTop = 0
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/close.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/close.js ***!
  \***************************************************************/
/*! exports provided: close, closePopup, closeModal, closeToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePopup", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeToast", function() { return close; });
/* harmony import */ var _utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _utils_ieFix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ieFix.js */ "./node_modules/sweetalert2/src/utils/ieFix.js");
/* harmony import */ var _utils_aria_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");









/*
 * Instance method to close sweetAlert
 */
function close (resolveValue) {
  const container = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["getContainer"]()
  const popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["getPopup"]()
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_7__["default"].innerParams.get(this)
  const swalPromiseResolve = _privateMethods_js__WEBPACK_IMPORTED_MODULE_8__["default"].swalPromiseResolve.get(this)
  const onClose = innerParams.onClose
  const onAfterClose = innerParams.onAfterClose

  if (!popup) {
    return
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup)
  }

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["removeClass"](popup, _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"].show)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["addClass"](popup, _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"].hide)

  const removePopupAndResetState = () => {
    if (!_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["isToast"]()) {
      Object(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["restoreActiveElement"])().then(() => triggerOnAfterClose(onAfterClose))
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownTarget.removeEventListener('keydown', _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandler, { capture: _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownListenerCapture })
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandlerAdded = false
    } else {
      triggerOnAfterClose(onAfterClose)
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container)
    }
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["removeClass"](
      [document.documentElement, document.body],
      [
        _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"].shown,
        _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"]['height-auto'],
        _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"]['no-backdrop'],
        _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"]['toast-shown'],
        _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"]['toast-column']
      ]
    )

    if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["isModal"]()) {
      Object(_utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__["undoScrollbar"])()
      Object(_utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__["undoIOSfix"])()
      Object(_utils_ieFix_js__WEBPACK_IMPORTED_MODULE_2__["undoIEfix"])()
      Object(_utils_aria_js__WEBPACK_IMPORTED_MODULE_3__["unsetAriaHidden"])()
    }
  }

  // If animation is supported, animate
  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["animationEndEvent"] && !_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["hasClass"](popup, _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"].noanimation)) {
    popup.addEventListener(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["animationEndEvent"], function swalCloseEventFinished () {
      popup.removeEventListener(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["animationEndEvent"], swalCloseEventFinished)
      if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["hasClass"](popup, _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"].hide)) {
        removePopupAndResetState()
      }
    })
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState()
  }

  // Resolve Swal promise
  swalPromiseResolve(resolveValue || {})
}

const triggerOnAfterClose = (onAfterClose) => {
  if (onAfterClose !== null && typeof onAfterClose === 'function') {
    setTimeout(() => {
      onAfterClose()
    })
  }
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js ***!
  \*********************************************************************************/
/*! exports provided: enableButtons, disableButtons, enableConfirmButton, disableConfirmButton, enableInput, disableInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableButtons", function() { return enableButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableButtons", function() { return disableButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableConfirmButton", function() { return enableConfirmButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableConfirmButton", function() { return disableConfirmButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableInput", function() { return enableInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableInput", function() { return disableInput; });
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");


function enableButtons () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(this)
  domCache.confirmButton.disabled = false
  domCache.cancelButton.disabled = false
}

function disableButtons () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(this)
  domCache.confirmButton.disabled = true
  domCache.cancelButton.disabled = true
}

function enableConfirmButton () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(this)
  domCache.confirmButton.disabled = false
}

function disableConfirmButton () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(this)
  domCache.confirmButton.disabled = true
}

function enableInput () {
  const input = this.getInput()
  if (!input) {
    return false
  }
  if (input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode
    const radios = radiosContainer.querySelectorAll('input')
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = false
    }
  } else {
    input.disabled = false
  }
}

function disableInput () {
  const input = this.getInput()
  if (!input) {
    return false
  }
  if (input && input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode
    const radios = radiosContainer.querySelectorAll('input')
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = true
    }
  } else {
    input.disabled = true
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/getInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/getInput.js ***!
  \******************************************************************/
/*! exports provided: getInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInput", function() { return getInput; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




// Get input element by specified type or, if type isn't specified, by params.input
function getInput (inputType) {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(this)
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  inputType = inputType || innerParams.input
  if (!inputType) {
    return null
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getChildByClass"](domCache.content, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"][inputType])
    case 'checkbox':
      return domCache.popup.querySelector(`.${_utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].checkbox} input`)
    case 'radio':
      return domCache.popup.querySelector(`.${_utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].radio} input:checked`) ||
        domCache.popup.querySelector(`.${_utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].radio} input:first-child`)
    case 'range':
      return domCache.popup.querySelector(`.${_utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].range} input`)
    default:
      return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getChildByClass"](domCache.content, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].input)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/hideLoading.js ***!
  \*********************************************************************/
/*! exports provided: hideLoading, disableLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableLoading", function() { return hideLoading; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




/**
 * Enables buttons and hide loader.
 */
function hideLoading () {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(this)
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  if (!innerParams.showConfirmButton) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hide"](domCache.confirmButton)
    if (!innerParams.showCancelButton) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hide"](domCache.actions)
    }
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"]([domCache.popup, domCache.actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].loading)
  domCache.popup.removeAttribute('aria-busy')
  domCache.popup.removeAttribute('data-loading')
  domCache.confirmButton.disabled = false
  domCache.cancelButton.disabled = false
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/progress-steps.js ***!
  \************************************************************************/
/*! exports provided: getProgressSteps, setProgressSteps, showProgressSteps, hideProgressSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressSteps", function() { return getProgressSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgressSteps", function() { return setProgressSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showProgressSteps", function() { return showProgressSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideProgressSteps", function() { return hideProgressSteps; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");



function getProgressSteps () {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].innerParams.get(this)
  return innerParams.progressSteps
}

function setProgressSteps (progressSteps) {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].innerParams.get(this)
  const updatedParams = Object.assign({}, innerParams, { progressSteps })
  _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].innerParams.set(this, updatedParams)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["renderProgressSteps"](updatedParams)
}

function showProgressSteps () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].domCache.get(this)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["show"](domCache.progressSteps)
}

function hideProgressSteps () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].domCache.get(this)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hide"](domCache.progressSteps)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/show-reset-validation-error.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/show-reset-validation-error.js ***!
  \*************************************************************************************/
/*! exports provided: showValidationMessage, resetValidationMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showValidationMessage", function() { return showValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetValidationMessage", function() { return resetValidationMessage; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




// Show block with validation message
function showValidationMessage (error) {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  domCache.validationMessage.innerHTML = error
  const popupComputedStyle = window.getComputedStyle(domCache.popup)
  domCache.validationMessage.style.marginLeft = `-${popupComputedStyle.getPropertyValue('padding-left')}`
  domCache.validationMessage.style.marginRight = `-${popupComputedStyle.getPropertyValue('padding-right')}`
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["show"](domCache.validationMessage)

  const input = this.getInput()
  if (input) {
    input.setAttribute('aria-invalid', true)
    input.setAttribute('aria-describedBy', _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"]['validation-message'])
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["focusInput"](input)
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"](input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].inputerror)
  }
}

// Hide block with validation message
function resetValidationMessage () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  if (domCache.validationMessage) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hide"](domCache.validationMessage)
  }

  const input = this.getInput()
  if (input) {
    input.removeAttribute('aria-invalid')
    input.removeAttribute('aria-describedBy')
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"](input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].inputerror)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/update.js":
/*!****************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/update.js ***!
  \****************************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





/**
 * Updates popup options.
 */
function update (params) {
  const validUpdatableParams = {}

  // assign valid params from `params` to `defaults`
  Object.keys(params).forEach(param => {
    if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param]
    } else {
      Object(_src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Invalid parameter to update: "${param}". Updatable params are listed here: TODO (@limonte) add link`)
    }
  })

  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(this)
  const updatedParams = Object.assign({}, innerParams, validUpdatableParams)

  // Actions
  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["renderActions"](updatedParams)

  // Content
  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["renderContent"](updatedParams)

  // Icon
  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["renderIcon"](updatedParams)

  // Image
  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["renderImage"](updatedParams)

  // Progress steps
  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["renderProgressSteps"](updatedParams)

  // Title
  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["renderTitle"](updatedParams)


  _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.set(this, updatedParams)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/privateMethods.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateMethods.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  swalPromiseResolve: new WeakMap()
});



/***/ }),

/***/ "./node_modules/sweetalert2/src/privateProps.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateProps.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods.js ***!
  \*******************************************************/
/*! exports provided: isValidParameter, isUpdatableParameter, isDeprecatedParameter, argsToParams, getContainer, getPopup, getTitle, getContent, getImage, getIcons, getCloseButton, getActions, getConfirmButton, getCancelButton, getFooter, getFocusableElements, getValidationMessage, isLoading, isVisible, clickConfirm, clickCancel, fire, mixin, queue, getQueueStep, insertQueueStep, deleteQueueStep, showLoading, enableLoading, getTimerLeft, stopTimer, resumeTimer, toggleTimer, increaseTimer, isTimerRunning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticMethods/argsToParams.js */ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argsToParams", function() { return _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__["argsToParams"]; });

/* harmony import */ var _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticMethods/dom.js */ "./node_modules/sweetalert2/src/staticMethods/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcons", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCloseButton", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getCloseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfirmButton", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getConfirmButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCancelButton", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getCancelButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFooter", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableElements", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getFocusableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getValidationMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["isLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clickConfirm", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["clickConfirm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clickCancel", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["clickCancel"]; });

/* harmony import */ var _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticMethods/fire.js */ "./node_modules/sweetalert2/src/staticMethods/fire.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__["fire"]; });

/* harmony import */ var _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticMethods/mixin.js */ "./node_modules/sweetalert2/src/staticMethods/mixin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__["mixin"]; });

/* harmony import */ var _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticMethods/queue.js */ "./node_modules/sweetalert2/src/staticMethods/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__["queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueueStep", function() { return _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__["getQueueStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertQueueStep", function() { return _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__["insertQueueStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteQueueStep", function() { return _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__["deleteQueueStep"]; });

/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_5__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableLoading", function() { return _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_5__["enableLoading"]; });

/* harmony import */ var _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staticMethods/timer.js */ "./node_modules/sweetalert2/src/staticMethods/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimerLeft", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["getTimerLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopTimer", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["stopTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resumeTimer", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["resumeTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleTimer", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["toggleTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "increaseTimer", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["increaseTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTimerRunning", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["isTimerRunning"]; });

/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidParameter", function() { return _utils_params_js__WEBPACK_IMPORTED_MODULE_7__["isValidParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUpdatableParameter", function() { return _utils_params_js__WEBPACK_IMPORTED_MODULE_7__["isUpdatableParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDeprecatedParameter", function() { return _utils_params_js__WEBPACK_IMPORTED_MODULE_7__["isDeprecatedParameter"]; });











/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/argsToParams.js ***!
  \********************************************************************/
/*! exports provided: argsToParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argsToParams", function() { return argsToParams; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const argsToParams = (args) => {
  const params = {}
  switch (typeof args[0]) {
    case 'object':
      Object.assign(params, args[0])
      break

    default:
      ['title', 'html', 'type'].forEach((name, index) => {
        switch (typeof args[index]) {
          case 'string':
            params[name] = args[index]
            break
          case 'undefined':
            break
          default:
            Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["error"])(`Unexpected type of ${name}! Expected "string", got ${typeof args[index]}`)
        }
      })
  }
  return params
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/dom.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/dom.js ***!
  \***********************************************************/
/*! exports provided: getContainer, getPopup, getTitle, getContent, getImage, getIcons, getCloseButton, getActions, getConfirmButton, getCancelButton, getFooter, getFocusableElements, getValidationMessage, isLoading, isVisible, clickConfirm, clickCancel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickConfirm", function() { return clickConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickCancel", function() { return clickCancel; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcons", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCloseButton", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCloseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfirmButton", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getConfirmButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCancelButton", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCancelButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFooter", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableElements", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getFocusableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getValidationMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["isLoading"]; });





/*
 * Global function to determine if SweetAlert2 popup is shown
 */
const isVisible = () => {
  return !!_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()
}

/*
 * Global function to click 'Confirm' button
 */
const clickConfirm = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getConfirmButton"]().click()

/*
 * Global function to click 'Cancel' button
 */
const clickCancel = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCancelButton"]().click()


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/fire.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/fire.js ***!
  \************************************************************/
/*! exports provided: fire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
function fire (...args) {
  const Swal = this
  return new Swal(...args)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/mixin.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/mixin.js ***!
  \*************************************************************/
/*! exports provided: mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin (mixinParams) {
  class MixinSwal extends this {
    _main (params) {
      return super._main(Object.assign({}, mixinParams, params))
    }
  }

  return MixinSwal
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/queue.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/queue.js ***!
  \*************************************************************/
/*! exports provided: queue, getQueueStep, insertQueueStep, deleteQueueStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueueStep", function() { return getQueueStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertQueueStep", function() { return insertQueueStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteQueueStep", function() { return deleteQueueStep; });
// private global state for the queue feature
let currentSteps = []

/*
 * Global function for chaining sweetAlert popups
 */
const queue = function (steps) {
  const Swal = this
  currentSteps = steps
  const resetQueue = () => {
    currentSteps = []
    document.body.removeAttribute('data-swal2-queue-step')
  }
  let queueResult = []
  return new Promise((resolve) => {
    (function step (i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i)

        Swal.fire(currentSteps[i]).then((result) => {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value)
            step(i + 1, callback)
          } else {
            resetQueue()
            resolve({ dismiss: result.dismiss })
          }
        })
      } else {
        resetQueue()
        resolve({ value: queueResult })
      }
    })(0)
  })
}

/*
 * Global function for getting the index of current popup in queue
 */
const getQueueStep = () => document.body.getAttribute('data-swal2-queue-step')

/*
 * Global function for inserting a popup to the queue
 */
const insertQueueStep = (step, index) => {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step)
  }
  return currentSteps.push(step)
}

/*
 * Global function for deleting a popup from the queue
 */
const deleteQueueStep = (index) => {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/showLoading.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/showLoading.js ***!
  \*******************************************************************/
/*! exports provided: showLoading, enableLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableLoading", function() { return showLoading; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");




/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
const showLoading = () => {
  let popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()
  if (!popup) {
    Object(_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__["default"])('')
  }
  popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()
  const actions = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getActions"]()
  const confirmButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getConfirmButton"]()
  const cancelButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCancelButton"]()

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["show"](actions)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["show"](confirmButton)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"]([popup, actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].loading)
  confirmButton.disabled = true
  cancelButton.disabled = true

  popup.setAttribute('data-loading', true)
  popup.setAttribute('aria-busy', true)
  popup.focus()
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/timer.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/timer.js ***!
  \*************************************************************/
/*! exports provided: getTimerLeft, stopTimer, resumeTimer, toggleTimer, increaseTimer, isTimerRunning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimerLeft", function() { return getTimerLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTimer", function() { return stopTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resumeTimer", function() { return resumeTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTimer", function() { return toggleTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseTimer", function() { return increaseTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimerRunning", function() { return isTimerRunning; });
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");


/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */
const getTimerLeft = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout.getTimerLeft()
}

/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const stopTimer = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout.stop()
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const resumeTimer = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout.start()
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const toggleTimer = () => {
  const timer = _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout
  return timer && (timer.running ? timer.stop() : timer.start())
}

/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */
const increaseTimer = (n) => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout.increase(n)
}

/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */
const isTimerRunning = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeout.isRunning()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlert.js */ "./node_modules/sweetalert2/src/SweetAlert.js");


const Swal = _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__["default"]
Swal.default = Swal

/* harmony default export */ __webpack_exports__["default"] = (Swal);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/DismissReason.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/DismissReason.js ***!
  \*************************************************************/
/*! exports provided: DismissReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DismissReason", function() { return DismissReason; });
const DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
})


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/Timer.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/Timer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
class Timer {
  constructor (callback, delay) {
    let id, started, remaining = delay
    this.running = false

    this.start = function () {
      if (!this.running) {
        this.running = true
        started = new Date()
        id = setTimeout(callback, remaining)
      }
      return remaining
    }

    this.stop = function () {
      if (this.running) {
        this.running = false
        clearTimeout(id)
        remaining -= new Date() - started
      }
      return remaining
    }

    this.increase = function (n) {
      const running = this.running
      if (running) {
        this.stop()
      }
      remaining += n
      if (running) {
        this.start()
      }
      return remaining
    }

    this.getTimerLeft = function () {
      if (this.running) {
        this.stop()
        this.start()
      }
      return remaining
    }

    this.isRunning = function () {
      return this.running
    }

    this.start()
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/aria.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/aria.js ***!
  \****************************************************/
/*! exports provided: setAriaHidden, unsetAriaHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAriaHidden", function() { return setAriaHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetAriaHidden", function() { return unsetAriaHidden; });
/* harmony import */ var _dom_getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

const setAriaHidden = () => {
  const bodyChildren = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toArray"])(document.body.children)
  bodyChildren.forEach(el => {
    if (el === Object(_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"])() || Object(_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__["contains"])(el, Object(_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"])())) {
      return
    }

    if (el.hasAttribute('aria-hidden') ) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'))
    }
    el.setAttribute('aria-hidden', 'true')
  })
}

const unsetAriaHidden = () => {
  const bodyChildren = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toArray"])(document.body.children)
  bodyChildren.forEach(el => {
    if (el.hasAttribute('data-previous-aria-hidden') ) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'))
      el.removeAttribute('data-previous-aria-hidden')
    } else {
      el.removeAttribute('aria-hidden')
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/classes.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/classes.js ***!
  \*******************************************************/
/*! exports provided: swalPrefix, prefix, swalClasses, iconTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swalPrefix", function() { return swalPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swalClasses", function() { return swalClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconTypes", function() { return iconTypes; });
const swalPrefix = 'swal2-'

const prefix = (items) => {
  const result = {}
  for (const i in items) {
    result[items[i]] = swalPrefix + items[i]
  }
  return result
}

const swalClasses = prefix([
  'container',
  'shown',
  'height-auto',
  'iosfix',
  'popup',
  'modal',
  'no-backdrop',
  'toast',
  'toast-shown',
  'toast-column',
  'fade',
  'show',
  'hide',
  'noanimation',
  'close',
  'title',
  'header',
  'content',
  'actions',
  'confirm',
  'cancel',
  'footer',
  'icon',
  'icon-text',
  'image',
  'input',
  'file',
  'range',
  'select',
  'radio',
  'checkbox',
  'label',
  'textarea',
  'inputerror',
  'validation-message',
  'progresssteps',
  'activeprogressstep',
  'progresscircle',
  'progressline',
  'loading',
  'styled',
  'top',
  'top-start',
  'top-end',
  'top-left',
  'top-right',
  'center',
  'center-start',
  'center-end',
  'center-left',
  'center-right',
  'bottom',
  'bottom-start',
  'bottom-end',
  'bottom-left',
  'bottom-right',
  'grow-row',
  'grow-column',
  'grow-fullscreen',
  'rtl'
])

const iconTypes = prefix([
  'success',
  'warning',
  'info',
  'question',
  'error'
])


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/defaultInputValidators.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage ? validationMessage : 'Invalid email address')
  },
  url: (string, validationMessage) => {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage ? validationMessage : 'Invalid URL')
  }
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js ***!
  \*********************************************************************/
/*! exports provided: animationEndEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEndEvent", function() { return animationEndEvent; });
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");


const animationEndEvent = (() => {
  // Prevent run in Node env
  /* istanbul ignore if */
  if (Object(_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__["isNodeEnv"])()) {
    return false
  }

  const testEl = document.createElement('div')
  const transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  }
  for (const i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i]
    }
  }

  return false
})()


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/domUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/domUtils.js ***!
  \************************************************************/
/*! exports provided: states, hasClass, focusInput, addClass, removeClass, getChildByClass, show, hide, isVisible, contains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusInput", function() { return focusInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildByClass", function() { return getChildByClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");


// Remember state in cases where opening and handling a modal will fiddle with it.
const states = {
  previousBodyPadding: null
}

const hasClass = (elem, className) => {
  return elem.classList.contains(className)
}

const focusInput = (input) => {
  input.focus()

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    const val = input.value
    input.value = ''
    input.value = val
  }
}

const addOrRemoveClass = (target, classList, add) => {
  if (!target || !classList) {
    return
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean)
  }
  classList.forEach((className) => {
    if (target.forEach) {
      target.forEach((elem) => {
        add ? elem.classList.add(className) : elem.classList.remove(className)
      })
    } else {
      add ? target.classList.add(className) : target.classList.remove(className)
    }
  })
}

const addClass = (target, classList) => {
  addOrRemoveClass(target, classList, true)
}

const removeClass = (target, classList) => {
  addOrRemoveClass(target, classList, false)
}

const getChildByClass = (elem, className) => {
  for (let i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i]
    }
  }
}

const show = (elem) => {
  elem.style.opacity = ''
  elem.style.display = (elem.id === _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content) ? 'block' : 'flex'
}

const hide = (elem) => {
  elem.style.opacity = ''
  elem.style.display = 'none'
}

// borrowed from jquery $(elem).is(':visible') implementation
const isVisible = (elem) => elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)

const contains = (haystack, needle) => {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/getters.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/getters.js ***!
  \***********************************************************/
/*! exports provided: getContainer, getPopup, getIcons, getTitle, getContent, getImage, getProgressSteps, getValidationMessage, getConfirmButton, getCancelButton, getActions, getFooter, getCloseButton, getFocusableElements, isModal, isToast, isLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return getContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return getPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcons", function() { return getIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return getTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return getContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return getImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressSteps", function() { return getProgressSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return getValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfirmButton", function() { return getConfirmButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCancelButton", function() { return getCancelButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return getActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFooter", function() { return getFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCloseButton", function() { return getCloseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableElements", function() { return getFocusableElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModal", function() { return isModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToast", function() { return isToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");




const getContainer = () => document.body.querySelector('.' + _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].container)

const elementByClass = (className) => {
  const container = getContainer()
  return container ? container.querySelector('.' + className) : null
}

const getPopup = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].popup)

const getIcons = () => {
  const popup = getPopup()
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toArray"])(popup.querySelectorAll('.' + _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon))
}

const getTitle = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].title)

const getContent = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content)

const getImage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].image)

const getProgressSteps = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].progresssteps)

const getValidationMessage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['validation-message'])

const getConfirmButton = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].confirm)

const getCancelButton = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].cancel)

const getActions = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].actions)

const getFooter = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].footer)

const getCloseButton = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].close)

const getFocusableElements = () => {
  const focusableElementsWithTabindex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toArray"])(
    getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
  )
  // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'))
      b = parseInt(b.getAttribute('tabindex'))
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
      return 0
    })

  // https://github.com/jkup/focusable/blob/master/index.js
  const otherFocusableElements = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toArray"])(
    getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')
  ).filter(el => el.getAttribute('tabindex') !== '-1')

  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["uniqueArray"])(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["isVisible"])(el))
}

const isModal = () => {
  return !isToast() && !document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['no-backdrop'])
}

const isToast = () => {
  return document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['toast-shown'])
}

const isLoading = () => {
  return getPopup().hasAttribute('data-loading')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/index.js ***!
  \*********************************************************/
/*! exports provided: states, hasClass, focusInput, addClass, removeClass, getChildByClass, show, hide, isVisible, contains, init, getContainer, getPopup, getIcons, getTitle, getContent, getImage, getProgressSteps, getValidationMessage, getConfirmButton, getCancelButton, getActions, getFooter, getCloseButton, getFocusableElements, isModal, isToast, isLoading, parseHtmlToContainer, animationEndEvent, measureScrollbar, renderActions, renderContent, renderIcon, renderImage, renderProgressSteps, renderTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "states", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["states"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusInput", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["focusInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildByClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["getChildByClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "show", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["show"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["isVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["contains"]; });

/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/sweetalert2/src/utils/dom/init.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _init_js__WEBPACK_IMPORTED_MODULE_1__["init"]; });

/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcons", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProgressSteps", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getProgressSteps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getValidationMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfirmButton", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getConfirmButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCancelButton", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getCancelButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFooter", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCloseButton", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getCloseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableElements", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getFocusableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isModal", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["isModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isToast", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["isToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["isLoading"]; });

/* harmony import */ var _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseHtmlToContainer.js */ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseHtmlToContainer", function() { return _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__["parseHtmlToContainer"]; });

/* harmony import */ var _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animationEndEvent.js */ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationEndEvent", function() { return _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__["animationEndEvent"]; });

/* harmony import */ var _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./measureScrollbar.js */ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__["measureScrollbar"]; });

/* harmony import */ var _renderers_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderers/index.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderActions", function() { return _renderers_index_js__WEBPACK_IMPORTED_MODULE_6__["renderActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderContent", function() { return _renderers_index_js__WEBPACK_IMPORTED_MODULE_6__["renderContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderIcon", function() { return _renderers_index_js__WEBPACK_IMPORTED_MODULE_6__["renderIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderImage", function() { return _renderers_index_js__WEBPACK_IMPORTED_MODULE_6__["renderImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderProgressSteps", function() { return _renderers_index_js__WEBPACK_IMPORTED_MODULE_6__["renderProgressSteps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderTitle", function() { return _renderers_index_js__WEBPACK_IMPORTED_MODULE_6__["renderTitle"]; });










/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/init.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/init.js ***!
  \********************************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");







const sweetHTML = `
 <div aria-labelledby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].title}" aria-describedby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].popup}" tabindex="-1">
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].header}">
     <ul class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].progresssteps}"></ul>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].error}">
       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>
     </div>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].question}">
       <span class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['icon-text']}">?</span>
      </div>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].warning}">
       <span class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['icon-text']}">!</span>
      </div>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].info}">
       <span class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['icon-text']}">i</span>
      </div>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].success}">
       <div class="swal2-success-circular-line-left"></div>
       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
       <div class="swal2-success-circular-line-right"></div>
     </div>
     <img class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].image}" />
     <h2 class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].title}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].title}"></h2>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].close}">×</button>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content}">
     <div id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content}"></div>
     <input class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].input}" />
     <input type="file" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].file}" />
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].range}">
       <input type="range" />
       <output></output>
     </div>
     <select class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].select}"></select>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].radio}"></div>
     <label for="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].checkbox}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].checkbox}">
       <input type="checkbox" />
       <span class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].label}"></span>
     </label>
     <textarea class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].textarea}"></textarea>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['validation-message']}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['validation-message']}"></div>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].actions}">
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].confirm}">OK</button>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].cancel}">Cancel</button>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].footer}">
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '')

/*
 * Add modal + backdrop to DOM
 */
const init = (params) => {
  // Clean up the old popup if it exists
  const c = Object(_getters_js__WEBPACK_IMPORTED_MODULE_1__["getContainer"])()
  if (c) {
    c.parentNode.removeChild(c)
    Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(
      [document.documentElement, document.body],
      [
        _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['no-backdrop'],
        _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['toast-shown'],
        _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['has-column']
      ]
    )
  }

  /* istanbul ignore if */
  if (Object(_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__["isNodeEnv"])()) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["error"])('SweetAlert2 requires document to initialize')
    return
  }

  const container = document.createElement('div')
  container.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].container
  container.innerHTML = sweetHTML

  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target
  targetElement.appendChild(container)

  const popup = Object(_getters_js__WEBPACK_IMPORTED_MODULE_1__["getPopup"])()
  const content = Object(_getters_js__WEBPACK_IMPORTED_MODULE_1__["getContent"])()
  const input = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].input)
  const file = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].file)
  const range = content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].range} input`)
  const rangeOutput = content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].range} output`)
  const select = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].select)
  const checkbox = content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].checkbox} input`)
  const textarea = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].textarea)

  // a11y
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog')
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive')
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true')
  }

  // RTL
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["addClass"])(Object(_getters_js__WEBPACK_IMPORTED_MODULE_1__["getContainer"])(), _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].rtl)
  }

  let oldInputVal // IE11 workaround, see #1109 for details
  const resetValidationMessage = (e) => {
    if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__["default"].isVisible() && oldInputVal !== e.target.value) {
      _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__["default"].resetValidationMessage()
    }
    oldInputVal = e.target.value
  }

  input.oninput = resetValidationMessage
  file.onchange = resetValidationMessage
  select.onchange = resetValidationMessage
  checkbox.onchange = resetValidationMessage
  textarea.oninput = resetValidationMessage

  range.oninput = (e) => {
    resetValidationMessage(e)
    rangeOutput.value = range.value
  }

  range.onchange = (e) => {
    resetValidationMessage(e)
    range.nextSibling.value = range.value
  }

  return popup
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js ***!
  \********************************************************************/
/*! exports provided: measureScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return measureScrollbar; });
// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
const measureScrollbar = () => {
  const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints
  if (supportsTouch) {
    return 0
  }
  const scrollDiv = document.createElement('div')
  scrollDiv.style.width = '50px'
  scrollDiv.style.height = '50px'
  scrollDiv.style.overflow = 'scroll'
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js ***!
  \************************************************************************/
/*! exports provided: parseHtmlToContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHtmlToContainer", function() { return parseHtmlToContainer; });
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");


const parseHtmlToContainer = (param, target) => {
  if (!param) {
    return Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_0__["hide"])(target)
  }

  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param)
  // JQuery element(s)
  } else if (typeof param === 'object') {
    target.innerHTML = ''
    if (0 in param) {
      for (let i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true))
      }
    } else {
      target.appendChild(param.cloneNode(true))
    }
  } else if (param) {
    target.innerHTML = param
  }
  Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_0__["show"])(target)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/index.js ***!
  \*******************************************************************/
/*! exports provided: renderActions, renderContent, renderIcon, renderImage, renderProgressSteps, renderTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderActions.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderActions", function() { return _renderActions_js__WEBPACK_IMPORTED_MODULE_0__["renderActions"]; });

/* harmony import */ var _renderContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderContent.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderContent", function() { return _renderContent_js__WEBPACK_IMPORTED_MODULE_1__["renderContent"]; });

/* harmony import */ var _renderIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderIcon.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderIcon", function() { return _renderIcon_js__WEBPACK_IMPORTED_MODULE_2__["renderIcon"]; });

/* harmony import */ var _renderImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderImage.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderImage", function() { return _renderImage_js__WEBPACK_IMPORTED_MODULE_3__["renderImage"]; });

/* harmony import */ var _renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProgressSteps.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderProgressSteps", function() { return _renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_4__["renderProgressSteps"]; });

/* harmony import */ var _renderTitle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderTitle.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderTitle", function() { return _renderTitle_js__WEBPACK_IMPORTED_MODULE_5__["renderTitle"]; });









/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js ***!
  \***************************************************************************/
/*! exports provided: renderActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderActions", function() { return renderActions; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderActions = (params) => {
  const actions = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getActions"]()
  const confirmButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getConfirmButton"]()
  const cancelButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getCancelButton"]()

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](actions)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](actions)
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block'
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](cancelButton)
  }

  // Confirm button
  if (params.showConfirmButton) {
    confirmButton.style.removeProperty('display')
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](confirmButton)
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText
  cancelButton.innerHTML = params.cancelButtonText

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel)
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel)

  // Add buttons custom classes
  confirmButton.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].confirm
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](confirmButton, params.confirmButtonClass)
  cancelButton.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].cancel
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](cancelButton, params.cancelButtonClass)

  // Buttons styling
  if (params.buttonsStyling) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"]([confirmButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].styled)

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor
    }

    // Loading state
    const confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color')
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["removeClass"]([confirmButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].styled)

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = ''
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = ''
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js ***!
  \***************************************************************************/
/*! exports provided: renderContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderContent", function() { return renderContent; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderContent = (params) => {
  const content = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getContent"]().querySelector('#' + _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content)

  // Content as HTML
  if (params.html) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["parseHtmlToContainer"](params.html, content)

    // Content as plain text
  } else if (params.text) {
    content.textContent = params.text
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](content)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](content)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js ***!
  \************************************************************************/
/*! exports provided: renderIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderIcon", function() { return renderIcon; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");





const renderIcon = (params) => {
  const icons = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getIcons"]()
  for (let i = 0; i < icons.length; i++) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["hide"](icons[i])
  }
  if (params.type) {
    if (Object.keys(_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"]).indexOf(params.type) !== -1) {
      const icon = _sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__["default"].getPopup().querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon}.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"][params.type]}`)
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["show"](icon)

      // Animate icon
      if (params.animation) {
        _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](icon, `swal2-animate-${params.type}-icon`)
      }
    } else {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["error"])(`Unknown type! Expected "success", "error", "warning", "info" or "question", got "${params.type}"`)
    }
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js ***!
  \*************************************************************************/
/*! exports provided: renderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderImage", function() { return renderImage; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderImage = (params) => {
  const image = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getImage"]()

  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl)
    image.setAttribute('alt', params.imageAlt)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](image)

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth)
    } else {
      image.removeAttribute('width')
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight)
    } else {
      image.removeAttribute('height')
    }

    image.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].image
    if (params.imageClass) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](image, params.imageClass)
    }
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](image)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js ***!
  \*********************************************************************************/
/*! exports provided: renderProgressSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProgressSteps", function() { return renderProgressSteps; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");





const renderProgressSteps = (params) => {
  let progressStepsContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getProgressSteps"]()
  let currentProgressStep = parseInt(params.currentProgressStep === null ? _sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__["default"].getQueueStep() : params.currentProgressStep, 10)
  if (params.progressSteps && params.progressSteps.length) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["show"](progressStepsContainer)
    progressStepsContainer.innerHTML = ''
    if (currentProgressStep >= params.progressSteps.length) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(
        'Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
        '(currentProgressStep like JS arrays starts from 0)'
      )
    }
    params.progressSteps.forEach((step, index) => {
      let circle = document.createElement('li')
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](circle, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].progresscircle)
      circle.innerHTML = step
      if (index === currentProgressStep) {
        _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](circle, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].activeprogressstep)
      }
      progressStepsContainer.appendChild(circle)
      if (index !== params.progressSteps.length - 1) {
        let line = document.createElement('li')
        _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](line, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].progressline)
        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance
        }
        progressStepsContainer.appendChild(line)
      }
    })
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["hide"](progressStepsContainer)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js ***!
  \*************************************************************************/
/*! exports provided: renderTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTitle", function() { return renderTitle; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderTitle = (params) => {
  const title = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getTitle"]()

  if (params.titleText) {
    title.innerText = params.titleText
  } else if (params.title) {
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />')
    }
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["parseHtmlToContainer"](params.title, title)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/ieFix.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/ieFix.js ***!
  \*****************************************************/
/*! exports provided: IEfix, undoIEfix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEfix", function() { return IEfix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoIEfix", function() { return undoIEfix; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


// https://stackoverflow.com/a/21825207
const isIE11 = () => !!window.MSInputMethodContext && !!document.documentMode

// Fix IE11 centering sweetalert2/issues/933
/* istanbul ignore next */
const fixVerticalPositionIE = () => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"]()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()

  container.style.removeProperty('align-items')
  if (popup.offsetTop < 0 ) {
    container.style.alignItems = 'flex-start'
  }
}

/* istanbul ignore next */
const IEfix = () => {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE()
    window.addEventListener('resize', fixVerticalPositionIE)
  }
}

/* istanbul ignore next */
const undoIEfix = () => {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/iosFix.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/iosFix.js ***!
  \******************************************************/
/*! exports provided: iOSfix, undoIOSfix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iOSfix", function() { return iOSfix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoIOSfix", function() { return undoIOSfix; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");



// Fix iOS scrolling http://stackoverflow.com/q/39626302

/* istanbul ignore next */
const iOSfix = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  if (iOS && !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].iosfix)) {
    const offset = document.body.scrollTop
    document.body.style.top = (offset * -1) + 'px'
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].iosfix)
  }
}

/* istanbul ignore next */
const undoIOSfix = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].iosfix)) {
    const offset = parseInt(document.body.style.top, 10)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].iosfix)
    document.body.style.top = ''
    document.body.scrollTop = (offset * -1)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/isNodeEnv.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/isNodeEnv.js ***!
  \*********************************************************/
/*! exports provided: isNodeEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return isNodeEnv; });
// Detect Node env
const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined'


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/openPopup.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/openPopup.js ***!
  \*********************************************************/
/*! exports provided: openPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPopup", function() { return openPopup; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _iosFix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _ieFix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ieFix.js */ "./node_modules/sweetalert2/src/utils/ieFix.js");
/* harmony import */ var _aria_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");








/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */
const openPopup = (params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"]()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup)
  }

  if (params.animation) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].show)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"](container, _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].fade)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].hide)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].fade)
  }
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["show"](popup)

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden'
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["animationEndEvent"] && !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].noanimation)) {
    popup.addEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["animationEndEvent"], function swalCloseEventFinished () {
      popup.removeEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["animationEndEvent"], swalCloseEventFinished)
      container.style.overflowY = 'auto'
    })
  } else {
    container.style.overflowY = 'auto'
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"]([document.documentElement, document.body, container], _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].shown)
  if (params.heightAuto && params.backdrop && !params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"]([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"]['height-auto'])
  }

  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["isModal"]()) {
    Object(_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__["fixScrollbar"])()
    Object(_iosFix_js__WEBPACK_IMPORTED_MODULE_3__["iOSfix"])()
    Object(_ieFix_js__WEBPACK_IMPORTED_MODULE_4__["IEfix"])()
    Object(_aria_js__WEBPACK_IMPORTED_MODULE_5__["setAriaHidden"])()

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0
    })
  }
  if (!_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["isToast"]() && !_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].previousActiveElement) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].previousActiveElement = document.activeElement
  }
  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(() => {
      params.onOpen(popup)
    })
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/params.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/params.js ***!
  \******************************************************/
/*! exports provided: deprecatedParams, isValidParameter, isUpdatableParameter, isDeprecatedParameter, showWarningsForParams, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecatedParams", function() { return deprecatedParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidParameter", function() { return isValidParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpdatableParameter", function() { return isUpdatableParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeprecatedParameter", function() { return isDeprecatedParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showWarningsForParams", function() { return showWarningsForParams; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: '',
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: '',
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: '',
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: '',
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null
}

const deprecatedParams = []

const toastIncompatibleParams = [
  'allowOutsideClick',
  'allowEnterKey',
  'backdrop',
  'focusConfirm',
  'focusCancel',
  'heightAuto',
  'keydownListenerCapture'
]

/**
 * Is valid parameter
 * @param {String} paramName
 */
const isValidParameter = (paramName) => {
  return defaultParams.hasOwnProperty(paramName)
}

/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */
const isUpdatableParameter = (paramName) => {
  return [
    'title',
    'titleText',
    'text',
    'html',
    'type',
    'showConfirmButton',
    'showCancelButton',
    'confirmButtonText',
    'confirmButtonAriaLabel',
    'confirmButtonColor',
    'confirmButtonClass',
    'cancelButtonText',
    'cancelButtonAriaLabel',
    'cancelButtonColor',
    'cancelButtonClass',
    'buttonsStyling',
    'reverseButtons',
    'imageUrl',
    'imageWidth',
    'imageHeigth',
    'imageAlt',
    'imageClass',
    'progressSteps',
    'currentProgressStep'
  ].indexOf(paramName) !== -1
}

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
const isDeprecatedParameter = (paramName) => {
  return deprecatedParams.includes(paramName)
}

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
const showWarningsForParams = (params) => {
  for (const param in params) {
    if (!isValidParameter(param)) {
      Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Unknown parameter "${param}"`)
    }
    if (params.toast && toastIncompatibleParams.includes(param)) {
      Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["warn"])(`The parameter "${param}" is incompatible with toasts`)
    }
    if (isDeprecatedParameter(param)) {
      Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["warnOnce"])(`The parameter "${param}" is deprecated and will be removed in the next major release.`)
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (defaultParams);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/scrollbarFix.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/scrollbarFix.js ***!
  \************************************************************/
/*! exports provided: fixScrollbar, undoScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixScrollbar", function() { return fixScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoScrollbar", function() { return undoScrollbar; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const fixScrollbar = () => {
  // for queues, do not do this more than once
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding !== null) {
    return
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'))
    document.body.style.paddingRight = (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding + _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["measureScrollbar"]()) + 'px'
  }
}

const undoScrollbar = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding !== null) {
    document.body.style.paddingRight = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding = null
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/setParameters.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/setParameters.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setParameters; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultInputValidators.js */ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js");





/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters (params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(_defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_3__["default"]).forEach((key) => {
      if (params.input === key) {
        params.inputValidator = _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_3__["default"][key]
      }
    })
  }

  // Determine if the custom target element is valid
  if (
    !params.target ||
    (typeof params.target === 'string' && !document.querySelector(params.target)) ||
    (typeof params.target !== 'string' && !params.target.appendChild)
  ) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('Target parameter is not valid, defaulting to "body"')
    params.target = 'body'
  }

  // Animation
  if (typeof params.animation === 'function') {
    params.animation = params.animation.call()
  }

  let popup
  const oldPopup = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getPopup"]()
  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target
  // If the model target has changed, refresh the popup
  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["init"](params)
  } else {
    popup = oldPopup || _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["init"](params)
  }

  // Set popup width
  if (params.width) {
    popup.style.width = (typeof params.width === 'number') ? params.width + 'px' : params.width
  }

  // Set popup padding
  if (params.padding) {
    popup.style.padding = (typeof params.padding === 'number') ? params.padding + 'px' : params.padding
  }

  // Set popup background
  if (params.background) {
    popup.style.background = params.background
  }
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color')
  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix')
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor
  }

  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getContainer"]()
  const closeButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getCloseButton"]()
  const footer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getFooter"]()

  // Title
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["renderTitle"](params)

  // Content
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["renderContent"](params)

  // Backdrop
  if (typeof params.backdrop === 'string') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getContainer"]().style.background = params.backdrop
  } else if (!params.backdrop) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"]([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['no-backdrop'])
  }
  if (!params.backdrop && params.allowOutsideClick) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`')
  }

  // Position
  if (params.position in _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](container, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"][params.position])
  } else {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('The "position" parameter is not valid, defaulting to "center"')
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](container, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].center)
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    let growClass = 'grow-' + params.grow
    if (growClass in _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](container, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"][growClass])
    }
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["show"](closeButton)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["hide"](closeButton)
  }

  // Default Class
  popup.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].popup
  if (params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"]([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['toast-shown'])
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].toast)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].modal)
  }

  // Custom Class
  if (params.customClass) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](popup, params.customClass)
  }

  if (params.customContainerClass) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](container, params.customContainerClass)
  }

  // Progress steps
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["renderProgressSteps"](params)

  // Icon
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["renderIcon"](params)

  // Image
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["renderImage"](params)

  // Actions (buttons)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["renderActions"](params)

  // Footer
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["parseHtmlToContainer"](params.footer, footer)

  // CSS animation
  if (params.animation === true) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["removeClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].noanimation)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].noanimation)
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(
      'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
      'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
      'https://sweetalert2.github.io/#ajax-request'
    )
  }
}



/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/utils.js ***!
  \*****************************************************/
/*! exports provided: consolePrefix, uniqueArray, toArray, formatInputOptions, warn, error, warnOnce, callIfFunction, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consolePrefix", function() { return consolePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueArray", function() { return uniqueArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatInputOptions", function() { return formatInputOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return warnOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callIfFunction", function() { return callIfFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
const consolePrefix = 'SweetAlert2:'

/**
 * Filter the unique values into a new array
 * @param arr
 */
const uniqueArray = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}

/**
 * Convert NodeList to Array
 * @param nodeList
 */
const toArray = (nodeList) => Array.prototype.slice.call(nodeList)

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
const formatInputOptions = (inputOptions) => {
  const result = []
  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      result.push([key, value])
    })
  } else {
    Object.keys(inputOptions).forEach(key => {
      result.push([key, inputOptions[key]])
    })
  }
  return result
}

/**
 * Standardise console warnings
 * @param message
 */
const warn = (message) => {
  console.warn(`${consolePrefix} ${message}`)
}

/**
 * Standardise console errors
 * @param message
 */
const error = (message) => {
  console.error(`${consolePrefix} ${message}`)
}

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
const previousWarnOnceMessages = []

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
const warnOnce = (message) => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message)
    warn(message)
  }
}

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
const callIfFunction = (arg) => typeof arg === 'function' ? arg() : arg

const isPromise = (arg) => arg && Promise.resolve(arg) === arg


/***/ }),

/***/ "./src/app/servicios/notifications.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/notifications.service.ts ***!
  \****************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/src/sweetalert2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsService = /** @class */ (function () {
    function NotificationsService() {
    }
    /**
         *
         * @param from: top, bottom
         * @param align: left, center, right
         * @param type: '', info, success, warning, danger
         * @param text: Message
         */
    NotificationsService.prototype.showNotification = function (from, align, type, text) {
        $.notify({
            icon: 'fa fa-info',
            message: text
        }, {
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">' +
                '<i class="nc-icon nc-simple-remove"></i>' +
                '</button>' +
                '<span data-notify="icon" class="fa fa-info"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">' +
                '</div>' +
                '</div>' +
                '   <a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    /**
     *
     * @param title
     * @param message
     * @param type success, error, warning, info, question
     */
    NotificationsService.prototype.showSwal = function (title, message, type) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1__["default"].fire({
            title: title,
            text: message,
            type: type,
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false
        });
    };
    NotificationsService.prototype.showConfirmationSwal = function () {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_1__["default"].fire({
            title: '¿Está seguro?',
            text: 'Esto no se puede deshacer',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        });
    };
    NotificationsService.prototype.showLoadingSwal = function (title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1__["default"].fire({
            title: title,
            text: text
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1__["default"].showLoading();
    };
    NotificationsService.prototype.hideLoadingSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1__["default"].close();
    };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ })

}]);
//# sourceMappingURL=academia-academia-module~discipulado-discipulado-module~grupo-grupo-module~iglesia-iglesia-module~li~095f2b6f.js.map