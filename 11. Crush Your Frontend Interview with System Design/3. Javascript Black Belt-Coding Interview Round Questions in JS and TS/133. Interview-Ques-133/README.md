# Variable Name

#### Algorithm Available At [CodeSignal](https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno)

---

Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

**Example**

- For `name = "var_1__Int"`, the output should be
  `variableName(name) = true`;

- For `name = "qq-q"`, the output should be
  `variableName(name) = false`;

- For `name = "2w2"`, the output should be
  `variableName(name) = false`.

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string name**

  _Guaranteed constraints:_  
  `1 ≤ name.length ≤ 10`.

- **[output] boolean**

  `true` if name is a correct variable name, `false` otherwise.