"use strict";
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 1646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ es_Tabs)
});

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(9767);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(330);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
// This icon file is generated automatically.
var PlusOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "defs",
                "attrs": {},
                "children": [
                    {
                        "tag": "style",
                        "attrs": {}
                    }
                ]
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
                }
            }
        ]
    },
    "name": "plus",
    "theme": "outlined"
};
/* harmony default export */ const asn_PlusOutlined = (PlusOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 10 modules
var AntdIcon = __webpack_require__(1804);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var PlusOutlined_PlusOutlined = function PlusOutlined(props, ref) {
    return /*#__PURE__*/ external_react_.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
        ref: ref,
        icon: asn_PlusOutlined
    }));
};
if (false) {}
/* harmony default export */ const icons_PlusOutlined = (/*#__PURE__*/external_react_.forwardRef(PlusOutlined_PlusOutlined));

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "rc-tabs"
var external_rc_tabs_ = __webpack_require__(1766);
var external_rc_tabs_default = /*#__PURE__*/__webpack_require__.n(external_rc_tabs_);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1864);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/hooks/useSize.js + 1 modules
var useSize = __webpack_require__(705);
;// CONCATENATED MODULE: ./node_modules/antd/es/Tabs/TabPane.js
const TabPane = ()=>null;
if (false) {}
/* harmony default export */ const Tabs_TabPane = (TabPane);

// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(6359);
;// CONCATENATED MODULE: ./node_modules/antd/es/Tabs/hooks/useAnimateConfig.js

const useAnimateConfig_motion = {
    motionAppear: false,
    motionEnter: true,
    motionLeave: true
};
function useAnimateConfig(prefixCls) {
    let animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        inkBar: true,
        tabPane: false
    };
    let mergedAnimated;
    if (animated === false) {
        mergedAnimated = {
            inkBar: false,
            tabPane: false
        };
    } else if (animated === true) {
        mergedAnimated = {
            inkBar: true,
            tabPane: true
        };
    } else {
        mergedAnimated = Object.assign({
            inkBar: true
        }, typeof animated === "object" ? animated : {});
    }
    if (mergedAnimated.tabPane) {
        mergedAnimated.tabPaneMotion = Object.assign(Object.assign({}, useAnimateConfig_motion), {
            motionName: (0,motion/* getTransitionName */.mL)(prefixCls, "switch")
        });
    }
    return mergedAnimated;
}

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(7438);
;// CONCATENATED MODULE: ./node_modules/antd/es/Tabs/hooks/useLegacyItems.js
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};



function filter(items) {
    return items.filter((item)=>item);
}
function useLegacyItems(items, children) {
    if (items) {
        return items;
    }
     false ? 0 : void 0;
    const childrenItems = (0,toArray/* default */.Z)(children).map((node)=>{
        if (/*#__PURE__*/ external_react_.isValidElement(node)) {
            const { key, props } = node;
            const _a = props || {}, { tab } = _a, restProps = __rest(_a, [
                "tab"
            ]);
            const item = Object.assign(Object.assign({
                key: String(key)
            }, restProps), {
                label: tab
            });
            return item;
        }
        return null;
    });
    return filter(childrenItems);
}

// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(9902);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(5472);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(8604);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/slide.js
var slide = __webpack_require__(8308);
;// CONCATENATED MODULE: ./node_modules/antd/es/Tabs/style/motion.js

const genMotionStyle = (token)=>{
    const { componentCls, motionDurationSlow } = token;
    return [
        {
            [componentCls]: {
                [`${componentCls}-switch`]: {
                    "&-appear, &-enter": {
                        transition: "none",
                        "&-start": {
                            opacity: 0
                        },
                        "&-active": {
                            opacity: 1,
                            transition: `opacity ${motionDurationSlow}`
                        }
                    },
                    "&-leave": {
                        position: "absolute",
                        transition: "none",
                        inset: 0,
                        "&-start": {
                            opacity: 1
                        },
                        "&-active": {
                            opacity: 0,
                            transition: `opacity ${motionDurationSlow}`
                        }
                    }
                }
            }
        },
        // Follow code may reuse in other components
        [
            (0,slide/* initSlideMotion */.oN)(token, "slide-up"),
            (0,slide/* initSlideMotion */.oN)(token, "slide-down")
        ]
    ];
};
/* harmony default export */ const style_motion = (genMotionStyle);

