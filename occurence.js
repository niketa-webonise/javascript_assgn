var array_elements = prompt("enter numbers").split(",");
    
    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                document.write(current + ' : ' + cnt );
		document.write("<br>");
	
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.writeln(current + ' : ' + cnt );
	document.write("<br>");
    }

