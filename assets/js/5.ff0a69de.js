(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{306:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},307:function(t,e,n){var i=n(23),r="["+n(306)+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),a=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},312:function(t,e,n){"use strict";var i=n(1),r=n(307).trim;i({target:"String",proto:!0,forced:n(314)("trim")},{trim:function(){return r(this)}})},314:function(t,e,n){var i=n(2),r=n(306);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},322:function(t,e,n){},323:function(t,e,n){},324:function(t,e,n){},328:function(t,e,n){"use strict";n(322)},329:function(t,e,n){"use strict";n(323)},330:function(t,e,n){"use strict";n(324)},332:function(t,e,n){"use strict";n(93),n(68),n(94);var i={data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;console.log(this),this.$children.forEach((function(e){"Sider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},r=(n(328),n(43)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"429185c2",null);e.a=s.exports},333:function(t,e,n){"use strict";var i={name:"Sider",data:function(){return{visible:!0}}},r=(n(330),n(43)),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"2013c7ed",null);e.a=s.exports},336:function(t,e,n){"use strict";n(329);var i=n(43),r=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"13cb036d",null);e.a=r.exports},337:function(t,e,n){"use strict";var i=n(43),r=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"237c448e",null);e.a=r.exports},338:function(t,e,n){"use strict";var i=n(43),r=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"eb917156",null);e.a=r.exports},368:function(t,e,n){},416:function(t,e,n){"use strict";n(368)},443:function(t,e,n){"use strict";n.r(e);n(44),n(66),n(312);var i=n(332),r=n(338),s=n(337),o=n(336),a=n(333),c={components:{GLayout:i.a,GHeader:r.a,GFooter:s.a,GContent:o.a,GSider:a.a},data:function(){return{content:'\n          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n            <g-header style="height: 50px; background:lightskyblue;">\n              header\n            </g-header>\n            <g-layout>\n              <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">\n                sider\n              </g-sider>\n              <g-content style="height: 100px; background:deepskyblue;">\n                content\n              </g-content>\n            </g-layout>\n            <g-footer style="height: 50px; background:lightskyblue;">\n              footer\n            </g-footer>\n          </g-layout>\n      '.replace(/^ {8}/gm,"").trim()}}},u=(n(416),n(43)),l=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"16px"}},[e("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[e("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("\n      header\n    ")]),this._v(" "),e("g-layout",[e("g-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}},[this._v("\n        sider\n      ")]),this._v(" "),e("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[this._v("\n        content\n      ")])],1),this._v(" "),e("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("\n      footer\n    ")])],1)],1)}),[],!1,null,"0576ddb4",null);e.default=l.exports}}]);