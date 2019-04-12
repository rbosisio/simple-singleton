const singleton = require('../src/index');

class TestClass {
  constructor(prop) {
    this.prop = prop;
  }
  
  get Prop() {
    return this.prop;
  }
}

describe('Simple Singleton Tests', () => {
  test('if initialize two instances they are the same', () => {
    const SingletonTestClass = singleton(TestClass);
    
    const firstInstance = new SingletonTestClass('first');
    const secondInstance = new SingletonTestClass('second');
    
    expect(firstInstance).toStrictEqual(secondInstance);
  })
  
  test('getInstance always return the same instance', () => {
    const SingletonTestClass = singleton(TestClass);
    
    const firstInstance = SingletonTestClass.getInstance('first');
    const secondInstance = SingletonTestClass.getInstance();
    
    expect(firstInstance).toStrictEqual(secondInstance);
  })
  
  test('two diferent singleton classes should return diferent instances', () => {
    const SingletonTestClass = singleton(TestClass);
    const SingletonTestClassTwo = singleton(TestClass);
    
    const firstInstance = SingletonTestClass.getInstance('first');
    const secondInstance = SingletonTestClassTwo.getInstance('second');
    
    expect(firstInstance).not.toStrictEqual(secondInstance);
    expect(firstInstance.Prop).toStrictEqual('first');
    expect(secondInstance.Prop).toStrictEqual('second');
  })
  
    test('errorOnNew flag active should throw error on second initalization', () => {
    const SingletonTestClass = singleton(TestClass, { errorOnNew: true });
    
    const firstInstance = new SingletonTestClass('first');
    
    expect(() => new SingletonTestClass('second'))
      .toThrowError('Already has an instance. Try .getInstance() instead.');
  })
})