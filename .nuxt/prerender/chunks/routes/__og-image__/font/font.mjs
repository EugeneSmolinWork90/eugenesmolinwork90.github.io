import { defineEventHandler, getQuery, createError, proxyRequest, sendRedirect } from 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/h3/dist/index.mjs';
import { p as parseURL, u as useOgImageRuntimeConfig, n as normaliseFontInput } from '../../../runtime.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/destr/dist/index.mjs';
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
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/vue/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///home/eugene/Work/01-work-projects/vpnly-nuxt/node_modules/ipx/dist/index.mjs';

const font = defineEventHandler(async (e) => {
  const path = parseURL(e.path).pathname;
  const [_name, _weight] = path.split("/font/")[1].split(".")[0].split("/");
  if (!_name || !_weight)
    return "Provide a font name and weight";
  const name = _name[0].toUpperCase() + _name.slice(1);
  const weight = Math.round(Number.parseInt(_weight) / 100) * 100;
  const config = useOgImageRuntimeConfig();
  const normalisedFonts = normaliseFontInput(config.fonts);
  let font;
  if (typeof getQuery(e).font === "string")
    font = JSON.parse(getQuery(e).font);
  if (!font) {
    font = normalisedFonts.find((font2) => {
      return font2.name.toLowerCase() === name.toLowerCase() && weight === Number(font2.weight);
    });
  }
  if (!font) {
    return createError({
      statusCode: 404,
      statusMessage: `[Nuxt OG Image] Font ${name}:${weight} not found`
    });
  }
  const css = await globalThis.$fetch(`https://fonts.googleapis.com/css2?family=${name}:wght@${weight}`, {
    headers: {
      // Make sure it returns TTF.
      "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"
    }
  });
  if (!css) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Invalid Google Font ${name}:${weight}`
    });
  }
  const ttfResource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (ttfResource?.[1])
    return proxyRequest(e, ttfResource[1], {});
  const woff2Resource = css.match(/src: url\((.+)\) format\('woff2'\)/);
  if (woff2Resource?.[1])
    return sendRedirect(e, woff2Resource[1]);
  return createError({
    statusCode: 500,
    statusMessage: `[Nuxt OG Image] Malformed Google Font CSS ${css}`
  });
});

export { font as default };
//# sourceMappingURL=font.mjs.map
