singleSpa.registerApplication({
    name: 'app',
    app: () => System.import("app"),
    activeWhen: '/'
});

singleSpa.start();
