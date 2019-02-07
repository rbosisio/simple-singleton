class Super {
    constructor(){
        this._instances = {}
    }
    
    get Singleton() {
        const self = this;
        return class Singleton {
            constructor() {
                if (self._instances[this.constructor.name]) throw new Error();
                self._instances[this.constructor.name] = this;
            }
        
            static getInstance(...args) {
                return self._instances[this.name] || new this(...args);
            }
        }
    }
}

module.exports = new Super().Singleton;
