(()=>{var e={};e.id=966,e.ids=[966],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},89516:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>x,tree:()=>d}),s(77832),s(14618),s(90996);var r=s(30170),a=s(45002),i=s(83876),n=s.n(i),l=s(66299),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,77832)),"/home/adarsh2024/aoldev/app/signup/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,14618)),"/home/adarsh2024/aoldev/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,90996,23)),"next/dist/client/components/not-found-error"]}],c=["/home/adarsh2024/aoldev/app/signup/page.tsx"],m="/signup/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},24834:(e,t,s)=>{Promise.resolve().then(s.bind(s,82929)),Promise.resolve().then(s.bind(s,77507)),Promise.resolve().then(s.t.bind(s,34080,23))},68681:(e,t,s)=>{Promise.resolve().then(s.bind(s,29465))},4221:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,63642,23)),Promise.resolve().then(s.t.bind(s,87586,23)),Promise.resolve().then(s.t.bind(s,47838,23)),Promise.resolve().then(s.t.bind(s,58057,23)),Promise.resolve().then(s.t.bind(s,77741,23)),Promise.resolve().then(s.t.bind(s,13118,23))},82929:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var r=s(97247),a=s(79906),i=s(58053),n=s(98218);function l(){let{session:e,logout:t}=(0,n.a)();return r.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm",children:(0,r.jsxs)("nav",{className:"container mx-auto px-6 py-3 flex justify-between items-center",children:[r.jsx(a.default,{href:"/",className:"text-2xl font-bold text-primary",children:"AI Chatbot"}),(0,r.jsxs)("div",{className:"space-x-4",children:[r.jsx(a.default,{href:"#features",className:"text-gray-600 hover:text-primary transition-colors",children:"Features"}),r.jsx(a.default,{href:"#pricing",className:"text-gray-600 hover:text-primary transition-colors",children:"Pricing"}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:"text-gray-600",children:["Welcome, ",e.user?.email]}),r.jsx(i.z,{onClick:t,variant:"outline",children:"Log Out"})]}):(0,r.jsxs)(r.Fragment,{children:[r.jsx(a.default,{href:"/login",children:r.jsx(i.z,{variant:"outline",children:"Log In"})}),r.jsx(a.default,{href:"/signup",children:r.jsx(i.z,{children:"Sign Up"})})]})]})]})})}},77507:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var r=s(97247),a=s(19898);function i({children:e}){return r.jsx(a.SessionProvider,{children:e})}},29465:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var r=s(97247),a=s(28964),i=s(98218),n=s(58053),l=s(70170),o=s(27757),d=s(19898),c=s(40878);function m(){let[e,t]=(0,a.useState)(""),[s,m]=(0,a.useState)(""),[u,x]=(0,a.useState)(""),[h,p]=(0,a.useState)(""),[f,g]=(0,a.useState)(""),[v,b]=(0,a.useState)(""),{signup:j}=(0,i.a)(),y=async t=>{if(t.preventDefault(),p(""),s.length<8&&p("Password must be at least 8 characters long."),/[A-Z]/.test(s)||p("Password must contain at least one uppercase letter."),/[a-z]/.test(s)||p("Password must contain at least one lowercase letter."),/[0-9]/.test(s)||p("Password must contain at least one number."),/[!@#$%^&*()_+={}|;:,.<>?~]/.test(s)||p("Password must contain at least one special character."),!e){p("The Email field is required");return}if(!s||f){p("Please fix the password error(s)");return}if(s!==u){p("Passwords do not match");return}await j(e,s)||p("Failed to create account")};return(0,r.jsxs)(o.Zb,{className:"w-full max-w-md mx-auto",children:[r.jsx(o.Ol,{children:r.jsx(o.ll,{children:"Sign Up"})}),(0,r.jsxs)("form",{onSubmit:y,children:[(0,r.jsxs)(o.aY,{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),r.jsx(l.I,{id:"email",type:"email",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),r.jsx(l.I,{id:"password",type:"password",value:s,onChange:e=>m(e.target.value),required:!0})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"confirm-password",className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),r.jsx(l.I,{id:"confirm-password",type:"password",value:u,onChange:e=>x(e.target.value),required:!0})]}),h&&r.jsx("p",{className:"text-red-500 text-sm",children:h}),(0,r.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,r.jsxs)(n.z,{onClick:()=>(0,d.signIn)("google"),type:"button",className:"w-full flex items-center justify-center",children:[r.jsx(c.ldW,{className:"mr-2"})," Sign up with Google"]}),(0,r.jsxs)(n.z,{onClick:()=>(0,d.signIn)("github"),type:"button",className:"w-full flex items-center justify-center",children:[r.jsx(c.hJX,{className:"mr-2"})," Sign up with GitHub"]})]})]}),r.jsx(o.eW,{children:r.jsx(n.z,{type:"submit",className:"w-full",children:"Sign Up"})})]})]})}},98218:(e,t,s)=>{"use strict";s.d(t,{a:()=>a});var r=s(19898);function a(){let{data:e,status:t}=(0,r.useSession)(),s=async(e,t)=>{let s=await (0,r.signIn)("credentials",{redirect:!1,email:e,password:t});return!s?.error},a=async(e,t)=>!!(await fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).ok&&s(e,t);return{session:e,status:t,login:s,signup:a,logout:()=>(0,r.signOut)()}}},58053:(e,t,s)=>{"use strict";s.d(t,{z:()=>d});var r=s(97247),a=s(28964),i=s(99562),n=s(87972),l=s(25008);let o=(0,n.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:t,size:s,asChild:a=!1,...n},d)=>{let c=a?i.g7:"button";return r.jsx(c,{className:(0,l.cn)(o({variant:t,size:s,className:e})),ref:d,...n})});d.displayName="Button"},27757:(e,t,s)=>{"use strict";s.d(t,{Ol:()=>l,SZ:()=>d,Zb:()=>n,aY:()=>c,eW:()=>m,ll:()=>o});var r=s(97247),a=s(28964),i=s(25008);let n=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));n.displayName="Card";let l=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...t}));l.displayName="CardHeader";let o=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));o.displayName="CardTitle";let d=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,i.cn)("text-sm text-muted-foreground",e),...t}));d.displayName="CardDescription";let c=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,i.cn)("p-6 pt-0",e),...t}));c.displayName="CardContent";let m=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:(0,i.cn)("flex items-center p-6 pt-0",e),...t}));m.displayName="CardFooter"},70170:(e,t,s)=>{"use strict";s.d(t,{I:()=>n});var r=s(97247),a=s(28964),i=s(25008);let n=a.forwardRef(({className:e,type:t,...s},a)=>r.jsx("input",{type:t,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...s}));n.displayName="Input"},25008:(e,t,s)=>{"use strict";s.d(t,{cn:()=>i});var r=s(61929),a=s(35770);function i(...e){return(0,a.m6)((0,r.W)(e))}},14618:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u,metadata:()=>m});var r=s(72051),a=s(31312),i=s.n(a);s(67272);var n=s(45347);let l=(0,n.createProxy)(String.raw`/home/adarsh2024/aoldev/app/components/header.tsx#default`);var o=s(92349);function d(){return r.jsx("footer",{className:"bg-gray-100 py-8",children:(0,r.jsxs)("div",{className:"container mx-auto px-6",children:[(0,r.jsxs)("div",{className:"flex flex-wrap justify-between",children:[(0,r.jsxs)("div",{className:"w-full md:w-1/4 mb-6 md:mb-0",children:[r.jsx("h3",{className:"text-lg font-semibold mb-2",children:"AI Chatbot"}),r.jsx("p",{className:"text-sm text-gray-600",children:"Empowering websites with AI-powered conversations."})]}),(0,r.jsxs)("div",{className:"w-full md:w-1/4 mb-6 md:mb-0",children:[r.jsx("h4",{className:"text-md font-semibold mb-2",children:"Quick Links"}),(0,r.jsxs)("ul",{className:"text-sm",children:[r.jsx("li",{children:r.jsx(o.default,{href:"#features",className:"text-gray-600 hover:text-primary",children:"Features"})}),r.jsx("li",{children:r.jsx(o.default,{href:"#pricing",className:"text-gray-600 hover:text-primary",children:"Pricing"})}),r.jsx("li",{children:r.jsx(o.default,{href:"#demo",className:"text-gray-600 hover:text-primary",children:"Demo"})})]})]}),(0,r.jsxs)("div",{className:"w-full md:w-1/4 mb-6 md:mb-0",children:[r.jsx("h4",{className:"text-md font-semibold mb-2",children:"Contact"}),r.jsx("p",{className:"text-sm text-gray-600",children:"support@aichatbot.com"}),r.jsx("p",{className:"text-sm text-gray-600",children:"+1 (555) 123-4567"})]}),(0,r.jsxs)("div",{className:"w-full md:w-1/4",children:[r.jsx("h4",{className:"text-md font-semibold mb-2",children:"Follow Us"}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[r.jsx("a",{href:"#",className:"text-gray-600 hover:text-primary",children:"Twitter"}),r.jsx("a",{href:"#",className:"text-gray-600 hover:text-primary",children:"LinkedIn"}),r.jsx("a",{href:"#",className:"text-gray-600 hover:text-primary",children:"Facebook"})]})]})]}),r.jsx("div",{className:"mt-8 text-center text-sm text-gray-600",children:"\xa9 2023 AI Chatbot. All rights reserved."})]})})}let c=(0,n.createProxy)(String.raw`/home/adarsh2024/aoldev/app/components/providers.tsx#default`),m={title:"AI Chatbot Plugin",description:"Empower your website with our AI-powered chatbot plugin"};function u({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:i().className,children:(0,r.jsxs)(c,{children:[r.jsx(l,{}),r.jsx("main",{children:e}),r.jsx(d,{})]})})})}},77832:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(72051);let a=(0,s(45347).createProxy)(String.raw`/home/adarsh2024/aoldev/app/components/signup.tsx#default`);function i(){return r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:r.jsx(a,{})})}},67272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[787,563,878],()=>s(89516));module.exports=r})();