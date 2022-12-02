"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[95396],{5372:function(t,e,r){r.d(e,{a:function(){return F}});var n,i,o,a,s,c=r(37500),l=r(33310),u=r(14516),f=r(55070),d=r(7323),p=r(18457),h=r(38014);r(62336);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function y(t){return function(t){if(Array.isArray(t))return R(t)}(t)||I(t)||z(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function b(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){v(o,n,i,a,s,"next",t)}function s(t){v(o,n,i,a,s,"throw",t)}a(void 0)}))}}function g(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=O(t);if(e){var i=O(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return E(this,r)}}function E(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return S(t)}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function D(){D=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(r){e.forEach((function(e){e.kind===r&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var r=t.prototype;["method","field"].forEach((function(n){e.forEach((function(e){var i=e.placement;if(e.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?t:r;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var r=e.descriptor;if("field"===e.kind){var n=e.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(t)}}Object.defineProperty(t,e.key,r)},decorateClass:function(t,e){var r=[],n=[],i={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,i)}),this),t.forEach((function(t){if(!C(t))return r.push(t);var e=this.decorateElement(t,i);r.push(e.element),r.push.apply(r,e.extras),n.push.apply(n,e.finishers)}),this),!e)return{elements:r,finishers:n};var o=this.decorateConstructor(r,e);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(t,e,r){var n=e[t.placement];if(!r&&-1!==n.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");n.push(t.key)},decorateElement:function(t,e){for(var r=[],n=[],i=t.decorators,o=i.length-1;o>=0;o--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),c=this.toElementFinisherExtras((0,i[o])(s)||s);t=c.element,this.addElementPlacement(t,e),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],e);r.push.apply(r,l)}}return{element:t,finishers:n,extras:r}},decorateConstructor:function(t,e){for(var r=[],n=e.length-1;n>=0;n--){var i=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){t=o.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:r}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||I(e)||z(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=A(t.key),n=String(t.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:j(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var r=j(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:r}},runClassFinishers:function(t,e){for(var r=0;r<e.length;r++){var n=(0,e[r])(t);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");t=n}}return t},disallowProperty:function(t,e,r){if(void 0!==t[e])throw new TypeError(r+" can't have a ."+e+" property.")}};return t}function P(t){var e,r=A(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===t.kind?"field":"method",key:r,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(n.decorators=t.decorators),"field"===t.kind&&(n.initializer=t.value),n}function x(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function C(t){return t.decorators&&t.decorators.length}function T(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function j(t,e){var r=t[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}function A(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===m(e)?e:String(e)}function z(t,e){if(t){if("string"==typeof t)return R(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(t,e):void 0}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function I(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var F={mean:"mean",min:"min",max:"max",sum:"sum",state:"sum"};!function(t,e,r,n){var i=D();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=e((function(t){i.initializeInstanceElements(t,s.elements)}),r),s=i.decorateClass(function(t){for(var e=[],r=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},n=0;n<t.length;n++){var i,o=t[n];if("method"===o.kind&&(i=e.find(r)))if(T(o.descriptor)||T(i.descriptor)){if(C(o)||C(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(C(o)){if(C(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}x(o,i)}else e.push(o)}return e}(a.d.map(P)),t);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,l.Mo)("statistics-chart")],(function(t,e){var r,m=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(n,e);var r=_(n);function n(){var e;k(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=r.call.apply(r,[this].concat(o)),t(S(e)),e}return n}(e);return{F:m,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"statisticsData",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"names",value:function(){return!1}},{kind:"field",decorators:[(0,l.Cb)()],key:"unit",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Array})],key:"statTypes",value:function(){return["sum","min","mean","max"]}},{kind:"field",decorators:[(0,l.Cb)()],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"isLoadingData",value:function(){return!1}},{kind:"field",decorators:[(0,l.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,l.SB)()],key:"_chartOptions",value:void 0},{kind:"field",key:"_computedStyle",value:void 0},{kind:"method",key:"shouldUpdate",value:function(t){return t.size>1||!t.has("hass")}},{kind:"method",key:"willUpdate",value:function(t){this.hasUpdated||this._createOptions(),(t.has("statisticsData")||t.has("statTypes"))&&this._generateData()}},{kind:"method",key:"firstUpdated",value:function(){this._computedStyle=getComputedStyle(this)}},{kind:"method",key:"render",value:function(){return(0,d.p)(this.hass,"history")?this.isLoadingData&&!this.statisticsData?(0,c.dy)(i||(i=g(['<div class="info">\n        ',"\n      </div>"])),this.hass.localize("ui.components.statistics_charts.loading_statistics")):this.statisticsData&&Object.keys(this.statisticsData).length?(0,c.dy)(a||(a=g(["\n      <ha-chart-base\n        .data=","\n        .options=","\n        .chartType=","\n      ></ha-chart-base>\n    "])),this._chartData,this._chartOptions,this.chartType):(0,c.dy)(o||(o=g(['<div class="info">\n        ',"\n      </div>"])),this.hass.localize("ui.components.statistics_charts.no_statistics_found")):(0,c.dy)(n||(n=g(['<div class="info">\n        ',"\n      </div>"])),this.hass.localize("ui.components.history_charts.history_disabled"))}},{kind:"method",key:"_createOptions",value:function(){var t=this;this._chartOptions={parsing:!1,animation:!1,scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:function(t){return t.tick&&t.tick.major?{weight:"bold"}:{}}},time:{tooltipFormat:"datetime"}},y:{beginAtZero:!1,ticks:{maxTicksLimit:7},title:{display:this.unit,text:this.unit}}},plugins:{tooltip:{mode:"nearest",callbacks:{label:function(e){return"".concat(e.dataset.label,": ").concat((0,p.uf)(e.parsed.y,t.hass.locale)," ").concat(e.dataset.unit||"")}}},filler:{propagate:!0},legend:{display:!0,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{line:{tension:.4,borderWidth:1.5},bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:(0,p.Hd)(this.hass.locale)}}},{kind:"field",key:"_getStatisticsMetaData",value:function(){var t=this;return(0,u.Z)(function(){var e=b(regeneratorRuntime.mark((function e(r){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.Py)(t.hass,r);case 2:return n=e.sent,i={},n.forEach((function(t){i[t.statistic_id]=t})),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{kind:"method",key:"_generateData",value:(r=b(regeneratorRuntime.mark((function t(){var e,r,n,i,o,a,s,c=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.statisticsData){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this._getStatisticsMetaData(Object.keys(this.statisticsData));case 4:if(e=t.sent,r=0,n=Object.values(this.statisticsData),i=[],0!==n.length){t.next=10;break}return t.abrupt("return");case 10:(o=this.endTime||new Date(Math.max.apply(Math,y(n.map((function(t){return new Date(t[t.length-1].start).getTime()}))))))>new Date&&(o=new Date),s=this.names||{},n.forEach((function(t){var n=t[0],l=null==e?void 0:e[n.statistic_id],u=s[n.statistic_id];u||(u=(0,h.Kd)(c.hass,n.statistic_id,l)),c.unit||(void 0===a?a=null==l?void 0:l.display_unit_of_measurement:a!==(null==l?void 0:l.display_unit_of_measurement)&&(a=null));var d=null,p=[],m=function(t,e){e&&(t>o||(p.forEach((function(r,n){null===e[n]&&d&&null!==d[n]&&r.data.push({x:t.getTime(),y:d[n]}),r.data.push({x:t.getTime(),y:e[n]})})),d=e))},v=(0,f.hZ)(r,c._computedStyle);r++;var b=[],g=c.statTypes.includes("mean")&&(0,h.Nw)(t,"mean");(g?y(c.statTypes).sort((function(t,e){return"min"===t||"max"===e?-1:"max"===t||"min"===e?1:0})):c.statTypes).forEach((function(e){if((0,h.Nw)(t,F[e])){var r=g&&("min"===e||"max"===e);b.push(e),p.push({label:"".concat(u," (").concat(c.hass.localize("ui.components.statistics_charts.statistic_types.".concat(e)),")\n            "),fill:!!g&&("min"===e?"+1":"max"===e&&"-1"),borderColor:r?v+"7F":v,backgroundColor:r?v+"3F":v+"7F",pointRadius:0,data:[],unit:null==l?void 0:l.unit_of_measurement,band:r})}}));var k=null,w=null;t.forEach((function(t){var e=new Date(t.start);if(k!==e){k=e;var r=[];b.forEach((function(e){var n;"sum"===e?null===w?(n=0,w=t.sum):n=(t.sum||0)-w:n=t[e],r.push(null!==n?Math.round(100*n)/100:null)})),m(e,r)}})),m(o,d),Array.prototype.push.apply(i,p)})),null!==a&&(this._chartOptions=Object.assign({},this._chartOptions,{scales:Object.assign({},this._chartOptions.scales,{y:Object.assign({},this._chartOptions.scales.y,{title:{display:a,text:a}})})})),this._chartData={datasets:i};case 16:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,c.iv)(s||(s=g(["\n      :host {\n        display: block;\n        min-height: 60px;\n      }\n      .info {\n        text-align: center;\n        line-height: 60px;\n        color: var(--secondary-text-color);\n      }\n    "])))}}]}}),c.oi)},38014:function(t,e,r){r.d(e,{uR:function(){return a},Py:function(){return s},dL:function(){return c},h_:function(){return l},Cj:function(){return u},ZT:function(){return f},hN:function(){return d},Kj:function(){return p},q6:function(){return h},Nw:function(){return m},Z0:function(){return b},j2:function(){return g},Kd:function(){return k}});var n=r(91741);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a=function(t,e){return t.callWS({type:"recorder/list_statistic_ids",statistic_type:e})},s=function(t,e){return t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:e})},c=function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"hour",o=arguments.length>5?arguments[5]:void 0;return t.callWS({type:"recorder/statistics_during_period",start_time:e.toISOString(),end_time:null==r?void 0:r.toISOString(),statistic_ids:n,period:i,units:o})},l=function(t){return t.callWS({type:"recorder/validate_statistics"})},u=function(t,e,r){return t.callWS({type:"recorder/update_statistics_metadata",statistic_id:e,unit_of_measurement:r})},f=function(t,e,r,n){return t.callWS({type:"recorder/change_statistics_unit",statistic_id:e,old_unit_of_measurement:r,new_unit_of_measurement:n})},d=function(t,e){return t.callWS({type:"recorder/clear_statistics",statistic_ids:e})},p=function(t){if(!t||t.length<2)return null;var e=t[t.length-1].sum;if(null===e)return null;var r=t[0].sum;return null===r?e:e-r},h=function(t,e){var r,n=null,o=i(e);try{for(o.s();!(r=o.n()).done;){var a=r.value;if(a in t){var s=p(t[a]);null!==s&&(null===n?n=s:n+=s)}}}catch(c){o.e(c)}finally{o.f()}return n},m=function(t,e){return t.some((function(t){return null!==t[e]}))},y=["mean","min","max"],v=["sum"],b=function(t,e){return!(!y.includes(e)||!t.has_mean)||!(!v.includes(e)||!t.has_sum)},g=function(t,e,r,n,i){return t.callWS({type:"recorder/adjust_sum_statistics",statistic_id:e,start_time:r,adjustment:n,display_unit:i})},k=function(t,e,r){var i=t.states[e];return i?(0,n.C)(i):(null==r?void 0:r.name)||e}},95396:function(t,e,r){r.r(e),r.d(e,{HuiStatisticsGraphCard:function(){return j}});var n,i,o,a=r(37500),s=r(33310),c=r(8636),l=(r(22098),r(5372),r(53658)),u=r(90271),f=r(38014);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function h(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){h(o,n,i,a,s,"next",t)}function s(t){h(o,n,i,a,s,"throw",t)}a(void 0)}))}}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=T(t);if(e){var i=T(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return g(this,r)}}function g(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(){w=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(r){e.forEach((function(e){e.kind===r&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var r=t.prototype;["method","field"].forEach((function(n){e.forEach((function(e){var i=e.placement;if(e.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?t:r;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var r=e.descriptor;if("field"===e.kind){var n=e.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(t)}}Object.defineProperty(t,e.key,r)},decorateClass:function(t,e){var r=[],n=[],i={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,i)}),this),t.forEach((function(t){if(!S(t))return r.push(t);var e=this.decorateElement(t,i);r.push(e.element),r.push.apply(r,e.extras),n.push.apply(n,e.finishers)}),this),!e)return{elements:r,finishers:n};var o=this.decorateConstructor(r,e);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(t,e,r){var n=e[t.placement];if(!r&&-1!==n.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");n.push(t.key)},decorateElement:function(t,e){for(var r=[],n=[],i=t.decorators,o=i.length-1;o>=0;o--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),c=this.toElementFinisherExtras((0,i[o])(s)||s);t=c.element,this.addElementPlacement(t,e),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],e);r.push.apply(r,l)}}return{element:t,finishers:n,extras:r}},decorateConstructor:function(t,e){for(var r=[],n=e.length-1;n>=0;n--){var i=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){t=o.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:r}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=P(t.key),n=String(t.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:D(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var r=D(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:r}},runClassFinishers:function(t,e){for(var r=0;r<e.length;r++){var n=(0,e[r])(t);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");t=n}}return t},disallowProperty:function(t,e,r){if(void 0!==t[e])throw new TypeError(r+" can't have a ."+e+" property.")}};return t}function _(t){var e,r=P(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===t.kind?"field":"method",key:r,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(n.decorators=t.decorators),"field"===t.kind&&(n.initializer=t.value),n}function E(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function S(t){return t.decorators&&t.decorators.length}function O(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function D(t,e){var r=t[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}function P(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===d(e)?e:String(e)}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function C(t,e,r){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(r):i.value}},C(t,e,r||t)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var j=function(t,e,r,n){var i=w();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=e((function(t){i.initializeInstanceElements(t,s.elements)}),r),s=i.decorateClass(function(t){for(var e=[],r=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},n=0;n<t.length;n++){var i,o=t[n];if("method"===o.kind&&(i=e.find(r)))if(O(o.descriptor)||O(i.descriptor)){if(S(o)||S(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(S(o)){if(S(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}E(o,i)}else e.push(o)}return e}(a.d.map(_)),t);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,s.Mo)("hui-statistics-graph-card")],(function(t,e){var d,h,g=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(n,e);var r=b(n);function n(){var e;y(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=r.call.apply(r,[this].concat(o)),t(k(e)),e}return n}(e);return{F:g,d:[{kind:"method",static:!0,key:"getConfigElement",value:(h=m(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([r.e(29563),r.e(98985),r.e(79071),r.e(24103),r.e(88278),r.e(6294),r.e(41985),r.e(45507),r.e(78874),r.e(18627),r.e(3555),r.e(86630),r.e(81545),r.e(12545),r.e(13701),r.e(77576),r.e(37489),r.e(33762),r.e(37194)]).then(r.bind(r,6081));case 2:return t.abrupt("return",document.createElement("hui-statistics-graph-card-editor"));case 3:case"end":return t.stop()}}),t)}))),function(){return h.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"statistics-graph",entities:[]}}},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_statistics",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"field",key:"_entities",value:function(){return[]}},{kind:"field",key:"_names",value:function(){return{}}},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){C(T(g.prototype),"disconnectedCallback",this).call(this),this._interval&&(clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"connectedCallback",value:function(){var t=this;C(T(g.prototype),"connectedCallback",this).call(this),this.hasUpdated&&(this._getStatistics(),clearInterval(this._interval),this._interval=window.setInterval((function(){return t._getStatistics()}),this._intervalTimeout))}},{kind:"method",key:"getCardSize",value:function(){var t,e;return null!==(t=this._config)&&void 0!==t&&t.title?2:0+2*((null===(e=this._entities)||void 0===e?void 0:e.length)||1)}},{kind:"method",key:"setConfig",value:function(t){var e=this;if(!t.entities||!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(!t.entities.length)throw new Error("You must include at least one entity");var r=t.entities?(0,u.A)(t.entities,!1):[];this._entities=[],r.forEach((function(t){e._entities.push(t.entity),t.name&&(e._names[t.entity]=t.name)})),"string"==typeof t.stat_types?this._config=Object.assign({},t,{stat_types:[t.stat_types]}):t.stat_types?this._config=t:this._config=Object.assign({},t,{stat_types:["state","sum","min","max","mean"]})}},{kind:"method",key:"shouldUpdate",value:function(t){return!!t.has("_statistics")||(0,l.W)(this,t)}},{kind:"method",key:"willUpdate",value:function(t){var e=this;if(C(T(g.prototype),"willUpdate",this).call(this,t),this._config&&t.has("_config")){var r=t.get("_config");(null==r?void 0:r.entities)===this._config.entities&&(null==r?void 0:r.days_to_show)===this._config.days_to_show&&(null==r?void 0:r.period)===this._config.period||(this._getStatistics(),clearInterval(this._interval),this._interval=window.setInterval((function(){return e._getStatistics()}),this._intervalTimeout))}}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,a.dy)(i||(i=p(["\n      <ha-card .header=",'>\n        <div\n          class="content ','"\n        >\n          <statistics-chart\n            .hass=',"\n            .isLoadingData=","\n            .statisticsData=","\n            .chartType=","\n            .statTypes=","\n            .names=","\n          ></statistics-chart>\n        </div>\n      </ha-card>\n    "])),this._config.title,(0,c.$)({"has-header":!!this._config.title}),this.hass,!this._statistics,this._statistics,this._config.chart_type||"line",this._config.stat_types,this._names):(0,a.dy)(n||(n=p([""])))}},{kind:"get",key:"_intervalTimeout",value:function(){var t;return 1e3*("5minute"===(null===(t=this._config)||void 0===t?void 0:t.period)?5:60)*60}},{kind:"method",key:"_getStatistics",value:(d=m(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=new Date).setTime(e.getTime()-36e5*(24*(this._config.days_to_show||30)+1)),t.prev=2,t.next=5,(0,f.dL)(this.hass,e,void 0,this._entities,this._config.period);case 5:this._statistics=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),this._statistics=void 0;case 11:case"end":return t.stop()}}),t,this,[[2,8]])}))),function(){return d.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,a.iv)(o||(o=p(["\n      ha-card {\n        height: 100%;\n      }\n      .content {\n        padding: 16px;\n      }\n      .has-header {\n        padding-top: 0;\n      }\n    "])))}}]}}),a.oi)}}]);