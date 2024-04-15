const inquirer = require("inquirer");
const {writeFile} = require("fs/promises");
const choices = require("inquirer/lib/objects/choices");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");


class CLI {
    constructor () {

    }

    run(){
        inquirer
            .prompt([
                {   type:'list',
                    name:'shape',
                    message:'Which shape would you like?',
                    choices:['Square','Circle','Triangle'],
                },
                {
                    type:'input',
                    name:'text',
                    message:'What would you like the logo to say?',
                },
                {
                    type:'input',
                    name:'color',
                    message:'What color would you like your logo to be?',
                }
            ]).then((data)=> {
                if(data.shape === 'Square'){
                    const shape = new Square();

                }else if(data.shape === 'Circle'){
                    const shape = new Circle();

                }else if(data.shape === 'Triangle'){
                    const shape = new Triangle();

                }
                shape.setColor(data.color);

                const svg = new SVG();
                svg.setText(text);
                svg.setShape(shape);
           
    })


}}

module.exports = CLI;