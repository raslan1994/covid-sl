(this["webpackJsonpcovid-sl"]=this["webpackJsonpcovid-sl"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(1),l=a.n(s),c=a(5),r=a.n(c),n=(a(14),a.p,a(15),a(0));function i(e){return Object(n.jsxs)("div",{className:"px-4 pt-5 my-5 text-center",children:[Object(n.jsx)("h1",{className:"display-4 fw-bold",children:"\ud83c\uddf1\ud83c\uddf0 Covid Status"}),Object(n.jsx)("div",{className:"col-lg-6 mx-auto",children:Object(n.jsx)("p",{className:"lead mb-4",children:"Sri Lanka, covid status in nutshell"})})]})}var o=a(2),d=a.n(o),u=a(3),_=a(6),p=a(7),h=a(9),v=a(8),b="https://www.hpb.health.gov.lk/api/get-current-statistical";function f(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(d.a.mark((function e(){var t,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:!0,payload:{}},e.prev=1,e.next=4,fetch(b);case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,t={error:!1,payload:s},e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var m=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(_.a)(this,a),(s=t.call(this,e)).state={isError:!1,update_date_time:null,local_new_cases:0,local_new_deaths:0,local_total_cases:0,local_total_number_of_individuals_in_hospitals:0,local_deaths:0,local_recovered:0,local_active_cases:0},s.loadData(),s}return Object(p.a)(a,[{key:"loadData",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:if(!(t=e.sent).error){e.next=6;break}return this.setState({isError:!0}),e.abrupt("return");case 6:a=t.payload.data,this.setState({update_date_time:a.update_date_time,local_new_cases:a.local_new_cases,local_new_deaths:a.local_new_deaths,local_total_cases:a.local_total_cases,local_total_number_of_individuals_in_hospitals:a.local_total_number_of_individuals_in_hospitals,local_deaths:a.local_deaths,local_recovered:a.local_recovered,local_active_cases:a.local_active_cases});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItem",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:"",label:"",description:""},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(n.jsxs)("div",{className:"feature col",children:[Object(n.jsx)("div",{className:"feature-icon bg-primary bg-gradient"}),Object(n.jsx)("h2",{children:e.label}),Object(n.jsx)("p",{children:e.description}),Object(n.jsx)("h1",{className:"display-2",children:e.value})]},t)}},{key:"render",value:function(){var e=this,t=this.state,a=(t.update_date_time,t.local_new_cases),s=t.local_new_deaths,l=t.local_total_cases,c=t.local_total_number_of_individuals_in_hospitals,r=t.local_deaths,i=t.local_recovered,o=[{label:"New Cases",description:"New cases identified within 24hrs",value:a},{label:"New Death",description:"New death reported within 24hrs",value:s},{label:"Hospitalized",description:"Hospitalized number of individuals",value:c},{label:"Total Cases",description:"Number of cases identified yet",value:l},{label:"Active Cases",description:"Number of total active cases",value:t.local_active_cases},{label:"Total Deaths",description:"Number of deths reported yet",value:r},{label:"Recovered",description:"Number of recovered individuals",value:i}];return Object(n.jsx)("div",{className:"container px-4 py-5",id:"featured-3",children:Object(n.jsx)("div",{className:"row g-4 py-5 row-cols-1 row-cols-lg-3",children:o.map((function(t,a){return e.renderItem(t,a)}))})})}}]),a}(s.Component);var w=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(i,{}),Object(n.jsx)(m,{})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,s=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),l(e),c(e),r(e)}))};r.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.5158a31c.chunk.js.map