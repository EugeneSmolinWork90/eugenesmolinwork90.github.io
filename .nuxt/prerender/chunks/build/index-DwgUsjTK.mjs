import { V as VButton, _ as __nuxt_component_1 } from './VButton-7LOx4zCV.mjs';
import { useHead, getActiveHead } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unhead/dist/index.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, ref, createCommentVNode, unref } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderClass } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, f as useI18n, U as UnheadSchemaOrg } from './server.mjs';
import __nuxt_component_0 from './Section-D_UUhxYL.mjs';
import { P as PlatformsList } from './PlatformsList-8Dey24Sj.mjs';
import { S as Support, F as Faq } from './Support-BQXLy7TR.mjs';
import { B as BASE_LINK } from './links-9sdGeB_B.mjs';
import { useRoute } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/h3/dist/index.mjs';
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
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/@unhead/addons/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/cookie-es/dist/index.mjs';
import './Container-DL_4idYO.mjs';
import './routes-Bkc00j1Z.mjs';
import './nuxt-link-DeYZpbTD.mjs';

function provideResolver(input, resolver) {
  if (!input)
    input = {};
  input._resolver = resolver;
  return input;
}
function defineBreadcrumb(input) {
  return provideResolver(input, "breadcrumb");
}
function defineOrganization(input) {
  return provideResolver(input, "organization");
}
function defineQuestion(input) {
  return provideResolver(input, "question");
}
function defineWebPage(input) {
  return provideResolver(input, "webPage");
}
function defineWebSite(input) {
  return provideResolver(input, "webSite");
}
function defineSoftwareApp(input) {
  return provideResolver(input, "softwareApp");
}
function useSchemaOrg(input) {
  const head = getActiveHead();
  if (!head)
    return;
  head.use(UnheadSchemaOrg());
  return useHead({
    script: [
      {
        type: "application/ld+json",
        key: "schema-org-graph",
        nodes: input
      }
    ]
  });
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Fcp",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_NuxtImg = __nuxt_component_1;
      _push(ssrRenderComponent(__nuxt_component_0, mergeProps({ class: "fcp" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fcp__wrap" data-v-ba754db8${_scopeId}><div class="fcp__content" data-v-ba754db8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_i18n_t, {
              scope: "global",
              keypath: "main.fcp.title",
              tag: "h1"
            }, {
              "title-highlight": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-orange" data-v-ba754db8${_scopeId2}>${ssrInterpolate(_ctx.$t("main.fcp.title-highlight"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.fcp.title-highlight")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p data-v-ba754db8${_scopeId}>${ssrInterpolate(_ctx.$t("main.fcp.text"))}</p></div><div class="fcp__btn" data-v-ba754db8${_scopeId}>`);
            _push2(ssrRenderComponent(VButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("main.fcp.button"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("main.fcp.button")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="fcp__img" data-v-ba754db8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/pages/main/bg-left.svg",
              alt: "",
              width: "402",
              height: "785",
              class: "fcp__img-left"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/pages/main/header-main.png",
              alt: "",
              width: "860",
              height: "509"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/pages/main/bg-right.svg",
              alt: "",
              width: "401",
              height: "785",
              class: "fcp__img-right"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(PlatformsList, {
              "keypath-title": "main.fcp.devices.title",
              class: "fcp__platforms"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "fcp__wrap" }, [
                createVNode("div", { class: "fcp__content" }, [
                  createVNode(_component_i18n_t, {
                    scope: "global",
                    keypath: "main.fcp.title",
                    tag: "h1"
                  }, {
                    "title-highlight": withCtx(() => [
                      createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.fcp.title-highlight")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("p", null, toDisplayString(_ctx.$t("main.fcp.text")), 1)
                ]),
                createVNode("div", { class: "fcp__btn" }, [
                  createVNode(VButton, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("main.fcp.button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "fcp__img" }, [
                  createVNode(_component_NuxtImg, {
                    src: "/images/pages/main/bg-left.svg",
                    alt: "",
                    width: "402",
                    height: "785",
                    class: "fcp__img-left"
                  }),
                  createVNode(_component_NuxtImg, {
                    src: "/images/pages/main/header-main.png",
                    alt: "",
                    width: "860",
                    height: "509"
                  }),
                  createVNode(_component_NuxtImg, {
                    src: "/images/pages/main/bg-right.svg",
                    alt: "",
                    width: "401",
                    height: "785",
                    class: "fcp__img-right"
                  })
                ])
              ]),
              createVNode(PlatformsList, {
                "keypath-title": "main.fcp.devices.title",
                class: "fcp__platforms"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/Fcp.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Fcp = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ba754db8"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ServersCard",
  __ssrInlineRender: true,
  props: {
    imgType: {},
    title: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "servers-item" }, _attrs))} data-v-6358ab81><div class="servers-item__title" data-v-6358ab81><div class="servers-item__img" data-v-6358ab81>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `/images/icons/icon-${_ctx.imgType}.svg`,
        alt: _ctx.imgType,
        width: "34",
        height: "35"
      }, null, _parent));
      _push(`</div><h3 data-v-6358ab81>${ssrInterpolate(_ctx.title)}</h3></div><p data-v-6358ab81>${ssrInterpolate(_ctx.text)}</p></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/Servers/ServersCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ServersCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6358ab81"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Servers",
  __ssrInlineRender: true,
  setup(__props) {
    const serversCards = [
      { imgType: "openvpn" },
      { imgType: "lock" },
      { imgType: "shield-security" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      const _component_i18n_t = resolveComponent("i18n-t");
      _push(ssrRenderComponent(__nuxt_component_0, mergeProps({
        class: "servers",
        "bg-dark": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="servers-block" data-v-db4487eb${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/pages/main/servers.png",
              alt: "Servers",
              width: "611",
              height: "584",
              class: "servers-block__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="servers-block__content" data-v-db4487eb${_scopeId}>`);
            _push2(ssrRenderComponent(_component_i18n_t, {
              scope: "global",
              keypath: "main.servers.title",
              tag: "h2"
            }, {
              "title-highlight": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-orange" data-v-db4487eb${_scopeId2}>${ssrInterpolate(_ctx.$t("main.servers.title-highlight"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.servers.title-highlight")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/pages/main/servers-mobile.png",
              alt: "Servers",
              width: "343",
              height: "375",
              class: "servers-block__img-mobile"
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-db4487eb${_scopeId}>${ssrInterpolate(_ctx.$t("main.servers.text-1"))}</p><p data-v-db4487eb${_scopeId}>${ssrInterpolate(_ctx.$t("main.servers.text-2"))}</p>`);
            _push2(ssrRenderComponent(VButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("main.servers.button"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("main.servers.button")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="servers-security" data-v-db4487eb${_scopeId}><!--[-->`);
            ssrRenderList(serversCards, (card, key) => {
              _push2(ssrRenderComponent(ServersCard, {
                key: card.imgType,
                "img-type": card.imgType,
                title: _ctx.$t(`main.servers.list[${key}].title`),
                text: _ctx.$t(`main.servers.list[${key}].text`)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "servers-block" }, [
                createVNode(_component_NuxtImg, {
                  src: "/images/pages/main/servers.png",
                  alt: "Servers",
                  width: "611",
                  height: "584",
                  class: "servers-block__img"
                }),
                createVNode("div", { class: "servers-block__content" }, [
                  createVNode(_component_i18n_t, {
                    scope: "global",
                    keypath: "main.servers.title",
                    tag: "h2"
                  }, {
                    "title-highlight": withCtx(() => [
                      createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.servers.title-highlight")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtImg, {
                    src: "/images/pages/main/servers-mobile.png",
                    alt: "Servers",
                    width: "343",
                    height: "375",
                    class: "servers-block__img-mobile"
                  }),
                  createVNode("p", null, toDisplayString(_ctx.$t("main.servers.text-1")), 1),
                  createVNode("p", null, toDisplayString(_ctx.$t("main.servers.text-2")), 1),
                  createVNode(VButton, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("main.servers.button")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "servers-security" }, [
                (openBlock(), createBlock(Fragment, null, renderList(serversCards, (card, key) => {
                  return createVNode(ServersCard, {
                    key: card.imgType,
                    "img-type": card.imgType,
                    title: _ctx.$t(`main.servers.list[${key}].title`),
                    text: _ctx.$t(`main.servers.list[${key}].text`)
                  }, null, 8, ["img-type", "title", "text"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/Servers.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Servers = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-db4487eb"]]);
const numberOfTabs = 4;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Benefits",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      _push(ssrRenderComponent(__nuxt_component_0, mergeProps({ class: "benefits" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="benefits__content" data-v-54d63cc1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_i18n_t, {
              scope: "global",
              keypath: "main.benefits.title",
              tag: "h2"
            }, {
              "title-highlight": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-orange" data-v-54d63cc1${_scopeId2}>${ssrInterpolate(_ctx.$t("main.benefits.title-highlight"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.benefits.title-highlight")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p data-v-54d63cc1${_scopeId}>${ssrInterpolate(_ctx.$t("main.benefits.text"))}</p><div class="benefits-tabs" data-v-54d63cc1${_scopeId}><div class="benefits-tabs__list" data-v-54d63cc1${_scopeId}><!--[-->`);
            ssrRenderList(numberOfTabs, (tab, key) => {
              _push2(`<div class="${ssrRenderClass([{ active: activeTab.value === key }, "benefits-tabs__item"])}" data-v-54d63cc1${_scopeId}>${ssrInterpolate(_ctx.$t(`main.benefits.tabs[${key}].title`))}</div>`);
            });
            _push2(`<!--]--></div><div class="benefits-tabs__content" data-v-54d63cc1${_scopeId}>${ssrInterpolate(_ctx.$t(`main.benefits.tabs[${activeTab.value}].text`))}</div></div><div class="benefits-tabs-mobile" data-v-54d63cc1${_scopeId}><!--[-->`);
            ssrRenderList(numberOfTabs, (tab, key) => {
              _push2(`<div class="benefits-tabs-mobile__item" data-v-54d63cc1${_scopeId}><div class="${ssrRenderClass([{ active: activeTab.value === key }, "benefits-tabs-mobile__item-title"])}" data-v-54d63cc1${_scopeId}><span class="text-montserrat" data-v-54d63cc1${_scopeId}>${ssrInterpolate(_ctx.$t(`main.benefits.tabs[${key}].title`))}</span><span class="icon-chevron" data-v-54d63cc1${_scopeId}></span></div>`);
              if (activeTab.value === key) {
                _push2(`<div class="benefits-tabs-mobile__item-content" data-v-54d63cc1${_scopeId}>${ssrInterpolate(_ctx.$t(`main.benefits.tabs[${activeTab.value}].text`))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "benefits__content" }, [
                createVNode(_component_i18n_t, {
                  scope: "global",
                  keypath: "main.benefits.title",
                  tag: "h2"
                }, {
                  "title-highlight": withCtx(() => [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.benefits.title-highlight")), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", null, toDisplayString(_ctx.$t("main.benefits.text")), 1),
                createVNode("div", { class: "benefits-tabs" }, [
                  createVNode("div", { class: "benefits-tabs__list" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(numberOfTabs, (tab, key) => {
                      return createVNode("div", {
                        key: tab,
                        class: ["benefits-tabs__item", { active: activeTab.value === key }],
                        onClick: ($event) => activeTab.value = key
                      }, toDisplayString(_ctx.$t(`main.benefits.tabs[${key}].title`)), 11, ["onClick"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "benefits-tabs__content" }, toDisplayString(_ctx.$t(`main.benefits.tabs[${activeTab.value}].text`)), 1)
                ]),
                createVNode("div", { class: "benefits-tabs-mobile" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(numberOfTabs, (tab, key) => {
                    return createVNode("div", {
                      key: tab,
                      class: "benefits-tabs-mobile__item"
                    }, [
                      createVNode("div", {
                        class: ["benefits-tabs-mobile__item-title", { active: activeTab.value === key }],
                        onClick: ($event) => activeTab.value = key
                      }, [
                        createVNode("span", { class: "text-montserrat" }, toDisplayString(_ctx.$t(`main.benefits.tabs[${key}].title`)), 1),
                        createVNode("span", { class: "icon-chevron" })
                      ], 10, ["onClick"]),
                      activeTab.value === key ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "benefits-tabs-mobile__item-content"
                      }, toDisplayString(_ctx.$t(`main.benefits.tabs[${activeTab.value}].text`)), 1)) : createCommentVNode("", true)
                    ]);
                  }), 64))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/Benefits.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Benefits = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-54d63cc1"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GlobalNetworkCard",
  __ssrInlineRender: true,
  props: {
    imgType: {},
    title: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "global-block" }, _attrs))} data-v-203e71d8><h3 class="global-block__title" data-v-203e71d8><span class="global-block__title-img" data-v-203e71d8>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `/images/icons/icon-${_ctx.imgType}.svg`,
        alt: _ctx.imgType,
        width: "34",
        height: "35"
      }, null, _parent));
      _push(`</span> ${ssrInterpolate(_ctx.title)}</h3><p data-v-203e71d8>${ssrInterpolate(_ctx.text)}</p></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/GlobalNetwork/GlobalNetworkCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const GlobalNetworkCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-203e71d8"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GlobalNetwork",
  __ssrInlineRender: true,
  setup(__props) {
    const networkCards = [{ imgType: "security-time" }, { imgType: "shield-cross" }];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(__nuxt_component_0, mergeProps({ class: "global" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="global-row" data-v-1b4e7e9e${_scopeId}><div class="global-network" data-v-1b4e7e9e${_scopeId}><h2 data-v-1b4e7e9e${_scopeId}>${ssrInterpolate(_ctx.$t("main.global-network.title"))}</h2><p data-v-1b4e7e9e${_scopeId}>${ssrInterpolate(_ctx.$t("main.global-network.text"))}</p><div class="global-network__row text-sm" data-v-1b4e7e9e${_scopeId}><span data-v-1b4e7e9e${_scopeId}>Around 20</span> ${ssrInterpolate(_ctx.$t("main.global-network.list[0]"))}</div><div class="global-network__row text-sm" data-v-1b4e7e9e${_scopeId}><span data-v-1b4e7e9e${_scopeId}>4</span> ${ssrInterpolate(_ctx.$t("main.global-network.list[1]"))}</div><div class="global-network__row text-sm" data-v-1b4e7e9e${_scopeId}><span data-v-1b4e7e9e${_scopeId}>100%</span> ${ssrInterpolate(_ctx.$t("main.global-network.list[2]"))}</div><div class="global-network__button" data-v-1b4e7e9e${_scopeId}>`);
            _push2(ssrRenderComponent(VButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("main.global-network.button"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("main.global-network.button")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="global-dns" data-v-1b4e7e9e${_scopeId}><!--[-->`);
            ssrRenderList(networkCards, (card, key) => {
              _push2(ssrRenderComponent(GlobalNetworkCard, {
                key: card.imgType,
                "img-type": card.imgType,
                title: _ctx.$t(`main.global-network.cards[${key}].title`),
                text: _ctx.$t(`main.global-network.cards[${key}].text`)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "global-row" }, [
                createVNode("div", { class: "global-network" }, [
                  createVNode("h2", null, toDisplayString(_ctx.$t("main.global-network.title")), 1),
                  createVNode("p", null, toDisplayString(_ctx.$t("main.global-network.text")), 1),
                  createVNode("div", { class: "global-network__row text-sm" }, [
                    createVNode("span", null, "Around 20"),
                    createTextVNode(" " + toDisplayString(_ctx.$t("main.global-network.list[0]")), 1)
                  ]),
                  createVNode("div", { class: "global-network__row text-sm" }, [
                    createVNode("span", null, "4"),
                    createTextVNode(" " + toDisplayString(_ctx.$t("main.global-network.list[1]")), 1)
                  ]),
                  createVNode("div", { class: "global-network__row text-sm" }, [
                    createVNode("span", null, "100%"),
                    createTextVNode(" " + toDisplayString(_ctx.$t("main.global-network.list[2]")), 1)
                  ]),
                  createVNode("div", { class: "global-network__button" }, [
                    createVNode(VButton, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("main.global-network.button")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "global-dns" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(networkCards, (card, key) => {
                    return createVNode(GlobalNetworkCard, {
                      key: card.imgType,
                      "img-type": card.imgType,
                      title: _ctx.$t(`main.global-network.cards[${key}].title`),
                      text: _ctx.$t(`main.global-network.cards[${key}].text`)
                    }, null, 8, ["img-type", "title", "text"]);
                  }), 64))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/GlobalNetwork.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const GlobalNetwork = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1b4e7e9e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NoLogsCard",
  __ssrInlineRender: true,
  props: {
    imgType: {},
    title: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "no-logs-card" }, _attrs))} data-v-e1545fde><h3 class="no-logs-card__title" data-v-e1545fde><span class="no-logs-card__title-img" data-v-e1545fde>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `/images/icons/icon-${_ctx.imgType}.svg`,
        alt: _ctx.imgType,
        width: "34",
        height: "35"
      }, null, _parent));
      _push(`</span> ${ssrInterpolate(_ctx.title)}</h3><p data-v-e1545fde>${ssrInterpolate(_ctx.text)}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/NoLogs/NoLogsCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NoLogsCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e1545fde"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NoLogs",
  __ssrInlineRender: true,
  setup(__props) {
    const noLogsCards = [
      { imgType: "security-user" },
      { imgType: "key-square" },
      { imgType: "folder-2" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_NuxtImg = __nuxt_component_1;
      _push(ssrRenderComponent(__nuxt_component_0, mergeProps({ class: "no-logs" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="no-logs__content" data-v-9b3d6a78${_scopeId}><div data-v-9b3d6a78${_scopeId}>`);
            _push2(ssrRenderComponent(_component_i18n_t, {
              scope: "global",
              keypath: "main.no-logs.title",
              tag: "h2"
            }, {
              "title-highlight": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-orange" data-v-9b3d6a78${_scopeId2}>${ssrInterpolate(_ctx.$t("main.no-logs.title-highlight"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.no-logs.title-highlight")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p data-v-9b3d6a78${_scopeId}>${ssrInterpolate(_ctx.$t("main.no-logs.text"))}</p></div>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/pages/main/no-logs.png",
              alt: "Logs",
              width: "758",
              height: "588"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="no-logs-cards" data-v-9b3d6a78${_scopeId}><!--[-->`);
            ssrRenderList(noLogsCards, (card, key) => {
              _push2(ssrRenderComponent(NoLogsCard, {
                key: card.imgType,
                "img-type": card.imgType,
                title: _ctx.$t(`main.no-logs.list[${key}].title`),
                text: _ctx.$t(`main.no-logs.list[${key}].text`)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "no-logs__content" }, [
                createVNode("div", null, [
                  createVNode(_component_i18n_t, {
                    scope: "global",
                    keypath: "main.no-logs.title",
                    tag: "h2"
                  }, {
                    "title-highlight": withCtx(() => [
                      createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.no-logs.title-highlight")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("p", null, toDisplayString(_ctx.$t("main.no-logs.text")), 1)
                ]),
                createVNode(_component_NuxtImg, {
                  src: "/images/pages/main/no-logs.png",
                  alt: "Logs",
                  width: "758",
                  height: "588"
                })
              ]),
              createVNode("div", { class: "no-logs-cards" }, [
                (openBlock(), createBlock(Fragment, null, renderList(noLogsCards, (card, key) => {
                  return createVNode(NoLogsCard, {
                    key: card.imgType,
                    "img-type": card.imgType,
                    title: _ctx.$t(`main.no-logs.list[${key}].title`),
                    text: _ctx.$t(`main.no-logs.list[${key}].text`)
                  }, null, 8, ["img-type", "title", "text"]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/main/NoLogs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NoLogs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9b3d6a78"]]);
const getFullUrl = (path = "", hash = "") => {
  return BASE_LINK + path + hash;
};
const useOrganization = ({ description }) => {
  const route = useRoute();
  return defineOrganization({
    "@id": getFullUrl(route.path, "#organization"),
    name: "VPNLY",
    description,
    logo: getFullUrl("/logo.png"),
    url: getFullUrl(route.path),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue Improbable 99",
      addressLocality: "Paris",
      addressCountry: "FR",
      addressRegion: "Ile-de-France",
      postalCode: "75001"
    }
  });
};
const useWebSite = ({ description }) => {
  const route = useRoute();
  return defineWebSite({
    "@id": getFullUrl(route.path, "#website"),
    name: "VPNLY",
    description,
    image: getFullUrl("/assets/branding/logo_squared@2x.jpg"),
    url: getFullUrl(route.path)
  });
};
const useWebPage = ({
  types = [],
  name,
  description
}) => {
  const route = useRoute();
  return defineWebPage({
    "@type": ["WebPage", ...types],
    url: getFullUrl(route.path),
    name,
    description,
    datePublished: "2022-01-21T13:52:56+00:00",
    dateModified: "2024-02-07T14:10:14+00:00"
  });
};
const useSoftwareApp = ({ name }) => {
  return defineSoftwareApp({
    name,
    operatingSystem: "Windows, macOS, iOS, Android, Linux, Chrome",
    applicationCategory: "SecurityApplication",
    aggregateRating: {
      ratingValue: "4.6",
      ratingCount: 8864,
      bestRating: 5
    },
    offers: {
      price: "1.00",
      priceCurrency: "USD"
    }
  });
};
const useBreadcrumb = ({ itemListElement }) => {
  const route = useRoute();
  const formattedItemList = itemListElement.map(
    (item, index2, array) => {
      const isLastItem = index2 === array.length - 1;
      const formattedItem = {
        name: item
      };
      if (!isLastItem) {
        formattedItem.item = getFullUrl(route.path);
      }
      return formattedItem;
    }
  );
  return defineBreadcrumb({
    itemListElement: formattedItemList
  });
};
const useQuestion = ({ questionsList }) => {
  return questionsList.map(
    (question) => defineQuestion({
      name: question.title,
      acceptedAnswer: question.text
    })
  );
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n();
    useHead({
      title: t("main.seo.title"),
      meta: [
        { property: "og:title", content: t("main.seo.title") },
        { name: "description", content: t("main.seo.description") },
        { property: "og:description", content: t("main.seo.description") },
        { property: "og:image", content: getFullUrl("/image.png") }
      ]
    });
    const faqList = tm("main.faq.list");
    const breadcrumbList = tm("main.structured-data.breadcrumb");
    const formattedFaqList = faqList.map((faq) => ({
      title: rt(faq.title),
      text: rt(faq.text)
    }));
    const formattedBreadcrumbList = breadcrumbList.map(
      (breadcrumb) => rt(breadcrumb)
    );
    useSchemaOrg([
      useOrganization({
        description: t("main.seo.description")
      }),
      useWebSite({
        description: t("main.structured-data.name")
      }),
      useWebPage({
        types: ["FAQPage"],
        name: t("main.seo.title"),
        description: t("main.seo.description")
      }),
      useSoftwareApp({
        name: t("main.structured-data.name")
      }),
      useBreadcrumb({
        itemListElement: formattedBreadcrumbList
      }),
      ...useQuestion({
        questionsList: formattedFaqList
      })
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Fcp, null, null, _parent));
      _push(ssrRenderComponent(Servers, null, null, _parent));
      _push(ssrRenderComponent(Benefits, null, null, _parent));
      _push(ssrRenderComponent(GlobalNetwork, null, null, _parent));
      _push(ssrRenderComponent(NoLogs, null, null, _parent));
      _push(ssrRenderComponent(Support, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_i18n_t, {
              scope: "global",
              keypath: "main.support.title",
              tag: "h2"
            }, {
              "title-highlight": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-orange" data-v-a62a9f7d${_scopeId2}>${ssrInterpolate(_ctx.$t("main.support.title-highlight"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.support.title-highlight")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: "main.support.title",
                tag: "h2"
              }, {
                "title-highlight": withCtx(() => [
                  createVNode("span", { class: "color-orange" }, toDisplayString(_ctx.$t("main.support.title-highlight")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-a62a9f7d${_scopeId}>${ssrInterpolate(_ctx.$t("main.support.text"))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$t("main.support.text")), 1)
            ];
          }
        }),
        "latest-donate": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="support__title" data-v-a62a9f7d${_scopeId}>${ssrInterpolate(_ctx.$t("main.support.activity"))}</h3><div class="support-list__row" data-v-a62a9f7d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/icons/icon-heart-solid.svg",
              alt: "Heart",
              width: "24",
              height: "25"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-a62a9f7d${_scopeId}>Someone donated $ 50</span><span data-v-a62a9f7d${_scopeId}>1h ago</span></div>`);
          } else {
            return [
              createVNode("h3", { class: "support__title" }, toDisplayString(_ctx.$t("main.support.activity")), 1),
              createVNode("div", { class: "support-list__row" }, [
                createVNode(_component_NuxtImg, {
                  src: "/images/icons/icon-heart-solid.svg",
                  alt: "Heart",
                  width: "24",
                  height: "25"
                }),
                createVNode("span", null, "Someone donated $ 50"),
                createVNode("span", null, "1h ago")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a62a9f7d"]]);

export { index as default };
//# sourceMappingURL=index-DwgUsjTK.mjs.map
