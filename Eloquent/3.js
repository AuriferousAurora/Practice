const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    console.log("base " + base + "exponent " + exponent);
    return base * power(base, exponent - 1);
  }
}
function findSolution(target) {
  // Function 'findSolution' declares and defines the function 'find' and then invokes it after defining it with the argument 'current' bound to the number 1 and the argument 'history' bound to the string '1'.

  // ROUND 2 // Now the same program is going to be run again with the value of 6 as the current argument and the history variable equal to '(1 + 5)'.

  // ROUND 3 // Same deal again.

  // ROUND 4 // Here's where shit gets interesting.
  function find(current, history) {
    // The first time 'find' is invoked, 'current' is never equal to 'target' unless the argument 'findSolution' is invoked with is less than or equal to 1. Therefore most solutions will proceed to the next statement.

    // ROUND 2 // The first statement will check to see if 6 is bigger than 13. It is not, so control flow passes to the next conditional statement.

    // ROUND 3 // Still false.

    // ROUND 4 // 16 is not equal to 13, so this skips to the next conditional statement.
    if (current == target) {
      return history;
    // This statement checks to see if the 'current' value is larger than the 'target' variable. The first time through this won't be true, so the control flow will move to the next statement.

    // ROUND 2 // This statement is similarly evaluated to false, so control flow skips to the final conditional statement.

    // ROUND 3 // Still false.

    // ROUND 4 // This time, 16 is bigger than target, so this conditional returns the value of null. However, where does it return the value of null to? It is returned to the last time 'find' was invoked, which was done in round 3, so the 'or' logical operator calls 'find' with current (11) multiplied by 3 (33) and the history augmented from '((1 + 5) + 5)' to  '(((1 + 5) + 5)* 3)'. Make sense now? That's gonna be too big as well, so the program will return 'null' to the invocation of 'find' that was called in the second round. That time it will multiply 6 times 3 and return 18. Still too big. So now it's gonna go all the way back to the first invocation and multiply 1 by 3 by invoking the second version of find in the else statemtent. That will run but when it runs a second time the program will still invoke the first version of find in the else statement, augmenting the current value (3) by adding 5 and updating the history accordingly. One more pass through will change 8 to 13 and that will trigger the first 'if' conditional statement to evaluate to true, returning the history variable that was set on the last go-round, and that will be returned from the original invocation of find from line 62 which will then log history on line 65.
    } else if (current > target) {
      return null;
    } else {
      // Here, the program invokes the function 'find' with the 'current' argument increased by five and the 'history' argument changed to the string "('history' + 5)".

      // ROUND 2 // Now the program calls 'find' again, this time with the 'current' argument increased from 6 to 11 and the history argument changed from '(1 + 5)' to '((1 + 5) + 5)'.

      // ROUND 3 // Current is now set equal to 16 and history is augmented to describe it.
      return find(current + 5, `(${history} + 5)`) ||
              find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
  }

function min(a, b) { if(a > b) { return b; } else { return a; }};

function isEven(n) {
  let test = n - 2
  if (test == 0) {
    return true;
  } else if (test == 1) {
    return false;
  } else {
    return isEven(test);
  }
}

console.log(isEven(4));