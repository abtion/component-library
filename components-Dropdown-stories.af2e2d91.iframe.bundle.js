/*! For license information please see components-Dropdown-stories.af2e2d91.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkabtion_component_library=globalThis.webpackChunkabtion_component_library||[]).push([[139],{"./node_modules/@heroicons/react/24/solid/ChevronDownIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/react/index.js");const ForwardRef=React.forwardRef((function ChevronDownIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",clipRule:"evenodd"}))}));module.exports=ForwardRef},"./stories/components/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dropdown_stories});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/lodash.debounce/index.js");var useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;function useEventListener(eventName,handler,element,options){const savedHandler=(0,react.useRef)(handler);useIsomorphicLayoutEffect((()=>{savedHandler.current=handler}),[handler]),(0,react.useEffect)((()=>{const targetElement=(null==element?void 0:element.current)??window;if(!targetElement||!targetElement.addEventListener)return;const listener=event=>{savedHandler.current(event)};return targetElement.addEventListener(eventName,listener,options),()=>{targetElement.removeEventListener(eventName,listener,options)}}),[eventName,element,options])}var ChevronDownIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/ChevronDownIcon.js"),ChevronDownIcon_default=__webpack_require__.n(ChevronDownIcon),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Dropdown=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./components/Dropdown/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Dropdown.Z,options);Dropdown.Z&&Dropdown.Z.locals&&Dropdown.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Sizes=function(Sizes){return Sizes.Small="sm",Sizes.Medium="md",Sizes.Large="lg",Sizes}({});function Dropdown_Dropdown({active,onClickAction,options,size=Sizes.Large}){const[isOpen,setIsOpen]=(0,react.useState)(!1),ref=(0,react.useRef)(null),optionClasses=option=>classnames_default()("Dropdown__option",{Dropdown__active:option==active?.key,[`Dropdown__option--${size}`]:size}),dropdownClasses=classnames_default()("Dropdown",{[`Dropdown--${size}`]:size}),buttonClasses=classnames_default()("Dropdown__button",{"Dropdown__button-active":isOpen,[`Dropdown__button--${size}`]:size}),optionsClasses=classnames_default()("Dropdown__options",{[`Dropdown__options--${size}`]:size}),arrowClasses=classnames_default()("Dropdown__button-arrow",{[`Dropdown__button-arrow--${size}`]:size});!function useOnClickOutside(ref,handler,eventType="mousedown"){useEventListener(eventType,(event=>{const target=event.target;target&&target.isConnected&&(Array.isArray(ref)?ref.every((r=>r.current&&!r.current.contains(target))):ref.current&&!ref.current.contains(target))&&handler(event)}))}(ref,(()=>{setIsOpen(!1)}));return(0,jsx_runtime.jsx)("div",{className:"h-52",children:(0,jsx_runtime.jsxs)("div",{className:dropdownClasses,ref,children:[(0,jsx_runtime.jsxs)("div",{onClick:()=>setIsOpen(!isOpen),className:buttonClasses,children:[(0,jsx_runtime.jsx)("span",{children:active?.text}),(0,jsx_runtime.jsx)("div",{className:arrowClasses,children:(0,jsx_runtime.jsx)(ChevronDownIcon_default(),{className:"h-4 w-4"})})]}),isOpen&&(0,jsx_runtime.jsx)("div",{className:optionsClasses,children:options.map(((option,index)=>(0,jsx_runtime.jsx)("div",{className:optionClasses(option.key),onClick:()=>(option=>{onClickAction(option),setIsOpen(!1)})(option),children:option.text},index)))})]})})}Dropdown_Dropdown.displayName="Dropdown";try{Dropdown_Dropdown.displayName="Dropdown",Dropdown_Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"OptionObject | undefined"}},onClickAction:{defaultValue:null,description:"",name:"onClickAction",required:!0,type:{name:"(value: OptionObject) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"OptionObject[]"}},size:{defaultValue:{value:"Sizes.Large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown_Dropdown.__docgenInfo,name:"Dropdown",path:"components/Dropdown/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}const Dropdown_stories={title:"Components/🚧 Dropdown",component:Dropdown_Dropdown,argTypes:{onClickAction:{action:!0}}},Default={args:{active:{key:"1",text:"25"},options:[{key:"1",text:"25"},{key:"2",text:"50"},{key:"3",text:"100"},{key:"4",text:"150"}],size:Sizes.Medium}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: ({\n    active: {\n      key: "1",\n      text: "25"\n    },\n    options: [{\n      key: "1",\n      text: "25"\n    }, {\n      key: "2",\n      text: "50"\n    }, {\n      key: "3",\n      text: "100"\n    }, {\n      key: "4",\n      text: "150"\n    }],\n    size: Sizes.Medium\n  } as DropdownProps)\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./components/Dropdown/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@layer components{.Dropdown{position:relative;cursor:pointer;width:auto}.Dropdown--lg{min-width:200px}.Dropdown__button{--tw-bg-opacity:1;background-color:rgb(var(--color-neutral-50) / var(--tw-bg-opacity));width:100%;height:100%;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:1.75rem;padding-left:0.25rem;border-radius:0.5rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--color-neutral-500) / var(--tw-border-opacity));position:relative;display:inline-flex;margin-left:auto;margin-right:auto;text-transform:capitalize}.Dropdown__button-arrow{position:absolute;top:0.5rem;right:0.25rem}.Dropdown__button-arrow--sm{top:0.375rem}.Dropdown__button-active{--tw-border-opacity:1;border-color:rgb(var(--color-primary) / var(--tw-border-opacity))}.Dropdown__button--sm{height:32px;padding-top:5px;width:70px;padding-left:0.25rem;padding-bottom:0.25rem;font-size:0.875rem;line-height:1.25rem}.Dropdown__options{position:absolute;top:1.5rem;left:0px;--tw-bg-opacity:1;background-color:rgb(var(--color-neutral-50) / var(--tw-bg-opacity));border-radius:0.5rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--color-neutral-500) / var(--tw-border-opacity));--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);padding:0.25rem;text-transform:capitalize;margin-left:auto;margin-right:auto;width:100%;max-height:416px;overflow-y:scroll;z-index:50}.Dropdown__options--sm{width:70px;top:1.25rem}.Dropdown__option:hover{--tw-bg-opacity:1;background-color:rgb(var(--color-primary-50) / var(--tw-bg-opacity))}.Dropdown__option{margin-left:-0.25rem;margin-right:-0.25rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0.25rem;padding-bottom:0.25rem}.Dropdown__option--sm{font-size:0.875rem;line-height:1.25rem}.Dropdown__active{--tw-bg-opacity:1;background-color:rgb(var(--color-light) / var(--tw-bg-opacity))}}","",{version:3,sources:["<no source>","webpack://./components/Dropdown/index.scss"],names:[],mappings:"AAAA,kBCCE,UAAA,iBAAA,CACA,cAAA,CACA,UAFA,CAIA,cACE,eAAA,CAIA,kBAAA,iBAAA,CAAA,oEAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CAAA,sBAAA,CAAA,qBAAA,CAAA,oBAAA,CACA,oBAAA,CAAA,gBAAA,CAAA,kBAAA,CAAA,qBAAA,CAAA,qEAAA,CACA,iBAAA,CACA,mBAAA,CACA,gBAAA,CAAA,iBAAA,CACA,yBARA,CAWE,wBAAA,iBAAA,CAAA,UAAA,CAAA,aAAA,CAGE,4BAAA,YAAA,CAKF,yBAAA,qBAAA,CAAA,iEAAA,CAGF,sBACE,WAAA,CACA,eAAA,CACA,UAAA,CACA,oBAAA,CAAA,sBAAA,CACA,kBAAA,CAAA,mBAAA,CAKF,mBAAA,iBAAA,CAAA,UAAA,CAAA,QAAA,CAAA,iBAAA,CAAA,oEAAA,CACA,oBAAA,CAAA,gBAAA,CAAA,kBAAA,CAAA,qBAAA,CAAA,qEAAA,CAAA,yEAAA,CAAA,6FAAA,CAAA,sGAAA,CACA,eAAA,CACA,yBAAA,CACA,gBAAA,CAAA,iBAAA,CACA,UAAA,CACA,gBAAA,CACA,iBAAA,CACA,UARA,CAUA,uBACE,UAAA,CACA,WAAA,CAKF,wBAAA,iBAAA,CAAA,oEAAA,CACA,kBAAA,oBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,qBAAA,CAAA,mBAAA,CAAA,sBAAA,CAGE,sBAAA,kBAAA,CAAA,mBAAA,CAKF,kBAAA,iBAAA,CAAA,+DAAA,EDpEJ",sourcesContent:[null,".Dropdown {\n  @apply relative;\n  @apply cursor-pointer;\n  @apply w-auto;\n\n  &--lg {\n    min-width: 200px;\n  }\n\n  &__button {\n    @apply bg-neutral-50;\n    @apply w-full;\n    @apply h-full;\n    @apply pr-7 pl-1 py-1;\n    @apply border border-solid border-neutral-500 rounded-lg;\n    @apply relative;\n    @apply inline-flex;\n    @apply mx-auto;\n    @apply capitalize;\n\n    &-arrow {\n      @apply absolute top-2 right-1;\n\n      &--sm {\n        @apply top-1.5;\n      }\n    }\n\n    &-active {\n      @apply border-primary;\n    }\n\n    &--sm {\n      height: 32px;\n      padding-top: 5px;\n      width: 70px;\n      @apply pl-1 pb-1;\n      @apply text-sm;\n    }\n  }\n\n  &__options {\n    @apply absolute top-6 left-0 bg-neutral-50 capitalize;\n    @apply border border-solid border-neutral-500 rounded-lg shadow;\n    @apply p-1;\n    @apply capitalize;\n    @apply mx-auto;\n    @apply w-full;\n    max-height: calc(40px * 10 + 16px);\n    @apply overflow-y-scroll;\n    @apply z-50;\n\n    &--sm {\n      width: 70px;\n      @apply top-5;\n    }\n  }\n\n  &__option {\n    @apply hover:bg-primary-50;\n    @apply -mx-1 px-1 py-1;\n\n    &--sm {\n      @apply text-sm;\n    }\n  }\n\n  &__active {\n    @apply bg-light;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/lodash.debounce/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var NAN=NaN,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),objectToString=Object.prototype.toString,nativeMax=Math.max,nativeMin=Math.min,now=function(){return root.Date.now()};function isObject(value){var type=typeof value;return!!value&&("object"==type||"function"==type)}function toNumber(value){if("number"==typeof value)return value;if(function isSymbol(value){return"symbol"==typeof value||function isObjectLike(value){return!!value&&"object"==typeof value}(value)&&objectToString.call(value)==symbolTag}(value))return NAN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var result=wait-(time-lastCallTime);return maxing?nativeMin(result,maxWait-(time-lastInvokeTime)):result}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}}}]);