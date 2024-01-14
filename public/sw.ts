/* eslint-disable prefer-const */
const cacheData: string = "appV1";

self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(cacheData).then((cache: Cache) => {
      return cache.addAll([
        "/user",
        "/src/component/NavBar/NavBar.tsx?t=1704948564511",
        "/src/component/User/User.tsx",
        "/src/component/About/About.tsx?t=1704947673013",
        "/src/component/Home/Home.tsx?t=1704947680349",
        "/src/LayOut/Main.tsx?t=1704948564511",
        "/deps/chunk-MCEUSTYS.js?v=384b4534",
        "/src/Router/Router.tsx?t=1704948564511",
        "/src/index.css?t=1704950750485",
        "/@react-refresh",
        "/@vite/client",
        "/about",
        "/home"
      ]);
    })
  );
});

self.addEventListener("fetch", (event: FetchEvent) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result: Response | undefined) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl).then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          let responseToCache = response.clone();

          caches.open(cacheData).then((cache: Cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  }
});
