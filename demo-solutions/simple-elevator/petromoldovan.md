# [Petromoldovan](https://www.codewars.com/users/petromoldovan)

```js
function goto(level,button){
  const possbileLevels = [0,1,2,3];
  const possbileButtons = ["0","1","2","3"];

  if (possbileLevels.indexOf(level) <0) return 0;
  if (possbileButtons.indexOf(button) <0) return 0;

  return parseInt(button) - level;
}

console.log(goto(0,'2') == 2);
console.log(3+got(3,'1') == 1);
console.log(2+goto(2,'2') == 2);
```

[PythonTutor link](https://goo.gl/Nt8EhE)

___

### Index:
* [Strategy](#strategy)
* [Language Features](#language-features)
* [Comparison](#comparison)

___


### Strategy 

Compare the arguments exhaustively to the possible valid arguments. 
If they don't exist in the valid arrays, return 0. Otherwise return the subtraction.

[TOP](#petromodovan)

___

### Language Features

* Single line if statement
* indexOf: Array prototype method
  * Args: 1 (2, but one we care about)
    * Any type: the item to search for
  * Return: Number
    * The index of the first instance of your search query
    * Or -1 if it doesn't exist
  * Behavior: searches for the item. if it's there, it returns the index for the first instance. otherwise -1

[TOP](#petromodovan)

___

### Comparison

Petromoldovan used the same strategy I did, but their implementation is even cleaner than mine. They very cleverly used built-in language features to make their code more succinct and readable.

[TOP](#petromodovan)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>


