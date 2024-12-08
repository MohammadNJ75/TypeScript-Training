
// Type annotations aren't necessary when Typescript can infer
let student = "John";
let grade1 = 6;
let grade2  = 8;
// When it can't, it is recommended to explicitly define the type
let isApproved : boolean;

// Type annotation for function arguments
function average(num1:number, num2:number) :number{
    return (num1 + num2) / 2;
}
isApproved =average(grade1,grade2)>7;
// Arrays

// Typescript infers the type as an array of strings (string[])
let grades = ["8", "7", "9", "5", "6"];

// Explicitly declare the type of the argument as an array of strings
function finalGrade(grades : string[]) {
    let sum = 0;
    grades.forEach(grade => sum += parseFloat(grade));
    return sum / grades.length;
}

// Objects

// You can define a template for an object with an Alias or an Interface:

// Type Alias for Learner

type Learner = {
    name: string, 
    grades: string[],
    // Use ? to define an optional property for the object
    isApproved?: boolean
};

// You can do the same thing with interfaces, but these will give one extra
// feature: extending interfaces

interface Person {
    name: string
};

// interface for Student, extended from Person
// It gets 'name' plus more properties
interface Student extends Person {
    grades: string[],
    // Use ? to define an optional property for the object
    isApproved?: boolean
};


// Now you can declare the type of the function argument as Student
function printStudent(student : Student) {
    console.log("Name: ", student.name);
    console.log("Final grade: ", finalGrade(student.grades));
    // Since isApproved is optional, we need to verify if it exists before using it
    if (typeof student.isApproved == "boolean") {
        console.log("Is Approved: ", student.isApproved);
    }
}

// Declare the elements of the array as the type Student
let students : Student[] = [
    {
        name: "John",
        grades: ["8", "7", "10", "6"],
        isApproved: false
    },
    {
        name: "Sara",
        grades: ["8", "7"]
    }
];


// Literal Types

// Accept only one value: 'small'. No other string will be valid
let size: "small";

// Union Types

// Acept both strings and numbers
let id: string | number;

// Accept only "small" or "large" as the argument of the function

function buttonStyle(size: "small" | "large") {
    let style: {height: string, width: string};

    if (size == "small") {
        style = {
            height: "60px",
            width: "100px"
        }
    } else {
        style = {
            height: "80px",
            width: "140px"
        }
    }
    return style;
}

// Null and Undefined

// Accept only string, number and also null/undefined
// Be careful because TS will only check if the code works for undefined values
// if you have 'strictNullChecks' set to true in the config file
function printId(id : string | number | undefined) {
    if (typeof id == "string") {
        console.log(id.toUpperCase());
    } else if (typeof id == "number") {
        console.log(id);
    } else {
        console.log("No Id");
    }
}

// Any

// Whenever you don't definer any type for a variable,
// Typescript infers the type as 'any'
let person;

// You need to avoid this because from that point on
// Typescript won't do any type checking
person = 2;
person = "test"
person = new Date();

// There is a flag you can use on the ts config file to
// raise the 'any' type inference as an error but
// it only works with functions

// Typescript will raise the 'any' inference as an error
// function doubleNum(num) {
//     console.log( num.toFixed(2));
// }

// If you explicitly define the type as any, on the other hand
// Typescript won't do type checking. Be careful as this can
// cause bugs in your code as you can guess from the below function
function badFunction(num : any) {
    console.log( num.toUpperCase());
    console.log( num.toFixed());
    console.log( new Date(num));
}




// HTML Elements

// When we define a specific HTML Element type
// Typescript will help us validate our code
function getName(input : HTMLInputElement) {
    let name = input.value;
    console.log(name);
}

// We do type assertion when we have information Typescript can't know about
// Like what type of element a selector will produce
let input = document.querySelector("input#firstName") as HTMLInputElement;
getName(input);
































