// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.


// // نسول المستخدم على السمية ديالو
// var smiya = prompt("شنو سميت؟");

// // نديرو تمارين، كل تمرين فيه عدد ديال المرات و نحسبو النقاط
// var ism1 = "Push-ups";
// var ism2 = "Squats";
// var ism3 = "Jumping Jacks";

// // نسولو المستخدم على كل تمرين
// var marat1 = prompt("شحال درتي من " + ism1 + "?");
// var marat2 = prompt("شحال درتي من " + ism2 + "?");
// var marat3 = prompt("شحال درتي من " + ism3 + "?");

// // نحولوهم لأرقام
// marat1 = Number(marat1);
// marat2 = Number(marat2);
// marat3 = Number(marat3);

// // نحسبو النقاط: كل وحدة فيها 10 نقاط
// var points1 = marat1 * 10;
// var points2 = marat2 * 10;
// var points3 = marat3 * 10;

// // نحسبو المجموع
// var total = points1 + points2 + points3;

// // نعرضو النتيجة فالكونسول
// console.log("🔔 المستخدم: " + smiya);
// console.log(ism1 + ": " + points1 + " نقطة");
// console.log(ism2 + ": " + points2 + " نقطة");
// console.log(ism3 + ": " + points3 + " نقطة");
// console.log("🔵 المجموع الكلي: " + total + " نقطة 🎯");




// // تعريف class يمثل شخص
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
//     }
//   }
  
//   // تعريف list لتخزين الأشخاص
//   let people = [];
  
//   // دالة لإضافة شخص جديد عبر prompt
//   function addPerson() {
//     let name = prompt("Enter name:"); // إدخال الاسم
//     let age = parseInt(prompt("Enter age:")); // إدخال العمر
//     let newPerson = new Person(name, age); // إنشاء object جديد من class Person
//     people.push(newPerson); // إضافة الشخص للقائمة
//   }
  
//   // دالة لعرض الأشخاص
//   function showPeople() {
//     console.log("People list:");
//     for (let person of people) {
//       person.greet(); // مناداة دالة greet لكل شخص في القائمة
//     }
//   }
  
//   // الدالة الرئيسية التي تطلب الاختيارات من المستخدم
//   function main() {
//     let option;
//     do {
//       option = prompt("Choose: 1-Add Person, 2-Show People, 3-Exit");
  
//       if (option === "1") {
//         addPerson(); // إضافة شخص
//       } else if (option === "2") {
//         showPeople(); // عرض الأشخاص
//       }
//     } while (option !== "3");
  
//     console.log("Goodbye!"); // رسالة وداع عند الخروج
//   }
  
//   main(); // بدء تشغيل البرنامج

  
//   ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.




// var username = prompt("dakhal ismak:");
// var password = prompt("dakhal kalimat lmoror:");

// if (username === "user0123" && password === "pass0123") {
//   alert("tama tasjil aldukhul binajahi! mrhbaan bik fi hisabik.");
// } else {
//   alert("fashal tasjil aldukhuli. asm almustakhdim 'aw kalimat almurur ghayr sahiha.");
// }


// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.


// let choix = prompt("Ktbt: signup, login, change password, aw exit?");

// if (choix === "signup") {
//   let smiya = prompt("Smitk kamla:");
  
//   if (smiya !== "exit") {
//     smiya = smiya.trim(); // nhayd espaces men lbda w nihaya

//     // Check 1: kayn chi ra9m aw @ w b7alhom?
//     if (smiya.match(/[0-9@#\$%\^&\*\(\)\+=]/)) {
//       console.log("❌ Smiya ma khasach tkoun fiha a9am aw @ w b7alhom");
//     } 
//     else {
//       // Check 2: smiya khasha tkoun fiha +5 7orouf bla espaces
//       let smiBlaEspaces = smiya.replaceAll(" ", "");
//       if (smiBlaEspaces.length < 5) {
//         console.log("❌ Smiya khas tkoun fiha 5 7orouf aw aktar");
//       } 
//       else {
//         // Check 3: Kol kelma tbda b 7arf kbiiir
//         let kelmat = smiya.split(" ");
//         let smiS7i7 = "";

//         for (let i = 0; i < kelmat.length; i++) {
//           let kelma = kelmat[i];
//           if (kelma.length === 0) continue;
//           let luwel = kelma[0].toUpperCase();
//           let b9i = kelma.slice(1).toLowerCase();
//           smiS7i7 += luwel + b9i + " ";
//         }

//         smiS7i7 = smiS7i7.trim();

//         if (smiya !== smiS7i7) {
//           console.log("❌ Kol kelma khas tbda b 7arf kbiiir, b9i ykoun sghir");
//         } else {
//           console.log("✅ Smiya tsajlat b naja7:", smiS7i7);
//         }
//       }
//     }
//   } else {
//     console.log("➡️ Rje3na lmenu");
//   }
// }


