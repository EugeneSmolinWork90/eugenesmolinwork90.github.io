// Generated by nuxt-seo-experiments.assets

declare module '#app' {
  import { HeadEntry, HeadTag } from '@unhead/schema'

  interface RuntimeNuxtHooks {
    'head:tags': (tag: HeadTag[]) => Promise<void> | void
    'head:entries': (entries: HeadEntry[]) => Promise<void> | void
  }
}
declare module '@unhead/schema' {

  type PublicFiles = '/favicon.ico' | '/images/logo-white.svg' | '/images/logo.svg' | '/images/head/android-chrome-192x192.png' | '/images/head/android-chrome-512x512.png' | '/images/head/apple-touch-icon.png' | '/images/head/browserconfig.xml' | '/images/head/favicon-16x16.png' | '/images/head/favicon-32x32.png' | '/images/head/favicon.ico' | '/images/head/mstile-150x150.png' | '/images/head/safari-pinned-tab.svg' | '/images/head/site.webmanifest' | '/images/icons/icon-folder-2.svg' | '/images/icons/icon-heart-solid.svg' | '/images/icons/icon-heart.svg' | '/images/icons/icon-key-square.svg' | '/images/icons/icon-lock.svg' | '/images/icons/icon-openvpn.svg' | '/images/icons/icon-security-time.svg' | '/images/icons/icon-security-user.svg' | '/images/icons/icon-security.svg' | '/images/icons/icon-shield-cross.svg' | '/images/icons/icon-shield-security.svg' | '/images/platform/amazon.svg' | '/images/platform/android.svg' | '/images/platform/app-gallery.svg' | '/images/platform/chrome.svg' | '/images/platform/edge.svg' | '/images/platform/firefox.svg' | '/images/platform/ios.svg' | '/images/platform/linux.svg' | '/images/platform/mac.svg' | '/images/platform/openvpn.svg' | '/images/platform/opera.svg' | '/images/platform/router.svg' | '/images/platform/windows.svg' | '/images/platform/yandex.svg' | '/images/sections/connect-card--data.png' | '/images/sections/connect-card--device.png' | '/images/sections/connect-card--map.png' | '/images/sections/connect-card--screen.png' | '/images/sections/connect-card--speed.png' | '/images/sections/connect-card--web.png' | '/images/sections/set-up-card--connect.png' | '/images/sections/set-up-card--download.png' | '/images/sections/set-up-card--enjoy.png' | '/images/pages/desktop/linux.png' | '/images/pages/desktop/mac.png' | '/images/pages/desktop/windows.png' | '/images/pages/extension/chrome.png' | '/images/pages/extension/edge.png' | '/images/pages/extension/firefox.png' | '/images/pages/extension/opera.png' | '/images/pages/extension/yandex.png' | '/images/pages/main/bg-left.svg' | '/images/pages/main/bg-right.svg' | '/images/pages/main/header-main.png' | '/images/pages/main/map.png' | '/images/pages/main/no-logs.png' | '/images/pages/main/servers-mobile.png' | '/images/pages/main/servers.png' | '/images/pages/mobile/android.png' | '/images/pages/mobile/ios.png' | '/images/platform/pale/amazon.svg' | '/images/platform/pale/android.svg' | '/images/platform/pale/app-gallery.svg' | '/images/platform/pale/chrome.svg' | '/images/platform/pale/edge.svg' | '/images/platform/pale/firefox.svg' | '/images/platform/pale/ios.svg' | '/images/platform/pale/linux.svg' | '/images/platform/pale/mac.svg' | '/images/platform/pale/openvpn.svg' | '/images/platform/pale/opera.svg' | '/images/platform/pale/router.svg' | '/images/platform/pale/windows.svg' | '/images/platform/pale/yandex.svg' | (string & Record<never, never>)
  type JsFiles = (string & Record<never, never>)

  interface SchemaAugmentations {
    link: import('@unhead/schema').UserTagConfigWithoutInnerContent & {
      href: PublicFiles
    }
    script: import('@unhead/schema').TagUserProperties & {
      src: JsFiles
    }
  }
}
export {}
