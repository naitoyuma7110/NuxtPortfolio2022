(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{613:function(t,e,n){"use strict";n.r(e);var r=n(473),c=n(471),l=n(603),o=n(604),d=n(602),v=n(519),f=n(531),_=n(535),h=n(532),m=n(530),y=n(520),w=n(601),T=n(202),k=n(610),A=(n(26),n(9),n(53),n(78)),C=n(23),x=(n(4),n(10),n(45),n(58),n(549),n(40),n(551),n(553),n(554),n(555),n(556),n(557),n(558),n(559),n(560),n(561),n(562),n(563),n(564),n(565),n(566),n(567),n(41),n(8),n(82),{asyncData:function(t){return Object(C.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles",{deep:!0}).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{selectedTag:"全ての記事",date:null,trip:{name:"",location:null,start:null,end:null},sizes:["全ての記事","tag1","tag2","tag3","数学","物理","本","転職","統計学","バイオメカニクス","プログラミング","Python","Java Silver"]}},computed:{filteredArticle:function(){var t=this,e=[];return this.articles.forEach((function(article){(article.tags&&article.tags.includes(t.selectedTag)||"全ての記事"===t.selectedTag)&&e.push(article)})),e},articleTags:function(){var t=[],e=[];this.articles.forEach((function(article){article.tags.forEach((function(t){e.push(t)}))}));var n=new Set(e),r=Object(A.a)(n);t.push({name:"全ての記事",count:r.length});for(var c=function(i){var n=e.filter((function(t){return t===r[i]}));t.push({name:r[i],count:n.length})},i=0;i<r.length;i++)c(i);return t}},methods:{toArticles:function(t){this.$router.push({path:"articles/".concat(t)})}}}),j=n(90),component=Object(j.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e(w.a,[e(d.a,{attrs:{cols:"12",sm:"5"}},[e(c.d,{staticClass:"pb-0"},[t._v("記事一覧")]),t._v(" "),e(v.a,{staticClass:"mx-5"}),t._v(" "),e(c.b,{staticClass:"py-0"},[t._v("Articles")])],1)],1),t._v(" "),e(m.a,{attrs:{flat:""}},[e(f.a,[e(h.a,[e(y.a,{attrs:{"align-center":""}},[e("div",[t._v("タグ選択")]),t._v(" "),t.selectedTag?e(l.a,{staticClass:"ml-2",attrs:{close:"全ての記事"!=t.selectedTag},on:{"click:close":function(e){t.selectedTag="全ての記事"}}},[t._v(t._s(t.selectedTag))]):t._e()],1)],1),t._v(" "),e(_.a,[e(o.a,{attrs:{"active-class":"text--accent-4",color:"primary",mandatory:"",column:""}},t._l(t.articleTags,(function(n,i){return e(l.a,{key:i,attrs:{filter:"",value:n},on:{click:function(e){t.selectedTag=n.name}}},[t._v("\n            "+t._s(n.name+"("+n.count+")")+"\n          ")])})),1),t._v(" "),e(k.a,{attrs:{"prepend-inner-icon":"mdi-map-marker",label:"キーワード検索",dense:"",outlined:"",clearable:""}})],1)],1)],1),t._v(" "),e(T.d,{attrs:{group:"","hide-on-leave":""}},t._l(t.filteredArticle,(function(article){return e(r.a,{key:article.slug,staticClass:"my-2",attrs:{outlined:"",hover:""},on:{click:function(e){return t.toArticles(article.slug)}}},[e(c.b,{staticClass:"py-2"},[e("time",{attrs:{datetime:article.createdAt}},[t._v("\n          "+t._s(t.$dateFns.format(new Date(article.createdAt),"yyyy/MM/dd"))+"\n        ")])]),t._v(" "),e(c.d,{staticClass:"py-2"},[t._v("\n        "+t._s(article.title)+"\n      ")]),t._v(" "),e(c.c,[t._v(t._s(article.description))]),t._v(" "),e(c.c,[t._v(t._s(article.slug))])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);