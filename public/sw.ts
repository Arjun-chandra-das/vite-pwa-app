/* eslint-disable prefer-const */
let cachData = "appV1";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
this.addEventListener("install", (event) => {
  caches.open(cachData).then((cache) => {
    cache.addAll([
      "/src/component/NavBar/NavBar.tsx?t=1704948564511",
      "/src/component/User/User.tsx",
      "/src/component/About/About.tsx?t=1704947673013",
      "/src/component/Home/Home.tsx?t=1704947680349",
      "/src/LayOut/Main.tsx?t=1704948564511",
      "/src/Router/Router.tsx?t=1704948564511",
      "/src/index.css?t=1704950750485",
      "/@react-refresh",
      "/@vite/client",
      "/user",
      "/vite.svg",
      "/src/main.tsx?t=1704950750485",
      "/src/swDev.ts?t=1704950612363",
      "/node_modules/vite/dist/client/env.mjs",
      "/src/main.tsx?t=1704957514040",
      "/src/swDev.ts?t=1704957514040",
      "/node_modules/.vite/deps/react-router-dom.js?v=384b4534",
      "/src/index.css?t=1704957514040",
      "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=384b4534",
      "/node_modules/.vite/deps/react.js?v=384b4534",
      "/node_modules/.vite/deps/react-dom_client.js?v=384b4534",
      "/node_modules/.vite/deps/chunk-MCEUSTYS.js?v=384b4534",
      "/node_modules/.vite/deps/chunk-S2TLTWWO.js?v=384b4534",
      "/src/main.tsx?t=1704964120508",
      "/src/main.tsx?t=1704964705549",
      "/src/swDev.ts",
      "/src/Router/Router.tsx?t=1704964705549",
      "/src/index.css?t=1704964705549",
      "/src/component/User/User.tsx?t=1704964705549",
      "/src/component/About/About.tsx",
      "/src/component/Home/Home.tsx",
      "/src/LayOut/Main.tsx",
      "/src/component/NavBar/NavBar.tsx",
      "/about",
      "/src/main.tsx?t=1704970030876",
      "/src/index.css?t=1704970030876",
      "/src/Router/Router.tsx?t=1704970030876",
      "/src/component/User/User.tsx?t=1704970030876",
      "/users",
      "/src/main.tsx?t=1704972071959",
      "/src/Router/Router.tsx?t=1704972071959",
      "/src/index.css?t=1704972071959",
      "/src/component/User/User.tsx?t=1704972071959",
      "/src/main.tsx?t=1704972799158",
      "/src/index.css?t=1704972799158",
      "/src/Router/Router.tsx?t=1704972799158",
      "/src/main.tsx?t=1704973048810",
      "/src/Router/Router.tsx?t=1704973048810",
      "/src/index.css?t=1704973048810",
      "/src/component/User/User.tsx?t=1704973048810",
      "/src/main.tsx?t=1704973617632",
      "/src/index.css?t=1704973617632",
      "/src/Router/Router.tsx?t=1704973617632",
      "/src/main.tsx",
    ]);
  });
});

this.addEventListener("fetch", (event) => {
  if (navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
