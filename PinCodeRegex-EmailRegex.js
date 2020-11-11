
//Pincode Verification Using Regex

let pinCodeRegex = "^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$";

//UC1
let user1 = 400088;
let UC1Test = RegExp(pinCodeRegex).test(user1);
console.log("result -" + UC1Test);

//UC2
let user2 = "A400088";
let UC2Test = RegExp(pinCodeRegex).test(user2);
console.log("result -" + UC2Test);

//UC3
let user3 = "400088B";
let UC3Test = RegExp(pinCodeRegex).test(user3);
console.log("result -" + UC3Test);

//UC4
let user4 = '400 088';
let UC4Test = RegExp(pinCodeRegex).test(user4);
console.log("result -" + UC4Test);

//Email Verification Using Regex

let emailRegex="[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}";

//UC1
let UC1test=RegExp(emailRegex).test("abc@.");
console.log("result -" + UC1test);

//UC2
let UC2test=RegExp(emailRegex).test("abc@bridgelabz.");
console.log("result -" + UC2test);

//UC3
let UC3test=RegExp(emailRegex).test("abc@bridgelabz.co");
console.log("result -" + UC3test);

//UC4
let UC4test=RegExp(emailRegex).test("abc.xyz@bridgelabz.co");
console.log("result -" + UC4test);

//UC5
let UC5test=RegExp(emailRegex).test("abc.xyz@bridgelabz.co.in");
console.log("result -" + UC5test);