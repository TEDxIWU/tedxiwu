(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t);a(343);var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=a(458),c=a.n(i),s=a(169),u=a.n(s),m=a(142),p=a(170),d=a.n(p),f=a(171),h=a.n(f),E=a(267),g=a(500),b=a.n(g),w=Object(m.withStyles)(function(e){return{card:{height:"100%"}}})(function(e){var t=e.teamMember,a=e.classes;return o.a.createElement(d.a,{className:a.card},t.picture&&o.a.createElement(b.a,{alt:"Picture of "+t.name,fluid:t.picture.fluid}),o.a.createElement(h.a,null,o.a.createElement(E.a,{variant:"headline"},t.name),o.a.createElement(E.a,null,t.title)))}),v=a(185);a.d(t,"pageQuery",function(){return k});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.allContentfulTeam.edges");return o.a.createElement(v.a,{location:this.props.location},o.a.createElement(u.a,{container:!0,spacing:16,alignItems:"stretch"},e.map(function(e){var t=e.node;return o.a.createElement(u.a,{key:t.name+" grid",item:!0,xs:12,sm:6,md:6,lg:4},o.a.createElement(w,{key:t.name,teamMember:t}))})))},t}(o.a.Component),k=(t.default=y,"3390131180")},157:function(e,t,a){var n;e.exports=(n=a(175))&&n.default||n},172:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(145),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(157),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},174:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},185:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=a(142),c=a(167),s=a.n(c),u=a(163),m=a.n(u),p=a(165),d=a.n(p),f=a(149),h=a.n(f),E=a(166),g=a.n(E),b=a(150),w=a.n(b),v=a(280),y=a.n(v),k=a(146),C=a.n(k),x=(a(174),a(32),a(159)),O=a.n(x),T=a(160),P=a.n(T),N=a(162),L=a.n(N),q=a(158),S=a.n(q),D=a(276),M=a.n(D),j=a(277),G=a.n(j),I=a(278),U=a.n(I),Q=a(279),B=a.n(Q),F=a(275),H=a.n(F),R=a(172),A=Object(i.withStyles)(function(e){return{toolbar:Object.assign({},e.mixins.toolbar),title:{paddingTop:3*e.spacing.unit},list:{padding:"0%"}}},{withTheme:!0})(function(e){var t=e.classes,a=e.onClick,n=e.forceShowLogo;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:t.toolbar},o.a.createElement(w.a,{mdUp:!n},o.a.createElement(h.a,{align:"center",className:t.title,variant:"title"},o.a.createElement("span",{style:{color:"#e62b1e"}},"TEDx"),"IWU"))),o.a.createElement(S.a,null),o.a.createElement(O.a,{className:t.list,component:"nav"},o.a.createElement(P.a,{button:!0,onClick:a,component:R.Link,to:"/"},o.a.createElement(L.a,null,o.a.createElement(H.a,null)),"Home"),o.a.createElement(P.a,{button:!0,onClick:a,component:R.Link,to:"/tickets"},o.a.createElement(L.a,null,o.a.createElement(M.a,null)),"Get Tickets"),o.a.createElement(P.a,{button:!0,onClick:a,component:R.Link,to:"/speakers"},o.a.createElement(L.a,null,o.a.createElement(G.a,null)),"Our Speakers"),o.a.createElement(P.a,{button:!0,onClick:a,component:R.Link,to:"team"},o.a.createElement(L.a,null,o.a.createElement(U.a,null)),"Our Team"),o.a.createElement(P.a,{button:!0,onClick:a,component:R.Link,to:"/faq"},o.a.createElement(L.a,null,o.a.createElement(B.a,null)),"FAQs")))}),z=Object(i.withStyles)(function(e){var t,a,n;return{root:{flexGrow:1,zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%",minHeight:"100vh"},appBar:{position:"absolute",marginLeft:240},appBarHide:(t={},t[e.breakpoints.up("md")]={width:"calc(100% - 240px)"},t),navIconHide:(a={},a[e.breakpoints.up("md")]={display:"none"},a),toolbar:e.mixins.toolbar,drawer:{height:"100%"},drawerPaper:(n={width:240,height:"100%"},n[e.breakpoints.up("md")]={position:"relative"},n),content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:3*e.spacing.unit},footer:{textAlign:"center",paddingTop:4*e.spacing.unit},contentfulImage:{width:"150px"}}})(function(e){var t=e.mobileOpen,a=e.handleDrawerOpen,n=e.handleDrawerClose,r=e.pageTitle,l=e.hideMenu,i=void 0!==l&&l,c=e.children,u=e.classes;return o.a.createElement("div",{className:u.root},o.a.createElement(m.a,{className:C()(u.appBar,i?void 0:u.appBarHide)},o.a.createElement(d.a,null,o.a.createElement(g.a,{color:"inherit","aria-label":"Open drawer",onClick:a,className:i?void 0:u.navIconHide},o.a.createElement(y.a,null)),o.a.createElement(h.a,{variant:"title",color:"inherit",noWrap:!0},o.a.createElement("span",{style:{color:"#e62b1e"}},"TEDx"),"IWU ",r))),!i&&o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{mdUp:!0},o.a.createElement(s.a,{variant:"temporary",anchor:"left",open:t,onClose:n,classes:{paper:u.drawerPaper},ModalProps:{keepMounted:!0}},o.a.createElement(A,{onClick:n}))),o.a.createElement(w.a,{smDown:!0,implementation:"css"},o.a.createElement(s.a,{className:u.drawer,variant:"permanent",open:!0,classes:{paper:u.drawerPaper}},o.a.createElement(A,{onClick:n})))),i&&o.a.createElement(s.a,{variant:"temporary",anchor:"left",open:t,onClose:n,classes:{paper:u.drawerPaper},ModalProps:{keepMounted:!0}},o.a.createElement(A,{forceShowLogo:i,onClick:n})),o.a.createElement("main",{className:u.content},o.a.createElement("div",{className:u.toolbar}),c,o.a.createElement("div",{className:u.footer},o.a.createElement("a",{href:"https://www.contentful.com/",rel:"nofollow",target:"_blank"},o.a.createElement("img",{src:"https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",alt:"Powered by Contentful",className:u.contentfulImage})))))}),W=Object(i.createMuiTheme)({palette:{primary:{light:"#484848",main:"#212121",dark:"#000000",contrastText:"#fff"},secondary:{light:"#ff6549",main:"#e62b1e",dark:"#ab0000",contrastText:"#fff"}}}),J=a(281),_=a.n(J),K=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={mobileOpen:!1},t.handleDrawerClose=function(){t.setState({mobileOpen:!1})},t.handleDrawerOpen=function(){t.setState({mobileOpen:!0})},t.capitalizeFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},t}return r()(t,e),t.prototype.render=function(){var e=this.state.mobileOpen,t=this.props,a=t.location.pathname,n=t.children,r=this.capitalizeFirstLetter(a.substring(1)),l="/"===a;return o.a.createElement(_.a,{generateClassName:Object(i.createGenerateClassName)({productionPrefix:a})},o.a.createElement(i.MuiThemeProvider,{theme:W},o.a.createElement(z,{pageTitle:r,handleDrawerClose:this.handleDrawerClose,handleDrawerOpen:this.handleDrawerOpen,mobileOpen:e,hideMenu:l},n)))},t}(o.a.Component);a.d(t,"a",function(){return K})}}]);
//# sourceMappingURL=component---src-pages-team-js-ec2b697ee58ad03d0508.js.map