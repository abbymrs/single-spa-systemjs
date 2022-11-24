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


function registerApplication(singleSpa, appName, path) {
  singleSpa.registerApplication(
    appName,
    () => System.import(appName),
    () => location.pathname.startsWith(path)
  );
  
}


function unregisterApp(singleSpa, app){
    singleSpa.unregisterApplication(app).then(_=>{
        console.log('unregister app');
        console.log(app);
    })

}

(
 async function(){
    try {
        const singleSpa = await System.import('single-spa');
        singleSpa.start();
        const app = document.querySelector('#app');
        const detach = document.querySelector('#detach');
        
        app.onclick = function(){
            registerApplication(singleSpa,'app','/');
            registerApplication(singleSpa,'app2','/app');
            this.setAttribute('disabled','true');
            detach.removeAttribute('disabled');
        }
        detach.onclick = function(){
            unregisterApp(singleSpa, 'app');
            unregisterApp(singleSpa, 'app2');
            this.setAttribute('disabled','true');
            app.removeAttribute('disabled');
        }
    } catch (error) {
        console.log('err', error);
    }
 }
)()
