tests(
	"string-repeat", // the id for this CodeWar's div
	{
	  'Repeat should repeat \"*\" 3 times': function() {
	    eq("***", string_repeat(3, "*"));
	  },
	  'Repeat should repeat \"#\" 5 times': function() {
	    eq("#####", string_repeat(5, '#'));
	  },
	  'Repeat should repeat \"ha \" 2 times': function() {
	    eq("ha ha ", string_repeat(2, "ha "));
	  }
	}
);