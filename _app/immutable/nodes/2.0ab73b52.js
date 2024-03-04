import{s as O,f as I,a as T,g as $,h as y,d as _,c as B,j as m,i as z,r as E,u as D,v as ae,D as ce,o as ue,l as A,m as L,E as K,n as fe,F as U,p as ie,G as X,H as J,x as q,I as he}from"../chunks/scheduler.ced3fe4a.js";import{S as R,i as Y,b as F,d as H,m as N,a as M,t as S,e as P,c as me,g as de}from"../chunks/index.8d286a49.js";import{U as Q,e as C}from"../chunks/UIcon.ddaa82fe.js";import{g as W,I as j,u as ee,M as pe,b as _e,T as te,H as ge}from"../chunks/params.6fc1f437.js";import{M as ve}from"../chunks/MainTitle.f4a7a4b1.js";import{i as be}from"../chunks/index.97b3c5e0.js";function re(t,e,r){const s=t.slice();return s[16]=e[r],s}function ne(t){let e,r,s,l,n,o,u=t[16].name+"",h,w;return{c(){e=I("div"),r=I("img"),n=T(),o=I("span"),h=A(u),w=T(),this.h()},l(g){e=$(g,"DIV",{class:!0});var k=y(e);r=$(k,"IMG",{class:!0,src:!0,alt:!0}),n=B(k),o=$(k,"SPAN",{class:!0});var x=y(o);h=L(x,u),x.forEach(_),w=B(k),k.forEach(_),this.h()},h(){m(r,"class","w-120px h-120px aspect-square"),K(r.src,s=W(t[16].logo))||m(r,"src",s),m(r,"alt",l=t[16].name),m(o,"class","text-center m-t-20px"),m(e,"class","box-content w-150px p-15px col-center")},m(g,k){z(g,e,k),E(e,r),E(e,n),E(e,o),E(o,h),E(e,w)},p(g,k){k&1&&!K(r.src,s=W(g[16].logo))&&m(r,"src",s),k&1&&l!==(l=g[16].name)&&m(r,"alt",l),k&1&&u!==(u=g[16].name+"")&&fe(h,u)},d(g){g&&_(e)}}}function ke(t){let e,r,s,l,n,o,u,h,w,g,k;s=new Q({props:{icon:"i-carbon-chevron-left"}});let x=C(t[0]),d=[];for(let f=0;f<x.length;f+=1)d[f]=ne(re(t,x,f));return h=new Q({props:{icon:"i-carbon-chevron-right"}}),{c(){e=I("div"),r=I("button"),F(s.$$.fragment),l=T(),n=I("div");for(let f=0;f<d.length;f+=1)d[f].c();o=T(),u=I("button"),F(h.$$.fragment),this.h()},l(f){e=$(f,"DIV",{class:!0});var i=y(e);r=$(i,"BUTTON",{class:!0});var p=y(r);H(s.$$.fragment,p),p.forEach(_),l=B(i),n=$(i,"DIV",{class:!0});var a=y(n);for(let c=0;c<d.length;c+=1)d[c].l(a);a.forEach(_),o=B(i),u=$(i,"BUTTON",{class:!0});var v=y(u);H(h.$$.fragment,v),v.forEach(_),i.forEach(_),this.h()},h(){m(r,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(n,"class","row overflow-hidden box-content w-150px"),m(u,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(e,"class","carrousel flex-[0.5] row-center")},m(f,i){z(f,e,i),E(e,r),N(s,r,null),E(e,l),E(e,n);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(n,null);t[11](n),E(e,o),E(e,u),N(h,u,null),w=!0,g||(k=[D(r,"click",t[2]),D(r,"keyup",t[8]),D(r,"keydown",t[9]),D(r,"keypress",t[10]),D(u,"click",t[3]),D(u,"keyup",t[5]),D(u,"keydown",t[6]),D(u,"keypress",t[7])],g=!0)},p(f,[i]){if(i&1){x=C(f[0]);let p;for(p=0;p<x.length;p+=1){const a=re(f,x,p);d[p]?d[p].p(a,i):(d[p]=ne(a),d[p].c(),d[p].m(n,null))}for(;p<d.length;p+=1)d[p].d(1);d.length=x.length}},i(f){w||(M(s.$$.fragment,f),M(h.$$.fragment,f),w=!0)},o(f){S(s.$$.fragment,f),S(h.$$.fragment,f),w=!1},d(f){f&&_(e),P(s),ae(d,f),t[11](null),P(h),g=!1,ce(k)}}}const we=2e3;function xe(t,e,r){let{items:s=[]}=e,l,n,o=0,u=!0;const h=c=>{c?o<s.length-1?r(4,o=o+1):(r(4,o=o-1),u=!1):o>0?r(4,o=o-1):(r(4,o=o+1),u=!0)},w=c=>{clearTimeout(n),n=setTimeout(()=>{h(c),w(u)},we)},g=()=>{clearTimeout(n),u=!1,h(!1),w(u)},k=()=>{clearTimeout(n),u=!0,h(!0),w(u)};ue(()=>{w(!0)});function x(c){U.call(this,t,c)}function d(c){U.call(this,t,c)}function f(c){U.call(this,t,c)}function i(c){U.call(this,t,c)}function p(c){U.call(this,t,c)}function a(c){U.call(this,t,c)}function v(c){ie[c?"unshift":"push"](()=>{l=c,r(1,l)})}return t.$$set=c=>{"items"in c&&r(0,s=c.items)},t.$$.update=()=>{t.$$.dirty&18&&l&&l.scroll({left:o*150,behavior:"smooth"})},[s,l,g,k,o,x,d,f,i,p,a,v]}class Ee extends R{constructor(e){super(),Y(this,e,xe,ke,O,{items:0})}}const se=t=>t===j.Youtube?"0 0 461.001 461.001":t===j.Facebook?"0 0 408.788 408.788":[j.GitHub,j.Search,j.Code].includes(t)?"0 0 16 16":"0 0 24 24";function ye(t){let e,r,s;return{c(){e=X("svg"),r=X("path"),this.h()},l(l){e=J(l,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var n=y(e);r=J(n,"path",{d:!0}),y(r).forEach(_),n.forEach(_),this.h()},h(){m(r,"d",t[2]),m(e,"class","inline-block"),m(e,"viewBox",s=se(t[2])),m(e,"fill",t[1]),m(e,"height",t[0]),m(e,"width",t[0])},m(l,n){z(l,e,n),E(e,r),t[4](e)},p(l,[n]){n&4&&m(r,"d",l[2]),n&4&&s!==(s=se(l[2]))&&m(e,"viewBox",s),n&2&&m(e,"fill",l[1]),n&1&&m(e,"height",l[0]),n&1&&m(e,"width",l[0])},i:q,o:q,d(l){l&&_(e),t[4](null)}}}function Ie(t,e,r){let s,{size:l="30px"}=e,{color:n="var(--main-text)"}=e,{icon:o}=e;function u(h){ie[h?"unshift":"push"](()=>{s=h,r(3,s)})}return t.$$set=h=>{"size"in h&&r(0,l=h.size),"color"in h&&r(1,n=h.color),"icon"in h&&r(2,o=h.icon)},[l,n,o,s,u]}class $e extends R{constructor(e){super(),Y(this,e,Ie,ye,O,{size:0,color:1,icon:2})}}function le(t,e,r){const s=t.slice();return s[7]=e[r],s}function Te(t){let e,r,s,l;return{c(){e=A(t[3]),r=T(),s=A(t[1]),l=A(",")},l(n){e=L(n,t[3]),r=B(n),s=L(n,t[1]),l=L(n,",")},m(n,o){z(n,e,o),z(n,r,o),z(n,s,o),z(n,l,o)},p:q,d(n){n&&(_(e),_(r),_(s),_(l))}}}function oe(t){let e,r,s,l;return r=new $e({props:{icon:_e(t[7].platform),color:"var(--accent-text)",size:"20px"}}),{c(){e=I("a"),F(r.$$.fragment),s=T(),this.h()},l(n){e=$(n,"A",{class:!0,href:!0,target:!0,rel:!0});var o=y(e);H(r.$$.fragment,o),s=B(o),o.forEach(_),this.h()},h(){m(e,"class","decoration-none"),m(e,"href",`${t[6](t[7].link)?"mailto:":""}${t[7].link}`),m(e,"target","_blank"),m(e,"rel","noreferrer")},m(n,o){z(n,e,o),N(r,e,null),E(e,s),l=!0},p:q,i(n){l||(M(r.$$.fragment,n),l=!0)},o(n){S(r.$$.fragment,n),l=!1},d(n){n&&_(e),P(r)}}}function Be(t){let e,r,s,l,n,o,u,h,w,g,k,x,d;document.title=e=ee(t[4],te),n=new ve({props:{classes:"md:text-left ",$$slots:{default:[Te]},$$scope:{ctx:t}}});let f=C(t[2]),i=[];for(let a=0;a<f.length;a+=1)i[a]=oe(le(t,f,a));const p=a=>S(i[a],1,1,()=>{i[a]=null});return x=new Ee({props:{items:t[5]??pe}}),{c(){r=T(),s=I("div"),l=I("div"),F(n.$$.fragment),o=T(),u=I("p"),h=A(t[0]),w=T(),g=I("div");for(let a=0;a<i.length;a+=1)i[a].c();k=T(),F(x.$$.fragment),this.h()},l(a){he("svelte-gorrxo",document.head).forEach(_),r=B(a),s=$(a,"DIV",{class:!0});var c=y(s);l=$(c,"DIV",{class:!0});var b=y(l);H(n.$$.fragment,b),o=B(b),u=$(b,"P",{class:!0});var V=y(u);h=L(V,t[0]),V.forEach(_),w=B(b),g=$(b,"DIV",{class:!0});var Z=y(g);for(let G=0;G<i.length;G+=1)i[G].l(Z);Z.forEach(_),b.forEach(_),k=B(c),H(x.$$.fragment,c),c.forEach(_),this.h()},h(){m(u,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),m(g,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),m(l,"class","md:flex-1 gap-10px"),m(s,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(a,v){z(a,r,v),z(a,s,v),E(s,l),N(n,l,null),E(l,o),E(l,u),E(u,h),E(l,w),E(l,g);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(g,null);E(s,k),N(x,s,null),d=!0},p(a,[v]){(!d||v&16)&&e!==(e=ee(a[4],te))&&(document.title=e);const c={};if(v&1024&&(c.$$scope={dirty:v,ctx:a}),n.$set(c),v&68){f=C(a[2]);let b;for(b=0;b<f.length;b+=1){const V=le(a,f,b);i[b]?(i[b].p(V,v),M(i[b],1)):(i[b]=oe(V),i[b].c(),M(i[b],1),i[b].m(g,null))}for(de(),b=f.length;b<i.length;b+=1)p(b);me()}},i(a){if(!d){M(n.$$.fragment,a);for(let v=0;v<f.length;v+=1)M(i[v]);M(x.$$.fragment,a),d=!0}},o(a){S(n.$$.fragment,a),i=i.filter(Boolean);for(let v=0;v<i.length;v+=1)S(i[v]);S(x.$$.fragment,a),d=!1},d(a){a&&(_(r),_(s)),P(n),ae(i,a),P(x)}}}function ze(t){const{description:e,lastName:r,links:s,name:l,title:n,skills:o}=ge;return[e,r,s,l,n,o,h=>{const w=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!be(h)&&w.test(h)}]}class Ae extends R{constructor(e){super(),Y(this,e,ze,Be,O,{})}}export{Ae as component};