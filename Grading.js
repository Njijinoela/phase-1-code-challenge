// check for the marks and return appropriate grade.
function studentGrading(Marks) {
    if (Marks > 79 && Marks <=100) {
        return'A'; 

    }else if (Marks >= 60 && Marks <= 79) {
        return 'B';

    }else if (Marks >= 49 && Marks <= 59) {
        return 'C';

    }else if (Marks >= 40 && Marks <= 48) {
        return 'D';

    }else if (Marks < 40) {
        return 'E';
    } else {
        return null;
    }  
}

//prompts the user for input and validates the input is between 0-100 and calls studentGrading to determine the grade.
//use Prompt for Input and alert for OUtput
//parse(converts input to number)
function main () {
    const input = prompt("Enter your Marks");

    const Marks = parseFloat(input);

    if (!isNaN(Marks) && Marks >=0 && Marks <=100) {
        const grade = studentGrading(Marks);
        alert(`The grade is ${grade}`);
        
    } else {
        alert ("Please enter a value between 0 and 100");
    }
}
// call out the main function to run the program
main();