import { d as defineNuxtLink } from "./nuxt-link-DeYZpbTD.js";
import { q as useLocalePath, h as hasProtocol } from "../server.mjs";
import { defineComponent, computed, h } from "vue";
const NuxtLinkLocale = defineNuxtLink({ componentName: "NuxtLinkLocale" });
const __nuxt_component_0 = defineComponent({
  name: "NuxtLinkLocale",
  props: {
    ...NuxtLinkLocale.props,
    locale: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(props, { slots }) {
    const localePath = useLocalePath();
    const resolvedPath = computed(() => {
      const destination = props.to ?? props.href;
      return destination != null ? localePath(destination, props.locale) : destination;
    });
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      if (props.target && props.target !== "_self") {
        return true;
      }
      const destination = props.to ?? props.href;
      if (typeof destination === "object") {
        return false;
      }
      return destination === "" || destination == null || hasProtocol(destination, { acceptRelative: true });
    });
    const getNuxtLinkProps = () => {
      const _props = {
        ...props
      };
      if (!isExternal.value) {
        _props.to = resolvedPath.value;
      }
      delete _props.href;
      delete _props.locale;
      return _props;
    };
    return () => h(NuxtLinkLocale, getNuxtLinkProps(), slots.default);
  }
});
var ProductsEnum = /* @__PURE__ */ ((ProductsEnum2) => {
  ProductsEnum2["FIREFOX"] = "firefox";
  ProductsEnum2["EDGE"] = "edge";
  ProductsEnum2["CHROME"] = "chrome";
  ProductsEnum2["OPERA"] = "opera";
  ProductsEnum2["YANDEX"] = "yandex";
  ProductsEnum2["WINDOWS"] = "windows";
  ProductsEnum2["MAC"] = "mac";
  ProductsEnum2["LINUX"] = "linux";
  ProductsEnum2["ANDROID"] = "android";
  ProductsEnum2["IOS"] = "ios";
  ProductsEnum2["ROUTER"] = "router";
  ProductsEnum2["APP_GALLERY"] = "app-gallery";
  ProductsEnum2["AMAZON"] = "amazon";
  return ProductsEnum2;
})(ProductsEnum || {});
var RoutesPathsEnum = /* @__PURE__ */ ((RoutesPathsEnum2) => {
  RoutesPathsEnum2["MAIN"] = "/";
  RoutesPathsEnum2["DONATE"] = "/donate";
  RoutesPathsEnum2["POLICY"] = "/policy";
  RoutesPathsEnum2["TERMS"] = "/terms";
  RoutesPathsEnum2["EXTENSION_CHROME"] = "/free-vpn-chrome";
  RoutesPathsEnum2["EXTENSION_OPERA"] = "/free-vpn-opera";
  RoutesPathsEnum2["EXTENSION_YANDEX"] = "/free-vpn-yandex";
  RoutesPathsEnum2["EXTENSION_FIREFOX"] = "/free-vpn-firefox";
  RoutesPathsEnum2["EXTENSION_EDGE"] = "/free-vpn-edge";
  RoutesPathsEnum2["DESKTOP_MAC"] = "/free-vpn-mac";
  RoutesPathsEnum2["DESKTOP_WINDOWS"] = "/free-vpn-windows";
  RoutesPathsEnum2["DESKTOP_LINUX"] = "/free-vpn-linux";
  RoutesPathsEnum2["MOBILE_ANDROID"] = "/free-vpn-android";
  RoutesPathsEnum2["MOBILE_IOS"] = "/free-vpn-ios";
  return RoutesPathsEnum2;
})(RoutesPathsEnum || {});
export {
  ProductsEnum as P,
  RoutesPathsEnum as R,
  __nuxt_component_0 as _
};
//# sourceMappingURL=routes-Bkc00j1Z.js.map
