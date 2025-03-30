
const checkTotal = require('./functions');
const sumProduct = require('./functions');
/*
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 3 to equal 4',() => {
    expect(sum(1,3)).toBe(4);
});

*/

test('add all the total sum of 15 articles of 5',() => {
    expect(sumProduct(15,5)).toBe(75);
});

test(' check if the iva to the total', () => {
    const total = sumProduct(15,5)
    expect(checkTotal(total,16)).toBe(1200);
});