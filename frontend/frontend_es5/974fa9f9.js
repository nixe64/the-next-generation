"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[72420],{72420:function(e,t,n){n.r(t),n.d(t,{HaVoiceCommandDialog:function(){return H}});n(51187);var r=n(37500),i=n(33310),o=n(8636),a=n(47181),s=window.SpeechRecognition||window.webkitSpeechRecognition;window.SpeechGrammarList||window.webkitSpeechGrammarList,window.SpeechRecognitionEvent||window.webkitSpeechRecognitionEvent;function c(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}n(34821),n(10983),n(3555);var l,d,u,f,p,h,m,v,y,g=function(e,t,n){return e.callWS({type:"conversation/process",text:t,conversation_id:n})},b=n(11654);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e){return function(e){if(Array.isArray(e))return B(e)}(e)||L(e)||F(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function x(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){x(o,r,i,a,s,"next",e)}function s(e){x(o,r,i,a,s,"throw",e)}a(void 0)}))}}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=V(e);if(t){var i=V(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(){D=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!R(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||L(t)||F(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=M(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:z(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=z(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function T(e){var t,n=M(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function I(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function R(e){return e.decorators&&e.decorators.length}function j(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function z(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function M(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===k(t)?t:String(t)}function F(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function U(e,t,n){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},U(e,t,n||e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var H=function(e,t,n,r){var i=D();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),n),s=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(j(o.descriptor)||j(i.descriptor)){if(R(o)||R(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(R(o)){if(R(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}I(o,i)}else t.push(o)}return t}(a.d.map(T)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,i.Mo)("ha-voice-command-dialog")],(function(e,t){var n,k,x,A=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(r,t);var n=O(r);function r(){var t;S(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e(C(t)),t}return r}(t);return{F:A,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"results",value:function(){return null}},{kind:"field",decorators:[(0,i.SB)()],key:"_conversation",value:function(){return[{who:"hass",text:""}]}},{kind:"field",decorators:[(0,i.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,i.SB)()],key:"_agentInfo",value:void 0},{kind:"field",decorators:[(0,i.IO)("ha-dialog",!0)],key:"_dialog",value:void 0},{kind:"field",key:"recognition",value:void 0},{kind:"field",key:"_conversationId",value:void 0},{kind:"method",key:"showDialog",value:(x=E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._opened=!0,s&&this._startListening(),e.next=4,this.hass.callWS({type:"conversation/agent/info"});case 4:this._agentInfo=e.sent;case 5:case"end":return e.stop()}}),e,this)}))),function(){return x.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:(k=E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._opened=!1,this.recognition&&this.recognition.abort(),(0,a.B)(this,"dialog-closed",{dialog:this.localName});case 3:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{kind:"method",key:"render",value:function(){var e=this;return this._opened?(0,r.dy)(d||(d=_(["\n      <ha-dialog open @closed=",">\n        <div>\n          ","\n          ","\n          ",'\n        </div>\n        <div class="input" slot="primaryAction">\n          <ha-textfield\n            @keyup=',"\n            .label=","\n            dialogInitialFocus\n            iconTrailing\n          >\n            ","\n          </ha-textfield>\n          ","\n        </div>\n      </ha-dialog>\n    "])),this.closeDialog,this._agentInfo&&this._agentInfo.onboarding?(0,r.dy)(u||(u=_(['\n                <div class="onboarding">\n                  ','\n                  <div class="side-by-side" @click=','>\n                    <a\n                      class="button"\n                      href=','\n                      target="_blank"\n                      rel="noreferrer"\n                      ><mwc-button unelevated\n                        >',"!</mwc-button\n                      ></a\n                    >\n                    <mwc-button outlined\n                      >","</mwc-button\n                    >\n                  </div>\n                </div>\n              "])),this._agentInfo.onboarding.text,this._completeOnboarding,this._agentInfo.onboarding.url,this.hass.localize("ui.common.yes"),this.hass.localize("ui.common.no")):"",this._conversation.map((function(t){return(0,r.dy)(f||(f=_(["\n              <div class=",">\n                ","\n              </div>\n            "])),e._computeMessageClasses(t),t.text)})),this.results?(0,r.dy)(p||(p=_(['\n                <div class="message user">\n                  <span\n                    class=',"\n                    >","</span\n                  >","\n                </div>\n              "])),(0,o.$)({interimTranscript:!this.results.final}),this.results.transcript,this.results.final?"":"…"):"",this._handleKeyUp,this.hass.localize("ui.dialogs.voice_command.".concat(s?"label_voice":"label")),s?(0,r.dy)(h||(h=_(['\n                  <span slot="trailingIcon">\n                    ',"\n                    <ha-icon-button\n                      .path=","\n                      @click=","\n                    >\n                    </ha-icon-button>\n                  </span>\n                "])),this.results?(0,r.dy)(m||(m=_(['\n                          <div class="bouncer">\n                            <div class="double-bounce1"></div>\n                            <div class="double-bounce2"></div>\n                          </div>\n                        ']))):"","M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z",this._toggleListening):"",this._agentInfo&&this._agentInfo.attribution?(0,r.dy)(v||(v=_(["\n                <a\n                  href=",'\n                  class="attribution"\n                  target="_blank"\n                  rel="noreferrer"\n                  >',"</a\n                >\n              "])),this._agentInfo.attribution.url,this._agentInfo.attribution.name):""):(0,r.dy)(l||(l=_([""])))}},{kind:"method",key:"firstUpdated",value:function(e){U(V(A.prototype),"updated",this).call(this,e),this._conversationId=c()+c()+c()+c()+c(),this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}]}},{kind:"method",key:"updated",value:function(e){U(V(A.prototype),"updated",this).call(this,e),(e.has("_conversation")||e.has("results"))&&this._scrollMessagesBottom()}},{kind:"method",key:"_addMessage",value:function(e){this._conversation=[].concat(w(this._conversation),[e])}},{kind:"method",key:"_handleKeyUp",value:function(e){var t=e.target;13===e.keyCode&&t.value&&(this._processText(t.value),t.value="")}},{kind:"method",key:"_completeOnboarding",value:function(){var e,t;e=this.hass,t=!0,e.callWS({type:"conversation/onboarding/set",shown:t}),this._agentInfo=Object.assign({},this._agentInfo,{onboarding:void 0})}},{kind:"method",key:"_initRecognition",value:function(){var e=this;this.recognition=new s,this.recognition.interimResults=!0,this.recognition.lang="en-US",this.recognition.onstart=function(){e.results={final:!1,transcript:""}},this.recognition.onerror=function(t){if(e.recognition.abort(),"aborted"!==t.error){var n=e.results&&e.results.transcript?e.results.transcript:"<".concat(e.hass.localize("ui.dialogs.voice_command.did_not_hear"),">");e._addMessage({who:"user",text:n,error:!0})}e.results=null},this.recognition.onend=function(){if(null!=e.results){var t=e.results.transcript;e.results=null,t?e._processText(t):e._addMessage({who:"user",text:"<".concat(e.hass.localize("ui.dialogs.voice_command.did_not_hear"),">"),error:!0})}},this.recognition.onresult=function(t){var n=t.results[0];e.results={transcript:n[0].transcript,final:n.isFinal}}}},{kind:"method",key:"_processText",value:(n=E(regeneratorRuntime.mark((function e(t){var n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.recognition&&this.recognition.abort(),this._addMessage({who:"user",text:t}),n={who:"hass",text:"…"},this._addMessage(n),e.prev=4,e.next=7,g(this.hass,t,this._conversationId);case 7:r=e.sent,i=r.speech.plain,n.text=i.speech,this.requestUpdate("_conversation"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(4),n.text=this.hass.localize("ui.dialogs.voice_command.error"),n.error=!0,this.requestUpdate("_conversation");case 18:case"end":return e.stop()}}),e,this,[[4,13]])}))),function(e){return n.apply(this,arguments)})},{kind:"method",key:"_toggleListening",value:function(){this.results?this.recognition.stop():this._startListening()}},{kind:"method",key:"_startListening",value:function(){this.recognition||this._initRecognition(),this.results||(this.results={transcript:"",final:!1},this.recognition.start())}},{kind:"method",key:"_scrollMessagesBottom",value:function(){this._dialog.scrollToPos(0,99999)}},{kind:"method",key:"_computeMessageClasses",value:function(e){return"message ".concat(e.who," ").concat(e.error?" error":"")}},{kind:"get",static:!0,key:"styles",value:function(){return[b.yu,(0,r.iv)(y||(y=_(["\n        ha-icon-button {\n          color: var(--secondary-text-color);\n          margin-right: -24px;\n          margin-inline-end: -24px;\n          margin-inline-start: initial;\n          direction: var(--direction);\n        }\n\n        ha-icon-button[active] {\n          color: var(--primary-color);\n        }\n\n        ha-dialog {\n          --primary-action-button-flex: 1;\n          --secondary-action-button-flex: 0;\n          --mdc-dialog-max-width: 450px;\n        }\n        ha-textfield {\n          display: block;\n        }\n        a.button {\n          text-decoration: none;\n        }\n        a.button > mwc-button {\n          width: 100%;\n        }\n        .onboarding {\n          border-bottom: 1px solid var(--divider-color);\n        }\n        .side-by-side {\n          display: flex;\n          margin: 8px 0;\n        }\n        .side-by-side > * {\n          flex: 1 0;\n          padding: 4px;\n        }\n        .attribution {\n          color: var(--secondary-text-color);\n        }\n        .message {\n          font-size: 18px;\n          clear: both;\n          margin: 8px 0;\n          padding: 8px;\n          border-radius: 15px;\n        }\n\n        .message.user {\n          margin-left: 24px;\n          margin-inline-start: 24px;\n          margin-inline-end: initial;\n          float: var(--float-end);\n          text-align: right;\n          border-bottom-right-radius: 0px;\n          background-color: var(--light-primary-color);\n          color: var(--text-light-primary-color, var(--primary-text-color));\n          direction: var(--direction);\n        }\n\n        .message.hass {\n          margin-right: 24px;\n          margin-inline-end: 24px;\n          margin-inline-start: initial;\n          float: var(--float-start);\n          border-bottom-left-radius: 0px;\n          background-color: var(--primary-color);\n          color: var(--text-primary-color);\n          direction: var(--direction);\n        }\n\n        .message a {\n          color: var(--text-primary-color);\n        }\n\n        .message img {\n          width: 100%;\n          border-radius: 10px;\n        }\n\n        .message.error {\n          background-color: var(--error-color);\n          color: var(--text-primary-color);\n        }\n\n        .interimTranscript {\n          color: var(--secondary-text-color);\n        }\n\n        .bouncer {\n          width: 48px;\n          height: 48px;\n          position: absolute;\n        }\n        .double-bounce1,\n        .double-bounce2 {\n          width: 48px;\n          height: 48px;\n          border-radius: 50%;\n          background-color: var(--primary-color);\n          opacity: 0.2;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2s infinite ease-in-out;\n          animation: sk-bounce 2s infinite ease-in-out;\n        }\n        .double-bounce2 {\n          -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n        }\n        @-webkit-keyframes sk-bounce {\n          0%,\n          100% {\n            -webkit-transform: scale(0);\n          }\n          50% {\n            -webkit-transform: scale(1);\n          }\n        }\n        @keyframes sk-bounce {\n          0%,\n          100% {\n            transform: scale(0);\n            -webkit-transform: scale(0);\n          }\n          50% {\n            transform: scale(1);\n            -webkit-transform: scale(1);\n          }\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .message {\n            font-size: 16px;\n          }\n        }\n      "])))]}}]}}),r.oi)}}]);