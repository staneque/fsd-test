(self.webpackChunkadvanced_fe=self.webpackChunkadvanced_fe||[]).push([[959],{"./src/widgets/Sidebar/ui/Sidebar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DarkTheme:()=>DarkTheme,LightTheme:()=>LightTheme,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Sidebar_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Sidebar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Sidebar_module.A,options);const ui_Sidebar_module=Sidebar_module.A&&Sidebar_module.A.locals?Sidebar_module.A.locals:void 0;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var classNames=function classNames(){for(var result="",_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];for(var _i=0,_args=args;_i<_args.length;_i++){var arg=_args[_i];if("string"==typeof arg)result+=" "+arg;else if(arg&&arg.constructor===Object){var classes=Object.entries(arg).filter((function(_ref){var value=_slicedToArray(_ref,2)[1];return Boolean(value)})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]})).join(" ");result+=classes?" "+classes:""}else if(Array.isArray(arg)){var _classes=arg.filter((function(arg){return Boolean})).join(" ");result+=_classes?" "+_classes:""}else result+=""}return result.trim()};__webpack_require__("./node_modules/void-elements/index.js");Object.create(null);const alreadyWarned={};function utils_warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),function utils_warn(){if(console&&console.warn){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]=`react-i18next:: ${args[0]}`),console.warn(...args)}}(...args))}const loadedClb=(i18n,cb)=>()=>{if(i18n.isInitialized)cb();else{const initialized=()=>{setTimeout((()=>{i18n.off("initialized",initialized)}),0),cb()};i18n.on("initialized",initialized)}};function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,loadedClb(i18n,cb))}function loadLanguages(i18n,lng,ns,cb){"string"==typeof ns&&(ns=[ns]),ns.forEach((n=>{i18n.options.ns.indexOf(n)<0&&i18n.options.ns.push(n)})),i18n.loadLanguages(lng,loadedClb(i18n,cb))}const matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=m=>htmlEntities[m];let i18nInstance,defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:text=>text.replace(matchHtmlEntity,unescapeHtmlEntity)};const context_I18nContext=(0,react.createContext)();class ReportNamespaces{constructor(){this.usedNamespaces={}}addUsedNamespaces(namespaces){namespaces.forEach((ns=>{this.usedNamespaces[ns]||(this.usedNamespaces[ns]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function alwaysNewT(i18n,language,namespace,keyPrefix){return i18n.getFixedT(language,namespace,keyPrefix)}function useTranslation_useTranslation(ns){let props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:i18nFromProps}=props,{i18n:i18nFromContext,defaultNS:defaultNSFromContext}=(0,react.useContext)(context_I18nContext)||{},i18n=i18nFromProps||i18nFromContext||function i18nInstance_getI18n(){return i18nInstance}();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new ReportNamespaces),!i18n){utils_warnOnce("You will need to pass in an i18next instance by using initReactI18next");const notReadyT=(k,optsOrDefaultValue)=>"string"==typeof optsOrDefaultValue?optsOrDefaultValue:optsOrDefaultValue&&"object"==typeof optsOrDefaultValue&&"string"==typeof optsOrDefaultValue.defaultValue?optsOrDefaultValue.defaultValue:Array.isArray(k)?k[k.length-1]:k,retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&utils_warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const i18nOptions={...defaultOptions,...i18n.options.react,...props},{useSuspense,keyPrefix}=i18nOptions;let namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);const ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((n=>function hasLoadedNamespace(ns,i18n){let options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{lng:options.lng,precheck:(i18nInstance,loadNotPending)=>{if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){let options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;const loadNotPending=(l,n)=>{const loadState=i18n.services.backendConnector.state[`${l}|${n}`];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(utils_warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}(n,i18n,i18nOptions))),memoGetT=function useMemoizedT(i18n,language,namespace,keyPrefix){return(0,react.useCallback)(alwaysNewT(i18n,language,namespace,keyPrefix),[i18n,language,namespace,keyPrefix])}(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),getT=()=>memoGetT,getNewT=()=>alwaysNewT(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),[t,setT]=(0,react.useState)(getT);let joinedNS=namespaces.join();props.lng&&(joinedNS=`${props.lng}${joinedNS}`);const previousJoinedNS=((value,ignore)=>{const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=ignore?ref.current:value}),[value,ignore]),ref.current})(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((()=>{const{bindI18n,bindI18nStore}=i18nOptions;function boundReset(){isMounted.current&&setT(getNewT)}return isMounted.current=!0,ready||useSuspense||(props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>{isMounted.current&&setT(getNewT)})):loadNamespaces(i18n,namespaces,(()=>{isMounted.current&&setT(getNewT)}))),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getNewT),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),()=>{isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((e=>i18n.off(e,boundReset))),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((e=>i18n.store.off(e,boundReset)))}}),[i18n,joinedNS]),(0,react.useEffect)((()=>{isMounted.current&&ready&&setT(getT)}),[i18n,keyPrefix,ready]);const ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((resolve=>{props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>resolve())):loadNamespaces(i18n,namespaces,(()=>resolve()))}))}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Sidebar_slicedToArray(arr,i){return function Sidebar_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Sidebar_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function Sidebar_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Sidebar_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sidebar_arrayLikeToArray(o,minLen)}(arr,i)||function Sidebar_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Sidebar_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Sidebar=function Sidebar(){var t=useTranslation_useTranslation("pdp").t,_useState2=Sidebar_slicedToArray((0,react.useState)(!1),2),isCollapsed=_useState2[0],setCollapsed=_useState2[1];return(0,jsx_runtime.jsxs)("div",{"data-testid":"sidebar",className:classNames(ui_Sidebar_module.sidebar,isCollapsed&&ui_Sidebar_module.sidebarCollapsed),children:[(0,jsx_runtime.jsx)("button",{"data-testid":"sidebar-toggle",onClick:function onClick(){return setCollapsed((function(isCollapsed){return!isCollapsed}))},className:ui_Sidebar_module.toggleSidebar,children:isCollapsed?"🗃️":"🙅🏼‍♀️"}),(0,jsx_runtime.jsxs)("ul",{className:classNames(ui_Sidebar_module.sidebarItems),children:[(0,jsx_runtime.jsx)("li",{children:t("pdp-product-quality")}),(0,jsx_runtime.jsx)("li",{children:t("pdp-product-size")}),(0,jsx_runtime.jsx)("li",{children:t("pdp-step-custom")}),(0,jsx_runtime.jsx)("li",{children:t("pdp-step-design")})]})]})};Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/index.tsx"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts");const Sidebar_stories={title:"Widgets/Sidebar",component:Sidebar,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{},args:{}};var LightTheme={decorators:[(0,ThemeDecorator.n)(ThemeProvider.Sx.LIGHT,!0)]},DarkTheme={decorators:[(0,ThemeDecorator.n)(ThemeProvider.Sx.DARK,!0)]};LightTheme.parameters={...LightTheme.parameters,docs:{...LightTheme.parameters?.docs,source:{originalSource:"{\n  decorators: [ThemeDecorator(Theme.LIGHT, true)]\n}",...LightTheme.parameters?.docs?.source}}},DarkTheme.parameters={...DarkTheme.parameters,docs:{...DarkTheme.parameters?.docs,source:{originalSource:"{\n  decorators: [ThemeDecorator(Theme.DARK, true)]\n}",...DarkTheme.parameters?.docs?.source}}};const __namedExportsOrder=["LightTheme","DarkTheme"]},"./src/app/providers/ThemeProvider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Sx:()=>ThemeContexts_Theme,DP:()=>useTheme_useTheme});var react=__webpack_require__("./node_modules/react/index.js"),ThemeContexts_Theme=function(Theme){return Theme.LIGHT="light",Theme.DARK="dark",Theme}({}),ThemeContexts_ThemeContext=(0,react.createContext)({}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react.useState)(localStorage.getItem("theme")||ThemeContexts_Theme.LIGHT),2),theme=_useState2[0],setTheme=_useState2[1];return(0,jsx_runtime.jsx)(ThemeContexts_ThemeContext.Provider,{value:{name:theme,setTheme},children})};ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};var useTheme_useTheme=function useTheme(){var _useContext=(0,react.useContext)(ThemeContexts_ThemeContext),name=_useContext.name,setTheme=_useContext.setTheme;return{name,switchTheme:function switchTheme(){var newTheme=name===ThemeContexts_Theme.DARK?ThemeContexts_Theme.LIGHT:ThemeContexts_Theme.DARK;setTheme(newTheme),localStorage.setItem("theme",newTheme)}}};ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"./src/shared/config/storybook/ThemeDecorator/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>ThemeDecorator});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme,fullHeight){return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),style:{height:fullHeight?"100vh":"auto",padding:"50px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Sidebar-ui-Sidebar-module__sidebar-HwBZA{position:relative;overflow:hidden;height:100%;padding:20px;width:var(--sidebar-width);flex-shrink:0;background-color:var(--bg-color-dark);transition:width .4s ease-in-out}.src-widgets-Sidebar-ui-Sidebar-module__sidebarItems-xke0P{list-style-type:none;margin:0;padding:0;transform:translateX(0);transition:all .5s ease-in-out}.src-widgets-Sidebar-ui-Sidebar-module__sidebarItems-xke0P li{white-space:nowrap;text-decoration:none;color:var(--primary-color)}.src-widgets-Sidebar-ui-Sidebar-module__toggleSidebar-PjpgQ{position:absolute;top:10px;width:20px;display:flex;justify-content:center;right:8px;background:none;border:none;cursor:pointer}.src-widgets-Sidebar-ui-Sidebar-module__sidebarCollapsed-cHCyL{width:var(--sidebar-width-collapsed)}.src-widgets-Sidebar-ui-Sidebar-module__sidebarCollapsed-cHCyL .src-widgets-Sidebar-ui-Sidebar-module__sidebarItems-xke0P{opacity:0;visibility:hidden;transform:translateX(-200px);transition:all .2s ease-in-out}.src-widgets-Sidebar-ui-Sidebar-module__sidebarCollapsed-cHCyL .src-widgets-Sidebar-ui-Sidebar-module__toggleSidebar-PjpgQ{transform:translateX(50%);right:calc(var(--sidebar-width-collapsed)/2)}","",{version:3,sources:["webpack://./src/widgets/Sidebar/ui/Sidebar.module.scss"],names:[],mappings:"AAAA,sDACE,iBAAA,CACA,eAAA,CACA,WAAA,CACA,YAAA,CACA,0BAAA,CACA,aAAA,CACA,qCAAA,CACA,gCAAA,CAGF,2DACE,oBAAA,CACA,QAAA,CACA,SAAA,CACA,uBAAA,CACA,8BAAA,CAEA,8DACE,kBAAA,CACA,oBAAA,CACA,0BAAA,CAIJ,4DACE,iBAAA,CACA,QAAA,CACA,UAAA,CACA,YAAA,CACA,sBAAA,CACA,SAAA,CACA,eAAA,CACA,WAAA,CACA,cAAA,CAGF,+DACE,oCAAA,CAEA,0HACE,SAAA,CACA,iBAAA,CACA,4BAAA,CACA,8BAAA,CAGF,2HACE,yBAAA,CACA,4CAAA",sourcesContent:[".sidebar {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  padding: 20px;\n  width: var(--sidebar-width);\n  flex-shrink: 0;\n  background-color: var(--bg-color-dark);\n  transition: width 0.4s ease-in-out;\n}\n\n.sidebarItems {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  transform: translateX(0);\n  transition: all 0.5s ease-in-out;\n\n  li {\n    white-space: nowrap;\n    text-decoration: none;\n    color: var(--primary-color);\n  }\n}\n\n.toggleSidebar {\n  position: absolute;\n  top: 10px;\n  width: 20px;\n  display: flex;\n  justify-content: center;\n  right: 8px;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.sidebarCollapsed {\n  width: var(--sidebar-width-collapsed);\n\n  .sidebarItems {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateX(-200px);\n    transition: all 0.2s ease-in-out;\n  }\n\n  .toggleSidebar {\n    transform: translateX(50%);\n    right: calc(var(--sidebar-width-collapsed) / 2);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={sidebar:"src-widgets-Sidebar-ui-Sidebar-module__sidebar-HwBZA",sidebarItems:"src-widgets-Sidebar-ui-Sidebar-module__sidebarItems-xke0P",toggleSidebar:"src-widgets-Sidebar-ui-Sidebar-module__toggleSidebar-PjpgQ",sidebarCollapsed:"src-widgets-Sidebar-ui-Sidebar-module__sidebarCollapsed-cHCyL"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/void-elements/index.js":module=>{module.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);