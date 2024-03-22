#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "enter first number",
        type: "number", name: "firstnumber" },
    { message: "enter second number", type: 'number',
        name: "secondnumber"
    }, { message: "Select any one to apply action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"]
    }
]);
if (answer.operator === "ADDITION") {
    console.log("the answer is become ", answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log("the answer is become ", answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "DIVISION") {
    console.log("the answer is become ", answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log("the answer is become ", answer.firstnumber * answer.secondnumber);
}
else {
    console.log("please enter correct operator for calculation");
}
console.log(answer);
