var PSB =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Configuration
 */

var secure = window.location.protocol === 'https:';

module.exports = {
    name: 'likely',
    prefix: 'likely__',
    secure: secure,
    protocol: secure ? 'https:' : 'http:',
    storageKey: 'likelyServices',
    breakpoint: 680
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(29)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(1);

var div = document.createElement('div'),
    gid = 0;

var dom = module.exports = {
    /**
     * Wrap SVG coords from data object into SVG tag
     *
     * @param {String} coords
     */
    wrapSVG: function (coords) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ' + 'viewBox="0 0 16 16"><path d="M' + coords + 'z"/></svg>';
    },

    /**
     * Create node from HTML
     *
     * @param {String} html
     */
    createNode: function (html) {
        div.innerHTML = html;

        return div.children[0];
    },

    /**
     * Load script
     *
     * @param {String} url
     */
    getScript: function (url) {
        var script = document.createElement('script'),
            head   = document.head;

        script.type = 'text/javascript';
        script.src  = url;

        head.appendChild(script);
        head.removeChild(script);
    },

    /**
     * Get JSON
     *
     * @param {String} url
     * @param {Function} callback
     */
    getJSON: function (url, callback) {
        var name = encodeURIComponent('random_fun_' + (++gid));

        url = url.replace(
            /callback=(\?)/,
            'callback=' + name
        );

        window[name] = callback;

        dom.getScript(url);
    },

    /**
     * Find first node by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {Node}
     */
    find: function (selector, node) {
        return (node || document).querySelector(selector);
    },

    /**
     * Find all nodes by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {NodeList}
     */
    findAll: function (selector, node) {
        return (node || document).querySelectorAll(selector);
    },

    /**
     * Check mobile media query
     */
    isMobile: function() {
        return !window.matchMedia('(min-width: ' + config.breakpoint + 'px)').matches;
    },

    /**
     * Open the popup
     *
     * @param {String} url
     * @param {String} winId
     * @param {Number} width,
     * @param {Number} height
     */
    openPopup: function (url, winId, width, height) {
        var left = Math.round(screen.width / 2 - width / 2),
            top  = 0;

        if (screen.height > height) {
            top = Math.round(screen.height / 3 - height / 2);
        }

        var options = 'left='    + left +
                      ',top='    + top +
                      ',width='  + width +
                      ',height=' + height +
                      ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';

        var win = window.open(url, winId, options);

        // if (!win) {
        //     location.href = url;
        //     return location.href;
        // }

        // win.focus();

        return win;
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var bool = {yes: true, no: false},
    rUrl = /(https?|ftp):\/\/[^\s\/$.?#].[^\s]*/gi;

/**
 * @internal
 */
var utils = {
    /**
     * Simple $.each, only for objects
     *
     * @param {Object} object
     * @param {Function} callback
     */
    each: function (object, callback) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                callback(object[key], key);
            }
        }
    },

    /**
     * Convert array-like object to array
     *
     * @param {Object} arrayLike
     * @return {Array}
     */
    toArray: function (arrayLike) {
        return Array.prototype.slice.call(arrayLike);
    },

    /**
     * Merge given dictionaries (objects) into one object
     *
     * @param {Object} ...objects
     * @return {Object}
     */
    merge: function () {
        var result = {};

        for (var i = 0; i < arguments.length; i ++) {
            var arg = arguments[i];

            if (arg) {
                for (var key in arg) {
                    result[key] = arg[key];
                }
            }
        }

        return result;
    },

    /**
     * Extend one (target) object by other (subject)
     *
     * @param {Object} target
     * @param {Object} subject
     */
    extend: function (target, subject) {
        for (var key in subject) {
            target[key] = subject[key];
        }
    },

    /**
     * Check new flexbox syntax support
     */
    flexboxSupport: function(element, name){
        var d = document, f = 'flex', fw = '-webkit-'+f, e = d.createElement('b'), c;

        try {
            e.style.display = fw;
            e.style.display = f;
            c = (e.style.display == f || e.style.display == fw) ? f : 'no-'+f;
        } catch(e) {
            c = 'no-'+f;
        }

        element.className += ' ' + name + '--' + c;
    },

    /**
     * Return node.dataset or plain object for IE 10without setters
     * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js
     *
     * @param {Node} node
     * @return {Object}
     */
    getDataset: function (node) {
        if (typeof node.dataset === 'object') {
            return node.dataset;
        }

        var i,
            dataset = {},
            attributes = node.attributes,
            attribute,
            attributeName;

        var toUpperCase = function (n0) {
            return n0.charAt(1).toUpperCase();
        };

        for (i = attributes.length - 1; i >= 0; i--) {
            attribute = attributes[i];
            if (attribute && attribute.name &&
                (/^data-\w[\w\-]*$/).test(attribute.name)) {
                    attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);
                    dataset[attributeName] = attribute.value;
                }
        }

        return dataset;
    },

    /**
     * Convert "yes" and "no" to true and false.
     *
     * @param {Node} node
     */
    bools: function (node) {
        var result = {},
            data   = utils.getDataset(node);

        for (var key in data) {
            var value = data[key];

            result[key] = bool[value] || value;
        }

        return result;
    },

    /**
     * Map object keys in string to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    template: function (text, data) {
        return !text ? '' : text.replace(/\{([^\}]+)\}/g, function (value, key) {
            return key in data ? data[key] : value;
        });
    },

    /**
     * Map object keys in URL to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    makeUrl: function (text, data) {
        for (var key in data) {
            data[key] = encodeURIComponent(data[key]);
        }

        return utils.template(text, data);
    },

    /**
     * Create query string out of data
     *
     * @param {Object} data
     * @return {String}
     */
    query: function (data) {
        var filter = encodeURIComponent,
            query  = [];

        for (var key in data) {
            if (typeof data[key] === 'object') continue;

            query.push(filter(key) + '=' + filter(data[key]));
        }

        return query.join('&');
    },

    /**
     * Set value in object using dot-notation
     *
     * @param {Object} object
     * @param {String} key
     * @param {Object} value
     */
    set: function (object, key, value) {
        var frags = key.split('.'),
            last  = null;

        frags.forEach(function (key, index) {
            if (typeof object[key] === 'undefined') {
                object[key] = {};
            }

            if (index !== frags.length - 1) {
                object = object[key];
            }

            last = key;
        });

        object[last] = value;
    }
};

module.exports = utils;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return unstable_batchedUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return prop_types__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);




var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

var COMPONENT_WRAPPER_KEY = (typeof Symbol!=='undefined' && Symbol.for) ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;


var BYPASS_HOOK = {};

/*global process*/
var DEV = false;
try {
	DEV = "production"!=='production';
}
catch (e) {}

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
var VNode = Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function() { return this.nodeName; },
	set: function(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function() { return this.attributes; },
	set: function(v) { this.attributes = v; },
	configurable:true
});



var oldEventHook = preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;
preact__WEBPACK_IMPORTED_MODULE_1__["options"].event = function (e) {
	if (oldEventHook) { e = oldEventHook(e); }
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


var oldVnodeHook = preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;
preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
			attrs = vnode.attributes = vnode.attributes==null ? {} : extend({}, vnode.attributes);

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
			if (vnode.children) { attrs.children = vnode.children; }

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) { oldVnodeHook(vnode); }
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
	if (a) { extend(vnode.attributes, a); }
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) { prev = null; }

	// default to first Element child
	if (!prev && parent) { prev = parent.firstElementChild; }

	// remove unaffected siblings
	for (var i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(vnode, parent, prev);
	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
	if (typeof callback==='function') { callback(); }
	return out && out._component || out;
}


var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) { callback.call(component, renderContainer); }
	return component;
}

function Portal(props) {
	renderSubtreeIntoContainer(this, props.vnode, props.container);
}

function createPortal(vnode, container) {
	return Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(Portal, { vnode: vnode, container: container });
}


function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		return children.map(fn);
	},
	forEach: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		children.forEach(fn);
	},
	count: function(children) {
		return children && children.length || 0;
	},
	only: function(children) {
		children = Children.toArray(children);
		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
		return children[0];
	},
	toArray: function(children) {
		if (children == null) { return []; }
		return ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
var currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


var DOM = {};
for (var i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i=offset || 0; i<arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement() {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	upgradeToVNodes(args, 2);
	return normalizeVNode(preact__WEBPACK_IMPORTED_MODULE_1__["h"].apply(void 0, args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement$1(element, props) {
	var children = [], len = arguments.length - 2;
	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	if (!isValidElement(element)) { return element; }
	var elementProps = element.attributes || element.props;
	var node = Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(
		element.nodeName || element.type,
		extend({}, elementProps),
		element.children || elementProps && elementProps.children
	);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	}
	else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(void 0, cloneArgs));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName!=='string') { return; }
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) { a.class = a.className; }
	Object.defineProperty(a, 'className', classNameDescriptor);
}


var classNameDescriptor = {
	configurable: true,
	get: function() { return this.class; },
	set: function(v) { this.class = v; }
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i=1, obj = (void 0); i<arguments.length; i++) {
		if ((obj = arguments$1[i])) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (var i in a) { if (!(i in b)) { return true; } }
	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
	return false;
}


function findDOMNode(component) {
	return component && (component.base || component.nodeType === 1 && component) || null;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i=0; i<mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	} }
}


function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i=0; i<hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r!=null) {
				if (!ret) { ret = {}; }
				for (var key in r) { if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				} }
			}
			else if (typeof r!=='undefined') { ret = r; }
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) { return; }

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length===1 && (typeof c[0]==='string' || typeof c[0]==='function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component$1(props, context, opts) {
	preact__WEBPACK_IMPORTED_MODULE_1__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function() {
		return this.base;
	},

	isMounted: function() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

function unstable_batchedUpdates(callback) {
	callback();
}

var index = {
	version: version,
	DOM: DOM,
	PropTypes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createPortal: createPortal,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	unstable_batchedUpdates: unstable_batchedUpdates,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=preact-compat.es.js.map


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return connectAdvanced; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



var Children = {
	only: function only(children) {
		return children && children[0] || null;
	}
};

function proptype() {}
proptype.isRequired = proptype;

var PropTypes = {
	element: proptype,
	func: proptype,
	shape: function shape() {
		return proptype;
	},
	instanceOf: function instanceOf() {
		return proptype;
	}
};

var subscriptionShape = PropTypes.shape({
  trySubscribe: PropTypes.func.isRequired,
  tryUnsubscribe: PropTypes.func.isRequired,
  notifyNestedSubs: PropTypes.func.isRequired,
  isSubscribed: PropTypes.func.isRequired
});

var storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
});

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      classCallCheck(this, Provider);

      var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return Children.only(this.props.children);
    };

    return Provider;
  }(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);

  return Provider;
}

