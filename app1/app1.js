System.register([], function (_export, _moduleContext) {
  let domEl;

  function bootstrap(props) {
    console.log(props);
    return Promise.resolve().then(() => {
      domEl = document.createElement("div");
      domEl.id = "app1";
      document.body.appendChild(domEl);
    });
  }

  function mount(props) {
    return Promise.resolve().then(() => {
      domEl.textContent = "App1 is mounted!";
    });
  }

  function unmount(props) {
    return Promise.resolve().then(() => {
      domEl.textContent = "";
    });
  }
  _export({ bootstrap, mount, unmount });
  
  return {
    execute: function () {},
  };
});
