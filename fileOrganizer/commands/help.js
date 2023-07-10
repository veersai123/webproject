//12 march
function help()
{
    console.log(
        `
        These are common myCLI commands used in various situations:
        1. node main.js tree <path>
        2. node main.js organize <path>
        3. node main.js help
        `
    )
}
// function abc()
// {
//     console.log("in help.js");
// }
module.exports={
    //key value pair
    // doggy:help,
    // quty:abc
    help:help,
}