var Provider = createProvider();

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty$1(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};

var invariant = function () {};

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get$$1() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    invariant(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      inherits(Connect, _Component);

      function Connect(props, context) {
        classCallCheck(this, Connect);

        var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        invariant(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        invariant(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;


    {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return hoistNonReactStatics(Connect, WrappedComponent);
  };
}

var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var _Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : _typeof(mapDispatchToProps)) === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}

var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? defaultMergePropsFactories : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE,
        extraOptions = objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

var connect = createConnect();

var index = { Provider: Provider, connect: connect, connectAdvanced: connectAdvanced };

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-redux.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendPageView = exports.sendEvent = undefined;

var _config = __webpack_require__(36);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONSOLE_STYLE = 'color: #E87E04';

/**
 * Send analytics events via GTM
 * @param {String} label - event label
 * @param {String} action - event action ("Click" by default)
 */
var sendEvent = exports.sendEvent = function sendEvent(label) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Click';

    var value = _config2.default.analyticsCategory + ' \u2014 ' + label + ' \u2014 ' + action;

    if (false) {}

    if (window.dataLayer !== undefined && _config2.default.analyticsCategory) {
        window.dataLayer.push({
            event: 'data_event',
            data_description: value
        });
    }
};

/**
 * Send pageview event via GTM
 */
var sendPageView = exports.sendPageView = function sendPageView() {
    if (false) {}

    if (window.dataLayer !== undefined) {
        window.dataLayer.push({
            event: 'Page — View',
            post_details: {},
            section: 'special',
            tags: [],
            title: document.title,
            url: window.location.pathname
        });
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(10);

var _data = __webpack_require__(27);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var results = [{
  80: 10,
  60: 15,
  40: 0,
  20: 10,
  10: 5,
  0: 15
}, {
  80: 1,
  60: 9,
  40: 19,
  20: 8,
  10: 6,
  0: 12
}, {
  80: 6,
  60: 16,
  40: 12,
  20: 8,
  10: 0,
  0: 13
}, {
  80: 8,
  60: 11,
  40: 10,
  20: 15,
  10: 10,
  0: 1
}, {
  80: 0,
  60: 10,
  40: 17,
  20: 5,
  10: 21,
  0: 2
}, {
  80: 4,
  60: 0,
  40: 13,
  20: 10,
  10: 4,
  0: 24
}, {
  80: 38,
  60: 6,
  40: 3,
  20: 5,
  10: 3,
  0: 1
}, {
  80: 10,
  60: 10,
  40: 10,
  20: 10,
  10: 5,
  0: 10
}];

var initialTestState = {
  status: '',
  params: {},
  question: _data2.default.questions[0],
  questionsCount: _data2.default.questions.length,
  activeIndex: 0,
  answers: [],
  results: results
};

var restartTestState = {
  status: 'START',
  activeIndex: 0,
  question: _data2.default.questions[0],
  answers: []
};

var testReducer = function testReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialTestState;
  var action = arguments[1];

  switch (action.type) {
    case 'TEST_PARAMS':
      return _extends({}, state, { params: action.params });
    case 'TEST_STATUS':
      return _extends({}, state, { status: action.status });
    case 'TEST_ANSWER':
      return _extends({}, state, { answers: [].concat(_toConsumableArray(state.answers), [action.answer]) });
    case 'TEST_NEXT':
      var index = state.activeIndex + 1;
      return _extends({}, state, {
        question: _data2.default.questions[index],
        activeIndex: index
      });
    case 'TEST_RESTART':
      return _extends({}, state, restartTestState);
  }
  return state;
};

var reducers = (0, _redux.combineReducers)({
  testState: testReducer
});

exports.default = (0, _redux.createStore)(reducers);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Social network services
 */

var Service = __webpack_require__(44),
    utils   = __webpack_require__(4),
    svg     = __webpack_require__(45);

var services = {
    odnoklassniki: __webpack_require__(46),
    vkontakte:     __webpack_require__(47),
    facebook:      __webpack_require__(48),
    twitter:       __webpack_require__(49),
    gplus:         __webpack_require__(50),
    pocket:        __webpack_require__(51),
    telegram:      __webpack_require__(52),
    whatsapp:      __webpack_require__(53),
    viber:         __webpack_require__(54),
    email:         __webpack_require__(55),
    more:          __webpack_require__(56)
};

utils.each(services, function (service, key) {
    Service(service);

    service.svgi = svg[key];
    service.name = key;
});

module.exports = services;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12), __webpack_require__(24)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(28));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(34));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(17));

var _Transition = _interopRequireDefault(__webpack_require__(14));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(5));

var _reactDom = _interopRequireDefault(__webpack_require__(5));

var _reactLifecyclesCompat = __webpack_require__(15);

var _PropTypes = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? undefined : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.transitionTimeout = transitionTimeout;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number
}).isRequired]);

exports.timeoutsShape = timeoutsShape;

var classNamesShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]);

exports.classNamesShape = classNamesShape;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(5));

var _reactLifecyclesCompat = __webpack_require__(15);

var _ChildMapping = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var propTypes =  false ? undefined : {};;
var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    this.setState(function (state) {
      var children = _extends({}, state.children);

      delete children[child.key];
      return {
        children: children
      };
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var isAvailable = function() {

    try {
        window.localStorage.setItem('isStorageAvailable', 1);
        window.localStorage.removeItem('isStorageAvailable');
        return true;
    } catch (e) {
        return false;
    }

};

var storage = {

    /**
     * Get item from localStorage
     * @param {String} key
     */
    getItem: function(key){

        if (isAvailable()) {

            var item = window.localStorage.getItem(key);

            try {
                JSON.parse(item);
            } catch (e) {
                return item;
            }

            return JSON.parse(item);

        }

    },

    /**
     * Save item in localStorage
     * @param {String} key
     * @param {String} value
     */
    setItem: function(key, value) {

        value = (typeof value === 'string') ? value : JSON.stringify(value);

        if (isAvailable()) {
            window.localStorage.setItem(key, value);
        }

    },

    /**
     * Remove item from localStorage
     * @param {String} key
     */
    removeItem: function(key) {

        if (isAvailable()) {
            window.localStorage.removeItem(key);
        }

    }

};

module.exports = storage;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _special = __webpack_require__(21);

var _special2 = _interopRequireDefault(_special);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.Special = _special2.default; /**
                                             * Entry point
                                             */

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import request from './lib/request';


__webpack_require__(22);

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(6);

var _app = __webpack_require__(25);

var _app2 = _interopRequireDefault(_app);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

var _analytics = __webpack_require__(7);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// const IMAGES = [];
//
var Special = function () {
  function Special() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Special);

    this.params = params;
    this.container = this.params.container;

    if (this.params.css) {
      this.loadStyles(this.params.css).then(function () {
        return _this.init();
      });
    } else {
      this.init();
    }
  }

  _createClass(Special, [{
    key: 'loadStyles',
    value: function loadStyles(path) {
      return new Promise(function (resolve, reject) {
        var link = document.createElement('link');

        link.rel = 'stylesheet';
        link.href = path;

        link.onload = function () {
          return resolve();
        };
        link.onerror = function () {
          return reject();
        };

        document.body.appendChild(link);
      });
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      this.container.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() === 'a') {
          Analytics.sendEvent(e.target.href);
        }
      });
    }
  }, {
    key: 'init',
    value: function init() {
      this.addEvents();
      var Special = function Special() {
        return (0, _preact.h)(
          _preactRedux.Provider,
          { store: _store2.default },
          (0, _preact.h)(_app2.default, null)
        );
      };

      _store2.default.dispatch({
        type: 'TEST_PARAMS',
        params: this.params
      });

      (0, _preact.render)((0, _preact.h)(Special, null), this.container);
    }
  }]);

  return Special;
}();

exports.default = Special;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(6);

var _enter = __webpack_require__(26);

var _enter2 = _interopRequireDefault(_enter);

var _question = __webpack_require__(37);

var _question2 = _interopRequireDefault(_question);

