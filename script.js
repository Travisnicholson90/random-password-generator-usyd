// random password generator
const button = document.querySelector('#generate');

// generate password button. initiated the password prompts 
button.addEventListener('click', (e) => {
  
  
    generatePassword();

  
 
  
})
  

function generatePassword() {

// password criteria arrays
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'W', 'Z']
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '<', '>']

//password criteria prompts
let passwordLength = prompt('Please enter a password length, between 8 - 128 characters');
 
  let uppercase = confirm('Do you want to include uppercase characters?');
  let number = confirm('Do you want to include numbers in your password');
  let lowercase = confirm('Do you want to include lowercase characters?');
  let specialCharacters = confirm('Do you want to include special characters?');
  
  
  //empty array to push password inputs
  let merge = []
  //prompts === true are pushed to the merge array using the spread operator
  if(number) { 
    merge.push(...numbers)
  } 
  if(lowercase) {
    merge.push(...lowerCase)
  }
  if(uppercase) {
    merge.push(...upperCase)
  }
  if(specialCharacters) {
    merge.push(...symbols)
  }
  //console.log(merge);
  
  const newPassword = [];
  const password = [];
  
  for(let i = 0; i < passwordLength; i++) {
    
    const random = Math.floor(Math.random() * (merge.length));
    newPassword.push(merge[random]);
    
  }
  password.push(newPassword.join(' '));
  
  
  const textField = document.querySelector('#password');
  textField.innerHTML = password;
  console.log(password);
  
} 


