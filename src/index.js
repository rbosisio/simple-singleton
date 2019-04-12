module.exports = (_Class, opts = {}) => {
    let _instance = null;
    return class extends _Class {
        constructor(...args) {
            super(...args);
            if (_instance) {
                if (opts.errorOnNew) throw new Error('Already has an instance. Try .getInstance() instead.');
                return _instance;
            }
            _instance = Object.setPrototypeOf(this, _Class.prototype);
        }
    
        static getInstance(...args) {
            return _instance || new this(...args);
        }
    };
};