var _result = __webpack_require__(39);

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.onImageLoad = _this.onImageLoad.bind(_this);
    _this.onImageAnimationEnd = _this.onImageAnimationEnd.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'onImageLoad',
    value: function onImageLoad() {
      this.setState({
        isImageLoaded: true
      });
    }
  }, {
    key: 'onImageAnimationEnd',
    value: function onImageAnimationEnd() {
      this.setState({
        isImageAnimationEnd: true
      });
    }
  }, {
    key: 'render',
    value: function render(props, state) {
      var _this2 = this;

      var getEnter = function getEnter() {
        if (window.innerWidth < 640) {
          return (0, _preact.h)(_enter2.default, null);
        } else {
          return [window.innerWidth >= 1025 ? (0, _preact.h)('img', { style: state.isImageLoaded ? { animation: 'hands 1.5s' } : {}, src: 'https://leonardo.osnova.io/e6c7d2d4-ebec-e945-761b-6bcf295ad3da/', alt: '', 'class': 'pochtoy-hands pochtoy-hands--l' }) : null, (0, _preact.h)('img', { style: state.isImageLoaded ? { animation: 'hands 1.5s' } : {}, onLoad: _this2.onImageLoad, onAnimationEnd: _this2.onImageAnimationEnd, src: 'https://leonardo.osnova.io/e6c7d2d4-ebec-e945-761b-6bcf295ad3da/', alt: '', 'class': 'pochtoy-hands pochtoy-hands--r' }), state.isImageAnimationEnd ? (0, _preact.h)(_enter2.default, null) : null];
        }
      };

      var getBody = function getBody(status) {
        switch (status) {
          case 'START':
            return (0, _preact.h)(_question2.default, null);
          case 'RESULT':
            return (0, _preact.h)(_result2.default, null);
          default:
            return getEnter();
        }
      };

      var mainClassName = function () {
        var className = 'pochtoy';
        if (props.test.params.isFeed) {
          className += ' is-feed';
        }
        if (props.test.status === 'RESULT') {
          className += ' is-result';
        }
        return className;
      }();

      return (0, _preact.h)(
        'div',
        { className: mainClassName },
        (0, _preact.h)(
          'a',
          { href: 'https://www.pochtoy.com/', target: '_blank', className: 'pochtoy__logo' },
          (0, _preact.h)(
            'svg',
            { viewBox: '0 0 1945.95 667' },
            (0, _preact.h)('path', { d: 'M320 667l37-20V325l-37 20v322zM395 621l37-20V279l-37 20v322zM476 579l37-20V237l-37 20v322zM553 532l37-20V190l-37 20v322zM530 116L249 277l34 20 278-163-31-18zM218 258L496 95l-31-18-281 161 34 20zM148 220L426 57l-31-18-281 161 34 20zM358 18L327 0 46 161l34 20L358 18zM0 195v42l282 162-1-42L0 195zM0 283v42l282 162-1-42L0 283zM0 375v42l282 162-1-42L0 375zM0 461v42l282 162-1-42L0 461zM748.26 277.92c-6.9-3.18-15.16-4.51-24.59-4.51H678v106h24v-29h21.67a59.89 59.89 0 0 0 24.55-4.8 36.15 36.15 0 0 0 16-13.55 37 37 0 0 0 5.62-20.44q0-11.86-5.62-20.52c-3.71-5.78-9.06-10-15.96-13.18zm-9.08 47.49c-3.85 3.19-9.48 5-16.87 5H702v-37h20.3c7.4 0 13 1.43 16.87 4.62s5.83 7.79 5.83 13.77-2 10.43-5.82 13.61zM872 278.33a65.85 65.85 0 0 0-59.66 0 53 53 0 0 0-20.8 19.67 56.6 56.6 0 0 0 0 56.39 53 53 0 0 0 20.82 19.69 65.85 65.85 0 0 0 59.66 0 54.27 54.27 0 0 0-.02-95.75zm-.89 65.51a31.09 31.09 0 0 1-11.93 12.08 35.62 35.62 0 0 1-34 0 31.08 31.08 0 0 1-11.93-12.08 38 38 0 0 1 0-35.26 31.08 31.08 0 0 1 11.95-12.08 35.62 35.62 0 0 1 34 0 31.09 31.09 0 0 1 11.93 12.08 38 38 0 0 1 0 35.26zM955.47 296.51a35.52 35.52 0 0 1 17.63-4.33q16 0 26.75 12.46l15.81-14.64a50.11 50.11 0 0 0-18.77-14 66 66 0 0 0-54.57 2.2 52.74 52.74 0 0 0-20.67 19.61 57.17 57.17 0 0 0 0 56.7 52.74 52.74 0 0 0 20.67 19.61 61.11 61.11 0 0 0 29.41 7.06 62.57 62.57 0 0 0 25.08-4.86 49.28 49.28 0 0 0 18.85-14.14l-15.81-14.59q-10.79 12.62-26.75 12.62a35.51 35.51 0 0 1-17.63-4.33 30.79 30.79 0 0 1-12.08-12.08 38 38 0 0 1 0-35.26 30.79 30.79 0 0 1 12.08-12.03zM1107 315.41h-48v-42h-25v106h25v-44h48v44h25v-106h-25v42zM1194.42 271.19a103.45 103.45 0 0 0-26.3 3.34 91 91 0 0 0-23.71 9.88l8.23 18.39a85.49 85.49 0 0 1 29.36-10.18v86.79h25v-86.79a84.34 84.34 0 0 1 29.27 10.18l8.33-18.39a88.51 88.51 0 0 0-23.65-9.88 105 105 0 0 0-26.53-3.34zM1337.29 278.33a65.85 65.85 0 0 0-59.66 0 53 53 0 0 0-20.82 19.67 56.59 56.59 0 0 0 0 56.39 53 53 0 0 0 20.82 19.69 65.84 65.84 0 0 0 59.66 0 54.27 54.27 0 0 0 0-95.75zm-.89 65.51a31.09 31.09 0 0 1-11.93 12.08 35.62 35.62 0 0 1-34 0 31.07 31.07 0 0 1-11.93-12.08 38 38 0 0 1 0-35.26 31.07 31.07 0 0 1 11.93-12.08 35.62 35.62 0 0 1 34 0 31.09 31.09 0 0 1 11.93 12.08 38 38 0 0 1 0 35.26zM1456 306.15c0 9-2.38 15.76-6.84 20.22s-10.56 6.69-18.16 6.69c-7.2 0-12.94-2.13-16.9-6.38s-6.1-10.54-6.1-18.85v-34.42h-24v35.93c0 14.39 3.45 25.41 10.69 33.06s17.67 11.48 31.15 11.48c13 0 23.16-4.36 30.16-13.07v6.54c0 9.42-2.3 16.39-6.61 20.9s-11 6.76-19.91 6.76a52.08 52.08 0 0 1-33.78-11.7l-9.59 18.24a55.49 55.49 0 0 0 19.14 10.56 78.45 78.45 0 0 0 24.77 3.72c15.71 0 27.85-4.28 36.77-12.84s13.21-20.86 13.21-36.87v-72.71h-24v32.74zM1502.19 355.17a13.88 13.88 0 0 0-4.26 10.56 14.43 14.43 0 0 0 4.26 10.64 15 15 0 0 0 21 0 14.44 14.44 0 0 0 4.26-10.64 13.89 13.89 0 0 0-4.26-10.56 15.67 15.67 0 0 0-21 0zM1578.67 296.49a35.52 35.52 0 0 1 17.63-4.33q16 0 26.75 12.46l15.81-14.62a50.11 50.11 0 0 0-18.77-14 66 66 0 0 0-54.57 2.2 52.74 52.74 0 0 0-20.67 19.61 57.16 57.16 0 0 0 0 56.7 52.74 52.74 0 0 0 20.67 19.61 61.11 61.11 0 0 0 29.41 7.07 62.57 62.57 0 0 0 25.07-4.81 49.28 49.28 0 0 0 18.85-14.14L1623 347.68q-10.79 12.62-26.75 12.62a35.51 35.51 0 0 1-17.63-4.33 30.79 30.79 0 0 1-12.08-12.08 38 38 0 0 1 0-35.26 30.79 30.79 0 0 1 12.13-12.14zM1736.29 278.33a65.85 65.85 0 0 0-59.66 0 53 53 0 0 0-20.82 19.67 56.59 56.59 0 0 0 0 56.39 53 53 0 0 0 20.82 19.68 65.84 65.84 0 0 0 59.66 0 54.53 54.53 0 0 0 0-95.74zm-.84 65.51a31.09 31.09 0 0 1-11.93 12.08 35.62 35.62 0 0 1-34 0 31.07 31.07 0 0 1-11.93-12.08 38 38 0 0 1 0-35.26 31.07 31.07 0 0 1 11.93-12.08 35.62 35.62 0 0 1 34 0 31.09 31.09 0 0 1 11.93 12.08 38 38 0 0 1 0 35.26zM1935.64 282.21c-7-7.34-16.68-11-29.25-11a47.73 47.73 0 0 0-19.94 4 35.22 35.22 0 0 0-14.34 11.63 28.93 28.93 0 0 0-12.61-11.63 43 43 0 0 0-19.15-4 42.14 42.14 0 0 0-18.51 3.88 30.57 30.57 0 0 0-12.89 11v-12.68h-24v106h25v-63.08c0-8.11 1.93-14.16 6.08-18.16s9.6-6 16.49-6c6.28 0 11.27 1.9 14.92 5.7s5.5 9.45 5.5 17v64.59H1877v-63.13c0-8.11 2.32-14.16 6.48-18.16s9.85-6 16.84-6c6.38 0 11.72 1.9 15.63 5.7s6 9.45 6 17v64.59h24V314c0-13.83-3.32-24.45-10.31-31.79z' })
          )
        ),
        (0, _preact.h)(
          'div',
          { className: 'pochtoy__inner' + (props.test.status === 'RESULT' ? ' pochtoy__inner--result' : '') },
          getBody(props.test.status)
        )
      );
    }
  }]);

  return App;
}(_preact.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    test: store.testState
  };
};

exports.default = (0, _preactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(6);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

var _reactTransitionGroup = __webpack_require__(13);

var _analytics = __webpack_require__(7);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Data from '../data';
// import Svg from '../svg';

var defaultStyle = {
  transition: 'opacity 200ms linear',
  opacity: 0
};

var transitionStyles = {
  entered: { opacity: 1 },
  exited: { opacity: 0 }
};

var Enter = function (_Component) {
  _inherits(Enter, _Component);

  function Enter() {
    _classCallCheck(this, Enter);

    var _this = _possibleConstructorReturn(this, (Enter.__proto__ || Object.getPrototypeOf(Enter)).call(this));

    _this.start = _this.start.bind(_this);
    return _this;
  }

  _createClass(Enter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        didMount: true
      });
    }
  }, {
    key: 'start',
    value: function start() {
      Analytics.sendEvent('Start');

      _store2.default.dispatch({
        type: 'TEST_STATUS',
        status: 'START'
      });
    }
  }, {
    key: 'render',
    value: function render(props, state) {
      var _this2 = this;

      return (0, _preact.h)(
        _reactTransitionGroup.Transition,
        { 'in': state.didMount, timeout: 100 },
        function (state) {
          return (0, _preact.h)(
            'div',
            { style: _extends({}, defaultStyle, transitionStyles[state]), className: 'pochtoy-enter' },
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-enter__title' },
              '\u041D\u0430 \u0447\u0442\u043E \u0432\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u0440\u0430\u0434\u0438 \u0441\u043A\u0438\u0434\u043A\u0438?'
            ),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-enter__text' },
              (0, _preact.h)(
                'p',
                null,
                '\u0421\u043A\u043E\u0440\u043E \xAB\u0427\u0451\u0440\u043D\u0430\u044F \u043F\u044F\u0442\u043D\u0438\u0446\u0430\xBB \u2014 \u0432\u0440\u0435\u043C\u044F, \u043A\u043E\u0433\u0434\u0430 \u043B\u044E\u0434\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0430\u044E\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430 \u0440\u0430\u0434\u0438 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u043E\u0432 \u0437\u0430 ',
                (0, _preact.h)(
                  'span',
                  { style: 'color: #FF3939; font-weight: 700;' },
                  '9 999'
                ),
                '. \u041F\u043E\u0440\u0430 \u0443\u0437\u043D\u0430\u0442\u044C, \u043D\u0430 \u0447\u0442\u043E \u0432\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u043E\u0439\u0442\u0438 \u0440\u0430\u0434\u0438 \u043D\u0430\u0436\u0438\u0432\u044B \u0438 \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043B\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u043B\u044E\u0431\u0438\u0435.'
              ),
              (0, _preact.h)(
                'p',
                null,
                '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043A\u0438\u0434\u043A\u0443, \u0440\u0430\u0434\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043D\u0435\u043F\u0440\u0438\u0433\u043B\u044F\u0434\u043D\u044B\u0439 \u043F\u043E\u0441\u0442\u0443\u043F\u043E\u043A \u0438\u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u0442\u044C. \u0412\u0441\u0451 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u043E, \u0442\u0430\u043A \u0447\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0441\u0442\u0435\u0441\u043D\u044F\u0442\u044C\u0441\u044F.'
              )
            ),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-enter__btn' },
              (0, _preact.h)(
                'button',
                { className: 'pochtoy-btn', onClick: _this2.start },
                '\u041D\u0430\u0447\u0430\u0442\u044C'
              )
            )
          );
        }
      );
    }
  }]);

  return Enter;
}(_preact.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    test: store.testState
  };
};

