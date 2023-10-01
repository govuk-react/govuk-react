"use strict";(self.webpackChunk_govuk_react_storybook=self.webpackChunk_govuk_react_storybook||[]).push([[6133],{"../../components/breadcrumbs/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Breadcrumbs});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),lib=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),src=__webpack_require__("../constants/src/index.tsx"),lib_src=__webpack_require__("../lib/src/index.tsx");const atoms_link=(0,styled_components_browser_esm.ZP)("a").withConfig({displayName:"link__Link",componentId:"sc-1rdpl6e-0"})(...lib_src.p4.common(),lib_src.p4.styleText);try{link.displayName="link",link.__docgenInfo={description:"",displayName:"link",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/breadcrumbs/src/atoms/link/index.tsx#link"]={docgenInfo:link.__docgenInfo,name:"link",path:"../../components/breadcrumbs/src/atoms/link/index.tsx#link"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const CHEVRON_BORDER_COLOUR=lib.d7,BreadcrumbsContainer=(0,styled_components_browser_esm.ZP)("div").withConfig({displayName:"src__BreadcrumbsContainer",componentId:"sc-12g859m-0"})(lib_src.cp.font({size:16}),lib_src.cp.textColour,{marginTop:src.TF[3],marginBottom:src.TF[2]},lib_src.W0.withWhiteSpace()),BreadcrumbsList=(0,styled_components_browser_esm.ZP)("ol").withConfig({displayName:"src__BreadcrumbsList",componentId:"sc-12g859m-1"})({margin:0,padding:0,listStyleType:"none",display:"block"}),BreadcrumbsListItem=(0,styled_components_browser_esm.ZP)("li").withConfig({displayName:"src__BreadcrumbsListItem",componentId:"sc-12g859m-2"})({display:"inline-block",position:"relative",marginBottom:src.TF[1],marginLeft:src.TF[2],paddingLeft:src.TF[2]+5.655,"::before":{content:"''",display:"block",position:"absolute",top:"-1px",bottom:"1px",left:7-11.31+1,width:7,height:7,margin:"auto 0",transform:"rotate(45deg)",border:"solid",borderWidth:"1px 1px 0 0",borderColor:CHEVRON_BORDER_COLOUR},":first-child":{marginLeft:0,paddingLeft:0,"::before":{content:"none",display:"none"}}}),Breadcrumbs=_ref=>{let{children,...props}=_ref;return(0,jsx_runtime.jsx)(BreadcrumbsContainer,{...props,children:(0,jsx_runtime.jsx)(BreadcrumbsList,{children:Array.isArray(children)?react.Children.map(children,((child,i)=>child?(0,jsx_runtime.jsx)(BreadcrumbsListItem,{children:child}):null)):(0,jsx_runtime.jsx)(BreadcrumbsListItem,{children})})})};Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.Link=atoms_link,Breadcrumbs.displayName="Breadcrumbs";try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:"The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/breadcrumbs\n- https://design-system.service.gov.uk/components/breadcrumbs/",displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"Breadcrumbs contents",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/breadcrumbs/src/index.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"../../components/breadcrumbs/src/index.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}try{Link.displayName="Breadcrumbs.Link",Link.__docgenInfo={description:"",displayName:"Breadcrumbs.Link",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/breadcrumbs/src/index.tsx#Breadcrumbs.Link"]={docgenInfo:Breadcrumbs.Link.__docgenInfo,name:"Breadcrumbs.Link",path:"../../components/breadcrumbs/src/index.tsx#Breadcrumbs.Link"})}catch(__react_docgen_typescript_loader_error){}},"../../components/breadcrumbs/src/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/breadcrumbs/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/Breadcrumbs",id:"breadcrumbs",component:___WEBPACK_IMPORTED_MODULE_1__.O},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.O,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.O.Link,{href:"/section",children:"Section"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.O.Link,{href:"/section/sub-section",children:"Sub-section"}),"Current page"]});Default.displayName="Default"},"../../node_modules/govuk-colours/lib/index.js":(__unused_webpack_module,exports)=>{var BLUE=exports.Ej="#1d70b8",FUSCHIA=(exports.Wd="#2e358b","#912b88"),PINK="#d53880",RED="#d4351c",ORANGE=exports.ud="#f47738",YELLOW=exports.$R="#ffdd00",GRASS_GREEN="#85994b",LIGHT_BLUE=exports.F3="#2b8cc4",BLACK=exports.E5="#0b0c0c",GREY_1="#6f777b",GREY_2=exports.FU="#bfc1c3",GREY_3=exports.nx="#f3f2f1",GREY_4=exports.zT="#f8f8f8",WHITE=exports.Cj="#ffffff",LINK_COLOUR=exports.su=BLUE,FOOTER_LINK=(exports.KW=LIGHT_BLUE,exports.oh=LIGHT_BLUE,exports.Pf="#4c2c92",exports.g$="#00703c",exports.lX="#002413",exports.tL=YELLOW,exports.cK=BLACK,exports.d7=GREY_1,exports.DU=GREY_2,exports.h=RED,exports.gX="#2e3133",exports.Ll=GREY_3,exports.gr="#a1acb2",exports.et="#454a4c");exports.ar="#171819",exports.ZR=FOOTER_LINK}}]);