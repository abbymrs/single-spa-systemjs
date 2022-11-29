System.register([], function (_export, _moduleContext) {
  let domEl;
  window.widgets = {};

  function bootstrap(props) {
    // console.log(props);
    return Promise.resolve().then(() => {});
  }

  function mount(props) {
    return Promise.resolve().then(() => {
      window.widgets[props.name] = window.widgets[props.name]
        ? window.widgets[props.name]
        : 1;
      const rootContainer = document.createElement("div");
      rootContainer.setAttribute(
        "id",
        "single-spa-application:" + props.name
      );
      domEl = document.createElement("div");
      domEl.textContent = "Application is mounted!";
      domEl.id = props.name + Date.now();
      rootContainer.appendChild(domEl);
      document.body.appendChild(rootContainer);
    });
  }

  function unmount(props) {
    return Promise.resolve().then(() => {
      const rootEl = document.getElementById(
        `single-spa-application:${props.name}`
      );
      console.log("unmounted");
      document.body.removeChild(rootEl);
    });
  }
  _export({ bootstrap, mount, unmount });

  return {
    execute: function () {},
  };
});
