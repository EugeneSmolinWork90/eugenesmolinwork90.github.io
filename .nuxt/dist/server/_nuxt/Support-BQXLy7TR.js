import { defineComponent, ref, computed, mergeProps, useSSRContext, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import __nuxt_component_0 from "./Section-D_UUhxYL.js";
import { _ as _export_sfc } from "../server.mjs";
import { V as VButton, _ as __nuxt_component_1 } from "./VButton-7LOx4zCV.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FaqItem",
  __ssrInlineRender: true,
  props: {
    id: {},
    title: {},
    text: {}
  },
  setup(__props) {
    const { id, title, text } = __props;
    const activeItem = ref(id === 1);
    const count = computed(() => id.toString().padStart(2, "0"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["faq-item", { active: activeItem.value }]
      }, _attrs))} data-v-3d053a2a><div class="${ssrRenderClass([{ active: activeItem.value }, "faq-item__title"])}" data-v-3d053a2a><span class="faq-item__num text-montserrat" data-v-3d053a2a>${ssrInterpolate(count.value)}</span><h4 data-v-3d053a2a>${ssrInterpolate(_ctx.title)}</h4><span class="faq-item__close" data-v-3d053a2a></span><span class="icon-chevron" data-v-3d053a2a></span></div>`);
      if (activeItem.value) {
        _push(`<p data-v-3d053a2a>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/Faq/FaqItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FaqItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3d053a2a"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Faq",
  __ssrInlineRender: true,
  props: {
    list: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(__nuxt_component_0, mergeProps({ class: "faq" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-ed56e03c${_scopeId}>${ssrInterpolate(_ctx.$t("main.faq.title"))}</h2><div class="faq__list" data-v-ed56e03c${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.list, (faqItem, key) => {
              _push2(ssrRenderComponent(FaqItem, {
                id: key + 1,
                key,
                title: faqItem.title,
                text: faqItem.text
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("h2", null, toDisplayString(_ctx.$t("main.faq.title")), 1),
              createVNode("div", { class: "faq__list" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.list, (faqItem, key) => {
                  return openBlock(), createBlock(FaqItem, {
                    id: key + 1,
                    key,
                    title: faqItem.title,
                    text: faqItem.text
                  }, null, 8, ["id", "title", "text"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/Faq.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Faq = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ed56e03c"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DonateCalc",
  __ssrInlineRender: true,
  setup(__props) {
    const donates = [
      { amount: 1 },
      { amount: 2 },
      { amount: 5 },
      { amount: 10 },
      { amount: 20 },
      { amount: 50 }
    ];
    const donateAmount = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "donate" }, _attrs))} data-v-729fb2ea><h3 class="donate__title" data-v-729fb2ea>${ssrInterpolate(_ctx.$t("main.support.donate.title"))}</h3><div class="donate__select" data-v-729fb2ea>${ssrInterpolate(_ctx.$t("main.support.donate.currency"))}</div><div class="donate-tabs" data-v-729fb2ea><div class="donate-tabs__item" data-v-729fb2ea>${ssrInterpolate(_ctx.$t("main.support.donate.frequency"))}</div></div><div class="donate-amount" data-v-729fb2ea><div class="donate-amount__title" data-v-729fb2ea>${ssrInterpolate(_ctx.$t("main.support.donate.subtitle"))}</div><div class="donate-amount-calc" data-v-729fb2ea><button class="donate-amount-calc__minus" data-v-729fb2ea></button><span class="donate-amount-calc__num text-montserrat text-weight-600" data-v-729fb2ea>${ssrInterpolate(donateAmount.value)} $ </span><button class="donate-amount-calc__plus" data-v-729fb2ea></button></div><div class="donate-amount-list" data-v-729fb2ea><!--[-->`);
      ssrRenderList(donates, (donate) => {
        _push(`<button class="donate-amount-list__item" data-v-729fb2ea> +${ssrInterpolate(donate.amount)} $ </button>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(VButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/icons/icon-heart.svg",
              alt: "Heart",
              width: "24",
              height: "24"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-capitalize text-weight-600" data-v-729fb2ea${_scopeId}>${ssrInterpolate(_ctx.$t("main.support.donate.button"))}</span>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/images/icons/icon-heart.svg",
                alt: "Heart",
                width: "24",
                height: "24"
              }),
              createVNode("span", { class: "text-capitalize text-weight-600" }, toDisplayString(_ctx.$t("main.support.donate.button")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/Support/DonateCalc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DonateCalc = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-729fb2ea"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Support",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(ssrRenderComponent(__nuxt_component_0, mergeProps({
        class: "support",
        "bg-dark": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/pages/main/map.png",
              alt: "Map",
              width: "1566",
              height: "833",
              class: "support__bg"
            }, null, _parent2, _scopeId));
            _push2(`<div class="support__row" data-v-826c7c00${_scopeId}>`);
            _push2(ssrRenderComponent(DonateCalc, null, null, _parent2, _scopeId));
            _push2(`<div class="support-content" data-v-826c7c00${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`<div class="support-content__description" data-v-826c7c00${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "latest-donate", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/images/pages/main/map.png",
                alt: "Map",
                width: "1566",
                height: "833",
                class: "support__bg"
              }),
              createVNode("div", { class: "support__row" }, [
                createVNode(DonateCalc),
                createVNode("div", { class: "support-content" }, [
                  renderSlot(_ctx.$slots, "title", {}, void 0, true),
                  createVNode("div", { class: "support-content__description" }, [
                    renderSlot(_ctx.$slots, "description", {}, void 0, true)
                  ]),
                  renderSlot(_ctx.$slots, "latest-donate", {}, void 0, true)
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/Support.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Support = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-826c7c00"]]);
export {
  Faq as F,
  Support as S
};
//# sourceMappingURL=Support-BQXLy7TR.js.map