exports.default = (0, _preactRedux.connect)(mapStateToProps)(Enter);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: '',
  description: '',
  questions: [{
    act: 'Влезть в начало очереди из 15 агрессивных людей',
    lot: 'Китайский флагманский смартфон за 23 000 рублей',
    img: {
      src: 'https://leonardo.osnova.io/8322740a-20a5-d4dc-d2c4-e127939e9de9/',
      style: {
        left: '55px',
        width: '105px'
      }
    },
    price: 23000
  }, {
    act: 'Просидеть ночь у магазина при температуре -11 градусов',
    lot: 'Новые «умные» часы за 29 000 рублей',
    img: {
      src: 'https://leonardo.osnova.io/051a67c7-0fd7-77a8-1e28-2a18d828ddd6/',
      style: {
        left: '68px',
        width: '80px'
      }
    },
    price: 29000,
    promo: '<p>Одна пара <a href="https://www.reddit.com/r/AskReddit/comments/1re0rl/retail_employees_of_reddit_what_are_your_black/cdmfyn7/" target="_blank">простояла</a> в очереди у магазина Target 14 часов. Попав внутрь, они прошли мимо полок с техникой и набили корзину бумажными полотенцами по $2 за упаковку.</p><p>С Pochtoy.com стоять в очередях не нужно. Товары со скидкой — в том числе часы — можно <a href="https://www.pochtoy.com/shops/watches-and-jewelry/" target="_blank">заказать</a> из США.</p>'
  }, {
    act: 'Отобрать последнюю игровую консоль у ребёнка в очереди',
    lot: 'Игровая консоль последнего поколения за 39 000 рублей',
    img: {
      src: 'https://leonardo.osnova.io/28ac8c03-742a-2880-abe2-ab28001ac534/',
      style: {
        left: '60px',
        bottom: '64px',
        width: '90px'
      }
    },
    price: 39000
  }, {
    act: 'Притвориться инвалидом',
    lot: 'Ультраширокий 4К-монитор за 48 000 рублей',
    img: {
      src: 'https://leonardo.osnova.io/84be7672-fbec-36fa-b7c1-87bd4f2933ca/',
      style: {
        left: '6px',
        width: '206px'
      }
    },
    price: 48000
  }, {
    act: 'Натравить агрессивную толпу на продавца-консультанта, чтобы отвлечь внимание',
    lot: 'Флагманский планшет со стилусом за 86 000 рублей',
    img: {
      src: 'https://leonardo.osnova.io/4cf9e8d4-ef44-77c7-f102-a99528eb68b1/',
      style: {
        left: '22px',
        width: '172px'
      }
    },
    price: 86000,
    promo: '<p>В 2005 году отчаявшиеся сотрудники Walmart во Флориде стали <a href="https://www.brainjet.com/random/2355420/15-worst-black-friday-incidents/" target="_blank">кидать</a> ноутбуки в толпу покупателей, а те в ответ устроили потасовку с охраной.</p><p>С Pochtoy всё проще — технику можно со скидкой <a href="https://www.pochtoy.com/shops/electronics/" target="_blank">заказать</a> в крупных американских магазинах вроде легендарного Radioshack или Newegg.</p>'
  }, {
    act: 'Пофлиртовать с усатым охранником склада',
    lot: 'Игровой ноутбук за 98 000 рублей',
    img: {
      src: 'https://leonardo.osnova.io/e3662945-e391-fe65-c19d-4de1540422f2/',
      style: {
        left: '18px',
        width: '177px'
      }
    },
    price: 98000
  }, {
    act: 'Набить татуировку с логотипом бренда телевизоров',
    lot: 'Безрамочный 4К-телевизор за 170 000 рублей',
    img: {
      src: 'https://leonardo.osnova.io/a9652e16-3354-0cdc-e09f-0ee1a7054459/',
      style: {
        left: '6px',
        width: '206px'
      }
    },
    price: 170000
  }, {
    act: 'Назвать первенца Аквариусом в честь модели нового автомобиля',
    lot: 'Серый универсал за 651 000 рублей',
    img: {
      src: 'https://leonardo.osnova.io/40179d16-1c06-3056-1d06-f76d2dea9edd/',
      style: {
        left: '22px',
        bottom: '56px',
        width: '162px'
      }
    },
    price: 651000
  }],
  result: {
    text: '<p>Решать моральные дилеммы не нужно, если заказывать товары из-за рубежа, сидя дома — в США скидки на «Чёрную пятницу» достигают 80%.</p><p>С помощью Pochtoy.com можно безопасно закупиться во время потребительского безумия. Сервис предоставляет клиентам американский почтовый адрес для заказов в интернет-магазинах США и собирает все покупки в одну посылку, которая затем доставляется до получателя.</p>'
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(2));

var _addClass = _interopRequireDefault(__webpack_require__(31));

var _removeClass = _interopRequireDefault(__webpack_require__(33));

var _react = _interopRequireDefault(__webpack_require__(5));

var _Transition = _interopRequireDefault(__webpack_require__(14));

var _PropTypes = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};

var propTypes =  false ? undefined : {};;
/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 */

var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    };

    _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames7 = this.getClassNames(type),
        className = _this$getClassNames7.className,
        activeClassName = _this$getClassNames7.activeClassName,
        doneClassName = _this$getClassNames7.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.propTypes =  false ? undefined : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(30);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(32);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(5));

var _reactDom = __webpack_require__(5);

var _TransitionGroup = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes =  false ? undefined : {};;
/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  false ? undefined : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(5);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'PSB', // уникальное имя спецпроекта. Оно же — название главного класса. Используется на странице, куда интегрируется спецпроект
  analyticsCategory: 'PSB',
  sendPageView: false, // отключаем, если спецпроект не на отдельной странице
  listenedEvents: ['click', 'input'] // слушаем события (click, input, change, etc.). Обычно нужен только click
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(6);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

var _reactTransitionGroup = __webpack_require__(13);

var _analytics = __webpack_require__(7);

var Analytics = _interopRequireWildcard(_analytics);

var _smoothscrollPolyfill = __webpack_require__(38);

var _smoothscrollPolyfill2 = _interopRequireDefault(_smoothscrollPolyfill);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Svg from '../svg';

_smoothscrollPolyfill2.default.polyfill();

var transitionCraneStyles = {};

var transitionClawLStyles = {
  entered: {
    transition: 'transform 100ms linear',
    transform: 'rotate(-30deg)'
  }
};

var transitionClawRStyles = {
  entered: {
    transition: 'transform 100ms linear',
    transform: 'rotate(22deg)'
  }
};

var transitionLotStyles = {
  entered: {
    transition: 'transform 1s linear',
    transform: 'translate3d(0, -500px, 0)'
  }
};

var options = [{
  value: 80,
  label: '80%'
}, {
  value: 60,
  label: '60%'
}, {
  value: 40,
  label: '40%'
}, {
  value: 20,
  label: '20%'
}, {
  value: 10,
  label: '10%'
}, {
  value: 0,
  label: 'Ни за что'
}];

var Option = function Option(props, state) {
  return (0, _preact.h)(
    'div',
    { className: 'pochtoy-options__item' },
    (0, _preact.h)(
      'div',
      { className: 'pochtoy-option' + (props.isActive ? ' is-active' : ''), onClick: function onClick(e) {
          return props.onClick(e, props.item.value);
        } },
      (0, _preact.h)('div', { className: 'pochtoy-option__btn' }),
      (0, _preact.h)(
        'div',
        { className: 'pochtoy-option__label' },
        props.item.label
      )
    )
  );
};

var OptionList = function OptionList(props, state) {
  var getOptions = function getOptions() {
    return props.items.map(function (item, i) {
      var isActive = props.activeValue === item.value;
      return (0, _preact.h)(Option, { key: i, item: item, isActive: isActive, onClick: props.onClick });
    });
  };

  return (0, _preact.h)(
    'div',
    { className: 'pochtoy-options' },
    getOptions()
  );
};

