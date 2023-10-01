"use strict";(self.webpackChunk_govuk_react_storybook=self.webpackChunk_govuk_react_storybook||[]).push([[8353],{"../../components/details/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Details});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../lib/src/index.tsx"),polished__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/polished/dist/polished.esm.js"),govuk_colours__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/govuk-colours/lib/index.js"),_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../constants/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const CUSTOM_FOCUS_WIDTH=`${Number((0,polished__WEBPACK_IMPORTED_MODULE_5__.wA)(_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.lT))+1}px`,StyledDetails=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("details").withConfig({displayName:"src__StyledDetails",componentId:"sc-273hbe-0"})(_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.cp.font({size:19}),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.cp.textColour,_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.W0.withWhiteSpace({marginBottom:6}),{display:"block"}),StyledSummary=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("summary").withConfig({displayName:"src__StyledSummary",componentId:"sc-273hbe-1"})({display:"inline-block",position:"relative",marginBottom:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.TF[1],paddingLeft:Number((0,polished__WEBPACK_IMPORTED_MODULE_5__.wA)(_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.TF[4]))+Number((0,polished__WEBPACK_IMPORTED_MODULE_5__.wA)(_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.YF)),color:govuk_colours__WEBPACK_IMPORTED_MODULE_2__.su,cursor:"pointer",":hover":{color:govuk_colours__WEBPACK_IMPORTED_MODULE_2__.oh},":focus":{outline:`${CUSTOM_FOCUS_WIDTH} solid ${govuk_colours__WEBPACK_IMPORTED_MODULE_2__.tL}`,outlineOffset:-1,color:govuk_colours__WEBPACK_IMPORTED_MODULE_2__.E5,background:govuk_colours__WEBPACK_IMPORTED_MODULE_2__.tL},"::-webkit-details-marker":{display:"none"},":before":{content:'""',position:"absolute",top:0,bottom:0,left:0,margin:"auto",..._govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.mC.arrow({direction:"right",base:14}),"[open] > &":_govuk_react_lib__WEBPACK_IMPORTED_MODULE_1__.mC.arrow({direction:"down",base:14})}}),SummaryText=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("span").withConfig({displayName:"src__SummaryText",componentId:"sc-273hbe-2"})({textDecoration:"underline"}),DetailsText=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({displayName:"src__DetailsText",componentId:"sc-273hbe-3"})({padding:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.TF[3],paddingLeft:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.TF[4],borderLeft:`${_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.YF} solid ${govuk_colours__WEBPACK_IMPORTED_MODULE_2__.DU}`,p:{marginTop:0,marginBottom:_govuk_react_constants__WEBPACK_IMPORTED_MODULE_3__.TF[4]},"> :last-child, p:last-child":{marginBottom:0}}),Details=_ref=>{let{summary,children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledDetails,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledSummary,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SummaryText,{children:summary})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DetailsText,{children})]})};Details.displayName="Details",Details.defaultProps={children:void 0,open:!1},Details.displayName="Details";try{Details.displayName="Details",Details.__docgenInfo={description:"Make a page easier to scan by letting users reveal more detailed information only if they need it.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/details\n- https://design-system.service.gov.uk/components/details/",displayName:"Details",props:{children:{defaultValue:{value:"undefined"},description:"The content that will be displayed when details are revealed",name:"children",required:!1,type:{name:"ReactNode"}},open:{defaultValue:{value:"false"},description:"Flag to indicate whether to show component open by default",name:"open",required:!1,type:{name:"boolean"}},summary:{defaultValue:null,description:"Text for the details summary link e.g. Help with nationality",name:"summary",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/details/src/index.tsx#Details"]={docgenInfo:Details.__docgenInfo,name:"Details",path:"../../components/details/src/index.tsx#Details"})}catch(__react_docgen_typescript_loader_error){}},"../../components/details/src/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SetAsOpen:()=>SetAsOpen,WithParagraphContents:()=>WithParagraphContents,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _govuk_react_paragraph__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/paragraph/src/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/details/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Typography/Details",id:"details",component:___WEBPACK_IMPORTED_MODULE_2__.P},paragraphs=["If you’re not sure about your nationality, try to find out from an official document like a passport or national ID card.","We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post."],Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.P,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={summary:"Help with nationality",children:paragraphs[0]};const SetAsOpen=Template.bind({});SetAsOpen.args={open:!0,summary:"Help with nationality",children:paragraphs[0]};const WithParagraphContents=Template.bind({});WithParagraphContents.args={summary:"Help with nationality",open:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_govuk_react_paragraph__WEBPACK_IMPORTED_MODULE_1__.Z,{children:`${paragraphs[0]}\n\n${paragraphs[1]}`})}},"../../components/link/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>Link});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../lib/src/index.tsx");const Link=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)("a").withConfig({shouldForwardProp:prop=>!["noVisitedState","textColour","muted"].includes(prop),displayName:"src__Link",componentId:"sc-1loawqx-0"})(..._govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.common(),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleDefault,_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.printFriendly,(_ref=>{let{muted}=_ref;return muted?_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleMuted:void 0}),(_ref2=>{let{textColour}=_ref2;return textColour?_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleText:void 0}),(_ref3=>{let{noVisitedState}=_ref3;return noVisitedState?_govuk_react_lib__WEBPACK_IMPORTED_MODULE_0__.p4.styleNoVisitedState:void 0}));Link.defaultProps={muted:!1,textColour:!1,noVisitedState:!1},Link.displayName="Link";const __WEBPACK_DEFAULT_EXPORT__=Link;try{Link.displayName="Link",Link.__docgenInfo={description:"Link/Anchor element.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/link\n- https://design-system.service.gov.uk/styles/typography/#links",displayName:"Link",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},muted:{defaultValue:{value:"false"},description:'show link in a "muted" (grey) style',name:"muted",required:!1,type:{name:"boolean"}},textColour:{defaultValue:{value:"false"},description:"ensure link is shown in plain text colour",name:"textColour",required:!1,type:{name:"boolean"}},noVisitedState:{defaultValue:{value:"false"},description:'ensure there is no "visited" style',name:"noVisitedState",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/link/src/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"../../components/link/src/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"../../components/paragraph/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,n:()=>Paragraph});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react_markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-markdown/lib/react-markdown.js"),react_markdown__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../lib/src/index.tsx"),_govuk_react_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/link/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledParagraph=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(react_markdown__WEBPACK_IMPORTED_MODULE_1___default()).withConfig({displayName:"src__StyledParagraph",componentId:"sc-sgc9po-0"})({margin:0,"> p":{margin:0},"> p > code":{padding:"0.2em 0.4em",margin:"0",fontSize:"85%",backgroundColor:"rgba(27,31,35,0.05)",borderRadius:"3px"},"> pre":{padding:"16px",overflow:"auto",fontSize:"85%",lineHeight:"1.45",backgroundColor:"#f6f8fa",borderRadius:"3px"},"> pre > code":{display:"inline",padding:"0",margin:"0",border:"0",overflow:"visible",lineHeight:"inherit",wordWrap:"normal"}},(_ref=>{let{supportingText}=_ref;return _govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__.cp.font({size:supportingText?16:19})}),_govuk_react_lib__WEBPACK_IMPORTED_MODULE_2__.W0.withWhiteSpace({marginBottom:4})),Paragraph=_ref2=>{let{children,...props}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledParagraph,{source:children,escapeHtml:!1,skipHtml:!0,allowedTypes:["paragraph","emphasis","strong","link","inlineCode","code","text"],renderers:{link:props.linkRenderer},...props})};Paragraph.displayName="Paragraph",Paragraph.defaultProps={children:"",supportingText:!1,linkRenderer:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_govuk_react_link__WEBPACK_IMPORTED_MODULE_3__.Z,{...props})},Paragraph.displayName="Paragraph";const __WEBPACK_DEFAULT_EXPORT__=Paragraph;try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"Markdown Formatter.\n\nSupports bold, italic, links, inline code and block code in Markdown ONLY.\nThis is to ensure we follow GDS as closely as possible.\nIt is worth noting that GDS recommends avoiding bold and italics.\n\nBold should be avoided in general as not only can it dilute the message, it will also\ncause Screenreaders to increase the volume of any bold text to reflect the increase in\nfont-weight.\n\n- https://govuk-react.github.io/govuk-react/?path=/docs/paragraph\n- https://design-system.service.gov.uk/styles/typography/",displayName:"Paragraph",props:{children:{defaultValue:{value:""},description:"Text content supporting markdown",name:"children",required:!1,type:{name:"string & ReactNode"}},supportingText:{defaultValue:{value:"false"},description:"Is this paragraph supporting text for another element?",name:"supportingText",required:!1,type:{name:"boolean"}},linkRenderer:{defaultValue:{value:"(props) => <Link {...props} />"},description:"",name:"linkRenderer",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/paragraph/src/index.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"../../components/paragraph/src/index.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}}}]);