/* eslint-disable prefer-const */
export default function swDev() {
    // Replace 'sw.ts' with the correct path to your service worker script
    let swUrl: string = '/public/sw.ts';

    navigator.serviceWorker.register(swUrl).then((res: ServiceWorkerRegistration) => {
        console.log("response", res);
    });
}


