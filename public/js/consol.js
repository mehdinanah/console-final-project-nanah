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




// تعريف class يمثل شخص
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
    }
  }
  
  // تعريف list لتخزين الأشخاص
  let people = [];
  
  // دالة لإضافة شخص جديد عبر prompt
  function addPerson() {
    let name = prompt("Enter name:"); // إدخال الاسم
    let age = parseInt(prompt("Enter age:")); // إدخال العمر
    let newPerson = new Person(name, age); // إنشاء object جديد من class Person
    people.push(newPerson); // إضافة الشخص للقائمة
  }
  
  // دالة لعرض الأشخاص
  function showPeople() {
    console.log("People list:");
    for (let person of people) {
      person.greet(); // مناداة دالة greet لكل شخص في القائمة
    }
  }
  
  // الدالة الرئيسية التي تطلب الاختيارات من المستخدم
  function main() {
    let option;
    do {
      option = prompt("Choose: 1-Add Person, 2-Show People, 3-Exit");
  
      if (option === "1") {
        addPerson(); // إضافة شخص
      } else if (option === "2") {
        showPeople(); // عرض الأشخاص
      }
    } while (option !== "3");
  
    console.log("Goodbye!"); // رسالة وداع عند الخروج
  }
  
  main(); // بدء تشغيل البرنامج

  
//   ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.
