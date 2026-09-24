// Data TypeDescriptionExampletypeof outputStringTextual data wrapped in quoteslet name = "Alice";"string"NumberFloating-point/integer numberslet age = 30;"number"BooleanLogical true/falselet isLoggedIn = true;"boolean"BigIntIntegers larger than $2^{53}-1$let bigNum = 9007199254740991n;"bigint"SymbolUnique, immutable identifierlet sym = Symbol("id");"symbol"NullIntentional absence of valuelet empty = null;"object" (historic JS quirk)UndefinedDeclared variable without valuelet notAssigned;"undefined"JavaScript// Primitives in action
// const str = "Hello, World!";
// const num = 42;
// const bool = false;
// const big = 1234567890123456789012345678901234567890n;
// const sym = g = Symbol("uniqueKey");
// const empty = null;
// let uninit;

// console.log(typeof str);    // "string"
// console.log(typeof num);    // "number"
// console.log(typeof bool);   // "boolean"
// console.log(typeof big);    // "bigint"
// console.log(typeof sym);    // "symbol"
// console.log(typeof empty);  // "object"
// console.log(typeof uninit); // "undefined"
// 2. Reference (Non-Primitive) Data TypesReference types point to a memory location in the heap. Assigning or copying them copies the reference, not the actual data.Data TypeDescriptionExampletypeof outputObjectKey-value pairs (collection of properties)let user = { name: "Bob", age: 25 };"object"ArrayOrdered list/collection of valueslet scores = [95, 88, 76];"object"FunctionReusable block of code (callable object)function greet() { return "Hi!"; }"function"MapCollection of key-value pairs (any key type)let map = new Map([["key", "val"]]);"object"SetCollection of unique valueslet set = new Set([1, 2, 3]);"object"DateDate and time representationlet now = new Date();"object"JavaScript// Reference types in action
// const person = { name: "Alice", role: "Developer" };
// const colors = ["red", "green", "blue"];
// function add(a, b) { return a + b; }
// const mapExample = new Map(); mapExample.set("host", "localhost");
// const setExample = new Set([1, 2, 2, 3]); // keeps unique: {1, 2, 3}
// const dateExample = new Date();

// console.log(typeof person);      
// console.log(typeof colors);      
// console.log(typeof add);         
// console.log(typeof mapExample);  
// console.log(typeof setExample);  
// console.log(typeof dateExample); 
// Quick Heap/Stack Demonstration (Why Reference matters):JavaScriptlet obj1 = { score: 10 };
// let obj2 = obj1; 
// obj2.score = 50;
// console.log(obj1.score); 
// Summary Acronym Note (NNSSBBU)Your mnemonic NNSSBBU for primitives covers:Number, NullString, SymbolBoolean, BigIntUndefinedWould you like to dive deeper into how deep cloning works for reference types to avoid accidental mutations?