;// CONCATENATED MODULE: ./node_modules/antd/es/Tabs/style/index.js



const genCardStyle = (token)=>{
    const { componentCls, tabsCardPadding, cardBg, cardGutter, colorBorderSecondary, itemSelectedColor } = token;
    return {
        [`${componentCls}-card`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                [`${componentCls}-tab`]: {
                    margin: 0,
                    padding: tabsCardPadding,
                    background: cardBg,
                    border: `${token.lineWidth}px ${token.lineType} ${colorBorderSecondary}`,
                    transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`
                },
                [`${componentCls}-tab-active`]: {
                    color: itemSelectedColor,
                    background: token.colorBgContainer
                },
                [`${componentCls}-ink-bar`]: {
                    visibility: "hidden"
                }
            },
            // ========================== Top & Bottom ==========================
            [`&${componentCls}-top, &${componentCls}-bottom`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab + ${componentCls}-tab`]: {
                        marginLeft: {
                            _skip_check_: true,
                            value: `${cardGutter}px`
                        }
                    }
                }
            },
            [`&${componentCls}-top`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`
                    },
                    [`${componentCls}-tab-active`]: {
                        borderBottomColor: token.colorBgContainer
                    }
                }
            },
            [`&${componentCls}-bottom`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`
                    },
                    [`${componentCls}-tab-active`]: {
                        borderTopColor: token.colorBgContainer
                    }
                }
            },
            // ========================== Left & Right ==========================
            [`&${componentCls}-left, &${componentCls}-right`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab + ${componentCls}-tab`]: {
                        marginTop: `${cardGutter}px`
                    }
                }
            },
            [`&${componentCls}-left`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: `${token.borderRadiusLG}px 0 0 ${token.borderRadiusLG}px`
                        }
                    },
                    [`${componentCls}-tab-active`]: {
                        borderRightColor: {
                            _skip_check_: true,
                            value: token.colorBgContainer
                        }
                    }
                }
            },
            [`&${componentCls}-right`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: `0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px 0`
                        }
                    },
                    [`${componentCls}-tab-active`]: {
                        borderLeftColor: {
                            _skip_check_: true,
                            value: token.colorBgContainer
                        }
                    }
                }
            }
        }
    };
};
const genDropdownStyle = (token)=>{
    const { componentCls, itemHoverColor, dropdownEdgeChildVerticalPadding } = token;
    return {
        [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
            position: "absolute",
            top: -9999,
            left: {
                _skip_check_: true,
                value: -9999
            },
            zIndex: token.zIndexPopup,
            display: "block",
            "&-hidden": {
                display: "none"
            },
            [`${componentCls}-dropdown-menu`]: {
                maxHeight: token.tabsDropdownHeight,
                margin: 0,
                padding: `${dropdownEdgeChildVerticalPadding}px 0`,
                overflowX: "hidden",
                overflowY: "auto",
                textAlign: {
                    _skip_check_: true,
                    value: "left"
                },
                listStyleType: "none",
                backgroundColor: token.colorBgContainer,
                backgroundClip: "padding-box",
                borderRadius: token.borderRadiusLG,
                outline: "none",
                boxShadow: token.boxShadowSecondary,
                "&-item": Object.assign(Object.assign({}, style/* textEllipsis */.vS), {
                    display: "flex",
                    alignItems: "center",
                    minWidth: token.tabsDropdownWidth,
                    margin: 0,
                    padding: `${token.paddingXXS}px ${token.paddingSM}px`,
                    color: token.colorText,
                    fontWeight: "normal",
                    fontSize: token.fontSize,
                    lineHeight: token.lineHeight,
                    cursor: "pointer",
                    transition: `all ${token.motionDurationSlow}`,
                    "> span": {
                        flex: 1,
                        whiteSpace: "nowrap"
                    },
                    "&-remove": {
                        flex: "none",
                        marginLeft: {
                            _skip_check_: true,
                            value: token.marginSM
                        },
                        color: token.colorTextDescription,
                        fontSize: token.fontSizeSM,
                        background: "transparent",
                        border: 0,
                        cursor: "pointer",
                        "&:hover": {
                            color: itemHoverColor
                        }
                    },
                    "&:hover": {
                        background: token.controlItemBgHover
                    },
                    "&-disabled": {
                        "&, &:hover": {
                            color: token.colorTextDisabled,
                            background: "transparent",
                            cursor: "not-allowed"
                        }
                    }
                })
            }
        })
    };
};
const genPositionStyle = (token)=>{
    const { componentCls, margin, colorBorderSecondary, horizontalMargin, verticalItemPadding, verticalItemMargin } = token;
    return {
        // ========================== Top & Bottom ==========================
        [`${componentCls}-top, ${componentCls}-bottom`]: {
            flexDirection: "column",
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                margin: horizontalMargin,
                "&::before": {
                    position: "absolute",
                    right: {
                        _skip_check_: true,
                        value: 0
                    },
                    left: {
                        _skip_check_: true,
                        value: 0
                    },
                    borderBottom: `${token.lineWidth}px ${token.lineType} ${colorBorderSecondary}`,
                    content: "''"
                },
                [`${componentCls}-ink-bar`]: {
                    height: token.lineWidthBold,
                    "&-animated": {
                        transition: `width ${token.motionDurationSlow}, left ${token.motionDurationSlow},
            right ${token.motionDurationSlow}`
                    }
                },
                [`${componentCls}-nav-wrap`]: {
                    "&::before, &::after": {
                        top: 0,
                        bottom: 0,
                        width: token.controlHeight
                    },
                    "&::before": {
                        left: {
                            _skip_check_: true,
                            value: 0
                        },
                        boxShadow: token.boxShadowTabsOverflowLeft
                    },
                    "&::after": {
                        right: {
                            _skip_check_: true,
                            value: 0
                        },
                        boxShadow: token.boxShadowTabsOverflowRight
                    },
                    [`&${componentCls}-nav-wrap-ping-left::before`]: {
                        opacity: 1
                    },
                    [`&${componentCls}-nav-wrap-ping-right::after`]: {
                        opacity: 1
                    }
                }
            }
        },
        [`${componentCls}-top`]: {
            [`> ${componentCls}-nav,
        > div > ${componentCls}-nav`]: {
                "&::before": {
                    bottom: 0
                },
                [`${componentCls}-ink-bar`]: {
                    bottom: 0
                }
            }
        },
        [`${componentCls}-bottom`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                order: 1,
                marginTop: `${margin}px`,
                marginBottom: 0,
                "&::before": {
                    top: 0
                },
                [`${componentCls}-ink-bar`]: {
                    top: 0
                }
            },
            [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
                order: 0
            }
        },
        // ========================== Left & Right ==========================
        [`${componentCls}-left, ${componentCls}-right`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                flexDirection: "column",
                minWidth: token.controlHeight * 1.25,
                // >>>>>>>>>>> Tab
                [`${componentCls}-tab`]: {
                    padding: verticalItemPadding,
                    textAlign: "center"
                },
                [`${componentCls}-tab + ${componentCls}-tab`]: {
                    margin: verticalItemMargin
                },
                // >>>>>>>>>>> Nav
                [`${componentCls}-nav-wrap`]: {
                    flexDirection: "column",
                    "&::before, &::after": {
                        right: {
                            _skip_check_: true,
                            value: 0
                        },
                        left: {
                            _skip_check_: true,
                            value: 0
                        },
                        height: token.controlHeight
                    },
                    "&::before": {
                        top: 0,
                        boxShadow: token.boxShadowTabsOverflowTop
                    },
                    "&::after": {
                        bottom: 0,
                        boxShadow: token.boxShadowTabsOverflowBottom
                    },
                    [`&${componentCls}-nav-wrap-ping-top::before`]: {
                        opacity: 1
                    },
                    [`&${componentCls}-nav-wrap-ping-bottom::after`]: {
                        opacity: 1
                    }
                },
                // >>>>>>>>>>> Ink Bar
                [`${componentCls}-ink-bar`]: {
                    width: token.lineWidthBold,
                    "&-animated": {
                        transition: `height ${token.motionDurationSlow}, top ${token.motionDurationSlow}`
                    }
                },
                [`${componentCls}-nav-list, ${componentCls}-nav-operations`]: {
                    flex: "1 0 auto",
                    flexDirection: "column"
                }
            }
        },
        [`${componentCls}-left`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                [`${componentCls}-ink-bar`]: {
                    right: {
                        _skip_check_: true,
                        value: 0
                    }
                }
            },
            [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
                marginLeft: {
                    _skip_check_: true,
                    value: `-${token.lineWidth}px`
                },
                borderLeft: {
                    _skip_check_: true,
                    value: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
                },
                [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
                    paddingLeft: {
                        _skip_check_: true,
                        value: token.paddingLG
                    }
                }
            }
        },
        [`${componentCls}-right`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                order: 1,
                [`${componentCls}-ink-bar`]: {
                    left: {
                        _skip_check_: true,
                        value: 0
                    }
                }
            },
            [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
                order: 0,
                marginRight: {
                    _skip_check_: true,
                    value: -token.lineWidth
                },
                borderRight: {
                    _skip_check_: true,
                    value: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
                },
                [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
                    paddingRight: {
                        _skip_check_: true,
                        value: token.paddingLG
                    }
                }
            }
        }
    };
};
const genSizeStyle = (token)=>{
    const { componentCls, cardPaddingSM, cardPaddingLG, horizontalItemPaddingSM, horizontalItemPaddingLG } = token;
    return {
        [componentCls]: {
            "&-small": {
                [`> ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        padding: horizontalItemPaddingSM,
                        fontSize: token.titleFontSizeSM
                    }
                }
            },
            "&-large": {
                [`> ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        padding: horizontalItemPaddingLG,
                        fontSize: token.titleFontSizeLG
                    }
                }
            }
        },
        [`${componentCls}-card`]: {
            [`&${componentCls}-small`]: {
                [`> ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        padding: cardPaddingSM
                    }
                },
                [`&${componentCls}-bottom`]: {
                    [`> ${componentCls}-nav ${componentCls}-tab`]: {
                        borderRadius: `0 0 ${token.borderRadius}px ${token.borderRadius}px`
                    }
                },
                [`&${componentCls}-top`]: {
                    [`> ${componentCls}-nav ${componentCls}-tab`]: {
                        borderRadius: `${token.borderRadius}px ${token.borderRadius}px 0 0`
                    }
                },
                [`&${componentCls}-right`]: {
                    [`> ${componentCls}-nav ${componentCls}-tab`]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: `0 ${token.borderRadius}px ${token.borderRadius}px 0`
                        }
                    }
                },
                [`&${componentCls}-left`]: {
                    [`> ${componentCls}-nav ${componentCls}-tab`]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: `${token.borderRadius}px 0 0 ${token.borderRadius}px`
                        }
                    }
                }
            },
            [`&${componentCls}-large`]: {
                [`> ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        padding: cardPaddingLG
                    }
                }
            }
        }
    };
};
const genTabStyle = (token)=>{
    const { componentCls, itemActiveColor, itemHoverColor, iconCls, tabsHorizontalItemMargin, horizontalItemPadding, itemSelectedColor } = token;
    const tabCls = `${componentCls}-tab`;
    return {
        [tabCls]: {
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            padding: horizontalItemPadding,
            fontSize: token.titleFontSize,
            background: "transparent",
            border: 0,
            outline: "none",
            cursor: "pointer",
            "&-btn, &-remove": Object.assign({
                "&:focus:not(:focus-visible), &:active": {
                    color: itemActiveColor
                }
            }, (0,style/* genFocusStyle */.Qy)(token)),
            "&-btn": {
                outline: "none",
                transition: "all 0.3s"
            },
            "&-remove": {
                flex: "none",
                marginRight: {
                    _skip_check_: true,
                    value: -token.marginXXS
                },
                marginLeft: {
                    _skip_check_: true,
                    value: token.marginXS
                },
                color: token.colorTextDescription,
                fontSize: token.fontSizeSM,
                background: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer",
                transition: `all ${token.motionDurationSlow}`,
                "&:hover": {
                    color: token.colorTextHeading
                }
            },
            "&:hover": {
                color: itemHoverColor
            },
            [`&${tabCls}-active ${tabCls}-btn`]: {
                color: itemSelectedColor,
                textShadow: token.tabsActiveTextShadow
            },
            [`&${tabCls}-disabled`]: {
                color: token.colorTextDisabled,
                cursor: "not-allowed"
            },
            [`&${tabCls}-disabled ${tabCls}-btn, &${tabCls}-disabled ${componentCls}-remove`]: {
                "&:focus, &:active": {
                    color: token.colorTextDisabled
                }
            },
            [`& ${tabCls}-remove ${iconCls}`]: {
                margin: 0
            },
            [iconCls]: {
                marginRight: {
                    _skip_check_: true,
                    value: token.marginSM
                }
            }
        },
        [`${tabCls} + ${tabCls}`]: {
            margin: {
                _skip_check_: true,
                value: tabsHorizontalItemMargin
            }
        }
    };
};
const genRtlStyle = (token)=>{
    const { componentCls, tabsHorizontalItemMarginRTL, iconCls, cardGutter } = token;
    const rtlCls = `${componentCls}-rtl`;
    return {
        [rtlCls]: {
            direction: "rtl",
            [`${componentCls}-nav`]: {
                [`${componentCls}-tab`]: {
                    margin: {
                        _skip_check_: true,
                        value: tabsHorizontalItemMarginRTL
                    },
                    [`${componentCls}-tab:last-of-type`]: {
                        marginLeft: {
                            _skip_check_: true,
                            value: 0
                        }
                    },
                    [iconCls]: {
                        marginRight: {
                            _skip_check_: true,
                            value: 0
                        },
                        marginLeft: {
                            _skip_check_: true,
                            value: `${token.marginSM}px`
                        }
                    },
                    [`${componentCls}-tab-remove`]: {
                        marginRight: {
                            _skip_check_: true,
                            value: `${token.marginXS}px`
                        },
                        marginLeft: {
                            _skip_check_: true,
                            value: `-${token.marginXXS}px`
                        },
                        [iconCls]: {
                            margin: 0
                        }
                    }
                }
            },
            [`&${componentCls}-left`]: {
                [`> ${componentCls}-nav`]: {
                    order: 1
                },
                [`> ${componentCls}-content-holder`]: {
                    order: 0
                }
            },
            [`&${componentCls}-right`]: {
                [`> ${componentCls}-nav`]: {
                    order: 0
                },
                [`> ${componentCls}-content-holder`]: {
                    order: 1
                }
            },
            // ====================== Card ======================
            [`&${componentCls}-card${componentCls}-top, &${componentCls}-card${componentCls}-bottom`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab + ${componentCls}-tab`]: {
                        marginRight: {
                            _skip_check_: true,
                            value: cardGutter
                        },
                        marginLeft: {
                            _skip_check_: true,
                            value: 0
                        }
                    }
                }
            }
        },
        [`${componentCls}-dropdown-rtl`]: {
            direction: "rtl"
        },
        [`${componentCls}-menu-item`]: {
            [`${componentCls}-dropdown-rtl`]: {
                textAlign: {
                    _skip_check_: true,
                    value: "right"
                }
            }
        }
    };
};
const genTabsStyle = (token)=>{
    const { componentCls, tabsCardPadding, cardHeight, cardGutter, itemHoverColor, itemActiveColor, colorBorderSecondary } = token;
    return {
        [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
            display: "flex",
            // ========================== Navigation ==========================
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                position: "relative",
                display: "flex",
                flex: "none",
                alignItems: "center",
                [`${componentCls}-nav-wrap`]: {
                    position: "relative",
                    display: "flex",
                    flex: "auto",
                    alignSelf: "stretch",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    transform: "translate(0)",
                    // >>>>> Ping shadow
                    "&::before, &::after": {
                        position: "absolute",
                        zIndex: 1,
                        opacity: 0,
                        transition: `opacity ${token.motionDurationSlow}`,
                        content: "''",
                        pointerEvents: "none"
                    }
                },
                [`${componentCls}-nav-list`]: {
                    position: "relative",
                    display: "flex",
                    transition: `opacity ${token.motionDurationSlow}`
                },
                // >>>>>>>> Operations
                [`${componentCls}-nav-operations`]: {
                    display: "flex",
                    alignSelf: "stretch"
                },
                [`${componentCls}-nav-operations-hidden`]: {
                    position: "absolute",
                    visibility: "hidden",
                    pointerEvents: "none"
                },
                [`${componentCls}-nav-more`]: {
                    position: "relative",
                    padding: tabsCardPadding,
                    background: "transparent",
                    border: 0,
                    color: token.colorText,
                    "&::after": {
                        position: "absolute",
                        right: {
                            _skip_check_: true,
                            value: 0
                        },
                        bottom: 0,
                        left: {
                            _skip_check_: true,
                            value: 0
                        },
                        height: token.controlHeightLG / 8,
                        transform: "translateY(100%)",
                        content: "''"
                    }
                },
                [`${componentCls}-nav-add`]: Object.assign({
                    minWidth: cardHeight,
                    marginLeft: {
                        _skip_check_: true,
                        value: cardGutter
                    },
                    padding: `0 ${token.paddingXS}px`,
                    background: "transparent",
                    border: `${token.lineWidth}px ${token.lineType} ${colorBorderSecondary}`,
                    borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
                    outline: "none",
                    cursor: "pointer",
                    color: token.colorText,
                    transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`,
                    "&:hover": {
                        color: itemHoverColor
                    },
                    "&:active, &:focus:not(:focus-visible)": {
                        color: itemActiveColor
                    }
                }, (0,style/* genFocusStyle */.Qy)(token))
            },
            [`${componentCls}-extra-content`]: {
                flex: "none"
            },
            // ============================ InkBar ============================
            [`${componentCls}-ink-bar`]: {
                position: "absolute",
                background: token.inkBarColor,
                pointerEvents: "none"
            }
        }), genTabStyle(token)), {
            // =========================== TabPanes ===========================
            [`${componentCls}-content`]: {
                position: "relative",
                width: "100%"
            },
            [`${componentCls}-content-holder`]: {
                flex: "auto",
                minWidth: 0,
                minHeight: 0
            },
            [`${componentCls}-tabpane`]: {
                outline: "none",
                "&-hidden": {
                    display: "none"
                }
            }
        }),
        [`${componentCls}-centered`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                [`${componentCls}-nav-wrap`]: {
                    [`&:not([class*='${componentCls}-nav-wrap-ping'])`]: {
                        justifyContent: "center"
                    }
                }
            }
        }
    };
};
// ============================== Export ==============================
/* harmony default export */ const Tabs_style = ((0,genComponentStyleHook/* default */.Z)("Tabs", (token)=>{
    const tabsToken = (0,statistic/* merge */.TS)(token, {
        // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
        tabsCardPadding: token.cardPadding || `${(token.cardHeight - Math.round(token.fontSize * token.lineHeight)) / 2 - token.lineWidth}px ${token.padding}px`,
        dropdownEdgeChildVerticalPadding: token.paddingXXS,
        tabsActiveTextShadow: "0 0 0.25px currentcolor",
        tabsDropdownHeight: 200,
        tabsDropdownWidth: 120,
        tabsHorizontalItemMargin: `0 0 0 ${token.horizontalItemGutter}px`,
        tabsHorizontalItemMarginRTL: `0 0 0 ${token.horizontalItemGutter}px`
    });
    return [
        genSizeStyle(tabsToken),
        genRtlStyle(tabsToken),
        genPositionStyle(tabsToken),
        genDropdownStyle(tabsToken),
        genCardStyle(tabsToken),
        genTabsStyle(tabsToken),
        style_motion(tabsToken)
    ];
}, (token)=>{
    const cardHeight = token.controlHeightLG;
    return {
        zIndexPopup: token.zIndexPopupBase + 50,
        cardBg: token.colorFillAlter,
        cardHeight,
        // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
        cardPadding: ``,
        cardPaddingSM: `${token.paddingXXS * 1.5}px ${token.padding}px`,
        cardPaddingLG: `${token.paddingXS}px ${token.padding}px ${token.paddingXXS * 1.5}px`,
        titleFontSize: token.fontSize,
        titleFontSizeLG: token.fontSizeLG,
        titleFontSizeSM: token.fontSize,
        inkBarColor: token.colorPrimary,
        horizontalMargin: `0 0 ${token.margin}px 0`,
        horizontalItemGutter: 32,
        // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
        horizontalItemMargin: ``,
        horizontalItemMarginRTL: ``,
        horizontalItemPadding: `${token.paddingSM}px 0`,
        horizontalItemPaddingSM: `${token.paddingXS}px 0`,
        horizontalItemPaddingLG: `${token.padding}px 0`,
        verticalItemPadding: `${token.paddingXS}px ${token.paddingLG}px`,
        verticalItemMargin: `${token.margin}px 0 0 0`,
        itemSelectedColor: token.colorPrimary,
        itemHoverColor: token.colorPrimaryHover,
        itemActiveColor: token.colorPrimaryActive,
        cardGutter: token.marginXXS / 2
    };
}));

;// CONCATENATED MODULE: ./node_modules/antd/es/Tabs/index.js
var Tabs_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};













function Tabs(_a) {
    var { type, className, rootClassName, size: customSize, onEdit, hideAdd, centered, addIcon, popupClassName, children, items, animated } = _a, props = Tabs_rest(_a, [
        "type",
        "className",
        "rootClassName",
        "size",
        "onEdit",
        "hideAdd",
        "centered",
        "addIcon",
        "popupClassName",
        "children",
        "items",
        "animated"
    ]);
    const { prefixCls: customizePrefixCls, moreIcon = /*#__PURE__*/ external_react_.createElement(EllipsisOutlined/* default */.Z, null) } = props;
    const { direction, getPrefixCls, getPopupContainer } = external_react_.useContext(context/* ConfigContext */.E_);
    const prefixCls = getPrefixCls("tabs", customizePrefixCls);
    const [wrapSSR, hashId] = Tabs_style(prefixCls);
    let editable;
    if (type === "editable-card") {
        editable = {
            onEdit: (editType, _ref)=>{
                let { key, event } = _ref;
                onEdit === null || onEdit === void 0 ? void 0 : onEdit(editType === "add" ? event : key, editType);
            },
            removeIcon: /*#__PURE__*/ external_react_.createElement(CloseOutlined/* default */.Z, null),
            addIcon: addIcon || /*#__PURE__*/ external_react_.createElement(icons_PlusOutlined, null),
            showAdd: hideAdd !== true
        };
    }
    const rootPrefixCls = getPrefixCls();
     false ? 0 : void 0;
    const mergedItems = useLegacyItems(items, children);
    const mergedAnimated = useAnimateConfig(prefixCls, animated);
    const size = (0,useSize/* default */.Z)(customSize);
    return wrapSSR(/*#__PURE__*/ external_react_.createElement((external_rc_tabs_default()), Object.assign({
        direction: direction,
        getPopupContainer: getPopupContainer,
        moreTransitionName: `${rootPrefixCls}-slide-up`
    }, props, {
        items: mergedItems,
        className: external_classnames_default()({
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-card`]: [
                "card",
                "editable-card"
            ].includes(type),
            [`${prefixCls}-editable-card`]: type === "editable-card",
            [`${prefixCls}-centered`]: centered
        }, className, rootClassName, hashId),
        popupClassName: external_classnames_default()(popupClassName, hashId),
        editable: editable,
        moreIcon: moreIcon,
        prefixCls: prefixCls,
        animated: mergedAnimated
    })));
}
Tabs.TabPane = Tabs_TabPane;
if (false) {}
/* harmony default export */ const es_Tabs = (Tabs);


/***/ })

};
;