var Question = function (_Component) {
  _inherits(Question, _Component);

  function Question() {
    _classCallCheck(this, Question);

    var _this = _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).call(this));

    _this.setValue = _this.setValue.bind(_this);
    _this.continue = _this.continue.bind(_this);
    _this.next = _this.next.bind(_this);
    _this.result = _this.result.bind(_this);
    return _this;
  }

  _createClass(Question, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {}
  }, {
    key: 'setValue',
    value: function setValue(e, value) {
      if (this.answered) {
        return;
      }

      this.setState({
        answerValue: value
      });
    }
  }, {
    key: 'continue',
    value: function _continue() {
      if (this.state.answerValue === undefined) {
        return;
      }

      this.answered = true;

      Analytics.sendEvent('Continue');

      window.scroll({
        top: this.props.test.params.container.offsetTop,
        behavior: 'smooth'
      });

      if (this.state.answerValue && !this.state.grabbing) {
        var craneRect = this.crane.getBoundingClientRect();
        var lotRect = this.lot.getBoundingClientRect();
        var offsetY = lotRect.y - craneRect.y - craneRect.height;

        console.log(offsetY);

        transitionCraneStyles = {
          entering: {
            transition: 'transform 200ms linear',
            transform: 'translate3d(0, ' + offsetY + 'px, 0)'
          },
          entered: {
            transition: 'transform 1s 200ms linear',
            transform: 'translate3d(0, ' + (-500 + offsetY) + 'px, 0)'
          }
        };
        this.setState({
          grabbing: true
        });

        return;
      } else if (!this.state.showPromo && this.props.test.question.promo) {
        this.setState({
          showPromo: true
        });

        return;
      } else {
        this.answered = false;
      }

      _store2.default.dispatch({
        type: 'TEST_ANSWER',
        answer: this.state.answerValue
      });

      if (this.props.test.activeIndex < this.props.test.questionsCount - 1) {
        this.next();
      } else {
        this.result();
      }

      this.setState({
        answerValue: undefined,
        showPromo: false,
        grabbing: false,
        lotImageStyles: {
          opacity: 0
        }
      });
    }
  }, {
    key: 'next',
    value: function next() {
      _store2.default.dispatch({
        type: 'TEST_NEXT'
      });
    }
  }, {
    key: 'result',
    value: function result() {
      _store2.default.dispatch({
        type: 'TEST_STATUS',
        status: 'RESULT'
      });
    }
  }, {
    key: 'render',
    value: function render(props, state) {
      var _this2 = this;

      var getNotice = function getNotice() {
        if (state.answerValue === undefined) {
          return null;
        }

        var value = state.answerValue;
        var results = props.test.results[props.test.activeIndex];
        var total = 0;
        var current = 0;

        for (var k in results) {
          if (results.hasOwnProperty(k)) {
            total += results[k];

            if (parseInt(k) === parseInt(value)) {
              current = results[k];
            }
          }
        }

        return Math.round(current / total * 100) + '% пользователей выбрали такую же скидку';
      };

      var getPrice = function getPrice() {
        if (state.answerValue) {
          var newPrice = Math.round(props.test.question.price * (1 - state.answerValue / 100));
          return [(0, _preact.h)(
            'div',
            { className: 'pochtoy-lot__price pochtoy-lot__price--old' },
            props.test.question.price
          ), (0, _preact.h)(
            'div',
            { className: 'pochtoy-lot__price pochtoy-lot__price--new' },
            newPrice
          )];
        }

        return (0, _preact.h)(
          'div',
          { className: 'pochtoy-lot__price' },
          props.test.question.price
        );
      };

      var getPromo = function getPromo() {
        if (!state.showPromo) {
          return null;
        }

        return (0, _preact.h)(
          'div',
          { className: 'pochtoy-q__promo' },
          (0, _preact.h)(
            'div',
            { className: 'pochtoy-q__promo-inner' },
            (0, _preact.h)('div', { className: 'pochtoy-q__promo-text', dangerouslySetInnerHTML: { __html: props.test.question.promo } }),
            (0, _preact.h)(
              'button',
              { className: 'pochtoy-q__promo-btn', onClick: _this2.continue },
              '\u0414\u0430\u043B\u0435\u0435'
            )
          )
        );
      };

      var getLotImg = function getLotImg() {
        return props.test.question.img.src;
      };

      return (0, _preact.h)(
        'div',
        { className: 'pochtoy-q' },
        getPromo(),
        (0, _preact.h)(
          'div',
          { className: 'pochtoy-q__pager' },
          props.test.activeIndex + 1 + '/' + props.test.questionsCount
        ),
        (0, _preact.h)(
          'div',
          { className: 'pochtoy-q__inner' },
          (0, _preact.h)(
            'div',
            { className: 'pochtoy-q__body' },
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-q__label' },
              '\u0427\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C:'
            ),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-q__title' },
              props.test.question.act
            ),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-q__label' },
              '\u041B\u043E\u0442:'
            ),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-q__subtitle' },
              props.test.question.lot
            ),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-q__lot' },
              (0, _preact.h)(
                'div',
                { className: 'pochtoy-lot' },
                (0, _preact.h)(
                  'div',
                  { className: 'pochtoy-lot__body' },
                  (0, _preact.h)(
                    _reactTransitionGroup.Transition,
                    { 'in': state.grabbing, timeout: 200 },
                    function (state) {
                      return (0, _preact.h)(
                        'div',
                        { className: 'pochtoy-crane pochtoy-crane--back', style: transitionCraneStyles[state] },
                        (0, _preact.h)('img', { src: 'https://leonardo.osnova.io/e7cd2921-57c5-c8e1-93c5-5561828d474c/', alt: '', className: 'pochtoy-crane__claw pochtoy-crane__claw--b' })
                      );
                    }
                  ),
                  (0, _preact.h)(
                    _reactTransitionGroup.Transition,
                    { 'in': state.grabbing, timeout: 200 },
                    function (state) {
                      return (0, _preact.h)(
                        'div',
                        { className: 'pochtoy-crane', style: transitionCraneStyles[state], ref: function ref(el) {
                            return _this2.crane = el;
                          } },
                        (0, _preact.h)('img', { src: 'https://leonardo.osnova.io/adb3f56f-25d1-1e95-70c6-362f42c3a129/', alt: '', className: 'pochtoy-crane__grabber' }),
                        (0, _preact.h)('img', { style: transitionClawLStyles[state], src: 'https://leonardo.osnova.io/9586ee7f-571f-d238-75f7-4b34070a3a62/', alt: '', className: 'pochtoy-crane__claw pochtoy-crane__claw--l' }),
                        (0, _preact.h)('img', { style: transitionClawRStyles[state], src: 'https://leonardo.osnova.io/f433ab26-fa16-ad9e-7a31-396a74236d93/', alt: '', className: 'pochtoy-crane__claw pochtoy-crane__claw--r' })
                      );
                    }
                  ),
                  (0, _preact.h)(
                    _reactTransitionGroup.Transition,
                    { 'in': state.grabbing, timeout: 400 },
                    function (status) {
                      return (0, _preact.h)('img', { onLoad: function onLoad() {
                          _this2.setState({
                            lotImageStyles: {
                              opacity: 1
                            }
                          });
                        }, onTransitionEnd: _this2.continue, style: _extends({}, props.test.question.img.style, transitionLotStyles[status], state.lotImageStyles), src: getLotImg(), ref: function ref(el) {
                          return _this2.lot = el;
                        }, alt: '', className: 'pochtoy-lot__img' });
                    }
                  )
                ),
                (0, _preact.h)(
                  'div',
                  { className: 'pochtoy-lot__bottom' },
                  getPrice()
                )
              ),
              (0, _preact.h)(
                'div',
                { className: 'pochtoy-q__notice' },
                getNotice()
              )
            ),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-q__label pochtoy-q__label--options' },
              '\u0420\u0430\u0437\u043C\u0435\u0440 \u0441\u043A\u0438\u0434\u043A\u0438:'
            ),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-q__options' },
              (0, _preact.h)(OptionList, { items: options, activeValue: state.answerValue, onClick: this.setValue })
            ),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-q__btn' },
              (0, _preact.h)(
                'button',
                { className: 'pochtoy-btn' + (state.answerValue === undefined ? ' is-disabled' : ''), onClick: this.continue },
                props.test.activeIndex < props.test.questionsCount - 1 ? 'Согласен' : 'Результат'
              )
            )
          )
        )
      );
    }
  }]);

  return Question;
}(_preact.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    test: store.testState
  };
};

exports.default = (0, _preactRedux.connect)(mapStateToProps)(Question);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.0 - 2018 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;

      do {
        el = el.parentNode;

        isBody = el === d.body;
      } while (isBody === false && isScrollable(el) === false);

      isBody = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(6);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

var _analytics = __webpack_require__(7);

var Analytics = _interopRequireWildcard(_analytics);

var _share = __webpack_require__(40);

var Share = _interopRequireWildcard(_share);

var _svg = __webpack_require__(60);

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Transition } from 'react-transition-group';


var Result = function (_Component) {
  _inherits(Result, _Component);

  function Result() {
    _classCallCheck(this, Result);

    var _this = _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this));

    _this.restart = _this.restart.bind(_this);
    return _this;
  }

  _createClass(Result, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      Share.make(this.shareMoral, {
        url: this.props.test.params.share.url + '/moral/' + 68,
        title: this.props.test.params.share.title,
        twitter: this.props.test.params.share.title
      });

      Share.make(this.shareAmoral, {
        url: this.props.test.params.share.url + '/amoral/' + 32,
        title: this.props.test.params.share.title,
        twitter: this.props.test.params.share.title
      });
    }
  }, {
    key: 'restart',
    value: function restart() {
      Analytics.sendEvent('Restart');

      _store2.default.dispatch({
        type: 'TEST_RESTART'
      });
    }
  }, {
    key: 'render',
    value: function render(props, state) {
      var _this2 = this;

      console.log(props.test.answers);
      var getResult = function getResult() {
        var userResults = props.test.results;
        var answers = props.test.answers;
        var result = 0;

        userResults.forEach(function (item, i) {
          var total = 0;
          var amoral = 0;
          for (var k in item) {
            if (item.hasOwnProperty(k)) {
              total += item[k];
              if (parseInt(answers[i]) <= parseInt(k)) {
                amoral += item[k];
              }
            }
          }
          result += Math.round(amoral / total * 100);
        });

        return Math.round(result / props.test.questionsCount);
      };

      var result = getResult();

      return (0, _preact.h)(
        'div',
        { className: 'pochtoy-result' },
        (0, _preact.h)(
          'div',
          { className: 'pochtoy-result__main' },
          (0, _preact.h)(
            'div',
            { className: 'pochtoy-result__block' },
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-result__title' },
              '\u042F \u044D\u0442\u0438\u0447\u043D\u0435\u0435 ',
              result,
              '%',
              (0, _preact.h)('br', null),
              '\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 TJ'
            ),
            (0, _preact.h)('div', { className: 'pochtoy-result__share pochtoy-result__share--dark', ref: function ref(el) {
                return _this2.shareMoral = el;
              } }),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-result__restart', onClick: this.restart },
              (0, _preact.h)(
                'span',
                null,
                '\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C'
              ),
              (0, _preact.h)('span', { dangerouslySetInnerHTML: { __html: _svg2.default.refresh } })
            ),
            (0, _preact.h)('img', { src: 'https://leonardo.osnova.io/f0862130-b772-cf33-cf69-7e4dbc2a8465/', alt: '', className: 'pochtoy-result__img' })
          ),
          (0, _preact.h)(
            'div',
            { className: 'pochtoy-result__block pochtoy-result__block--a' },
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-result__title pochtoy-result__title--a' },
              '\u042F \u0430\u043C\u043E\u0440\u0430\u043B\u044C\u043D\u0435\u0435 ',
              100 - result,
              '%',
              (0, _preact.h)('br', null),
              '\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 TJ'
            ),
            (0, _preact.h)('div', { className: 'pochtoy-result__share', ref: function ref(el) {
                return _this2.shareAmoral = el;
              } }),
            (0, _preact.h)(
              'div',
              { className: 'pochtoy-result__restart pochtoy-result__restart--a', onClick: this.restart },
              (0, _preact.h)(
                'span',
                null,
                '\u041F\u0435\u0440\u0435\u043E\u0431\u0443\u0442\u044C\u0441\u044F'
              ),
              (0, _preact.h)('span', { dangerouslySetInnerHTML: { __html: _svg2.default.refresh } })
            ),
            (0, _preact.h)('img', { src: 'https://leonardo.osnova.io/230588fc-b0b6-6d8a-fafa-1d86a6977980/', alt: '', className: 'pochtoy-result__img pochtoy-result__img--a' })
          )
        ),
        (0, _preact.h)(
          'div',
          { className: 'pochtoy-result__bottom' },
          (0, _preact.h)(
            'div',
            { className: 'pochtoy-result__text' },
            (0, _preact.h)(
              'p',
              null,
              '\u0420\u0435\u0448\u0430\u0442\u044C \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0438\u043B\u0435\u043C\u043C\u044B \u043D\u0435 \u043D\u0443\u0436\u043D\u043E, \u0435\u0441\u043B\u0438 \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B \u0438\u0437-\u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u0430, \u0441\u0438\u0434\u044F \u0434\u043E\u043C\u0430 \u2014 \u0432 \u0421\u0428\u0410 \u0441\u043A\u0438\u0434\u043A\u0438 \u043D\u0430 \xAB\u0427\u0451\u0440\u043D\u0443\u044E \u043F\u044F\u0442\u043D\u0438\u0446\u0443\xBB \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u044E\u0442 80%.'
            ),
            (0, _preact.h)(
              'p',
              null,
              '\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E ',
              (0, _preact.h)(
                'a',
                { href: 'https://pochtoy.com', target: '_blank' },
                'Pochtoy.com'
              ),
              ' \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0443\u043F\u0438\u0442\u044C\u0441\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0431\u0435\u0437\u0443\u043C\u0438\u044F: \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445 \u0421\u0428\u0410 \u0438 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0432\u0441\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432 \u043E\u0434\u043D\u0443 \u043F\u043E\u0441\u044B\u043B\u043A\u0443, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044E.'
            )
          ),
          (0, _preact.h)(
            'a',
            { href: 'https://pochtoy.com', target: '_blank', className: 'pochtoy-result__btn' },
            '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438'
          )
        )
      );
    }
  }]);

  return Result;
}(_preact.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    test: store.testState
  };
};

