import { V as VButton, _ as __nuxt_component_1 } from "./VButton-7LOx4zCV.js";
import __nuxt_component_0 from "./Section-D_UUhxYL.js";
import { useHead } from "unhead";
import { defineComponent, withCtx, createVNode, toDisplayString, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { F as FirstContentfulPaint, H as HowToSetUp, s as setUpCards, S as SetUpCard, C as ConnectAndPrivate, c as connectCards, a as ConnectAndPrivateCard, B as BenefitsOfServers, b as benefitsCards, d as BenefitsOfServersCard } from "./cards-BaN1GcAG.js";
import { P as PlatformsList } from "./PlatformsList-8Dey24Sj.js";
import { f as useI18n, _ as _export_sfc } from "../server.mjs";
import "defu";
import "h3";
import "./Container-DL_4idYO.js";
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
import "./routes-Bkc00j1Z.js";
import "./nuxt-link-DeYZpbTD.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "free-vpn-mac",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: t("desktop-mac.seo.title"),
      meta: [
        { name: "description", content: t("desktop-mac.seo.description") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      const _component_Section = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(FirstContentfulPaint, {
        "keypath-title": "desktop-mac.fcp.title",
        class: "fcp-parent"
      }, {
        img: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fcp-parent__img" data-v-333aec8d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/pages/desktop/mac.png",
              alt: "Mac",
              width: "632",
              height: "591"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "fcp-parent__img" }, [
                createVNode(_component_NuxtImg, {
                  src: "/images/pages/desktop/mac.png",
                  alt: "Mac",
                  width: "632",
                  height: "591"
                })
              ])
            ];
          }
        }),
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-333aec8d${_scopeId}>${ssrInterpolate(_ctx.$t("desktop-mac.fcp.text-1"))}</p><p data-v-333aec8d${_scopeId}>${ssrInterpolate(_ctx.$t("desktop-mac.fcp.text-2"))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$t("desktop-mac.fcp.text-1")), 1),
              createVNode("p", null, toDisplayString(_ctx.$t("desktop-mac.fcp.text-2")), 1)
            ];
          }
        }),
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("desktop-mac.fcp.button"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("desktop-mac.fcp.button")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VButton, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("desktop-mac.fcp.button")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(HowToSetUp, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("desktop-mac.how-to-set-up.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("desktop-mac.how-to-set-up.title")), 1)
            ];
          }
        }),
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("desktop-mac.how-to-set-up.text"))}<br data-v-333aec8d${_scopeId}> ${ssrInterpolate(_ctx.$t("desktop-mac.how-to-set-up.text-2"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("desktop-mac.how-to-set-up.text")), 1),
              createVNode("br"),
              createTextVNode(" " + toDisplayString(_ctx.$t("desktop-mac.how-to-set-up.text-2")), 1)
            ];
          }
        }),
        cards: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(setUpCards), (card, key) => {
              _push2(ssrRenderComponent(SetUpCard, {
                key: card.imgType,
                "img-type": card.imgType,
                title: _ctx.$t(`desktop-mac.how-to-set-up.cards[${key}].title`),
                text: _ctx.$t(`desktop-mac.how-to-set-up.cards[${key}].text`)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(setUpCards), (card, key) => {
                return openBlock(), createBlock(SetUpCard, {
                  key: card.imgType,
                  "img-type": card.imgType,
                  title: _ctx.$t(`desktop-mac.how-to-set-up.cards[${key}].title`),
                  text: _ctx.$t(`desktop-mac.how-to-set-up.cards[${key}].text`)
                }, null, 8, ["img-type", "title", "text"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ConnectAndPrivate, { "keypath-title": "desktop-mac.connect-and-private.title" }, {
        cards: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(connectCards), (card, key) => {
              _push2(ssrRenderComponent(ConnectAndPrivateCard, {
                key: card.imgType,
                "img-type": card.imgType,
                text: _ctx.$t(`desktop-mac.connect-and-private.cards[${key}]`)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(connectCards), (card, key) => {
                return openBlock(), createBlock(ConnectAndPrivateCard, {
                  key: card.imgType,
                  "img-type": card.imgType,
                  text: _ctx.$t(`desktop-mac.connect-and-private.cards[${key}]`)
                }, null, 8, ["img-type", "text"]);
              }), 128))
            ];
          }
        }),
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("desktop-mac.connect-and-private.button"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("desktop-mac.connect-and-private.button")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VButton, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("desktop-mac.connect-and-private.button")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { class: "platforms-section" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PlatformsList, { "keypath-title": "desktop-mac.platforms.title" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PlatformsList, { "keypath-title": "desktop-mac.platforms.title" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BenefitsOfServers, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("desktop-mac.benefits.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("desktop-mac.benefits.title")), 1)
            ];
          }
        }),
        cards: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(benefitsCards), (card, key) => {
              _push2(ssrRenderComponent(BenefitsOfServersCard, {
                key: card.imgType,
                "img-type": card.imgType,
                title: _ctx.$t(`desktop-mac.benefits.cards[${key}].title`),
                text: _ctx.$t(`desktop-mac.benefits.cards[${key}].text`)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(benefitsCards), (card, key) => {
                return openBlock(), createBlock(BenefitsOfServersCard, {
                  key: card.imgType,
                  "img-type": card.imgType,
                  title: _ctx.$t(`desktop-mac.benefits.cards[${key}].title`),
                  text: _ctx.$t(`desktop-mac.benefits.cards[${key}].text`)
                }, null, 8, ["img-type", "title", "text"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/free-vpn-mac.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const freeVpnMac = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-333aec8d"]]);
export {
  freeVpnMac as default
};
//# sourceMappingURL=free-vpn-mac-CjYqX4kc.js.map
