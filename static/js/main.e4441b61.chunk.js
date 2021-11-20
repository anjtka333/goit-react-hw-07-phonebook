(this["webpackJsonpgoit-react-hw-06-phonebook-with-redux-toolkit"]=this["webpackJsonpgoit-react-hw-06-phonebook-with-redux-toolkit"]||[]).push([[0],{17:function(t,e,n){t.exports={btn:"ContactList_btn__MmzeA",ulStyle:"ContactList_ulStyle__3W_KD"}},59:function(t,e,n){"use strict";n.r(e);var c,r,a,o=n(0),u=n.n(o),i=n(11),s=n.n(i),b=n(18),j=n(61),l=n(7),O=n.n(l),f=n(4),d=n(3),h=Object(d.b)("contacts/getContactsRequest"),m=Object(d.b)("contacts/getContactsSuccess"),p=Object(d.b)("contacts/getContactsError"),x=Object(d.b)("contacts/addContactsRequest"),C=Object(d.b)("contacts/addContactsSuccess"),v=Object(d.b)("contacts/addContactsError"),g=Object(d.b)("contacts/removeContactsRequest"),y=Object(d.b)("contacts/removeContactsSuccess"),_=Object(d.b)("contacts/removeContactsError"),w=Object(d.b)("put/filter"),S=n(28),N=n(14),k=n.n(N),A=function(t){return function(e){e(x()),function(t){return k.a.post("http://localhost:4040/contacts",t).then((function(){return Object(S.a)({},t)})).catch((function(t){throw t}))}(t).then((function(t){return e(C(t))})).catch((function(t){return e(v(t.message))}))}},L=function(){return function(t){t(h()),k.a.get("http://localhost:4040/contacts").then((function(t){return t.data})).catch((function(t){throw t})).then((function(e){return t(m(e))})).catch((function(e){return t(p(e.message))}))}},F=function(t){return function(e){e(g()),function(t){return k.a.delete("http://localhost:4040/contacts/"+t).then((function(){return t})).catch((function(t){throw t}))}(t).then((function(t){return e(y(t))})).catch((function(t){return e(_(t.message))}))}},q=n(1),z=function(){var t=Object(f.b)(),e=Object(o.useState)(""),n=Object(b.a)(e,2),c=n[0],r=n[1],a=Object(o.useState)(""),u=Object(b.a)(a,2),i=u[0],s=u[1],l=Object(f.c)((function(t){return t.contacts.items})),d=Object(j.a)(),h=Object(j.a)();return Object(q.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l.some((function(t){return t.name.toLowerCase()===c.toLowerCase()})))alert("".concat(c," is already in contacts"));else{var n={id:Object(j.a)(),name:c,number:i};t(A(n)),r(""),s("")}},className:O.a.container,children:[Object(q.jsx)("label",{htmlFor:d,children:"Name "}),Object(q.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:function(t){r(t.currentTarget.value)},id:d,className:O.a.input}),Object(q.jsx)("label",{htmlFor:h,children:"Number "}),Object(q.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:function(t){s(t.currentTarget.value)},id:h,className:O.a.input}),Object(q.jsx)("button",{className:O.a.btn,type:"submit",children:"Add conttact"})]})},E=n(17),T=n.n(E),J=n(12),R=function(t){return t.contacts.filter},D=Object(J.a)([function(t){return t.contacts.items},R],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),M=function(t){return t.loader},Z=function(t){return t.error},B=function(){var t=Object(f.b)(),e=Object(f.c)(D);return Object(q.jsx)("ul",{className:T.a.ulStyle,children:e.map((function(e){return Object(q.jsxs)("li",{children:[e.name," ",e.number,Object(q.jsx)("button",{className:T.a.btn,type:"button",onClick:function(){t(F(e.id))},children:"Del"})]},e.id)}))})},H=function(t){var e=t.inputStyle,n=Object(f.c)(R),c=Object(f.b)();return Object(q.jsxs)("label",{children:["Find contact by name",Object(q.jsx)("input",{name:"filter",value:n,onChange:function(t){c(w(t.currentTarget.value))},className:e})]})},I=function(){var t=Object(f.b)(),e=Object(f.c)(M),n=Object(f.c)(Z);return Object(o.useEffect)((function(){t(L())}),[]),Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)("h1",{children:"Phonebook"}),Object(q.jsx)(z,{}),Object(q.jsx)("h2",{children:"Contacts"}),e&&Object(q.jsx)("p",{children:" is Loading..."}),Object(q.jsx)(H,{onChange:function(e){t(w(e.currentTarget.value))},inputStyle:O.a.input}),n&&Object(q.jsxs)("p",{children:[" ",n," "]}),Object(q.jsx)(B,{})]})},K=n(6),P=n(2),W=n(29),$=Object(d.c)([],(c={},Object(P.a)(c,C,(function(t,e){var n=e.payload;return[].concat(Object(W.a)(t),[n])})),Object(P.a)(c,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(P.a)(c,m,(function(t,e){return e.payload})),c)),G=Object(d.c)("",Object(P.a)({},w,(function(t,e){return e.payload}))),Q=Object(K.b)({items:$,filter:G}),U=function(t,e){return e.payload},V=function(){return null},X=Object(d.c)(null,(r={},Object(P.a)(r,p,U),Object(P.a)(r,h,V),Object(P.a)(r,v,U),Object(P.a)(r,x,V),Object(P.a)(r,_,U),Object(P.a)(r,g,V),r)),Y=Object(d.c)(!1,(a={},Object(P.a)(a,h,(function(){return!0})),Object(P.a)(a,m,(function(){return!1})),Object(P.a)(a,p,(function(){return!1})),Object(P.a)(a,x,(function(){return!0})),Object(P.a)(a,C,(function(){return!1})),Object(P.a)(a,v,(function(){return!1})),Object(P.a)(a,g,(function(){return!0})),Object(P.a)(a,y,(function(){return!1})),Object(P.a)(a,_,(function(){return!1})),a)),tt=Object(K.b)({contacts:Q,loader:Y,error:X}),et=Object(d.a)({reducer:tt,devTools:!1});s.a.render(Object(q.jsx)(u.a.StrictMode,{children:Object(q.jsx)(f.a,{store:et,children:Object(q.jsx)(I,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={input:"ContactForm_input__1Jwc9",container:"ContactForm_container__1S-HR",btn:"ContactForm_btn__1bCxx"}}},[[59,1,2]]]);
//# sourceMappingURL=main.e4441b61.chunk.js.map