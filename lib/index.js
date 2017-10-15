'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uuid = require('uuid/v1');

var __custom_elements__ = {};

var CustomElement = function () {
  function CustomElement() {
    _classCallCheck(this, CustomElement);
  }

  _createClass(CustomElement, [{
    key: 'config',
    value: function config(_config) {
      this.setupUsables(_config);
      this.findInstances();
    }
  }, {
    key: 'setupUsables',
    value: function setupUsables(config) {
      console.log(' config >>>> ', config);
      this.shadowRoots = {};
      this.hosts = {};
      this.tagName = config.tagName;
      this.template = config.template;
      this.viewModel = config.viewModel;
    }
  }, {
    key: 'findInstances',
    value: function findInstances() {
      var _elements_ = document.querySelectorAll(this.tagName);

      if (_elements_ && _elements_.length) {
        this.render(_elements_);
      }
    }
  }, {
    key: 'render',
    value: function render(_elements_) {
      if (this.hasSource()) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _elements_[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;

            this.renderSingleElement(el);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: 'renderSingleElement',
    value: function renderSingleElement(el) {
      var _this = this;

      var _id = uuid();

      this.addHost(_id, el);
      this.createShadowDom(_id) //
      .then(function () {
        console.log('loading new view', _this.shadowRoots[_id]);
        $(_this.shadowRoots[_id]).load(_this.template);

        console.log(' loading >>>> ', _this.template);
        var script = document.createElement('script');

        script.type = 'text/javascript';
        script.src = _this.viewModel;
        _this.shadowRoots[_id].appendChild(script);
      }, function () {
        console.log(' :::: loading >>>> ', _this.template);
        $(el).load(_this.template);
      });
    }
  }, {
    key: 'addHost',
    value: function addHost(_id, el) {
      el.id = _id;
      this.hosts[_id] = el;
    }
  }, {
    key: 'createShadowDom',
    value: function createShadowDom(_id) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (_this2.shadowRoot) {
          console.log('%c shadow root cannot be created on a host which already hosts a shadow tree. ', 'color:#9D2933;');
          reject();

          return;
        }

        try {
          _this2.shadowRoots[_id] = _this2.hosts[_id].attachShadow({ mode: 'open' });
          resolve();
        } catch (e) {
          console.log('%c something is wrong with your custom element! this is not a problem with flaap-gallery, but between the chair and the computer. ', 'color:#9D2933;');
          reject();
        }
      });
    }
  }, {
    key: 'hasSource',
    value: function hasSource() {
      if (this.template) {
        return true;
      }
      console.log('%c no source specified for component ', 'color:#9D2933;');

      return;
    }
  }]);

  return CustomElement;
}();

var CustomComponent = function CustomComponent(config) {
  _classCallCheck(this, CustomComponent);

  if (__custom_elements__[config.tagName]) {
    __custom_elements__[config.tagName].init();

    return;
  }
  __custom_elements__[config.tagName] = new CustomElement(config);
};

exports.customElement = new CustomComponent();
//# sourceMappingURL=index.js.map