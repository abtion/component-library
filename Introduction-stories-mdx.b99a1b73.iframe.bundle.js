"use strict";(globalThis.webpackChunkabtion_component_library=globalThis.webpackChunkabtion_component_library||[]).push([[984],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./stories/Introduction.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>Introduction_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({p:"p",ul:"ul",li:"li"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Introduction to the component library"}),"\n",(0,jsx_runtime.jsx)("h1",{children:"Abtion Component Library"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Abtion Component Library is a collection react components which can be used across a variety of stacks that we use in Abtion."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The components are meant to serve as example code that can be either used 1:1 or tweaked to fit the project at hand."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:['Buttons, alerts and similar "basic" components follow ',(0,jsx_runtime.jsx)("a",{href:"https://www.figma.com/file/GltSa6wywdjEYrW6hzhi61/Abtion-Designsystem?type=design&node-id=0-1&mode=design",target:"_BLANK",children:"Abtion's Design System"}),". These components should be very easy to drop into template-based projects. Other components might require more work."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The library is however meant to be useful rather than perfect. Components are not meant to eventually follow the design system, the goal is for them to be useful."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This Storybook - known as ",(0,jsx_runtime.jsx)("b",{children:"Muffibook"})," - showcases and documents each component."]}),"\n",(0,jsx_runtime.jsx)("h2",{children:"Component stages (legend)"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Components are prefixed with an emoji which represents the state of the\ncomponent:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["✅: Complete: Well-tested and aligned with ",(0,jsx_runtime.jsx)("a",{href:"https://www.figma.com/file/GltSa6wywdjEYrW6hzhi61/Abtion-Designsystem?type=design&node-id=0-1&mode=design",target:"_BLANK",children:"Abtion's Design System"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"🚧: In progress: Meant to become a ✅, but not entirely done yet."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"🔎: Experimental: Could be any component which might be useful across projects. These might become ✅'s over time, but it's not a requirement."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'As the library is meant to be useful rather than perfect, it\'s not important that components will eventually become "complete".'}),"\n",(0,jsx_runtime.jsx)("h2",{children:"Contributing"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["See ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/abtion/component-library#how-to-contribute",target:"_BLANK",children:"https://github.com/abtion/component-library#how-to-contribute"})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction to the component library",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Introduction_stories=componentMeta,__namedExportsOrder=["__page"]}}]);