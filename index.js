/* constantor-js
 * Copyright (c) 2022 Muhammad ABir
 * MIT Licensed
*/

/*
ascii_lowercase  -> a string containing all ASCII lowercase letters
ascii_uppercase  -> a string containing all ASCII uppercase letters
ascii_letters    -> a string containing all ASCII letters
digits           -> a string containing all ASCII decimal digits
hexdigits        -> a string containing all ASCII hexadecimal digits
octdigits        -> a string containing all ASCII octal digits
punctuation      -> a string containing all ASCII punctuation characters
whitespace       -> a string containing all ASCII whitespace
printable        -> a string containing all ASCII characters considered printable
*/

// Some strings for ctype-style character classification
const ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";
const ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ascii_letters = ascii_lowercase + ascii_uppercase;
const digits = "0123456789";
const hexdigits = digits + "abcdef" + "ABCDEF";
const octdigits = "01234567";
const punctuation = "!#$%&`'\"(){}[]*+,-_~./\\:;<>=?@^|";
const whitespace = " \t\n\r\v\f";
const printable = digits + ascii_letters + punctuation + whitespace;

module.exports = {
    ascii_lowercase,
    ascii_uppercase,
    ascii_letters,
    digits,
    hexdigits,
    octdigits,
    punctuation,
    whitespace,
    printable
};
