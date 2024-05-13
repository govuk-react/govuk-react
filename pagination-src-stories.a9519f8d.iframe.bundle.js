"use strict";(self.webpackChunk_govuk_react_storybook=self.webpackChunk_govuk_react_storybook||[]).push([[3541],{"../../node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../components/pagination/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>Pagination});__webpack_require__("../../node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),src=__webpack_require__("../constants/src/index.tsx"),lib_src=__webpack_require__("../lib/src/index.tsx"),lib=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),icons_src=__webpack_require__("../icons/src/index.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const PaginationWrapper=(0,styled_components_browser_esm.ZP)("li").withConfig({displayName:"anchor__PaginationWrapper",componentId:"sc-2udijf-0"})({boxSizing:"border-box",margin:0,padding:0,listStyleType:"none",fontFamily:src.$q,fontWeight:400,textTransform:"none",fontSize:src.Kt.SIZE_20,lineHeight:src.Ac.SIZE_16,width:"100%",[src.qk.LARGESCREEN]:{fontSize:src.Kt.SIZE_27,lineHeight:src.Ac.SIZE_16},"> a":{boxSizing:"border-box",color:lib.Ej,fill:"currentColor",padding:src.N_.SCALE_3,backgroundColor:lib.Cj,textDecoration:"none",outlineColor:"transparent",display:"flex",flexDirection:"column",alignItems:"center",width:"100%",":hover":{backgroundColor:lib.zT},":focus":{outline:`3px solid ${lib.$R}`},":visited":{color:lib.Wd}}},(_ref=>{let{previousPage}=_ref;return{marginRight:previousPage?"3px":void 0," > a":{alignItems:previousPage?"flex-start":void 0}," > a div":{justifyContent:previousPage?"flex-start":void 0," > svg":{height:previousPage?"13px":void 0,width:previousPage?"17px":void 0,marginRight:previousPage?"10px":void 0}}}}),(_ref2=>{let{nextPage}=_ref2;return{" > a":{alignItems:nextPage?"flex-end":void 0}," > a div":{justifyContent:nextPage?"flex-end":void 0," > svg":{height:nextPage?"13px":void 0,width:nextPage?"17px":void 0,marginLeft:nextPage?"10px":void 0}}}})),InnerWrap=(0,styled_components_browser_esm.ZP)("div").withConfig({displayName:"anchor__InnerWrap",componentId:"sc-2udijf-1"})({display:"flex",alignItems:"center",width:"100%"}),PageTitle=(0,styled_components_browser_esm.ZP)("span").withConfig({displayName:"anchor__PageTitle",componentId:"sc-2udijf-2"})({fontSize:src.Kt.SIZE_14,lineHeight:src.Ac.SIZE_14,textDecoration:"underline",[src.qk.LARGESCREEN]:{fontSize:src.Kt.SIZE_16,lineHeight:src.Ac.SIZE_16}}),Anchor=(0,styled_components_browser_esm.ZP)("a").withConfig({displayName:"anchor__Anchor",componentId:"sc-2udijf-3"})({}),PaginationAnchor=_ref3=>{let{previousPage,nextPage,children,pageTitle,...props}=_ref3;return(0,jsx_runtime.jsx)(PaginationWrapper,{previousPage,nextPage,children:(0,jsx_runtime.jsxs)(Anchor,{...props,children:[(0,jsx_runtime.jsxs)(InnerWrap,{children:[previousPage&&(0,jsx_runtime.jsx)(icons_src.Xd,{}),children,nextPage&&(0,jsx_runtime.jsx)(icons_src.ol,{})]}),pageTitle&&(0,jsx_runtime.jsx)(PageTitle,{children:pageTitle})]})})};PaginationAnchor.displayName="PaginationAnchor";const src_anchor=PaginationAnchor,StyledList=(0,styled_components_browser_esm.ZP)("ul").withConfig({displayName:"src__StyledList",componentId:"sc-elluw3-0"})(lib_src.cp.font({size:19}),{boxSizing:"border-box",display:"flex",flexDirection:"column",marginTop:src.TF[5],padding:src.TF[2],justifyContent:"space-between",width:"100%",[src.qk.LARGESCREEN]:{flexDirection:"row"}},lib_src.W0.withWhiteSpace({marginBottom:6})),Pagination=props=>(0,jsx_runtime.jsx)(StyledList,{...props});Pagination.displayName="Pagination",Pagination.displayName="Pagination",Pagination.Anchor=src_anchor;try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"Navigational links that allow users to navigate within a series of pages or elements.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/pagination\n- https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation",displayName:"Pagination",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/pagination/src/index.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"../../components/pagination/src/index.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}},"../../components/pagination/src/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PaginationDefaultReactRouterLink:()=>PaginationDefaultReactRouterLink,PaginationWithNumbersAnchorTag:()=>PaginationWithNumbersAnchorTag,PaginationWithNumbersJustWithNextPageAnchorTag:()=>PaginationWithNumbersJustWithNextPageAnchorTag,PaginationWithNumbersJustWithNextPageReactRouterLink:()=>PaginationWithNumbersJustWithNextPageReactRouterLink,PaginationWithNumbersJustWithPreviousPageAnchorTag:()=>PaginationWithNumbersJustWithPreviousPageAnchorTag,PaginationWithNumbersJustWithPreviousPageReactRouterLink:()=>PaginationWithNumbersJustWithPreviousPageReactRouterLink,PaginationWithNumbersReactRouterLink:()=>PaginationWithNumbersReactRouterLink,PaginationWithTitlesAnchorTag:()=>PaginationWithTitlesAnchorTag,PaginationWithTitlesReactRouterLink:()=>PaginationWithTitlesReactRouterLink,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-router-dom/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/pagination/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/Pagination",id:"pagination",component:___WEBPACK_IMPORTED_MODULE_1__.t},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{href:"#prev",previousPage:!0,children:"Previous page"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{href:"#next",nextPage:!0,children:"Next page"})]};const PaginationDefaultReactRouterLink=Template.bind({});PaginationDefaultReactRouterLink.args={children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"/prev",previousPage:!0,children:"Previous page"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"/next",nextPage:!0,children:"Next page"})})]};const PaginationWithNumbersAnchorTag=Template.bind({});PaginationWithNumbersAnchorTag.args={children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{href:"#prev",previousPage:!0,pageTitle:"1 of 3",children:"Previous page"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{href:"#next",nextPage:!0,pageTitle:"3 of 3",children:"Next page"})]};const PaginationWithNumbersReactRouterLink=Template.bind({});PaginationWithNumbersReactRouterLink.args={children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"#prev",previousPage:!0,pageTitle:"1 of 3",children:"Previous page"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"#next",nextPage:!0,pageTitle:"3 of 3",children:"Next page"})})]};const PaginationWithTitlesAnchorTag=Template.bind({});PaginationWithTitlesAnchorTag.args={children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{href:"#prev",previousPage:!0,pageTitle:"Applying for a provisional lorry or bus licence",children:"Previous"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{href:"#next",nextPage:!0,pageTitle:"Driver CPC part 1 test: theory",children:"Next"})]};const PaginationWithTitlesReactRouterLink=Template.bind({});PaginationWithTitlesReactRouterLink.args={children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"#prev",previousPage:!0,pageTitle:"Applying for a provisional lorry or bus licence",children:"Previous"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"#next",nextPage:!0,pageTitle:"Driver CPC part 1 test: theory",children:"Next"})})]};const PaginationWithNumbersJustWithNextPageAnchorTag=Template.bind({});PaginationWithNumbersJustWithNextPageAnchorTag.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{href:"#next",nextPage:!0,pageTitle:"2 of 12",children:"Next page"})};const PaginationWithNumbersJustWithNextPageReactRouterLink=Template.bind({});PaginationWithNumbersJustWithNextPageReactRouterLink.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"#next",nextPage:!0,pageTitle:"2 of 12",children:"Next page"})})};const PaginationWithNumbersJustWithPreviousPageAnchorTag=Template.bind({});PaginationWithNumbersJustWithPreviousPageAnchorTag.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{href:"#prev",previousPage:!0,pageTitle:"11 of 12",children:"Previous page"})};const PaginationWithNumbersJustWithPreviousPageReactRouterLink=Template.bind({});PaginationWithNumbersJustWithPreviousPageReactRouterLink.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t.Anchor,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"#prev",previousPage:!0,pageTitle:"11 of 12",children:"Previous page"})})}},"../icons/src/ArrowLeft/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _SVGBase_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../icons/src/SVGBase/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ArrowLeft=_ref=>{let{fill="currentColor",title="arrow left",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SVGBase_index__WEBPACK_IMPORTED_MODULE_1__.Z,{viewBox:"-0.2 0 17 14",title,fill,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"})})};ArrowLeft.displayName="ArrowLeft";const __WEBPACK_DEFAULT_EXPORT__=ArrowLeft;try{ArrowLeft.displayName="ArrowLeft",ArrowLeft.__docgenInfo={description:"",displayName:"ArrowLeft",props:{title:{defaultValue:{value:"arrow left"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/ArrowLeft/index.tsx#ArrowLeft"]={docgenInfo:ArrowLeft.__docgenInfo,name:"ArrowLeft",path:"../icons/src/ArrowLeft/index.tsx#ArrowLeft"})}catch(__react_docgen_typescript_loader_error){}},"../icons/src/ArrowRight/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _SVGBase_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../icons/src/SVGBase/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ArrowRight=_ref=>{let{fill="currentColor",title="arrow right",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SVGBase_index__WEBPACK_IMPORTED_MODULE_1__.Z,{viewBox:"0 0 17 14",title,fill,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"})})};ArrowRight.displayName="ArrowRight";const __WEBPACK_DEFAULT_EXPORT__=ArrowRight;try{ArrowRight.displayName="ArrowRight",ArrowRight.__docgenInfo={description:"",displayName:"ArrowRight",props:{title:{defaultValue:{value:"arrow right"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/ArrowRight/index.tsx#ArrowRight"]={docgenInfo:ArrowRight.__docgenInfo,name:"ArrowRight",path:"../icons/src/ArrowRight/index.tsx#ArrowRight"})}catch(__react_docgen_typescript_loader_error){}},"../icons/src/ButtonArrow/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _SVGBase_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../icons/src/SVGBase/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ButtonArrow=_ref=>{let{fill="currentColor",title="ButtonArrow",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SVGBase_index__WEBPACK_IMPORTED_MODULE_1__.Z,{viewBox:"0 0 706 860",title,fill,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M.152 0h252.993l452.108 430H452.261z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fillOpacity:"0.5",d:"M0 860h252.993L705.1 430H452.108z"})]})})};ButtonArrow.displayName="ButtonArrow";const __WEBPACK_DEFAULT_EXPORT__=ButtonArrow;try{ButtonArrow.displayName="ButtonArrow",ButtonArrow.__docgenInfo={description:"",displayName:"ButtonArrow",props:{title:{defaultValue:{value:"ButtonArrow"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/ButtonArrow/index.tsx#ButtonArrow"]={docgenInfo:ButtonArrow.__docgenInfo,name:"ButtonArrow",path:"../icons/src/ButtonArrow/index.tsx#ButtonArrow"})}catch(__react_docgen_typescript_loader_error){}},"../icons/src/IconImportant/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _SVGBase_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../icons/src/SVGBase/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const IconImportant=_ref=>{let{fill="currentColor",title="icon important",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SVGBase_index__WEBPACK_IMPORTED_MODULE_1__.Z,{viewBox:"0 0 35.000000 35.000000",preserveAspectRatio:"xMidYMid meet",title,fill,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("g",{transform:"translate(0.000000,35.000000) scale(0.100000,-0.100000)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M100 332 c-87 -48 -125 -155 -82 -232 48 -87 155 -125 232 -82 87 48\n125 155 82 232 -48 87 -155 125 -232 82z m100 -122 c0 -53 -2 -60 -20 -60 -18\n0 -20 7 -20 60 0 53 2 60 20 60 18 0 20 -7 20 -60z m0 -111 c0 -12 -7 -19 -20\n-19 -19 0 -28 28 -14 43 11 11 34 -5 34 -24z"})})})};IconImportant.displayName="IconImportant";const __WEBPACK_DEFAULT_EXPORT__=IconImportant;try{IconImportant.displayName="IconImportant",IconImportant.__docgenInfo={description:"",displayName:"IconImportant",props:{title:{defaultValue:{value:"icon important"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/IconImportant/index.tsx#IconImportant"]={docgenInfo:IconImportant.__docgenInfo,name:"IconImportant",path:"../icons/src/IconImportant/index.tsx#IconImportant"})}catch(__react_docgen_typescript_loader_error){}},"../icons/src/SVGBase/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledSvg=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)("svg").withConfig({displayName:"SVGBase__StyledSvg",componentId:"sc-16k4s64-0"})({display:"block"}),SVG=_ref=>{let{children,title,fill="currentColor",width="100%",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledSvg,{version:"1.1",height:"100%",fill,width,...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title",{children:title}),children]})};SVG.displayName="SVG";const __WEBPACK_DEFAULT_EXPORT__=SVG},"../icons/src/Search/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _SVGBase_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../icons/src/SVGBase/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Search=_ref=>{let{fill="currentColor",title="Search",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SVGBase_index__WEBPACK_IMPORTED_MODULE_1__.Z,{viewBox:"0 0 57 57",title,fill,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"})})};Search.displayName="Search";const __WEBPACK_DEFAULT_EXPORT__=Search;try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{title:{defaultValue:{value:"Search"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/Search/index.tsx#Search"]={docgenInfo:Search.__docgenInfo,name:"Search",path:"../icons/src/Search/index.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}},"../icons/src/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_SVGBase_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../icons/src/SVGBase/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const fadeInOut=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.F4)(["0%{opacity:0.250075;}0.01%{opacity:0.25;}0.03%{opacity:1;}100%{opacity:0.250075;}"]),Rect=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.rect.withConfig({displayName:"Spinner__Rect",componentId:"sc-1f5b0zr-0"})(["animation:"," 1s infinite linear;animation-delay:","ms;"],fadeInOut,(props=>83*props.animationDelay)),Spinner=_ref=>{let{className="icon-spinner",fill="currentColor",title="Loading",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SVGBase_index__WEBPACK_IMPORTED_MODULE_1__.Z,{className,viewBox:"-25 -25 50 50",preserveAspectRatio:"xMidYMid meet",title,fill,...rest,children:Array(12).fill(1).map(((el,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Rect,{fill,width:"12",height:"5",rx:"2.5",ry:"2.5",animationDelay:i,transform:`rotate(${30*i}, 0, 2) translate(10 0)`,opacity:"0"},i)))})};Spinner.displayName="Spinner";const __WEBPACK_DEFAULT_EXPORT__=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:{value:"icon-spinner"},description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:{value:"Loading"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"../icons/src/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"../icons/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$j:()=>_Spinner__WEBPACK_IMPORTED_MODULE_4__.Z,HN:()=>_Search__WEBPACK_IMPORTED_MODULE_3__.Z,Nm:()=>_ButtonArrow__WEBPACK_IMPORTED_MODULE_5__.Z,Xd:()=>_ArrowLeft__WEBPACK_IMPORTED_MODULE_0__.Z,lr:()=>_IconImportant__WEBPACK_IMPORTED_MODULE_2__.Z,ol:()=>_ArrowRight__WEBPACK_IMPORTED_MODULE_1__.Z});var _ArrowLeft__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../icons/src/ArrowLeft/index.tsx"),_ArrowRight__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../icons/src/ArrowRight/index.tsx"),_IconImportant__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../icons/src/IconImportant/index.tsx"),_Search__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../icons/src/Search/index.tsx"),_Spinner__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../icons/src/Spinner/index.tsx"),_ButtonArrow__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../icons/src/ButtonArrow/index.tsx");__webpack_require__("../icons/src/SVGBase/index.tsx");try{ArrowLeft.displayName="ArrowLeft",ArrowLeft.__docgenInfo={description:"",displayName:"ArrowLeft",props:{title:{defaultValue:{value:"arrow left"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/index.tsx#ArrowLeft"]={docgenInfo:ArrowLeft.__docgenInfo,name:"ArrowLeft",path:"../icons/src/index.tsx#ArrowLeft"})}catch(__react_docgen_typescript_loader_error){}try{ArrowRight.displayName="ArrowRight",ArrowRight.__docgenInfo={description:"",displayName:"ArrowRight",props:{title:{defaultValue:{value:"arrow right"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/index.tsx#ArrowRight"]={docgenInfo:ArrowRight.__docgenInfo,name:"ArrowRight",path:"../icons/src/index.tsx#ArrowRight"})}catch(__react_docgen_typescript_loader_error){}try{IconImportant.displayName="IconImportant",IconImportant.__docgenInfo={description:"",displayName:"IconImportant",props:{title:{defaultValue:{value:"icon important"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/index.tsx#IconImportant"]={docgenInfo:IconImportant.__docgenInfo,name:"IconImportant",path:"../icons/src/index.tsx#IconImportant"})}catch(__react_docgen_typescript_loader_error){}try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{title:{defaultValue:{value:"Search"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/index.tsx#Search"]={docgenInfo:Search.__docgenInfo,name:"Search",path:"../icons/src/index.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:{value:"icon-spinner"},description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:{value:"Loading"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"../icons/src/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}try{ButtonArrow.displayName="ButtonArrow",ButtonArrow.__docgenInfo={description:"",displayName:"ButtonArrow",props:{title:{defaultValue:{value:"ButtonArrow"},description:"",name:"title",required:!1,type:{name:"string"}},fill:{defaultValue:{value:"currentColor"},description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/index.tsx#ButtonArrow"]={docgenInfo:ButtonArrow.__docgenInfo,name:"ButtonArrow",path:"../icons/src/index.tsx#ButtonArrow"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/govuk-colours/lib/index.js":(__unused_webpack_module,exports)=>{var BLUE=exports.Ej="#1d70b8",FUSCHIA=(exports.Wd="#2e358b","#912b88"),PINK="#d53880",RED="#d4351c",ORANGE=exports.ud="#f47738",YELLOW=exports.$R="#ffdd00",GRASS_GREEN="#85994b",LIGHT_BLUE=exports.F3="#2b8cc4",BLACK=exports.E5="#0b0c0c",GREY_1="#6f777b",GREY_2=exports.FU="#bfc1c3",GREY_3=exports.nx="#f3f2f1",GREY_4=exports.zT="#f8f8f8",WHITE=exports.Cj="#ffffff",LINK_COLOUR=exports.su=BLUE,FOOTER_LINK=(exports.KW=LIGHT_BLUE,exports.oh=LIGHT_BLUE,exports.Pf="#4c2c92",exports.g$="#00703c",exports.lX="#002413",exports.tL=YELLOW,exports.cK=BLACK,exports.d7=GREY_1,exports.DU=GREY_2,exports.h=RED,exports.gX="#2e3133",exports.Ll=GREY_3,exports.gr="#a1acb2",exports.et="#454a4c");exports.ar="#171819",exports.ZR=FOOTER_LINK}}]);