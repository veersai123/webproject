//12 march &15 march
//entry point of my command line

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
let helpFunc=require("./commands/help");
let orgFunc=require("./commands/organize");
let treeFunc=require("./commands/tree");
// console.log(helpFunc);
// console.log(helpFunc.doggy());
switch(command)
{
    case"tree":
    treeFunc.tree(path);
    //call tre function
    // console.log("tree function called and executed successfully"+path);
    // break;
    case "organize":
        orgFunc.organize(path);
        // console.log("Oraganize function called and executed successfully"+path);
    //call oraganize function
    break;
    case "help":
        // helpFunc.help();
        console.log("help function called and executed successfully"+path);
    // call help function
    
    break;
    default:
        console.log("command not recognized:/")
        break;
}