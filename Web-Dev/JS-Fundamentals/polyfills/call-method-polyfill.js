const person = {
  name: "Lalit",
};

function getName(city, hobby) {
  console.log(`Name is : ${this.name}`);
}

// polyfill of .call() method
function customCall(context, ...args) {
  if (!context) {
    context = globalThis;
  }

  // for creating a unique key on the context to attach the function
  const sym = Symbol();

  context[sym] = this;

  const result = context[sym](...args);

  delete context[sym];

  return result;
}

Function.prototype.customCall = customCall;

getName.customCall(null);
