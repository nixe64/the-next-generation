"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[66054],{92306:(e,t,s)=>{s.d(t,{v:()=>r});const r=(e,t)=>{const s={};for(const r of e){const e=t(r);e in s?s[e].push(r):s[e]=[r]}return s}},11950:(e,t,s)=>{s.d(t,{l:()=>r});const r=async(e,t)=>new Promise((s=>{const r=t(e,(e=>{r(),s(e)}))}))},81582:(e,t,s)=>{s.d(t,{LZ:()=>r,Q4:()=>n,DJ:()=>o,pB:()=>i,SO:()=>a,iJ:()=>c,Nn:()=>_,Ny:()=>l,T0:()=>y});const r=32143==s.j?["migration_error","setup_error","setup_retry"]:null,n=32143==s.j?["not_loaded","loaded","setup_error","setup_retry"]:null,o=(e,t,s)=>{const r={type:"config_entries/subscribe"};return s&&s.type&&(r.type_filter=s.type),e.connection.subscribeMessage((e=>t(e)),r)},i=(e,t)=>{const s={};return t&&(t.type&&(s.type_filter=t.type),t.domain&&(s.domain=t.domain)),e.callWS({type:"config_entries/get",...s})},a=(e,t,s)=>e.callWS({type:"config_entries/update",entry_id:t,...s}),c=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),_=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),l=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),y=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,s)=>{s.d(t,{Bm:()=>b,o1:()=>w,iK:()=>v,rl:()=>S,P:()=>T,KU:()=>k,xZ:()=>Z,gy:()=>W,ZC:()=>P,_Z:()=>C,Jj:()=>j,yH:()=>D,UB:()=>z,jB:()=>I,gM:()=>L,yT:()=>M,_n:()=>B,vR:()=>H,vE:()=>K});var r=s(4535),n=s(59699),o=s(32182),i=s(79021),a=s(39244),c=s(27088),_=s(83008),l=s(70390),y=s(47538),u=s(97330),d=s(92306),g=s(11950),p=s(81582),f=s(74186),m=s(38014);const h=[],b=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),w=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),v=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),S=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),T=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),k=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),Z=e=>e.callWS({type:"energy/info"}),W=e=>e.callWS({type:"energy/validate"}),P=e=>e.callWS({type:"energy/get_prefs"}),C=async(e,t)=>{const s=e.callWS({type:"energy/save_prefs",...t});return O(e),s},E=async(e,t,s,r,n,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:s,co2_statistic_id:r,period:o}),j=e=>(0,d.v)(e.energy_sources,(e=>e.type)),D=(e,t)=>{const s=[];for(const r of e.energy_sources)if("solar"!==r.type)if("gas"!==r.type)if("battery"!==r.type){for(const e of r.flow_from){s.push(e.stat_energy_from),e.stat_cost&&s.push(e.stat_cost);const r=t.cost_sensors[e.stat_energy_from];r&&s.push(r)}for(const e of r.flow_to){s.push(e.stat_energy_to),e.stat_compensation&&s.push(e.stat_compensation);const r=t.cost_sensors[e.stat_energy_to];r&&s.push(r)}}else s.push(r.stat_energy_from),s.push(r.stat_energy_to);else{s.push(r.stat_energy_from),r.stat_cost&&s.push(r.stat_cost);const e=t.cost_sensors[r.stat_energy_from];e&&s.push(e)}else s.push(r.stat_energy_from);for(const t of e.device_consumption)s.push(t.stat_consumption);return s},O=e=>{h.forEach((t=>{const s=z(e,{key:t});s.clearPrefs(),s._active&&s.refresh()}))},z=(e,t={})=>{let s="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");s=`_${t.key}`}if(e.connection[s])return e.connection[s];h.push(t.key);const d=(0,u._)(e.connection,s,(async()=>{if(d.prefs||(d.prefs=await P(e)),d._refreshTimeout&&clearTimeout(d._refreshTimeout),d._active&&(!d.end||d.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),d._refreshTimeout=window.setTimeout((()=>d.refresh()),e.getTime()-Date.now())}return(async(e,t,s,c,_)=>{const[l,y,u]=await Promise.all([(0,p.pB)(e,{domain:"co2signal"}),(0,g.l)(e.connection,f.LM),Z(e)]),d=l.length?l[0]:void 0;let h;if(d)for(const t of y){if(t.config_entry_id!==d.entry_id)continue;const s=e.states[t.entity_id];if(s&&"%"===s.attributes.unit_of_measurement){h=s.entity_id;break}}const b=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)b.push(t.stat_energy_from);const w=D(t,u),v=(0,r.Z)(c||new Date,s),S=v>35?"month":v>2?"day":"hour",T=(0,n.Z)(s,-1),k={energy:"kWh",volume:"km"===(e.config.unit_system.length||"")?"m³":"ft³"},W=await(0,m.dL)(e,T,c,w,S,k);let P,C,j,O,z;if(_){C=v>27&&v<32?(0,o.Z)(s,-1):(0,i.Z)(s,-1*(v+1));const t=(0,n.Z)(C,-1);j=(0,a.Z)(s,-1),P=await(0,m.dL)(e,t,j,w,S,k)}void 0!==h&&(O=await E(e,s,b,h,c,v>35?"month":v>2?"day":"hour"),_&&(z=await E(e,C,b,h,j,v>35?"month":v>2?"day":"hour"))),Object.values(W).forEach((e=>{e.length&&new Date(e[0].start)>T&&e.unshift({...e[0],start:T.toISOString(),end:T.toISOString(),sum:0,state:0})}));const I=await(0,m.Py)(e,w),L={};return I.forEach((e=>{L[e.statistic_id]=e})),{start:s,end:c,startCompare:C,endCompare:j,info:u,prefs:t,stats:W,statsMetadata:L,statsCompare:P,co2SignalConfigEntry:d,co2SignalEntity:h,fossilEnergyConsumption:O,fossilEnergyConsumptionCompare:z}})(e,d.prefs,d.start,d.end,d.compare)})),b=d.subscribe;d.subscribe=e=>{const t=b(e);return d._active++,()=>{d._active--,d._active<1&&(clearTimeout(d._refreshTimeout),d._refreshTimeout=void 0),t()}},d._active=0,d.prefs=t.prefs;const w=new Date;d.start=w.getHours()>0?(0,c.Z)():(0,_.Z)(),d.end=w.getHours()>0?(0,l.Z)():(0,y.Z)();const v=()=>{d._updatePeriodTimeout=window.setTimeout((()=>{d.start=(0,c.Z)(),d.end=(0,l.Z)(),v()}),(0,n.Z)((0,l.Z)(),1).getTime()-Date.now())};return v(),d.clearPrefs=()=>{d.prefs=void 0},d.setPeriod=(e,t)=>{var s;d.start=e,d.end=t,d.start.getTime()!==(0,c.Z)().getTime()||(null===(s=d.end)||void 0===s?void 0:s.getTime())!==(0,l.Z)().getTime()||d._updatePeriodTimeout?d._updatePeriodTimeout&&(clearTimeout(d._updatePeriodTimeout),d._updatePeriodTimeout=void 0):v()},d.setCompare=e=>{d.compare=e},d},I=e=>e.callWS({type:"energy/solar_forecast"}),L=["m³"],M=["kWh"],B=[...L,...M],H=(e,t={},s)=>{for(const r of e.energy_sources){if("gas"!==r.type)continue;if(s&&s===r.stat_energy_from)continue;const e=t[r.stat_energy_from];if(e)return L.includes(e.statistics_unit_of_measurement)?"volume":"energy"}},K=(e,t={})=>{for(const s of e.energy_sources){if("gas"!==s.type)continue;const e=t[s.stat_energy_from];if(null!=e&&e.display_unit_of_measurement)return e.display_unit_of_measurement}}},38014:(e,t,s)=>{s.d(t,{uR:()=>n,Py:()=>o,dL:()=>i,h_:()=>a,Cj:()=>c,ZT:()=>_,hN:()=>l,Kj:()=>y,q6:()=>u,Nw:()=>d,Z0:()=>f,j2:()=>m,Kd:()=>h});var r=s(91741);const n=(e,t)=>e.callWS({type:"recorder/list_statistic_ids",statistic_type:t}),o=(e,t)=>e.callWS({type:"recorder/get_statistics_metadata",statistic_ids:t}),i=(e,t,s,r,n="hour",o)=>e.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),end_time:null==s?void 0:s.toISOString(),statistic_ids:r,period:n,units:o}),a=e=>e.callWS({type:"recorder/validate_statistics"}),c=(e,t,s)=>e.callWS({type:"recorder/update_statistics_metadata",statistic_id:t,unit_of_measurement:s}),_=(e,t,s,r)=>e.callWS({type:"recorder/change_statistics_unit",statistic_id:t,old_unit_of_measurement:s,new_unit_of_measurement:r}),l=(e,t)=>e.callWS({type:"recorder/clear_statistics",statistic_ids:t}),y=e=>{if(!e||e.length<2)return null;const t=e[e.length-1].sum;if(null===t)return null;const s=e[0].sum;return null===s?t:t-s},u=(e,t)=>{let s=null;for(const r of t){if(!(r in e))continue;const t=y(e[r]);null!==t&&(null===s?s=t:s+=t)}return s},d=(e,t)=>e.some((e=>null!==e[t])),g=["mean","min","max"],p=["sum"],f=(e,t)=>!(!g.includes(t)||!e.has_mean)||!(!p.includes(t)||!e.has_sum),m=(e,t,s,r,n)=>e.callWS({type:"recorder/adjust_sum_statistics",statistic_id:t,start_time:s,adjustment:r,display_unit:n}),h=(e,t,s)=>{const n=e.states[t];return n?(0,r.C)(n):(null==s?void 0:s.name)||t}},66054:(e,t,s)=>{s.r(t),s.d(t,{EnergyStrategy:()=>n});var r=s(55424);class n{static async generateView(e){const t=e.hass,n={cards:[]};let o;try{o=await(0,r.ZC)(t)}catch(e){return"not_found"===e.code?(async()=>(await Promise.all([s.e(878),s.e(55158)]).then(s.bind(s,55158)),{type:"panel",cards:[{type:"custom:energy-setup-wizard-card"}]}))():(n.cards.push({type:"markdown",content:`An error occurred while fetching your energy preferences: ${e.message}.`}),n)}n.type="sidebar";const i=o.energy_sources.find((e=>"grid"===e.type)),a=i&&i.flow_to.length,c=o.energy_sources.some((e=>"solar"===e.type)),_=o.energy_sources.some((e=>"gas"===e.type));return e.narrow&&n.cards.push({type:"energy-date-selection",collection_key:"energy_dashboard",view_layout:{position:"sidebar"}}),n.cards.push({type:"energy-compare",collection_key:"energy_dashboard"}),i&&n.cards.push({title:t.localize("ui.panel.energy.cards.energy_usage_graph_title"),type:"energy-usage-graph",collection_key:"energy_dashboard"}),c&&n.cards.push({title:t.localize("ui.panel.energy.cards.energy_solar_graph_title"),type:"energy-solar-graph",collection_key:"energy_dashboard"}),_&&n.cards.push({title:t.localize("ui.panel.energy.cards.energy_gas_graph_title"),type:"energy-gas-graph",collection_key:"energy_dashboard"}),i&&n.cards.push({title:t.localize("ui.panel.energy.cards.energy_distribution_title"),type:"energy-distribution",view_layout:{position:"sidebar"},collection_key:"energy_dashboard"}),(i||c)&&n.cards.push({title:t.localize("ui.panel.energy.cards.energy_sources_table_title"),type:"energy-sources-table",collection_key:"energy_dashboard"}),a&&n.cards.push({type:"energy-grid-neutrality-gauge",view_layout:{position:"sidebar"},collection_key:"energy_dashboard"}),c&&a&&n.cards.push({type:"energy-solar-consumed-gauge",view_layout:{position:"sidebar"},collection_key:"energy_dashboard"}),i&&n.cards.push({type:"energy-carbon-consumed-gauge",view_layout:{position:"sidebar"},collection_key:"energy_dashboard"}),o.device_consumption.length&&n.cards.push({title:t.localize("ui.panel.energy.cards.energy_devices_graph_title"),type:"energy-devices-graph",collection_key:"energy_dashboard"}),n}}}}]);