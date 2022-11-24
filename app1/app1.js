System.register([], function (_export, _moduleContext) {
  let domEl;

  function bootstrap(props) {
    // console.log(props);
    return Promise.resolve().then(() => {
      domEl = document.createElement("div");
      domEl.textContent = props.name + " is mounted!";
      domEl.id = props.name+Date.now();
      
      const appContainer = document.createElement('div');
      appContainer.setAttribute('id', 'single-spa-application:'+props.name);
      document.body.appendChild(domEl);
      document.body.appendChild(appContainer);
    });
  }

  function mount(props) {
    return Promise.resolve().then(() => {
      domEl.textContent = props.name + " is mounted!";
      
    });
  }

  function unmount(props) {
    return Promise.resolve().then(() => {
      const rootEl = document.getElementById(`single-spa-application:${props.name}`)
      console.log('unmounted');
      console.log(props);
      document.body.removeChild(domEl);
      document.body.removeChild(rootEl);
    });
  }
  _export({ bootstrap, mount, unmount });
  
  return {
    execute: function () {},
  };
});
