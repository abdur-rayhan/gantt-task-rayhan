(this["webpackJsonpgantt-task-react-example"]=this["webpackJsonpgantt-task-react-example"]||[]).push([[0],{10:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);a(10);var n,r=a(0),o=a.n(r),i=a(8),c=a.n(i),s=a(1),l=(a(6),a(2)),u=a.n(l),d=a(5),g=a(3),m=a(7);!function(e){e.QuarterDay="Quarter Day",e.HalfDay="Half Day",e.Day="Day",e.Week="Week",e.Month="Month"}(n||(n={}));var h=function(e,t,a){return new Date(e.getFullYear()+("year"===a?t:0),e.getMonth()+("month"===a?t:0),e.getDate()+("day"===a?t:0),e.getHours()+("hour"===a?t:0),e.getMinutes()+("minute"===a?t:0),e.getSeconds()+("second"===a?t:0),e.getMilliseconds()+("millisecond"===a?t:0))},f=function(e,t){var a=["millisecond","second","minute","hour","day","month","year"],n=function(e){var n=a.indexOf(t);return a.indexOf(e)<=n};return new Date(e.getFullYear(),n("year")?0:e.getMonth(),n("month")?1:e.getDate(),n("day")?0:e.getHours(),n("hour")?0:e.getMinutes(),n("minute")?0:e.getSeconds(),n("second")?0:e.getMilliseconds())},b=function(e,t){var a=new Intl.DateTimeFormat(t,{month:"long"}).format(e);return a=a.replace(a[0],a[0].toLocaleUpperCase())},v=function(e){var t=e.getDay(),a=e.getDate()-t+(0===t?-6:1);return new Date(e.setDate(a))},y=function(e){var t=new Date(e.valueOf()),a=(t.getDay()+6)%7;t.setDate(t.getDate()-a+3);var n=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var r=(1+Math.ceil((n-t.valueOf())/6048e5)).toString();return 1===r.length?"0".concat(r):r},x="_grid-module__gridRow__Mh3e0",k="_grid-module__gridHeader__UMdHN",p="_grid-module__gridRowLine__b2wly",T="_grid-module__gridTick__OGXLT",w=function(e){var t,a=e.tasks,n=e.dates,r=e.rowHeight,i=e.headerHeight,c=e.gridWidth,s=e.columnWidth,l=e.todayColor,u=i,d=[],g=[],f=Object(m.a)(a);try{for(f.s();!(t=f.n()).done;){var b=t.value;d.push(o.a.createElement("rect",{key:"Row"+b.id,x:"0",y:u,width:c,height:r,className:x})),g.push(o.a.createElement("line",{key:"RowLine"+b.id,x:"0",y1:u+r,x2:c,y2:u+r,className:p})),u+=r}}catch(C){f.e(C)}finally{f.f()}for(var v=new Date,y=0,k=[],w=o.a.createElement("rect",null),D=0;D<n.length;D++){var E=n[D];k.push(o.a.createElement("line",{key:E.getTime(),x1:y,y1:i,x2:y,y2:u,className:T})),(D+1!==n.length&&E.getTime()<v.getTime()&&n[D+1].getTime()>=v.getTime()||0!==D&&D+1===n.length&&E.getTime()<v.getTime()&&h(E,E.getTime()-n[D-1].getTime(),"millisecond").getTime()>=v.getTime())&&(w=o.a.createElement("rect",{x:y,y:0,width:s,height:u,fill:l})),y+=s}return o.a.createElement("g",{className:"gridBody"},o.a.createElement("g",{className:"rows"},d),o.a.createElement("g",{className:"rowLines"},g),o.a.createElement("g",{className:"ticks"},k),o.a.createElement("g",{className:"today"},w))},D=function(e){var t=e.gridWidth,a=e.headerHeight;return o.a.createElement("rect",{x:"0",y:"0",width:t,height:a,className:k})},E=function(e){return o.a.createElement("g",{className:"grid"},o.a.createElement(D,Object.assign({},e)),o.a.createElement(w,Object.assign({},e)))},C="_calendar-module__calendarBottomText__3mT2F",O="_calendar-module__calendarTopTick__YErfM",_="_calendar-module__calendarTopText__25YmP",M=function(e){var t=e.value,a=e.x1Line,n=e.y1Line,r=e.y2Line,i=e.xText,c=e.yText;return o.a.createElement("g",{className:"calendarTop"},o.a.createElement("line",{x1:a,y1:n,x2:a,y2:r,className:O,key:t+"line"}),o.a.createElement("text",{key:t+"text",y:c,x:i,className:_},t))},S=function(e){var t=e.dates,a=e.locale,r=e.viewMode,i=e.headerHeight,c=e.columnWidth,l=e.fontFamily,u=e.fontSize,d=[],g=[];switch(r){case n.Month:var m=function(){for(var e=[],n=[],r=6*c,s=.5*i,l=0;l<t.length;l++){var u=t[l],d=b(u,a);if(n.push(o.a.createElement("text",{key:d+u.getFullYear(),y:.8*i,x:c*l+.5*c,className:C},d)),0===l||u.getFullYear()!==t[l-1].getFullYear()){var g=u.getFullYear().toString();e.push(o.a.createElement(M,{key:g,value:g,x1Line:c*l,y1Line:0,y2Line:s,xText:r+c*l-u.getMonth()*c,yText:.9*s}))}}return[e,n]}(),h=Object(s.a)(m,2);d=h[0],g=h[1];break;case n.Week:var f=function(){for(var e=[],n=[],r=0,s=.5*i,l=t.length-1;l>=0;l--){var u=t[l],d="";0!==l&&u.getMonth()===t[l-1].getMonth()||(d="".concat(b(u,a),", ").concat(u.getFullYear()));var g="W".concat(y(u));n.push(o.a.createElement("text",{key:u.getTime(),y:.8*i,x:c*l,className:C},g)),d&&(l!==t.length-1&&e.push(o.a.createElement(M,{key:d,value:d,x1Line:c*l+r*c,y1Line:0,y2Line:s,xText:c*l+c*r*.5,yText:.9*s})),r=0),r++}return[e,n]}(),v=Object(s.a)(f,2);d=v[0],g=v[1];break;case n.Day:var x=function(){for(var e=[],n=[],r=.5*i,s=0;s<t.length;s++){var l=t[s],u=l.getDate().toString();if(n.push(o.a.createElement("text",{key:l.getTime(),y:.8*i,x:c*s+.5*c,className:C},u)),s+1!==t.length&&l.getMonth()!==t[s+1].getMonth()){var d=b(l,a);e.push(o.a.createElement(M,{key:d,value:d,x1Line:c*(s+1),y1Line:0,y2Line:r,xText:c*(s+1)-l.getDate()*c*.5,yText:.9*r}))}}return[e,n]}(),k=Object(s.a)(x,2);d=k[0],g=k[1];break;default:var p=function(){for(var e=[],s=[],u=r===n.HalfDay?2:4,d=.5*i,g=0;g<t.length;g++){var m=t[g],h=Intl.DateTimeFormat(a,{hour:"numeric"}).format(m);if(s.push(o.a.createElement("text",{key:m.getTime(),y:.8*i,x:c*g,className:C,fontFamily:l},h)),0===g||m.getDate()!==t[g-1].getDate()){var f="".concat(m.getDate()," ").concat(b(m,a));e.push(o.a.createElement(M,{key:f,value:f,x1Line:c*g+u*c,y1Line:0,y2Line:d,xText:c*g+u*c*.5,yText:.9*d}))}}return[e,s]}(),T=Object(s.a)(p,2);d=T[0],g=T[1]}return o.a.createElement("g",{className:"calendar",fontSize:u,fontFamily:l},g," ",d)},N="_bar-module__barWrapper__nceC7",j="_bar-module__barHandle__1C4hH",F="_bar-module__barLabel__1Azmc",W="_bar-module__barLabelOutside__1i9jR",H="_bar-module__barBackground__AiPgJ",L=function(e){var t=e.progressPoint,a=e.onMouseDown;return o.a.createElement("polygon",{className:j,points:t,onMouseDown:a})},z=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.barCornerRadius,c=e.onMouseDown;return o.a.createElement("rect",{x:t,y:a,width:n,height:r,className:j,ry:i,rx:i,onMouseDown:c})},R=function(e){var t=e.x,a=e.y,n=e.width,i=e.height,c=e.isSelected,l=e.progressWidth,u=e.barCornerRadius,d=e.text,g=e.hasChild,m=e.arrowIndent,h=e.styles,f=e.onMouseDown,b=Object(r.useRef)(null),v=Object(r.useState)(!0),y=Object(s.a)(v,2),x=y[0],k=y[1];Object(r.useEffect)((function(){b.current&&k(b.current.getBBox().width<n)}),[b,n]);return o.a.createElement("g",{onMouseDown:f},o.a.createElement("rect",{x:t,width:n,y:a,height:i,ry:u,rx:u,fill:c?h.backgroundSelectedColor:h.backgroundColor,className:H}),o.a.createElement("rect",{x:t,width:l,y:a,height:i,ry:u,rx:u,fill:c?h.progressSelectedColor:h.progressColor}),o.a.createElement("text",{x:x?t+.5*n:t+n+m*+g+.2*m,y:a+.5*i,className:x?F:W,ref:b},d))},Y=function(e,t,a,n,r,o,i,c,s,l,u,d,m,h){var f=I(e.start,a,n,r),b=I(e.end,a,n,r),v=B(t,o,i,c),y=Object(g.a)({backgroundColor:m,backgroundSelectedColor:h,progressColor:u,progressSelectedColor:d},e.styles);return Object(g.a)(Object(g.a)({},e),{},{x1:f,x2:b,y:v,index:t,barCornerRadius:s,handleWidth:l,height:i,barChildren:[],styles:y})},I=function(e,t,a,n){var r=~~((e.getTime()-t[0].getTime()+e.getTimezoneOffset()-t[0].getTimezoneOffset())/a);return Math.round((r+(e.getTime()-t[r].getTime()-60*e.getTimezoneOffset()*1e3+60*t[r].getTimezoneOffset()*1e3)/a)*n)},B=function(e,t,a,n){return e*t+n+(t-a)/2},P=function(e,t,a,n,r){var o=new Date((e-t)/n*r+a.getTime());return o=new Date(o.getTime()+6e4*(o.getTimezoneOffset()-a.getTimezoneOffset()))},G=function(e,t,a,n,r,o){var i=Object(g.a)({},a),c=!1;switch(t){case"progress":i.progress=function(e,t){if(e>=t.x2)return 100;if(e<=t.x1)return 0;var a=t.x2-t.x1;return Math.round(100*(e-t.x1)/a)}(e,a),c=i.progress!==a.progress;break;case"start":var l=function(e,t,a){e>=a.x2-2*a.handleWidth&&(e=a.x2-2*a.handleWidth);var n=Math.round((e-a.x1)/t)*t;return a.x1+n}(e,n,a);i.x1=l,(c=i.x1!==a.x1)&&(i.start=P(l,a.x1,a.start,n,r));break;case"end":var u=function(e,t,a){e<=a.x1+2*a.handleWidth&&(e=a.x1+2*a.handleWidth);var n=Math.round((e-a.x2)/t)*t;return a.x2+n}(e,n,a);i.x2=u,(c=i.x2!==a.x2)&&(i.end=P(u,a.x2,a.end,n,r));break;case"move":var d=function(e,t,a){var n=Math.round((e-a.x1)/t)*t,r=a.x1+n;return[r,r+a.x2-a.x1]}(e-o,n,a),m=Object(s.a)(d,2),h=m[0],f=m[1];(c=h!==a.x1)&&(i.start=P(h,a.x1,a.start,n,r),i.end=P(f,a.x2,a.end,n,r),i.x1=h,i.x2=f)}return{isChanged:c,changedTask:i}},A=function(e){var t,a,n,i,c,l,u=e.task,d=e.arrowIndent,g=e.isProgressChangeable,m=e.isDateChangeable,h=e.onEventStart,f=e.isDelete,b=Object(r.useState)(!1),v=Object(s.a)(b,2),y=v[0],x=v[1],k=(t=u.x1,a=u.x2,n=u.progress,(a-t)*n*.01),p=(i=k+u.x1,c=u.y,l=u.height,[i-5,c+l,i+5,c+l,i,c+l-8.66].join(","));return o.a.createElement("g",{className:N,onDoubleClick:function(e){h(e,"dblclick",u)},tabIndex:0,onKeyDown:function(e){switch(e.key){case"Delete":f&&h(e,"delete",u)}},onMouseEnter:function(e){h(e,"mouseenter",u)},onMouseLeave:function(e){h(e,"mouseleave",u)},onFocus:function(){return x(!0)},onBlur:function(){return x(!1)}},o.a.createElement(R,{x:u.x1,y:u.y,width:u.x2-u.x1,height:u.height,progressWidth:k,barCornerRadius:u.barCornerRadius,text:u.name,hasChild:u.barChildren.length>0,arrowIndent:d,styles:u.styles,isSelected:y,onMouseDown:function(e){m&&h(e,"move",u)}}),o.a.createElement("g",{className:"handleGroup"},m&&o.a.createElement("g",null,o.a.createElement(z,{x:u.x1+1,y:u.y+1,width:u.handleWidth,height:u.height-2,barCornerRadius:u.barCornerRadius,onMouseDown:function(e){h(e,"start",u)}}),o.a.createElement(z,{x:u.x2-u.handleWidth-1,y:u.y+1,width:u.handleWidth,height:u.height-2,barCornerRadius:u.barCornerRadius,onMouseDown:function(e){h(e,"end",u)}})),g&&o.a.createElement(L,{progressPoint:p,onMouseDown:function(e){h(e,"progress",u)}})))},Q=function(e){var t=e.taskFrom,a=e.taskTo,n=e.rowHeight,r=e.arrowIndent,i=t.index>a.index?-1:1,c=a.y+a.height/2,s="M ".concat(t.x2," ").concat(t.y+t.height/2," \n  h ").concat(r," \n  v ").concat(i*n/2," \n  H ").concat(a.x1-r," \n  V ").concat(c," \n  h ").concat(r),l="".concat(a.x1,",").concat(c," \n  ").concat(a.x1-5,",").concat(c-5," \n  ").concat(a.x1-5,",").concat(c+5);return o.a.createElement("g",{className:"arrow"},o.a.createElement("path",{strokeWidth:"1.5",d:s,fill:"none"}),o.a.createElement("polygon",{points:l}))},V="_tooltip-module__tooltipDefaultContainer__uW0nC",X="_tooltip-module__tooltipDefaultContainerParagraph__DcYxn",U="_tooltip-module__tooltipDetailsContainer__12ytY",J=function(e){var t=e.x,a=e.y,n=e.task,i=e.fontSize,c=e.fontFamily,l=e.getTooltipContent,u=void 0===l?K:l,d=Object(r.useRef)(null),g=Object(r.useState)(1e3),m=Object(s.a)(g,2),h=m[0],f=m[1],b=Object(r.useState)(a),v=Object(s.a)(b,2),y=v[0],x=v[1];return Object(r.useEffect)((function(){if(d.current){var e=d.current.offsetHeight+.15*d.current.offsetHeight;x(a-e),f(1.1*d.current.scrollWidth)}}),[d,a]),o.a.createElement("foreignObject",{x:t,y:y,width:h,height:1e3},o.a.createElement("div",{ref:d,className:U},u(n,i,c)))},K=function(e,t,a){var n={fontSize:t,fontFamily:a};return o.a.createElement("div",{className:V,style:n},o.a.createElement("b",{style:{fontSize:t+6}},"".concat(e.name,": ").concat(e.start.getDate(),"-").concat(e.start.getMonth()+1,"-").concat(e.start.getFullYear()," - ").concat(e.end.getDate(),"-").concat(e.end.getMonth()+1,"-").concat(e.end.getFullYear())),o.a.createElement("p",{className:X},"Duration: ".concat(~~((e.end.getTime()-e.start.getTime())/864e5)," day(s)")),o.a.createElement("p",{className:X},"Progress: ".concat(e.progress," %")))};function q(e){return void 0!==e.key}var Z=function(e){var t,a=e.tasks,n=e.dates,i=e.rowHeight,c=e.barCornerRadius,l=e.columnWidth,m=e.barFill,h=e.barProgressColor,f=e.barProgressSelectedColor,b=e.barBackgroundColor,v=e.barBackgroundSelectedColor,y=e.headerHeight,x=e.handleWidth,k=e.timeStep,p=e.svg,T=e.arrowColor,w=e.arrowIndent,D=e.fontFamily,E=e.fontSize,C=e.onTasksDateChange,O=e.onDateChange,_=e.onProgressChange,M=e.onDoubleClick,S=e.onTaskDelete,N=e.getTooltipContent,j=null===(t=p.current)||void 0===t?void 0:t.createSVGPoint(),F=Object(r.useState)({action:""}),W=Object(s.a)(F,2),H=W[0],L=W[1],z=Object(r.useState)([]),R=Object(s.a)(z,2),I=R[0],B=R[1],P=Object(r.useState)(0),V=Object(s.a)(P,2),X=V[0],U=V[1],K=Object(r.useState)(0),Z=Object(s.a)(K,2),$=Z[0],ee=Z[1],te=Object(r.useState)(!1),ae=Object(s.a)(te,2),ne=ae[0],re=ae[1];Object(r.useEffect)((function(){var e=n[1].getTime()-n[0].getTime()-60*n[1].getTimezoneOffset()*1e3+60*n[0].getTimezoneOffset()*1e3,t=k*l/e;t!==X&&U(t)}),[l,n,k,X]),Object(r.useEffect)((function(){B(function(e,t,a,n,r,o,i,c,s,l,u,d){var g=t[1].getTime()-t[0].getTime()-60*t[1].getTimezoneOffset()*1e3+60*t[0].getTimezoneOffset()*1e3,m=n*r/100,h=e.map((function(e,r){return Y(e,r,t,g,a,n,m,o,i,c,s,l,u,d)}));return h=h.map((function(e,t){for(var a=e.dependencies||[],n=function(e){var n=h.findIndex((function(t){return t.id===a[e]}));-1!==n&&h[n].barChildren.push(t)},r=0;r<a.length;r++)n(r);return e}))}(a,n,l,i,m,y,c,x,h,f,b,v))}),[a,i,c,l,n,m,x,y,h,f,b,v]);var oe=function(){var e=Object(d.a)(u.a.mark((function e(t,a,n){var r,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!q(t)){e.next=9;break}if("delete"!==a){e.next=7;break}if(!S){e.next=7;break}return e.next=5,S(n);case 5:r=I.filter((function(e){var t;return e.id!==(null===(t=H.selectedTask)||void 0===t?void 0:t.id)})),C(r);case 7:e.next=27;break;case 9:if("mouseenter"!==a){e.next=13;break}H.action||L({action:a,selectedTask:n}),e.next=27;break;case 13:if("mouseleave"!==a){e.next=17;break}"mouseenter"===H.action&&L({action:""}),e.next=27;break;case 17:if("move"!==a){e.next=26;break}if(p.current&&j){e.next=20;break}return e.abrupt("return");case 20:j.x=t.clientX,i=j.matrixTransform(null===(o=p.current.getScreenCTM())||void 0===o?void 0:o.inverse()),ee(i.x-n.x1),L({action:a,selectedTask:n}),e.next=27;break;case 26:"dblclick"===a?M&&M(n):L({action:a,selectedTask:n});case 27:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H.selectedTask&&j&&p.current){e.next=2;break}return e.abrupt("return");case 2:t.preventDefault(),j.x=t.clientX,n=j.matrixTransform(null===(a=p.current.getScreenCTM())||void 0===a?void 0:a.inverse()),r=G(n.x,H.action,H.selectedTask,X,k,$),o=r.isChanged,i=r.changedTask,o&&(B(I.map((function(e){return e.id===i.id?i:e}))),L(Object(g.a)(Object(g.a)({},H),{},{selectedTask:i})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var a=Object(d.a)(u.a.mark((function a(n){var r,o,i,c,s,l,d;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=H.selectedTask,i=H.action,o&&j&&p.current){a.next=3;break}return a.abrupt("return");case 3:if(n.preventDefault(),j.x=n.clientX,c=j.matrixTransform(null===(r=p.current.getScreenCTM())||void 0===r?void 0:r.inverse()),s=G(c.x,i,o,X,k,$),l=s.changedTask,"move"!==i&&"end"!==i&&"start"!==i||!O){a.next=14;break}return a.next=10,O(l);case 10:d=I.map((function(e){return e.id===l.id?l:e})),C(d),a.next=17;break;case 14:if(!_){a.next=17;break}return a.next=17,_(l);case 17:p.current.removeEventListener("mousemove",e),p.current.removeEventListener("mouseup",t),L({action:""}),re(!1);case 21:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();ne||"move"!==H.action&&"end"!==H.action&&"start"!==H.action&&"progress"!==H.action||!p.current||(p.current.addEventListener("mousemove",e),p.current.addEventListener("mouseup",t),re(!0))}),[I,H,X,$,_,k,O,p,ne]),o.a.createElement("g",{className:"content"},o.a.createElement("g",{className:"arrows",fill:T,stroke:T},I.map((function(e){return e.barChildren.map((function(t){return o.a.createElement(Q,{key:"Arrow from ".concat(e.id," to ").concat(a[t].id),taskFrom:e,taskTo:I[t],rowHeight:i,arrowIndent:w})}))}))),o.a.createElement("g",{className:"bar",fontFamily:D,fontSize:E},I.map((function(e){return o.a.createElement(A,{task:e,arrowIndent:w,isProgressChangeable:!!_&&!e.isDisabled,isDateChangeable:!!O&&!e.isDisabled,isDelete:!!S&&!e.isDisabled,onEventStart:oe,key:e.id})}))),o.a.createElement("g",{className:"toolTip"},H.selectedTask&&o.a.createElement(J,{x:H.selectedTask.x2+w+.5*w,y:H.selectedTask.y+i,task:H.selectedTask,fontFamily:D,fontSize:E,getTooltipContent:N})))},$=function(e){var t=e.tasks,a=e.headerHeight,i=void 0===a?50:a,c=e.columnWidth,l=void 0===c?60:c,u=e.rowHeight,d=void 0===u?50:u,g=e.viewMode,b=void 0===g?n.Day:g,y=e.locale,x=void 0===y?"en-GB":y,k=e.barFill,p=void 0===k?60:k,T=e.barCornerRadius,w=void 0===T?3:T,D=e.barProgressColor,C=void 0===D?"#a3a3ff":D,O=e.barProgressSelectedColor,_=void 0===O?"#8282f5":O,M=e.barBackgroundColor,N=void 0===M?"#b8c2cc":M,j=e.barBackgroundSelectedColor,F=void 0===j?"#aeb8c2":j,W=e.handleWidth,H=void 0===W?8:W,L=e.timeStep,z=void 0===L?3e5:L,R=e.arrowColor,Y=void 0===R?"grey":R,I=e.fontFamily,B=void 0===I?"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue":I,P=e.fontSize,G=void 0===P?"14px":P,A=e.arrowIndent,Q=void 0===A?20:A,V=e.todayColor,X=void 0===V?"rgba(252, 248, 227, 0.5)":V,U=e.onDateChange,J=e.onProgressChange,K=e.onDoubleClick,q=e.onTaskDelete,$=e.getTooltipContent,ee=Object(r.useRef)(null),te=Object(r.useState)(t),ae=Object(s.a)(te,2),ne=ae[0],re=ae[1],oe=function(e,t){var a,r=e[0].start,o=e[0].end,i=Object(m.a)(e);try{for(i.s();!(a=i.n()).done;){var c=a.value;c.start<r&&(r=c.start),c.end>o&&(o=c.end)}}catch(s){i.e(s)}finally{i.f()}switch(t){case n.Month:r=h(r,-1,"month"),o=h(o,1,"year"),o=f(o,"year");break;case n.Week:r=f(r,"day"),o=f(o,"day"),r=h(v(r),-7,"day"),o=h(o,1.5,"month");break;default:r=f(r,"day"),o=f(o,"day"),r=h(r,-1,"day"),o=h(o,19,"day")}return[r,o]}(ne,b),ie=Object(s.a)(oe,2),ce=function(e,t,a){for(var r=new Date(e),o=[r];r<t;){switch(a){case n.Month:r=h(r,1,"month");break;case n.Week:r=h(r,7,"day");break;case n.Day:r=h(r,1,"day");break;case n.HalfDay:r=h(r,12,"hour");break;case n.QuarterDay:r=h(r,6,"hour")}o.push(r)}return o}(ie[0],ie[1],b),se={columnWidth:l,gridWidth:ce.length*l,tasks:ne,rowHeight:d,headerHeight:i,dates:ce,todayColor:X},le={dates:ce,locale:x,viewMode:b,headerHeight:i,columnWidth:l,fontFamily:B,fontSize:G},ue={tasks:ne,rowHeight:d,barCornerRadius:w,columnWidth:l,dates:ce,barFill:p,barProgressColor:C,barProgressSelectedColor:_,barBackgroundColor:N,barBackgroundSelectedColor:F,headerHeight:i,handleWidth:H,arrowColor:Y,timeStep:z,fontFamily:B,fontSize:G,arrowIndent:Q,svg:ee,onTasksDateChange:function(e){re(e)},onDateChange:U,onProgressChange:J,onDoubleClick:K,onTaskDelete:q,getTooltipContent:$};return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:l*ce.length,height:i+d*t.length,fontFamily:B,ref:ee},o.a.createElement(E,Object.assign({},se)),o.a.createElement(S,Object.assign({},le)),o.a.createElement(Z,Object.assign({},ue)))},ee=function(e){var t=e.onViewChange;return o.a.createElement("div",{className:"ViewContainer"},o.a.createElement("button",{className:"Button",onClick:function(){return t(n.QuarterDay)}},"Quarter of Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.HalfDay)}},"Half of Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Day)}},"Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Week)}},"Week"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Month)}},"Month"))},te=function(e){var t={fontSize:"14px",fontFamily:"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue",headerHeight:50,rowHeight:50};return e.viewMode===n.Month?t.columnWidth=300:e.viewMode===n.Week&&(t.columnWidth=250),o.a.createElement("div",{className:"Wrapper"},o.a.createElement("div",{className:"GanttTable",style:{fontFamily:t.fontFamily,fontSize:t.fontSize}},o.a.createElement("div",{className:"GanttTable-header",style:{height:t.headerHeight}},o.a.createElement("div",{className:"GanttTable-headerItem",style:{minWidth:150}},o.a.createElement("span",{role:"img","aria-label":"fromDate",className:"GanttTable-icon"},"\ud83d\udcc3"),"Name"),o.a.createElement("div",{className:"GanttTable-headerItem",style:{minWidth:150}},o.a.createElement("span",{role:"img","aria-label":"fromDate",className:"GanttTable-icon"},"\ud83d\udcc5"),"From"),o.a.createElement("div",{className:"GanttTable-headerItem",style:{minWidth:150}},o.a.createElement("span",{role:"img","aria-label":"toDate",className:"GanttTable-icon"},"\ud83d\udcc5"),"To")),e.tasks.map((function(e){return o.a.createElement("div",{className:"GanttTable-row",style:{height:t.rowHeight}},o.a.createElement("div",{className:"GanttTable-cell"},e.name),o.a.createElement("div",{className:"GanttTable-cell"},e.start.toDateString()),o.a.createElement("div",{className:"GanttTable-cell"},e.end.toDateString()))}))),o.a.createElement("div",{style:{overflowX:"scroll"}},o.a.createElement($,Object.assign({},e,t))))},ae=function(){var e=new Date,t=o.a.useState(n.Day),a=Object(s.a)(t,2),r=a[0],i=a[1],c=[{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),2,12,28),name:"Idea",id:"Task 0",progress:45,isDisabled:!0},{start:new Date(e.getFullYear(),e.getMonth(),2),end:new Date(e.getFullYear(),e.getMonth(),4,0,0),name:"Research",id:"Task 1",progress:25,dependencies:["Task 0"]},{start:new Date(e.getFullYear(),e.getMonth(),4),end:new Date(e.getFullYear(),e.getMonth(),8,0,0),name:"Discussion with team",id:"Task 2",progress:10,dependencies:["Task 1"]},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),9,0,0),name:"Developing",id:"Task 3",progress:2,dependencies:["Task 2"]},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),10),name:"Review",id:"Task 4",progress:70,dependencies:["Task 2"]},{start:new Date(e.getFullYear(),e.getMonth(),15),end:new Date(e.getFullYear(),e.getMonth(),16),name:"Release & Eat Burgers",id:"Task 6",progress:e.getMonth(),dependencies:["Task 4"],styles:{progressColor:"#ffbb54",progressSelectedColor:"#ff9e0d"}}];return o.a.createElement("div",null,o.a.createElement(ee,{onViewChange:function(e){return i(e)}}),o.a.createElement(te,{tasks:c,viewMode:r,onDateChange:function(e){console.log("On date change Id:"+e.id)},onTaskDelete:function(e){if(!window.confirm("Are you sure?"))throw"No del Id:"+e.id},onProgressChange:function(e){console.log("On progress change Id:"+e.id)},onDoubleClick:function(e){alert("On Double Click event Id:"+e.id)}}))};c.a.render(o.a.createElement(ae,null),document.getElementById("root"))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.e9f7f4a6.chunk.js.map