import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { P as ProductsEnum, _ as __nuxt_component_0, R as RoutesPathsEnum } from "./routes-Bkc00j1Z.js";
import { _ as __nuxt_component_1 } from "./VButton-7LOx4zCV.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PlatformItem",
  __ssrInlineRender: true,
  props: {
    title: {},
    slug: {},
    link: {}
  },
  setup(__props) {
    const createPlatform = (name) => ({
      pale: {
        src: `/images/platform/pale/${name}.svg`,
        alt: name.charAt(0).toUpperCase() + name.slice(1)
      },
      color: {
        src: `/images/platform/${name}.svg`,
        alt: name.charAt(0).toUpperCase() + name.slice(1)
      }
    });
    const platforms = {
      [ProductsEnum.IOS]: createPlatform("ios"),
      [ProductsEnum.ANDROID]: createPlatform("android"),
      [ProductsEnum.APP_GALLERY]: createPlatform("app-gallery"),
      [ProductsEnum.AMAZON]: createPlatform("amazon"),
      [ProductsEnum.MAC]: createPlatform("mac"),
      [ProductsEnum.WINDOWS]: createPlatform("windows"),
      [ProductsEnum.CHROME]: createPlatform("chrome"),
      [ProductsEnum.OPERA]: createPlatform("opera"),
      [ProductsEnum.YANDEX]: createPlatform("yandex"),
      [ProductsEnum.FIREFOX]: createPlatform("firefox"),
      [ProductsEnum.EDGE]: createPlatform("edge"),
      [ProductsEnum.LINUX]: createPlatform("linux"),
      [ProductsEnum.ROUTER]: createPlatform("router")
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLinkLocale, mergeProps({
        to: _ctx.link,
        class: "platform scalable"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="platform__svg" data-v-af334596${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: platforms[_ctx.slug].pale.src,
              alt: platforms[_ctx.slug].pale.alt,
              width: "50",
              height: "51"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: platforms[_ctx.slug].color.src,
              alt: platforms[_ctx.slug].color.alt,
              width: "50",
              height: "51"
            }, null, _parent2, _scopeId));
            _push2(`</div><p data-v-af334596${_scopeId}>${ssrInterpolate(_ctx.title)}</p>`);
          } else {
            return [
              createVNode("div", { class: "platform__svg" }, [
                createVNode(_component_NuxtImg, {
                  src: platforms[_ctx.slug].pale.src,
                  alt: platforms[_ctx.slug].pale.alt,
                  width: "50",
                  height: "51"
                }, null, 8, ["src", "alt"]),
                createVNode(_component_NuxtImg, {
                  src: platforms[_ctx.slug].color.src,
                  alt: platforms[_ctx.slug].color.alt,
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PlatformsList/PlatformItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PlatformItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-af334596"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PlatformsList",
  __ssrInlineRender: true,
  props: {
    keypathTitle: {}
  },
  setup(__props) {
    const platforms = [
      {
        title: "iOS",
        slug: ProductsEnum.IOS,
        link: RoutesPathsEnum.MOBILE_IOS
      },
      {
        title: "Android",
        slug: ProductsEnum.ANDROID,
        link: RoutesPathsEnum.MOBILE_ANDROID
      },
      {
        title: "App Gallery",
        slug: ProductsEnum.APP_GALLERY,
        link: ""
      },
      {
        title: "Amazon",
        slug: ProductsEnum.AMAZON,
        link: ""
      },
      {
        title: "macOS",
        slug: ProductsEnum.MAC,
        link: RoutesPathsEnum.DESKTOP_MAC
      },
      {
        title: "Windows",
        slug: ProductsEnum.WINDOWS,
        link: RoutesPathsEnum.DESKTOP_WINDOWS
      },
      {
        title: "Linux",
        slug: ProductsEnum.LINUX,
        link: RoutesPathsEnum.DESKTOP_LINUX
      },
      {
        title: "Chrome",
        slug: ProductsEnum.CHROME,
        link: RoutesPathsEnum.EXTENSION_CHROME
      },
      {
        title: "Opera",
        slug: ProductsEnum.OPERA,
        link: RoutesPathsEnum.EXTENSION_OPERA
      },
      {
        title: "Yandex",
        slug: ProductsEnum.YANDEX,
        link: RoutesPathsEnum.EXTENSION_YANDEX
      },
      {
        title: "Firefox",
        slug: ProductsEnum.FIREFOX,
        link: RoutesPathsEnum.EXTENSION_FIREFOX
      },
      {
        title: "Edge",
        slug: ProductsEnum.EDGE,
        link: RoutesPathsEnum.EXTENSION_EDGE
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "platforms" }, _attrs))} data-v-340c79f3>`);
      _push(ssrRenderComponent(_component_i18n_t, {
        scope: "global",
        keypath: _ctx.keypathTitle,
        tag: "h2"
      }, {
        "title-highlight": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="color-orange" data-v-340c79f3${_scopeId}>${ssrInterpolate(_ctx.$t(`${_ctx.keypathTitle}-highlight`))}</span>`);
          } else {
            return [
              createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t(`${_ctx.keypathTitle}-highlight`)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="platforms-list" data-v-340c79f3><!--[-->`);
      ssrRenderList(platforms, (platform) => {
        _push(ssrRenderComponent(PlatformItem, {
          key: platform.slug,
          title: platform.title,
          slug: platform.slug,
          link: platform.link
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PlatformsList/PlatformsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PlatformsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-340c79f3"]]);
export {
  PlatformsList as P
};
//# sourceMappingURL=PlatformsList-8Dey24Sj.js.map
