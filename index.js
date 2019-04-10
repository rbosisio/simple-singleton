
module.exports = (_Class, opts = {}) => {
    const _instances = {};
    return class Singleton extends _Class {
        constructor(...args) {
            super(...args);
            if (_instances[_Class.name]) {
                if (opts.errorOnNew) throw new Error();
                return _instances[_Class.name];
            }
            _instances[_Class.name] = Object.setPrototypeOf(this, _Class.prototype);
        }
    
        static getInstance(...args) {
            return _instances[this.name] || new this(...args);
        }
    };
};
