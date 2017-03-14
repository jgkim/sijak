// @flow

class Hello {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  toString() {
    return `Hello, ${this.name}!`;
  }
}

if (!module.parent) {
  // eslint-disable-next-line no-console
  console.log(new Hello('Sijak').toString());
}

export default Hello;
