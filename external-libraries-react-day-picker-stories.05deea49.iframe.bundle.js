"use strict";(globalThis.webpackChunkabtion_component_library=globalThis.webpackChunkabtion_component_library||[]).push([[538],{"./stories/external-libraries/react-day-picker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_day_picker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-day-picker/dist/esm/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/date-fns/format.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react-day-picker/src/style.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const __WEBPACK_DEFAULT_EXPORT__={title:"External Libraries/react-day-picker"},Default=()=>{const[selected,setSelected]=react__WEBPACK_IMPORTED_MODULE_0__.useState();let footer=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Please pick a day."});return selected&&(footer=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p",{children:["You picked ",(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.GP)(selected,"PP"),"."]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_day_picker__WEBPACK_IMPORTED_MODULE_1__.hv,{mode:"single",selected,onSelect:setSelected,footer})};Default.displayName="Default",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(): JSX.Element => {\n  const [selected, setSelected] = React.useState<Date>();\n  let footer = <p>Please pick a day.</p>;\n  if (selected) {\n    footer = <p>You picked {format(selected, "PP")}.</p>;\n  }\n  return <DayPicker mode="single" selected={selected} onSelect={setSelected} footer={footer} />;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);