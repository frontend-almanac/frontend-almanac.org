
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
};

class LocalStorageMock {
    constructor() {
        this.store = {};
    }
    clear() {
        this.store = {};
    }
    getItem(key) {
        return this.store[key] || null;
    }
    setItem(key, value) {
        this.store[key] = value.toString();
    }
    removeItem(key) {
        delete this.store[key];
    }
}
global.mockStorage = new LocalStorageMock;

Object.defineProperty(document, 'cookie', {
    value: 'foo=bar; test=one; bananna=apple',
});
Object.defineProperty(document, 'currentScript', {
    value: {
        src: '/'
    },
});


class Element {
    constructor() {
        this.top = 384;
        this.bottom = 538;
    }
    getBoundingClientRect() {
        return {
            top: this.top,
            bottom: this.bottom,
            height: 150,
            left: 330,
            right: 730,
            width: 400,
            x: 330,
            y: 160
        };
    }
};
class HTMLDocument extends Element { };
global.Element = Element;
global.HTMLDocument = HTMLDocument;

class URL {
    constructor(link) {
        this.href = link;
    }
};
global.URL = URL;


global.__webpack_public_path__ = '/';


global.__cookies = [];
global.setCookie = function (name, value, options) {
    global.__cookies[name] = value;
};
global.getCookie = function (name) {
    return global.__cookies[name];
};
