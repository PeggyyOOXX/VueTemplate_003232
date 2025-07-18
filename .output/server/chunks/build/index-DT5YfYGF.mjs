import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { ref, mergeProps, useSSRContext } from 'vue';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0$1 = publicAssetsURL("/img/101logo.png");
const _imports_1 = publicAssetsURL("/img/icon/notify.png");
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoggedIn = ref(true);
    const username = ref("Username");
    const balance = ref(1e8);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header sticky px-2 py-2 text-white" }, _attrs))}><div class="relative mb-1 h-8"><div class="absolute inset-0 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0$1)} alt="Logo" class="h-6 mx-auto"></div>`);
      if (isLoggedIn.value) {
        _push(`<div class="absolute right-0 top-1 flex items-center pr-2"><button class="relative"><img${ssrRenderAttr("src", _imports_1)} alt="notify" class="h-6 w-6"><div class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-full">`);
      if (!isLoggedIn.value) {
        _push(`<div class="flex justify-center space-x-1 py-1"><a href="#" class="btn-secondary px-3 py-1 relative rounded-full z-[1]">Login</a><a href="#" class="btn-primary px-3 py-1 relative rounded-full z-[1]">Register</a></div>`);
      } else {
        _push(`<div class="flex justify-between items-center"><div><div class="text-sm font-medium">${ssrInterpolate(username.value)}</div><div class="flex items-center text-yellow-400 font-bold space-x-1"><span>${ssrInterpolate(balance.value.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))}</span><svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_211_98163)"><path d="M19.9321 13.0407C19.7433 14.4806 19.166 15.842 18.2622 16.9788C17.3585 18.1157 16.1623 18.985 14.802 19.4937C13.4418 20.0024 11.9687 20.1312 10.5407 19.8663C9.11282 19.6013 7.78395 18.9527 6.69664 17.99C5.60933 17.0272 4.8046 15.7867 4.36876 14.4013C3.93292 13.016 3.8824 11.5381 4.22264 10.1263C4.56287 8.7144 5.28102 7.42178 6.30006 6.38703C7.3191 5.35229 8.60059 4.61446 10.0071 4.25268C13.9061 3.25268 17.9421 5.25968 19.4321 8.99968" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4V9H15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_211_98163"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div></div><div class="flex space-x-1"><a href="#" class="btn-primary px-3 py-1 relative rounded-full z-[1]">Deposit</a><a href="#" class="btn-secondary px-3 py-1 relative rounded-full z-[1]">Withdraw</a></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/basic/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNC0xMVQxNDoxOTo0OCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDQtMTFUMTQ6MTk6NTUrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDQtMTFUMTQ6MTk6NTUrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY2ZDVmMWI3LWJhZDMtMDY0Yy1iYzVjLTk5Y2VkOWJiZGNmZSIgeG1wTU06RG9jdW1lbnRJRD0i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";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-0 left-0 w-full h-[100px] bg-white z-50 border-t" }, _attrs))} data-v-2af97fb6><div class="overflow-x-auto overflow-y-hidden" data-v-2af97fb6><div class="flex min-w-max gap-2 px-2 py-2" data-v-2af97fb6><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga1</span></button></div><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga2</span></button></div><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga3</span></button></div><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga4</span></button></div><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga5</span></button></div><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga6</span></button></div><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga7</span></button></div><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga8</span></button></div><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga9</span></button></div><div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center" data-v-2af97fb6><button class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs" data-v-2af97fb6><img${ssrRenderAttr("src", _imports_0)} alt="menu-cockfight" class="menu-icon" data-v-2af97fb6><span data-v-2af97fb6>Daga10</span></button></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/basic/BottomBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BottomBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2af97fb6"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="animate-me opacity-0 transition" data-v-9b5a99f5> \uFF08GSAP\uFF09 <div class="box" data-v-9b5a99f5>Hello</div></div>`);
      _push(ssrRenderComponent(BottomBar, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b5a99f5"]]);

export { index as default };
//# sourceMappingURL=index-DT5YfYGF.mjs.map
