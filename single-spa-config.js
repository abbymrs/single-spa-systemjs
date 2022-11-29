// System.import('single-spa').then(singleSpa=>{
//     singleSpa.registerApplication(
//         "app",
//         () => System.import("app"),
//         ()=> location.pathname.startsWith('/')
//     );
//     // singleSpa.registerApplication(
//     //     "app2",
//     //     () => System.import("app2"),
//     //     ()=> location.pathname.startsWith('/')
//     // );
//     singleSpa.registerApplication(
//         "app3",
//         () => System.import("app"),
//         ()=> {
//             console.log('test');
//             return location.pathname.startsWith('/app')
//         }
//     );

//     singleSpa.start();
// })
window.widgets = {};
function registerApplication(singleSpa, appName, path) {
  const idx = singleSpa
    .getAppNames()
    .findIndex((app) => app === appName + '-' + window.widgets[appName]);
  if (idx > -1) window.widgets[appName]++
  singleSpa.registerApplication(
    appName + '-' + window.widgets[appName],
    () => System.import(appName),
    () => location.pathname.startsWith(path)
  );
  singleSpa.start();
}

function unregisterApp(singleSpa, app) {
  singleSpa.unregisterApplication(app).then((_) => {
    console.log("unregister app");
    // console.log(app);
  });
}

System.import("single-spa")
  .then((singleSpa) => {
    const app = document.querySelector("#app");
    const detach = document.querySelector("#detach");

    const registeredApps = ['app','app2'];
    app.onclick = function () {
      registeredApps.forEach(item=>{
        window.widgets[item] = window.widgets[item] ? window.widgets[item] : 0;
        window.widgets[item]++;
        registerApplication(singleSpa, item, "/");
      })
      detach.removeAttribute("disabled");
    };
    detach.onclick = function () {
      console.log(window.widgets);
      singleSpa.getAppNames().forEach(app=>{
        unregisterApp(singleSpa, app);
      })
      this.setAttribute("disabled", "true");
      app.removeAttribute("disabled");
    };
  })
  .catch((error) => {
    console.log("err", error);
  });