exports.default = (0, _preactRedux.connect)(mapStateToProps)(Result);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.make = exports.init = undefined;

var _cmttLikely = __webpack_require__(41);

var _cmttLikely2 = _interopRequireDefault(_cmttLikely);

var _dom = __webpack_require__(59);

var _analytics = __webpack_require__(7);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS = {
    likely: 'likely',
    likelyCustom: 'likely--custom'
};

var init = exports.init = function init() {
    _cmttLikely2.default.initate();
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer - likely container will be placed here
 * @param {Object} set - object with optional params (title, url, twitter)
 */
var make = exports.make = function make(parentContainer) {
    var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var likelyContainer = (0, _dom.makeElement)('div', [CSS.likely, CSS.likelyCustom]);
    var socials = ['vkontakte', 'facebook', 'twitter'];

    socials.forEach(function (social) {
        var button = (0, _dom.makeElement)('div', social);

        if (social === 'vkontakte') button.innerHTML = 'Поделиться';

        button.addEventListener('click', function () {
            Analytics.sendEvent('Share ' + social);
        });

        likelyContainer.appendChild(button);
    });

    parentContainer.appendChild(likelyContainer);

    if (set.url) likelyContainer.dataset.url = set.url;
    if (set.twitter) likelyContainer.dataset.twitter = set.twitter;
    if (set.title) likelyContainer.dataset.title = set.title;

    init();
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 'use strict';

var Likely = __webpack_require__(42),
    config = __webpack_require__(1),
    utils = __webpack_require__(4),
    dom = __webpack_require__(3);

/**
 * @param {Node} node
 * @param {Object} options
 */
var likely = function (node, options) {
    options = options || {};

    var widget = node[config.name];

    if (widget) {
        widget.update(options);
    }
    else {
        node[config.name] = new Likely(node, utils.merge(
            {}, likely.defaults,
            options, utils.bools(node)
        ));
    }

    return widget;
};

/**
 * Initiate Likely buttons on load
 */
likely.initiate = likely.initate = function () {
    var widgets = dom.findAll('.' + config.name);

    utils.toArray(widgets).forEach(likely);
};

/**
 * Defaults options for likely
 */
likely.defaults = {
    counters: true,
    timeout:  1e3,
    zeroes:   false,
    title:    document.title,
    wait:     0.5e3,
    url:      window.location.href.replace(window.location.hash, '')
};

module.exports = likely;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Button = __webpack_require__(43);

var services = __webpack_require__(9),
    config   = __webpack_require__(1),
    utils = __webpack_require__(4),
    dom = __webpack_require__(3),
    storage = __webpack_require__(18);

/**
 * Main widget view
 *
 * @param {Node} container
 * @param {Object} options
 */
function Likely(container, options) {
    this.isSmartOrder = container.dataset.smart !== undefined ? true : false;
    this.container = container;
    this.options   = options;

    this.countersLeft = 0;
    this.buttons      = [];
    this.number       = 0;

    this.init();
}

Likely.prototype = {

    /**
     * Change buttons order, if previous clicks were saved
     * @param {Array} children
     */
    reorder: function (children) {
        var savedServices = storage.getItem(config.storageKey);

        if (savedServices) {
            savedServices.reverse();

            savedServices.forEach(function (service) {

                var button = dom.find('.' + service);

                if (button) {
                    button.parentNode.insertBefore(button, button.parentNode.firstChild);
                }

            });
        }
    },

    /**
     * Initiate the social buttons widget
     */
    init: function () {

        var buttons = utils.toArray(this.container.children);

        if (dom.isMobile() && this.isSmartOrder) {
            this.reorder(buttons);
        }

        buttons.forEach(this.addButton.bind(this));

        if (this.options.counters) {
            this.timer   = setTimeout(this.appear.bind(this), this.options.wait);
            this.timeout = setTimeout(this.ready.bind(this),  this.options.timeout);
        }
        else {
            this.appear();
        }

        utils.flexboxSupport(this.container, config.name);
    },

    /**
     * Add a button
     *
     * @param {Node} node
     */
    addButton: function (node) {
        var button = new Button(node, this, this.options);

        this.buttons.push(button);

        if (button.options.counterUrl) {
            this.countersLeft++;
        }
    },

    /**
     * Update the timer with URL
     *
     * @param {Object} options
     */
    update: function (options) {
        if (
            options.forceUpdate ||
            options.url !== this.options.url
        ) {
            this.countersLeft = this.buttons.length;
            this.number = 0;

            this.buttons.forEach(function (button) {
                button.update(options);
            });
        }
    },

    /**
     * Update counter
     *
     * @param {String} service
     * @param {Number} counter
     */
    updateCounter: function (service, counter) {
        if (counter) {
            this.number += counter;
        }

        this.countersLeft--;

        if (this.countersLeft === 0) {
            this.appear();
            this.ready();
        }
    },

    /**
     * Show the buttons with smooth animation
     */
    appear: function () {
        this.container.classList.add(config.name + '--visible');
    },

    /**
     * Get. Set. Ready.
     */
    ready: function () {
        if (this.timeout) {
            clearTimeout(this.timeout);

            this.container.classList.add(config.name + '--ready');
        }
    }
};

module.exports = Likely;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(9),
    config = __webpack_require__(1),
    fetch = __webpack_require__(57),
    utils = __webpack_require__(4),
    dom = __webpack_require__(3),
    storage = __webpack_require__(18);

var htmlSpan = '<span class="{className}">{content}</span>';

/**
 * Separate social link widget
 *
 * @param {Node} widget
 * @param {Likely} likely
 * @param {Object} options
 */
function LikelyButton (widget, likely, options) {
    this.widget  = widget;
    this.likely  = likely;
    this.options = utils.merge(options);

    this.init();
}

LikelyButton.prototype = {
    /**
     * Initiate the button
     */
    init: function () {
        this.detectService();
        this.detectParams();

        if (this.service) {
            this.initHtml();

            setTimeout(this.initCounter.bind(this), 0);
        }
    },

    /**
     * Update the counter
     *
     * @param {Object} options
     */
    update: function (options) {
        var className = '.' + config.prefix + 'counter';
            counters  = dom.findAll(className, this.widget);

        utils.extend(this.options, utils.merge({forceUpdate: false}, options));
        utils.toArray(counters).forEach(function (node) {
            node.parentNode.removeChild(node);
        });

        this.initCounter();
    },

    /**
     * Get the config.name of service and its options
     */
    detectService: function () {
        var widget  = this.widget,
            service = utils.getDataset(widget).service;

        if (!service) {
            var classes = widget.className.split(' ');

            for (var i = 0; i < classes.length; i++) {
                if (classes[i] in services) break;
            }

            service = classes[i];
        }

        if (service) {
            this.service = service;

            utils.extend(this.options, services[service]);
        }
    },

    /**
     * Merge params from data-* attributes into options hash map
     */
    detectParams: function () {
        var options = this.options,
            data    = utils.getDataset(this.widget);

        if (data.counter) {
            var counter = parseInt(data.counter, 10);

            if (isNaN(counter)) {
                options.counterUrl = data.counter;
            }
            else {
                options.counterNumber = counter;
            }
        }

        options.title = data.title || options.title;
        options.url   = data.url   || options.url;
    },

    /**
     * Inititate button's HTML
     */
    initHtml: function () {
        var options = this.options,
            widget  = this.widget,
            text    = widget.innerHTML;

        widget.addEventListener('click', this.click.bind(this));
        widget.classList.remove(this.service);
        widget.className += (' ' + this.className('widget'));

        var button = utils.template(htmlSpan, {
            className: this.className('button'),
            content:   text
        });

        var icon = utils.template(htmlSpan, {
            className: this.className('icon'),
            content:   dom.wrapSVG(options.svgi)
        });

        widget.innerHTML = icon + button;
    },

    /**
     * Fetch or get cached counter value and update the counter
     */
    initCounter: function () {
        var options = this.options;

        if (options.counters && options.counterNumber) {
            this.updateCounter(options.counterNumber);
        }
        else if (options.counterUrl) {
            fetch(
                this.service,
                options.url,
                options
            )(this.updateCounter.bind(this));
        }
    },

    /**
     * @param {String} className
     * @return {String}
     */
    className: function (className) {
        var fullClass = config.prefix + className;

        return fullClass + ' ' + fullClass + '--' + this.service;
    },

    /**
     * Update counter
     *
     * @param {String} e
     */
    updateCounter: function (counter) {
        counter = parseInt(counter, 10) || 0;

        var counterElement = dom.find('.' + config.name + '__counter', this.widget);

        if (counterElement) {
            counterElement.parentNode.removeChild(counterElement);
        }

        var options = {
            className: this.className('counter'),
            content:   counter
        };

        if (!counter && !this.options.zeroes) {
            options.className += ' ' + config.prefix + 'counter--empty';
            options.content = '';
        }

        this.widget.appendChild(
            dom.createNode(utils.template(htmlSpan, options))
        );

        this.likely.updateCounter(this.service, counter);
    },

    /**
     * Click event listener
     */
    click: function () {
        var options = this.options;

        if ( this.service == 'more' ){

            this.widget.classList.toggle('active');
            this.widget.parentElement.classList.toggle(this.options.className);

        } else if (this.service == 'email'){

            var url = utils.makeUrl(options.popupUrl, {
                url: options.url,
                title: options.title
            });

            window.location = url;

            this.rememberClicked(this.service);

        } else {

            if (options.click.call(this)) {

                var twitterText = this.likely.container.dataset.twitter,
                    twitterUrl = this.likely.container.dataset.twitterUrl;

                var window_url = utils.makeUrl(options.popupUrl, {
                    url:   (this.service === 'twitter' && twitterUrl !== '' && twitterUrl !== undefined) ? twitterUrl : options.url,
                    title: (this.service === 'twitter' && twitterText !== '' && twitterText !== undefined) ? twitterText : options.title
                });

                dom.openPopup(
                    this.addAdditionalParamsToUrl(window_url),
                    config.prefix + this.service,
                    options.popupWidth,
                    options.popupHeight
                );

                this.rememberClicked(this.service);
            }

        }

        return false;
    },

    /**
     * Append service data to URL
     *
     * @param {String} url
     */
    addAdditionalParamsToUrl: function (url) {
        var parameters = utils.query(utils.merge(
                this.widget.dataset,
                this.options.data
            )),
            delimeter = url.indexOf('?') === -1 ? '?' : '&';

        return (parameters === '') ? url : (url + delimeter + parameters);
    },

    /**
     * Remember last clicked button and save to storage
     */
    rememberClicked: function (service) {
        var services = storage.getItem(config.storageKey) || [],
            serviceIndex = services.indexOf(service);

        if (serviceIndex !== -1) {
            services.splice(serviceIndex, 1);
        }

        services.splice(0, 0, service);

        storage.setItem(config.storageKey, services);
    }
};

module.exports = LikelyButton;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var dom = __webpack_require__(3);

/**
 * @param {String} url
 * @param {Function} factory
 */
var counter = function (url, factory) {
    var self = this;
    
    dom.getJSON(url, function (count) {
        try {
            if (typeof self.convertNumber === 'function') {
                count = self.convertNumber(count);
            } 
            
            factory(count);
        } 
        catch (e) {}
    });
};

/**
 * @param {Object} options
 */
module.exports = function (options) {
    options.counter = options.counter || counter;
    options.click   = options.click   || function () { return true; };
};

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = {"facebook":"5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8","twitter":"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353","vkontakte":"15.4 12.8h-1.8c-.7 0-.9-.5-2.1-1.7-1-1-1.5-1.1-1.7-1.1-.4 0-.5.1-.5.6v1.6c0 .4-.1.7-1.3.7-1.9 0-3.9-1.1-5.3-3.2C.6 6.5 0 4.2 0 3.7c0-.3.1-.5.6-.5h1.8c.4 0 .6.2.8.7C4 6.4 5.4 8.6 6 8.6c.2 0 .3-.1.3-.7V5.4c0-1.2-.6-1.3-.6-1.7 0-.2.2-.4.4-.4h2.8c.4 0 .5.2.5.6v3.5c0 .4.2.5.3.5.2 0 .4-.1.8-.5 1.3-1.4 2.2-3.6 2.2-3.6.1-.3.3-.5.8-.5h1.8c.5 0 .6.3.5.6-.2 1-2.4 4-2.4 4-.2.3-.3.4 0 .8.2.3.8.8 1.2 1.3.8.8 1.3 1.6 1.5 2.1 0 .4-.2.7-.7.7","gplus":"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8","odnoklassniki":"8 2.6c.9 0 1.7.7 1.7 1.7C9.7 5.2 9 6 8 6c-.9 0-1.7-.7-1.7-1.7S7.1 2.6 8 2.6zm0 5.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm1.6 3.2c.8-.2 1.6-.5 2.3-1 .5-.3.7-1.1.4-1.6-.3-.6-1.1-.7-1.6-.4-1.6 1-3.8 1-5.4 0-.6-.3-1.3-.1-1.6.4-.4.6-.2 1.3.3 1.7.7.5 1.5.8 2.3 1l-2.2 2.2c-.5.5-.5 1.2 0 1.7.2.2.5.3.8.3.3 0 .6-.1.8-.3L8 13.2l2.2 2.2c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-2.3-2.2","pocket":"12.533 6.864L8.77 10.4c-.213.2-.486.3-.76.3-.273 0-.547-.1-.76-.3L3.488 6.865c-.437-.41-.45-1.09-.032-1.52.42-.428 1.114-.443 1.55-.032l3.006 2.823 3.004-2.823c.438-.41 1.132-.396 1.55.032.42.43.406 1.11-.03 1.52zm3.388-4.928c-.207-.56-.755-.936-1.363-.936H1.45C.854 1 .31 1.368.096 1.917.032 2.08 0 2.25 0 2.422v4.73l.055.94c.232 2.14 1.366 4.01 3.12 5.314.03.024.063.047.094.07l.02.013c.94.673 1.992 1.13 3.128 1.353.524.104 1.06.157 1.592.157.492 0 .986-.045 1.472-.133.058-.01.116-.022.175-.034.016-.003.033-.01.05-.018 1.088-.233 2.098-.677 3.003-1.326l.02-.015c.032-.022.064-.045.096-.07 1.753-1.303 2.887-3.173 3.12-5.312l.054-.94v-4.73c0-.165-.02-.327-.08-.487","telegram":"12.4 4.2L6.6 9.6c-.2.2-.3.4-.4.7L6 11.8c0 .2-.3.2-.3 0l-.8-2.6c-.1-.4.1-.7.3-.8l7-4.3c.2-.2.4 0 .2.1zm2.9-3L.5 6.9c-.4.1-.4.7 0 .8L4.1 9l1.4 4.5c.1.3.4.4.7.2l2-1.6c.2-.2.5-.2.7 0l3.6 2.6c.3.2.6 0 .7-.3l2.6-12.8c.1-.2-.2-.5-.5-.4","whatsapp":"15.8 7.8c0 4.2-3.4 7.6-7.6 7.6-1.3 0-2.6-.3-3.7-.9L.3 15.8l1.4-4.1C1 10.6.6 9.2.6 7.8.6 3.6 4 .2 8.2.2c4.2 0 7.6 3.4 7.6 7.6M8.1 1.4c-3.5 0-6.4 2.9-6.4 6.4 0 1.4.5 2.7 1.2 3.7l-.8 2.4 2.5-.8c1 .7 2.2 1.1 3.5 1.1 3.5 0 6.4-2.9 6.4-6.4.1-3.5-2.8-6.4-6.4-6.4M12 9.5c0-.1-.2-.1-.4-.2s-1.1-.5-1.3-.6c-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.1-.4 0-.1 0-.8-.2-1.5-.8-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.4 0-.1-.4-1-.6-1.4-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.3 0-.5.2-.1.2-.6.6-.6 1.5s.7 1.8.8 1.9c.1.1 1.3 2.1 3.2 2.8 1.9.7 1.9.5 2.2.5.3 0 1.1-.4 1.3-.9.1-.4.1-.8.1-.9","viber":"13.7 6.7c0 .3.1.7-.3.8-.6.1-.5-.4-.5-.8-.4-2.3-1.2-3.2-3.5-3.7-.4-.1-.9 0-.8-.5.1-.5.5-.4.9-.3 2.3.3 4.2 2.3 4.2 4.5zM8.8 1.2c3.7.6 5.5 2.4 5.9 6.1 0 .3-.1.9.4.9s.4-.5.4-.9c0-3.6-3.1-6.8-6.7-7-.2.1-.8-.1-.8.5 0 .4.4.3.8.4zm5.7 10.2c-.5-.4-1-.7-1.5-1.1-1-.7-1.9-.7-2.6.4-.4.6-1 .6-1.6.4-1.7-.8-2.9-1.9-3.7-3.6-.3-.7-.3-1.4.5-1.9.4-.3.8-.6.8-1.2 0-.8-2-3.5-2.7-3.7-.3-.1-.6-.1-1 0C.9 1.2.2 2.7.9 4.4c2.1 5.2 5.8 8.8 11 11 .3.1.6.2.8.2 1.2 0 2.5-1.1 2.9-2.2.3-1-.5-1.5-1.1-2zM9.7 4c-.2 0-.5 0-.6.3-.1.4.2.5.5.5.9.2 1.4.7 1.5 1.7 0 .3.2.5.4.4.3 0 .4-.3.4-.6 0-1.1-1.2-2.3-2.2-2.3","email":"12.7 1c1 .5 1.8 1.2 2.3 2.2.5.9.8 1.9.8 3.1 0 .9-.1 1.8-.5 2.7-.3.9-.8 1.6-1.4 2.2-.6.6-1.4.9-2.3.9-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.7-1.2-.6 1.1-1.5 1.6-2.5 1.6-.8 0-1.5-.3-1.9-.8-.5-.6-.7-1.3-.7-2.2 0-.8.1-1.6.4-2.5S5.5 5 6.1 4.4c.7-.6 1.5-.8 2.6-.8.5 0 1 .1 1.4.2.5.1.9.3 1.3.6l-.7 4.9v.3c0 .2 0 .4.1.5.1.1.3.2.5.2.4 0 .8-.2 1.1-.7.3-.4.5-1 .7-1.6.1-.7.2-1.3.2-1.9 0-1.3-.4-2.3-1.1-3-.8-.7-1.9-1-3.4-1s-2.7.4-3.7 1.1c-.9.7-1.6 1.6-2 2.6S2.6 7.9 2.6 9c0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.7.6 2.7.6.5 0 1-.1 1.6-.2.6-.1 1.1-.3 1.5-.4l.4 1.9c-.6.2-1.2.4-1.8.5-.7.1-1.3.2-1.9.2-1.4 0-2.7-.3-3.8-.9s-1.9-1.4-2.5-2.4S.2 10.3.2 9c0-1.3.3-2.7 1-4 .6-1.4 1.6-2.5 3-3.4C5.5.7 7.2.2 9.2.2c1.3 0 2.5.3 3.5.8zm-4 8.4l.6-3.9c-.3-.1-.5-.2-.7-.2-.7 0-1.2.4-1.5 1.2-.3.8-.5 1.7-.5 2.6 0 .8.3 1.2.8 1.2s.9-.3 1.3-.9","more":"14.725 6.667H9.333V1.275C9.333.57 8.738 0 8 0S6.667.57 6.667 1.275v5.392H1.275C.57 6.667 0 7.262 0 8s.57 1.334 1.275 1.334h5.392v5.393C6.667 15.43 7.262 16 8 16s1.333-.57 1.333-1.273V9.334h5.392C15.43 9.334 16 8.738 16 8s-.57-1.333-1.275-1.333"};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Odnoklassniki service provider
 */

var config = __webpack_require__(1),
    utils  = __webpack_require__(4),
    dom    = __webpack_require__(3);

var odnoklassniki = {
    counterUrl: config.secure 
        ? undefined 
        : 'http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: 'http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',
    popupWidth: 640,
    popupHeight: 400
};

utils.set(window, 'ODKL.updateCount', function (index, counter) {
    odnoklassniki.promises[index](counter);
});

module.exports = odnoklassniki;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vkontakte service provider
 */

var config = __webpack_require__(1),
    utils  = __webpack_require__(4),
    dom    = __webpack_require__(3);

var vkontakte = {
    counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: config.protocol + '//vk.com/share.php?url={url}&title={title}',
    popupWidth: 550,
    popupHeight: 330
};

utils.set(window, 'VK.Share.count', function (index, count) {
    vkontakte.promises[index](count);
});

module.exports = vkontakte;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * Facebook service provider
 */

module.exports = {
    counterUrl: 'https://graph.facebook.com/?fields=share,og_object{likes.limit(0).summary(true),comments.limit(0).summary(true)}&id={url}&callback=?',
    convertNumber: function (counter) {
        return counter.share.share_count;
    },
    popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
    popupWidth: 600,
    popupHeight: 500
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Twitter service provider
 */

var config = __webpack_require__(1);

var twitter = {
    popupUrl: config.protocol + '//twitter.com/intent/tweet?url={url}&text={title}',
    popupWidth: 600,
    popupHeight: 450,
    click: function () {
        if (!/[\.\?:\-–—]\s*$/.test(this.options.title)) {
            this.options.title += ':';
        }

        return true;
    }
};

module.exports = twitter;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Google+ service provider
 */

var config = __webpack_require__(1),
    utils  = __webpack_require__(4),
    dom    = __webpack_require__(3);

var gplus = {
    gid: 0,
    promises: {},
    popupUrl: 'https://plus.google.com/share?url={url}',
    popupWidth: 700,
    popupHeight: 500
};

module.exports = gplus;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Pocket service provider
 */

var config = __webpack_require__(1);

var pocket = {
    popupUrl: config.protocol + '//getpocket.com/save?url={url}&format=json&callback=?',
    popupWidth: 600,
    popupHeight: 300
};

module.exports = pocket;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * Telegram service provider
 */

module.exports = {
    popupUrl: 'tg://msg?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * WhatsApp service provider
 */

module.exports = {
    popupUrl: 'whatsapp://send?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * Viber service provider
 */

module.exports = {
    popupUrl: 'viber://forward?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * E-mail service provider
 */

var config = __webpack_require__(1);

var email = {
    popupUrl: 'mailto:?subject={title}&body={url}',
    popupWidth: 0,
    popupHeight: 0
};

module.exports = email;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(1);

module.exports = {
	parent: config.name,
    className: config.name + '--expanded'
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(9),
    Factory  = __webpack_require__(58),
    utils    = __webpack_require__(4),
    dom      = __webpack_require__(3);

var factories = {};

/**
 * Fetch data
 *
 * @param {String} service
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 */
module.exports = function (service, url, options) {
    if (!factories[service]) {
        factories[service] = {};
    }

    var counters = factories[service],
        counter  = counters[url];

    if (!options.forceUpdate && counter) {
        return counter;
    }

    counter = Factory();

    var href = utils.makeUrl(options.counterUrl, {
        url: url
    });

    services[service].counter(href, counter, url);

    counters[url] = counter;

    return counters[url];
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * Factory function
 * 
 * This function returns function with following API:
 * 
 * - if passed argument is callback, then this callback would be callled
 *   if the value was changed
 * - if passed argument is anything but undefined or function, then this 
 *   function behaves like setter
 * - if argument isn't provided, then return value stored in closure
 * 
 * @param {Object} value
 * @return {Function}
 */
module.exports = function (value) {
    var listeners = [];
    
    return function (argument) {
        var type = typeof argument;
        
        if (type == 'undefined') {
            return value;
        }
        else if (type == 'function') {
            listeners.push(argument);
        }
        else {
            value = argument;
            
            listeners.forEach(function (listener) {
                listener(argument);
            });
        }
    };
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Make html element
 * @param {String} tagName
 * @param {Array|String} classNames - array of classnames or string for single classname
 * @param {Object} attributes - object with html attributes
 */
var makeElement = exports.makeElement = function makeElement(tagName) {
    var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    tagName = tagName.toLowerCase();

    var element = document.createElement(tagName);

    if (classNames) {
        if ((typeof classNames === 'undefined' ? 'undefined' : _typeof(classNames)) === 'object') {
            classNames.forEach(function (cname) {
                element.classList.add(cname);
            });
        } else if (typeof classNames === 'string') {
            element.classList.add(classNames);
        }
    }

    for (var attr in attributes) {
        if (attr === 'data') {
            var dataAttributes = attributes[attr];

            for (var _attr in dataAttributes) {
                element.dataset[_attr] = dataAttributes[_attr];
            }
        } else {
            element[attr] = attributes[attr];
        }
    }

    return element;
};

/**
 * Cache elements with [data-view] attribute and put them in given object
 * @param {Object} obj - object
 */
var cacheElements = exports.cacheElements = function cacheElements(obj) {
    var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view';

    var newObj = {},
        elements = document.querySelectorAll('[data-' + attr + ']');

    Array.prototype.forEach.call(elements, function (el) {
        var name = el.dataset[attr];
        newObj[name] = el;
    });

    Object.assign(obj, newObj);
};

/**
 * Get all siblings of specified element, excluding this element
 * @param {Element} element
 */
var getSiblings = exports.getSiblings = function getSiblings(element) {
    var siblings = [],
        sibling = element.parentNode.firstChild;

    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType !== 1 || sibling === element) continue;
        siblings.push(sibling);
    }

    return siblings;
};

/**
 * Remove all children from element
 * @param {Element} parent
 */
var removeChildren = exports.removeChildren = function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

/**
 * Remove specified element from its parent
 * @param {Element} element
 */
var removeElement = exports.removeElement = function removeElement(element) {
    if (element) {
        element.parentNode.removeChild(element);
    }
};

/**
 * Transform html string to node
 * @param {String} html
 */
var htmlStringToNode = exports.htmlStringToNode = function htmlStringToNode(html) {
    var el = document.createElement('div');

    el.innerHTML = html;

    return el.firstChild;
};

/**
 * Prepend source element before first child of target element
 * @param {Element} parent
 * @param {Element} el
 */
var prepend = exports.prepend = function prepend(parent, el) {
    parent.insertBefore(el, parent.firstChild);
};

/** Quick check if element is in DOM */
var isElementInDom = exports.isElementInDom = function isElementInDom(el) {
    return el.parentNode;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Все svg-иконки рекомендуется хранить здесь,
 * предварительно прогнав их через https://jakearchibald.github.io/svgomg/
 */
exports.default = {
  refresh: '<svg width="15" height="15"><path d="M14.62.674c-.268-.11-.495-.065-.684.136l-1.27 1.26A7.58 7.58 0 0 0 10.278.542 7.357 7.357 0 0 0 7.5 0a7.298 7.298 0 0 0-2.91.596 7.565 7.565 0 0 0-2.393 1.601A7.567 7.567 0 0 0 .596 4.59 7.298 7.298 0 0 0 0 7.5c0 1.015.199 1.986.596 2.91a7.567 7.567 0 0 0 1.601 2.393 7.57 7.57 0 0 0 2.393 1.601A7.298 7.298 0 0 0 7.5 15c1.12 0 2.185-.236 3.194-.708a7.333 7.333 0 0 0 2.578-1.997.32.32 0 0 0 .073-.22.27.27 0 0 0-.093-.2l-1.338-1.348a.376.376 0 0 0-.244-.087c-.104.013-.179.052-.224.117a4.904 4.904 0 0 1-1.748 1.436A4.925 4.925 0 0 1 7.5 12.5a4.87 4.87 0 0 1-1.938-.395 5.034 5.034 0 0 1-1.597-1.07A5.038 5.038 0 0 1 2.896 9.44 4.87 4.87 0 0 1 2.5 7.5c0-.677.132-1.323.396-1.938a5.036 5.036 0 0 1 1.07-1.597c.449-.45.98-.806 1.596-1.07A4.87 4.87 0 0 1 7.5 2.5c1.309 0 2.445.446 3.409 1.338L9.56 5.186c-.202.195-.248.42-.137.674.11.26.303.39.576.39h4.375a.6.6 0 0 0 .44-.185.6.6 0 0 0 .185-.44V1.25a.584.584 0 0 0-.38-.576z"/></svg>'
};

/***/ })
/******/ ]);
//# sourceMappingURL=all.js.map