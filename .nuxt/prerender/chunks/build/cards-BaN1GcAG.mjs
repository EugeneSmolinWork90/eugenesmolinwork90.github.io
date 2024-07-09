import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, renderSlot, openBlock, createBlock, createCommentVNode } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/server-renderer/index.mjs';
import Container from './Container-DL_4idYO.mjs';
import { _ as _export_sfc } from './server.mjs';
import __nuxt_component_0 from './Section-D_UUhxYL.mjs';
import { _ as __nuxt_component_1 } from './VButton-7LOx4zCV.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FirstContentfulPaint",
  __ssrInlineRender: true,
  props: {
    keypathTitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "fcp" }, _attrs))} data-v-357d14aa>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fcp__row" data-v-357d14aa${_scopeId}><div class="fcp__img" data-v-357d14aa${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "img", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_i18n_t, {
              scope: "global",
              keypath: _ctx.keypathTitle,
              tag: "h1",
              class: "fcp__title"
            }, {
              "title-highlight": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-orange" data-v-357d14aa${_scopeId2}>${ssrInterpolate(_ctx.$t(`${_ctx.keypathTitle}-highlight`))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t(`${_ctx.keypathTitle}-highlight`)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="fcp__texts" data-v-357d14aa${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "text", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="fcp__button" data-v-357d14aa${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "button", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
            if (_ctx.$slots.platforms) {
              _push2(`<div class="fcp__platforms" data-v-357d14aa${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "platforms", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "fcp__row" }, [
                createVNode("div", { class: "fcp__img" }, [
                  renderSlot(_ctx.$slots, "img", {}, void 0, true)
                ]),
                createVNode(_component_i18n_t, {
                  scope: "global",
                  keypath: _ctx.keypathTitle,
                  tag: "h1",
                  class: "fcp__title"
                }, {
                  "title-highlight": withCtx(() => [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t(`${_ctx.keypathTitle}-highlight`)), 1)
                  ]),
                  _: 1
                }, 8, ["keypath"]),
                createVNode("div", { class: "fcp__texts" }, [
                  renderSlot(_ctx.$slots, "text", {}, void 0, true)
                ]),
                createVNode("div", { class: "fcp__button" }, [
                  renderSlot(_ctx.$slots, "button", {}, void 0, true)
                ])
              ]),
              _ctx.$slots.platforms ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fcp__platforms"
              }, [
                renderSlot(_ctx.$slots, "platforms", {}, void 0, true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/FirstContentfulPaint.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const FirstContentfulPaint = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-357d14aa"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Section = __nuxt_component_0;
  _push(ssrRenderComponent(_component_Section, mergeProps({ class: "how-to-set-up" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 data-v-7797388c${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</h2><p data-v-7797388c${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "text", {}, null, _push2, _parent2, _scopeId);
        _push2(`</p><div class="how-to-set-up__cards" data-v-7797388c${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "cards", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("h2", null, [
            renderSlot(_ctx.$slots, "title", {}, void 0, true)
          ]),
          createVNode("p", null, [
            renderSlot(_ctx.$slots, "text", {}, void 0, true)
          ]),
          createVNode("div", { class: "how-to-set-up__cards" }, [
            renderSlot(_ctx.$slots, "cards", {}, void 0, true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HowToSetUp.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HowToSetUp = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7797388c"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ConnectAndPrivate",
  __ssrInlineRender: true,
  props: {
    keypathTitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = __nuxt_component_0;
      const _component_i18n_t = resolveComponent("i18n-t");
      _push(ssrRenderComponent(_component_Section, mergeProps({ "bg-dark": "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="connect" data-v-b1e99582${_scopeId}>`);
            _push2(ssrRenderComponent(_component_i18n_t, {
              scope: "global",
              keypath: _ctx.keypathTitle,
              tag: "h2"
            }, {
              "title-highlight": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-orange" data-v-b1e99582${_scopeId2}>${ssrInterpolate(_ctx.$t(`${_ctx.keypathTitle}-highlight`))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t(`${_ctx.keypathTitle}-highlight`)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="connect__cards" data-v-b1e99582${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "cards", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "button", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "connect" }, [
                createVNode(_component_i18n_t, {
                  scope: "global",
                  keypath: _ctx.keypathTitle,
                  tag: "h2"
                }, {
                  "title-highlight": withCtx(() => [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t(`${_ctx.keypathTitle}-highlight`)), 1)
                  ]),
                  _: 1
                }, 8, ["keypath"]),
                createVNode("div", { class: "connect__cards" }, [
                  renderSlot(_ctx.$slots, "cards", {}, void 0, true)
                ]),
                renderSlot(_ctx.$slots, "button", {}, void 0, true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ConnectAndPrivate.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ConnectAndPrivate = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b1e99582"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Section = __nuxt_component_0;
  _push(ssrRenderComponent(_component_Section, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="benefits" data-v-43c0c33e${_scopeId}><h2 data-v-43c0c33e${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</h2><div class="benefits__cards" data-v-43c0c33e${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "cards", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "benefits" }, [
            createVNode("h2", null, [
              renderSlot(_ctx.$slots, "title", {}, void 0, true)
            ]),
            createVNode("div", { class: "benefits__cards" }, [
              renderSlot(_ctx.$slots, "cards", {}, void 0, true)
            ])
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BenefitsOfServers.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BenefitsOfServers = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-43c0c33e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SetUpCard",
  __ssrInlineRender: true,
  props: {
    imgType: {},
    title: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "set-up-card" }, _attrs))} data-v-2fd55561>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `/images/sections/set-up-card--${_ctx.imgType}.png`,
        alt: _ctx.imgType,
        width: "420",
        height: "285"
      }, null, _parent));
      _push(`<h3 data-v-2fd55561>${ssrInterpolate(_ctx.title)}</h3><p data-v-2fd55561>${ssrInterpolate(_ctx.text)}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HowToSetUp/SetUpCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SetUpCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2fd55561"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConnectAndPrivateCard",
  __ssrInlineRender: true,
  props: {
    imgType: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "connect-card" }, _attrs))} data-v-29feac8c>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `/images/sections/connect-card--${_ctx.imgType}.png`,
        alt: _ctx.imgType,
        width: "200",
        height: "130",
        class: "connect-card__img"
      }, null, _parent));
      _push(`<p data-v-29feac8c>${ssrInterpolate(_ctx.text)}</p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ConnectAndPrivate/ConnectAndPrivateCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ConnectAndPrivateCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-29feac8c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BenefitsOfServersCard",
  __ssrInlineRender: true,
  props: {
    imgType: {},
    title: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "benefits-card" }, _attrs))} data-v-1f3eced7><div class="benefits-card__title" data-v-1f3eced7><div class="benefits-card__img" data-v-1f3eced7>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `/images/icons/icon-${_ctx.imgType}.svg`,
        alt: _ctx.imgType,
        width: "420",
        height: "285"
      }, null, _parent));
      _push(`</div><h3 data-v-1f3eced7>${ssrInterpolate(_ctx.title)}</h3></div><p data-v-1f3eced7>${ssrInterpolate(_ctx.text)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BenefitsOfServers/BenefitsOfServersCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BenefitsOfServersCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f3eced7"]]);
const setUpCards = [
  { imgType: "download" },
  { imgType: "connect" },
  { imgType: "enjoy" }
];
const connectCards = [
  { imgType: "speed" },
  { imgType: "device" },
  { imgType: "screen" },
  { imgType: "map" },
  { imgType: "web" },
  { imgType: "data" }
];
const benefitsCards = [
  { imgType: "shield-cross" },
  { imgType: "shield-security" },
  { imgType: "security-user" },
  { imgType: "security-time" },
  { imgType: "key-square" },
  { imgType: "security" }
];

export { BenefitsOfServers as B, ConnectAndPrivate as C, FirstContentfulPaint as F, HowToSetUp as H, SetUpCard as S, ConnectAndPrivateCard as a, benefitsCards as b, connectCards as c, BenefitsOfServersCard as d, setUpCards as s };
//# sourceMappingURL=cards-BaN1GcAG.mjs.map
