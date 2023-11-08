// STEP1.   Make sure to create a repo called "My Javascript Journey" and link this folder with that repository.
//          You should not have any issues, if you are having issues, go back to the git note or ask your friend 
//          before asking your lecturer for help.(You cannot forget git commands)
// STEP2.   Every push to github must be to a branch and a pull request has to be made to merge the branch with main. 
//          Any pushes to main will result in you having to restart from the beginning(from creating a repo).
// STEP3.   Follow the order : 1 create repo, 2 run all commands necessary to link these to folders, 
//          3 create and work on branch, 4 push branch and use a pull request to merge. 5 PULL YOUR CODE TO LOCAL REPO BEFORE CREATING ANOTHER BRANCH
// STEP4.   You must link this javascript file to an index.html page, taking FOLDER STRUCTURE into consideration.

//INTO TO JAVASCRIPT EXERCISE

// A. TASK 1:VARIABLES and OPERATORS
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.
   var language = "JavaScript";
   var score = 10;


// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.

    let length = 10;
    let width = 5;

    let area = length * width;

    console.log(`The area of the rectangle is ${area}`);


// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2.
   
    var num1 = 10;
    var num2 = 4;

    var remainder = num1 % num2;

    console.log(`The remainder when num1 is divided by num2 is ${remainder}`);

// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks
   let num1 = 10;
   let num2 = 4;

   let quotient = Math.floor(num1 / num2); 
   let remainder = num1 % num2; 

   console.log(`${num1} / ${num2} = ${quotient} remainder ${remainder}`);


// B. Task 2:Data Types
// 1. Define the following data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]
     Integer: '30','10','85'

     Decimal: '3.85','9.66','25.3'

     String: "Collen", "1288", 

     Array: '["car","table","radio"]'
             '[1,2,3]'

     object: {
        "name": "John Doe",
        "age": 30,
        "city": "New York",
        "isStudent": false
          }
// 2. Once you’ve created the variables, display them to the console
      
    var integer = 42;
     var decimal = 3.14;
    var string = "Hello, World!";
    var array = ["car", "table", "radio"];
     var object = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "isStudent": false
           };


    console.log("Integer:", integer);
    console.log("Decimal:", decimal);
    console.log("String:", string);
    console.log("Array:", array);
    console.log("Object:", object);

      
// 3. Use the ‘typeof’ function to check each variable
     let numberVariable = 42;
     let stringVariable = "Hello, world!";
     let booleanVariable = true;
     let objectVariable = { key: "value" };
     let arrayVariable = [1, 2, 3];
     let functionVariable = function() { return "I'm a function"; };
     let undefinedVariable;
     let nullVariable = null;

     console.log(typeof numberVariable); 
     console.log(typeof stringVariable); 
     console.log(typeof booleanVariable); 
     console.log(typeof objectVariable); 
     console.log(typeof arrayVariable); 
     console.log(typeof functionVariable); 
     console.log(typeof undefinedVariable);
     console.log(typeof nullVariable); 

// 4. Create an array with numbers and strings. Comment what data type you expect this tobe. Then use the ‘typeof’ function on this array
    let mixedArray = [66, "Picture", 18.5, "JavaScript"];

    console.log(typeof mixedArray); // Outputs: "object"

// Check the data type of each element in the array
    mixedArray.forEach((element, index) => {
    console.log(`Element at index ${index} is of type: ${typeof element}`);
    });

// 5. Create a null variable and an undefined variable
     let nullVariable = null;
     let undefinedVariable;

     console.log(nullVariable); 
     console.log(undefinedVariable); 


// ***********C. Task 3. functions and contional statements************
// N.B. READ WITH UNDERSTANDING!!!
//  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideration!
//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
//      Then display the message in the console, "The amount after tax is ...".
//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “num1” and “num2” and 
//      displays the larger value.
//  4.  Write a function that determines whether “num1” is odd or even and displays the
//      result. (Tip: remember the modulus operator %)
//  5.  Next, write a JavaScript conditional statement to sort the three numbers(1stNum, 2ndNum, 3rdNum) from largest to smallest.

