# [Z1x](https://www.codewars.com/users/Z1x)

```js
function addBinary(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}
```

[PythonTutor link](https://goo.gl/YAnrzz)

___

### Index:
* [Strategy](#strategy)
* [Language Features](#language-features)
* [Comparison](#comparison)

___

### Strategy Analysis

Their strategy was to first add a & b normally, then to concatenate the solution string one digit at a time by checking whether 2^digit can fit in the sum.

### Language Features

* % - Modular arithmetic, or the remainder operator
* Math.floor(x) - rounding down to the nearest integer
* String concatenation

### Comparison

Z1x's solution is very different from mine.  They chose to do the hard logical work themselves rather than just using a language feature.  They probably learned a lot more than me.

