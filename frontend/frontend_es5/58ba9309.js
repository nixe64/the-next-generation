"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[33762],{42141:function(e,t,i){function r(e){return void 0===e||Array.isArray(e)?e:[e]}i.d(t,{r:function(){return r}})},33762:function(e,t,i){var r,n,o,s,a=i(37500),c=i(33310),l=i(14516),u=i(42141),d=i(47181),f=i(91741),p=i(85415),h=i(38014),m=i(27322);i(77576),i(52039),i(3143);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t,i,r,n,o,s){try{var a=e[o](s),c=a.value}catch(l){return void i(l)}a.done?t(c):Promise.resolve(c).then(r,n)}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=C(e);if(t){var n=C(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return _(this,i)}}function _(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function O(){O=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!D(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);i.push.apply(i,l)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?j(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=T(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function P(e){var t,i=T(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function S(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function D(e){return e.decorators&&e.decorators.length}function x(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function T(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=O();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(x(o.descriptor)||x(n.descriptor)){if(D(o)||D(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(D(o)){if(D(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}S(o,n)}else t.push(o)}return t}(s.d.map(P)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,c.Mo)("ha-statistic-picker")],(function(e,t){var i,y,_=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(r,t);var i=g(r);function r(){var t;k(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=i.call.apply(i,[this].concat(o)),e(E(t)),t}return r}(t);return{F:_,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Array,attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:"include-display-unit-of-measurement"})],key:"includeDisplayUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value:function(){return!1}},{kind:"field",decorators:[(0,c.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,c.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:function(){return!1}},{kind:"field",key:"_rowRenderer",value:function(){var e=this;return function(t){return(0,a.dy)(r||(r=b(['<mwc-list-item graphic="avatar" twoline>\n    ',"\n    <span>",'</span>\n    <span slot="secondary"\n      >',"</span\n    >\n  </mwc-list-item>"])),t.state?(0,a.dy)(n||(n=b(['<state-badge slot="graphic" .stateObj=',"></state-badge>"])),t.state):"",t.name,""===t.id||"__missing"===t.id?(0,a.dy)(o||(o=b(['<a\n            target="_blank"\n            rel="noopener noreferrer"\n            href=',"\n            >","</a\n          >"])),(0,m.R)(e.hass,"/more-info/statistics/"),e.hass.localize("ui.components.statistic-picker.learn_more")):t.id)}}},{kind:"field",key:"_getStatistics",value:function(){var e=this;return(0,l.Z)((function(t,i,r,n,o){if(!t.length)return[{id:"",name:e.hass.localize("ui.components.statistic-picker.no_statistics")}];if(i){var s=(0,u.r)(i);t=t.filter((function(e){return s.includes(e.statistics_unit_of_measurement)}))}if(r){var a=(0,u.r)(r);t=t.filter((function(e){return a.includes(e.display_unit_of_measurement)}))}var c=[];return t.forEach((function(t){var i=e.hass.states[t.statistic_id];i?n&&!n.includes(i.attributes.device_class||"")||c.push({id:t.statistic_id,name:(0,f.C)(i),state:i}):o||c.push({id:t.statistic_id,name:t.name||t.statistic_id})})),c.length?(c.length>1&&c.sort((function(e,t){return(0,p.$)(e.name||"",t.name||"")})),c.push({id:"__missing",name:e.hass.localize("ui.components.statistic-picker.missing_entity")}),c):[{id:"",name:e.hass.localize("ui.components.statistic-picker.no_match")}]}))}},{kind:"method",key:"open",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.focus()}},{kind:"method",key:"willUpdate",value:function(e){var t=this;(!this.hasUpdated&&!this.statisticIds||e.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||e.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this.comboBox.items=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeDisplayUnitOfMeasurement,this.includeDeviceClasses,this.entitiesOnly):this.updateComplete.then((function(){t.comboBox.items=t._getStatistics(t.statisticIds,t.includeStatisticsUnitOfMeasurement,t.includeDisplayUnitOfMeasurement,t.includeDeviceClasses,t.entitiesOnly)})))}},{kind:"method",key:"render",value:function(){return(0,a.dy)(s||(s=b(["\n      <ha-combo-box\n        .hass=","\n        .label=","\n        .value=","\n        .renderer=","\n        .disabled=",'\n        item-value-path="id"\n        item-id-path="id"\n        item-label-path="name"\n        @opened-changed=',"\n        @value-changed=","\n      ></ha-combo-box>\n    "])),this.hass,void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label,this._value,this._rowRenderer,this.disabled,this._openedChanged,this._statisticChanged)}},{kind:"method",key:"_getStatisticIds",value:(i=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.uR)(this.hass,this.statisticTypes);case 2:this.statisticIds=e.sent;case 3:case"end":return e.stop()}}),e,this)})),y=function(){var e=this,t=arguments;return new Promise((function(r,n){var o=i.apply(e,t);function s(e){v(o,r,n,s,a,"next",e)}function a(e){v(o,r,n,s,a,"throw",e)}s(void 0)}))},function(){return y.apply(this,arguments)})},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(e){e.stopPropagation();var t=e.detail.value;"__missing"===t&&(t=""),t!==this._value&&this._setValue(t)}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_setValue",value:function(e){var t=this;this.value=e,setTimeout((function(){(0,d.B)(t,"value-changed",{value:e}),(0,d.B)(t,"change")}),0)}}]}}),a.oi)}}]);