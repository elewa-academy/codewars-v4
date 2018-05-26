## My Other Solution 1

```js
function solution(str){
	let result = '';

	for (let index = str.length; index > 0; index--) {
		result += str[index];
	}

	return result;
}

console.log(solution('world') == 'dlrow');
```

[PythonTutor link](https://goo.gl/NoSuZM)

___

### Index:
* [Strategy](#strategy)
* [Language Features](#language-features)
* [Comparison](#comparison)

___


### Strategy Analysis

This time I relied less on native language features on more on control flow. I loop backwards from the last letter to the first (using a decrementing for loop), concatenating each next letter onto the result string.

[TOP](#my-other-solution-1)

___


## Language Features

* For loop.
* Accessing string letters by index.
* String Concatenation


[TOP](#my-other-solution-1)

___

### Comparison

This solution is very different from my primary solution, but essentially the same as fabricelepro's.

[TOP](#fabricelepro)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>


