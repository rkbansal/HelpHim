	var helpHim = function(){
		var modulo = 1000000007;
		var arguments = process.argv.splice(2);
		if(arguments[0]>1000){
			console.log("test numbers exceeds 1000");
			return 0;
		}

		if(arguments[0]!=arguments.length-1){
			console.log("inputs mismatch");
			return 0;
		}
		
		arguments.shift();

		for(var i=0; i<arguments.length;i++){
			
			if(arguments[i].toString().length>15){
				console.log("argument length exceed 15");
				return 0;
			}
		}
		

		var result = arguments.map(e=>{
			var sum = 0, n=1, m=2;
			if(e == 0){
				return n;
			};
			if(e == 1){
				return m;
			};

			for (var i = 2; i <= e; i++) {
				sum = (n+m)%modulo;
				n=m;
				m=sum;
			};
			return sum;
		});
		console.log(result.join('\n'));

	};
	helpHim();