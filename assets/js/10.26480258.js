(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{443:function(s,t,a){s.exports=a.p+"assets/img/image-20230527172336150.276b78ee.png"},444:function(s,t,a){s.exports=a.p+"assets/img/1460000022283834.927ce342.png"},445:function(s,t,a){s.exports=a.p+"assets/img/1460000022283835.5b695f55.png"},469:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("img",{attrs:{src:a(443),alt:"image-20230527172336150"}})]),s._v(" "),t("h2",{attrs:{id:"不会出现图片无法加载的情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不会出现图片无法加载的情况"}},[s._v("#")]),s._v(" 不会出现图片无法加载的情况")]),s._v(" "),t("ul",[t("li",[s._v("图片资源路径如果不是英文")]),s._v(" "),t("li",[s._v("图片资源是相对(短)路径(不以 ./ ../开始 )")])]),s._v(" "),t("h2",{attrs:{id:"问题描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" 问题描述")]),s._v(" "),t("ul",[t("li",[s._v("Vuepress 本身使用的是 webpack")]),s._v(" "),t("li",[s._v("图片引用使用的应该是 url-loader/file-loader")]),s._v(" "),t("li",[s._v("*.md 文件的编译使用的是 markdown-it")])]),s._v(" "),t("ol",[t("li",[s._v("如果图片资源的引用是使用 url-loader , 那么短路径访问的就不再是相对路径,而是 node_modules 目录下资源.所以,在 vuepress 中的路径资源必须是以 ./ or ../开始")]),s._v(" "),t("li",[s._v("markdown-it 会对路径做一个encode 操作, 具体转换由 mdurl 执行")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(444),alt:"img"}})]),s._v(" "),t("p",[s._v("https://github.com/markdown-it/markdown-it/blob/575cfeab8acd2d59d637e856d3a205c6e81419cb/lib/index.js#L47")]),s._v(" "),t("p",[s._v("编写markdown-it插件")]),s._v(" "),t("p",[t("img",{attrs:{src:a(445),alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm i markdown"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("it"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("encode\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将其注入vuepress 配置文件中\nvuepress/config.js")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .....")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("markdown")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ......")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("extendMarkdown")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("md")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      md"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"markdown-it-disable-url-encode"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);