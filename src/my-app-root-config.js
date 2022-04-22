import { registerApplication, start } from "single-spa";
// import { publicApiFunction } from "@my-app/api";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@my-app/mf-header",
  app: () => System.import("@my-app/mf-header"),
  activeWhen: ["/header"],
});

registerApplication({
  name: "@my-app/mf-content",
  app: () => System.import("@my-app/mf-content"),
  activeWhen: ["/content"],
});

// publicApiFunction('Route!');

start({
  urlRerouteOnly: true,
});
