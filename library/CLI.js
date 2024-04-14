const inquirer = require("inquirer");
const {writeToFile} = require("fs/promises");
const Choices = require("inquirer/lib/objects/choices");
const { type } = require("os");


class CLI {
    constructor () {

    }

    run(){
        inquirer
            .prompt([
                {   type:'list',
                    name:'shape',
                    message:'Which shape would you like?',
                    choices:['square','circle','triangle'],
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
                if(data.shape === 'square'){
                    const shape = new Square()


                }else if(data.shape === 'circle'){

                }else if(data.shape === 'triangle'){

                }
            })
    }


}

module.exports = CLI;