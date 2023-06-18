const username = Symbol ("username");
const password = Symbol ("password");

const user = {
    [username]: "Emma Stone",
    [password]: "123456",
    age: 34,
};

console.log(user);
console.log(user.username);
console.log(user.password);

// ------ Check password strength ----------
function checkPassword(password) {
  let oneLowerCaseLetter = /(?=.+[a-z])/;
  let oneUpperCaseLetter = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  let minimumEightCharacters = /(?=.{8,})/;
  let isValid =
    oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    minimumEightCharacters.test(password);

  return isValid ? "Your password is valid" : "Your password is invalid";
}

console.log(checkPassword("abc")); // invalid
console.log(checkPassword("9Ab!4567")); // valid
