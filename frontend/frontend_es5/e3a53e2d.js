"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[20666],{20666:function(e,t,n){n.r(t);n(44577);var i,r,o,a,s,c,l,u,d,f,p=n(37500),h=n(33310),y=n(8636),m=n(14516),v=n(47181),g=n(58831),b=n(91741),_=n(45485),x=n(85415),k=(n(65992),n(81545),n(22098),n(83927),n(10983),n(43709),n(83270)),w=n(74186),E=n(90363),A=(n(15291),n(60010),n(73826)),S=n(11654);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t,n,i,r,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(i,r)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){L(o,i,r,a,s,"next",e)}function s(e){L(o,i,r,a,s,"throw",e)}a(void 0)}))}}function D(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=N(e);if(t){var r=N(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return z(this,n)}}function z(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(){V=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var o="static"===r?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!I(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:n,finishers:i};var o=this.decorateConstructor(n,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,o=r.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,r[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||$(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=Z(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:F(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=F(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function j(e){var t,n=Z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function H(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function I(e){return e.decorators&&e.decorators.length}function B(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function F(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function Z(e){var t=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==C(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===C(t)?t:String(t)}function $(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function W(e,t,n){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}},W(e,t,n||e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var Q="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",q="M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16M13,14L20,7L18.59,5.59L13,11.17L9.91,8.09L8.5,9.5L13,14Z",G="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z",J="M4 20H18V22H4C2.9 22 2 21.11 2 20V6H4V20M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18 7.78 18H20.22C21.2 18 22 17.2 22 16.22V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6L12.6 10L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10L19 13.6Z",K=["Alexa.EndpointHealth"];!function(e,t,n,i){var r=V();if(i)for(var o=0;o<i.length;o++)r=i[o](r);var a=t((function(e){r.initializeInstanceElements(e,s.elements)}),n),s=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var r,o=e[i];if("method"===o.kind&&(r=t.find(n)))if(B(o.descriptor)||B(r.descriptor)){if(I(o)||I(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(I(o)){if(I(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}H(o,r)}else t.push(o)}return t}(a.d.map(j)),e);r.initializeClassElements(a.F,s.elements),r.runClassFinishers(a.F,s.finishers)}([(0,h.Mo)("cloud-alexa")],(function(e,t){var n,A,C,L,z,V,j=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(i,t);var n=T(i);function i(){var t;M(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e(R(t)),t}return i}(t);return{F:j,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.Cb)()],key:"cloudStatus",value:void 0},{kind:"field",decorators:[(0,h.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_entities",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_syncing",value:function(){return!1}},{kind:"field",decorators:[(0,h.SB)()],key:"_entityConfigs",value:function(){return{}}},{kind:"field",decorators:[(0,h.SB)()],key:"_entityCategories",value:void 0},{kind:"field",key:"_popstateSyncAttached",value:function(){return!1}},{kind:"field",key:"_popstateReloadStatusAttached",value:function(){return!1}},{kind:"field",key:"_isInitialExposed",value:void 0},{kind:"field",key:"_getEntityFilterFunc",value:function(){return(0,m.Z)((function(e){return(0,_.h)(e.include_domains,e.include_entities,e.exclude_domains,e.exclude_entities)}))}},{kind:"method",key:"render",value:function(){var e=this;if(void 0===this._entities||void 0===this._entityCategories)return(0,p.dy)(i||(i=D([" <hass-loading-screen></hass-loading-screen> "])));var t=(0,_.E)(this.cloudStatus.alexa_entities),n=this._getEntityFilterFunc(this.cloudStatus.alexa_entities),f=this._isInitialExposed||new Set,h=void 0===this._isInitialExposed,m=0,v=[],g=[];return this._entities.forEach((function(i){var c=e.hass.states[i.entity_id],l=e._entityConfigs[i.entity_id]||{should_expose:null},u=t?e._configIsExposed(i.entity_id,l,e._entityCategories[i.entity_id]):n(i.entity_id),d=t?e._configIsDomainExposed(i.entity_id,e._entityCategories[i.entity_id]):n(i.entity_id);u&&(m++,h&&f.add(i.entity_id));var b=f.has(i.entity_id)?v:g,_=(0,p.dy)(r||(r=D(['<ha-icon-button\n        slot="trigger"\n        class=',"\n        .disabled=","\n        .label=","\n        .path=","\n      ></ha-icon-button>"])),(0,y.$)({exposed:u,"not-exposed":!u}),!t,e.hass.localize("ui.panel.config.cloud.alexa.expose"),null!==l.should_expose?u?Q:G:d?q:J);b.push((0,p.dy)(o||(o=D(['\n        <ha-card outlined>\n          <div class="card-content">\n            <div class="top-line">\n              <state-info\n                .hass=',"\n                .stateObj=","\n                secondary-line\n                @click=","\n              >\n                ","\n              </state-info>\n              ","\n            </div>\n          </div>\n        </ha-card>\n      "])),e.hass,c,e._showMoreInfo,i.interfaces.filter((function(e){return!K.includes(e)})).map((function(e){return e.replace(/(Alexa.|Controller)/g,"")})).join(", "),t?(0,p.dy)(s||(s=D(['<ha-button-menu\n                    corner="BOTTOM_START"\n                    .entityId=',"\n                    @action=","\n                  >\n                    ","\n                    <mwc-list-item hasMeta>\n                      ",'\n                      <ha-svg-icon\n                        class="exposed"\n                        slot="meta"\n                        .path=',"\n                      ></ha-svg-icon>\n                    </mwc-list-item>\n                    <mwc-list-item hasMeta>\n                      ",'\n                      <ha-svg-icon\n                        class="not-exposed"\n                        slot="meta"\n                        .path=',"\n                      ></ha-svg-icon>\n                    </mwc-list-item>\n                    <mwc-list-item hasMeta>\n                      ","\n                      <ha-svg-icon\n                        class=",'\n                        slot="meta"\n                        .path=',"\n                      ></ha-svg-icon>\n                    </mwc-list-item>\n                  </ha-button-menu>"])),c.entity_id,e._exposeChanged,_,e.hass.localize("ui.panel.config.cloud.alexa.expose_entity"),Q,e.hass.localize("ui.panel.config.cloud.alexa.dont_expose_entity"),G,e.hass.localize("ui.panel.config.cloud.alexa.follow_domain"),(0,y.$)({exposed:d,"not-exposed":!d}),d?q:J):(0,p.dy)(a||(a=D(["",""])),_)))})),h&&(this._isInitialExposed=f),(0,p.dy)(c||(c=D(["\n      <hass-subpage\n        .hass=","\n        .narrow=","\n        .header=",'\n      >\n        <ha-button-menu corner="BOTTOM_START" slot="toolbar-icon">\n          <ha-icon-button\n            slot="trigger"\n            .label=',"\n            .path=",'\n          ></ha-icon-button>\n\n          <mwc-list-item\n            graphic="icon"\n            .disabled=',"\n            @click=","\n          >\n            ",'\n            <ha-svg-icon\n              slot="graphic"\n              .path=','\n            ></ha-svg-icon>\n          </mwc-list-item>\n\n          <mwc-list-item\n            graphic="icon"\n            .disabled=',"\n            @click=","\n          >\n            ",'\n            <ha-svg-icon slot="graphic" .path=',"></ha-svg-icon>\n          </mwc-list-item>\n        </ha-button-menu>\n        ","\n        ","\n        ","\n      </hass-subpage>\n    "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.cloud.alexa.title"),this.hass.localize("ui.common.menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",!t,this._openDomainToggler,this.hass.localize("ui.panel.config.cloud.alexa.manage_defaults"),"M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z",this._syncing,this._handleSync,this.hass.localize("ui.panel.config.cloud.alexa.sync_entities"),"M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z",t?"":(0,p.dy)(l||(l=D(['\n              <div class="banner">\n                ',"\n              </div>\n            "])),this.hass.localize("ui.panel.config.cloud.alexa.banner")),v.length>0?(0,p.dy)(u||(u=D(['\n              <div class="header">\n                <h3>\n                  ',"\n                </h3>\n                ",'\n              </div>\n              <div class="content">',"</div>\n            "])),this.hass.localize("ui.panel.config.cloud.alexa.exposed_entities"),this.narrow?m:this.hass.localize("ui.panel.config.cloud.alexa.exposed","selected",m),v):"",g.length>0?(0,p.dy)(d||(d=D(['\n              <div class="header second">\n                <h3>\n                  ',"\n                </h3>\n                ",'\n              </div>\n              <div class="content">',"</div>\n            "])),this.hass.localize("ui.panel.config.cloud.alexa.not_exposed_entities"),this.narrow?this._entities.length-m:this.hass.localize("ui.panel.config.cloud.alexa.not_exposed","selected",this._entities.length-m),g):"")}},{kind:"method",key:"firstUpdated",value:function(e){W(N(j.prototype),"firstUpdated",this).call(this,e),this._fetchData()}},{kind:"method",key:"updated",value:function(e){W(N(j.prototype),"updated",this).call(this,e),e.has("cloudStatus")&&(this._entityConfigs=this.cloudStatus.prefs.alexa_entity_configs)}},{kind:"method",key:"hassSubscribe",value:function(){var e=this;return[(0,w.LM)(this.hass.connection,(function(t){var n,i={},r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=$(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;i[o.entity_id]=o.entity_category}}catch(a){r.e(a)}finally{r.f()}e._entityCategories=i}))]}},{kind:"method",key:"_fetchData",value:(V=O(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.hass.callWS({type:"cloud/alexa/entities"});case 2:(t=e.sent).sort((function(e,t){var i=n.hass.states[e.entity_id],r=n.hass.states[t.entity_id];return(0,x.$)(i?(0,b.C)(i):e.entity_id,r?(0,b.C)(r):t.entity_id)})),this._entities=t;case 5:case"end":return e.stop()}}),e,this)}))),function(){return V.apply(this,arguments)})},{kind:"method",key:"_showMoreInfo",value:function(e){var t=e.currentTarget.stateObj.entity_id;(0,v.B)(this,"hass-more-info",{entityId:t})}},{kind:"method",key:"_configIsDomainExposed",value:function(e,t){var n=(0,g.M)(e);return!this.cloudStatus.prefs.alexa_default_expose||!t&&this.cloudStatus.prefs.alexa_default_expose.includes(n)}},{kind:"method",key:"_configIsExposed",value:function(e,t,n){var i;return null!==(i=t.should_expose)&&void 0!==i?i:this._configIsDomainExposed(e,n)}},{kind:"method",key:"_exposeChanged",value:(z=O(regeneratorRuntime.mark((function e(t){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.currentTarget.entityId,i=null,e.t0=t.detail.index,e.next=0===e.t0?5:1===e.t0?7:2===e.t0?9:11;break;case 5:return i=!0,e.abrupt("break",11);case 7:return i=!1,e.abrupt("break",11);case 9:return i=null,e.abrupt("break",11);case 11:return e.next=13,this._updateExposed(n,i);case 13:case"end":return e.stop()}}),e,this)}))),function(e){return z.apply(this,arguments)})},{kind:"method",key:"_updateExposed",value:(L=O(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._updateConfig(t,{should_expose:n});case 2:this._ensureEntitySync();case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return L.apply(this,arguments)})},{kind:"method",key:"_updateConfig",value:(C=O(regeneratorRuntime.mark((function e(t,n){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.tW)(this.hass,t,n);case 2:i=e.sent,this._entityConfigs=Object.assign({},this._entityConfigs,(a=i,(o=t)in(r={})?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r)),this._ensureStatusReload();case 5:case"end":return e.stop()}var r,o,a}),e,this)}))),function(e,t){return C.apply(this,arguments)})},{kind:"method",key:"_openDomainToggler",value:function(){var e=this;(0,E._)(this,{title:this.hass.localize("ui.panel.config.cloud.alexa.manage_defaults"),description:this.hass.localize("ui.panel.config.cloud.alexa.manage_defaults_dialog_description"),domains:this._entities.map((function(e){return(0,g.M)(e.entity_id)})).filter((function(e,t,n){return n.indexOf(e)===t})),exposedDomains:this.cloudStatus.prefs.alexa_default_expose,toggleDomain:function(t,n){e._updateDomainExposed(t,n)},resetDomain:function(t){e._entities.forEach((function(n){(0,g.M)(n.entity_id)===t&&e._updateExposed(n.entity_id,null)}))}})}},{kind:"method",key:"_handleSync",value:(A=O(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._syncing=!0,e.prev=1,e.next=4,this.hass.callWS({type:"cloud/alexa/sync"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert("".concat(this.hass.localize("ui.panel.config.cloud.alexa.sync_entities_error")," ").concat(e.t0.body.message));case 9:return e.prev=9,this._syncing=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,this,[[1,6,9,12]])}))),function(){return A.apply(this,arguments)})},{kind:"method",key:"_updateDomainExposed",value:(n=O(regeneratorRuntime.mark((function e(t,n){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.cloudStatus.prefs.alexa_default_expose||this._entities.map((function(e){return(0,g.M)(e.entity_id)})).filter((function(e,t,n){return n.indexOf(e)===t})),!(n&&i.includes(t)||!n&&!i.includes(t))){e.next=3;break}return e.abrupt("return");case 3:return n?i.push(t):i.splice(i.indexOf(t),1),e.next=6,(0,k.LV)(this.hass,{alexa_default_expose:i});case 6:(0,v.B)(this,"ha-refresh-cloud-status");case 7:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{kind:"method",key:"_ensureStatusReload",value:function(){if(!this._popstateReloadStatusAttached){this._popstateReloadStatusAttached=!0;var e=this.parentElement;window.addEventListener("popstate",(function(){return(0,v.B)(e,"ha-refresh-cloud-status")}),{once:!0})}}},{kind:"method",key:"_ensureEntitySync",value:function(){this._popstateSyncAttached||(this._popstateSyncAttached=!0,window.addEventListener("popstate",(function(){}),{once:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[S.Qx,(0,p.iv)(f||(f=D(['\n        mwc-list-item > [slot="meta"] {\n          margin-left: 4px;\n        }\n        .banner {\n          color: var(--primary-text-color);\n          background-color: var(\n            --ha-card-background,\n            var(--card-background-color, white)\n          );\n          padding: 16px 8px;\n          text-align: center;\n        }\n        .content {\n          display: grid;\n          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n          grid-gap: 8px 8px;\n          padding: 8px;\n        }\n        .card-content {\n          padding-bottom: 12px;\n        }\n        state-info {\n          cursor: pointer;\n        }\n        ha-switch {\n          padding: 8px 0;\n        }\n        .top-line {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n        .header {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          padding: 0 16px;\n          border-bottom: 1px solid var(--divider-color);\n          background: var(--app-header-background-color);\n        }\n        .header.second {\n          border-top: 1px solid var(--divider-color);\n        }\n        .exposed {\n          color: var(--success-color);\n        }\n        .not-exposed {\n          color: var(--error-color);\n        }\n        @media all and (max-width: 450px) {\n          ha-card {\n            max-width: 100%;\n          }\n        }\n      '])))]}}]}}),(0,A.f)(p.oi))}}]);