// # Email:
// - Check for leading or trailing spaces.
// - Convert all letters to lowercase.
// - Do not save the Email if it has spaces in the middle.
// - Do not save the Email if it has fewer than 10 characters (excluding spaces).
// - Do not save the Email if it does not contain exactly one "@" symbol.
// - Ensure the email is unique.






// 7afdin emails sb9in f array
// var emails = ["test@example.com", "user@gmail.com"];

// var email = prompt("Ktbt Email dyalk:");
// if (email !== "exit") {
//   email = email.trim(); // nhayd espaces men lbda w nihaya
//   email = email.toLowerCase(); // ndir kolchi lowercase

//   // Check 1: kayn espace f wasst?
//   if (email.includes(" ")) {
//     console.log("❌ Email ma khasch fih espaces f wasst.");
//   }
//   // Check 2: ch7al fih mn 7arf bla espaces
//   else if (email.replaceAll(" ", "").length < 10) {
//     console.log("❌ Email khaso ykoun fih 10 7orouf aw aktar.");
//   }
//   // Check 3: wach fih wahd @ bark
//   else if (email.split("@").length !== 2) {
//     console.log("❌ Email khaso ykoun fih wahd @ bark.");
//   }
//   // Check 4: wach email unique (ma kaynach f list)
//   else if (emails.includes(email)) {
//     console.log("❌ Had l'email tsajel mn 9bl.");
//   }
//   else {
//     emails.push(email); // n9aydouh f list
//     console.log("✅ Email tsajel b naja7:", email);
//   }
// }


// # Age:
// - Check for leading, trailing, or middle spaces.
// - Verify that only digits are entered.
// - Do not save the Age if it has 0 characters, or if it has 3 characters or more.



// var age = prompt("Ch7al f 3mrk:");

// if (age !== "exit") {
//   // Check 1: wach kayn espace f lbda, lnihaya, wla f wasst
//   if (age.trim() !== age || age.includes(" ")) {
//     console.log("❌ L3mr ma khasch fih espaces.");
//   }
//   // Check 2: wach ghir a9am?
//   else if (!age.match(/^[0-9]+$/)) {
//     console.log("❌ L3mr khas ykoun fih ghir a9am.");
//   }
//   // Check 3: wach fih chi 7arf?
//   else if (age.length === 0 || age.length >= 3) {
//     console.log("❌ L3mr khas ykoun 1 wla 2 7rouf bark.");
//   }
//   else {
//     console.log("✅ L3mr tsajel b naja7:", age);
//   }
// }

// # Password:
// - Check for leading or trailing spaces.
// - Do not save the Password if it has spaces in the middle.
// - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
// - Require at least 7 characters to confirm the password.

// # Password_confirmed:
// - The user must re-enter their exact password; otherwise, they are blocked.






// password = "pass@word"
// password_confirmed = "pass@word"

// if (
//   password.trim() !== password ||          // kaychouf espace f lbdya wla lnihaya
//   password.includes(" ") ||                // kaychouf espace f wasst
//   password.length < 7 ||                   // khas 7 7rouf ola ktar
//   !["@","#","-","+","*","/"].some(c => password.includes(c))  // khas chi 7arf mna
// ) {
//   console.log("Password mchi sahih");
// } else if (password !== password_confirmed) {
//   console.log("Passwords ma kif kifch - blocked");
// } else {
//   console.log("Password mzyan w mconfirmé");
// }


// * If the user chooses to log in, here are the details they must enter:
// # Email:
// - Check if the email exists in our Database.

// # Password:
// - Check if the entered password is associated with the previously entered email.


// بيانات الإيميل وكلمة السر بحال إلى كانوا فالداتا بيس
var emails = ["ali@example.com", "sara@gmail.com"];
var passwords = {
  "ali@example.com": "1234",
  "sara@gmail.com": "passw0rd"
};

// بيانات دخلهم المستخدم
var input_email = "sara@gmail.com";
var input_password = "passw0rd";

// التحقق
if (emails.includes(input_email)) {
  if (passwords[input_email] === input_password) {
    console.log("✅ مرحبا، دخلتي بنجاح!");
  } else {
    console.log("❌ كلمة السر خاطئة!");
  }
} else {
  console.log("❌ الإيميل ما كاينش!");
}


// * If the user chooses to change the password:
// - They must enter their existing Email in the Database.

// * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
// # Logout:
// - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.

// # Withdraw Money:
// - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).

// # Deposit Money:
// - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).

// # Take a Loan:
// - If the user chooses this option, they can take a loan up to 20% of what they already have.
// - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.

// # Invest:
// - If the user chooses this option, they can invest any amount in the bank.
// - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).

// # History:
// - Ability to view the entire transaction history.
// Réduire
// fjs.txt
// 5 K


