# My Other Solution 1

```js
function addBinary(a,b) {
    var result = '';

    var temp_arr = [];
    var sum_b_10 = a + b;

    do {
        temp_arr.push(sum_b_10 % 2);
        sum_b_10 = Math.floor(sum_b_10 / 2);
    } while (sum_b_10 > 0);

    result = temp_arr.reverse().join('');

    return result;
}

var result = addBinary(1,2);

if (!result) {  // should be truthy
  console.log("result is falsey!");
}
console.log(result == "11")

```

[PythonTutor link] (https://goo.gl/U5YXys)

___

### Index:
* [Strategy](#strategy)
* [Language Features](#language-features)
* [Comparison](#comparison)

___


## Strategy 

I dug deep into my understanding of numbers and bases to build a logic-based solution. It's tricky to explain, and I'm not sure I completely understand it, but there it is. I'll have to come back to this one to understand it later.

[TOP](#mh159)

___


## Language Features

* Do-While loop
* Array Methods
* Modular Arithmetic

[TOP](#my-other-solution-1)

___


### Comparison

This solution is possibly more impressive than my others, but I'm not sure that I'd use it in a project yet.  I don't understand it quite well enough to debug or maintain it if anything were to change.

[TOP](#my-other-solution-1)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

