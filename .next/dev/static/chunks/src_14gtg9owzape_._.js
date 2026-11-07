(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(auth)/sign-in/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AuthForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/local.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SignIn = ()=>{
    _s();
    const { loadFromLocalStorage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignIn.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeLocalStorage"])();
            loadFromLocalStorage();
        }
    }["SignIn.useEffect"], [
        loadFromLocalStorage
    ]);
    // if (isAuthenticated) {
    //   redirect("/account")
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex-center size-full max-sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            type: "sign-in"
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/sign-in/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/sign-in/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SignIn, "eLIKOfqtbfjMHWOiMQI60jLn5yw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = SignIn;
const __TURBOPACK__default__export__ = SignIn;
var _c;
__turbopack_context__.k.register(_c, "SignIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AuthForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CustomInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AuthForm = ({ type })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toggleAuthentication } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const formSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authFormSchema"])(type);
    // 1. Define your form.
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(formSchema),
        defaultValues: {
            email: "",
            password: ''
        }
    });
    // 2. Define a submit handler.
    const onSubmit = async (data)=>{
        setIsLoading(true);
        const email = data.email;
        const password = data.password;
        // const isValidUser = LOGIN.some(user => user.username === email && user.password === password);
        if (email !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGIN"].username || password !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGIN"].password) {
            // Invalid login case
            setTimeout(()=>{
                setIsLoading(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid login details");
            }, 5000);
            return null;
        }
        // Correct login case: toggle authentication immediately
        toggleAuthentication(true);
        // Delay for user feedback, then navigate
        setTimeout(()=>{
            setIsLoading(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Logged in Successfully");
            router.push("/account");
        }, 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "auth-form",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-5 md:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "cursor-pointer flex items-center gap-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                            src: "https://www.floridacapitalbank.com/wp-content/uploads/2019/08/logo_flcb_main.png",
                            width: 150,
                            height: 150,
                            alt: "Horizon logo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AuthForm.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthForm.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1 md:gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-24 lg:text-36 font-semibold text-gray-900",
                            children: [
                                user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-16 font-normal text-gray-600",
                                    children: user ? 'Link your account to get started' : 'Please enter your details'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AuthForm.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AuthForm.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthForm.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AuthForm.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4"
            }, void 0, false, {
                fileName: "[project]/src/components/AuthForm.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                        ...form,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: form.handleSubmit(onSubmit),
                            className: "space-y-8",
                            children: [
                                type === 'sign-up' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: form.control,
                                                    name: "firstName",
                                                    label: "First Name",
                                                    placeholder: "Enter your first name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AuthForm.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: form.control,
                                                    name: "lastName",
                                                    label: "Last Name",
                                                    placeholder: "Enter your first name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AuthForm.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AuthForm.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            control: form.control,
                                            name: "address1",
                                            label: "Address",
                                            placeholder: "Enter your specific address"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AuthForm.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            control: form.control,
                                            name: "city",
                                            label: "City",
                                            placeholder: "Enter your city"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AuthForm.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: form.control,
                                                    name: "state",
                                                    label: "State",
                                                    placeholder: "Example: NY"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AuthForm.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: form.control,
                                                    name: "postalCode",
                                                    label: "Postal Code",
                                                    placeholder: "Example: 11101"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AuthForm.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AuthForm.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: form.control,
                                                    name: "dateOfBirth",
                                                    label: "Date of Birth",
                                                    placeholder: "YYYY-MM-DD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AuthForm.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: form.control,
                                                    name: "ssn",
                                                    label: "SSN",
                                                    placeholder: "Example: 1234"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AuthForm.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AuthForm.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AuthForm.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    control: form.control,
                                    name: "email",
                                    label: "Email",
                                    placeholder: "Enter your email"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AuthForm.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    control: form.control,
                                    name: "password",
                                    label: "Password",
                                    placeholder: "Enter your password"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AuthForm.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        disabled: isLoading,
                                        className: "form-btn",
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 20,
                                                    className: "animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AuthForm.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "   Loading..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AuthForm.tsx",
                                            lineNumber: 143,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)) : type === 'sign-in' ? 'Sign In' : 'Sign Up'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AuthForm.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AuthForm.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AuthForm.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthForm.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "flex justify-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-14 font-normal text-gray-600",
                                children: type === 'sign-in' ? "Don't have an account?" : "Already have an account?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthForm.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: type === 'sign-in' ? '/sign-up' : '/sign-in',
                                className: "form-link",
                                children: type === 'sign-in' ? 'Sign up' : 'Sign in'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthForm.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AuthForm.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AuthForm.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AuthForm.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthForm, "1DLcYLKRscKtQealIQysk7/DwSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = AuthForm;
const __TURBOPACK__default__export__ = AuthForm;
var _c;
__turbopack_context__.k.register(_c, "AuthForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CustomInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authFormSchema"])('sign-up');
const CustomInput = ({ control, name, label, placeholder })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
        control: control,
        name: name,
        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                        className: "form-label",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/CustomInput.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: placeholder,
                                    className: "input-class",
                                    type: name === 'password' ? 'password' : 'text',
                                    ...field
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CustomInput.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CustomInput.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {
                                className: "form-message mt-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CustomInput.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CustomInput.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CustomInput.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/CustomInput.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomInput;
const __TURBOPACK__default__export__ = CustomInput;
var _c;
__turbopack_context__.k.register(_c, "CustomInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form,
    "FormControl",
    ()=>FormControl,
    "FormDescription",
    ()=>FormDescription,
    "FormField",
    ()=>FormField,
    "FormItem",
    ()=>FormItem,
    "FormLabel",
    ()=>FormLabel,
    "FormMessage",
    ()=>FormMessage,
    "useFormField",
    ()=>useFormField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FormField;
const useFormField = ()=>{
    _s();
    const fieldContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormFieldContext);
    const itemContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormItemContext);
    const { getFieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
_s(useFormField, "eRzki+X5SldVDcAh3BokmSZW9NU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
const FormItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const FormItem = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = _s1(({ className, ...props }, ref)=>{
    _s1();
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=")), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c2 = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c3 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
})), "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
});
_c4 = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = _s3(({ ...props }, ref)=>{
    _s3();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
})), "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
});
_c6 = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ _s4(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[0.8rem] text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
})), "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
});
_c8 = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c9 = _s5(({ className, children, ...props }, ref)=>{
    _s5();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[0.8rem] font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
})), "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
});
_c10 = FormMessage;
FormMessage.displayName = "FormMessage";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "FormField");
__turbopack_context__.k.register(_c1, "FormItem$React.forwardRef");
__turbopack_context__.k.register(_c2, "FormItem");
__turbopack_context__.k.register(_c3, "FormLabel$React.forwardRef");
__turbopack_context__.k.register(_c4, "FormLabel");
__turbopack_context__.k.register(_c5, "FormControl$React.forwardRef");
__turbopack_context__.k.register(_c6, "FormControl");
__turbopack_context__.k.register(_c7, "FormDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "FormDescription");
__turbopack_context__.k.register(_c9, "FormMessage$React.forwardRef");
__turbopack_context__.k.register(_c10, "FormMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/constants/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCOUNTS",
    ()=>ACCOUNTS,
    "BENEFICIARIES",
    ()=>BENEFICIARIES,
    "CHARGES",
    ()=>CHARGES,
    "ITEMS",
    ()=>ITEMS,
    "LOGIN",
    ()=>LOGIN,
    "MYPIN",
    ()=>MYPIN,
    "TEST_ACCESS_TOKEN",
    ()=>TEST_ACCESS_TOKEN,
    "TEST_USER_ID",
    ()=>TEST_USER_ID,
    "TRANSACTIONS",
    ()=>TRANSACTIONS,
    "USER",
    ()=>USER,
    "calculateArrivalDate",
    ()=>calculateArrivalDate,
    "formatDateToString",
    ()=>formatDateToString,
    "generateRandomId",
    ()=>generateRandomId,
    "generateTransactionId",
    ()=>generateTransactionId,
    "sidebarLinks",
    ()=>sidebarLinks,
    "topCategoryStyles",
    ()=>topCategoryStyles,
    "transactionCategoryStyles",
    ()=>transactionCategoryStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
const sidebarLinks = [
    {
        imgURL: "/icons/dollar-circle.svg",
        route: "/account",
        label: "Accounts"
    },
    {
        imgURL: "/icons/transaction.svg",
        route: "/transaction-history",
        label: "Transactions"
    },
    {
        imgURL: "/icons/dollar-circle.svg",
        route: "/payment-transfer",
        label: "Tranfers"
    },
    {
        imgURL: "/icons/profile.png",
        route: "#",
        label: "Profile"
    },
    {
        imgURL: "/icons/support.png",
        route: "#",
        label: "Support"
    },
    {
        imgURL: "/icons/messages.png",
        route: "#",
        label: "Messages"
    },
    {
        imgURL: "/icons/settings.png",
        route: "#",
        label: "Settings"
    }
];
const LOGIN = {
    username: "007natalie.lee@gmail.com",
    password: "Natalie12!"
};
const USER = {
    id: "1",
    firstName: "Natasha",
    lastName: "Krasavina",
    email: "007natalie.lee@gmail.com",
    city: "Fort Lauderdale "
};
const ACCOUNTS = [
    {
        id: "1",
        availableBalance: 423005,
        officialName: "Natasha Krasavina",
        accountName: "Natasha Savings"
    },
    {
        id: "2",
        availableBalance: 53000,
        officialName: "Natasha Krasavina",
        accountName: "Adv Checking"
    }
];
const BENEFICIARIES = [
    {
        id: "1",
        name: "NEAL SCHOFEL",
        accountNumber: "0346483381",
        bank: "Regions bank",
        RoutingNumber: "063104668"
    },
    {
        id: "2",
        name: "CECELIA VEGA",
        accountNumber: "604571802",
        RoutingNumber: "122106455",
        bank: "FirstNationalBank"
    },
    {
        id: "3",
        name: "MARK  DINE",
        accountNumber: "40630250596286563",
        RoutingNumber: "121000248",
        bank: "WellsFargo"
    }
];
const TRANSACTIONS = [
    {
        id: "0",
        type: "debit",
        amount: 5730,
        date: new Date("2025-03-12"),
        receiverName: "Fly Emirates",
        pending: false,
        receiverBank: "Fly Emirates",
        note: "Tickets",
        transactionId: "9879898476548765hsh",
        accountName: "Natasha Savings",
        availableBalance: 423005
    },
    {
        id: "1",
        type: "credit",
        amount: 144000,
        date: new Date("2025-03-04"),
        receiverName: "DOGEVEST",
        pending: false,
        receiverBank: "CapitalOne",
        note: "ROI",
        transactionId: "9879898438238765hsh",
        accountName: "Natasha Savings",
        availableBalance: 196830
    },
    {
        id: "2",
        type: "debit",
        amount: 13900,
        date: new Date("2025-02-14"),
        receiverName: "Gucci store",
        pending: false,
        receiverBank: "BofA",
        note: "shopping",
        transactionId: "987989843823822hsh",
        accountName: "Natasha Savings",
        availableBalance: 52830
    },
    {
        id: "3",
        type: "debit",
        amount: 2000,
        date: new Date("2025-02-06"),
        receiverName: "Mike",
        pending: false,
        receiverBank: "WellsFargo",
        Note: "Gift",
        transactionId: "987699879823822hsh",
        accountName: "Natasha Savings",
        availableBalance: 66780
    },
    {
        id: "4",
        type: "debit",
        amount: 2000,
        date: new Date("2025-01-28"),
        receiverName: "Neal",
        pending: false,
        receiverBank: "RegionsBank",
        note: "Paid",
        transactionId: "98769889823822hsh",
        accountName: "Natasha Savings",
        availableBalance: 68830
    },
    {
        id: "5",
        type: "debit",
        amount: 2000,
        date: new Date("2024-12-24"),
        receiverName: "Cecelia",
        pending: false,
        receiverBank: "FirstNational",
        note: "Merry Xmas",
        transactionId: "87889889823822hsh",
        accountName: "Natasha Savings",
        availableBalance: 70850
    },
    {
        id: "6",
        type: "debit",
        amount: 5800,
        date: new Date("2024-12-12"),
        receiverName: "FlyEmirates",
        pending: false,
        receiverBank: "Wellsfargo",
        note: "tickets",
        transactionId: "8879889823822hsh",
        accountName: "Natasha Savings",
        availableBalance: 72880
    },
    {
        id: "7",
        type: "debit",
        amount: 21330,
        date: new Date("2024-12-04"),
        receiverName: "Fendi",
        pending: false,
        receiverBank: "BofA",
        note: "Shopping",
        transactionId: "8879887353828jush",
        accountName: "Natasha Savings",
        availableBalance: 78730
    },
    {
        id: "8",
        type: "debit",
        amount: 9000,
        date: new Date("2024-11-25"),
        receiverName: "Cecelia",
        pending: false,
        receiverBank: "FirstNational",
        note: "November",
        transactionId: "887988735908722hsh",
        accountName: "Natasha Savings",
        availableBalance: 100000
    },
    {
        id: "9",
        type: "debit",
        amount: 42340,
        date: new Date("2024-11-17"),
        receiverName: "Neal",
        pending: false,
        receiverBank: "RegionsBank",
        note: "Renovation",
        transactionId: "8879887623822hsh",
        accountName: "Natasha Savings",
        availableBalance: 109110
    },
    {
        id: "10",
        type: "credit",
        amount: 89800,
        date: new Date("2024-11-09"),
        receiverName: "Neal",
        pending: false,
        receiverBank: "RegionsBank",
        note: "rent",
        transactionId: "8879898273822hsh",
        accountName: "Natasha Savings",
        availableBalance: 151450
    },
    {
        id: "11",
        type: "debit",
        amount: 38350,
        accountName: "Natasha Savings",
        date: new Date("2024-10-27"),
        receiverName: "ChanelStore",
        pending: false,
        receiverBank: "WellsFargo",
        note: "shopping",
        transactionId: "8879839443822hsh",
        availableBalance: 61650
    },
    {
        id: "12",
        type: "debit",
        accountName: "Natasha Savings",
        amount: 18030,
        date: new Date("2024-10-14"),
        receiverName: "thomas",
        pending: false,
        receiverBank: "Capital One",
        note: "bills",
        transactionId: "887983944383uhsh",
        availableBalance: 100000
    }
];
function calculateArrivalDate(currentDate) {
    const arrivalDate = new Date(currentDate); // Copy the current date
    arrivalDate.setHours(arrivalDate.getHours() + 24); // Add 24 hours
    return arrivalDate;
}
function generateRandomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
function formatDateToString(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "yyyy-MM-dd HH:mm:ss");
}
function generateTransactionId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base 36
    const randomString = Math.random().toString(36).substring(2, 10); // Generate a random string
    return `${timestamp}-${randomString}`;
}
const TEST_USER_ID = "6627ed3d00267aa6fa3e";
const CHARGES = 30;
const MYPIN = "5392";
const TEST_ACCESS_TOKEN = "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";
const ITEMS = [
    {
        id: "6624c02e00367128945e",
        accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
        itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
        userId: "6627ed3d00267aa6fa3e",
        accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ"
    },
    {
        id: "6627f07b00348f242ea9",
        accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
        itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        userId: "6627ed3d00267aa6fa3e",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9"
    }
];
const topCategoryStyles = {
    "Food and Drink": {
        bg: "bg-blue-25",
        circleBg: "bg-blue-100",
        text: {
            main: "text-blue-900",
            count: "text-blue-700"
        },
        progress: {
            bg: "bg-blue-100",
            indicator: "bg-blue-700"
        },
        icon: "/icons/monitor.svg"
    },
    Travel: {
        bg: "bg-success-25",
        circleBg: "bg-success-100",
        text: {
            main: "text-success-900",
            count: "text-success-700"
        },
        progress: {
            bg: "bg-success-100",
            indicator: "bg-success-700"
        },
        icon: "/icons/coins.svg"
    },
    default: {
        bg: "bg-pink-25",
        circleBg: "bg-pink-100",
        text: {
            main: "text-pink-900",
            count: "text-pink-700"
        },
        progress: {
            bg: "bg-pink-100",
            indicator: "bg-pink-700"
        },
        icon: "/icons/shopping-bag.svg"
    }
};
const transactionCategoryStyles = {
    "Food and Drink": {
        borderColor: "border-pink-600",
        backgroundColor: "bg-pink-500",
        textColor: "text-pink-700",
        chipBackgroundColor: "bg-inherit"
    },
    Payment: {
        borderColor: "border-success-600",
        backgroundColor: "bg-green-600",
        textColor: "text-success-700",
        chipBackgroundColor: "bg-inherit"
    },
    "Bank Fees": {
        borderColor: "border-success-600",
        backgroundColor: "bg-green-600",
        textColor: "text-success-700",
        chipBackgroundColor: "bg-inherit"
    },
    Transfer: {
        borderColor: "border-red-700",
        backgroundColor: "bg-red-700",
        textColor: "text-red-700",
        chipBackgroundColor: "bg-inherit"
    },
    Processing: {
        borderColor: "border-[#F2F4F7]",
        backgroundColor: "bg-gray-500",
        textColor: "text-[#344054]",
        chipBackgroundColor: "bg-[#F2F4F7]"
    },
    Success: {
        borderColor: "border-[#12B76A]",
        backgroundColor: "bg-[#12B76A]",
        textColor: "text-[#027A48]",
        chipBackgroundColor: "bg-[#ECFDF3]"
    },
    Travel: {
        borderColor: "border-[#0047AB]",
        backgroundColor: "bg-blue-500",
        textColor: "text-blue-700",
        chipBackgroundColor: "bg-[#ECFDF3]"
    },
    default: {
        borderColor: "",
        backgroundColor: "bg-blue-500",
        textColor: "text-blue-700",
        chipBackgroundColor: "bg-inherit"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/constants/local.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initializeLocalStorage",
    ()=>initializeLocalStorage
]);
const initializeLocalStorage = ()=>{
    if (!localStorage.getItem("accounts")) {
        localStorage.setItem("accounts", JSON.stringify([
            {
                id: "1",
                availableBalance: 423005,
                officialName: "Natasha Krasavina",
                accountName: "Natasha Savings"
            },
            {
                id: "2",
                availableBalance: 53000,
                officialName: "Natasha Krasavina",
                accountName: "Adv Checking"
            }
        ]));
        console.log("Accounts initialized in local storage.");
    } else {
        console.log("Accounts already exist in local storage.");
    }
    if (!localStorage.getItem("transactions")) {
        localStorage.setItem("transactions", JSON.stringify([
            {
                id: "0",
                type: "debit",
                amount: 5730,
                date: new Date("2026-06-18"),
                receiverName: "Fly Emirates",
                pending: false,
                receiverBank: "Fly Emirates",
                note: "Tickets",
                transactionId: "9879898476548765hsh",
                accountName: "Natasha Savings",
                availableBalance: 423005
            },
            {
                id: "1",
                type: "credit",
                amount: 231905,
                date: new Date("2026-06-11"),
                receiverName: "DOGEVEST",
                pending: false,
                receiverBank: "CapitalOne",
                note: "ROI",
                transactionId: "9890898438238765hsh",
                accountName: "Natasha Savings",
                availableBalance: 428735
            },
            {
                id: "2",
                type: "debit",
                amount: 13900,
                date: new Date("2026-06-04"),
                receiverName: "Gucci store",
                pending: false,
                receiverBank: "BofA",
                note: "shopping",
                transactionId: "987989843823822hsh",
                accountName: "Natasha Savings",
                availableBalance: 52830
            },
            {
                id: "3",
                type: "debit",
                amount: 2000,
                date: new Date("2026-05-25"),
                receiverName: "Mike",
                pending: false,
                receiverBank: "WellsFargo",
                note: "Gift",
                transactionId: "987699879823822hsh",
                accountName: "Natasha Savings",
                availableBalance: 66780
            },
            {
                id: "4",
                type: "debit",
                amount: 2000,
                date: new Date("2026-05-18"),
                receiverName: "Neal",
                pending: false,
                receiverBank: "RegionsBank",
                note: "Payback",
                transactionId: "98769889823822hsh",
                accountName: "Natasha Savings",
                availableBalance: 68830
            },
            {
                id: "5",
                type: "debit",
                amount: 2000,
                date: new Date("2026-04-28"),
                receiverName: "Cecelia",
                pending: false,
                receiverBank: "FirstNational",
                note: "errands",
                transactionId: "87889889823822hsh",
                accountName: "Natasha Savings",
                availableBalance: 70850
            },
            {
                id: "6",
                type: "debit",
                amount: 5800,
                date: new Date("2026-04-20"),
                receiverName: "FlyEmirates",
                pending: false,
                receiverBank: "Wellsfargo",
                note: "tickets",
                transactionId: "8879889823822hsh",
                accountName: "Natasha Savings",
                availableBalance: 72880
            },
            {
                id: "7",
                type: "debit",
                amount: 21330,
                date: new Date("2026-04-16"),
                receiverName: "Fendi",
                pending: false,
                receiverBank: "BofA",
                note: "Shopping",
                transactionId: "8879887353828jush",
                accountName: "Natasha Savings",
                availableBalance: 78730
            },
            {
                id: "8",
                type: "debit",
                amount: 9000,
                date: new Date("2026-04-04"),
                receiverName: "Cecelia",
                pending: false,
                receiverBank: "FirstNational",
                note: "Errands",
                transactionId: "887988735908722hsh",
                accountName: "Natasha Savings",
                availableBalance: 100000
            },
            {
                id: "9",
                type: "debit",
                amount: 42340,
                date: new Date("2026-03-17"),
                receiverName: "Neal",
                pending: false,
                receiverBank: "RegionsBank",
                note: "Renovation",
                transactionId: "8879887623822hsh",
                accountName: "Natasha Savings",
                availableBalance: 109110
            },
            {
                id: "10",
                type: "credit",
                amount: 89800,
                date: new Date("2026-02-23"),
                receiverName: "Neal",
                pending: false,
                receiverBank: "RegionsBank",
                note: "rent",
                transactionId: "8879898273822hsh",
                accountName: "Natasha Savings",
                availableBalance: 151450
            },
            {
                id: "11",
                type: "debit",
                amount: 38350,
                accountName: "Natasha Savings",
                date: new Date("2026-02-05"),
                receiverName: "ChanelStore",
                pending: false,
                receiverBank: "WellsFargo",
                note: "shopping",
                transactionId: "8879839443822hsh",
                availableBalance: 61650
            },
            {
                id: "12",
                type: "debit",
                accountName: "Natasha Savings",
                amount: 18030,
                date: new Date("2026-01-14"),
                receiverName: "thomas",
                pending: false,
                receiverBank: "Capital One",
                note: "bills",
                transactionId: "887983944383uhsh",
                availableBalance: 100000
            }
        ]));
        console.log("Transactions initialized in local storage.");
    } else {
        console.log("Transactions already exist in local storage.");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/constants/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"use client";
;
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>{
    const isClient = ("TURBOPACK compile-time value", "object") !== "undefined";
    const getInitialAccounts = ()=>("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem("accounts") || "[]") : "TURBOPACK unreachable";
    const getInitialTransactions = ()=>("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem("transactions") || "[]") : "TURBOPACK unreachable";
    const getInitialTransactionLimit = ()=>("TURBOPACK compile-time truthy", 1) ? Number(localStorage.getItem("transactionLimit") || 0) : "TURBOPACK unreachable";
    const getInitialAuthentication = ()=>("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem("isAuthenticated") || "false") : "TURBOPACK unreachable";
    return {
        accounts: getInitialAccounts(),
        transactions: getInitialTransactions(),
        transactionLimit: getInitialTransactionLimit(),
        isAuthenticated: getInitialAuthentication(),
        updateAccountBalance: (id, newBalance)=>{
            set((state)=>{
                const updatedAccounts = state.accounts.map((account)=>account.id === id ? {
                        ...account,
                        availableBalance: newBalance
                    } : account);
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
                }
                return {
                    accounts: updatedAccounts
                };
            });
        },
        addTransaction: (transaction)=>{
            set((state)=>{
                const updatedTransactions = [
                    ...state.transactions,
                    transaction
                ];
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
                }
                return {
                    transactions: updatedTransactions
                };
            });
        },
        incrementTransactionLimit: (value)=>{
            set((state)=>{
                const updatedLimit = state.transactionLimit + value;
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem("transactionLimit", updatedLimit.toString());
                }
                return {
                    transactionLimit: updatedLimit
                };
            });
        },
        toggleAuthentication: (value)=>{
            set(()=>{
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem("isAuthenticated", JSON.stringify(value));
                }
                return {
                    isAuthenticated: value
                };
            });
        },
        loadFromLocalStorage: ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                set({
                    accounts: JSON.parse(localStorage.getItem("accounts") || "[]"),
                    transactions: JSON.parse(localStorage.getItem("transactions") || "[]"),
                    transactionLimit: Number(localStorage.getItem("transactionLimit") || 0),
                    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated") || "false")
                });
            }
        }
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authFormSchema",
    ()=>authFormSchema,
    "cn",
    ()=>cn,
    "formUrlQuery",
    ()=>formUrlQuery,
    "formatAmount",
    ()=>formatAmount,
    "formatDateTime",
    ()=>formatDateTime,
    "getAccountTypeColors",
    ()=>getAccountTypeColors,
    "parseStringify",
    ()=>parseStringify,
    "removeSpecialCharacters",
    ()=>removeSpecialCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/query-string/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const formatDateTime = (dateString)=>{
    const dateTimeOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };
    const dateDayOptions = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    };
    const dateOptions = {
        month: "short",
        year: "numeric",
        day: "numeric"
    };
    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };
    const formattedDateTime = new Date(dateString).toLocaleString("en-US", dateTimeOptions);
    const formattedDateDay = new Date(dateString).toLocaleString("en-US", dateDayOptions);
    const formattedDate = new Date(dateString).toLocaleString("en-US", dateOptions);
    const formattedTime = new Date(dateString).toLocaleString("en-US", timeOptions);
    return {
        dateTime: formattedDateTime,
        dateDay: formattedDateDay,
        dateOnly: formattedDate,
        timeOnly: formattedTime
    };
};
function formatAmount(amount) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    });
    return formatter.format(amount);
}
const parseStringify = (value)=>JSON.parse(JSON.stringify(value));
const removeSpecialCharacters = (value)=>{
    return value.replace(/[^\w\s]/gi, "");
};
function formUrlQuery({ params, key, value }) {
    const currentUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(params);
    currentUrl[key] = value;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringifyUrl({
        url: window.location.pathname,
        query: currentUrl
    }, {
        skipNull: true
    });
}
function getAccountTypeColors(type) {
    switch(type){
        case "depository":
            return {
                bg: "bg-blue-25",
                lightBg: "bg-blue-100",
                title: "text-blue-900",
                subText: "text-blue-700"
            };
        case "credit":
            return {
                bg: "bg-success-25",
                lightBg: "bg-success-100",
                title: "text-success-900",
                subText: "text-success-700"
            };
        default:
            return {
                bg: "bg-green-25",
                lightBg: "bg-green-100",
                title: "text-green-900",
                subText: "text-green-700"
            };
    }
}
const authFormSchema = (type)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        // sign up
        firstName: type === "sign-in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(3),
        lastName: type === "sign-in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(3),
        address1: type === "sign-in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().max(50),
        city: type === "sign-in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().max(50),
        state: type === "sign-in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(2).max(2),
        postalCode: type === "sign-in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(3).max(6),
        dateOfBirth: type === "sign-in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(3),
        ssn: type === "sign-in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(3),
        // both
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().email(),
        password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(8)
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_14gtg9owzape_._.js.map