(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[740],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>s,kt:()=>u});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,m=d["".concat(l,".").concat(u)]||d[u]||k[u]||a;return t?n.createElement(m,p(p({ref:r},s),{},{components:t})):n.createElement(m,p({ref:r},s))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6168:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>s,default:()=>d});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),p=["components"],i={title:"\u4f7f\u7528Web Worker"},l=void 0,c={unversionedId:"advanced/web-worker",id:"advanced/web-worker",isDocsHomePage:!1,title:"\u4f7f\u7528Web Worker",description:"reSKRipt\u5185\u7f6e\u4e86\u5bf9Web Worker\u7684\u652f\u6301\uff0c\u672c\u6587\u4f1a\u7b80\u5355\u5730\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u5730\u7f16\u5199\u4e00\u4e2aworker\u3002",source:"@site/docs/advanced/web-worker.md",sourceDirName:"advanced",slug:"/advanced/web-worker",permalink:"/reskript/docs/advanced/web-worker",version:"current",frontMatter:{title:"\u4f7f\u7528Web Worker"},sidebar:"docs",previous:{title:"\u6307\u5b9a\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",permalink:"/reskript/docs/advanced/browsers-list"},next:{title:"\u8c03\u8bd5\u5355\u4e2a\u7ec4\u4ef6",permalink:"/reskript/docs/advanced/debug-component"}},s=[{value:"\u7f16\u5199worker",id:"\u7f16\u5199worker",children:[]},{value:"\u5173\u4e8e\u5f3a\u7c7b\u578b",id:"\u5173\u4e8e\u5f3a\u7c7b\u578b",children:[]}],k={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},k,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u5185\u7f6e\u4e86\u5bf9",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers"},"Web Worker"),"\u7684\u652f\u6301\uff0c\u672c\u6587\u4f1a\u7b80\u5355\u5730\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u5730\u7f16\u5199\u4e00\u4e2aworker\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199worker"},"\u7f16\u5199worker"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u4e2d\uff0c\u5982\u679c\u4e00\u4e2a\u811a\u672c\u6587\u4ef6\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},".worker.{ts,js}"),"\u4f5c\u4e3a\u540e\u7f00\uff0c\u5219\u4f1a\u9ed8\u8ba4\u88ab\u7f16\u8bd1\u6210\u4e00\u4e2aWeb Worker\u7684\u5b9e\u73b0\u3002\u8fd9\u4e00\u529f\u80fd\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/worker-loader"},"worker-loader"),"\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u4f60\u53ea\u9700\u8981\u5728\u4f60\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"xxx.worker.ts"),"\u4e2d\u7f16\u5199\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const ctx: Worker = self as any;\n\nctx.postMessage({foo: 'foo'});\nctx.addEventListener('message', event => console.log(event));\n")),(0,a.kt)("p",null,"\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"skr build"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"skr dev"),"\u65f6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u4f1a\u81ea\u52a8\u7f16\u8bd1\u6210\u4e00\u4e2aWeb Worker\u7c7b\u3002\u4f7f\u7528\u65b9\u53ef\u4ee5\u6309\u5982\u4e0b\u7684\u65b9\u5f0f\u53bb\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import MyWorker from './xxx.worker';\n\nconst worker = new Worker();\n\nworker.onmessage = event => {\n    // ...\u5904\u7406\u4e8b\u4ef6\n};\n")),(0,a.kt)("p",null,"\u5177\u4f53\u7684API\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API"},"Web Worker API"),"\u4e86\u89e3\u3002"),(0,a.kt)("h2",{id:"\u5173\u4e8e\u5f3a\u7c7b\u578b"},"\u5173\u4e8e\u5f3a\u7c7b\u578b"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8eTypeScript\u5e76\u65e0\u6cd5\u77e5\u9053",(0,a.kt)("inlineCode",{parentName:"p"},".worker.ts"),"\u4f1a\u88ab\u7f16\u8bd1\u6210\u4e00\u4e2aWeb Worker\u7c7b\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"\u5f15\u7528\u5b83\u65f6\u7684\u7c7b\u578b\u63a8\u65ad\u662f\u9519\u8bef\u7684\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u516c\u5171\u7c7b\u578b\u6587\u4ef6\u5939\u91cc\uff08\u6211\u4eec\u63a8\u8350\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"src/interface"),"\u8fd9\u4e2a\u6587\u4ef6\u5939\uff09\u91cc\u589e\u52a0\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"worker.d.ts"),"\u6587\u4ef6\uff0c\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'declare module "*.worker.ts" {\n    class WebpackWorker extends Worker {\n        constructor();\n    }\n\n    export default WebpackWorker;\n}\n')),(0,a.kt)("p",null,"\u4f9d\u9760\u8fd9\u4e2a\u7c7b\u578b\u58f0\u660e\uff0cTypeScript\u53ef\u4ee5\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},".worker.ts"),"\u6587\u4ef6\u8bc6\u522b\u4e3a\u4e00\u4e2a\u7c7b\uff0c\u5f53\u7136\u4f9d\u65e7\u65e0\u6cd5\u63a8\u5bfc\u51fa\u5f3a\u7c7b\u578b\u7684\u4e8b\u4ef6\u7c7b\u578b\u7b49\u3002"))}d.isMDXComponent=!0}}]);