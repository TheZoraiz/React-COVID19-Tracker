(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{181:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t),function(e){var t=a(41),n=a(204);e.exports={fetchCountries:function(){return new Promise((function(e,a){setTimeout((function(){return a("Error!")}),1e4),n("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(a){var n=(a=a.Countries).map((function(e){return{name:e.Country,slug:e.Slug}}));e(Object(t.a)(n))})).catch((function(e){setTimeout((function(){return a(e)}),5e3)}))}))},fetchCountryData:function(e){return new Promise((function(a,c){setTimeout((function(){return c("Error!")}),5e3),n("https://api.covid19api.com/country/".concat(e)).then((function(e){return e.json()})).then((function(e){a(Object(t.a)(e))})).catch((function(e){c(e)}))}))}}}.call(this,a(203)(e))},205:function(e,t){e.exports={alterDateFormat:function(e){var t=[],a=[];return e.forEach((function(e){var n=e.slice(8,e.length),c=e.slice(5,7),r=e.slice(0,4);switch(a[a.length-1]!==r&&a.push(r),c){case"01":t.push({month:"January",monthNum:"01",year:r,day:n,date:"".concat(n," Jan ").concat(r)});break;case"02":t.push({month:"February",monthNum:"02",year:r,day:n,date:"".concat(n," Feb ").concat(r)});break;case"03":t.push({month:"March",monthNum:"03",year:r,day:n,date:"".concat(n," March ").concat(r)});break;case"04":t.push({month:"April",monthNum:"04",year:r,day:n,date:"".concat(n," April ").concat(r)});break;case"05":t.push({month:"May",monthNum:"05",year:r,day:n,date:"".concat(n," May ").concat(r)});break;case"06":t.push({month:"June",monthNum:"06",year:r,day:n,date:"".concat(n," June ").concat(r)});break;case"07":t.push({month:"July",monthNum:"07",year:r,day:n,date:"".concat(n," July ").concat(r)});break;case"08":t.push({month:"August",monthNum:"08",year:r,day:n,date:"".concat(n," Aug ").concat(r)});break;case"09":t.push({month:"September",monthNum:"09",year:r,day:n,date:"".concat(n," Sept ").concat(r)});break;case"10":t.push({month:"October",monthNum:"10",year:r,day:n,date:"".concat(n," Oct ").concat(r)});break;case"11":t.push({month:"November",monthNum:"11",year:r,day:n,date:"".concat(n," Nov ").concat(r)});break;case"12":t.push({month:"December",monthNum:"12",year:r,day:n,date:"".concat(n," Dec ").concat(r)})}})),t},getDataInRange:function(e,t,a,n,c){null==e?e=a:null==t&&(t=n);var r=e.getDate(),s=e.getMonth()+1,o=e.getFullYear(),i=t.getDate(),u=t.getMonth()+1,l=t.getFullYear(),h=[];return o<l?c.forEach((function(e){var t=parseInt(e.newDate.day),a=parseInt(e.newDate.monthNum),n=parseInt(e.newDate.year);n==o?a==s?t>=r&&h.push(e):a>=s&&h.push(e):n>=o&&n<l?h.push(e):n==l&&(a==u?t<=i&&h.push(e):a<=u&&h.push(e))})):c.forEach((function(e){var t=parseInt(e.newDate.day),a=parseInt(e.newDate.monthNum);a>=s&&a<=u&&(s!=u?a==s?t>=r&&h.push(e):a==u?t<=i&&h.push(e):h.push(e):t>=r&&t<=i&&h.push(e))})),h}}},208:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(1),r=a.n(c),s=a(7),o=a.n(s),i=(a(67),a(16)),u=a.n(i),l=a(42),h=a(37),d=a(4),b=(a(69),a(61)),j=a(38),m=a.n(j),p=a(40),f=(a(44),a(24)),O=function(e){var t=e.country,a=e.title,r=e.firstLabel,s=e.secondLabel,o=e.graphData,i=e.dotRadius,u=Object(c.useState)({}),l=Object(d.a)(u,2),h=l[0],b=l[1];return Object(c.useEffect)((function(){b({labels:o.map((function(e){return e.newDate.date})),datasets:[{label:r,data:o.map((function(e){return e.confirmed})),backgroundColor:"rgba(1,1,1,0)",borderWidth:2,borderColor:"red",radius:i},{label:s,data:o.map((function(e){return e.recovered})),backgroundColor:"rgba(1,1,1,0)",borderWidth:2,borderColor:"turquoise",radius:i}]})}),[o]),Object(n.jsxs)("div",{className:"chart",children:[Object(n.jsx)("h2",{className:"country-name",children:t}),Object(n.jsx)("h2",{className:"country-title",children:a}),Object(n.jsx)(f.Line,{data:h,height:null,width:null,options:{aspectRatio:1.15,resposive:!0,legend:{labels:{fontSize:15,fontColor:"black"}}}})]})},v=(a(181),a(182),a(60)),g=a.n(v);var y=function(e){var t=e.text;return Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)(g.a,{type:"Oval",color:"black",height:70,width:70}),t]})},D=function(e){var t=e.country,a=e.title,r=e.type,s=e.graphData,o=e.dotRadius,i=e.label,u=e.color,l=Object(c.useState)({}),h=Object(d.a)(l,2),b=h[0],j=h[1];return Object(c.useEffect)((function(){j({labels:s.map((function(e){return e.newDate.date})),datasets:[{label:i,data:s.map((function(e){return"Active"==r?e.active:e.deaths})),backgroundColor:"rgba(1,1,1,0)",borderWidth:2,borderColor:u,radius:o}]})}),[s]),Object(n.jsxs)("div",{className:"chart",children:[Object(n.jsx)("h2",{className:"country-name",children:t}),Object(n.jsx)("h2",{className:"country-title",children:a}),Object(n.jsx)(f.Line,{data:b,height:null,width:null,options:{aspectRatio:1.15,resposive:!0,legend:{labels:{fontSize:15,fontColor:"black"}}}})]})},x=a(202),w=x.fetchCountries,N=x.fetchCountryData,k=a(205),C=k.alterDateFormat,S=k.getDataInRange,T=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),o=Object(d.a)(s,2),i=o[0],j=o[1],f=Object(c.useState)([]),v=Object(d.a)(f,2),g=v[0],x=v[1],k=Object(c.useState)([]),T=Object(d.a)(k,2),I=T[0],A=T[1],R=Object(c.useState)(!0),F=Object(d.a)(R,2),M=F[0],E=F[1],L=Object(c.useState)(),J=Object(d.a)(L,2),P=J[0],z=J[1],V=Object(c.useState)(),W=Object(d.a)(V,2),B=W[0],Y=W[1],_=Object(c.useState)(null),q=Object(d.a)(_,2),H=q[0],U=q[1],Z=Object(c.useState)(null),G=Object(d.a)(Z,2),K=G[0],Q=G[1],X=Object(c.useState)(new Date),$=Object(d.a)(X,2),ee=$[0],te=$[1],ae=Object(c.useState)(new Date),ne=Object(d.a)(ae,2),ce=ne[0],re=ne[1],se=Object(c.useState)(!1),oe=Object(d.a)(se,2),ie=oe[0],ue=oe[1],le=function(){var e=Object(h.a)(u.a.mark((function e(t){var a,n,c,s,o,i,h,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(t.value);case 3:a=e.sent,n=a.map((function(e){return{name:e.Country,confirmed:e.Confirmed,recovered:e.Recovered,active:e.Active,deaths:e.Deaths,date:e.Date.slice(0,10)}})),c=n.map((function(e){return e.date})),s=C(c),o=0,n=n.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{newDate:s[o++]})})),i=n[0],h=n[n.length-1],z(new Date("".concat(i.newDate.year,"-").concat(i.newDate.monthNum,"-").concat(i.newDate.day))),Y(new Date("".concat(h.newDate.year,"-").concat(h.newDate.monthNum,"-").concat(h.newDate.day))),d=n.slice(n.length-30,n.length),j(n),x(d),de(d),r(!0),E(!1),e.next=27;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0),ue(!0),r(!1),E(!1);case 27:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}(),he=function(e,t){var a=S(e,t,ee,ce,i);x(a)},de=function(e){var t=new Date(e[0].date),a=new Date(e[e.length-1].date),n=new Date(e[0].date);te(n),t.setDate(t.getDate()+1),a.setDate(a.getDate()-1),U(t),Q(a)};return Object(c.useEffect)(Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.a.initialize("UA-183443755-2"),p.a.pageview("/"),e.prev=2,e.next=5,w();case 5:t=(t=e.sent).filter((function(e){return"united-states"!=e.slug})),A(t),le({value:"pakistan"}),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),ue(!0),r(!1),E(!1);case 17:case"end":return e.stop()}}),e,null,[[2,11]])}))),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{id:"first-section",children:[Object(n.jsx)("h1",{className:"heading",children:"COVID-19 Tracker"}),Object(n.jsx)("h3",{id:"tagline",children:"Stay Home & Stay Safe"}),Object(n.jsx)("hr",{style:{width:"95%"}}),Object(n.jsxs)("div",{className:"selectors",children:[Object(n.jsxs)("div",{className:"select-container",children:[Object(n.jsx)("h3",{children:"Select Country / Region"}),Object(n.jsx)(b.a,{options:I.map((function(e){return{value:e.slug,label:e.name}})),defaultValue:{value:"pakistan",label:"Pakistan"},onChange:le})]}),Object(n.jsxs)("div",{className:"date-picker-wrapper",children:[Object(n.jsxs)("div",{className:"date-picker",children:[Object(n.jsx)("h3",{children:"From"}),Object(n.jsx)(m.a,{format:"dd-MM-y",onChange:function(e){te(e);var t=new Date(e.getTime());t.setDate(t.getDate()+1),U(t),he(e,null)},value:ee,clearIcon:null,minDate:P,maxDate:K,className:"picker"})]}),Object(n.jsxs)("div",{className:"date-picker",children:[Object(n.jsx)("h3",{children:"To"}),Object(n.jsx)(m.a,{format:"dd-MM-y",onChange:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()-1),Q(t),re(e),he(null,e)},value:ce,clearIcon:null,minDate:H,maxDate:B,className:"picker"})]})]})]}),Object(n.jsx)("hr",{style:{width:"95%"}}),a&&Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(O,{country:i[0].name,title:"Cases & Recoveries",firstLabel:"Total Cases",secondLabel:"Total Recoveries",graphData:g,dotRadius:0}),Object(n.jsx)(D,{country:i[0].name,title:"Active Cases",type:"Active",label:"Active Cases",graphData:g,color:"orange",dotRadius:0}),Object(n.jsx)(D,{country:i[0].name,title:"Total Deaths",type:"Deaths",label:"Total Deaths",graphData:g,color:"red",dotRadius:0})]}),M&&Object(n.jsx)(y,{className:"charts",text:"Loading..."}),ie&&Object(n.jsxs)("div",{className:"error-wrapper",children:[Object(n.jsx)("h1",{children:"Error!"}),Object(n.jsxs)("p",{children:["There was an error retrieving the data.",Object(n.jsx)("br",{}),"Please refresh the page or try again after a few minutes."]})]}),Object(n.jsxs)("div",{className:"about-wrapper",children:[Object(n.jsx)("h2",{children:"About"}),Object(n.jsxs)("p",{children:["The data used for the graphs in this project is publicly available and was obtained from the COVID 19 API ",Object(n.jsx)("a",{href:"https://covid19api.com",target:"_blank",children:"here"}),". All credits for the data go to the source. Please visit their website and support them if you can.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"The project is open source and you can view the source code ",Object(n.jsx)("a",{href:"https://github.com/TheZoraiz/React-COVID19-Tracker",target:"_blank",children:"here"})]})]})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,210)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),I()},44:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){}},[[208,1,2]]]);
//# sourceMappingURL=main.d441cfc7.chunk.js.map