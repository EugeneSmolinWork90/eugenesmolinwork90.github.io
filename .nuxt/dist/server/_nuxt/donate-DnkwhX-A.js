import { useHead } from "unhead";
import { defineComponent, resolveComponent, withCtx, createVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { S as Support, F as Faq } from "./Support-BQXLy7TR.js";
import { f as useI18n } from "../server.mjs";
import "./Section-D_UUhxYL.js";
import "./Container-DL_4idYO.js";
import "./VButton-7LOx4zCV.js";
import "defu";
import "h3";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "@vue/devtools-api";
import "destr";
import "klona";
import "devalue";
import "@unhead/addons";
import "consola";
import "cookie-es";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "donate",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n();
    useHead({
      title: t("donate.seo.title"),
      meta: [
        { name: "description", content: t("donate.seo.description") }
      ]
    });
    const faqList = tm("donate.faq.list");
    const formattedFaqList = faqList.map((faq) => ({
      title: rt(faq.title),
      text: rt(faq.text)
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Support, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i18n_t, {
              scope: "global",
              keypath: "donate.support.title",
              tag: "h2"
            }, {
              "title-highlight": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-orange"${_scopeId2}>${ssrInterpolate(_ctx.$t("donate.support.title-highlight"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("donate.support.title-highlight")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: "donate.support.title",
                tag: "h2"
              }, {
                "title-highlight": withCtx(() => [
                  createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("donate.support.title-highlight")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("donate.support.text-1"))}</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("donate.support.text-2"))}</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("donate.support.text-3"))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$t("donate.support.text-1")), 1),
              createVNode("p", null, toDisplayString(_ctx.$t("donate.support.text-2")), 1),
              createVNode("p", null, toDisplayString(_ctx.$t("donate.support.text-3")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Faq, { list: unref(formattedFaqList) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/donate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=donate-DnkwhX-A.js.map
