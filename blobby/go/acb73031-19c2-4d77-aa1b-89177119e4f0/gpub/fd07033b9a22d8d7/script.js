window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme18"]=window.wsb["Theme18"]||window.radpack("@widget/LAYOUT/bs-layout18-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-73951\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"montserrat\",\"roboto\",\"\"],\"colors\":[\"#000000\"],\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"91e048d5-f3bf-4a81-a2cf-79a07538bae9\":{\"pageId\":\"4d33c380-9115-44cd-a3d2-a1c2205fc0d3\",\"widgetId\":\"cd1faa6b-20c6-4bec-bf55-5c9cdf1055f1\",\"routePath\":\"/2-squier-ct\"},\"6b4405c6-b9c2-41dd-aa12-4ccace8b9ecf\":{\"pageId\":\"102b7dcf-244c-4786-9c98-0ff2e27ce72f\",\"widgetId\":null,\"routePath\":\"/421-sylvan-pl\"},\"2f136c94-c7cd-44ec-85a0-872d00d2404c\":{\"pageId\":\"396ce8e8-0c17-44fd-bd6d-fece7bbfeefb\",\"widgetId\":null,\"routePath\":\"/417-sylvan-pl\"},\"1a7cea24-2bee-489d-b218-5f287dc3b2ee\":{\"pageId\":\"f85730f9-74b1-4dbe-9743-2e857404cd5d\",\"widgetId\":null,\"routePath\":\"/contact\"},\"56fb8234-25be-4c2c-8ac3-35f6f88a9a70\":{\"pageId\":\"976911c5-c52d-488d-9309-8c80171ea18f\",\"widgetId\":null,\"routePath\":\"/39-park-dr\"},\"0709cf1d-3c8a-4447-8e6d-7a8f29867770\":{\"pageId\":\"9c0fc1a6-fdc1-408b-8e03-e8f2b1d1e457\",\"widgetId\":null,\"routePath\":\"/\"},\"9d338f4b-7cb3-4239-9d65-11367420f698\":{\"pageId\":\"4d33c380-9115-44cd-a3d2-a1c2205fc0d3\",\"widgetId\":null,\"routePath\":\"/2-squier-ct\"},\"d76ca346-1735-4a75-b1da-fa7358bc6dba\":{\"pageId\":\"6ab8959c-f465-41f9-a80f-4cdad8fd4518\",\"widgetId\":null,\"routePath\":\"/44-park-dr\"},\"e4f95c3a-6b89-450e-bd41-ce7a0e80d08e\":{\"pageId\":\"24357242-27b8-4255-9a51-24a070cf2506\",\"widgetId\":null,\"routePath\":\"/portfolio\"},\"da474f6b-6e37-4715-95bc-1090fb0721e4\":{\"pageId\":\"24357242-27b8-4255-9a51-24a070cf2506\",\"widgetId\":null,\"routePath\":\"/portfolio\"}},\"isInternalPage\":true,\"navigationMap\":{\"6ab8959c-f465-41f9-a80f-4cdad8fd4518\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6ab8959c-f465-41f9-a80f-4cdad8fd4518\",\"name\":\"44 Park Dr\",\"href\":\"/44-park-dr\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"102b7dcf-244c-4786-9c98-0ff2e27ce72f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"102b7dcf-244c-4786-9c98-0ff2e27ce72f\",\"name\":\"421 Sylvan Pl\",\"href\":\"/421-sylvan-pl\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1d5ca454-5c0b-489e-b8a7-b1cb0a0fd829\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1d5ca454-5c0b-489e-b8a7-b1cb0a0fd829\",\"name\":\"DesignBuild\",\"href\":\"/designbuild\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"4d33c380-9115-44cd-a3d2-a1c2205fc0d3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"4d33c380-9115-44cd-a3d2-a1c2205fc0d3\",\"name\":\"2 Squier Ct\",\"href\":\"/2-squier-ct\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"c8b5e241-7ed7-45d9-b242-c27c6474a3f3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c8b5e241-7ed7-45d9-b242-c27c6474a3f3\",\"name\":\"Blog\",\"href\":\"/blog\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"407cb882-12be-4c04-a885-63394f7cb628\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"407cb882-12be-4c04-a885-63394f7cb628\",\"name\":\"Approach\",\"href\":\"/approach\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"b7a61817-8b30-458f-b502-3d5c00f8e108\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b7a61817-8b30-458f-b502-3d5c00f8e108\",\"name\":\"Maintenance\",\"href\":\"/maintenance\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f85730f9-74b1-4dbe-9743-2e857404cd5d\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"f85730f9-74b1-4dbe-9743-2e857404cd5d\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"24357242-27b8-4255-9a51-24a070cf2506\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"24357242-27b8-4255-9a51-24a070cf2506\",\"name\":\"Portfolio\",\"href\":\"/portfolio\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"c3078aea-7eb6-42f9-a48c-56f8ac19b480\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c3078aea-7eb6-42f9-a48c-56f8ac19b480\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a1107a7a-d404-42b6-9394-82e1124e357f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a1107a7a-d404-42b6-9394-82e1124e357f\",\"name\":\"Gallery\",\"href\":\"/gallery-1\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"976911c5-c52d-488d-9309-8c80171ea18f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"976911c5-c52d-488d-9309-8c80171ea18f\",\"name\":\"39 Park Dr\",\"href\":\"/39-park-dr\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"9c0fc1a6-fdc1-408b-8e03-e8f2b1d1e457\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9c0fc1a6-fdc1-408b-8e03-e8f2b1d1e457\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"396ce8e8-0c17-44fd-bd6d-fece7bbfeefb\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"396ce8e8-0c17-44fd-bd6d-fece7bbfeefb\",\"name\":\"417 Sylvan Pl\",\"href\":\"/417-sylvan-pl\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"6a1d9591-d01d-41df-9851-e19a26d68138\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6a1d9591-d01d-41df-9851-e19a26d68138\",\"name\":\"Warranty\",\"href\":\"/warranty\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#000000\",\"meta\":{\"primary\":\"rgb(0, 0, 0)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":23,\"primary\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:600,700&display=swap\",\"family\":\"'Montserrat', sans-serif\",\"size\":16,\"weight\":600,\"weights\":[600,700]},\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"alternate\":{\"id\":\"roboto\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":18,\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme18\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-73949-navId-mobile\",\"uniqueId\":\"n-73949\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"e6dae82a-1561-40f2-b626-f4b748c5ff86\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"e6dae82a-1561-40f2-b626-f4b748c5ff86\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"ROUND\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"ROUND\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"ROUND\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"ROUND\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{\"BodyBeta\":{\"byType\":{\"HeroText\":{\"value\":{\"fontScaleMultiplier\":0.88}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"]=function(t){let e,{containerId:n,targetId:o,fontSizes:r,maxLines:i,prioritizeDefault:s}=t;if("undefined"==typeof document)return;const a=document.getElementById(n),c=document.getElementById(o);function l(t){return function(t){const e=parseInt(y(t,"padding-left")||0,10),n=parseInt(y(t,"padding-right")||0,10);return t.scrollWidth+e+n}(t)<=a.clientWidth&&function(t){const e=t.offsetHeight,n=parseInt(y(t,"line-height"),10)||1;return Math.floor(e/n)}(t)<=i}function p(t){return parseInt(y(t,"font-size")||0,10)}function d(t){if(1===t.length)return t[0];const e=t.filter(l);if(1===e.length)return e[0];if(!e.length)return function(t){return t.sort(((t,e)=>p(t)-p(e)))[0]}(t);return e.sort(((t,e)=>p(e)-p(t)))[0]}function u(){if(!a||!c||e===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void g();e=window.innerWidth;const t=Array.prototype.slice.call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((t,e)=>r.indexOf(t.getAttribute("data-size"))-r.indexOf(e.getAttribute("data-size"))));if(a.clientWidth&&t.length){const e=a.style.width||"";a.style.width="100%",t.forEach((t=>{t.style.display="inline-block",t.style.maxWidth=`${a.clientWidth}px`}));const n=d(t);!function(t){t.forEach((t=>{t.style.display="none",t.style.maxWidth=""}))}(t),a.style.width=e;const r=y(n,"font-size"),i=c.getAttribute("data-last-size");if(r&&r!==i){if(s){const t=y(c,"font-size");if(parseInt(r,10)>=parseInt(t,10))return}c.setAttribute("data-last-size",r);let t=document.querySelector(`#${o}-style`);t||(t=document.createElement("style"),t.id=`${o}-style`,document.head.appendChild(t)),t.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(){c&&c.removeAttribute("data-last-size");const t=document.querySelector(`#${o}-style`);t&&t.parentNode.removeChild(t)}function y(t,e){return document.defaultView.getComputedStyle(t).getPropertyValue(e)}return u(),window.addEventListener("resize",u),()=>{g(),window.removeEventListener("resize",u)}};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-73957\",\"targetId\":\"logo-text-73958\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-73972\",\"targetId\":\"logo-text-73973\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-73974\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navContainer-73963\",\"widgetId\":\"e6dae82a-1561-40f2-b626-f4b748c5ff86\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"e6dae82a-1561-40f2-b626-f4b748c5ff86\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"ROUND\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"ROUND\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"ROUND\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"ROUND\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{\"BodyBeta\":{\"byType\":{\"HeroText\":{\"value\":{\"fontScaleMultiplier\":0.88}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateSplitNavSpacing"]=function(e){let{containerId:a,navId:n,splitNavId:l,logoImageId:i,inlineUtilitiesMenu:o,forceBreakpoint:r}=e;let c,s,g,p,d,u,y,m;const b=document.getElementById(n),v=document.getElementById(l);function h(){if(s||!b||!T(b))return;p=Array.from(b.children),g=Array.from(b.children),g.forEach(E),o&&(d=g.pop(),M(d)),u=g.pop();const e=u.querySelector("ul");y=e?Array.from(e.children):[],b.style.whiteSpace="normal",m=T(b.parentElement,"floor"),b.style.whiteSpace="nowrap",window.requestAnimationFrame(f)}function f(){const e=d&&d.querySelector("[data-ux='Pipe']");e&&R(e);const t=g,a=t.map((e=>T(e)));const n=d?T(d):0;let l=0,i=a.concat(n).findIndex((e=>{if(l+e>m)return e;l+=e}));i<0&&(i=a.length);const o=a.slice(0,i);let r,c,s=a.slice(i);if(k(s)+n<m)r=!1,c=0;else{r=!0,c=T(u);let e=0,t=c+n;s.some((a=>{if(t+=a,t>=m)return!0;e++})),s=s.slice(0,e)}for(;o.length>1&&B(o,s.concat([c,n]).filter(Boolean));)s.unshift(o.pop());const b=Array.from(v.children);if(I(b,0,o.length,M),I(t,0,o.length,R),I(y,0,o.length,R),I(b,o.length,o.length+s.length,R),I(t,o.length,o.length+s.length,M),I(y,o.length,o.length+s.length,R),I(b,o.length+s.length,t.length,R),I(t,o.length+s.length,t.length,R),I(y,o.length+s.length,t.length,M),r?M(u):R(u),function(){const e=p.filter((e=>"visible"===e.style.visibility&&e.classList.contains("nav-item"))),t=e[e.length-1];t&&t.classList.add("last-visible-nav-item")}(),e){t.find((e=>"visible"===e.style.visibility))&&M(e)}window.dispatchEvent(new Event("NavItemsResized"))}function w(){window.innerWidth<1024&&r&&r!==t.Q||(window.clearTimeout(c),c=window.setTimeout(h,50))}function I(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function E(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("last-visible-nav-item","visible")}function R(e){e.style.display="none",e.classList.remove("visible")}function M(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function k(e){return e.reduce(((e,t)=>e+t),0)}function T(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}function B(e,t){if(!t.length&&e.length>1)return!0;const a=e[e.length-1],n=k(e),l=k(t);return Math.abs(n-l)>Math.abs(n-a-(l+a))}if(w(),window.ResizeObserver){const e=new window.ResizeObserver(w);return[document.getElementById(a),document.getElementById(i)].forEach((t=>t&&e.observe(t))),()=>{s=!0,e.disconnect()}}return window.addEventListener("resize",w,{passive:!0}),()=>{s=!0,window.removeEventListener("resize",w,{passive:!0})}};
window.wsb["CalculateSplitNavSpacing"](JSON.parse("{\"navId\":\"n-7394973962-navId-2\",\"inlineUtilitiesMenu\":false,\"containerId\":\"navContainer-73963\",\"splitNavId\":\"n-7394973961-navId-1\"}"));
window.wsb["StickyNav"]=function(e){let{uniqueId:t,logoHeight:o,hasAnimation:a,anchorId:n}=e;const r=o>104?120:80;let i,c,s,l,g=window.innerWidth<768,d=0;const u=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return s=t.getPropertyValue("box-shadow"),l=t.getPropertyValue("margin-top"),e},p={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(t),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:u(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(n)},y=()=>{const{stickyNav:e,stickyNavParent:t}=p;if(!t||t.style.height)return;let a=e.offsetHeight;g&&e.offsetHeight<o&&o<=104&&(a=o),t.style.height=`${a}px`};new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;return window.requestAnimationFrame((()=>(e=>{if(c===e)return;const{stickyNav:t,logo:n,i18nBar:i,freemiumAd:u}=p;p.freemiumAd=u||document.querySelector("[data-freemium-ad]"),d=d||p.freemiumAd?.offsetHeight,e&&y(),i&&(i.style.display=e?"none":"flex"),n&&(n.style.cssText=e?`max-height:${g?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${g?r:o}px;box-shadow:${s};margin-top:${l};`,"HEADER_LOGO_OVERHANG_CONTAINER"===n.parentNode.getAttribute("data-aid")&&(n.parentNode.style.height=e?"auto":"1em")),t.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${d||0}px;`:"",a&&(e?t.classList.add("sticky-animate","x-c-bg"):t.classList.remove("sticky-animate","x-c-bg")),c=e})(!t)))})))).observe(p.anchor);const h=/#[^\\?]*/;function m(e){const t=(e.target.href.match(h)[0]||[]).slice(1),o=document.getElementById(t);o&&f(o)}function f(e){const t=p.stickyNav.clientHeight;let o=e.offsetTop;const a=setInterval((()=>{e.offsetTop===o?(clearInterval(a),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>h.test(e.href))).forEach((e=>e.addEventListener("click",m))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&f(e)}window.addEventListener("resize",(()=>{clearTimeout(i),i=setTimeout((()=>{g=window.innerWidth<768,p.logo=u(),y()}),250)}),{passive:!0})};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav73952\",\"anchorId\":\"header_stickynav-anchor73953\",\"logoHeight\":80,\"hasAnimation\":true}"));
window.wsb['context-bs-3']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"montserrat\",\"roboto\",\"\"],\"colors\":[\"#000000\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"91e048d5-f3bf-4a81-a2cf-79a07538bae9\":{\"pageId\":\"4d33c380-9115-44cd-a3d2-a1c2205fc0d3\",\"widgetId\":\"cd1faa6b-20c6-4bec-bf55-5c9cdf1055f1\",\"routePath\":\"/2-squier-ct\"},\"6b4405c6-b9c2-41dd-aa12-4ccace8b9ecf\":{\"pageId\":\"102b7dcf-244c-4786-9c98-0ff2e27ce72f\",\"widgetId\":null,\"routePath\":\"/421-sylvan-pl\"},\"2f136c94-c7cd-44ec-85a0-872d00d2404c\":{\"pageId\":\"396ce8e8-0c17-44fd-bd6d-fece7bbfeefb\",\"widgetId\":null,\"routePath\":\"/417-sylvan-pl\"},\"1a7cea24-2bee-489d-b218-5f287dc3b2ee\":{\"pageId\":\"f85730f9-74b1-4dbe-9743-2e857404cd5d\",\"widgetId\":null,\"routePath\":\"/contact\"},\"56fb8234-25be-4c2c-8ac3-35f6f88a9a70\":{\"pageId\":\"976911c5-c52d-488d-9309-8c80171ea18f\",\"widgetId\":null,\"routePath\":\"/39-park-dr\"},\"0709cf1d-3c8a-4447-8e6d-7a8f29867770\":{\"pageId\":\"9c0fc1a6-fdc1-408b-8e03-e8f2b1d1e457\",\"widgetId\":null,\"routePath\":\"/\"},\"9d338f4b-7cb3-4239-9d65-11367420f698\":{\"pageId\":\"4d33c380-9115-44cd-a3d2-a1c2205fc0d3\",\"widgetId\":null,\"routePath\":\"/2-squier-ct\"},\"d76ca346-1735-4a75-b1da-fa7358bc6dba\":{\"pageId\":\"6ab8959c-f465-41f9-a80f-4cdad8fd4518\",\"widgetId\":null,\"routePath\":\"/44-park-dr\"},\"e4f95c3a-6b89-450e-bd41-ce7a0e80d08e\":{\"pageId\":\"24357242-27b8-4255-9a51-24a070cf2506\",\"widgetId\":null,\"routePath\":\"/portfolio\"},\"da474f6b-6e37-4715-95bc-1090fb0721e4\":{\"pageId\":\"24357242-27b8-4255-9a51-24a070cf2506\",\"widgetId\":null,\"routePath\":\"/portfolio\"}},\"isInternalPage\":true,\"navigationMap\":{\"6ab8959c-f465-41f9-a80f-4cdad8fd4518\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6ab8959c-f465-41f9-a80f-4cdad8fd4518\",\"name\":\"44 Park Dr\",\"href\":\"/44-park-dr\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"102b7dcf-244c-4786-9c98-0ff2e27ce72f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"102b7dcf-244c-4786-9c98-0ff2e27ce72f\",\"name\":\"421 Sylvan Pl\",\"href\":\"/421-sylvan-pl\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1d5ca454-5c0b-489e-b8a7-b1cb0a0fd829\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1d5ca454-5c0b-489e-b8a7-b1cb0a0fd829\",\"name\":\"DesignBuild\",\"href\":\"/designbuild\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"4d33c380-9115-44cd-a3d2-a1c2205fc0d3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"4d33c380-9115-44cd-a3d2-a1c2205fc0d3\",\"name\":\"2 Squier Ct\",\"href\":\"/2-squier-ct\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"c8b5e241-7ed7-45d9-b242-c27c6474a3f3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c8b5e241-7ed7-45d9-b242-c27c6474a3f3\",\"name\":\"Blog\",\"href\":\"/blog\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"407cb882-12be-4c04-a885-63394f7cb628\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"407cb882-12be-4c04-a885-63394f7cb628\",\"name\":\"Approach\",\"href\":\"/approach\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"b7a61817-8b30-458f-b502-3d5c00f8e108\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b7a61817-8b30-458f-b502-3d5c00f8e108\",\"name\":\"Maintenance\",\"href\":\"/maintenance\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f85730f9-74b1-4dbe-9743-2e857404cd5d\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"f85730f9-74b1-4dbe-9743-2e857404cd5d\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"24357242-27b8-4255-9a51-24a070cf2506\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"24357242-27b8-4255-9a51-24a070cf2506\",\"name\":\"Portfolio\",\"href\":\"/portfolio\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"c3078aea-7eb6-42f9-a48c-56f8ac19b480\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c3078aea-7eb6-42f9-a48c-56f8ac19b480\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a1107a7a-d404-42b6-9394-82e1124e357f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a1107a7a-d404-42b6-9394-82e1124e357f\",\"name\":\"Gallery\",\"href\":\"/gallery-1\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"976911c5-c52d-488d-9309-8c80171ea18f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"976911c5-c52d-488d-9309-8c80171ea18f\",\"name\":\"39 Park Dr\",\"href\":\"/39-park-dr\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"9c0fc1a6-fdc1-408b-8e03-e8f2b1d1e457\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9c0fc1a6-fdc1-408b-8e03-e8f2b1d1e457\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"396ce8e8-0c17-44fd-bd6d-fece7bbfeefb\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"396ce8e8-0c17-44fd-bd6d-fece7bbfeefb\",\"name\":\"417 Sylvan Pl\",\"href\":\"/417-sylvan-pl\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"6a1d9591-d01d-41df-9851-e19a26d68138\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6a1d9591-d01d-41df-9851-e19a26d68138\",\"name\":\"Warranty\",\"href\":\"/warranty\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#000000\",\"meta\":{\"primary\":\"rgb(0, 0, 0)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":23,\"primary\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:600,700&display=swap\",\"family\":\"'Montserrat', sans-serif\",\"size\":16,\"weight\":600,\"weights\":[600,700]},\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"alternate\":{\"id\":\"roboto\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":18,\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme18\"}");
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/SOCIALFEED/bs-Component',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"socialFeed1\",\"id\":\"c3b27881-11c8-421c-b9ce-3838ad671e28\",\"sectionTitle\":\"Follow us on Instagram\",\"linkLabel\":\"\",\"staticContent\":{\"comingSoon\":\"Feed coming soon\",\"business\":\"Business\",\"facebookOverlayContentText\":\"To add photos from your Instagram creator or business account (personal accounts aren't eligible), first connect to your Facebook business page.\",\"connectButtonText\":\"Connect Now\",\"howToLinkInstagram\":\"How to link your Instagram account to Facebook\",\"reconnectInstagramOverlayContentText\":\"Reconnect to Facebook so your site visitors can easily see your latest Instagram posts\",\"reconnectButtonText\":\"Reconnect Now\"},\"accountId\":\"02a7741c-029f-11ec-8235-3417ebe72601\",\"websiteId\":\"acb73031-19c2-4d77-aa1b-89177119e4f0\",\"viewDevice\":null,\"isInstagramConnected\":null,\"isReseller\":false,\"defaultStockPhotos\":[\"//img1.wsimg.com/isteam/stock/15658\",\"//img1.wsimg.com/isteam/stock/2040\",\"//img1.wsimg.com/isteam/stock/26867\",\"//img1.wsimg.com/isteam/stock/15658\",\"//img1.wsimg.com/isteam/stock/RrqW04x\",\"//img1.wsimg.com/isteam/stock/ork5dp\",\"//img1.wsimg.com/isteam/stock/yr0wbmx\",\"//img1.wsimg.com/isteam/stock/3207\",\"//img1.wsimg.com/isteam/stock/3209\",\"//img1.wsimg.com/isteam/stock/110841\",\"//img1.wsimg.com/isteam/stock/125683\",\"//img1.wsimg.com/isteam/stock/111362\"],\"feedType\":\"InstagramFeed\",\"widgetId\":\"c3b27881-11c8-421c-b9ce-3838ad671e28\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":1,\"widgetId\":\"c3b27881-11c8-421c-b9ce-3838ad671e28\",\"widgetType\":\"SOCIALFEED\",\"widgetPreset\":\"socialFeed1\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"ROUND\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"ROUND\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"ROUND\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"ROUND\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/SOCIALFEED/bs-Component"},false);
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"3e85dd8b-ef78-4cf0-b540-e40844d49cb8\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-73948').addEventListener('click', function() {}, false);
"use strict";window.dataLayer = window.dataLayer || [], window.gtag = window.gtag || function () {window.dataLayer.push(arguments);}, gtag("consent", "default", {ad_storage: "denied",ad_user_data: "denied",ad_personalization: "denied",analytics_storage: "denied"});