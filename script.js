

for (var i=1; i <= 100; i++)
	if ( i % 5 ===0 && i % 3 ===0) {
		document.write("FooBar" + "<br />");		
	} else if ( i % 3 === 0 ) {
		document.write("Foo" + "<br />");
	} else if ( i % 5 === 0) {
		document.write("Bar" + "<br />");
	} else {
		document.write(i + "<br />");
	}

