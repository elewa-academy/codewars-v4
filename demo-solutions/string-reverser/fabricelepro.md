## [Fabricelepro](https://www.codewars.com/users/fabricelepro)

```js
function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

console.log(solution('world') == 'dlrow');
```

[PythonTutor link](https://goo.gl/9VZu7b)

___

### Index:
* [Strategy](#strategy)
* [Language Features](#language-features)
* [Comparison](#comparison)

___


### Strategy Analysis

Fabrice's solution was to start a new empty string then to build it up one letter at a time by iterating backwards through the argument string, copying over one letter at at time.

Fabrice could have used more helpful variable names

[TOP](#fabricelepro)

___


## Language Features

Fabricelepro used a couple String features:
* Concatenation
* String.length
* String indexing

And a backwards for loop checked by the length of the string.


[TOP](#fabricelepro)

___

### Comparison

Fabrice's strategy is clear and readable. It's straight-forward and I wouldn't have any trouble explaining it or using it again later.  Iterating backwards through a for loop is a neat trick I'd never thought of before.

[TOP](#fabricelepro)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>


