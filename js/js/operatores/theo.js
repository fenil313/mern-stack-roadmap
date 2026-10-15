// an operatoes is a  symbol that tells the computer  do something with  values

// let result=5+3; '+' ope. it tells js to add 5 & 3 , 5 and 3 are oprands.

// oprands are value
// opratores do something to thodse value.


// Here is the categorization of operators based on the number of operands from the image [cite: 1]:

// 1 (Unary) [cite: 1]

// Arithmetic: +, -, ++, -- [cite: 1]
// Logical: ! [cite: 1]
// Type-checking: typeof, void, delete [cite: 1]
// Binary [cite: 1]

// Arithmetic: +, -, *, /, %, ** [cite: 1]

// Comparison: ==, ===, !=, !==, >, <, >=, <= [cite: 1]

// Logical: &&, || [cite: 1]

// Assignment: =, +=, -=, /=, %=, **= [cite: 1]

// Bitwise: &, |, ^, <<, >> [cite: 1]

// 3 (Ternary) [cite: 1]

// Conditional: Condition ? true : false [cite: 1]

// Brief Knowledge Check
// Unary: Operates on a single operand (e.g., flipping a boolean with !, incrementing with ++, or checking data types with typeof).

// Binary: Operates on two operands, placed between them (e.g., addition a + b, comparison a === b, or logical AND a && b).

// Ternary: Operates on three operands (condition ? exprIfTrue : exprIfFalse), acting as a compact inline if-else statement.Here is the categorization of operators based on the number of operands from the image [cite: 1]:

// 1 (Unary) [cite: 1]

// Arithmetic: +, -, ++, -- [cite: 1]

// Logical: ! [cite: 1]

// Type-checking: typeof, void, delete [cite: 1]

// Binary [cite: 1]

// Arithmetic: +, -, *, /, %, ** [cite: 1]

// Comparison: ==, ===, !=, !==, >, <, >=, <= [cite: 1]

// Logical: &&, || [cite: 1]

// Assignment: =, +=, -=, /=, %=, **= [cite: 1]

// Bitwise: &, |, ^, <<, >> [cite: 1]

// 3 (Ternary) [cite: 1]

// Conditional: Condition ? true : false [cite: 1]

// Brief Knowledge Check
// Unary: Operates on a single operand (e.g., flipping a boolean with !, incrementing with ++, or checking data types with typeof).

// Binary: Operates on two operands, placed between them (e.g., addition a + b, comparison a === b, or logical AND a && b).

// Ternary: Operates on three operands (condition ? exprIfTrue : exprIfFalse), acting as a compact inline if-else statement.





// Short-circuiting in JavaScript refers to the way logical operators (&&, ||, and ??) evaluate expressions left-to-right, allowing you to control flow and return values based on truthiness/nullishness without writing full if statements [cite: 1].

// 1. || (Logical OR)
// Behavior: Returns the first truthy value or the last value if none are truthy [cite: 1].

// Use case: Useful for setting defaults [cite: 1].

// Examples:

// JavaScript
// let result = "" || "Guest" || null || 23;
// console.log(result); // "Guest" [cite: 1]

// let result2 = undefined || 0 || null;
// console.log(result2); // null [cite: 1]
// 2. && (Logical AND)
// Behavior: Returns the first falsy value or the last value if none are falsy [cite: 1].

// Use case: Commonly used for conditional execution/guard checks [cite: 1].

// Examples:

// JavaScript
// let result = "Ram" && true && undefined && 55;
// console.log(result); // undefined [cite: 1]

// let isAuthenticated = true;
// let user = "Manas Kumar Lal";
// let result2 = isAuthenticated && user;
// console.log(result2); // "Manas Kumar Lal" [cite: 1]
// 3. ?? (Nullish Coalescing)
// Behavior: Returns the right-hand value only if the left-hand value is null or undefined [cite: 1].

// Advantage: Better than || when dealing with falsy values like 0 or "" that are still valid inputs [cite: 1].

// Examples:

// JavaScript
// let result = null ?? "Default";
// console.log(result); // "Default" [cite: 1]

// let result2 = 0 ?? "MKL";
// console.log(result2); // 0 [cite: 1]