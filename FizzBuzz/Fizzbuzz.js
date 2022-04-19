    const array = Array.from({length: 100}, (_, index) => index + 1);
    /**
     * Version 1
     * with if condition
     */

     for (let index = 0; index < array.length; index++) {
         const element = array[index];
         if (element % 3 == 0 && element % 5 == 0) {
            console.log(element +": FizzBuzz");
        } else if (element % 3 == 0) {
            console.log(element + ": Fizz");
            
        }else if (element % 5 == 0) {
            console.log(element + ": Buzz");
        }
     }
     
     
    /**
     * Version 2
     * with Conditional ternary operator
     */
     for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element % 3 == 0 && element % 5 == 0 ? console.log(element +": FizzBuzz")
        : element % 3 == 0 ? console.log(element + ": Fizz")
        : element % 5 == 0 ? console.log(element + ": Buzz")
        : console.log(element);
    }

    /**
     * Version 3
     * with foreach loop
     */
    function checkNumber(number) {
        number % 5 == 0 && number % 3 == 0
        ? console.log(element +": FizzBuzz")
        : number % 3 == 0 
        ? console.log(element + ": Fizz")
        : number % 5 == 0 
        ? console.log(element + ": Buzz")
        : console.log(number);
    }

    array.forEach(checkNumber);