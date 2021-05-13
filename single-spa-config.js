
System.import('single-spa').then(singleSpa=>{
    singleSpa.registerApplication(
        "app",
        () => System.import("app"),
        ()=> location.pathname.startsWith('/')
    );
    singleSpa.registerApplication(
        "app2",
        () => System.import("app2"),
        ()=> location.pathname.startsWith('/')
    );
    singleSpa.registerApplication(
        "app3",
        () => System.import("app"),
        ()=> location.pathname.startsWith('/')
    );
    
    singleSpa.start();
})
