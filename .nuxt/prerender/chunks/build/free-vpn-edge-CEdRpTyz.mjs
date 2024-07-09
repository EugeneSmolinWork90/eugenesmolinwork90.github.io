import { V as VButton, _ as __nuxt_component_1 } from './VButton-7LOx4zCV.mjs';
import { useHead } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unhead/dist/index.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/server-renderer/index.mjs';
import { F as FirstContentfulPaint, H as HowToSetUp, s as setUpCards, S as SetUpCard, C as ConnectAndPrivate, c as connectCards, a as ConnectAndPrivateCard, B as BenefitsOfServers, b as benefitsCards, d as BenefitsOfServersCard } from './cards-BaN1GcAG.mjs';
import { P as PlatformsList } from './PlatformsList-8Dey24Sj.mjs';
import { f as useI18n } from './server.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/h3/dist/index.mjs';
import './Container-DL_4idYO.mjs';
import './Section-D_UUhxYL.mjs';
import './routes-Bkc00j1Z.mjs';
import './nuxt-link-DeYZpbTD.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/ofetch/dist/node.mjs';
import '../_/renderer3.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/devalue/index.js';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/destr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/klona/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/scule/dist/index.mjs';
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
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/@unhead/addons/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "free-vpn-edge",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: t("extension-edge.seo.title"),
      meta: [
        { name: "description", content: t("extension-edge.seo.description") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(FirstContentfulPaint, { "keypath-title": "extension-edge.fcp.title" }, {
        img: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/pages/extension/edge.png",
              alt: "Edge",
              width: "530",
              height: "505"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/images/pages/extension/edge.png",
                alt: "Edge",
                width: "530",
                height: "505"
              })
            ];
          }
        }),
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("extension-edge.fcp.text-1"))}</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("extension-edge.fcp.text-2"))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$t("extension-edge.fcp.text-1")), 1),
              createVNode("p", null, toDisplayString(_ctx.$t("extension-edge.fcp.text-2")), 1)
            ];
          }
        }),
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("extension-edge.fcp.button"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("extension-edge.fcp.button")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VButton, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("extension-edge.fcp.button")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        platforms: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PlatformsList, { "keypath-title": "extension-edge.fcp.devices.title" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PlatformsList, { "keypath-title": "extension-edge.fcp.devices.title" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(HowToSetUp, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("extension-edge.how-to-set-up.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("extension-edge.how-to-set-up.title")), 1)
            ];
          }
        }),
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("extension-edge.how-to-set-up.text"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("extension-edge.how-to-set-up.text")), 1)
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
                title: _ctx.$t(`extension-edge.how-to-set-up.cards[${key}].title`),
                text: _ctx.$t(`extension-edge.how-to-set-up.cards[${key}].text`)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(setUpCards), (card, key) => {
                return openBlock(), createBlock(SetUpCard, {
                  key: card.imgType,
                  "img-type": card.imgType,
                  title: _ctx.$t(`extension-edge.how-to-set-up.cards[${key}].title`),
                  text: _ctx.$t(`extension-edge.how-to-set-up.cards[${key}].text`)
                }, null, 8, ["img-type", "title", "text"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ConnectAndPrivate, { "keypath-title": "extension-edge.connect-and-private.title" }, {
        cards: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(connectCards), (card, key) => {
              _push2(ssrRenderComponent(ConnectAndPrivateCard, {
                key: card.imgType,
                "img-type": card.imgType,
                text: _ctx.$t(`extension-edge.connect-and-private.cards[${key}]`)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(connectCards), (card, key) => {
                return openBlock(), createBlock(ConnectAndPrivateCard, {
                  key: card.imgType,
                  "img-type": card.imgType,
                  text: _ctx.$t(`extension-edge.connect-and-private.cards[${key}]`)
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
                  _push3(`${ssrInterpolate(_ctx.$t("extension-edge.connect-and-private.button"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("extension-edge.connect-and-private.button")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VButton, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("extension-edge.connect-and-private.button")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BenefitsOfServers, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("extension-edge.benefits.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("extension-edge.benefits.title")), 1)
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
                title: _ctx.$t(`extension-edge.benefits.cards[${key}].title`),
                text: _ctx.$t(`extension-edge.benefits.cards[${key}].text`)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(benefitsCards), (card, key) => {
                return openBlock(), createBlock(BenefitsOfServersCard, {
                  key: card.imgType,
                  "img-type": card.imgType,
                  title: _ctx.$t(`extension-edge.benefits.cards[${key}].title`),
                  text: _ctx.$t(`extension-edge.benefits.cards[${key}].text`)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/free-vpn-edge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=free-vpn-edge-CEdRpTyz.mjs.map
