const SVG = require("./svg");
const { Triangle } = require("./shapes");

test("should render a 300 x 200 svg element", () => {
    const expectedSvg ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvg);
  });

  test("should append text element", () =>{
    const expectedSvg ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">Yes</text></svg>';
  const svg = new SVG();
  svg.setText("Yes", "blue");
  expect(svg.render()).toEqual(expectedSvg);
  });

  test(" should set text message and color", () =>{
    const expectedSvg ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">No</text></svg>';
    const svg = new SVG();
    svg.setText("No","black");
    expect(svg.render()).toEqual(expectedSvg);
  });

  test(" should throw error if message is longer than 3 character", () => {
    const expectedError = new Error("Text cannot e longer than 3 characters!!");
    const svg = new SVG;
    expect(() => svg.setText("nope,blue")).toThrow(expectedError);
  });

  test("should include a shape", () => {
    const expectedSvg =
'<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="orange" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">RZA</text></svg>';
    const svg = new SVG();
    svg.setText("RZA", "yellow");
    const square = new Square();
    square.setColor("orange");
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
  });


