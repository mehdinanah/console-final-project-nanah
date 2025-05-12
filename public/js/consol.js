// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.


var username = "ueser";
var password = "1234";

var userInput = prompt("dakhal ism lmostakhdim");
var passInput = prompt("dakhal kalimat ser");

if (userInput == username && passInput == password) {
  console.log(" tasjil dokhol sa7i7a");
} else {
  console.log(" ism lmostakhdim aw kalimat ser khati2a");
}



// ## 3 - Instructions:
// - Account Creation and Management:
// + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
// + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//     * If the user chooses to sign up, here are the details they must enter:

var users = {};

while (true) {
  var c = prompt("sign up / login / change / exit");

  if (c == "sign up") {
    var u = prompt("username:");
    if (u != "exit") {
      if (users[u]) {
        console.log("mosta3mal ");
      } else {
        var p = prompt("password:");
        if (p != "exit") {
          users[u] = p;
          console.log("tsajalti bi naja7");
        }
      }
    }

  } else if (c == "login") {
    var u = prompt("username:");
    if (u != "exit") {
      var p = prompt("password:");
      if (p != "exit") {
        if (users[u] == p) {
          console.log("dokhol naji7");
        } else {
          console.log("khata2 fi tasjil");
        }
      }
    }

  } else if (c == "change") {
    var u = prompt("username:");
    if (u != "exit") {
      var old = prompt("old password:");
      if (old != "exit") {
        if (users[u] == old) {
          var p = prompt("new password:");
          if (p != "exit") {
            users[u] = p;
            console.log("tbadlat kalimat ser");
          }
        } else {
          console.log("khata2 ");
        }
      }
    }

  } else if (c == "exit") {
    console.log("kharjat l3amalia");
    
  } else {
    console.log("ghayr m3arfa");
  }
}


// # Name (Full):
// - Check for leading or trailing spaces.
// - The first letter should be capitalized.
// - After each space, the first letter should remain capitalized.
// - Check that all other characters are in lowercase.
// - Do not save the Name if it has less than 5 characters (excluding spaces).
// - Do not save the Name if it contains numbers, "@", or similar special characters.



var name = prompt("dakhal ism lkamil");

var trimmed = name.trim(); 


if (trimmed.length < 5) {
  console.log(" ism khas ikon fih 3la a9al 5 l7orof");
} else {
  var vali = true;
  

  for (var i = 0; i < trimmed.length; i++) {
    var char = trimmed.charAt(i);

    
    if (char >= '0' && char <= '9' || char == '@' || char == '#' || char == '$' || char == '%' || char == '^' || char == '&' || char == '*' || char == '(' || char == ')') {
      valid = false;
    }
  }

  
  if (valid) {
    var words = trimmed.split(" ");
    for (var i = 0; i < words.length; i++) {
      var wor = wors[i];
      if (wor.charAt(0) !== wor.charAt(0).toUpperCase() || wor.slice(1) !== wor.slice(1).toLowerCase()) {
        vali = false;
      }
    }
  }

  
  if (vali) {
    console.log("ism s7i7", trimmed);
  } else {
    console.log("ism ghayer s7i7");
  }
}


// # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.


var emaile = []; 
console.log(emaile);


var email = prompt("dakhal email");

var trimEmail = email.trim();


if (trimEmail.length < 10) {
  console.log("email khas ikon fih 10 l7orof 3la a9al");
} else {
  
  var lowerEmail = trimEmail.toLowerCase();

  
  if (lowerEmail.indexOf(" ") !== -1) {
    console.log("email maykonch fih masafat");
  } else {
    
    var atCo = 0;
    for (var i = 0; i < lowerEmail.length; i++) {
      if (lowerEmail.charAt(i) == "@") {
        atCo++;
      }
    }

    if (atCo !== 1) {
      console.log("  khas ikon fih wahad @.");
    } else {
      
      if (emaile.indexOf(lowerEmail) !== -1) {
        console.log("had email msajal mn 9bal");
      } else {
        emaile.push(lowerEmail); 
        console.log("tama dokhol email binaja7", lowerEmail);
      }
    }
  }
}


// # Age:
// - Check for leading, trailing, or middle spaces.
// - Verify that only digits are entered.
// - Do not save the Age if it has 0 characters, or if it has 3 characters or more.


var age = prompt("dakhal age dialk");

var trimmAge = age.trim(); 


if (trimmAge.length === 0) {
  console.log("madakhaltich l3mar");
} else if (trimmAge.length >= 3) {
  console.log("l3mar maykonoch fih 3 l7orof aw aktar");
} else {
  var iVal = true;
  
  // 
  for (var i = 0; i < trimmAge.length; i++) {
    var char = trimmAge.charAt(i);
    if (char < '0' || char > '9') {
      iVal = false; 
    }
  }

  
  if (iVal) {
    console.log("l3mar sali7", trimmAge);
  } else {
    console.log("l3mar khas ikono fih ar9am ");
  }
}


