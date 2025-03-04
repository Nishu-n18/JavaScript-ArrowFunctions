const validateEmailFormat = (email) => /^[^@]+@bridgelabz\.[a-zA-Z]+$/.test(email);

// Test cases
console.log(validateEmailFormat("user@bridgelabz.com")); // true
console.log(validateEmailFormat("user@gmail.com")); // false
console.log(validateEmailFormat("userbridgelabz.com")); // false
console.log(validateEmailFormat("user@bridgelabz.org")); // true
console.log(validateEmailFormat("@bridgelabz.com")); // false

