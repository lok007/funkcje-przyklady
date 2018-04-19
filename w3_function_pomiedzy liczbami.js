function pomiedzy(x,y){
	if (x>y) {
		for (i = x; i>=y; i-- ){
		console.log(i);
		}
	}

	if (x<y) {
		for (i = x; i<=y; i++ ){
			console.log(i);
			}
  	}
	else if (x==y) {console.log(x)}

}

pomiedzy(16,12)