// # Password:
// - Check for leading or trailing spaces.
// - Do not save the Password if it has spaces in the middle.
// - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
// - Require at least 7 characters to confirm the password.

var password = prompt("dakhal kalimat ser ");

var trimPassword = password.trim(); 


if (trimPassword.indexOf(" ") !== -1) {
  console.log("kalimat ser khas ikon fiha masafat");
} else if (trimPassword.length < 7) {
  
  console.log("kalimat sire khas ikono fiha 7 7orof");
} else {

  var cialChar = false;
  var cialChare = ["@", "#", "-", "+", "*", "/"];

  for (var i = 0; i < cialChare.length; i++) {
    if (trimPassword.indexOf(cialChare[i]) !== -1) {
      cialChar = true;
    }
  }

  if (cialChar) {
    console.log("kalimat ser sal7a");
  } else {
    console.log("kalimat ser khasha tkon fiha had romoz @, #, -, +, *, /.");
  }
}


// # Password_confirmed:
// - The user must re-enter their exact password; otherwise, they are blocked.

var password = prompt("dakhal kalimat ser ");

var triPassword = password.trim(); 


if (triPassword.length < 7) {
  console.log("kalimat ser khas tkon fiha 7 l7orof");
} else {
  var rmPassword = prompt("3awd dakhal kalimat ser mara khra");

  var trirmPassword = rmPassword.trim(); 

  
  if (triPassword === trirmPassword) {
    console.log("tasjil kalimat ser binaja7");
  } else {
    console.log("kalimat ser ghayer sa7i7a tama 9ofl l3amlia");
  }
}

// * If the user chooses to log in, here are the details they must enter:
// # Email:
// - Check if the email exists in our Database.

// # Password:
// - Check if the entered password is associated with the previously entered email.


var database = [
    { email: "sim1@gmail.com", password: "password123" },
    { email: "sim2@gmail.com", password: "password" }
  ];
  
  
  var email = prompt("dakhal email ta3ak");
  var password = prompt("dakhal kalimat ser ta3ak");
  

  var userF = false;
  var tPassword = false;
  
  for (var i = 0; i < database.length; i++) {
    if (database[i].email === email) {
      userFound = true; 
      if (database[i].password === password) {
        tPassword = true;
      }
    
    }
  }

  if (userF && tPassword) {
    console.log(" tasjil bi naja7 ");
  } else if (userF && !tPassword) {
    console.log("kalimat ser ghayer sa7i7a");
  } else {
    console.log("email ghayer mawjod");
  }
  


//   * If the user chooses to change the password:
//   - They must enter their existing Email in the Database.







var database = [
    { email: "sim1@example.com", password: "password123" },
    { email: "sim2@example.com", password: "password" }
  ];
  
  
  var email = prompt("dakhal email ");
  
  var userFo = false;
  var tOldPassword = false;
  var simIndex = -1;
  
  
  for (var i = 0; i < database.length; i++) {
    if (database[i].email === email) {
      simFo = true;
      simIndex = i;
    
    }
  }
  
  
  if (simFo) {
    var dPassword = prompt("dakhal kalimat ser l9dima");
  
    
    if (database[simIndex].password === dPassword) {
      tOldPassword = true;
    }
  }
  

  if (tOldPassword) {
    var newPassword = prompt("dakhal kalimat ser jdida");
  
    
    database[simIndex].password = newPassword;
    console.log("tama taghyer kalimat ser");
  } else if (simFo) {
    console.log("kalimat sre 9adima ghayer sali7a");
  } else {
    console.log("email ghayer mawjod");
  }
  
//   * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//   # Logout:
//   - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
  
//   # Withdraw Money:
//   - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
  
//   # Deposit Money:
//   - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
  
//   # Take a Loan:
//   - If the user chooses this option, they can take a loan up to 20% of what they already have.
//   - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
  
//   # Invest:
//   - If the user chooses this option, they can invest any amount in the bank.
//   - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
  
//   # History:
//   - Ability to view the entire transaction history.



var email = prompt("dakhal email ");
var password = prompt("dakhal kalimat ser");

var userEmail = "sim@gmail.com";
var userPass = "123456";
var solde = 1000;

if (email === userEmail && password === userPass) {
  console.log("dakhal rasid ta3ak " + solde + " dh");

  var choix = prompt("bghiti ts7ab flos ah / la");

  if (choix === "ah") {
    var montant = prompt("ch7al bghiti ");
    montant = parseFloat(montant);

    if (montant > 0 && montant <= solde) {
      solde = solde - montant;
      console.log("ts7ab " + montant + " dh. b9a 3adak " + solde + " dh");
    } else {
      console.log("mablagh ghayer sali7);
    }
  } else {
    console.log("madarti walo rasid b9a " + solde + " dh");
  }

} else {
  console.log("email aw kalimat ser ghaltin");
}
