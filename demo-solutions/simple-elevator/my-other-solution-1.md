# Other Solution N

```js
function goto(level,button){
	let result = 0;

	if (level===0 || level===1 || level===2 || level===3) {
		if (button==='0' || button==='1' || button==='2' || button==='3') {
			result = Number(button) - level;
		};
	};
	
	return result;
};

Test.assertEquals(goto(0,'2'), 2);
Test.assertEquals(3+goto(3,'1'), 1);
Test.assertEquals(2+goto(2,'2'), 2);
```

[PythonTutor link] (https://goo.gl/U1QUm1)

___

### Index:
* [Strategy](#strategy)
* [Language Features](#language-features)
* [Comparison](#comparison)

___


## Strategy 

Nothing special here, just did an exhaustive check to see if the inputs are valid and subtracted them if they were.  I chose to default the return value to 0 so I don't have to do anything if the inputs aren't valid.  

[TOP](#mh159)

___


## Language Features

Comparisons & if's.

[TOP](#mh159)

___


### Comparison

This solution is much simpler than my other solution. Stringing together a series of checks in nested if statements makes for shorter and simpler code.  By using a default return value of 0 I save the confusion of having an extra if check, and needing to reason about extra boolean variables.

[TOP](#mh159)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

