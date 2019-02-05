
class Super {
    constructor(){
        this._instance
    }
    
    get Singleton() {
        const self = this;
        return class Singleton {
            constructor() {
                if (self._instance) throw new Error();
                self._instance = this;
            }
        
            static getInstance(...args) {
                return self._instance || new this(...args);
            }
        }

    }

}

module.exports = Super;
