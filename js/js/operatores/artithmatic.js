// let a=10
// let b=2

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
// console.log(a%b);


// ૧. ++ (Increment - ૧ નો વધારો)
// વેરિયેબલમાં ૧ ઉમેરે છે. પ્લેસમેન્ટના આધારે ફેરફાર થાય છે:

// ++x (Prefix - પહેલા વધારો, પછી ઉપયોગ): પહેલા વેલ્યુ ૧ થી વધશે, પછી સ્ટેટમેન્ટમાં ઉપયોગ થશે.

// x++ (Postfix - પહેલા ઉપયોગ, પછી વધારો): અત્યારની જૂની વેલ્યુ વપરાશે, અને પછી વેરિયેબલ ૧ થી વધશે.

// JavaScript
// let a = 5;
// console.log(++a); // 6 (પહેલા 5 માં 1 ઉમેરાયા, એટલે 6 થયા અને પ્રિન્ટ થયા)
// console.log(a);   // 6

// let b = 5;
// console.log(b++); // 5 (પહેલા જૂની વેલ્યુ 5 પ્રિન્ટ થઈ)
// console.log(b);   // 6 (પછી b ની વેલ્યુ 6 થઈ ગઈ)
// ૨. -- (Decrement - ૧ નો ઘટાડો)
// વેરિયેબલમાંથી ૧ બાદ કરે છે. પ્લેસમેન્ટના આધારે ફેરફાર થાય છે:

// --y (Prefix - પહેલા ઘટાડો, પછી ઉપયોગ): પહેલા ૧ બાદ થશે, પછી વેલ્યુ મળશે.

// y-- (Postfix - પહેલા ઉપયોગ, પછી ઘટાડો): જૂની વેલ્યુ મળશે, પછી ૧ બાદ થશે.

// JavaScript
// let x = 5;
// console.log(--x); // 4 (પહેલા 1 બાદ થયો, 4 મળ્યા)
// console.log(x);   // 4

// let y = 5;
// console.log(y--); // 5 (પહેલા જૂની વેલ્યુ 5 મળી)
// console.log(y);   // 4 (પછી y ની વેલ્યુ 4 થઈ)
// ૩. + (Unary Plus - નંબર માં રૂપાંતર)
// કોઈપણ સ્ટ્રિંગ (string) કે બુલિયન (boolean) વેલ્યુને નંબરમાં કન્વર્ટ કરવાનો પ્રયાસ કરે છે.

// JavaScript
// let str = "42";
// console.log(+str);  // 42 (સ્ટ્રિંગમાંથી નંબર બન્યો)

// console.log(+true); // 1 (true નો નંબર 1 થાય)
// console.log(+false);// 0 (false નો નંબર 0 થાય)
// ૪. - (Unary Negation - નંબર માં રૂપાંતર + નિશાની બદલવી)
// કોઈપણ નોન-નંબરને નંબરમાં કન્વર્ટ કરીને તેની નિશાની (sign) માઇનસ (-) કરી નાખે છે.

// JavaScript
// let str = "42";
// console.log(-str);  // -42 (નંબરમાં બદલીને માઇનસ કર્યું)

// let num = -10;
// console.log(-num);  // 10 (માઇનસ-માઇનસ પ્લસ થઈ ગયું)
// શું તમારે આના જેવા બીજા કોઈ operators (જેવા કે Assignment કે Comparison) ની પણ સમજૂતી જોઈતી છે?



// #challange-1

let price=150;
let queantity=3;


let totalcost= price * queantity;

let discount =totalcost *0.10;

let discountedPrice =totalcost -discount;

console.log("price per item",price)
console.log("queantity per item",queantity)
console.log("total cost ",totalcost)
console.log("discount",discount)
console.log()