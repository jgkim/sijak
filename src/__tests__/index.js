import Hello from '../index';

test('Hello.toString', () => {
  const hello = new Hello('Test');
  expect(hello.toString()).toBe('Hello, Test!');
});
