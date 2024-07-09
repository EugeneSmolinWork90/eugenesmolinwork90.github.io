import { defineAsyncComponent, defineComponent, onErrorCaptured, createVNode } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/index.mjs';
import { c as createError } from './server.mjs';
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
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/@unhead/addons/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/cookie-es/dist/index.mjs';

const islandComponents = {
  "BrandedLogo": defineAsyncComponent(() => import(
    './BrandedLogo-DJaHntjk.mjs'
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "Frame": defineAsyncComponent(() => import(
    './Frame-C5qG_jR3.mjs'
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    './Nuxt-DzArWBIO.mjs'
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    './NuxtSeo-DYf-5bNL.mjs'
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    './Pergel-B9CORIq4.mjs'
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    './SimpleBlog-DDaX1116.mjs'
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    './UnJs-C2T8pG7u.mjs'
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    './Wave-DkmQ0nuL.mjs'
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    './WithEmoji-CdhPpvLx.mjs'
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-3cHlSnvl.mjs.map
