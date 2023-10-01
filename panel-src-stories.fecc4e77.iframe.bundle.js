"use strict";(self.webpackChunk_govuk_react_storybook=self.webpackChunk_govuk_react_storybook||[]).push([[948],{"../../components/panel/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,s:()=>Panel});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),govuk_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../lib/src/index.tsx"),_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../constants/src/index.tsx"),polished__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/polished/dist/polished.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const RAW_BORDER_WIDTH=Number((0,polished__WEBPACK_IMPORTED_MODULE_5__.wA)(_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.YF)),StyledPanel=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({displayName:"src__StyledPanel",componentId:"sc-12tinr5-0"})(_govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__.cp.font({size:19}),{boxSizing:"border-box",marginBottom:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.TF[3],padding:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.TF[6]-RAW_BORDER_WIDTH,border:`${_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.YF} solid transparent`,textAlign:"center",[_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.qk.TABLET]:{padding:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.TF[7]-RAW_BORDER_WIDTH},color:govuk_colours__WEBPACK_IMPORTED_MODULE_1__.Cj,background:"#00703c"},_govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__.W0.withWhiteSpace()),StyledTitle=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("h1").withConfig({displayName:"src__StyledTitle",componentId:"sc-12tinr5-1"})({marginTop:0,marginBottom:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.TF[6],":last-child":{marginBottom:0}},_govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__.cp.font({size:48,weight:"bold"})),StyledBody=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({displayName:"src__StyledBody",componentId:"sc-12tinr5-2"})(_govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__.cp.font({size:36})),Panel=_ref=>{let{title,children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledPanel,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledTitle,{children:title}),children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledBody,{children})]})};Panel.displayName="Panel",Panel.defaultProps={children:void 0},Panel.displayName="Panel";const __WEBPACK_DEFAULT_EXPORT__=Panel;try{Panel.displayName="Panel",Panel.__docgenInfo={description:"The panel component is a visible container used on confirmation or results pages to highlight important content.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/panel\n- https://design-system.service.gov.uk/components/panel/",displayName:"Panel",props:{title:{defaultValue:null,description:"Panel title text",name:"title",required:!0,type:{name:"string"}},children:{defaultValue:{value:"undefined"},description:"Panel body text",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/panel/src/index.tsx#Panel"]={docgenInfo:Panel.__docgenInfo,name:"Panel",path:"../../components/panel/src/index.tsx#Panel"})}catch(__react_docgen_typescript_loader_error){}},"../../components/panel/src/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PanelWithHeaderAndHtmlBody:()=>PanelWithHeaderAndHtmlBody,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/panel/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Page & Layout/Panel",id:"panel",component:___WEBPACK_IMPORTED_MODULE_1__.s},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.s,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={title:"Application complete"};const PanelWithHeaderAndHtmlBody=Template.bind({});PanelWithHeaderAndHtmlBody.args={title:"Application complete",children:["Your reference number",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong",{children:"HDJ2123F"})]}},"../../node_modules/govuk-colours/lib/index.js":(__unused_webpack_module,exports)=>{var BLUE=exports.Ej="#1d70b8",FUSCHIA=(exports.Wd="#2e358b","#912b88"),PINK="#d53880",RED="#d4351c",ORANGE=exports.ud="#f47738",YELLOW=exports.$R="#ffdd00",GRASS_GREEN="#85994b",LIGHT_BLUE=exports.F3="#2b8cc4",BLACK=exports.E5="#0b0c0c",GREY_1="#6f777b",GREY_2=exports.FU="#bfc1c3",GREY_3=exports.nx="#f3f2f1",GREY_4=exports.zT="#f8f8f8",WHITE=exports.Cj="#ffffff",LINK_COLOUR=exports.su=BLUE,FOOTER_LINK=(exports.KW=LIGHT_BLUE,exports.oh=LIGHT_BLUE,exports.Pf="#4c2c92",exports.g$="#00703c",exports.lX="#002413",exports.tL=YELLOW,exports.cK=BLACK,exports.d7=GREY_1,exports.DU=GREY_2,exports.h=RED,exports.gX="#2e3133",exports.Ll=GREY_3,exports.gr="#a1acb2",exports.et="#454a4c");exports.ar="#171819",exports.ZR=FOOTER_LINK}}]);