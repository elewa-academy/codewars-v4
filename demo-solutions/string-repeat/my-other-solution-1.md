## My Other Solution 1

```js
function string_repeat(num, str) {
	let result = '';

	let repeats = 0;
	while (repeats < num) {
		result += str;
		repeats++;
	};
  
	return result;
};

console.log(string_repeat(3, "*") == "***");
console.log(string_repeat(5, "#") == "#####");
console.log(string_repeat(2, "ha ") == "ha ha ");
```

[PythonTutor link](https://goo.gl/VMn1wj)

___

### Index:
* [Strategy](#strategy)
* [Language Features](#language-features)
* [Comparison](#comparison)

___


### Strategy Analysis

My strategy was to build a new result string by concatenating the argument n times together using a loop.  It was more of a logic-based solution than a language-feature-based solution strategy.

[TOP](#my-other-solution-1)

___


## Language Features

* While loop.
* Accessing string letters by index.
* String Concatenation


[TOP](#my-other-solution-1)

___

### Comparison

This solution is different from both my other solution and MH195's.  My other solution was simpler to read and understand since it's a single native method that does exactly what I need, but I learned more writing this one.

[TOP](#fabricelepro)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>



