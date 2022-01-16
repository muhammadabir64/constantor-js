# getstr
### A collection of string constants for JavaScript
A constant is used to define a fixed value in a variable that cannot be modified anywhere in the code following declaration. This JavaScript module contains some string constants that can be used for various purposes like generate random string for passwords, tokens etc...

| Plugin | README |
| ------ | ------ |
| ascii_lowercase | abcdefghijklmnopqrstuvwxyz |
| ascii_uppercase | ABCDEFGHIJKLMNOPQRSTUVWXYZ |
| ascii_letters | ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz |
| digits | 0123456789 |
| hexdigits | 0123456789abcdefABCDEF |
| octdigits | 01234567 |
| punctuation | !#$%&`'\"(){}[]*+,-_~./\\:;<>=?@^\| |
| whitespace | \t\n\r\v\f |
| printable | includes the values of digits, ascii_letters, punctuation & whitespace |

## usage
```sh
npm i getstr
```
```sh
const getstr = require("getstr");
console.log(getstr.ascii_lowercase);
```
**output**
```sh
abcdefghijklmnopqrstuvwxyz
```

[This module was inspired by python string/lib.](https://docs.python.org/3/library/string.html)
