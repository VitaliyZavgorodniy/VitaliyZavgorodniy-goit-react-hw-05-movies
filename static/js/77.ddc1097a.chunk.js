"use strict";(self.webpackChunkreact_router_6_movies_db=self.webpackChunkreact_router_6_movies_db||[]).push([[77],{3087:function(n,t,e){e.d(t,{Z:function(){return P}});var r,i,o,c,a,u,s,l=e(168),d=e(1413),f=e(501),p=e(6871),h=e(6031),m=e(3592),x=e(184),g=h.ZP.div(r||(r=(0,l.Z)(["\n  width: 280px;\n  transform: scale(1);\n  transition: transform ",";\n\n  @media "," {\n    width: 336px;\n  }\n\n  @media "," {\n    width: 305px;\n  }\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.04);\n  }\n"])),(function(n){return n.theme.transition}),m.A.tablet,m.A.desktop),Z=h.ZP.div(i||(i=(0,l.Z)(["\n  /* height: 402px; */\n  margin-bottom: 10px;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: ",";\n\n  @media "," {\n    /* height: 405px; */\n  }\n\n  @media "," {\n    /* height: 449px; */\n  }\n"])),(function(n){return n.theme.skeletonFrom}),m.A.tablet,m.A.desktop),v=h.ZP.picture(o||(o=(0,l.Z)(["\n  width: 100%;\n"]))),b=h.ZP.h3(c||(c=(0,l.Z)(["\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 12px / 14px;\n  color: ",";\n"])),(function(n){return n.theme.mainColor})),j=h.ZP.p(a||(a=(0,l.Z)(["\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 12px / 14px;\n  font-weight: 500;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),w=function(n){var t=n.title,e=n.posterPath,r=n.genres;return(0,x.jsxs)(g,{children:[(0,x.jsx)(Z,{children:(0,x.jsxs)(v,{children:[(0,x.jsx)("source",{srcSet:"https://themoviedb.org/t/p/w342".concat(e),media:"(min-width: 768px)"}),(0,x.jsx)("source",{srcSet:"https://themoviedb.org/t/p/w342".concat(e),media:"(min-width: 1024px)"}),(0,x.jsx)("img",{alt:t,loading:"lazy",src:"https://themoviedb.org/t/p/w342".concat(e)})]})}),(0,x.jsx)(b,{children:t}),(0,x.jsx)(j,{children:r})]})},k=h.ZP.ul(u||(u=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: -20px;\n\n  @media "," {\n    flex-direction: row;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    margin-left: -32px;\n  }\n\n  @media "," {\n    margin-left: -16px;\n  }\n"])),m.A.tablet,m.A.desktop),C=h.ZP.li(s||(s=(0,l.Z)(["\n  margin-left: 20px;\n  margin-top: 20px;\n\n  @media "," {\n    flex-basis: calc((100% - (2 * 32px)) / 2);\n    margin-left: 32px;\n    margin-top: 32px;\n  }\n\n  @media "," {\n    flex-basis: calc((100% - (3 * 16px)) / 3);\n    margin-left: 16px;\n    margin-top: 32px;\n  }\n"])),m.A.tablet,m.A.desktop),P=function(n){var t=n.list,e=(0,p.TH)();return(0,x.jsx)(k,{children:t.length?t.map((function(n){return(0,x.jsx)(C,{children:(0,x.jsx)(f.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,x.jsx)(w,(0,d.Z)({},n))})},n.id)})):null})}},6864:function(n,t,e){var r,i=e(168),o=e(6031),c=e(184),a=o.ZP.button(r||(r=(0,i.Z)(["\n  padding: 10px;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  font-family: ",", sans-serif;\n  transition: background-color ",",\n    color ",";\n\n  &:hover {\n    cursor: pointer;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.altBG}),(function(n){return n.theme.mainColor}),(function(n){return n.theme.mainFF}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.mainColor}),(function(n){return n.theme.accentColor}));t.Z=function(n){var t=n.title,e=n.onClick,r=n.type;return(0,c.jsx)(a,{type:r,onClick:e,children:t})}},2077:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,i,o=e(4942),c=e(885),a=e(2791),u=e(501),s=e(7406),l=e(5610),d=e(3087),f=e(249),p=e(3221),h=e(168),m=e(6031),x=e(6864),g=e(184),Z=m.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  width: 100%;\n"]))),v=m.ZP.input(i||(i=(0,h.Z)(["\n  width: 100%;\n  margin-right: 10px;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid ",";\n  color: ",";\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.mainColor})),b=function(n){var t=n.onSearch,e=(0,a.useState)(""),r=(0,c.Z)(e,2),i=r[0],o=r[1];return(0,g.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),i.trim()&&(t(i),o(""))},children:[(0,g.jsx)(v,{value:i,placeholder:"Search for movies",onChange:function(n){return o(n.target.value)}}),(0,g.jsx)(x.Z,{title:"Find",type:"submit"})]})},j=e(8958),w="query",k=function(n){var t=n.genresList,e=(0,a.useState)(!1),r=(0,c.Z)(e,2),i=r[0],h=r[1],m=(0,a.useState)([]),x=(0,c.Z)(m,2),Z=x[0],v=x[1],k=(0,u.lr)({}),C=(0,c.Z)(k,2),P=C[0],_=C[1];(0,a.useEffect)((function(){var n=P.get(w);n&&S(n)}),[]);var S=function(n){h(!0),_((0,o.Z)({},w,n)),(0,s.on)("en",1,n).then((function(n){h(!1),v((0,j.c)(t,n.list))})).catch((function(n){h(!1),console.error(n)}))};return(0,g.jsxs)(p.Z,{children:[(0,g.jsx)(f.Z,{children:(0,g.jsx)(b,{onSearch:S})}),i?(0,g.jsx)(l.Z,{}):(0,g.jsx)(f.Z,{children:(0,g.jsx)(d.Z,{list:Z})})]})}},8958:function(n,t,e){e.d(t,{c:function(){return i}});var r=function(n,t){if(n.length&&t){var e=t.map((function(t){return n.find((function(n){return n.id===t}))})).map((function(n){return null===n||void 0===n?void 0:n.name})).join(", ");if(e)return e}return""},i=function(n,t){return t.map((function(t){return{id:t.id,title:t.title,posterPath:t.poster_path,genres:r(n,t.genre_ids)}}))}}}]);
//# sourceMappingURL=77.ddc1097a.chunk.js.map