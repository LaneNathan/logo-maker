const inquirer = require("inquirer");
const {writeFile} = require("fs/promises");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");


class CLI {
    constructor () {

    }

    run(){
        let shape;
        inquirer
            .prompt([
                {   type:'list',
                    name:'shapeType',
                    message:'Which shape would you like?',
                    choices:['Square','Circle','Triangle'],
                },
                {
                    type:'input',
                    name:'text',
                    suffix: ' Characters have to be less than 3.',
                    message:'What would you like the logo to say?',
                }, 
                {
                    type:'input',
                    name:'textColor',
                    message:'What color would you like your text?',
                },
                {
                    type:'input',
                    name:'color',
                    message:'What color would you like your logo to be?',
                }
    ]).then(({shapeType, text, textColor, color })=> {
                let shape;
                switch (shapeType) {
                    case 'Square':
                        shape = new Square();
                        break;
                    case 'Circle':
                        shape = new Circle();
                        break;
                    case 'Triangle':
                        shape = new Triangle();
                        break;
                    default:
                        console.error(`Unsupported shape type: ${shapeType}`);
                }
    
                if (!shapeType) {
                    console.error("Shape creation failed.");
                    
                }

                shape.setColor(color);

               const svg = new SVG();
               svg.setText(text, textColor);
               svg.setShape(shape);
               return writeFile("logo.svg", svg.render())
           
    }).then(()=>{
        console.log(`Your logo was created!`);
    }).catch((error) =>{
        console.log(error);
        console.log("SOmething went wrong.:(")
    });


}}

module.exports = CLI;