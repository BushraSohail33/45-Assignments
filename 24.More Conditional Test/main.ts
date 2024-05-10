let car : string = "subaru";
let age : number = 25;
let number : number [] = [1,2,3,4];

//String Test

//Test 1: Equlity
console.log("Is car == 'Subaru'? I predict True.")
console.log(car == 'subaru'); //True (case-insensitive)



//Test 2: Strict Equlity (False)
console.log("Is car === 'Subaru'? I predict false.")
console.log(car === 'subaru'); //False (case-sensitive)




//Test 3: Inequlity (True)
console.log("Is car != 'Toyota'? I predict True.")
console.log(car != 'Toyota'); //True



//Test 4: Inequlity (False)
console.log("Is car !== 'Subaru'? I predict false.")
console.log(car !== 'subaru'); //False (case-sensitive)



//*Lowercase Function Tests */


//Test 5: lowercase conversion (True)
console.log("Is car.tolowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); //True  (converted to lowercase)



//Test 6: lowercase conversion (False)
console.log("Is car === car.tolowerCase()? I predict False.");
console.log( car === car.toLowerCase()); //False  (original value remains uppercase)



//**Numerical Test */


//Test 7: Equlity (True)
console.log("is age == 25? I predict True.")
console.log(age == 25); //True


//Test 8: Inequlity (False)
console.log("is age != 30? I predict false.")
console.log(age != 30); //False


//Test 9: Greater than (False)
console.log("is age > 30? I predict False.")
console.log(age > 30); //False

//Test 10:Less than or equal (True)
console.log("is age <= 25? I predict True.")
console.log(age <= 25); //True

//**Logical Operators */


//Test 11: AND (True)
console.log("is age > 20 && age < 30? I predict True.")
console.log(age > 20 && age < 30); //True (both conditions met)


//Test 12: OR (False)
console.log("is age > 30 || age < 18? I predict False.")
console.log(age > 30 || age < 18); //False (neither conditions met)

//**Array Test */

//Test 13: In Array (True)
console.log("Is 3 in number? I predict True.")
console.log(3 in number); //True (checks for index existance)


//Test 14:Not in Array (False)
console.log("Is 5 not in number? I predict True.")
console.log(5 in number); //True (negation if "in" operator)
