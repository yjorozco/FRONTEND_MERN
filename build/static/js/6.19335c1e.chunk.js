(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{42:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(49);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(45);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},45:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},46:function(e,t,n){"use strict";var a=n(16);n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u}));var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},u=function(e,t){var n,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(u){i.e(u)}finally{i.f()}return r}},49:function(e,t,n){},52:function(e,t,n){"use strict";var a=n(10),r=n(43),i=n(0),c=n.n(i),u=(n(53),n(46)),l=function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(u.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(i.useReducer)(l,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),n=Object(a.a)(t,2),r=n[0],u=n[1],o=function(t){u({type:"CHANGE",val:t.target.value,validators:e.validators})},s=function(){u({type:"TOUCH"})},p=e.id,d=e.onInput,f=r.value,v=r.isValid;Object(i.useEffect)((function(){d(p,f,v)}),[p,f,v,d]);var b="input"===e.element?c.a.createElement("input",{type:e.type,placeholder:e.placeholder,onChange:o,onBlur:s,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:o,value:r.value,onBlur:s});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},53:function(e,t,n){},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(10),r=n(45),i=n(43),c=n(0),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},l=function(e,t){var n=Object(c.useReducer)(u,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],l=r[1];return[i,Object(c.useCallback)((function(e,t,n){l({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},55:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(47),r=n.n(a),i=n(48),c=n(10),u=n(0),l=n.n(u),o=n(1),s=n(52),p=n(44),d=n(46),f=(n(55),n(54)),v=n(51),b=n(42),m=n(15),O=n(50),y=n(11);t.default=function(){var e=Object(o.g)(),t=Object(v.a)(),n=t.isLoading,a=t.error,j=t.sendRequest,h=t.clearError,E=Object(u.useState)(),V=Object(c.a)(E,2),T=V[0],w=V[1],I=Object(o.h)().placeId,g=Object(u.useContext)(y.a),N=Object(f.a)({title:{value:"",isValid:!0},description:{value:"",isValid:!0}},!1),A=Object(c.a)(N,3),C=A[0],P=A[1],x=A[2];if(Object(u.useEffect)((function(){(function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("".concat("https://acad-mern-ve.herokuapp.com/api","/places/").concat(I));case 3:t=e.sent,w(t.place),x({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[j,I]),n)return l.a.createElement("div",{className:"center"},l.a.createElement(m.a,null));if(!T&&!a)return l.a.createElement("div",{className:"center"},l.a.createElement(b.a,null,l.a.createElement("h2",null,"Could not find place!")));var S=function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,j("".concat("https://acad-mern-ve.herokuapp.com/api","/places/").concat(I),"PATCH",JSON.stringify({title:C.inputs.title.value,description:C.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+g.token});case 4:e.push("/"+g.userId+"/"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{error:a,onClear:h}),!n&&T&&l.a.createElement("form",{className:"place-form",onSubmit:S},l.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(d.c)()],errorText:"Please enter a valid title",onInput:P,initialValue:T.title,initialValid:!0}),l.a.createElement(s.a,{id:"description",element:"textarea",label:"Description",validators:[Object(d.b)(5)],errorText:"Please enter a valid description (min. 5 characters)",onInput:P,initialValue:T.description,initialvalid:!0}),l.a.createElement(p.a,{type:"submit",disabled:!C.isValid},"UPDATE PLACE")))}}}]);
//# sourceMappingURL=6.19335c1e.chunk.js.map