(function(e){function a(a){for(var s,l,r=a[0],c=a[1],i=a[2],u=0,h=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&h.push(n[l][0]),n[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(a);while(h.length)h.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],s=!0,r=1;r<t.length;r++){var c=t[r];0!==n[c]&&(s=!1)}s&&(o.splice(a--,1),e=l(l.s=t[0]))}return e}var s={},n={app:0},o=[];function l(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=s,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)l.d(t,s,function(a){return e[a]}.bind(null,s));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var i=0;i<r.length;i++)a(r[i]);var d=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},4678:function(e,a,t){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var a=o(e);return t(a)}function o(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id="4678"},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s,n,o,l,r=t("2b0e"),c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-app-bar",{attrs:{app:"",color:"indigo darken-1",dark:""}},[t("h2",[e._v(" Mortality Monitor ")]),t("v-spacer"),t("v-btn",{attrs:{href:"https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=demo_r_mweek3&lang=en",target:"_blank",text:""}},[t("span",[e._v("Data source")]),t("v-icon",[e._v("mdi-open-in-new")])],1)],1),t("v-main",[t("Homepage")],1)],1)},i=[],d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-row",{staticClass:"text-center mt-5"},[t("v-col",{attrs:{cols:"3"}},[t("h2",{staticClass:"text-left"},[e._v("Welcome")]),t("p",{staticClass:"text-justify"},[e._v(" This website allows you to track all-cause mortality in various age groups on a weekly basis for a variety of European countries and regions. ")])]),t("v-col",{attrs:{cols:"1"}}),t("v-col",{attrs:{cols:"2"}},[t("v-select",{attrs:{items:e.countryOptions,"item-value":"name","item-text":"name",label:"Region",outlined:""},model:{value:e.countrySelection,callback:function(a){e.countrySelection=a},expression:"countrySelection"}})],1),t("v-col",{attrs:{cols:"3"}},[t("v-container",{attrs:{fluid:""}},[t("v-select",{attrs:{items:e.ageGroups,label:"Age groups","item-text":"name","item-value":"value",multiple:""},model:{value:e.selectedAgeGroups,callback:function(a){e.selectedAgeGroups=a},expression:"selectedAgeGroups"}}),t("v-btn",{staticClass:"font-weight-bold",attrs:{depressed:"",elevation:"2"},on:{click:function(a){e.getChart1Data(e.countrySelection,e.selectedAgeGroups,e.yearSelection),e.getChart2Data(e.countrySelection,e.selectedAgeGroups,e.yearSelection,e.calendarWeekSelection),e.getChart3Data(e.countrySelection,e.selectedAgeGroups,e.yearSelection,e.calendarWeekSelection)}}},[e._v("Draw plot")])],1)],1),t("v-col",{attrs:{cols:"2"}},[t("v-select",{attrs:{items:e.yearOptions,label:"Starting year",outlined:""},model:{value:e.yearSelection,callback:function(a){e.yearSelection=a},expression:"yearSelection"}})],1),t("v-col",{attrs:{cols:"1"}})],1),t("v-row",{staticClass:"text-left"},[t("v-col",{attrs:{cols:"3"}},[t("h2",[e._v("Methodology")]),t("p",[e._v("Weekly mortality data is pulled from EUROSTAT and normalized with the population of the selected age group on January 1st of the year in question. To calculate the expected deaths the weekly data is grouped by calendar week and then averaged across all years. Outliers deviating more then one standard deviation from the mean are removed before averaging. ")])]),t("v-col",{attrs:{cols:"1"}}),t("v-col",{staticClass:"mb-4",attrs:{cols:"7"}},[null==e.dataQuerySuccessful?t("h1",[e._v(" Please wait while the data is being fetched ")]):e._e(),null==e.dataQuerySuccessful?t("v-overlay"):e._e(),null==e.dataQuerySuccessful?t("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}}):e._e(),e.Chart1Data_success?t("h2",{staticClass:"font-weight-bold mb-3 text-center"},[e._v(" Deaths per million chart for region "+e._s(e.countrySelection)+" ")]):e._e(),e.Chart1Data_success?t("chart-1",{staticClass:"mt-3",attrs:{chartData:e.datacollection}}):e._e()],1),t("v-col",{attrs:{cols:"1"}})],1),t("v-row",{staticClass:"text-left"},[t("v-col",{attrs:{cols:"3"}},[t("h2",[e._v("Note on expected deaths")]),t("p",[e._v("The term expected deaths usually implies that for a given time "),t("b",[e._v("t")]),e._v(", to calculate the expectation for "),t("b",[e._v("t")]),e._v(", we only consider data in the past from the point of view of "),t("b",[e._v("t")]),e._v(". For simplicity's sake both data in the past and future are considered for each data point, resulting in an outlier-adjusted average, rather than a proper expectation value.")])]),t("v-col",{attrs:{cols:"1"}}),t("v-col",{attrs:{cols:"7"}},[e.Chart2Data_success?t("h2",{staticClass:"text-center font-weight-bold mb-3"},[e._v(" Aggregated yearly deaths per million for region "+e._s(e.countrySelection)+" until calendar week "+e._s(this.latest_week)+" ")]):e._e(),e.Chart2Data_success?t("chart-2",{attrs:{chartData:e.datacollectionChart2}}):e._e()],1),t("v-col",{attrs:{cols:"1"}})],1)],1)},u=[],h=(t("a630"),t("d3b7"),t("3ca3"),t("ddb0"),t("bc3a")),b=t.n(h),f=t("1fca"),p=t("f634"),m=t.n(p),j=f["b"].reactiveProp,v={extends:f["a"],mounted:function(){this.addPlugin(m.a),this.renderChart(this.chartData,this.options)},mixins:[j],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1}}}},_=v,y=t("2877"),g=Object(y["a"])(_,s,n,!1,null,null,null),k=g.exports,C=f["b"].reactiveProp,w={extends:f["a"],mounted:function(){this.renderChart(this.chartData,this.options)},mixins:[C],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1}}}},x=w,S=Object(y["a"])(x,o,l,!1,null,null,null),A=S.exports,D={name:"Homepage",data:function(){return{Chart1Data_success:null,Chart2Data_success:null,Chart3Data_success:null,calendarWeekSelection:null,calendarWeekOptions:Array.from({length:52},(function(e,a){return a+1})),countrySelection:"",countryOptions:[{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Portugal",code:"PT"},{name:"Spain",code:"ES"},{name:"France",code:"FR"},{name:"Région lémanique",code:"CH01"},{name:"Espace Mittelland",code:"CH02"},{name:"Nordwestschweiz",code:"CH03"},{name:"Zürich",code:"CH04"},{name:"Ostschweiz",code:"CH05"},{name:"Zentralschweiz",code:"CH06"},{name:"Ticino",code:"CH07"},{name:"Comunidad de Madrid",code:"ES3"},{name:"Belgium",code:"BE"},{name:"Denmark",code:"DK"},{name:"Poland",code:"PL"},{name:"Netherlands",code:"NL"},{name:"Austria",code:"AT"},{name:"Italy",code:"IT"},{name:"Finland",code:"FI"},{name:"United Kingdom",code:"UK"}],selectedAgeGroups:"",yearOptions:[2018,2017,2016,2015,2014,2013,2012,2011,2010],yearSelection:"",datacollection:{},dataQuerySuccessful:null,datacollectionChart2:{},labels:[],latest_week:null,deaths_per_million:[],ageGroups:[{name:"Years 40-44",value:"Y40-44"},{name:"Years 45-49",value:"Y45-49"},{name:"Years 50-54",value:"Y50-54"},{name:"Years 55-59",value:"Y55-59"},{name:"Years 60-64",value:"Y60-64"},{name:"Years 65-69",value:"Y65-69"},{name:"Years 70-74",value:"Y70-74"},{name:"Years 75-79",value:"Y75-79"},{name:"Years 80-84",value:"Y80-84"},{name:"Years 85-89",value:"Y85-89"},{name:"Years 90 and older",value:"Y_GE90"}],sideBarItems:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}]}},components:{"chart-1":k,"chart-2":A},mounted:function(){var e=this,a="http://localhost:5000/data";b.a.post(a,{data:{geo_codes:["SE","CH","PT","BE","CH04","FR","ES","CH01","CH02","CH03","CH04","CH05","CH06","CH07","ES3","DK","PL","NL","AT","IT","FI","UK"],sincetimeperiod:"2010",precision:"0",mortality_ages:["Y60-64","Y65-69","Y70-74","Y75-79","Y80-84","Y85-89","Y_GE90"],sex:"T"}}).then((function(a){e.dataQueryMessage=a.data,e.dataQuerySuccessful=!0})).catch((function(e){console.error(e)}))},methods:{getChart1Data:function(e,a,t){var s=this,n="http://localhost:5000/Chart1_data";b.a.post(n,{data:{geo:e,ages:a.sort(),time:t}}).then((function(e){s.labels=e.data.weekly_data.label,s.years=e.data.weekly_data.year,s.deaths_per_million=e.data.weekly_data.deaths_per_million,s.excess_deaths=e.data.weekly_data.excess_deaths,s.expected_deaths=e.data.weekly_data.expected_deaths,s.above_expectation_deaths=e.data.weekly_data.above_expectation_deaths,s.below_expectation_deaths=e.data.weekly_data.below_expectation_deaths,s.datacollection={labels:s.labels,datasets:[{pointBackgroundColor:"#000000",pointBorderColor:"#000000",borderWidth:1,pointRadius:1,type:"line",backgroundColor:"#000000",borderColor:"#000000",label:"Expected deaths per millions",data:s.expected_deaths,fill:!1,lineTension:0},{backgroundColor:"#F44336",label:"Excess deaths per millions",data:s.above_expectation_deaths},{backgroundColor:"#4CAF50",label:"Below expectation deaths per millions",data:s.below_expectation_deaths},{backgroundColor:"#1A237E",label:"Deaths per millions",data:s.deaths_per_million}]}})),this.Chart1Data_success=!0},getChart2Data:function(e,a,t){var s=this,n="http://localhost:5000/Chart2_data";b.a.post(n,{data:{geo:e,ages:a.sort(),time:t}}).then((function(e){s.labels=e.data.yearly_deaths.years,s.actual_deaths_per_million=e.data.yearly_deaths.actual_deaths_per_million,s.expected_deaths_per_million=e.data.yearly_deaths.expected_deaths_per_million,s.excess_deaths_per_million=e.data.yearly_deaths.excess_deaths_per_million,s.latest_week=e.data.yearly_deaths.latest_week,s.datacollectionChart2={labels:s.labels,datasets:[{backgroundColor:"#1A237E",label:"Yearly deaths per million",data:s.actual_deaths_per_million}]}})),this.Chart2Data_success=!0},getChart3Data:function(e,a,t,s){var n=this,o="http://localhost:5000/Chart3_data";b.a.post(o,{data:{geo:e,ages:a.sort(),year:t,calendarWeek:s}}).then((function(e){n.labels=e.data.labels,n.values=e.data.values,n.datacollectionChart3={labels:n.labels,datasets:[{backgroundColor:"#1A237E",label:"Aggregated population for selected age groups",data:n.values}]}})),this.Chart3Data_success=!0}}},Y=D,z=Object(y["a"])(Y,d,u,!1,null,null,null),O=z.exports,E={name:"App",components:{Homepage:O}},H=E,F=Object(y["a"])(H,c,i,!1,null,null,null),P=F.exports,T=t("ce5b"),G=t.n(T);t("bf40");r["default"].use(G.a);var M=new G.a({theme:{themes:{light:{primary:"#3949AB",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});t("d5e8"),t("5363");r["default"].config.productionTip=!1,new r["default"]({vuetify:M,render:function(e){return e(P)}}).$mount("#app")}});
//# sourceMappingURL=app.a6c65b5a.js.map