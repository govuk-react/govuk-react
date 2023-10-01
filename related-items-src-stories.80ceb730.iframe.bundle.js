"use strict";(self.webpackChunk_govuk_react_storybook=self.webpackChunk_govuk_react_storybook||[]).push([[9447],{"../../components/heading/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>presets_H1,H2:()=>presets_H2,H3:()=>presets_H3,H4:()=>presets_H4,H5:()=>presets_H5,H6:()=>presets_H6,Z:()=>heading_src});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),src=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../constants/src/index.tsx")),lib_src=__webpack_require__("../lib/src/index.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledHeading=(0,styled_components_browser_esm.ZP)("h1").withConfig({displayName:"heading__StyledHeading",componentId:"sc-1dsobun-0"})(lib_src.cp.textColour,(_ref=>{let{size}=_ref;const actualSize=Number.isNaN(Number(size))?src.nR[size]:size;if(!actualSize)throw Error(`Unknown size ${size} used for heading.`);return{...lib_src.cp.font({size:actualSize,weight:"bold"})}}),{display:"block",marginTop:0},(_ref2=>{let{size}=_ref2;const actualSize=Number.isNaN(Number(size))?src.nR[size]:size,scaleInfo=src.X2[actualSize];return{marginBottom:scaleInfo.mobile.spacing,[src.qk.TABLET]:{marginBottom:scaleInfo.tablet.spacing}}}),lib_src.W0.withWhiteSpace()),Heading=_ref3=>{let{level,size,...props}=_ref3;return level&&(console.warn(`deprecated prop 'level' used in Heading, please replace with an "H${level}" component`),src.tB[level])?(0,jsx_runtime.jsx)(StyledHeading,{size:src.lg[level],...props,as:src.tB[level]}):(0,jsx_runtime.jsx)(StyledHeading,{size,...props})};Heading.displayName="Heading",Heading.defaultProps={level:void 0,size:"XLARGE",children:void 0},Heading.displayName="Heading";try{Heading.displayName="Heading",Heading.__docgenInfo={description:"Use heading tags, such as `<h1>`, `<h2>` and so on, to tag the headings on a page.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/heading\n- https://design-system.service.gov.uk/styles/typography/#headings",displayName:"Heading",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLHeadingElement>"}},size:{defaultValue:{value:"XLARGE"},description:"Visual size level, accepts:\n   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`\n   or a numeric size that fits in the GDS font scale list",name:"size",required:!1,type:{name:"string | number"}},level:{defaultValue:{value:"undefined"},description:"Semantic heading level value between 1 and 6 (deprecated)",name:"level",required:!1,type:{name:"string | number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"never"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"../../components/heading/src/heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}const presets_H1=props=>(0,jsx_runtime.jsx)(Heading,{as:"h1",size:src.lg[1],...props});presets_H1.displayName="H1";const presets_H2=props=>(0,jsx_runtime.jsx)(Heading,{as:"h2",size:src.lg[2],...props});presets_H2.displayName="H2";const presets_H3=props=>(0,jsx_runtime.jsx)(Heading,{as:"h3",size:src.lg[3],...props});presets_H3.displayName="H3";const presets_H4=props=>(0,jsx_runtime.jsx)(Heading,{as:"h4",size:src.lg[4],...props});presets_H4.displayName="H4";const presets_H5=props=>(0,jsx_runtime.jsx)(Heading,{as:"h5",size:src.lg[5],...props});presets_H5.displayName="H5";const presets_H6=props=>(0,jsx_runtime.jsx)(Heading,{as:"h6",size:src.lg[6],...props});presets_H6.displayName="H6";try{presets_H1.displayName="H1",presets_H1.__docgenInfo={description:"",displayName:"H1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H1"]={docgenInfo:presets_H1.__docgenInfo,name:"H1",path:"../../components/heading/src/presets.tsx#H1"})}catch(__react_docgen_typescript_loader_error){}try{presets_H2.displayName="H2",presets_H2.__docgenInfo={description:"",displayName:"H2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H2"]={docgenInfo:presets_H2.__docgenInfo,name:"H2",path:"../../components/heading/src/presets.tsx#H2"})}catch(__react_docgen_typescript_loader_error){}try{presets_H3.displayName="H3",presets_H3.__docgenInfo={description:"",displayName:"H3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H3"]={docgenInfo:presets_H3.__docgenInfo,name:"H3",path:"../../components/heading/src/presets.tsx#H3"})}catch(__react_docgen_typescript_loader_error){}try{presets_H4.displayName="H4",presets_H4.__docgenInfo={description:"",displayName:"H4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H4"]={docgenInfo:presets_H4.__docgenInfo,name:"H4",path:"../../components/heading/src/presets.tsx#H4"})}catch(__react_docgen_typescript_loader_error){}try{presets_H5.displayName="H5",presets_H5.__docgenInfo={description:"",displayName:"H5",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H5"]={docgenInfo:presets_H5.__docgenInfo,name:"H5",path:"../../components/heading/src/presets.tsx#H5"})}catch(__react_docgen_typescript_loader_error){}try{presets_H6.displayName="H6",presets_H6.__docgenInfo={description:"",displayName:"H6",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/presets.tsx#H6"]={docgenInfo:presets_H6.__docgenInfo,name:"H6",path:"../../components/heading/src/presets.tsx#H6"})}catch(__react_docgen_typescript_loader_error){}const heading_src=Heading;try{H1.displayName="H1",H1.__docgenInfo={description:"",displayName:"H1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H1"]={docgenInfo:H1.__docgenInfo,name:"H1",path:"../../components/heading/src/index.tsx#H1"})}catch(__react_docgen_typescript_loader_error){}try{H2.displayName="H2",H2.__docgenInfo={description:"",displayName:"H2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H2"]={docgenInfo:H2.__docgenInfo,name:"H2",path:"../../components/heading/src/index.tsx#H2"})}catch(__react_docgen_typescript_loader_error){}try{H3.displayName="H3",H3.__docgenInfo={description:"",displayName:"H3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H3"]={docgenInfo:H3.__docgenInfo,name:"H3",path:"../../components/heading/src/index.tsx#H3"})}catch(__react_docgen_typescript_loader_error){}try{H4.displayName="H4",H4.__docgenInfo={description:"",displayName:"H4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H4"]={docgenInfo:H4.__docgenInfo,name:"H4",path:"../../components/heading/src/index.tsx#H4"})}catch(__react_docgen_typescript_loader_error){}try{H5.displayName="H5",H5.__docgenInfo={description:"",displayName:"H5",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H5"]={docgenInfo:H5.__docgenInfo,name:"H5",path:"../../components/heading/src/index.tsx#H5"})}catch(__react_docgen_typescript_loader_error){}try{H6.displayName="H6",H6.__docgenInfo={description:"",displayName:"H6",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/heading/src/index.tsx#H6"]={docgenInfo:H6.__docgenInfo,name:"H6",path:"../../components/heading/src/index.tsx#H6"})}catch(__react_docgen_typescript_loader_error){}},"../../components/link/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>Link});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../lib/src/index.tsx");const Link=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)("a").withConfig({shouldForwardProp:prop=>!["noVisitedState","textColour","muted"].includes(prop),displayName:"src__Link",componentId:"sc-1loawqx-0"})(..._govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.common(),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleDefault,_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.printFriendly,(_ref=>{let{muted}=_ref;return muted?_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleMuted:void 0}),(_ref2=>{let{textColour}=_ref2;return textColour?_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleText:void 0}),(_ref3=>{let{noVisitedState}=_ref3;return noVisitedState?_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleNoVisitedState:void 0}));Link.defaultProps={muted:!1,textColour:!1,noVisitedState:!1},Link.displayName="Link";const __WEBPACK_DEFAULT_EXPORT__=Link;try{Link.displayName="Link",Link.__docgenInfo={description:"Link/Anchor element.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/link\n- https://design-system.service.gov.uk/styles/typography/#links",displayName:"Link",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},muted:{defaultValue:{value:"false"},description:'show link in a "muted" (grey) style',name:"muted",required:!1,type:{name:"boolean"}},textColour:{defaultValue:{value:"false"},description:"ensure link is shown in plain text colour",name:"textColour",required:!1,type:{name:"boolean"}},noVisitedState:{defaultValue:{value:"false"},description:'ensure there is no "visited" style',name:"noVisitedState",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/link/src/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"../../components/link/src/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"../../components/list-item/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ListItem,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../constants/src/index.tsx"),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../lib/src/index.tsx");const ListItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)("li").withConfig({displayName:"src__ListItem",componentId:"sc-u4zf5o-0"})(_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.cp.font({size:19}),{marginBottom:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_0__.TF[1]},_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.W0.withWhiteSpace());ListItem.displayName="ListItem";const __WEBPACK_DEFAULT_EXPORT__=ListItem;try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"Use lists to make blocks of text easier to read, and to break information into manageable chunks.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/list-item\n- https://design-system.service.gov.uk/styles/typography/#lists",displayName:"ListItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLIElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/list-item/src/index.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"../../components/list-item/src/index.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}},"../../components/ordered-list/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>OrderedList,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../constants/src/index.tsx"),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../lib/src/index.tsx"),_govuk_react_list_item__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/list-item/src/index.tsx");const OrderedList=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)("ol").withConfig({displayName:"src__OrderedList",componentId:"sc-1392v8j-0"})(_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.cp.font({size:19}),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.cp.textColour,{marginTop:0,"& &":{marginTop:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_0__.TF[2]}},_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.W0.withWhiteSpace({margin:{size:4,direction:"bottom"}}),(_ref=>{let{listStyleType}=_ref;const type=function translateType(type){return{bullet:"disc",number:"decimal"}[type]||type}(listStyleType);return[{listStyleType:type},"none"===type?{paddingLeft:0}:{paddingLeft:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_0__.TF[4]},["disc","decimal"].includes(type)?{[`> ${_govuk_react_list_item__WEBPACK_IMPORTED_MODULE_2__.Z}`]:{marginBottom:0,[_govuk_react_constants__WEBPACK_IMPORTED_MODULE_0__.qk.TABLET]:{marginBottom:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_0__.TF[1]}}}:{[`> ${_govuk_react_list_item__WEBPACK_IMPORTED_MODULE_2__.Z}`]:{marginBottom:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_0__.TF[1]}}]}));OrderedList.defaultProps={listStyleType:void 0},OrderedList.displayName="OrderedList";const __WEBPACK_DEFAULT_EXPORT__=OrderedList;try{OrderedList.displayName="OrderedList",OrderedList.__docgenInfo={description:"Use lists to make blocks of text easier to read, and to break information into manageable chunks.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/ordered-list\n- https://design-system.service.gov.uk/styles/typography/#lists",displayName:"OrderedList",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLOListElement>"}},listStyleType:{defaultValue:{value:"undefined"},description:"",name:"listStyleType",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/ordered-list/src/index.tsx#OrderedList"]={docgenInfo:OrderedList.__docgenInfo,name:"OrderedList",path:"../../components/ordered-list/src/index.tsx#OrderedList"})}catch(__react_docgen_typescript_loader_error){}},"../../components/related-items/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>RelatedItems});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),govuk_colours__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),_govuk_react_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../constants/src/index.tsx"),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../lib/src/index.tsx");const RelatedItems=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)("div").withConfig({displayName:"src__RelatedItems",componentId:"sc-dvwdy9-0"})({borderTop:`10px solid ${govuk_colours__WEBPACK_IMPORTED_MODULE_0__.Ej}`,paddingTop:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_1__.N_.SCALE_1,width:"100%",[_govuk_react_constants__WEBPACK_IMPORTED_MODULE_1__.qk.LARGESCREEN]:{fontSize:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_1__.Kt.SIZE_16,lineHeight:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_1__.Ac.SIZE_16},"> h3":{marginBottom:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_1__.N_.SCALE_2},"> ul":{marginBottom:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_1__.N_.SCALE_4,"> li":{marginBottom:`calc(${_govuk_react_constants__WEBPACK_IMPORTED_MODULE_1__.N_.SCALE_2} + 2px)`}}},_govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__.W0.withWhiteSpace({marginBottom:0}));RelatedItems.displayName="RelatedItems";try{RelatedItems.displayName="RelatedItems",RelatedItems.__docgenInfo={description:"Component showing related content, including topics, guidance and collections.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/related-items\n- https://components.publishing.service.gov.uk/component-guide/related_navigation",displayName:"RelatedItems",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/related-items/src/index.tsx#RelatedItems"]={docgenInfo:RelatedItems.__docgenInfo,name:"RelatedItems",path:"../../components/related-items/src/index.tsx#RelatedItems"})}catch(__react_docgen_typescript_loader_error){}},"../../components/related-items/src/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _govuk_react_heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/heading/src/index.tsx"),_govuk_react_unordered_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/unordered-list/src/index.tsx"),_govuk_react_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/link/src/index.tsx"),_govuk_react_list_item__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../components/list-item/src/index.tsx"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../components/related-items/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/Related items",id:"related-items",component:___WEBPACK_IMPORTED_MODULE_5__.G},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_5__.G,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_heading__WEBPACK_IMPORTED_MODULE_1__.H3,{children:"Travel abroad"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_govuk_react_unordered_list__WEBPACK_IMPORTED_MODULE_2__.Z,{listStyleType:"none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_list_item__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_link__WEBPACK_IMPORTED_MODULE_3__.Z,{href:"https://example.com",children:"Link A"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_list_item__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_link__WEBPACK_IMPORTED_MODULE_3__.Z,{href:"https://example.com",children:"Link B"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_list_item__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_link__WEBPACK_IMPORTED_MODULE_3__.Z,{href:"https://example.com",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"more"})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_heading__WEBPACK_IMPORTED_MODULE_1__.H3,{children:"Travel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_govuk_react_unordered_list__WEBPACK_IMPORTED_MODULE_2__.Z,{listStyleType:"none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_list_item__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_link__WEBPACK_IMPORTED_MODULE_3__.Z,{href:"https://example.com",children:"Link A"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_list_item__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_govuk_react_link__WEBPACK_IMPORTED_MODULE_3__.Z,{href:"https://example.com",children:"Link B"})})]})]});Default.displayName="Default"},"../../components/unordered-list/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>UnorderedList,Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _govuk_react_ordered_list__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/ordered-list/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const UnorderedList=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_govuk_react_ordered_list__WEBPACK_IMPORTED_MODULE_1__.Z,{as:"ul",...props});UnorderedList.displayName="UnorderedList",UnorderedList.defaultProps={listStyleType:void 0},UnorderedList.displayName="UnorderedList";const __WEBPACK_DEFAULT_EXPORT__=UnorderedList;try{UnorderedList.displayName="UnorderedList",UnorderedList.__docgenInfo={description:"Use lists to make blocks of text easier to read, and to break information into manageable chunks.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/ordered-list\n- https://design-system.service.gov.uk/styles/typography/#lists",displayName:"UnorderedList",props:{children:{defaultValue:null,description:"One or more ListItem components",name:"children",required:!1,type:{name:"ReactNode"}},listStyleType:{defaultValue:{value:"undefined"},description:"CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend",name:"listStyleType",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/unordered-list/src/index.tsx#UnorderedList"]={docgenInfo:UnorderedList.__docgenInfo,name:"UnorderedList",path:"../../components/unordered-list/src/index.tsx#UnorderedList"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/govuk-colours/lib/index.js":(__unused_webpack_module,exports)=>{var BLUE=exports.Ej="#1d70b8",FUSCHIA=(exports.Wd="#2e358b","#912b88"),PINK="#d53880",RED="#d4351c",ORANGE=exports.ud="#f47738",YELLOW=exports.$R="#ffdd00",GRASS_GREEN="#85994b",LIGHT_BLUE=exports.F3="#2b8cc4",BLACK=exports.E5="#0b0c0c",GREY_1="#6f777b",GREY_2=exports.FU="#bfc1c3",GREY_3=exports.nx="#f3f2f1",GREY_4=exports.zT="#f8f8f8",WHITE=exports.Cj="#ffffff",LINK_COLOUR=exports.su=BLUE,FOOTER_LINK=(exports.KW=LIGHT_BLUE,exports.oh=LIGHT_BLUE,exports.Pf="#4c2c92",exports.g$="#00703c",exports.lX="#002413",exports.tL=YELLOW,exports.cK=BLACK,exports.d7=GREY_1,exports.DU=GREY_2,exports.h=RED,exports.gX="#2e3133",exports.Ll=GREY_3,exports.gr="#a1acb2",exports.et="#454a4c");exports.ar="#171819",exports.ZR=FOOTER_LINK}}]);