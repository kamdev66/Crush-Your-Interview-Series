// Ques-1:- Valid Parenthesis
// method 1:-

function isValidParentheses1(s) {
  while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
    s = s.replace("()", "").replace("[]", "").replace("{}", "");
  }
  return s.length === 0;
}

// Test cases
console.log(isValidParentheses1("()"));
console.log(isValidParentheses1("()[]{}"));
console.log(isValidParentheses1("(]"));
console.log(isValidParentheses1("([)]"));
console.log(isValidParentheses1("{[]}"));

//method-2:--

function isValidParentheses(s) {
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    console.log(char, " ---", mapping[char]);
    if (mapping[char]) {
      // If the current character is a closing parenthesis
      const topElement = stack.pop() || "#"; // Use '#' to handle empty stack
      if (topElement !== mapping[char]) {
        return false; // Mismatched parentheses
      }
    } else {
      // If the current character is an opening parenthesis, push it onto the stack
      stack.push(char);
    }
  }

  // The stack should be empty if all parentheses are matched
  return stack.length === 0;
}

// Test cases
console.log(isValidParentheses("()")); // true
//   console.log(isValidParentheses("()[]{}")); // true
//   console.log(isValidParentheses("(]")); // false
//   console.log(isValidParentheses("([)]")); // false
//   console.log(isValidParentheses("{[]}")); // true
