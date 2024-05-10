var car = 'subaru';
//Test 1:Equlity comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True
//Test 2: Strict equlity comparision (True)
console.log("IS car === 'subaru'? I predicted True.");
console.log(car === 'subaru'); //True
//Test 3: Inequality comparison (False)
console.log("Is car != 'subaru'? I predicted False");
console.log(car != 'subaru'); //False
//Test 4: Strict Inequality comparison (False)
console.log("Is car !== 'subaru'? I predicted False");
console.log(car !== 'subaru'); //False
//Test 5: Less than comparison (False)
console.log("Is car < 'subaru'? I predicted False");
console.log(car < 'subaru'); //False (lexicographic comparision)
//Test 6: Greater than comparison (False)
console.log("Is car > 'subaru'? I predicted False");
console.log(car > 'subaru'); //False (lexicographic comparision)
//Test 7: Less than or equal comparision (True)
console.log("IS car <= 'subaru'? I predicted True.");
console.log(car <= 'subaru'); //True
//Test 8: Greater than or equal comparision (True)
console.log("IS car >= 'subaru'? I predicted True.");
console.log(car >= 'subaru'); //True
//Test 9: Checking truthiness (True)
console.log("IS car? I predicted True.");
console.log(car); //True (non-empty string is truthy)
//Test 10: Checking falsiness (False)
console.log("IS !car? I predicted False.");
console.log(!car); //False (negation of a truthy value)
