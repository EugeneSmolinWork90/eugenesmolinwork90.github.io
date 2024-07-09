const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/donate/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/donate/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/donate/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/donate/"
                    }
                ]
            },
            {
                "loc": "/ru/donate/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/donate/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/donate/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/donate/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-android/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-android/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-android/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-android/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-android/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-android/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-android/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-android/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-chrome/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-chrome/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-chrome/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-chrome/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-chrome/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-chrome/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-chrome/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-chrome/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-edge/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-edge/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-edge/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-edge/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-edge/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-edge/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-edge/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-edge/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-firefox/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-firefox/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-firefox/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-firefox/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-firefox/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-firefox/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-firefox/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-firefox/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-ios/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-ios/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-ios/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-ios/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-ios/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-ios/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-ios/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-ios/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-linux/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-linux/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-linux/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-linux/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-linux/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-linux/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-linux/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-linux/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-mac/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-mac/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-mac/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-mac/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-mac/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-mac/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-mac/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-mac/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-opera/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-opera/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-opera/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-opera/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-opera/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-opera/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-opera/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-opera/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-windows/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-windows/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-windows/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-windows/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-windows/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-windows/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-windows/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-windows/"
                    }
                ]
            },
            {
                "loc": "/free-vpn-yandex/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-yandex/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-yandex/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-yandex/"
                    }
                ]
            },
            {
                "loc": "/ru/free-vpn-yandex/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/free-vpn-yandex/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/free-vpn-yandex/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/free-vpn-yandex/"
                    }
                ]
            },
            {
                "loc": "/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/ru/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/policy/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/policy/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/policy/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/policy/"
                    }
                ]
            },
            {
                "loc": "/ru/policy/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/policy/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/policy/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/policy/"
                    }
                ]
            },
            {
                "loc": "/terms/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/terms/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/terms/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/terms/"
                    }
                ]
            },
            {
                "loc": "/ru/terms/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/terms/"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/ru/terms/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/terms/"
                    }
                ]
            },
            {
                "loc": "/en/",
                "_sitemap": "en"
            },
            {
                "loc": "/sitemap.xml",
                "_sitemap": "en"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
