const {  Triangle, Circle, Square } = require("./shapes");

describe("Circle", () => {
    test("should render svg for a blue circle element", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue"/>';
      const circle = new Circle();
      circle.setColor("blue");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="red"/>';
      const circle = new Circle();
      circle.setColor("red");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });

  describe("Square", () => {
    test("should render svg for a blue square element", () => {
      const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="blue"/>';
      const square = new Square();
      square.setColor("blue");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="yellow"/>';
      const square = new Square();
      square.setColor("yellow");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });

  describe("Triangle", () => {
    test("should render svg for a green triangle element", () => {
      const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="green"/>';
      const triangle = new Triangle();
      triangle.setColor("green");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="black"/>';
      const triangle = new Triangle();
      triangle.setColor("black");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });