"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9914],{65253:function(e,t,r){function n(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,c,"next",e)}function c(e){n(a,i,o,s,c,"throw",e)}s(void 0)}))}}r.d(t,{Pb:function(){return c},CE:function(){return u},uh:function(){return l},r4:function(){return f},Nq:function(){return d},h8:function(){return p},fm:function(){return h},FH:function(){return g}});var o,a,s,c="system-admin",u="system-users",l=function(){var e=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/list"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=32143==r.j?(o=i(regeneratorRuntime.mark((function e(t,r,n,i){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/create",name:r,group_ids:n,local_only:i}));case 1:case"end":return e.stop()}}),e)}))),function(e,t,r,n){return o.apply(this,arguments)}):null,d=32143==r.j?(a=i(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS(Object.assign({},n,{type:"config/auth/update",user_id:r})));case 1:case"end":return e.stop()}}),e)}))),function(e,t,r){return a.apply(this,arguments)}):null,p=32143==r.j?(s=i(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/delete",user_id:r}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)}):null,h=function(e){return e?e.trim().split(" ").slice(0,3).map((function(e){return e.substring(0,1)})).join(""):"?"},m=32143==r.j?"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z":null,y=32143==r.j?"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z":null,v=32143==r.j?"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14":null,b=32143==r.j?"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z":null,g=function(e,t,r){var n=[],i=function(t){return e.localize("ui.panel.config.users.".concat(t))};return t.is_owner&&n.push([m,i("is_owner")]),r&&t.system_generated&&n.push([y,i("is_system")]),t.local_only&&n.push([v,i("is_local")]),t.is_active||n.push([b,i("is_not_active")]),n}},9914:function(e,t,r){r.r(t),r.d(t,{HaConfigUsers:function(){return $}});var n,i,o,a,s,c,u,l,f,d,p=r(37500),h=r(33310),m=r(14516),y=(r(12171),r(36125),r(76865),r(52039),r(65253)),v=r(26765),b=(r(96551),r(29311)),g=r(91188),w=r(47181),k=function(){return Promise.all([r.e(85084),r.e(82361),r.e(6558),r.e(34821),r.e(4503)]).then(r.bind(r,4503))};function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function E(e){return function(e){if(Array.isArray(e))return B(e)}(e)||Z(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function P(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){C(o,n,i,a,s,"next",e)}function s(e){C(o,n,i,a,s,"throw",e)}a(void 0)}))}}function x(e,t){return W(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||I(e,t)||U()}function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=q(e);if(t){var i=q(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return R(this,r)}}function R(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return z(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(){H=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!V(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],t);r.push.apply(r,u)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,W(t)||Z(t)||I(t)||U()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=F(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:L(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=L(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function T(e){var t,r=F(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function D(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function V(e){return e.decorators&&e.decorators.length}function M(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function L(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function F(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===_(t)?t:String(t)}function U(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function W(e){if(Array.isArray(e))return e}function N(e,t,r){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}},N(e,t,r||e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var G="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",$=function(e,t,r,n){var i=H();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(M(o.descriptor)||M(i.descriptor)){if(V(o)||V(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(V(o)){if(V(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}D(o,i)}else t.push(o)}return t}(a.d.map(T)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,h.Mo)("ha-config-users")],(function(e,t){var r,_=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(n,t);var r=O(n);function n(){var t;S(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(z(t)),t}return n}(t);return{F:_,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"_users",value:function(){return[]}},{kind:"field",decorators:[(0,h.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,h.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",key:"_columns",value:function(){var e=this;return(0,m.Z)((function(t,r){return{name:{title:r("ui.panel.config.users.picker.headers.name"),sortable:!0,filterable:!0,width:"25%",direction:"asc",grows:!0,template:function(o,a){return t?(0,p.dy)(n||(n=A([" ",'<br />\n                  <div class="secondary">\n                    ',"\n                    ","\n                  </div>"])),o,a.username?"".concat(a.username," |"):"",r("groups.".concat(a.group_ids[0]))):(0,p.dy)(i||(i=A([" ",""])),o||e.hass.localize("ui.panel.config.users.editor.unnamed_user"))}},username:{title:r("ui.panel.config.users.picker.headers.username"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:t,template:function(e){return(0,p.dy)(o||(o=A(["",""])),e||"—")}},group_ids:{title:r("ui.panel.config.users.picker.headers.group"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:t,template:function(e){return(0,p.dy)(a||(a=A([" "," "])),r("groups.".concat(e[0])))}},is_active:{title:e.hass.localize("ui.panel.config.users.picker.headers.is_active"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:t,template:function(e){return e?(0,p.dy)(s||(s=A(["<ha-svg-icon .path=","></ha-svg-icon>"])),G):""}},system_generated:{title:e.hass.localize("ui.panel.config.users.picker.headers.system"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:t,template:function(e){return e?(0,p.dy)(c||(c=A(["<ha-svg-icon .path=","></ha-svg-icon>"])),G):""}},local_only:{title:e.hass.localize("ui.panel.config.users.picker.headers.local"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:t,template:function(e){return e?(0,p.dy)(u||(u=A(["<ha-svg-icon .path=","></ha-svg-icon>"])),G):""}},icons:{title:"",label:e.hass.localize("ui.panel.config.users.picker.headers.icon"),type:"icon",sortable:!1,filterable:!1,width:"104px",hidden:!t,template:function(t,r){var n=(0,y.FH)(e.hass,r,!1);return(0,p.dy)(l||(l=A(["",""])),n.map((function(e){var t=x(e,2),r=t[0],n=t[1];return(0,p.dy)(f||(f=A(["<ha-data-table-icon\n                  .path=","\n                  .tooltip=","\n                ></ha-data-table-icon>"])),r,n)})))}}}}))}},{kind:"method",key:"firstUpdated",value:function(e){N(q(_.prototype),"firstUpdated",this).call(this,e),this._fetchUsers()}},{kind:"method",key:"render",value:function(){return(0,p.dy)(d||(d=A(["\n      <hass-tabs-subpage-data-table\n        .hass=","\n        .narrow=","\n        .route=",'\n        backPath="/config"\n        .tabs=',"\n        .columns=","\n        .data=","\n        @row-click=",'\n        hasFab\n        clickable\n      >\n        <ha-fab\n          slot="fab"\n          .label=',"\n          extended\n          @click=",'\n        >\n          <ha-svg-icon slot="icon" .path=',"></ha-svg-icon>\n        </ha-fab>\n      </hass-tabs-subpage-data-table>\n    "])),this.hass,this.narrow,this.route,b.configSections.persons,this._columns(this.narrow,this.hass.localize),this._users,this._editUser,this.hass.localize("ui.panel.config.users.picker.add_user"),this._addUser,"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z")}},{kind:"method",key:"_fetchUsers",value:(r=P(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.uh)(this.hass);case 2:this._users=e.sent,this._users.forEach((function(e){e.is_owner&&e.group_ids.unshift("owner")}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{kind:"method",key:"_editUser",value:function(e){var t,r,n,i,o=this,a=e.detail.id,s=this._users.find((function(e){return e.id===a}));s&&(t=this,r={entry:s,updateEntry:(i=P(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.Nq)(o.hass,s.id,t);case 2:r=e.sent,o._users=o._users.map((function(e){return e===s?r.user:e}));case 4:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}),removeEntry:(n=P(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.g7)(o,{title:o.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_title","name",s.name),text:o.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_text"),dismissText:o.hass.localize("ui.common.cancel"),confirmText:o.hass.localize("ui.common.delete"),destructive:!0});case 2:if(e.sent){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,(0,y.h8)(o.hass,s.id);case 7:return o._users=o._users.filter((function(e){return e!==s})),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,11]])}))),function(){return n.apply(this,arguments)})},(0,w.B)(t,"show-dialog",{dialogTag:"dialog-user-detail",dialogImport:k,dialogParams:r}))}},{kind:"method",key:"_addUser",value:function(){var e,t=this;(0,g.G)(this,{userAddedCallback:(e=P(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&(t._users=[].concat(E(t._users),[r]));case 1:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})})}}]}}),p.oi)},91188:function(e,t,r){r.d(t,{G:function(){return o}});var n=r(47181),i=function(){return Promise.all([r.e(85084),r.e(49842),r.e(82361),r.e(28520),r.e(34821),r.e(74898)]).then(r.bind(r,74898))},o=function(e,t){(0,n.B)(e,"show-dialog",{dialogTag:"dialog-add-user",dialogImport:i,dialogParams:t})}}}]);