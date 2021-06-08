(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[34],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2427:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>o,metadata:()=>p,toc:()=>c,default:()=>u});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),i=["components"],o={title:"\u5355\u72ec\u7f16\u8bd1JavaScript"},p={unversionedId:"cli/babel",id:"cli/babel",isDocsHomePage:!1,title:"\u5355\u72ec\u7f16\u8bd1JavaScript",description:"\u547d\u4ee4",source:"@site/docs/cli/babel.md",sourceDirName:"cli",slug:"/cli/babel",permalink:"/reskript/docs/cli/babel",version:"current",frontMatter:{title:"\u5355\u72ec\u7f16\u8bd1JavaScript"},sidebar:"docs",previous:{title:"\u8c03\u8bd5\u5355\u4e2a\u7ec4\u4ef6",permalink:"/reskript/docs/cli/play"},next:{title:"\u9879\u76ee\u7ed3\u6784\u5408\u89c4\u68c0\u67e5",permalink:"/reskript/docs/cli/doctor"}},c=[{value:"\u547d\u4ee4",id:"\u547d\u4ee4",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8c03\u8bd5\u6587\u4ef6\u7f16\u8bd1",id:"\u8c03\u8bd5\u6587\u4ef6\u7f16\u8bd1",children:[]},{value:"\u7f16\u8bd1\u6574\u4e2a\u76ee\u5f55",id:"\u7f16\u8bd1\u6574\u4e2a\u76ee\u5f55",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"skr babel"),"\u53ef\u4ee5\u6307\u5b9a\u5355\u4e2a\u6587\u4ef6\u6216\u76ee\u5f55\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--mode [value]     \u8bbe\u7f6e\u6784\u5efa\u7684\u73af\u5883\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4e3adevelopment\u6216production\uff0c\u9ed8\u8ba4\u4e3aproduction\n--no-polyfill      \u5728\u7f16\u8bd1\u65f6\u4e0d\u5f15\u5165core-js\u7684polyfill\n--out [directory]  \u8f93\u51fa\u7684\u76ee\u5f55\uff0c\u53ea\u80fd\u6307\u5b9a\u76ee\u5f55\uff0c\u7f16\u8bd1\u7684\u6587\u4ef6\u6309\u76ee\u5f55\u7ed3\u6784\u8f93\u51fa\u5230\u76ee\u6807\u5185\n--clean            \u5728\u7f16\u8bd1\u524d\u5220\u9664\u76ee\u6807\u76ee\u5f55\u4e2d\u7684\u5168\u90e8\u5185\u5bb9\n--copy             \u5c06\u975eJavaScript\u548cTypeScript\u7684\u6587\u4ef6\u539f\u6837\u590d\u5236\u5230\u8f93\u51fa\u76ee\u5f55\u4e2d\n-h, --help         \u663e\u793a\u5e2e\u52a9\u4fe1\u606f\n")),(0,l.kt)("h2",{id:"\u8c03\u8bd5\u6587\u4ef6\u7f16\u8bd1"},"\u8c03\u8bd5\u6587\u4ef6\u7f16\u8bd1"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u5728\u5f00\u53d1\u4e2d\u9047\u5230\u4e00\u4e2a\u6587\u4ef6\u6e90\u7801\u770b\u4e0a\u53bb\u6ca1\u95ee\u9898\uff0c\u4f46\u5728\u7f16\u8bd1\u540e\u5c31\u6709\u95ee\u9898\uff0c\u5c31\u4f1a\u60f3\u8c03\u8bd5\u4e00\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"babel"),"\u7684\u8f93\u51fa\u3002\u6b64\u65f6\u53ef\u4ee5\u76f4\u63a5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"skr babel"),"\u6307\u5b9a\u5355\u4e2a\u6587\u4ef6\uff0c\u4e14\u4e0d\u4f20\u9012",(0,l.kt)("inlineCode",{parentName:"p"},"--out"),"\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"skr build some/file.js\n")),(0,l.kt)("p",null,"\u6587\u4ef6\u4f1a\u5728\u7f16\u8bd1\u540e\u8f93\u51fa\u5230\u547d\u4ee4\u884c\uff0c\u4e14\u5728\u547d\u4ee4\u884c\u4e2d\u7684\u8f93\u51fa\u5e26\u6709\u8bed\u6cd5\u9ad8\u4eae\u3002"),(0,l.kt)("h2",{id:"\u7f16\u8bd1\u6574\u4e2a\u76ee\u5f55"},"\u7f16\u8bd1\u6574\u4e2a\u76ee\u5f55"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"skr babel"),"\u7684\u8f93\u5165\u6307\u5b9a\u4e3a\u4e00\u4e2a\u76ee\u5f55\u65f6\uff0c\u5c06\u4f1a\u628a\u76ee\u5f55\u4e0b\u6240\u6709\u7684",(0,l.kt)("inlineCode",{parentName:"p"},".js"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".jsx"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".ts"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".tsx"),"\u6587\u4ef6\u8fdb\u884c\u7f16\u8bd1\uff0c\u5e76",(0,l.kt)("strong",{parentName:"p"},"\u4fdd\u7559\u76ee\u5f55\u7ed3\u6784"),"\u5730\u8f93\u51fa\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"--out"),"\u53c2\u6570\u6307\u5b9a\u7684\u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("p",null,"\u4f60\u540c\u6837\u53ef\u4ee5\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"--copy"),"\u53c2\u6570\uff0c\u8fd9\u6837\u5c31\u4f1a\u628a\u5176\u5b83\u7c7b\u578b\u7684\u6587\u4ef6\uff08\u5982",(0,l.kt)("inlineCode",{parentName:"p"},".css"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".png"),"\u7b49\uff09\u539f\u6837\u590d\u5236\u5230\u8f93\u51fa\u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("p",null,"\u4e00\u822c\u7f16\u8bd1\u4e00\u4e2a\u5de5\u5177\u5e93\uff0c\u53ef\u7528\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"skr build src --out=dist --copy --clean\n")))}u.isMDXComponent=!0}}]);