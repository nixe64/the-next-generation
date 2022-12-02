"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[49686],{55422:function(e,n,t){t.d(n,{jV:function(){return d},sS:function(){return m},Yc:function(){return h},tf:function(){return p},o1:function(){return g},hb:function(){return v},ri:function(){return w},MY:function(){return y}});var r=t(49706),i=t(58831),c=t(55816),o=t(22311),a=t(56007);function u(e,n,t,r,i,c,o){try{var a=e[c](o),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,i)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var c=e.apply(n,t);function o(e){u(c,r,i,o,a,"next",e)}function a(e){u(c,r,i,o,a,"throw",e)}o(void 0)}))}}var l="ui.components.logbook.messages",d=["counter","proximity","sensor","zone"],f={"numeric state of":"triggered_by_numeric_state_of","state of":"triggered_by_state_of",event:"triggered_by_event",time:"triggered_by_time","time pattern":"triggered_by_time_pattern","Home Assistant stopping":"triggered_by_homeassistant_stopping","Home Assistant starting":"triggered_by_homeassistant_starting"},_={},m=function(){var e=s(regeneratorRuntime.mark((function e(n,t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.loadBackendTranslation("device_class");case 2:return e.abrupt("return",b(n,t,void 0,void 0,r));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(e,n,t,r,i,c){if((r||c)&&(!r||0===r.length)&&(!c||0===c.length))return Promise.resolve([]);var o={type:"logbook/get_events",start_time:n};return t&&(o.end_time=t),null!=r&&r.length&&(o.entity_ids=r),null!=c&&c.length&&(o.device_ids=c),i&&(o.context_id=i),e.callWS(o)},h=function(e,n,t,r,i,c){if((i||c)&&(!i||0===i.length)&&(!c||0===c.length))return Promise.reject("No entities or devices");var o={type:"logbook/event_stream",start_time:t,end_time:r};return null!=i&&i.length&&(o.entity_ids=i),null!=c&&c.length&&(o.device_ids=c),e.connection.subscribeMessage((function(e){return n(e)}),o)},p=function(e,n){_["".concat(e).concat(n)]={}},g=function(e,n){return{entity_id:e.entity_id,state:n,attributes:{device_class:null==e?void 0:e.attributes.device_class,source_type:null==e?void 0:e.attributes.source_type,has_date:null==e?void 0:e.attributes.has_date,has_time:null==e?void 0:e.attributes.has_time,entity_picture_local:r.iY.has((0,i.M)(e.entity_id))||null==e?void 0:e.attributes.entity_picture_local,entity_picture:r.iY.has((0,i.M)(e.entity_id))||null==e?void 0:e.attributes.entity_picture}}},v=function(e,n){for(var t in f)if(n.startsWith(t))return n.replace(t,"".concat(e("ui.components.logbook.".concat(f[t]))));return n},w=function(e,n,t,i,o){switch(o){case"device_tracker":case"person":return"not_home"===t?n("".concat(l,".was_away")):"home"===t?n("".concat(l,".was_at_home")):n("".concat(l,".was_at_state"),"state",t);case"sun":return n("".concat(l,"above_horizon"===t?".rose":".set"));case"binary_sensor":var u=t===r.uo,s=t===r.lC,d=i.attributes.device_class;switch(d){case"battery":if(u)return n("".concat(l,".was_low"));if(s)return n("".concat(l,".was_normal"));break;case"connectivity":if(u)return n("".concat(l,".was_connected"));if(s)return n("".concat(l,".was_disconnected"));break;case"door":case"garage_door":case"opening":case"window":if(u)return n("".concat(l,".was_opened"));if(s)return n("".concat(l,".was_closed"));break;case"lock":if(u)return n("".concat(l,".was_unlocked"));if(s)return n("".concat(l,".was_locked"));break;case"plug":if(u)return n("".concat(l,".was_plugged_in"));if(s)return n("".concat(l,".was_unplugged"));break;case"presence":if(u)return n("".concat(l,".was_at_home"));if(s)return n("".concat(l,".was_away"));break;case"safety":if(u)return n("".concat(l,".was_unsafe"));if(s)return n("".concat(l,".was_safe"));break;case"cold":case"gas":case"heat":case"moisture":case"motion":case"occupancy":case"power":case"problem":case"smoke":case"sound":case"vibration":if(u)return n("".concat(l,".detected_device_class"),{device_class:n("component.binary_sensor.device_class.".concat(d))});if(s)return n("".concat(l,".cleared_device_class"),{device_class:n("component.binary_sensor.device_class.".concat(d))});break;case"tamper":if(u)return n("".concat(l,".detected_tampering"));if(s)return n("".concat(l,".cleared_tampering"))}break;case"cover":switch(t){case"open":return n("".concat(l,".was_opened"));case"opening":return n("".concat(l,".is_opening"));case"closing":return n("".concat(l,".is_closing"));case"closed":return n("".concat(l,".was_closed"))}break;case"lock":if("unlocked"===t)return n("".concat(l,".was_unlocked"));if("locked"===t)return n("".concat(l,".was_locked"))}return t===r.uo?n("".concat(l,".turned_on")):t===r.lC?n("".concat(l,".turned_off")):a.V_.includes(t)?n("".concat(l,".became_unavailable")):e.localize("".concat(l,".changed_to_state"),"state",i?(0,c.D)(n,i,e.locale,t):t)},y=function(e){return"sensor"!==(0,o.N)(e)||void 0===e.attributes.unit_of_measurement&&void 0===e.attributes.state_class}},79339:function(e,n,t){t.d(n,{kh:function(){return o},oA:function(){return a},z9:function(){return u},l:function(){return s},tm:function(){return l},PG:function(){return f},Fb:function(){return _}});var r=t(7323),i=t(58831),c=t(55422),o=["camera","configurator"],a=["scene","automation"],u=["script"],s=["alarm_control_panel","automation","camera","climate","configurator","counter","cover","fan","group","humidifier","input_datetime","light","lock","media_player","person","remote","script","scene","sun","timer","update","vacuum","water_heater","weather"],l=["input_number","input_select","input_text","number","scene","update","select"],d=["camera","configurator"],f=function(e,n){return(0,r.p)(e,"history")&&!d.includes((0,i.M)(n))},_=function(e,n){if(!(0,r.p)(e,"logbook"))return!1;var t=e.states[n];if(!t||t.attributes.unit_of_measurement)return!1;var o=(0,i.M)(n);return!c.jV.includes(o)&&!d.includes(o)}},82791:function(e,n,t){t.d(n,{S:function(){return o},n3:function(){return a},ST:function(){return u}});var r=t(79339),i=t(22311),c={alarm_control_panel:function(){return Promise.all([t.e(29563),t.e(98985),t.e(3555),t.e(79116)]).then(t.bind(t,79116))},automation:function(){return t.e(35513).then(t.bind(t,35513))},camera:function(){return t.e(14920).then(t.bind(t,14920))},climate:function(){return Promise.all([t.e(29563),t.e(88278),t.e(86630),t.e(9823)]).then(t.bind(t,9823))},configurator:function(){return Promise.all([t.e(29563),t.e(98985),t.e(3555),t.e(4940),t.e(8793)]).then(t.bind(t,70375))},counter:function(){return t.e(6850).then(t.bind(t,6850))},cover:function(){return Promise.all([t.e(46583),t.e(31811),t.e(69448),t.e(97148)]).then(t.bind(t,97148))},fan:function(){return Promise.all([t.e(29563),t.e(88278),t.e(86630),t.e(46583),t.e(31811),t.e(947)]).then(t.bind(t,947))},group:function(){return Promise.all([t.e(29563),t.e(98985),t.e(88278),t.e(54444),t.e(3555),t.e(86630),t.e(69448),t.e(65992),t.e(35794),t.e(3545)]).then(t.bind(t,39902))},humidifier:function(){return Promise.all([t.e(29563),t.e(88278),t.e(86630),t.e(35317)]).then(t.bind(t,35317))},input_datetime:function(){return Promise.all([t.e(29563),t.e(98985),t.e(88278),t.e(3555),t.e(86630),t.e(12545),t.e(28467)]).then(t.bind(t,56127))},light:function(){return Promise.all([t.e(29563),t.e(88278),t.e(86630),t.e(46583),t.e(31811),t.e(36016)]).then(t.bind(t,36016))},lock:function(){return Promise.all([t.e(29563),t.e(98985),t.e(3555),t.e(46583),t.e(31811),t.e(50534)]).then(t.bind(t,50534))},media_player:function(){return Promise.all([t.e(29563),t.e(88278),t.e(86630),t.e(46684)]).then(t.bind(t,46684))},person:function(){return Promise.all([t.e(46583),t.e(23956),t.e(31811),t.e(95993)]).then(t.bind(t,95993))},remote:function(){return Promise.all([t.e(46583),t.e(31811),t.e(6907)]).then(t.bind(t,6907))},script:function(){return t.e(71593).then(t.bind(t,71593))},sun:function(){return t.e(66369).then(t.bind(t,66369))},timer:function(){return Promise.all([t.e(46583),t.e(31811),t.e(69491)]).then(t.bind(t,69491))},update:function(){return Promise.all([t.e(41985),t.e(62744),t.e(4940),t.e(44222)]).then(t.bind(t,27894))},vacuum:function(){return Promise.all([t.e(29563),t.e(88278),t.e(86630),t.e(46583),t.e(31811),t.e(31790)]).then(t.bind(t,31790))},water_heater:function(){return Promise.all([t.e(29563),t.e(88278),t.e(86630),t.e(52994)]).then(t.bind(t,52994))},weather:function(){return t.e(8914).then(t.bind(t,8914))}},o=function(e){var n=(0,i.N)(e);return a(n)},a=function(e){return r.l.includes(e)?e:r.tm.includes(e)?"hidden":"default"},u=function(e){e in c&&c[e]()}},83320:function(e,n,t){t.d(n,{w:function(){return c}});t(7355),t(26602),t(93479),t(51432),t(73089),t(8864),t(17875);var r=t(7778),i=new Set(["conditional","icon","image","service-button","state-badge","state-icon","state-label"]),c=function(e){return(0,r.Tw)("element",e,i)}},49686:function(e,n,t){t.r(n),t.d(n,{importMoreInfoControl:function(){return r.ST},createBadgeElement:function(){return i.J},createCardElement:function(){return c.Z6},createHeaderFooterElement:function(){return o.t},createHuiElement:function(){return a.w},createRowElement:function(){return u.m}});var r=t(82791),i=t(89172),c=t(51153),o=t(89026),a=t(83320),u=t(37482)}}]);