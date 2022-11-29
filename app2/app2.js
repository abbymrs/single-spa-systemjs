System.register([], function (_export, _moduleContext) {
    let domEl;
  
    function bootstrap(props) {
      console.log(props);
      return Promise.resolve().then(() => {
        domEl = document.createElement("div");
      });
    }
  
    function mount(props) {
      return Promise.resolve().then(() => {
        domEl.textContent = props.name + ' is rendered.'
        domEl.setAttribute('id',`single-spa-application:${props.name}`)
        document.body.appendChild(domEl);
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
  