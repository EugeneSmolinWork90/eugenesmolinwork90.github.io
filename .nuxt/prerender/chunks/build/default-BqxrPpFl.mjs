import { r as defineStore, _ as _export_sfc, f as useI18n, s as useLocaleHead, t as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, ref, watch, defineComponent, mergeProps, withCtx, createVNode, toDisplayString, computed, openBlock, createBlock, unref, createTextVNode, Fragment, renderList, isRef, getCurrentScope, onScopeDispose, toRef as toRef$1, readonly, customRef } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrGetDirectiveProps, ssrRenderSlot } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/server-renderer/index.mjs';
import { useHead } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unhead/dist/index.mjs';
import { P as ProductsEnum, R as RoutesPathsEnum, _ as __nuxt_component_0 } from './routes-Bkc00j1Z.mjs';
import { V as VButton, _ as __nuxt_component_1 } from './VButton-7LOx4zCV.mjs';
import Container from './Container-DL_4idYO.mjs';
import { P as PLATFORM_LINKS, D as DOWNLOAD_LINKS } from './links-9sdGeB_B.mjs';
import { useRoute, useRouter } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/ofetch/dist/node.mjs';
import '../_/renderer3.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/h3/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/devalue/index.js';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/destr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/klona/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/ipx/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/@unhead/addons/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/cookie-es/dist/index.mjs';
import './nuxt-link-DeYZpbTD.mjs';

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const directiveHooks = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
function unrefElement$1(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow$1 = void 0;
function useEventListener$1(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow$1;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement$1(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside$1(target, handler, options = {}) {
  const { window: window2 = defaultWindow$1, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return noop;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement$1(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement$1(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener$1(window2, "click", listener, { passive: true, capture }),
    useEventListener$1(window2, "pointerdown", (e) => {
      const el = unrefElement$1(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener$1(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement$1(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return noop;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
const vOnClickOutside = {
  [directiveHooks.mounted](el, binding) {
    const capture = !binding.modifiers.bubble;
    if (typeof binding.value === "function") {
      el.__onClickOutside_stop = onClickOutside(el, binding.value, { capture });
    } else {
      const [handler, options] = binding.value;
      el.__onClickOutside_stop = onClickOutside(el, handler, Object.assign({ capture }, options));
    }
  },
  [directiveHooks.unmounted](el) {
    el.__onClickOutside_stop();
  }
};
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let initialOverflow = "";
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden")
        initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden")
        return isLocked.value = true;
      if (isLocked.value)
        return ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}
function onScrollLock() {
  let isMounted = false;
  const state = ref(false);
  return (el, binding) => {
    state.value = binding.value;
    if (isMounted)
      return;
    isMounted = true;
    const isLocked = useScrollLock(el, binding.value);
    watch(state, (v) => isLocked.value = v);
  };
}
onScrollLock();
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    title: {},
    slug: {},
    small: { type: Boolean },
    isDarkTheme: { type: Boolean },
    link: {}
  },
  setup(__props) {
    const createMenuLink = (name) => ({
      pale: {
        src: `/images/platform/pale/${name}.svg`,
        alt: name.charAt(0).toUpperCase() + name.slice(1)
      },
      color: {
        src: `/images/platform/${name}.svg`,
        alt: name.charAt(0).toUpperCase() + name.slice(1)
      }
    });
    const menuLinks = {
      [ProductsEnum.IOS]: createMenuLink("ios"),
      [ProductsEnum.ANDROID]: createMenuLink("android"),
      [ProductsEnum.MAC]: createMenuLink("mac"),
      [ProductsEnum.WINDOWS]: createMenuLink("windows"),
      [ProductsEnum.CHROME]: createMenuLink("chrome"),
      [ProductsEnum.OPERA]: createMenuLink("opera"),
      [ProductsEnum.YANDEX]: createMenuLink("yandex"),
      [ProductsEnum.FIREFOX]: createMenuLink("firefox"),
      [ProductsEnum.EDGE]: createMenuLink("edge"),
      [ProductsEnum.LINUX]: createMenuLink("linux"),
      [ProductsEnum.ROUTER]: createMenuLink("router")
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLinkLocale, mergeProps({
        to: _ctx.link,
        class: {
          "menu-link": true,
          "menu-link--small": _ctx.small,
          "menu-link--dark": _ctx.isDarkTheme
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="menu-link__svg" data-v-02dea042${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: menuLinks[_ctx.slug].pale.src,
              alt: menuLinks[_ctx.slug].pale.alt,
              width: "50",
              height: "51"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: menuLinks[_ctx.slug].color.src,
              alt: menuLinks[_ctx.slug].color.alt,
              width: "50",
              height: "51"
            }, null, _parent2, _scopeId));
            _push2(`</div><p data-v-02dea042${_scopeId}>${ssrInterpolate(_ctx.title)}</p>`);
          } else {
            return [
              createVNode("div", { class: "menu-link__svg" }, [
                createVNode(_component_NuxtImg, {
                  src: menuLinks[_ctx.slug].pale.src,
                  alt: menuLinks[_ctx.slug].pale.alt,
                  width: "50",
                  height: "51"
                }, null, 8, ["src", "alt"]),
                createVNode(_component_NuxtImg, {
                  src: menuLinks[_ctx.slug].color.src,
                  alt: menuLinks[_ctx.slug].color.alt,
                  width: "50",
                  height: "51"
                }, null, 8, ["src", "alt"])
              ]),
              createVNode("p", null, toDisplayString(_ctx.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header/HeaderMenuLink/index.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const HeaderMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-02dea042"]]);
const _sfc_main$e = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "icon" }, _attrs))} data-v-a2db6f86>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconWrap.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const IconWrap = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-a2db6f86"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "IconEarth",
  __ssrInlineRender: true,
  props: {
    isDarkTheme: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const fill = computed(() => props.isDarkTheme ? "#FFFFFF" : "#2A2D30");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(IconWrap, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.5 2.014c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 2c1.32 0 2.77 3.032 2.991 6.997l-5.97.012c.22-3.965 1.659-7.009 2.979-7.009zm-3.531.803c-.86 1.673-1.32 3.891-1.431 6.2l-2.98-.01c.298-2.725 2.133-5.01 4.411-6.19zm7.067.005c2.278 1.18 4.066 3.401 4.411 6.201l-2.979-.009c-.094-2.4-.625-4.51-1.432-6.192zM4.564 13.018l2.979-.025c.111 2.308.574 4.564 1.43 6.22a8.15 8.15 0 0 1-4.409-6.195zm4.941.008 5.97-.013c-.22 3.964-1.655 7.001-2.975 7.001s-2.775-3.023-2.995-6.988zm7.968-.01 2.966-.009c-.344 2.65-2.016 5.015-4.407 6.194.888-1.836 1.33-3.877 1.441-6.185z"${ssrRenderAttr("fill", fill.value)}${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "25",
                height: "24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M12.5 2.014c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 2c1.32 0 2.77 3.032 2.991 6.997l-5.97.012c.22-3.965 1.659-7.009 2.979-7.009zm-3.531.803c-.86 1.673-1.32 3.891-1.431 6.2l-2.98-.01c.298-2.725 2.133-5.01 4.411-6.19zm7.067.005c2.278 1.18 4.066 3.401 4.411 6.201l-2.979-.009c-.094-2.4-.625-4.51-1.432-6.192zM4.564 13.018l2.979-.025c.111 2.308.574 4.564 1.43 6.22a8.15 8.15 0 0 1-4.409-6.195zm4.941.008 5.97-.013c-.22 3.964-1.655 7.001-2.975 7.001s-2.775-3.023-2.995-6.988zm7.968-.01 2.966-.009c-.344 2.65-2.016 5.015-4.407 6.194.888-1.836 1.33-3.877 1.441-6.185z",
                  fill: fill.value
                }, null, 8, ["fill"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconEarth.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var LocalesCodesEnum = /* @__PURE__ */ ((LocalesCodesEnum2) => {
  LocalesCodesEnum2["EN"] = "en";
  LocalesCodesEnum2["RU"] = "ru";
  return LocalesCodesEnum2;
})(LocalesCodesEnum || {});
const localesList = {
  [LocalesCodesEnum.EN]: {
    code: LocalesCodesEnum.EN,
    title: "English"
  },
  [LocalesCodesEnum.RU]: {
    code: LocalesCodesEnum.RU,
    title: "Russian"
  }
};
const useLocale = (outsideRef) => {
  const isLocale = ref(false);
  const openLocales = () => {
    isLocale.value = true;
  };
  const closeLocales = () => {
    isLocale.value = false;
  };
  onClickOutside$1(outsideRef, () => {
    closeLocales();
  });
  return {
    localesList,
    isLocale,
    openLocales,
    closeLocales
  };
};
const useThemeStore = defineStore("theme", {
  state: () => ({
    isDarkTheme: false
  }),
  getters: {},
  actions: {
    setDarkTheme() {
      this.isDarkTheme = true;
    },
    removeDarkTheme() {
      this.isDarkTheme = false;
    }
  }
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "HeaderDesktopLocale",
  __ssrInlineRender: true,
  setup(__props) {
    const localeDropdown = ref(null);
    const { localesList: localesList2, isLocale, openLocales, closeLocales } = useLocale(localeDropdown);
    const { locale, setLocale } = useI18n();
    const themeStore = useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["header-lang", { "header-lang--dark": unref(themeStore).isDarkTheme }]
      }, _attrs))} data-v-4f55748b><div class="${ssrRenderClass([{ active: unref(isLocale) }, "header-lang__current"])}" data-v-4f55748b>`);
      _push(ssrRenderComponent(_sfc_main$d, {
        "is-dark-theme": unref(themeStore).isDarkTheme
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(localesList2)[unref(locale)].title)} <span class="${ssrRenderClass([{ "icon-chevron--dark": !unref(themeStore).isDarkTheme }, "icon-chevron"])}" data-v-4f55748b></span></div>`);
      if (unref(isLocale)) {
        _push(`<div class="header-lang-list" data-v-4f55748b><!--[-->`);
        ssrRenderList(Object.values(unref(localesList2)), (lang) => {
          _push(`<div class="${ssrRenderClass([{ active: lang.code === unref(locale) }, "header-lang-list__item"])}" data-v-4f55748b>${ssrInterpolate(lang.title)}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header/HeaderDesktop/HeaderDesktopLocale.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const HeaderDesktopLocale = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-4f55748b"]]);
const useMenu = () => {
  const { t } = useI18n();
  const menuList = [
    {
      title: t("menu.products.browser.title"),
      links: [
        {
          title: t("menu.products.browser.firefox"),
          slug: ProductsEnum.FIREFOX,
          link: RoutesPathsEnum.EXTENSION_FIREFOX
        },
        {
          title: t("menu.products.browser.edge"),
          slug: ProductsEnum.EDGE,
          link: RoutesPathsEnum.EXTENSION_EDGE
        },
        {
          title: t("menu.products.browser.chrome"),
          slug: ProductsEnum.CHROME,
          link: RoutesPathsEnum.EXTENSION_CHROME
        },
        {
          title: t("menu.products.browser.opera"),
          slug: ProductsEnum.OPERA,
          link: RoutesPathsEnum.EXTENSION_OPERA
        },
        {
          title: t("menu.products.browser.yandex"),
          slug: ProductsEnum.YANDEX,
          link: RoutesPathsEnum.EXTENSION_YANDEX
        }
      ]
    },
    {
      title: t("menu.products.computer.title"),
      links: [
        {
          title: t("menu.products.computer.windows"),
          slug: ProductsEnum.WINDOWS,
          link: RoutesPathsEnum.DESKTOP_WINDOWS
        },
        {
          title: t("menu.products.computer.mac"),
          slug: ProductsEnum.MAC,
          link: RoutesPathsEnum.DESKTOP_MAC
        },
        {
          title: t("menu.products.computer.linux"),
          slug: ProductsEnum.LINUX,
          link: RoutesPathsEnum.DESKTOP_LINUX
        }
      ]
    },
    {
      title: t("menu.products.mobile.title"),
      links: [
        {
          title: t("menu.products.mobile.android"),
          slug: ProductsEnum.ANDROID,
          link: RoutesPathsEnum.MOBILE_ANDROID
        },
        {
          title: t("menu.products.mobile.ios"),
          slug: ProductsEnum.IOS,
          link: RoutesPathsEnum.MOBILE_IOS
        }
      ]
    },
    {
      title: t("menu.products.router.title"),
      links: [
        {
          title: t("menu.products.router.router"),
          slug: ProductsEnum.ROUTER,
          link: ""
        }
      ]
    }
  ];
  return { menuList };
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isDropdown = ref(false);
    const { menuList } = useMenu();
    const themeStore = useThemeStore();
    const closeDropdown = () => {
      isDropdown.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-desktop" }, _attrs))} data-v-dfd5ed6f><div class="${ssrRenderClass([{ "header-menu--dark": unref(themeStore).isDarkTheme }, "header-menu"])}" data-v-dfd5ed6f><ul class="header-menu-list" data-v-dfd5ed6f><li class="${ssrRenderClass([{ active: isDropdown.value }, "header-menu-list__item"])}" data-v-dfd5ed6f>${ssrInterpolate(_ctx.$t("menu.products.title"))} <span class="${ssrRenderClass([{ "icon-chevron--dark": !unref(themeStore).isDarkTheme }, "icon-chevron"])}" data-v-dfd5ed6f></span></li></ul>`);
      if (isDropdown.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-menu-dropdown" }, ssrGetDirectiveProps(_ctx, unref(vOnClickOutside), closeDropdown)))} data-v-dfd5ed6f><!--[-->`);
        ssrRenderList(unref(menuList), (menu) => {
          _push(`<div class="header-menu-dropdown__col" data-v-dfd5ed6f><h6 data-v-dfd5ed6f>${ssrInterpolate(menu.title)}</h6><!--[-->`);
          ssrRenderList(menu.links, (link) => {
            _push(ssrRenderComponent(unref(HeaderMenuLink), {
              key: link.slug,
              title: link.title,
              slug: link.slug,
              link: link.link,
              "is-dark-theme": unref(themeStore).isDarkTheme,
              small: "",
              onClick: closeDropdown
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="header-donate" data-v-dfd5ed6f>`);
      _push(ssrRenderComponent(HeaderDesktopLocale, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLinkLocale, {
        to: unref(RoutesPathsEnum).DONATE
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VButton, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtImg, {
                    src: "/images/icons/icon-heart.svg",
                    alt: "Heart",
                    width: "19",
                    height: "18"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(_ctx.$t("header.button-donate"))}`);
                } else {
                  return [
                    createVNode(_component_NuxtImg, {
                      src: "/images/icons/icon-heart.svg",
                      alt: "Heart",
                      width: "19",
                      height: "18"
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("header.button-donate")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VButton, { size: "sm" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtImg, {
                    src: "/images/icons/icon-heart.svg",
                    alt: "Heart",
                    width: "19",
                    height: "18"
                  }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("header.button-donate")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header/HeaderDesktop/index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const HeaderDesktop = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-dfd5ed6f"]]);
const addNoScrollBody = () => {
  (void 0).body.classList.add("no-scroll");
};
const removeNoScrollBody = () => {
  const noScroll = (void 0).body.classList;
  if (noScroll.contains("no-scroll")) {
    noScroll.remove("no-scroll");
  }
};
const useMenuStore = defineStore("menu", {
  state: () => ({
    isMenuOpen: false
  }),
  getters: {},
  actions: {
    openMenu() {
      this.isMenuOpen = true;
      addNoScrollBody();
    },
    closeMenu() {
      this.isMenuOpen = false;
      removeNoScrollBody();
    }
  }
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "HeaderMobileBurger",
  __ssrInlineRender: true,
  setup(__props) {
    const menuStore = useMenuStore();
    const themeStore = useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["burger-menu", { "burger-menu--dark": unref(themeStore).isDarkTheme }]
      }, _attrs))} data-v-581acb3f><button class="${ssrRenderClass([{ active: unref(menuStore).isMenuOpen }, "burger-menu__btn"])}" data-v-581acb3f><span data-v-581acb3f></span><span data-v-581acb3f></span><span data-v-581acb3f></span></button></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header/HeaderMobile/HeaderMobileBurger.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const HeaderMobileBurger = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-581acb3f"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "HeaderMobileLocale",
  __ssrInlineRender: true,
  setup(__props) {
    const localeDropdown = ref(null);
    const { localesList: localesList2, isLocale, openLocales, closeLocales } = useLocale(localeDropdown);
    const { locale, setLocale } = useI18n();
    const themeStore = useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["locale", { "locale--dark": unref(themeStore).isDarkTheme }]
      }, _attrs))} data-v-1bd57ae5><div class="locale-lang" data-v-1bd57ae5>${ssrInterpolate(_ctx.$t("locale.language"))} <div class="locale-lang__current" data-v-1bd57ae5>${ssrInterpolate(unref(localesList2)[unref(locale)].title)} <span class="icon-chevron icon-chevron--orange icon-chevron--small" data-v-1bd57ae5></span></div></div>`);
      if (unref(isLocale)) {
        _push(`<div class="locale-list" data-v-1bd57ae5><div class="locale-list__divider" data-v-1bd57ae5></div><!--[-->`);
        ssrRenderList(Object.values(unref(localesList2)), (lang) => {
          _push(`<div class="${ssrRenderClass([{ active: lang.code === unref(locale) }, "locale-list__item"])}" data-v-1bd57ae5>${ssrInterpolate(lang.title)}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header/HeaderMobile/HeaderMobileLocale.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const HeaderMobileLocale = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1bd57ae5"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HeaderMobileMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const [isDropdown, setDropdown] = useToggle();
    const { menuList } = useMenu();
    const themeStore = useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["menu", { "menu--dark": unref(themeStore).isDarkTheme }]
      }, _attrs))} data-v-6027f69d><div class="${ssrRenderClass([{ active: unref(isDropdown) }, "menu__subtitle"])}" data-v-6027f69d>${ssrInterpolate(_ctx.$t("menu.products.title"))} <span class="${ssrRenderClass([{ "icon-chevron--dark": !unref(themeStore).isDarkTheme }, "icon-chevron"])}" data-v-6027f69d></span></div>`);
      if (unref(isDropdown)) {
        _push(`<div class="menu-dropdown" data-v-6027f69d><!--[-->`);
        ssrRenderList(unref(menuList), (menu) => {
          _push(`<div class="menu-dropdown__col" data-v-6027f69d><h6 data-v-6027f69d>${ssrInterpolate(menu.title)}</h6><!--[-->`);
          ssrRenderList(menu.links, (link) => {
            _push(ssrRenderComponent(unref(HeaderMenuLink), {
              key: link.slug,
              title: link.title,
              slug: link.slug,
              link: link.link,
              "is-dark-theme": unref(themeStore).isDarkTheme
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header/HeaderMobile/HeaderMobileMenu.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HeaderMobileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-6027f69d"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const menuStore = useMenuStore();
    const themeStore = useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-mobile" }, _attrs))} data-v-37bc65f1>`);
      _push(ssrRenderComponent(_component_NuxtLinkLocale, {
        to: unref(RoutesPathsEnum).DONATE
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VButton, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtImg, {
                    src: "/images/icons/icon-heart.svg",
                    alt: "Heart",
                    width: "19",
                    height: "18"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(_ctx.$t("header.button-donate"))}`);
                } else {
                  return [
                    createVNode(_component_NuxtImg, {
                      src: "/images/icons/icon-heart.svg",
                      alt: "Heart",
                      width: "19",
                      height: "18"
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("header.button-donate")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VButton, { size: "sm" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtImg, {
                    src: "/images/icons/icon-heart.svg",
                    alt: "Heart",
                    width: "19",
                    height: "18"
                  }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("header.button-donate")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(HeaderMobileBurger, null, null, _parent));
      if (unref(menuStore).isMenuOpen) {
        _push(`<div class="${ssrRenderClass([{ "header-tablet--dark": unref(themeStore).isDarkTheme }, "header-tablet"])}" data-v-37bc65f1><div class="header-tablet__support" data-v-37bc65f1><h6 data-v-37bc65f1>${ssrInterpolate(_ctx.$t("header.support.title"))}</h6><p data-v-37bc65f1>${ssrInterpolate(_ctx.$t("header.support.text"))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLinkLocale, {
          to: unref(RoutesPathsEnum).DONATE
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VButton, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: "/images/icons/icon-heart.svg",
                      alt: "Heart",
                      width: "19",
                      height: "18"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(_ctx.$t("header.button-donate"))}`);
                  } else {
                    return [
                      createVNode(_component_NuxtImg, {
                        src: "/images/icons/icon-heart.svg",
                        alt: "Heart",
                        width: "19",
                        height: "18"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("header.button-donate")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VButton, null, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtImg, {
                      src: "/images/icons/icon-heart.svg",
                      alt: "Heart",
                      width: "19",
                      height: "18"
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("header.button-donate")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="header-tablet__content" data-v-37bc65f1>`);
        _push(ssrRenderComponent(HeaderMobileLocale, null, null, _parent));
        _push(ssrRenderComponent(HeaderMobileMenu, null, null, _parent));
        _push(`<div class="header-tablet__links" data-v-37bc65f1>`);
        _push(ssrRenderComponent(_component_NuxtLinkLocale, {
          to: unref(RoutesPathsEnum).POLICY
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("header.links.privacy"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("header.links.privacy")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLinkLocale, {
          to: unref(RoutesPathsEnum).TERMS
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("header.links.terms"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("header.links.terms")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header/HeaderMobile/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const HeaderMobile = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-37bc65f1"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header", { "header--dark": unref(themeStore).isDarkTheme }]
      }, _attrs))} data-v-fab20aa3><div class="header__content" data-v-fab20aa3>`);
      _push(ssrRenderComponent(_component_NuxtLinkLocale, {
        to: unref(RoutesPathsEnum).MAIN
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(themeStore).isDarkTheme) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: "/images/logo-white.svg",
                alt: "Logo",
                width: "156",
                height: "44"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: "/images/logo.svg",
                alt: "Logo",
                width: "156",
                height: "44"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(themeStore).isDarkTheme ? (openBlock(), createBlock(_component_NuxtImg, {
                key: 0,
                src: "/images/logo-white.svg",
                alt: "Logo",
                width: "156",
                height: "44"
              })) : (openBlock(), createBlock(_component_NuxtImg, {
                key: 1,
                src: "/images/logo.svg",
                alt: "Logo",
                width: "156",
                height: "44"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(HeaderDesktop), null, null, _parent));
      _push(ssrRenderComponent(unref(HeaderMobile), null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-fab20aa3"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "158",
    height: "56",
    viewBox: "0 0 158 56",
    fill: "none"
  }, _attrs))}><path d="M0 7.55078C0 3.68479 3.13401 0.550781 7 0.550781H151C154.866 0.550781 158 3.68479 158 7.55078V48.5508C158 52.4168 154.866 55.5508 151 55.5508H7C3.134 55.5508 0 52.4168 0 48.5508V7.55078Z" stroke="#0A0A0B"></path><path d="M51.4805 29.0731H36.3589V39.4615L51.4805 41.5508V29.0731Z" fill="#0A0A0B"></path><path d="M35.3833 29.0731H24.1641V37.7785L35.3833 39.328V29.0731Z" fill="#0A0A0B"></path><path d="M51.4805 15.5508L36.3589 17.6052V28.1445H51.4805V15.5508Z" fill="#0A0A0B"></path><path d="M35.3833 17.7387L24.1641 19.2651V28.1445H35.3833V17.7387Z" fill="#0A0A0B"></path><path d="M65.0332 17.1719V19.7012C64.9518 19.8216 64.8118 19.9551 64.6133 20.1016C64.4147 20.248 64.1478 20.3766 63.8125 20.4873C63.4772 20.5947 63.0605 20.6484 62.5625 20.6484C62.1458 20.6484 61.7633 20.5736 61.415 20.4238C61.0667 20.2741 60.764 20.0576 60.5068 19.7744C60.2529 19.488 60.056 19.1445 59.916 18.7441C59.7793 18.3438 59.7109 17.8945 59.7109 17.3965V16.5371C59.7109 16.0488 59.7744 15.6094 59.9014 15.2188C60.0283 14.8249 60.2122 14.488 60.4531 14.208C60.694 13.9281 60.9837 13.7148 61.3223 13.5684C61.6641 13.4186 62.0465 13.3438 62.4697 13.3438C62.9971 13.3438 63.4414 13.4349 63.8027 13.6172C64.1641 13.7995 64.4456 14.0501 64.6475 14.3691C64.8525 14.6849 64.9795 15.043 65.0283 15.4434H64.4277C64.3822 15.1602 64.2878 14.8997 64.1445 14.6621C64.0013 14.4212 63.793 14.2275 63.5195 14.0811C63.2493 13.9346 62.8994 13.8613 62.4697 13.8613C62.1247 13.8613 61.8171 13.9248 61.5469 14.0518C61.2799 14.1787 61.0553 14.3594 60.873 14.5938C60.6908 14.8281 60.5524 15.1097 60.458 15.4385C60.3636 15.764 60.3164 16.127 60.3164 16.5273V17.3965C60.3164 17.8132 60.3685 18.1891 60.4727 18.5244C60.5801 18.8597 60.7331 19.1478 60.9316 19.3887C61.1302 19.6296 61.3678 19.8151 61.6445 19.9453C61.9212 20.0723 62.2288 20.1357 62.5674 20.1357C62.9287 20.1357 63.2363 20.1016 63.4902 20.0332C63.7441 19.9648 63.9476 19.8835 64.1006 19.7891C64.2568 19.6914 64.3691 19.6003 64.4375 19.5156V17.6846H62.5283V17.1719H65.0332Z" fill="#0A0A0B"></path><path d="M68.6562 20.6484C68.3112 20.6484 67.9938 20.585 67.7041 20.458C67.4176 20.3311 67.167 20.152 66.9521 19.9209C66.7406 19.6898 66.5762 19.4163 66.459 19.1006C66.3451 18.7816 66.2881 18.4333 66.2881 18.0557V17.8457C66.2881 17.4388 66.3483 17.071 66.4688 16.7422C66.5892 16.4134 66.7552 16.1318 66.9668 15.8975C67.1784 15.6631 67.4193 15.484 67.6895 15.3604C67.9629 15.2334 68.2493 15.1699 68.5488 15.1699C68.8841 15.1699 69.182 15.2301 69.4424 15.3506C69.7028 15.4678 69.9209 15.6354 70.0967 15.8535C70.2757 16.0684 70.4108 16.3239 70.502 16.6201C70.5931 16.9131 70.6387 17.237 70.6387 17.5918V17.9482H66.6396V17.4502H70.0576V17.3818C70.0511 17.0856 69.9909 16.8089 69.877 16.5518C69.7663 16.2913 69.6003 16.0798 69.3789 15.917C69.1576 15.7542 68.8809 15.6729 68.5488 15.6729C68.3014 15.6729 68.0736 15.7249 67.8652 15.8291C67.6602 15.9333 67.4827 16.083 67.333 16.2783C67.1865 16.4704 67.0726 16.6999 66.9912 16.9668C66.9131 17.2305 66.874 17.5234 66.874 17.8457V18.0557C66.874 18.3486 66.9163 18.6221 67.001 18.876C67.0889 19.1266 67.2126 19.348 67.3721 19.54C67.5348 19.7321 67.7269 19.8818 67.9482 19.9893C68.1696 20.0967 68.4137 20.1504 68.6807 20.1504C68.9932 20.1504 69.2699 20.0934 69.5107 19.9795C69.7516 19.8623 69.9681 19.6784 70.1602 19.4277L70.5264 19.7109C70.4124 19.8802 70.2692 20.0365 70.0967 20.1797C69.9274 20.3229 69.724 20.4368 69.4863 20.5215C69.2487 20.6061 68.972 20.6484 68.6562 20.6484Z" fill="#0A0A0B"></path><path d="M73.7881 15.2676V15.7461H71.1416V15.2676H73.7881ZM72.1133 13.9102H72.6943V19.2666C72.6943 19.5107 72.7269 19.6947 72.792 19.8184C72.8571 19.9421 72.9417 20.0251 73.0459 20.0674C73.1501 20.1097 73.2624 20.1309 73.3828 20.1309C73.4707 20.1309 73.5553 20.126 73.6367 20.1162C73.7181 20.1032 73.7913 20.0902 73.8564 20.0771L73.8809 20.5703C73.8092 20.5931 73.7165 20.611 73.6025 20.624C73.4886 20.6403 73.3747 20.6484 73.2607 20.6484C73.0361 20.6484 72.8376 20.6077 72.665 20.5264C72.4925 20.4417 72.3574 20.2985 72.2598 20.0967C72.1621 19.8916 72.1133 19.6133 72.1133 19.2617V13.9102Z" fill="#0A0A0B"></path><path d="M78.1045 15.2676V20.5508H77.5234V15.2676H78.1045ZM77.4209 13.7393C77.4209 13.6286 77.4551 13.5358 77.5234 13.4609C77.5951 13.3828 77.6927 13.3438 77.8164 13.3438C77.9401 13.3438 78.0378 13.3828 78.1094 13.4609C78.1842 13.5358 78.2217 13.6286 78.2217 13.7393C78.2217 13.8467 78.1842 13.9395 78.1094 14.0176C78.0378 14.0924 77.9401 14.1299 77.8164 14.1299C77.6927 14.1299 77.5951 14.0924 77.5234 14.0176C77.4551 13.9395 77.4209 13.8467 77.4209 13.7393Z" fill="#0A0A0B"></path><path d="M81.6982 15.2676V15.7461H79.0518V15.2676H81.6982ZM80.0234 13.9102H80.6045V19.2666C80.6045 19.5107 80.637 19.6947 80.7021 19.8184C80.7673 19.9421 80.8519 20.0251 80.9561 20.0674C81.0602 20.1097 81.1725 20.1309 81.293 20.1309C81.3809 20.1309 81.4655 20.126 81.5469 20.1162C81.6283 20.1032 81.7015 20.0902 81.7666 20.0771L81.791 20.5703C81.7194 20.5931 81.6266 20.611 81.5127 20.624C81.3988 20.6403 81.2848 20.6484 81.1709 20.6484C80.9463 20.6484 80.7477 20.6077 80.5752 20.5264C80.4027 20.4417 80.2676 20.2985 80.1699 20.0967C80.0723 19.8916 80.0234 19.6133 80.0234 19.2617V13.9102Z" fill="#0A0A0B"></path><path d="M85.043 17.9922V17.8311C85.043 17.4469 85.0983 17.0921 85.209 16.7666C85.3197 16.4411 85.4775 16.1595 85.6826 15.9219C85.891 15.6842 86.14 15.5003 86.4297 15.3701C86.7194 15.2367 87.0417 15.1699 87.3965 15.1699C87.7546 15.1699 88.0785 15.2367 88.3682 15.3701C88.6579 15.5003 88.9069 15.6842 89.1152 15.9219C89.3236 16.1595 89.4831 16.4411 89.5938 16.7666C89.7044 17.0921 89.7598 17.4469 89.7598 17.8311V17.9922C89.7598 18.3763 89.7044 18.7311 89.5938 19.0566C89.4831 19.3789 89.3236 19.6589 89.1152 19.8965C88.9102 20.1341 88.6628 20.3197 88.373 20.4531C88.0833 20.5833 87.7611 20.6484 87.4062 20.6484C87.0482 20.6484 86.7243 20.5833 86.4346 20.4531C86.1449 20.3197 85.8958 20.1341 85.6875 19.8965C85.4792 19.6589 85.3197 19.3789 85.209 19.0566C85.0983 18.7311 85.043 18.3763 85.043 17.9922ZM85.624 17.8311V17.9922C85.624 18.2819 85.6631 18.557 85.7412 18.8174C85.8193 19.0745 85.9333 19.304 86.083 19.5059C86.2327 19.7044 86.4183 19.8607 86.6396 19.9746C86.861 20.0885 87.1165 20.1455 87.4062 20.1455C87.6927 20.1455 87.945 20.0885 88.1631 19.9746C88.3844 19.8607 88.57 19.7044 88.7197 19.5059C88.8695 19.304 88.9818 19.0745 89.0566 18.8174C89.1348 18.557 89.1738 18.2819 89.1738 17.9922V17.8311C89.1738 17.5446 89.1348 17.2728 89.0566 17.0156C88.9818 16.7585 88.8678 16.529 88.7148 16.3271C88.5651 16.1253 88.3796 15.9658 88.1582 15.8486C87.9368 15.7314 87.6829 15.6729 87.3965 15.6729C87.11 15.6729 86.8561 15.7314 86.6348 15.8486C86.4167 15.9658 86.2311 16.1253 86.0781 16.3271C85.9284 16.529 85.8145 16.7585 85.7363 17.0156C85.6615 17.2728 85.624 17.5446 85.624 17.8311Z" fill="#0A0A0B"></path><path d="M91.5518 16.3955V20.5508H90.9707V15.2676H91.5273L91.5518 16.3955ZM91.4199 17.582L91.1611 17.4355C91.1807 17.123 91.2441 16.8301 91.3516 16.5566C91.459 16.2832 91.6038 16.0423 91.7861 15.834C91.9717 15.6257 92.1882 15.4629 92.4355 15.3457C92.6862 15.2285 92.9629 15.1699 93.2656 15.1699C93.5293 15.1699 93.7653 15.2057 93.9736 15.2773C94.182 15.349 94.3594 15.4629 94.5059 15.6191C94.6523 15.7754 94.763 15.9756 94.8379 16.2197C94.916 16.4639 94.9551 16.7617 94.9551 17.1133V20.5508H94.3691V17.1084C94.3691 16.7438 94.3187 16.459 94.2178 16.2539C94.1169 16.0456 93.9736 15.8975 93.7881 15.8096C93.6025 15.7217 93.3828 15.6777 93.1289 15.6777C92.849 15.6777 92.6032 15.7396 92.3916 15.8633C92.1833 15.9837 92.0075 16.1416 91.8643 16.3369C91.7243 16.529 91.6169 16.7357 91.542 16.957C91.4671 17.1751 91.4264 17.3835 91.4199 17.582Z" fill="#0A0A0B"></path><path d="M63.2246 37.5205L65.7734 26.7539H67.1973L67.5225 28.5469L64.8066 39.5508H63.2773L63.2246 37.5205ZM61.915 26.7539L64.0244 37.5205L63.8486 39.5508H62.1436L59.3047 26.7539H61.915ZM69.7637 37.4766L71.8467 26.7539H74.457L71.627 39.5508H69.9219L69.7637 37.4766ZM67.9971 26.7539L70.5635 37.5645L70.4932 39.5508H68.9639L66.2305 28.5381L66.582 26.7539H67.9971Z" fill="#0A0A0B"></path><path d="M78.4033 30.041V39.5508H75.8633V30.041H78.4033ZM75.7051 27.5625C75.7051 27.1934 75.834 26.8887 76.0918 26.6484C76.3496 26.4082 76.6953 26.2881 77.1289 26.2881C77.5566 26.2881 77.8994 26.4082 78.1572 26.6484C78.4209 26.8887 78.5527 27.1934 78.5527 27.5625C78.5527 27.9316 78.4209 28.2363 78.1572 28.4766C77.8994 28.7168 77.5566 28.8369 77.1289 28.8369C76.6953 28.8369 76.3496 28.7168 76.0918 28.4766C75.834 28.2363 75.7051 27.9316 75.7051 27.5625Z" fill="#0A0A0B"></path><path d="M82.9736 32.0713V39.5508H80.4424V30.041H82.8154L82.9736 32.0713ZM82.6045 34.4619H81.9189C81.9189 33.7588 82.0098 33.126 82.1914 32.5635C82.373 31.9951 82.6279 31.5117 82.9561 31.1133C83.2842 30.709 83.6738 30.4014 84.125 30.1904C84.582 29.9736 85.0918 29.8652 85.6543 29.8652C86.0996 29.8652 86.5068 29.9297 86.876 30.0586C87.2451 30.1875 87.5615 30.3926 87.8252 30.6738C88.0947 30.9551 88.2998 31.3271 88.4404 31.79C88.5869 32.2529 88.6602 32.8184 88.6602 33.4863V39.5508H86.1113V33.4775C86.1113 33.0557 86.0527 32.7275 85.9355 32.4932C85.8184 32.2588 85.6455 32.0947 85.417 32.001C85.1943 31.9014 84.9189 31.8516 84.5908 31.8516C84.251 31.8516 83.9551 31.9189 83.7031 32.0537C83.457 32.1885 83.252 32.376 83.0879 32.6162C82.9297 32.8506 82.8096 33.126 82.7275 33.4424C82.6455 33.7588 82.6045 34.0986 82.6045 34.4619Z" fill="#0A0A0B"></path><path d="M96.2012 37.4766V26.0508H98.75V39.5508H96.4561L96.2012 37.4766ZM90.1895 34.9102V34.7256C90.1895 33.999 90.2715 33.3398 90.4355 32.748C90.5996 32.1504 90.8398 31.6377 91.1562 31.21C91.4727 30.7822 91.8623 30.4512 92.3252 30.2168C92.7881 29.9824 93.3154 29.8652 93.9072 29.8652C94.4639 29.8652 94.9502 29.9824 95.3662 30.2168C95.7881 30.4512 96.1455 30.7852 96.4385 31.2188C96.7373 31.6465 96.9775 32.1533 97.1592 32.7393C97.3408 33.3193 97.4727 33.9551 97.5547 34.6465V35.0508C97.4727 35.7129 97.3408 36.3281 97.1592 36.8965C96.9775 37.4648 96.7373 37.9629 96.4385 38.3906C96.1455 38.8125 95.7881 39.1406 95.3662 39.375C94.9443 39.6094 94.4521 39.7266 93.8896 39.7266C93.2979 39.7266 92.7705 39.6064 92.3076 39.3662C91.8506 39.126 91.4639 38.7891 91.1475 38.3555C90.8369 37.9219 90.5996 37.4121 90.4355 36.8262C90.2715 36.2402 90.1895 35.6016 90.1895 34.9102ZM92.7207 34.7256V34.9102C92.7207 35.3027 92.75 35.6689 92.8086 36.0088C92.873 36.3486 92.9756 36.6504 93.1162 36.9141C93.2627 37.1719 93.4502 37.374 93.6787 37.5205C93.9131 37.6611 94.1973 37.7314 94.5312 37.7314C94.9648 37.7314 95.3223 37.6348 95.6035 37.4414C95.8848 37.2422 96.0986 36.9697 96.2451 36.624C96.3975 36.2783 96.4854 35.8799 96.5088 35.4287V34.2773C96.4912 33.9082 96.4385 33.5771 96.3506 33.2842C96.2686 32.9854 96.1455 32.7305 95.9814 32.5195C95.8232 32.3086 95.624 32.1445 95.3838 32.0273C95.1494 31.9102 94.8711 31.8516 94.5488 31.8516C94.2207 31.8516 93.9395 31.9277 93.7051 32.0801C93.4707 32.2266 93.2803 32.4287 93.1338 32.6865C92.9932 32.9443 92.8877 33.249 92.8174 33.6006C92.7529 33.9463 92.7207 34.3213 92.7207 34.7256Z" fill="#0A0A0B"></path><path d="M100.323 34.8926V34.708C100.323 34.0107 100.423 33.3691 100.622 32.7832C100.821 32.1914 101.111 31.6787 101.492 31.2451C101.873 30.8115 102.342 30.4746 102.898 30.2344C103.455 29.9883 104.094 29.8652 104.814 29.8652C105.535 29.8652 106.177 29.9883 106.739 30.2344C107.302 30.4746 107.773 30.8115 108.154 31.2451C108.541 31.6787 108.834 32.1914 109.033 32.7832C109.232 33.3691 109.332 34.0107 109.332 34.708V34.8926C109.332 35.584 109.232 36.2256 109.033 36.8174C108.834 37.4033 108.541 37.916 108.154 38.3555C107.773 38.7891 107.305 39.126 106.748 39.3662C106.191 39.6064 105.553 39.7266 104.832 39.7266C104.111 39.7266 103.47 39.6064 102.907 39.3662C102.351 39.126 101.879 38.7891 101.492 38.3555C101.111 37.916 100.821 37.4033 100.622 36.8174C100.423 36.2256 100.323 35.584 100.323 34.8926ZM102.854 34.708V34.8926C102.854 35.291 102.89 35.6631 102.96 36.0088C103.03 36.3545 103.142 36.6592 103.294 36.9229C103.452 37.1807 103.657 37.3828 103.909 37.5293C104.161 37.6758 104.469 37.749 104.832 37.749C105.184 37.749 105.485 37.6758 105.737 37.5293C105.989 37.3828 106.191 37.1807 106.344 36.9229C106.496 36.6592 106.607 36.3545 106.678 36.0088C106.754 35.6631 106.792 35.291 106.792 34.8926V34.708C106.792 34.3213 106.754 33.958 106.678 33.6182C106.607 33.2725 106.493 32.9678 106.335 32.7041C106.183 32.4346 105.98 32.2236 105.729 32.0713C105.477 31.9189 105.172 31.8428 104.814 31.8428C104.457 31.8428 104.152 31.9189 103.9 32.0713C103.654 32.2236 103.452 32.4346 103.294 32.7041C103.142 32.9678 103.03 33.2725 102.96 33.6182C102.89 33.958 102.854 34.3213 102.854 34.708Z" fill="#0A0A0B"></path><path d="M113.604 37.0898L115.581 30.041H117.189L116.671 32.8096L114.693 39.5508H113.349L113.604 37.0898ZM112.602 30.041L114.017 37.0811L114.148 39.5508H112.566L110.158 30.041H112.602ZM119 36.9668L120.38 30.041H122.832L120.424 39.5508H118.851L119 36.9668ZM117.409 30.041L119.378 37.0371L119.65 39.5508H118.297L116.319 32.8184L115.818 30.041H117.409Z" fill="#0A0A0B"></path><path d="M129.248 36.9229C129.248 36.7412 129.195 36.5771 129.09 36.4307C128.984 36.2842 128.788 36.1494 128.501 36.0264C128.22 35.8975 127.812 35.7803 127.279 35.6748C126.799 35.5693 126.351 35.4375 125.935 35.2793C125.524 35.1152 125.167 34.9189 124.862 34.6904C124.563 34.4619 124.329 34.1924 124.159 33.8818C123.989 33.5654 123.904 33.2051 123.904 32.8008C123.904 32.4023 123.989 32.0273 124.159 31.6758C124.335 31.3242 124.584 31.0137 124.906 30.7441C125.234 30.4688 125.633 30.2549 126.102 30.1025C126.576 29.9443 127.109 29.8652 127.701 29.8652C128.527 29.8652 129.236 29.9971 129.828 30.2607C130.426 30.5244 130.883 30.8877 131.199 31.3506C131.521 31.8076 131.683 32.3291 131.683 32.915H129.151C129.151 32.6689 129.099 32.4492 128.993 32.2559C128.894 32.0566 128.735 31.9014 128.519 31.79C128.308 31.6729 128.032 31.6143 127.692 31.6143C127.411 31.6143 127.168 31.6641 126.963 31.7637C126.758 31.8574 126.6 31.9863 126.488 32.1504C126.383 32.3086 126.33 32.4844 126.33 32.6777C126.33 32.8242 126.359 32.9561 126.418 33.0732C126.482 33.1846 126.585 33.2871 126.726 33.3809C126.866 33.4746 127.048 33.5625 127.271 33.6445C127.499 33.7207 127.78 33.791 128.114 33.8555C128.8 33.9961 129.412 34.1807 129.951 34.4092C130.49 34.6318 130.918 34.9365 131.234 35.3232C131.551 35.7041 131.709 36.2051 131.709 36.8262C131.709 37.248 131.615 37.6348 131.428 37.9863C131.24 38.3379 130.971 38.6455 130.619 38.9092C130.268 39.167 129.846 39.3691 129.354 39.5156C128.867 39.6562 128.319 39.7266 127.71 39.7266C126.825 39.7266 126.075 39.5684 125.46 39.252C124.851 38.9355 124.388 38.5342 124.071 38.0479C123.761 37.5557 123.605 37.0518 123.605 36.5361H126.005C126.017 36.8818 126.104 37.1602 126.269 37.3711C126.438 37.582 126.652 37.7344 126.91 37.8281C127.174 37.9219 127.458 37.9688 127.763 37.9688C128.091 37.9688 128.363 37.9248 128.58 37.8369C128.797 37.7432 128.961 37.6201 129.072 37.4678C129.189 37.3096 129.248 37.1279 129.248 36.9229Z" fill="#0A0A0B"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconDownloadWindows.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const IconDownloadWindows = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "158",
    height: "56",
    viewBox: "0 0 158 56",
    fill: "none"
  }, _attrs))}><path d="M0.5 7.55078C0.5 3.96093 3.41015 1.05078 7 1.05078H151C154.59 1.05078 157.5 3.96093 157.5 7.55078V48.5508C157.5 52.1406 154.59 55.0508 151 55.0508H7C3.41015 55.0508 0.5 52.1406 0.5 48.5508V7.55078Z" stroke="#0A0A0B"></path><path d="M58.8496 20.5508H57.2383L57.248 20.0381H58.8496C59.3607 20.0381 59.8001 19.9242 60.168 19.6963C60.5391 19.4652 60.8255 19.1462 61.0273 18.7393C61.2292 18.3324 61.3301 17.8604 61.3301 17.3232V16.6592C61.3301 16.249 61.2715 15.8779 61.1543 15.5459C61.0404 15.2139 60.876 14.9307 60.6611 14.6963C60.4463 14.4587 60.1891 14.2764 59.8896 14.1494C59.5934 14.0225 59.2614 13.959 58.8936 13.959H57.209V13.4414H58.8936C59.3363 13.4414 59.7415 13.5179 60.1094 13.6709C60.4805 13.8206 60.8011 14.0387 61.0713 14.3252C61.3447 14.6084 61.5547 14.9486 61.7012 15.3457C61.8509 15.7428 61.9258 16.1855 61.9258 16.6738V17.3232C61.9258 17.8115 61.8509 18.2542 61.7012 18.6514C61.5547 19.0485 61.3447 19.3887 61.0713 19.6719C60.7979 19.9551 60.474 20.1732 60.0996 20.3262C59.7253 20.4759 59.3086 20.5508 58.8496 20.5508ZM57.5068 13.4414V20.5508H56.9062V13.4414H57.5068Z" fill="#0A0A0B"></path><path d="M63 17.9922V17.8311C63 17.4469 63.0553 17.0921 63.166 16.7666C63.2767 16.4411 63.4346 16.1595 63.6396 15.9219C63.848 15.6842 64.097 15.5003 64.3867 15.3701C64.6764 15.2367 64.9987 15.1699 65.3535 15.1699C65.7116 15.1699 66.0355 15.2367 66.3252 15.3701C66.6149 15.5003 66.8639 15.6842 67.0723 15.9219C67.2806 16.1595 67.4401 16.4411 67.5508 16.7666C67.6615 17.0921 67.7168 17.4469 67.7168 17.8311V17.9922C67.7168 18.3763 67.6615 18.7311 67.5508 19.0566C67.4401 19.3789 67.2806 19.6589 67.0723 19.8965C66.8672 20.1341 66.6198 20.3197 66.3301 20.4531C66.0404 20.5833 65.7181 20.6484 65.3633 20.6484C65.0052 20.6484 64.6813 20.5833 64.3916 20.4531C64.1019 20.3197 63.8529 20.1341 63.6445 19.8965C63.4362 19.6589 63.2767 19.3789 63.166 19.0566C63.0553 18.7311 63 18.3763 63 17.9922ZM63.5811 17.8311V17.9922C63.5811 18.2819 63.6201 18.557 63.6982 18.8174C63.7764 19.0745 63.8903 19.304 64.04 19.5059C64.1898 19.7044 64.3753 19.8607 64.5967 19.9746C64.818 20.0885 65.0736 20.1455 65.3633 20.1455C65.6497 20.1455 65.902 20.0885 66.1201 19.9746C66.3415 19.8607 66.527 19.7044 66.6768 19.5059C66.8265 19.304 66.9388 19.0745 67.0137 18.8174C67.0918 18.557 67.1309 18.2819 67.1309 17.9922V17.8311C67.1309 17.5446 67.0918 17.2728 67.0137 17.0156C66.9388 16.7585 66.8249 16.529 66.6719 16.3271C66.5221 16.1253 66.3366 15.9658 66.1152 15.8486C65.8939 15.7314 65.64 15.6729 65.3535 15.6729C65.0671 15.6729 64.8132 15.7314 64.5918 15.8486C64.3737 15.9658 64.1882 16.1253 64.0352 16.3271C63.8854 16.529 63.7715 16.7585 63.6934 17.0156C63.6185 17.2728 63.5811 17.5446 63.5811 17.8311Z" fill="#0A0A0B"></path><path d="M70.3926 19.3154L71.667 15.2676H72.0771L71.833 16.3564L70.5 20.5508H70.0898L70.3926 19.3154ZM69.0693 15.2676L70.1875 19.3398L70.4268 20.5508H70.002L68.4688 15.2676H69.0693ZM73.6641 19.3252L74.7529 15.2676H75.3535L73.8203 20.5508H73.4004L73.6641 19.3252ZM72.1602 15.2676L73.415 19.2812L73.7324 20.5508H73.3223L71.96 16.3516L71.7305 15.2676H72.1602Z" fill="#0A0A0B"></path><path d="M77.0576 16.3955V20.5508H76.4766V15.2676H77.0332L77.0576 16.3955ZM76.9258 17.582L76.667 17.4355C76.6865 17.123 76.75 16.8301 76.8574 16.5566C76.9648 16.2832 77.1097 16.0423 77.292 15.834C77.4775 15.6257 77.694 15.4629 77.9414 15.3457C78.1921 15.2285 78.4688 15.1699 78.7715 15.1699C79.0352 15.1699 79.2712 15.2057 79.4795 15.2773C79.6878 15.349 79.8652 15.4629 80.0117 15.6191C80.1582 15.7754 80.2689 15.9756 80.3438 16.2197C80.4219 16.4639 80.4609 16.7617 80.4609 17.1133V20.5508H79.875V17.1084C79.875 16.7438 79.8245 16.459 79.7236 16.2539C79.6227 16.0456 79.4795 15.8975 79.2939 15.8096C79.1084 15.7217 78.8887 15.6777 78.6348 15.6777C78.3548 15.6777 78.109 15.7396 77.8975 15.8633C77.6891 15.9837 77.5133 16.1416 77.3701 16.3369C77.2301 16.529 77.1227 16.7357 77.0479 16.957C76.973 17.1751 76.9323 17.3835 76.9258 17.582Z" fill="#0A0A0B"></path><path d="M82.624 13.0508V20.5508H82.043V13.0508H82.624Z" fill="#0A0A0B"></path><path d="M83.8984 17.9922V17.8311C83.8984 17.4469 83.9538 17.0921 84.0645 16.7666C84.1751 16.4411 84.333 16.1595 84.5381 15.9219C84.7464 15.6842 84.9954 15.5003 85.2852 15.3701C85.5749 15.2367 85.8971 15.1699 86.252 15.1699C86.61 15.1699 86.9339 15.2367 87.2236 15.3701C87.5133 15.5003 87.7624 15.6842 87.9707 15.9219C88.179 16.1595 88.3385 16.4411 88.4492 16.7666C88.5599 17.0921 88.6152 17.4469 88.6152 17.8311V17.9922C88.6152 18.3763 88.5599 18.7311 88.4492 19.0566C88.3385 19.3789 88.179 19.6589 87.9707 19.8965C87.7656 20.1341 87.5182 20.3197 87.2285 20.4531C86.9388 20.5833 86.6165 20.6484 86.2617 20.6484C85.9036 20.6484 85.5798 20.5833 85.29 20.4531C85.0003 20.3197 84.7513 20.1341 84.543 19.8965C84.3346 19.6589 84.1751 19.3789 84.0645 19.0566C83.9538 18.7311 83.8984 18.3763 83.8984 17.9922ZM84.4795 17.8311V17.9922C84.4795 18.2819 84.5186 18.557 84.5967 18.8174C84.6748 19.0745 84.7887 19.304 84.9385 19.5059C85.0882 19.7044 85.2738 19.8607 85.4951 19.9746C85.7165 20.0885 85.972 20.1455 86.2617 20.1455C86.5482 20.1455 86.8005 20.0885 87.0186 19.9746C87.2399 19.8607 87.4255 19.7044 87.5752 19.5059C87.7249 19.304 87.8372 19.0745 87.9121 18.8174C87.9902 18.557 88.0293 18.2819 88.0293 17.9922V17.8311C88.0293 17.5446 87.9902 17.2728 87.9121 17.0156C87.8372 16.7585 87.7233 16.529 87.5703 16.3271C87.4206 16.1253 87.235 15.9658 87.0137 15.8486C86.7923 15.7314 86.5384 15.6729 86.252 15.6729C85.9655 15.6729 85.7116 15.7314 85.4902 15.8486C85.2721 15.9658 85.0866 16.1253 84.9336 16.3271C84.7839 16.529 84.6699 16.7585 84.5918 17.0156C84.5169 17.2728 84.4795 17.5446 84.4795 17.8311Z" fill="#0A0A0B"></path><path d="M93.0391 19.6035V16.8789C93.0391 16.6283 92.987 16.4118 92.8828 16.2295C92.7786 16.0472 92.6257 15.9072 92.4238 15.8096C92.222 15.7119 91.973 15.6631 91.6768 15.6631C91.4033 15.6631 91.1592 15.7119 90.9443 15.8096C90.7327 15.904 90.5651 16.0326 90.4414 16.1953C90.321 16.3548 90.2607 16.5322 90.2607 16.7275L89.6748 16.7227C89.6748 16.5241 89.7236 16.332 89.8213 16.1465C89.9189 15.9609 90.0573 15.7949 90.2363 15.6484C90.4154 15.502 90.6286 15.3864 90.876 15.3018C91.1266 15.2139 91.4017 15.1699 91.7012 15.1699C92.0788 15.1699 92.4108 15.2334 92.6973 15.3604C92.987 15.4873 93.2132 15.6777 93.376 15.9316C93.5387 16.1855 93.6201 16.5046 93.6201 16.8887V19.4424C93.6201 19.6247 93.6331 19.8135 93.6592 20.0088C93.6885 20.2041 93.7292 20.3652 93.7812 20.4922V20.5508H93.1611C93.1221 20.4336 93.0911 20.2871 93.0684 20.1113C93.0488 19.9323 93.0391 19.763 93.0391 19.6035ZM93.1758 17.4746L93.1855 17.9238H92.0381C91.7386 17.9238 91.4701 17.9515 91.2324 18.0068C90.998 18.0589 90.7995 18.137 90.6367 18.2412C90.474 18.3421 90.3486 18.4642 90.2607 18.6074C90.1761 18.7507 90.1338 18.9134 90.1338 19.0957C90.1338 19.2845 90.181 19.457 90.2754 19.6133C90.373 19.7695 90.5098 19.8949 90.6855 19.9893C90.8646 20.0804 91.0762 20.126 91.3203 20.126C91.6458 20.126 91.9323 20.0658 92.1797 19.9453C92.4303 19.8249 92.637 19.667 92.7998 19.4717C92.9626 19.2764 93.0716 19.0632 93.127 18.832L93.3809 19.1689C93.3385 19.3317 93.2604 19.4993 93.1465 19.6719C93.0358 19.8411 92.8909 20.0007 92.7119 20.1504C92.5329 20.2969 92.3213 20.4173 92.0771 20.5117C91.8363 20.6029 91.5628 20.6484 91.2568 20.6484C90.9118 20.6484 90.6107 20.5833 90.3535 20.4531C90.0996 20.3229 89.901 20.1455 89.7578 19.9209C89.6178 19.693 89.5479 19.4359 89.5479 19.1494C89.5479 18.889 89.6032 18.6562 89.7139 18.4512C89.8245 18.2428 89.9841 18.0671 90.1924 17.9238C90.404 17.7773 90.6579 17.6667 90.9541 17.5918C91.2536 17.5137 91.5889 17.4746 91.96 17.4746H93.1758Z" fill="#0A0A0B"></path><path d="M98.6201 19.5254V13.0508H99.2061V20.5508H98.6592L98.6201 19.5254ZM94.9531 17.9629V17.8604C94.9531 17.4502 95.0003 17.0807 95.0947 16.752C95.1891 16.4199 95.3242 16.1367 95.5 15.9023C95.679 15.6647 95.8939 15.484 96.1445 15.3604C96.3952 15.2334 96.6784 15.1699 96.9941 15.1699C97.3034 15.1699 97.5768 15.2204 97.8145 15.3213C98.0521 15.4222 98.2555 15.5671 98.4248 15.7559C98.5973 15.9447 98.7357 16.1693 98.8398 16.4297C98.9473 16.6901 99.0254 16.9798 99.0742 17.2988V18.6025C99.0352 18.902 98.9635 19.1771 98.8594 19.4277C98.7552 19.6751 98.6169 19.8916 98.4443 20.0771C98.2718 20.2594 98.0635 20.401 97.8193 20.502C97.5784 20.5996 97.3001 20.6484 96.9844 20.6484C96.6719 20.6484 96.3903 20.5833 96.1396 20.4531C95.889 20.3229 95.6758 20.139 95.5 19.9014C95.3242 19.6605 95.1891 19.3757 95.0947 19.0469C95.0003 18.7181 94.9531 18.3568 94.9531 17.9629ZM95.5391 17.8604V17.9629C95.5391 18.2721 95.57 18.5586 95.6318 18.8223C95.6937 19.0859 95.7881 19.3154 95.915 19.5107C96.042 19.7061 96.2031 19.859 96.3984 19.9697C96.5938 20.0804 96.8249 20.1357 97.0918 20.1357C97.4271 20.1357 97.7087 20.0723 97.9365 19.9453C98.1644 19.8151 98.3467 19.6442 98.4834 19.4326C98.6201 19.2178 98.7194 18.9834 98.7812 18.7295V17.2109C98.7422 17.0384 98.6852 16.8626 98.6104 16.6836C98.5355 16.5046 98.4329 16.3402 98.3027 16.1904C98.1758 16.0374 98.013 15.9154 97.8145 15.8242C97.6191 15.7298 97.3815 15.6826 97.1016 15.6826C96.8314 15.6826 96.5986 15.738 96.4033 15.8486C96.208 15.9593 96.0452 16.1139 95.915 16.3125C95.7881 16.5078 95.6937 16.7373 95.6318 17.001C95.57 17.2646 95.5391 17.5511 95.5391 17.8604Z" fill="#0A0A0B"></path><path d="M59.5166 32.0098V39.5508H56.9766V30.041H59.3584L59.5166 32.0098ZM59.165 34.4619H58.4619C58.4619 33.7998 58.541 33.1904 58.6992 32.6338C58.8633 32.0713 59.1006 31.585 59.4111 31.1748C59.7275 30.7588 60.1172 30.4365 60.5801 30.208C61.043 29.9795 61.5791 29.8652 62.1885 29.8652C62.6104 29.8652 62.9971 29.9297 63.3486 30.0586C63.7002 30.1816 64.002 30.3779 64.2539 30.6475C64.5117 30.9111 64.7109 31.2568 64.8516 31.6846C64.9922 32.1064 65.0625 32.6133 65.0625 33.2051V39.5508H62.5312V33.4863C62.5312 33.0527 62.4727 32.7188 62.3555 32.4844C62.2383 32.25 62.0713 32.0859 61.8545 31.9922C61.6436 31.8984 61.3887 31.8516 61.0898 31.8516C60.7617 31.8516 60.4746 31.9189 60.2285 32.0537C59.9883 32.1885 59.7891 32.376 59.6309 32.6162C59.4727 32.8506 59.3555 33.126 59.2793 33.4424C59.2031 33.7588 59.165 34.0986 59.165 34.4619ZM64.8252 34.1719L63.9199 34.2861C63.9199 33.665 63.9961 33.0879 64.1484 32.5547C64.3066 32.0215 64.5381 31.5527 64.8428 31.1484C65.1533 30.7441 65.5371 30.4307 65.9941 30.208C66.4512 29.9795 66.9785 29.8652 67.5762 29.8652C68.0332 29.8652 68.4492 29.9326 68.8242 30.0674C69.1992 30.1963 69.5186 30.4043 69.7822 30.6914C70.0518 30.9727 70.2568 31.3418 70.3975 31.7988C70.5439 32.2559 70.6172 32.8154 70.6172 33.4775V39.5508H68.0771V33.4775C68.0771 33.0381 68.0186 32.7041 67.9014 32.4756C67.79 32.2412 67.626 32.0801 67.4092 31.9922C67.1982 31.8984 66.9463 31.8516 66.6533 31.8516C66.3486 31.8516 66.082 31.9131 65.8535 32.0361C65.625 32.1533 65.4346 32.3174 65.2822 32.5283C65.1299 32.7393 65.0156 32.9854 64.9395 33.2666C64.8633 33.542 64.8252 33.8438 64.8252 34.1719Z" fill="#0A0A0B"></path><path d="M77.71 37.4062V33.1699C77.71 32.8652 77.6602 32.6045 77.5605 32.3877C77.4609 32.165 77.3057 31.9922 77.0947 31.8691C76.8896 31.7461 76.623 31.6846 76.2949 31.6846C76.0137 31.6846 75.7705 31.7344 75.5654 31.834C75.3604 31.9277 75.2021 32.0654 75.0908 32.2471C74.9795 32.4229 74.9238 32.6309 74.9238 32.8711H72.3926C72.3926 32.4668 72.4863 32.083 72.6738 31.7197C72.8613 31.3564 73.1338 31.0371 73.4912 30.7617C73.8486 30.4805 74.2734 30.2607 74.7656 30.1025C75.2637 29.9443 75.8203 29.8652 76.4355 29.8652C77.1738 29.8652 77.8301 29.9883 78.4043 30.2344C78.9785 30.4805 79.4297 30.8496 79.7578 31.3418C80.0918 31.834 80.2588 32.4492 80.2588 33.1875V37.2568C80.2588 37.7783 80.291 38.2061 80.3555 38.54C80.4199 38.8682 80.5137 39.1553 80.6367 39.4014V39.5508H78.0791C77.9561 39.293 77.8623 38.9707 77.7979 38.584C77.7393 38.1914 77.71 37.7988 77.71 37.4062ZM78.0439 33.7588L78.0615 35.1914H76.6465C76.3125 35.1914 76.0225 35.2295 75.7764 35.3057C75.5303 35.3818 75.3281 35.4902 75.1699 35.6309C75.0117 35.7656 74.8945 35.9238 74.8184 36.1055C74.748 36.2871 74.7129 36.4863 74.7129 36.7031C74.7129 36.9199 74.7627 37.1162 74.8623 37.292C74.9619 37.4619 75.1055 37.5967 75.293 37.6963C75.4805 37.79 75.7002 37.8369 75.9521 37.8369C76.333 37.8369 76.6641 37.7607 76.9453 37.6084C77.2266 37.4561 77.4434 37.2686 77.5957 37.0459C77.7539 36.8232 77.8359 36.6123 77.8418 36.4131L78.5098 37.4854C78.416 37.7256 78.2871 37.9746 78.123 38.2324C77.9648 38.4902 77.7627 38.7334 77.5166 38.9619C77.2705 39.1846 76.9746 39.3691 76.6289 39.5156C76.2832 39.6562 75.873 39.7266 75.3984 39.7266C74.7949 39.7266 74.2471 39.6064 73.7549 39.3662C73.2686 39.1201 72.8818 38.7832 72.5947 38.3555C72.3135 37.9219 72.1729 37.4297 72.1729 36.8789C72.1729 36.3809 72.2666 35.9385 72.4541 35.5518C72.6416 35.165 72.917 34.8398 73.2803 34.5762C73.6494 34.3066 74.1094 34.1045 74.6602 33.9697C75.2109 33.8291 75.8496 33.7588 76.5762 33.7588H78.0439Z" fill="#0A0A0B"></path><path d="M86.1387 37.749C86.4492 37.749 86.7246 37.6904 86.9648 37.5732C87.2051 37.4502 87.3926 37.2803 87.5273 37.0635C87.668 36.8408 87.7412 36.5801 87.7471 36.2812H90.1289C90.123 36.9492 89.9443 37.5439 89.5928 38.0654C89.2412 38.5811 88.7695 38.9883 88.1777 39.2871C87.5859 39.5801 86.9238 39.7266 86.1914 39.7266C85.4531 39.7266 84.8086 39.6035 84.2578 39.3574C83.7129 39.1113 83.2588 38.7715 82.8955 38.3379C82.5322 37.8984 82.2598 37.3887 82.0781 36.8086C81.8965 36.2227 81.8057 35.5957 81.8057 34.9277V34.6729C81.8057 33.999 81.8965 33.3721 82.0781 32.792C82.2598 32.2061 82.5322 31.6963 82.8955 31.2627C83.2588 30.8232 83.7129 30.4805 84.2578 30.2344C84.8027 29.9883 85.4414 29.8652 86.1738 29.8652C86.9531 29.8652 87.6357 30.0146 88.2217 30.3135C88.8135 30.6123 89.2764 31.04 89.6104 31.5967C89.9502 32.1475 90.123 32.8008 90.1289 33.5566H87.7471C87.7412 33.2402 87.6738 32.9531 87.5449 32.6953C87.4219 32.4375 87.2402 32.2324 87 32.0801C86.7656 31.9219 86.4756 31.8428 86.1299 31.8428C85.7607 31.8428 85.459 31.9219 85.2246 32.0801C84.9902 32.2324 84.8086 32.4434 84.6797 32.7129C84.5508 32.9766 84.46 33.2783 84.4072 33.6182C84.3604 33.9521 84.3369 34.3037 84.3369 34.6729V34.9277C84.3369 35.2969 84.3604 35.6514 84.4072 35.9912C84.4541 36.3311 84.542 36.6328 84.6709 36.8965C84.8057 37.1602 84.9902 37.3682 85.2246 37.5205C85.459 37.6729 85.7637 37.749 86.1387 37.749Z" fill="#0A0A0B"></path><path d="M102.267 32.8535V33.46C102.267 34.4326 102.135 35.3057 101.871 36.0791C101.607 36.8525 101.235 37.5117 100.755 38.0566C100.274 38.5957 99.7002 39.0088 99.0322 39.2959C98.3701 39.583 97.6348 39.7266 96.8262 39.7266C96.0234 39.7266 95.2881 39.583 94.6201 39.2959C93.958 39.0088 93.3838 38.5957 92.8975 38.0566C92.4111 37.5117 92.0332 36.8525 91.7637 36.0791C91.5 35.3057 91.3682 34.4326 91.3682 33.46V32.8535C91.3682 31.875 91.5 31.002 91.7637 30.2344C92.0273 29.4609 92.3994 28.8018 92.8799 28.2568C93.3662 27.7119 93.9404 27.2959 94.6025 27.0088C95.2705 26.7217 96.0059 26.5781 96.8086 26.5781C97.6172 26.5781 98.3525 26.7217 99.0146 27.0088C99.6826 27.2959 100.257 27.7119 100.737 28.2568C101.224 28.8018 101.599 29.4609 101.862 30.2344C102.132 31.002 102.267 31.875 102.267 32.8535ZM99.6035 33.46V32.8359C99.6035 32.1562 99.542 31.5586 99.4189 31.043C99.2959 30.5273 99.1143 30.0938 98.874 29.7422C98.6338 29.3906 98.3408 29.127 97.9951 28.9512C97.6494 28.7695 97.2539 28.6787 96.8086 28.6787C96.3633 28.6787 95.9678 28.7695 95.6221 28.9512C95.2822 29.127 94.9922 29.3906 94.752 29.7422C94.5176 30.0938 94.3389 30.5273 94.2158 31.043C94.0928 31.5586 94.0312 32.1562 94.0312 32.8359V33.46C94.0312 34.1338 94.0928 34.7314 94.2158 35.2529C94.3389 35.7686 94.5205 36.2051 94.7607 36.5625C95.001 36.9141 95.2939 37.1807 95.6396 37.3623C95.9854 37.5439 96.3809 37.6348 96.8262 37.6348C97.2715 37.6348 97.667 37.5439 98.0127 37.3623C98.3584 37.1807 98.6484 36.9141 98.8828 36.5625C99.1172 36.2051 99.2959 35.7686 99.4189 35.2529C99.542 34.7314 99.6035 34.1338 99.6035 33.46Z" fill="#0A0A0B"></path><path d="M110.827 36.2021C110.827 35.9736 110.792 35.7686 110.722 35.5869C110.657 35.3994 110.534 35.2295 110.353 35.0771C110.171 34.9189 109.916 34.7637 109.588 34.6113C109.26 34.459 108.835 34.3008 108.313 34.1367C107.733 33.9492 107.183 33.7383 106.661 33.5039C106.146 33.2695 105.688 32.9971 105.29 32.6865C104.897 32.3701 104.587 32.0039 104.358 31.5879C104.136 31.1719 104.024 30.6885 104.024 30.1377C104.024 29.6045 104.142 29.1211 104.376 28.6875C104.61 28.248 104.938 27.873 105.36 27.5625C105.782 27.2461 106.28 27.0029 106.854 26.833C107.435 26.6631 108.07 26.5781 108.762 26.5781C109.705 26.5781 110.528 26.748 111.231 27.0879C111.935 27.4277 112.479 27.8936 112.866 28.4854C113.259 29.0771 113.455 29.7539 113.455 30.5156H110.836C110.836 30.1406 110.757 29.8125 110.599 29.5312C110.446 29.2441 110.212 29.0186 109.896 28.8545C109.585 28.6904 109.192 28.6084 108.718 28.6084C108.261 28.6084 107.88 28.6787 107.575 28.8193C107.271 28.9541 107.042 29.1387 106.89 29.373C106.737 29.6016 106.661 29.8594 106.661 30.1465C106.661 30.3633 106.714 30.5596 106.819 30.7354C106.931 30.9111 107.095 31.0752 107.312 31.2275C107.528 31.3799 107.795 31.5234 108.111 31.6582C108.428 31.793 108.794 31.9248 109.21 32.0537C109.907 32.2646 110.52 32.502 111.047 32.7656C111.58 33.0293 112.025 33.3252 112.383 33.6533C112.74 33.9814 113.01 34.3535 113.191 34.7695C113.373 35.1855 113.464 35.6572 113.464 36.1846C113.464 36.7412 113.355 37.2393 113.139 37.6787C112.922 38.1182 112.608 38.4902 112.198 38.7949C111.788 39.0996 111.299 39.3311 110.73 39.4893C110.162 39.6475 109.526 39.7266 108.823 39.7266C108.19 39.7266 107.566 39.6445 106.951 39.4805C106.336 39.3105 105.776 39.0557 105.272 38.7158C104.774 38.376 104.376 37.9424 104.077 37.415C103.778 36.8877 103.629 36.2637 103.629 35.543H106.274C106.274 35.9414 106.336 36.2783 106.459 36.5537C106.582 36.8291 106.755 37.0518 106.978 37.2217C107.206 37.3916 107.476 37.5146 107.786 37.5908C108.103 37.667 108.448 37.7051 108.823 37.7051C109.28 37.7051 109.655 37.6406 109.948 37.5117C110.247 37.3828 110.467 37.2041 110.607 36.9756C110.754 36.7471 110.827 36.4893 110.827 36.2021Z" fill="#0A0A0B"></path><path d="M45.4783 28.0826C45.5269 33.0767 50.0756 34.7385 50.1259 34.7597C50.0873 34.8769 49.3991 37.128 47.7295 39.4532C46.2863 41.4635 44.7882 43.4664 42.4284 43.5079C40.11 43.5486 39.3643 42.1976 36.7134 42.1976C34.0633 42.1976 33.2349 43.4664 31.0401 43.5486C28.7623 43.6308 27.0278 41.3748 25.5726 39.3719C22.5988 35.2749 20.3263 27.7946 23.3777 22.7453C24.8936 20.2377 27.6028 18.65 30.5431 18.6092C32.7797 18.5686 34.8909 20.0432 36.2582 20.0432C37.6246 20.0432 40.1902 18.2699 42.8872 18.5303C44.0161 18.5751 47.1856 18.9648 49.2206 21.8036C49.0565 21.9005 45.4389 23.9074 45.4783 28.0826ZM41.1207 15.8198C42.3301 14.4248 43.1439 12.483 42.9219 10.5508C41.1788 10.6175 39.0711 11.6577 37.8208 13.0518C36.7003 14.2865 35.7191 16.2625 35.9839 18.1564C37.9267 18.2997 39.9114 17.2155 41.1207 15.8198Z" fill="#0A0A0B"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconDownloadMacOs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconDownloadMacOs = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "158",
    height: "56",
    viewBox: "0 0 158 56",
    fill: "none"
  }, _attrs))}><path d="M0.5 7.55078C0.5 3.96093 3.41015 1.05078 7 1.05078H151C154.59 1.05078 157.5 3.96093 157.5 7.55078V48.5508C157.5 52.1406 154.59 55.0508 151 55.0508H7C3.41015 55.0508 0.5 52.1406 0.5 48.5508V7.55078Z" stroke="#0A0A0B"></path><path d="M58.8496 20.5508H57.2383L57.248 20.0381H58.8496C59.3607 20.0381 59.8001 19.9242 60.168 19.6963C60.5391 19.4652 60.8255 19.1462 61.0273 18.7393C61.2292 18.3324 61.3301 17.8604 61.3301 17.3232V16.6592C61.3301 16.249 61.2715 15.8779 61.1543 15.5459C61.0404 15.2139 60.876 14.9307 60.6611 14.6963C60.4463 14.4587 60.1891 14.2764 59.8896 14.1494C59.5934 14.0225 59.2614 13.959 58.8936 13.959H57.209V13.4414H58.8936C59.3363 13.4414 59.7415 13.5179 60.1094 13.6709C60.4805 13.8206 60.8011 14.0387 61.0713 14.3252C61.3447 14.6084 61.5547 14.9486 61.7012 15.3457C61.8509 15.7428 61.9258 16.1855 61.9258 16.6738V17.3232C61.9258 17.8115 61.8509 18.2542 61.7012 18.6514C61.5547 19.0485 61.3447 19.3887 61.0713 19.6719C60.7979 19.9551 60.474 20.1732 60.0996 20.3262C59.7253 20.4759 59.3086 20.5508 58.8496 20.5508ZM57.5068 13.4414V20.5508H56.9062V13.4414H57.5068Z" fill="#0A0A0B"></path><path d="M63 17.9922V17.8311C63 17.4469 63.0553 17.0921 63.166 16.7666C63.2767 16.4411 63.4346 16.1595 63.6396 15.9219C63.848 15.6842 64.097 15.5003 64.3867 15.3701C64.6764 15.2367 64.9987 15.1699 65.3535 15.1699C65.7116 15.1699 66.0355 15.2367 66.3252 15.3701C66.6149 15.5003 66.8639 15.6842 67.0723 15.9219C67.2806 16.1595 67.4401 16.4411 67.5508 16.7666C67.6615 17.0921 67.7168 17.4469 67.7168 17.8311V17.9922C67.7168 18.3763 67.6615 18.7311 67.5508 19.0566C67.4401 19.3789 67.2806 19.6589 67.0723 19.8965C66.8672 20.1341 66.6198 20.3197 66.3301 20.4531C66.0404 20.5833 65.7181 20.6484 65.3633 20.6484C65.0052 20.6484 64.6813 20.5833 64.3916 20.4531C64.1019 20.3197 63.8529 20.1341 63.6445 19.8965C63.4362 19.6589 63.2767 19.3789 63.166 19.0566C63.0553 18.7311 63 18.3763 63 17.9922ZM63.5811 17.8311V17.9922C63.5811 18.2819 63.6201 18.557 63.6982 18.8174C63.7764 19.0745 63.8903 19.304 64.04 19.5059C64.1898 19.7044 64.3753 19.8607 64.5967 19.9746C64.818 20.0885 65.0736 20.1455 65.3633 20.1455C65.6497 20.1455 65.902 20.0885 66.1201 19.9746C66.3415 19.8607 66.527 19.7044 66.6768 19.5059C66.8265 19.304 66.9388 19.0745 67.0137 18.8174C67.0918 18.557 67.1309 18.2819 67.1309 17.9922V17.8311C67.1309 17.5446 67.0918 17.2728 67.0137 17.0156C66.9388 16.7585 66.8249 16.529 66.6719 16.3271C66.5221 16.1253 66.3366 15.9658 66.1152 15.8486C65.8939 15.7314 65.64 15.6729 65.3535 15.6729C65.0671 15.6729 64.8132 15.7314 64.5918 15.8486C64.3737 15.9658 64.1882 16.1253 64.0352 16.3271C63.8854 16.529 63.7715 16.7585 63.6934 17.0156C63.6185 17.2728 63.5811 17.5446 63.5811 17.8311Z" fill="#0A0A0B"></path><path d="M70.3926 19.3154L71.667 15.2676H72.0771L71.833 16.3564L70.5 20.5508H70.0898L70.3926 19.3154ZM69.0693 15.2676L70.1875 19.3398L70.4268 20.5508H70.002L68.4688 15.2676H69.0693ZM73.6641 19.3252L74.7529 15.2676H75.3535L73.8203 20.5508H73.4004L73.6641 19.3252ZM72.1602 15.2676L73.415 19.2812L73.7324 20.5508H73.3223L71.96 16.3516L71.7305 15.2676H72.1602Z" fill="#0A0A0B"></path><path d="M77.0576 16.3955V20.5508H76.4766V15.2676H77.0332L77.0576 16.3955ZM76.9258 17.582L76.667 17.4355C76.6865 17.123 76.75 16.8301 76.8574 16.5566C76.9648 16.2832 77.1097 16.0423 77.292 15.834C77.4775 15.6257 77.694 15.4629 77.9414 15.3457C78.1921 15.2285 78.4688 15.1699 78.7715 15.1699C79.0352 15.1699 79.2712 15.2057 79.4795 15.2773C79.6878 15.349 79.8652 15.4629 80.0117 15.6191C80.1582 15.7754 80.2689 15.9756 80.3438 16.2197C80.4219 16.4639 80.4609 16.7617 80.4609 17.1133V20.5508H79.875V17.1084C79.875 16.7438 79.8245 16.459 79.7236 16.2539C79.6227 16.0456 79.4795 15.8975 79.2939 15.8096C79.1084 15.7217 78.8887 15.6777 78.6348 15.6777C78.3548 15.6777 78.109 15.7396 77.8975 15.8633C77.6891 15.9837 77.5133 16.1416 77.3701 16.3369C77.2301 16.529 77.1227 16.7357 77.0479 16.957C76.973 17.1751 76.9323 17.3835 76.9258 17.582Z" fill="#0A0A0B"></path><path d="M82.624 13.0508V20.5508H82.043V13.0508H82.624Z" fill="#0A0A0B"></path><path d="M83.8984 17.9922V17.8311C83.8984 17.4469 83.9538 17.0921 84.0645 16.7666C84.1751 16.4411 84.333 16.1595 84.5381 15.9219C84.7464 15.6842 84.9954 15.5003 85.2852 15.3701C85.5749 15.2367 85.8971 15.1699 86.252 15.1699C86.61 15.1699 86.9339 15.2367 87.2236 15.3701C87.5133 15.5003 87.7624 15.6842 87.9707 15.9219C88.179 16.1595 88.3385 16.4411 88.4492 16.7666C88.5599 17.0921 88.6152 17.4469 88.6152 17.8311V17.9922C88.6152 18.3763 88.5599 18.7311 88.4492 19.0566C88.3385 19.3789 88.179 19.6589 87.9707 19.8965C87.7656 20.1341 87.5182 20.3197 87.2285 20.4531C86.9388 20.5833 86.6165 20.6484 86.2617 20.6484C85.9036 20.6484 85.5798 20.5833 85.29 20.4531C85.0003 20.3197 84.7513 20.1341 84.543 19.8965C84.3346 19.6589 84.1751 19.3789 84.0645 19.0566C83.9538 18.7311 83.8984 18.3763 83.8984 17.9922ZM84.4795 17.8311V17.9922C84.4795 18.2819 84.5186 18.557 84.5967 18.8174C84.6748 19.0745 84.7887 19.304 84.9385 19.5059C85.0882 19.7044 85.2738 19.8607 85.4951 19.9746C85.7165 20.0885 85.972 20.1455 86.2617 20.1455C86.5482 20.1455 86.8005 20.0885 87.0186 19.9746C87.2399 19.8607 87.4255 19.7044 87.5752 19.5059C87.7249 19.304 87.8372 19.0745 87.9121 18.8174C87.9902 18.557 88.0293 18.2819 88.0293 17.9922V17.8311C88.0293 17.5446 87.9902 17.2728 87.9121 17.0156C87.8372 16.7585 87.7233 16.529 87.5703 16.3271C87.4206 16.1253 87.235 15.9658 87.0137 15.8486C86.7923 15.7314 86.5384 15.6729 86.252 15.6729C85.9655 15.6729 85.7116 15.7314 85.4902 15.8486C85.2721 15.9658 85.0866 16.1253 84.9336 16.3271C84.7839 16.529 84.6699 16.7585 84.5918 17.0156C84.5169 17.2728 84.4795 17.5446 84.4795 17.8311Z" fill="#0A0A0B"></path><path d="M93.0391 19.6035V16.8789C93.0391 16.6283 92.987 16.4118 92.8828 16.2295C92.7786 16.0472 92.6257 15.9072 92.4238 15.8096C92.222 15.7119 91.973 15.6631 91.6768 15.6631C91.4033 15.6631 91.1592 15.7119 90.9443 15.8096C90.7327 15.904 90.5651 16.0326 90.4414 16.1953C90.321 16.3548 90.2607 16.5322 90.2607 16.7275L89.6748 16.7227C89.6748 16.5241 89.7236 16.332 89.8213 16.1465C89.9189 15.9609 90.0573 15.7949 90.2363 15.6484C90.4154 15.502 90.6286 15.3864 90.876 15.3018C91.1266 15.2139 91.4017 15.1699 91.7012 15.1699C92.0788 15.1699 92.4108 15.2334 92.6973 15.3604C92.987 15.4873 93.2132 15.6777 93.376 15.9316C93.5387 16.1855 93.6201 16.5046 93.6201 16.8887V19.4424C93.6201 19.6247 93.6331 19.8135 93.6592 20.0088C93.6885 20.2041 93.7292 20.3652 93.7812 20.4922V20.5508H93.1611C93.1221 20.4336 93.0911 20.2871 93.0684 20.1113C93.0488 19.9323 93.0391 19.763 93.0391 19.6035ZM93.1758 17.4746L93.1855 17.9238H92.0381C91.7386 17.9238 91.4701 17.9515 91.2324 18.0068C90.998 18.0589 90.7995 18.137 90.6367 18.2412C90.474 18.3421 90.3486 18.4642 90.2607 18.6074C90.1761 18.7507 90.1338 18.9134 90.1338 19.0957C90.1338 19.2845 90.181 19.457 90.2754 19.6133C90.373 19.7695 90.5098 19.8949 90.6855 19.9893C90.8646 20.0804 91.0762 20.126 91.3203 20.126C91.6458 20.126 91.9323 20.0658 92.1797 19.9453C92.4303 19.8249 92.637 19.667 92.7998 19.4717C92.9626 19.2764 93.0716 19.0632 93.127 18.832L93.3809 19.1689C93.3385 19.3317 93.2604 19.4993 93.1465 19.6719C93.0358 19.8411 92.8909 20.0007 92.7119 20.1504C92.5329 20.2969 92.3213 20.4173 92.0771 20.5117C91.8363 20.6029 91.5628 20.6484 91.2568 20.6484C90.9118 20.6484 90.6107 20.5833 90.3535 20.4531C90.0996 20.3229 89.901 20.1455 89.7578 19.9209C89.6178 19.693 89.5479 19.4359 89.5479 19.1494C89.5479 18.889 89.6032 18.6562 89.7139 18.4512C89.8245 18.2428 89.9841 18.0671 90.1924 17.9238C90.404 17.7773 90.6579 17.6667 90.9541 17.5918C91.2536 17.5137 91.5889 17.4746 91.96 17.4746H93.1758Z" fill="#0A0A0B"></path><path d="M98.6201 19.5254V13.0508H99.2061V20.5508H98.6592L98.6201 19.5254ZM94.9531 17.9629V17.8604C94.9531 17.4502 95.0003 17.0807 95.0947 16.752C95.1891 16.4199 95.3242 16.1367 95.5 15.9023C95.679 15.6647 95.8939 15.484 96.1445 15.3604C96.3952 15.2334 96.6784 15.1699 96.9941 15.1699C97.3034 15.1699 97.5768 15.2204 97.8145 15.3213C98.0521 15.4222 98.2555 15.5671 98.4248 15.7559C98.5973 15.9447 98.7357 16.1693 98.8398 16.4297C98.9473 16.6901 99.0254 16.9798 99.0742 17.2988V18.6025C99.0352 18.902 98.9635 19.1771 98.8594 19.4277C98.7552 19.6751 98.6169 19.8916 98.4443 20.0771C98.2718 20.2594 98.0635 20.401 97.8193 20.502C97.5784 20.5996 97.3001 20.6484 96.9844 20.6484C96.6719 20.6484 96.3903 20.5833 96.1396 20.4531C95.889 20.3229 95.6758 20.139 95.5 19.9014C95.3242 19.6605 95.1891 19.3757 95.0947 19.0469C95.0003 18.7181 94.9531 18.3568 94.9531 17.9629ZM95.5391 17.8604V17.9629C95.5391 18.2721 95.57 18.5586 95.6318 18.8223C95.6937 19.0859 95.7881 19.3154 95.915 19.5107C96.042 19.7061 96.2031 19.859 96.3984 19.9697C96.5938 20.0804 96.8249 20.1357 97.0918 20.1357C97.4271 20.1357 97.7087 20.0723 97.9365 19.9453C98.1644 19.8151 98.3467 19.6442 98.4834 19.4326C98.6201 19.2178 98.7194 18.9834 98.7812 18.7295V17.2109C98.7422 17.0384 98.6852 16.8626 98.6104 16.6836C98.5355 16.5046 98.4329 16.3402 98.3027 16.1904C98.1758 16.0374 98.013 15.9154 97.8145 15.8242C97.6191 15.7298 97.3815 15.6826 97.1016 15.6826C96.8314 15.6826 96.5986 15.738 96.4033 15.8486C96.208 15.9593 96.0452 16.1139 95.915 16.3125C95.7881 16.5078 95.6937 16.7373 95.6318 17.001C95.57 17.2646 95.5391 17.5511 95.5391 17.8604Z" fill="#0A0A0B"></path><path d="M102.863 17.9922V17.8311C102.863 17.4469 102.919 17.0921 103.029 16.7666C103.14 16.4411 103.298 16.1595 103.503 15.9219C103.711 15.6842 103.96 15.5003 104.25 15.3701C104.54 15.2367 104.862 15.1699 105.217 15.1699C105.575 15.1699 105.899 15.2367 106.188 15.3701C106.478 15.5003 106.727 15.6842 106.936 15.9219C107.144 16.1595 107.303 16.4411 107.414 16.7666C107.525 17.0921 107.58 17.4469 107.58 17.8311V17.9922C107.58 18.3763 107.525 18.7311 107.414 19.0566C107.303 19.3789 107.144 19.6589 106.936 19.8965C106.73 20.1341 106.483 20.3197 106.193 20.4531C105.904 20.5833 105.581 20.6484 105.227 20.6484C104.868 20.6484 104.545 20.5833 104.255 20.4531C103.965 20.3197 103.716 20.1341 103.508 19.8965C103.299 19.6589 103.14 19.3789 103.029 19.0566C102.919 18.7311 102.863 18.3763 102.863 17.9922ZM103.444 17.8311V17.9922C103.444 18.2819 103.483 18.557 103.562 18.8174C103.64 19.0745 103.754 19.304 103.903 19.5059C104.053 19.7044 104.239 19.8607 104.46 19.9746C104.681 20.0885 104.937 20.1455 105.227 20.1455C105.513 20.1455 105.765 20.0885 105.983 19.9746C106.205 19.8607 106.39 19.7044 106.54 19.5059C106.69 19.304 106.802 19.0745 106.877 18.8174C106.955 18.557 106.994 18.2819 106.994 17.9922V17.8311C106.994 17.5446 106.955 17.2728 106.877 17.0156C106.802 16.7585 106.688 16.529 106.535 16.3271C106.385 16.1253 106.2 15.9658 105.979 15.8486C105.757 15.7314 105.503 15.6729 105.217 15.6729C104.93 15.6729 104.676 15.7314 104.455 15.8486C104.237 15.9658 104.051 16.1253 103.898 16.3271C103.749 16.529 103.635 16.7585 103.557 17.0156C103.482 17.2728 103.444 17.5446 103.444 17.8311Z" fill="#0A0A0B"></path><path d="M109.372 16.3955V20.5508H108.791V15.2676H109.348L109.372 16.3955ZM109.24 17.582L108.981 17.4355C109.001 17.123 109.064 16.8301 109.172 16.5566C109.279 16.2832 109.424 16.0423 109.606 15.834C109.792 15.6257 110.008 15.4629 110.256 15.3457C110.507 15.2285 110.783 15.1699 111.086 15.1699C111.35 15.1699 111.586 15.2057 111.794 15.2773C112.002 15.349 112.18 15.4629 112.326 15.6191C112.473 15.7754 112.583 15.9756 112.658 16.2197C112.736 16.4639 112.775 16.7617 112.775 17.1133V20.5508H112.189V17.1084C112.189 16.7438 112.139 16.459 112.038 16.2539C111.937 16.0456 111.794 15.8975 111.608 15.8096C111.423 15.7217 111.203 15.6777 110.949 15.6777C110.669 15.6777 110.424 15.7396 110.212 15.8633C110.004 15.9837 109.828 16.1416 109.685 16.3369C109.545 16.529 109.437 16.7357 109.362 16.957C109.287 17.1751 109.247 17.3835 109.24 17.582Z" fill="#0A0A0B"></path><path d="M118.728 15.2676V15.7461H116.081V15.2676H118.728ZM117.053 13.9102H117.634V19.2666C117.634 19.5107 117.666 19.6947 117.731 19.8184C117.797 19.9421 117.881 20.0251 117.985 20.0674C118.09 20.1097 118.202 20.1309 118.322 20.1309C118.41 20.1309 118.495 20.126 118.576 20.1162C118.658 20.1032 118.731 20.0902 118.796 20.0771L118.82 20.5703C118.749 20.5931 118.656 20.611 118.542 20.624C118.428 20.6403 118.314 20.6484 118.2 20.6484C117.976 20.6484 117.777 20.6077 117.604 20.5264C117.432 20.4417 117.297 20.2985 117.199 20.0967C117.102 19.8916 117.053 19.6133 117.053 19.2617V13.9102Z" fill="#0A0A0B"></path><path d="M120.534 13.0508V20.5508H119.953V13.0508H120.534ZM120.402 17.582L120.144 17.4355C120.163 17.123 120.227 16.8301 120.334 16.5566C120.441 16.2832 120.586 16.0423 120.769 15.834C120.954 15.6257 121.171 15.4629 121.418 15.3457C121.669 15.2285 121.945 15.1699 122.248 15.1699C122.512 15.1699 122.748 15.2057 122.956 15.2773C123.164 15.349 123.342 15.4629 123.488 15.6191C123.635 15.7754 123.745 15.9756 123.82 16.2197C123.898 16.4639 123.938 16.7617 123.938 17.1133V20.5508H123.352V17.1084C123.352 16.7438 123.301 16.459 123.2 16.2539C123.099 16.0456 122.956 15.8975 122.771 15.8096C122.585 15.7217 122.365 15.6777 122.111 15.6777C121.831 15.6777 121.586 15.7396 121.374 15.8633C121.166 15.9837 120.99 16.1416 120.847 16.3369C120.707 16.529 120.599 16.7357 120.524 16.957C120.45 17.1751 120.409 17.3835 120.402 17.582Z" fill="#0A0A0B"></path><path d="M127.482 20.6484C127.137 20.6484 126.82 20.585 126.53 20.458C126.244 20.3311 125.993 20.152 125.778 19.9209C125.567 19.6898 125.402 19.4163 125.285 19.1006C125.171 18.7816 125.114 18.4333 125.114 18.0557V17.8457C125.114 17.4388 125.174 17.071 125.295 16.7422C125.415 16.4134 125.581 16.1318 125.793 15.8975C126.005 15.6631 126.245 15.484 126.516 15.3604C126.789 15.2334 127.076 15.1699 127.375 15.1699C127.71 15.1699 128.008 15.2301 128.269 15.3506C128.529 15.4678 128.747 15.6354 128.923 15.8535C129.102 16.0684 129.237 16.3239 129.328 16.6201C129.419 16.9131 129.465 17.237 129.465 17.5918V17.9482H125.466V17.4502H128.884V17.3818C128.877 17.0856 128.817 16.8089 128.703 16.5518C128.592 16.2913 128.426 16.0798 128.205 15.917C127.984 15.7542 127.707 15.6729 127.375 15.6729C127.128 15.6729 126.9 15.7249 126.691 15.8291C126.486 15.9333 126.309 16.083 126.159 16.2783C126.013 16.4704 125.899 16.6999 125.817 16.9668C125.739 17.2305 125.7 17.5234 125.7 17.8457V18.0557C125.7 18.3486 125.743 18.6221 125.827 18.876C125.915 19.1266 126.039 19.348 126.198 19.54C126.361 19.7321 126.553 19.8818 126.774 19.9893C126.996 20.0967 127.24 20.1504 127.507 20.1504C127.819 20.1504 128.096 20.0934 128.337 19.9795C128.578 19.8623 128.794 19.6784 128.986 19.4277L129.353 19.7109C129.239 19.8802 129.095 20.0365 128.923 20.1797C128.754 20.3229 128.55 20.4368 128.312 20.5215C128.075 20.6061 127.798 20.6484 127.482 20.6484Z" fill="#0A0A0B"></path><path d="M62.3467 28.9424L58.8662 39.5508H56.0625L60.8174 26.7539H62.6016L62.3467 28.9424ZM65.2383 39.5508L61.749 28.9424L61.4678 26.7539H63.2695L68.0508 39.5508H65.2383ZM65.0801 34.7871V36.8525H58.3213V34.7871H65.0801Z" fill="#0A0A0B"></path><path d="M71.3291 31.8691V43.207H68.7979V30.041H71.1445L71.3291 31.8691ZM77.3496 34.6904V34.875C77.3496 35.5664 77.2676 36.208 77.1035 36.7998C76.9453 37.3916 76.7109 37.9072 76.4004 38.3467C76.0898 38.7803 75.7031 39.1201 75.2402 39.3662C74.7832 39.6064 74.2559 39.7266 73.6582 39.7266C73.0781 39.7266 72.5742 39.6094 72.1465 39.375C71.7188 39.1406 71.3584 38.8125 71.0654 38.3906C70.7783 37.9629 70.5469 37.4678 70.3711 36.9053C70.1953 36.3428 70.0605 35.7393 69.9668 35.0947V34.6113C70.0605 33.9199 70.1953 33.2871 70.3711 32.7129C70.5469 32.1328 70.7783 31.6318 71.0654 31.21C71.3584 30.7822 71.7158 30.4512 72.1377 30.2168C72.5654 29.9824 73.0664 29.8652 73.6406 29.8652C74.2441 29.8652 74.7744 29.9795 75.2314 30.208C75.6943 30.4365 76.0811 30.7646 76.3916 31.1924C76.708 31.6201 76.9453 32.1299 77.1035 32.7217C77.2676 33.3135 77.3496 33.9697 77.3496 34.6904ZM74.8096 34.875V34.6904C74.8096 34.2861 74.7744 33.9141 74.7041 33.5742C74.6396 33.2285 74.5342 32.9268 74.3877 32.6689C74.2471 32.4111 74.0596 32.2119 73.8252 32.0713C73.5967 31.9248 73.3184 31.8516 72.9902 31.8516C72.6445 31.8516 72.3486 31.9072 72.1025 32.0186C71.8623 32.1299 71.666 32.291 71.5137 32.502C71.3613 32.7129 71.2471 32.9648 71.1709 33.2578C71.0947 33.5508 71.0479 33.8818 71.0303 34.251V35.4727C71.0596 35.9062 71.1416 36.2959 71.2764 36.6416C71.4111 36.9814 71.6191 37.251 71.9004 37.4502C72.1816 37.6494 72.5508 37.749 73.0078 37.749C73.3418 37.749 73.623 37.6758 73.8516 37.5293C74.0801 37.377 74.2646 37.1689 74.4053 36.9053C74.5518 36.6416 74.6543 36.3369 74.7129 35.9912C74.7773 35.6455 74.8096 35.2734 74.8096 34.875Z" fill="#0A0A0B"></path><path d="M81.4541 31.8691V43.207H78.9229V30.041H81.2695L81.4541 31.8691ZM87.4746 34.6904V34.875C87.4746 35.5664 87.3926 36.208 87.2285 36.7998C87.0703 37.3916 86.8359 37.9072 86.5254 38.3467C86.2148 38.7803 85.8281 39.1201 85.3652 39.3662C84.9082 39.6064 84.3809 39.7266 83.7832 39.7266C83.2031 39.7266 82.6992 39.6094 82.2715 39.375C81.8438 39.1406 81.4834 38.8125 81.1904 38.3906C80.9033 37.9629 80.6719 37.4678 80.4961 36.9053C80.3203 36.3428 80.1855 35.7393 80.0918 35.0947V34.6113C80.1855 33.9199 80.3203 33.2871 80.4961 32.7129C80.6719 32.1328 80.9033 31.6318 81.1904 31.21C81.4834 30.7822 81.8408 30.4512 82.2627 30.2168C82.6904 29.9824 83.1914 29.8652 83.7656 29.8652C84.3691 29.8652 84.8994 29.9795 85.3564 30.208C85.8193 30.4365 86.2061 30.7646 86.5166 31.1924C86.833 31.6201 87.0703 32.1299 87.2285 32.7217C87.3926 33.3135 87.4746 33.9697 87.4746 34.6904ZM84.9346 34.875V34.6904C84.9346 34.2861 84.8994 33.9141 84.8291 33.5742C84.7646 33.2285 84.6592 32.9268 84.5127 32.6689C84.3721 32.4111 84.1846 32.2119 83.9502 32.0713C83.7217 31.9248 83.4434 31.8516 83.1152 31.8516C82.7695 31.8516 82.4736 31.9072 82.2275 32.0186C81.9873 32.1299 81.791 32.291 81.6387 32.502C81.4863 32.7129 81.3721 32.9648 81.2959 33.2578C81.2197 33.5508 81.1729 33.8818 81.1553 34.251V35.4727C81.1846 35.9062 81.2666 36.2959 81.4014 36.6416C81.5361 36.9814 81.7441 37.251 82.0254 37.4502C82.3066 37.6494 82.6758 37.749 83.1328 37.749C83.4668 37.749 83.748 37.6758 83.9766 37.5293C84.2051 37.377 84.3896 37.1689 84.5303 36.9053C84.6768 36.6416 84.7793 36.3369 84.8379 35.9912C84.9023 35.6455 84.9346 35.2734 84.9346 34.875Z" fill="#0A0A0B"></path><path d="M100.351 36.2021C100.351 35.9736 100.315 35.7686 100.245 35.5869C100.181 35.3994 100.058 35.2295 99.876 35.0771C99.6943 34.9189 99.4395 34.7637 99.1113 34.6113C98.7832 34.459 98.3584 34.3008 97.8369 34.1367C97.2568 33.9492 96.7061 33.7383 96.1846 33.5039C95.6689 33.2695 95.2119 32.9971 94.8135 32.6865C94.4209 32.3701 94.1104 32.0039 93.8818 31.5879C93.6592 31.1719 93.5479 30.6885 93.5479 30.1377C93.5479 29.6045 93.665 29.1211 93.8994 28.6875C94.1338 28.248 94.4619 27.873 94.8838 27.5625C95.3057 27.2461 95.8037 27.0029 96.3779 26.833C96.958 26.6631 97.5938 26.5781 98.2852 26.5781C99.2285 26.5781 100.052 26.748 100.755 27.0879C101.458 27.4277 102.003 27.8936 102.39 28.4854C102.782 29.0771 102.979 29.7539 102.979 30.5156H100.359C100.359 30.1406 100.28 29.8125 100.122 29.5312C99.9697 29.2441 99.7354 29.0186 99.4189 28.8545C99.1084 28.6904 98.7158 28.6084 98.2412 28.6084C97.7842 28.6084 97.4033 28.6787 97.0986 28.8193C96.7939 28.9541 96.5654 29.1387 96.4131 29.373C96.2607 29.6016 96.1846 29.8594 96.1846 30.1465C96.1846 30.3633 96.2373 30.5596 96.3428 30.7354C96.4541 30.9111 96.6182 31.0752 96.835 31.2275C97.0518 31.3799 97.3184 31.5234 97.6348 31.6582C97.9512 31.793 98.3174 31.9248 98.7334 32.0537C99.4307 32.2646 100.043 32.502 100.57 32.7656C101.104 33.0293 101.549 33.3252 101.906 33.6533C102.264 33.9814 102.533 34.3535 102.715 34.7695C102.896 35.1855 102.987 35.6572 102.987 36.1846C102.987 36.7412 102.879 37.2393 102.662 37.6787C102.445 38.1182 102.132 38.4902 101.722 38.7949C101.312 39.0996 100.822 39.3311 100.254 39.4893C99.6855 39.6475 99.0498 39.7266 98.3467 39.7266C97.7139 39.7266 97.0898 39.6445 96.4746 39.4805C95.8594 39.3105 95.2998 39.0557 94.7959 38.7158C94.2979 38.376 93.8994 37.9424 93.6006 37.415C93.3018 36.8877 93.1523 36.2637 93.1523 35.543H95.7979C95.7979 35.9414 95.8594 36.2783 95.9824 36.5537C96.1055 36.8291 96.2783 37.0518 96.501 37.2217C96.7295 37.3916 96.999 37.5146 97.3096 37.5908C97.626 37.667 97.9717 37.7051 98.3467 37.7051C98.8037 37.7051 99.1787 37.6406 99.4717 37.5117C99.7705 37.3828 99.9902 37.2041 100.131 36.9756C100.277 36.7471 100.351 36.4893 100.351 36.2021Z" fill="#0A0A0B"></path><path d="M109.28 30.041V31.834H103.743V30.041H109.28ZM105.114 27.6943H107.646V36.6855C107.646 36.9609 107.681 37.1719 107.751 37.3184C107.827 37.4648 107.938 37.5674 108.085 37.626C108.231 37.6787 108.416 37.7051 108.639 37.7051C108.797 37.7051 108.938 37.6992 109.061 37.6875C109.189 37.6699 109.298 37.6523 109.386 37.6348L109.395 39.498C109.178 39.5684 108.943 39.624 108.691 39.665C108.439 39.7061 108.161 39.7266 107.856 39.7266C107.3 39.7266 106.813 39.6357 106.397 39.4541C105.987 39.2666 105.671 38.9678 105.448 38.5576C105.226 38.1475 105.114 37.6084 105.114 36.9404V27.6943Z" fill="#0A0A0B"></path><path d="M110.089 34.8926V34.708C110.089 34.0107 110.188 33.3691 110.388 32.7832C110.587 32.1914 110.877 31.6787 111.258 31.2451C111.639 30.8115 112.107 30.4746 112.664 30.2344C113.221 29.9883 113.859 29.8652 114.58 29.8652C115.301 29.8652 115.942 29.9883 116.505 30.2344C117.067 30.4746 117.539 30.8115 117.92 31.2451C118.307 31.6787 118.6 32.1914 118.799 32.7832C118.998 33.3691 119.098 34.0107 119.098 34.708V34.8926C119.098 35.584 118.998 36.2256 118.799 36.8174C118.6 37.4033 118.307 37.916 117.92 38.3555C117.539 38.7891 117.07 39.126 116.514 39.3662C115.957 39.6064 115.318 39.7266 114.598 39.7266C113.877 39.7266 113.235 39.6064 112.673 39.3662C112.116 39.126 111.645 38.7891 111.258 38.3555C110.877 37.916 110.587 37.4033 110.388 36.8174C110.188 36.2256 110.089 35.584 110.089 34.8926ZM112.62 34.708V34.8926C112.62 35.291 112.655 35.6631 112.726 36.0088C112.796 36.3545 112.907 36.6592 113.06 36.9229C113.218 37.1807 113.423 37.3828 113.675 37.5293C113.927 37.6758 114.234 37.749 114.598 37.749C114.949 37.749 115.251 37.6758 115.503 37.5293C115.755 37.3828 115.957 37.1807 116.109 36.9229C116.262 36.6592 116.373 36.3545 116.443 36.0088C116.52 35.6631 116.558 35.291 116.558 34.8926V34.708C116.558 34.3213 116.52 33.958 116.443 33.6182C116.373 33.2725 116.259 32.9678 116.101 32.7041C115.948 32.4346 115.746 32.2236 115.494 32.0713C115.242 31.9189 114.938 31.8428 114.58 31.8428C114.223 31.8428 113.918 31.9189 113.666 32.0713C113.42 32.2236 113.218 32.4346 113.06 32.7041C112.907 32.9678 112.796 33.2725 112.726 33.6182C112.655 33.958 112.62 34.3213 112.62 34.708Z" fill="#0A0A0B"></path><path d="M123.185 32.1152V39.5508H120.653V30.041H123.035L123.185 32.1152ZM126.05 29.9795L126.006 32.3262C125.883 32.3086 125.733 32.2939 125.558 32.2822C125.388 32.2646 125.232 32.2559 125.092 32.2559C124.734 32.2559 124.424 32.3027 124.16 32.3965C123.902 32.4844 123.686 32.6162 123.51 32.792C123.34 32.9678 123.211 33.1816 123.123 33.4336C123.041 33.6855 122.994 33.9727 122.982 34.2949L122.473 34.1367C122.473 33.5215 122.534 32.9561 122.657 32.4404C122.78 31.9189 122.959 31.4648 123.193 31.0781C123.434 30.6914 123.727 30.3926 124.072 30.1816C124.418 29.9707 124.813 29.8652 125.259 29.8652C125.399 29.8652 125.543 29.877 125.689 29.9004C125.836 29.918 125.956 29.9443 126.05 29.9795Z" fill="#0A0A0B"></path><path d="M131.446 39.7266C130.708 39.7266 130.046 39.6094 129.46 39.375C128.874 39.1348 128.376 38.8037 127.966 38.3818C127.562 37.96 127.251 37.4707 127.034 36.9141C126.817 36.3516 126.709 35.7539 126.709 35.1211V34.7695C126.709 34.0488 126.812 33.3896 127.017 32.792C127.222 32.1943 127.515 31.6758 127.896 31.2363C128.282 30.7969 128.751 30.46 129.302 30.2256C129.853 29.9854 130.474 29.8652 131.165 29.8652C131.839 29.8652 132.437 29.9766 132.958 30.1992C133.479 30.4219 133.916 30.7383 134.268 31.1484C134.625 31.5586 134.895 32.0508 135.076 32.625C135.258 33.1934 135.349 33.8262 135.349 34.5234V35.5781H127.79V33.8906H132.861V33.6973C132.861 33.3457 132.797 33.0322 132.668 32.7568C132.545 32.4756 132.357 32.2529 132.105 32.0889C131.854 31.9248 131.531 31.8428 131.139 31.8428C130.805 31.8428 130.518 31.916 130.277 32.0625C130.037 32.209 129.841 32.4141 129.688 32.6777C129.542 32.9414 129.431 33.252 129.354 33.6094C129.284 33.9609 129.249 34.3477 129.249 34.7695V35.1211C129.249 35.502 129.302 35.8535 129.407 36.1758C129.519 36.498 129.674 36.7764 129.873 37.0107C130.078 37.2451 130.324 37.4268 130.611 37.5557C130.904 37.6846 131.235 37.749 131.604 37.749C132.062 37.749 132.486 37.6611 132.879 37.4854C133.277 37.3037 133.62 37.0312 133.907 36.668L135.138 38.0039C134.938 38.291 134.666 38.5664 134.32 38.8301C133.98 39.0938 133.57 39.3105 133.09 39.4805C132.609 39.6445 132.062 39.7266 131.446 39.7266Z" fill="#0A0A0B"></path><path d="M45.4783 28.0826C45.5269 33.0767 50.0756 34.7385 50.1259 34.7597C50.0873 34.8769 49.3991 37.128 47.7295 39.4532C46.2863 41.4635 44.7882 43.4664 42.4284 43.5079C40.11 43.5486 39.3643 42.1976 36.7134 42.1976C34.0633 42.1976 33.2349 43.4664 31.0401 43.5486C28.7623 43.6308 27.0278 41.3748 25.5726 39.3719C22.5988 35.2749 20.3263 27.7946 23.3777 22.7453C24.8936 20.2377 27.6028 18.65 30.5431 18.6092C32.7797 18.5686 34.8909 20.0432 36.2582 20.0432C37.6246 20.0432 40.1902 18.2699 42.8872 18.5303C44.0161 18.5751 47.1856 18.9648 49.2206 21.8036C49.0565 21.9005 45.4389 23.9074 45.4783 28.0826ZM41.1207 15.8198C42.3301 14.4248 43.1439 12.483 42.9219 10.5508C41.1788 10.6175 39.0711 11.6577 37.8208 13.0518C36.7003 14.2865 35.7191 16.2625 35.9839 18.1564C37.9267 18.2997 39.9114 17.2155 41.1207 15.8198Z" fill="#0A0A0B"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconDownloadAppStore.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconDownloadAppStore = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "158",
    height: "56",
    viewBox: "0 0 158 56",
    fill: "none"
  }, _attrs))}><path d="M0.5 7.55078C0.5 3.96093 3.41015 1.05078 7 1.05078H151C154.59 1.05078 157.5 3.96093 157.5 7.55078V48.5508C157.5 52.1406 154.59 55.0508 151 55.0508H7C3.41015 55.0508 0.5 52.1406 0.5 48.5508V7.55078Z" stroke="#0A0A0B"></path><path d="M116.915 30.0085H117.779V40.0434H116.915V30.0085ZM125.42 38.8514C125.42 39.4258 125.716 40.0434 125.716 40.0434H124.715C124.715 40.0434 124.442 39.5016 124.442 39.0031C124.442 39.0031 123.43 40.2168 121.622 40.2168C119.814 40.2168 119.075 39.3173 119.075 38.0496C119.075 36.7817 120.292 35.8822 122.759 35.8822L124.488 35.8794V34.9068C124.488 34.9068 124.51 33.2815 122.395 33.2815C120.281 33.2815 120.326 34.6874 120.326 34.6874L119.393 34.69C119.393 34.69 119.477 32.6304 122.418 32.6304C125.359 32.6304 125.42 34.8202 125.42 34.8202V38.8514ZM124.488 37.4103V36.4998H122.691C121.213 36.4998 119.996 37.1393 119.996 38.1145C119.996 39.0899 120.769 39.5126 121.702 39.5126C122.634 39.5126 124.488 38.8731 124.488 37.4103ZM126.315 32.8045H127.224L130.044 38.9744L132.788 32.8045H133.819C133.819 32.8045 130.226 40.8599 129.893 41.6183C129.559 42.377 128.763 43.0777 127.785 43.0777C127.345 43.0777 126.906 42.8322 126.906 42.8322L127.149 42.1819C127.149 42.1819 127.368 42.2976 127.8 42.2976C128.232 42.2976 128.983 41.3441 128.983 41.3441L129.529 40.1013L126.315 32.8043V32.8045ZM112.376 32.6304C114.013 32.6304 115.787 33.685 115.787 36.3656C115.787 39.0465 114.309 40.2168 112.398 40.2168C110.522 40.2168 109.679 38.903 109.65 38.8558V42.8177H108.786V32.8045H109.65V33.928C109.68 33.8926 110.761 32.6304 112.376 32.6304ZM112.239 39.545C113.831 39.545 114.9 38.1786 114.9 36.4235C114.9 34.6682 113.74 33.3245 112.353 33.3245C110.827 33.3245 109.68 34.7989 109.65 34.8379V37.9672C109.68 38.0142 110.672 39.545 112.239 39.545ZM68.2049 30.7171L66.9426 31.8512L66.3585 32.0002L66.7217 31.4331C66.7217 31.4331 65.6014 30.0304 63.6128 30.0304C61.6246 30.0304 59.3365 31.3214 59.3365 34.3726C59.3365 36.8721 61.4587 39.6101 64.7335 39.6101C65.8654 39.6101 66.6113 39.2071 66.6113 39.2071V36.969C66.6113 36.969 64.9266 36.9503 64.2914 37.1033L65.475 36.4766H68.8363C68.8363 36.4766 68.2049 36.7828 68.2049 37.6703V39.4761C68.2049 39.4761 65.7672 40.237 63.5972 40.237C59.3996 40.237 57.7109 37.2973 57.7109 34.9694C57.7109 32.3061 59.944 29.4935 63.7866 29.4935C66.9428 29.4935 68.2049 30.7171 68.2049 30.7171ZM73.547 32.6591C75.7996 32.6591 77.4683 34.1539 77.4683 36.3485C77.4683 38.5431 75.7495 40.1013 73.2966 40.1013C70.8443 40.1013 69.4594 38.1295 69.4594 36.4916C69.4594 34.2173 71.2946 32.6591 73.547 32.6591ZM73.7137 39.6241C75.5729 39.6241 75.8329 37.8113 75.8327 37.0799C75.8327 34.9563 74.7148 33.1363 73.0963 33.1363C71.962 33.1363 70.9775 34.1221 70.9775 35.5056C70.9775 36.8892 71.855 39.6241 73.7137 39.6241ZM82.3117 32.6629C84.5633 32.6629 86.2308 34.157 86.2308 36.3506C86.2308 38.5443 84.5134 40.1015 82.0615 40.1015C79.61 40.1015 78.2259 38.1305 78.2259 36.4935C78.2259 34.2205 80.0603 32.6629 82.3117 32.6629ZM82.4783 39.6243C84.3367 39.6243 84.5967 37.8125 84.5967 37.0813C84.5967 34.9592 83.4794 33.1397 81.8614 33.1397C80.7277 33.1397 79.7434 34.1252 79.7434 35.5079C79.7434 36.8906 80.6207 39.6245 82.4783 39.6245V39.6243ZM92.6988 39.5737C93.503 40.1032 94.0578 40.8574 94.0582 41.8482C94.0582 43.9258 91.3483 44.739 89.7655 44.739C88.1827 44.739 86.2518 44.1266 86.2518 42.4961C86.2518 39.7991 90.6687 39.7952 90.6687 39.7952C90.6687 39.7952 90.1966 39.3293 90.1966 38.8079C90.1966 38.4881 90.3124 38.247 90.3124 38.247C90.3124 38.247 90.1799 38.2866 89.981 38.2866C88.0666 38.2866 87.0971 36.9834 87.0971 35.8938C87.0971 34.3458 88.5721 32.9083 90.5279 32.9083H94.3396L93.3618 33.4611L92.3841 33.4925C92.3841 33.4925 93.4118 34.14 93.4118 35.5935C93.4118 36.5729 92.8892 37.114 92.3174 37.6313C91.7459 38.1486 91.7375 38.3341 91.7375 38.5629C91.7375 38.7921 91.8949 39.045 92.6986 39.5737H92.6988ZM90.602 37.8127C91.7585 37.8127 91.9817 36.948 91.9817 36.3082C91.9817 34.4719 90.8884 33.4648 89.9682 33.4648C89.0484 33.4648 88.5263 34.1758 88.5263 35.171C88.5263 36.1662 89.4462 37.8127 90.6022 37.8127H90.602ZM90.5153 44.0678C91.0495 44.0678 92.9017 43.9258 92.9017 42.3973C92.9017 41.3315 92.0071 40.9937 91.1987 40.3125C91.1987 40.3125 90.9379 40.271 90.6332 40.271C90.3284 40.271 87.7062 40.4311 87.7062 42.1488C87.7062 43.8664 89.9808 44.0678 90.5153 44.0678ZM94.1443 29.5222L95.2346 28.9551H97.6268C97.0692 29.2387 96.8603 29.4632 96.846 30.786L96.7591 38.8455C96.7591 39.3499 97.2192 39.4864 97.6338 39.4864C98.0112 39.4864 98.1841 39.5562 98.1841 39.5562L97.6763 39.8929H94.7761C94.7761 39.8929 95.1925 39.5381 95.1975 39.1841L95.3464 29.5251L94.1443 29.5222ZM104.722 34.5937L100.92 36.0465L99.6304 36.1104C99.6304 36.1104 102.855 34.8573 102.98 34.6417C103.106 34.4265 102.847 33.205 101.423 33.205C100.713 33.205 99.5798 33.8273 99.5798 35.3762C99.5798 37.6747 101.389 39.2393 102.947 39.2393C103.985 39.2393 104.923 38.7123 104.923 38.7123C104.923 38.7123 104.036 40.1013 102.075 40.1013C99.2785 40.1013 98.1562 38.0736 98.1562 36.2701C98.1562 34.4662 99.4295 32.6304 101.875 32.6304C104.32 32.6304 104.722 34.5937 104.722 34.5937H104.722Z" fill="#0A0A0B"></path><path d="M23.3125 14.4225C23.3125 13.5771 24.1024 13.1096 24.4973 12.9814L38.2666 26.6228L24.4653 40.168C23.9785 40.1424 23.4939 39.218 23.3125 38.759V14.4225Z" fill="#0A0A0B"></path><path d="M42.6856 22.2038L27.6034 13.75L39.4835 25.438L42.6856 22.2038Z" fill="#0A0A0B"></path><path d="M45.6744 24.0367L44.1586 23.1324L40.7003 26.6228L44.2186 30.0016L45.597 29.2339C47.6159 28.1095 47.6589 25.2207 45.6744 24.0367Z" fill="#0A0A0B"></path><path d="M42.6856 30.9115L39.4835 27.783L27.6031 39.5094L42.6856 30.9115Z" fill="#0A0A0B"></path><path d="M63.7441 24.2061C63.5358 24.5023 63.2087 24.7334 62.7627 24.8994C62.32 25.0654 61.8236 25.1484 61.2734 25.1484C60.7168 25.1484 60.222 25.015 59.7891 24.748C59.3561 24.4811 59.0208 24.1035 58.7832 23.6152C58.5456 23.127 58.4251 22.5671 58.4219 21.9355V21.0371C58.4219 20.0508 58.6709 19.2728 59.1689 18.7031C59.667 18.1302 60.3359 17.8438 61.1758 17.8438C61.9082 17.8438 62.4974 18.0309 62.9434 18.4053C63.3893 18.7764 63.6546 19.2891 63.7393 19.9434H63.1387C63.0508 19.4225 62.8376 19.0286 62.499 18.7617C62.1637 18.4915 61.7243 18.3564 61.1807 18.3564C60.5166 18.3564 59.9909 18.5924 59.6035 19.0645C59.2161 19.5365 59.0225 20.2021 59.0225 21.0615V21.9014C59.0225 22.4417 59.1136 22.9202 59.2959 23.3369C59.4814 23.7503 59.7451 24.071 60.0869 24.2988C60.432 24.5267 60.8275 24.6406 61.2734 24.6406C61.791 24.6406 62.2354 24.5592 62.6064 24.3965C62.8473 24.2891 63.0264 24.1637 63.1436 24.0205V22.1846H61.2344V21.6768H63.7441V24.2061Z" fill="#0A0A0B"></path><path d="M67.3574 25.1484C66.9082 25.1484 66.5013 25.0378 66.1367 24.8164C65.7754 24.5951 65.4938 24.2874 65.292 23.8936C65.0902 23.4964 64.9893 23.0521 64.9893 22.5605V22.3506C64.9893 21.8428 65.0869 21.3854 65.2822 20.9785C65.4808 20.5716 65.7559 20.2526 66.1074 20.0215C66.459 19.7871 66.8398 19.6699 67.25 19.6699C67.8913 19.6699 68.3991 19.8896 68.7734 20.3291C69.151 20.7653 69.3398 21.3626 69.3398 22.1211V22.4482H65.5703V22.5605C65.5703 23.1595 65.7412 23.6592 66.083 24.0596C66.4281 24.4567 66.861 24.6553 67.3818 24.6553C67.6943 24.6553 67.9694 24.5983 68.207 24.4844C68.4479 24.3704 68.666 24.1882 68.8613 23.9375L69.2275 24.2158C68.7979 24.8376 68.1745 25.1484 67.3574 25.1484ZM67.25 20.168C66.8105 20.168 66.4395 20.3291 66.1367 20.6514C65.8372 20.9736 65.6549 21.4066 65.5898 21.9502H68.7588V21.8867C68.7425 21.3789 68.5977 20.9655 68.3242 20.6465C68.0508 20.3275 67.6927 20.168 67.25 20.168Z" fill="#0A0A0B"></path><path d="M71.3857 18.415V19.7676H72.4795V20.2461H71.3857V23.7666C71.3857 24.0596 71.4378 24.2777 71.542 24.4209C71.6494 24.5641 71.8268 24.6357 72.0742 24.6357C72.1719 24.6357 72.3298 24.6195 72.5479 24.5869L72.5723 25.0654C72.4193 25.1208 72.2109 25.1484 71.9473 25.1484C71.5469 25.1484 71.2555 25.0329 71.0732 24.8018C70.891 24.5674 70.7998 24.224 70.7998 23.7715V20.2461H69.8281V19.7676H70.7998V18.415H71.3857Z" fill="#0A0A0B"></path><path d="M76.7764 25.0508H76.1904V19.7676H76.7764V25.0508ZM76.0879 18.2393C76.0879 18.1286 76.1237 18.0358 76.1953 17.9609C76.2669 17.8828 76.3646 17.8438 76.4883 17.8438C76.612 17.8438 76.7096 17.8828 76.7812 17.9609C76.8561 18.0358 76.8936 18.1286 76.8936 18.2393C76.8936 18.3499 76.8561 18.4427 76.7812 18.5176C76.7096 18.5924 76.612 18.6299 76.4883 18.6299C76.3646 18.6299 76.2669 18.5924 76.1953 18.5176C76.1237 18.4427 76.0879 18.3499 76.0879 18.2393Z" fill="#0A0A0B"></path><path d="M79.2764 18.415V19.7676H80.3701V20.2461H79.2764V23.7666C79.2764 24.0596 79.3285 24.2777 79.4326 24.4209C79.54 24.5641 79.7174 24.6357 79.9648 24.6357C80.0625 24.6357 80.2204 24.6195 80.4385 24.5869L80.4629 25.0654C80.3099 25.1208 80.1016 25.1484 79.8379 25.1484C79.4375 25.1484 79.1462 25.0329 78.9639 24.8018C78.7816 24.5674 78.6904 24.224 78.6904 23.7715V20.2461H77.7188V19.7676H78.6904V18.415H79.2764Z" fill="#0A0A0B"></path><path d="M83.6904 22.3311C83.6904 21.8232 83.7881 21.3659 83.9834 20.959C84.182 20.5521 84.4603 20.2363 84.8184 20.0117C85.1797 19.7839 85.5882 19.6699 86.0439 19.6699C86.7471 19.6699 87.3167 19.9173 87.7529 20.4121C88.1891 20.9036 88.4072 21.5563 88.4072 22.3701V22.4922C88.4072 23.0033 88.3079 23.4639 88.1094 23.874C87.9141 24.2809 87.6374 24.5951 87.2793 24.8164C86.9212 25.0378 86.5127 25.1484 86.0537 25.1484C85.3538 25.1484 84.7842 24.9027 84.3447 24.4111C83.9085 23.9163 83.6904 23.262 83.6904 22.4482V22.3311ZM84.2764 22.4922C84.2764 23.1237 84.4391 23.6429 84.7646 24.0498C85.0934 24.4535 85.5231 24.6553 86.0537 24.6553C86.5811 24.6553 87.0075 24.4535 87.333 24.0498C87.6618 23.6429 87.8262 23.1074 87.8262 22.4434V22.3311C87.8262 21.9274 87.7513 21.5579 87.6016 21.2227C87.4518 20.8874 87.2419 20.6286 86.9717 20.4463C86.7015 20.2607 86.3923 20.168 86.0439 20.168C85.5231 20.168 85.0983 20.373 84.7695 20.7832C84.4408 21.1901 84.2764 21.724 84.2764 22.3848V22.4922Z" fill="#0A0A0B"></path><path d="M90.1748 19.7676L90.1943 20.6709C90.3929 20.3454 90.6403 20.098 90.9365 19.9287C91.2327 19.7562 91.5599 19.6699 91.918 19.6699C92.4844 19.6699 92.9059 19.8294 93.1826 20.1484C93.4593 20.4674 93.5993 20.946 93.6025 21.584V25.0508H93.0215V21.5791C93.0182 21.1071 92.9173 20.7555 92.7188 20.5244C92.5234 20.2933 92.2093 20.1777 91.7764 20.1777C91.415 20.1777 91.0944 20.2917 90.8145 20.5195C90.5378 20.7441 90.3327 21.0485 90.1992 21.4326V25.0508H89.6182V19.7676H90.1748Z" fill="#0A0A0B"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconDownloadGooglePlay.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconDownloadGooglePlay = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const fullYear = (/* @__PURE__ */ new Date()).getFullYear();
    const { menuList } = useMenu();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-15e76e92>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="footer-download" data-v-15e76e92${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLinkLocale, {
              to: unref(RoutesPathsEnum).MAIN,
              class: "footer-download__logo"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtImg, {
                    src: "/images/logo.svg",
                    alt: "Logo",
                    width: "235",
                    height: "54"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtImg, {
                      src: "/images/logo.svg",
                      alt: "Logo",
                      width: "235",
                      height: "54"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p data-v-15e76e92${_scopeId}>${ssrInterpolate(_ctx.$t("footer.download"))}</p><div class="footer-download__buttons" data-v-15e76e92${_scopeId}><a${ssrRenderAttr("href", unref(PLATFORM_LINKS).ANDROID)} target="_blank" data-v-15e76e92${_scopeId}>`);
            _push2(ssrRenderComponent(IconDownloadGooglePlay, null, null, _parent2, _scopeId));
            _push2(`</a><a${ssrRenderAttr("href", unref(PLATFORM_LINKS).IOS)} target="_blank" data-v-15e76e92${_scopeId}>`);
            _push2(ssrRenderComponent(IconDownloadAppStore, null, null, _parent2, _scopeId));
            _push2(`</a><a${ssrRenderAttr("href", unref(DOWNLOAD_LINKS).WINDOWS)} target="_blank" data-v-15e76e92${_scopeId}>`);
            _push2(ssrRenderComponent(IconDownloadWindows, null, null, _parent2, _scopeId));
            _push2(`</a><a${ssrRenderAttr("href", unref(DOWNLOAD_LINKS).OSX)} target="_blank" data-v-15e76e92${_scopeId}>`);
            _push2(ssrRenderComponent(IconDownloadMacOs, null, null, _parent2, _scopeId));
            _push2(`</a></div></div><div class="footer-menu" data-v-15e76e92${_scopeId}><!--[-->`);
            ssrRenderList(unref(menuList), (item) => {
              _push2(`<div class="footer-menu__col" data-v-15e76e92${_scopeId}><h4 data-v-15e76e92${_scopeId}>${ssrInterpolate(item.title)}</h4><!--[-->`);
              ssrRenderList(item.links, (link) => {
                _push2(ssrRenderComponent(_component_NuxtLinkLocale, {
                  key: link.slug,
                  to: link.link
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(link.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(link.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div><p class="footer__address" data-v-15e76e92${_scopeId}>${ssrInterpolate(_ctx.$t("footer.address"))}</p><p class="footer__copy" data-v-15e76e92${_scopeId}> \xA9 ${ssrInterpolate(unref(fullYear))} VPNLY. ${ssrInterpolate(_ctx.$t("footer.copyright"))}</p>`);
          } else {
            return [
              createVNode("div", { class: "footer-download" }, [
                createVNode(_component_NuxtLinkLocale, {
                  to: unref(RoutesPathsEnum).MAIN,
                  class: "footer-download__logo"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtImg, {
                      src: "/images/logo.svg",
                      alt: "Logo",
                      width: "235",
                      height: "54"
                    })
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("p", null, toDisplayString(_ctx.$t("footer.download")), 1),
                createVNode("div", { class: "footer-download__buttons" }, [
                  createVNode("a", {
                    href: unref(PLATFORM_LINKS).ANDROID,
                    target: "_blank"
                  }, [
                    createVNode(IconDownloadGooglePlay)
                  ], 8, ["href"]),
                  createVNode("a", {
                    href: unref(PLATFORM_LINKS).IOS,
                    target: "_blank"
                  }, [
                    createVNode(IconDownloadAppStore)
                  ], 8, ["href"]),
                  createVNode("a", {
                    href: unref(DOWNLOAD_LINKS).WINDOWS,
                    target: "_blank"
                  }, [
                    createVNode(IconDownloadWindows)
                  ], 8, ["href"]),
                  createVNode("a", {
                    href: unref(DOWNLOAD_LINKS).OSX,
                    target: "_blank"
                  }, [
                    createVNode(IconDownloadMacOs)
                  ], 8, ["href"])
                ])
              ]),
              createVNode("div", { class: "footer-menu" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(menuList), (item) => {
                  return openBlock(), createBlock("div", {
                    key: item.title,
                    class: "footer-menu__col"
                  }, [
                    createVNode("h4", null, toDisplayString(item.title), 1),
                    (openBlock(true), createBlock(Fragment, null, renderList(item.links, (link) => {
                      return openBlock(), createBlock(_component_NuxtLinkLocale, {
                        key: link.slug,
                        to: link.link
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(link.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ]);
                }), 128))
              ]),
              createVNode("p", { class: "footer__address" }, toDisplayString(_ctx.$t("footer.address")), 1),
              createVNode("p", { class: "footer__copy" }, " \xA9 " + toDisplayString(unref(fullYear)) + " VPNLY. " + toDisplayString(_ctx.$t("footer.copyright")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Footer/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-15e76e92"]]);
const useDarkThemeProvider = () => {
  const route = useRoute();
  const themeStore = useThemeStore();
  watch(
    () => route.path,
    (routePath) => {
      if (routePath.includes(RoutesPathsEnum.DONATE)) {
        themeStore.setDarkTheme();
      } else {
        themeStore.removeDarkTheme();
      }
    },
    { immediate: true }
  );
};
const useMobileMenuProvider = () => {
  useRouter();
  useMenuStore();
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const i18nHead = useLocaleHead({
      addDirAttribute: true,
      identifierAttribute: "id",
      addSeoAttributes: true
    });
    useHead({
      htmlAttrs: {
        lang: i18nHead.value.htmlAttrs.lang,
        dir: i18nHead.value.htmlAttrs.dir
      },
      link: [...i18nHead.value.link || []],
      meta: [...i18nHead.value.meta || []]
    });
    useDarkThemeProvider();
    useMobileMenuProvider();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="main" data-v-67dbf2b8>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67dbf2b8"]]);

export { _default as default };
//# sourceMappingURL=default-BqxrPpFl.mjs.map
