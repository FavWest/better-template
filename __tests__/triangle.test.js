import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const myTriangle = new Triangle(2,4,5);
    expect(myTriangle.side1).toEqual(2);
    expect(myTriangle.side2).toEqual(4);
    expect(myTriangle.side3).toEqual(5);
  });
});