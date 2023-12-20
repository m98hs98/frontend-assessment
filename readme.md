* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

1. 'b' + 'a' -> These two strings concatenate together and the result is 'ba'.


2. + + 'a' -> The first + is a unary plus operator and we know that "If the unary plus is used on a string that doesn't represent a number, it results in "NaN", so the result of this part is 'NaN'.


3. + 'a' -> It is also a concatenation operator that has the result of 'a'.


So ('ba' + 'NaN' + 'a').toLowerCase() = banana