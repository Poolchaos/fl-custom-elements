const uuid = require('uuid/v1');

let __custom_elements__ = {};

class CustomElement {
  constructor(config) {
    this.init(config);
  }

  init(config) {
    this.setupUsables(config);
    this.findInstances();
  }

  setupUsables(config) {
    console.log(' config >>>> ', config);
    this.shadowRoots = {};
    this.hosts = {};
    this.tagName = config.tagName;
    this.template = config.template;
    this.viewModel = config.viewModel;
  }

  findInstances() {
    const _elements_ = document.querySelectorAll(this.tagName);

    if (_elements_ && _elements_.length) {
      this.render(_elements_);
    }
  }

  render(_elements_) {
    if (this.hasSource()) {
      for (let el of _elements_) {
        this.renderSingleElement(el);
      }
    }
  }

  renderSingleElement(el) {
    const _id = uuid();

    this.addHost(_id, el);
    this.createShadowDom(_id) //
      .then(
        () => {
          console.log('loading new view', this.shadowRoots[_id]);
          $(this.shadowRoots[_id]).load(this.template);

          console.log(' loading >>>> ', this.template);
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = this.viewModel;
          this.shadowRoots[_id].appendChild(script);
        },
        () => {
          console.log(' :::: loading >>>> ', this.template);
          $(el).load(this.template);
        }
      );
  }

  addHost(_id, el) {
    el.id = _id;
    this.hosts[_id] = el;
  }

  createShadowDom(_id) {
    return new Promise((resolve, reject) => {
      if (this.shadowRoot) {
        console.log('%c shadow root cannot be created on a host which already hosts a shadow tree. ', 'color:#9D2933;');
        reject();
        return;
      }

      try {
        this.shadowRoots[_id] = this.hosts[_id].attachShadow({ mode: 'open' });
        resolve();
      } catch (e) {
        console.log('%c something is wrong with your custom element! this is not a problem with flaap-gallery, but between the chair and the computer. ', 'color:#9D2933;');
        reject();
      }
    });
  }

  hasSource() {
    if (this.template) return true;
    console.log('%c no source specified for component ', 'color:#9D2933;');
    return;
  }
}

class CustomComponent {
  constructor(config) {
    if (__custom_elements__[config.tagName]) {
      __custom_elements__[config.tagName].init();
      return;
    }
    __custom_elements__[config.tagName] = new CustomElement(config);
  }
}

exports.customElement = CustomComponent;
