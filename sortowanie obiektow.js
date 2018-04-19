var products = [ { name: "Grejpfrut", calories: 170, color: "czerwony", sold: 8200 },
                 { name: "Pomarańcza", calories: 160, color: "pomarańczowy", sold: 12101 },
                 { name: "Cola", calories: 210, color: "karmelowy", sold: 25412 },
                 { name: "Cola dietetyczna", calories: 0, color: "karmelowy", sold: 43922 },
                 { name: "Cytryna", calories: 200, color: "bezbarwny", sold: 14983 },
                 { name: "Malina", calories: 180, color: "różowy", sold: 9427 },
                 { name: "Piwo korzenne", calories: 200, color: "karmelowy", sold: 9909 },
                 { name: "Woda", calories: 0, color: "bezbarwny", sold: 62123 }
               ];
			   
function compareSold(product1, product2) {
	if(product2.sold > product1.sold){
		return 1;
		}
	else if (product1.sold === product2.sold){
		return 0;
		}
	else {
		return -1;
	}
}

function printProductsSold (products){
	console.log("Sortowanie wg ilości sprzednych butelek:");
	for(var i=0; i<products.length; i++){
		console.log(" Nazwa: " + products[i].name + ", liczba kcal: " + products[i].calories + ", kolor: " + products[i].color + ", sprzedanych: " + products[i].sold);
	}
}



function compareName(product1, product2) {
	if(product1.name > product2.name){
		return 1;
		}
	else if (product1.name === product2.name){
		return 0;
		}
	else {
		return -1;
	}
}

function printProductsName(products){
	console.log("Sortowanie nazw alfabetycznie:");
	for(var i=0; i<products.length; i++){
		console.log(" Nazwa: " + products[i].name + ", liczba kcal: " + products[i].calories + ", kolor: " + products[i].color + ", sprzedanych: " + products[i].sold);
	}
}

function compareKcal(product1, product2) {
	if(product1.calories > product2.calories){
		return 1;
		}
	else if (product1.calories === product2.calories){
		return 0;
		}
	else {
		return -1;
	}
}

function printProductsKcal(products){
	console.log("Sortowanie wg ilości kcal:");
	for(var i=0; i<products.length; i++){
		console.log(" Nazwa: " + products[i].name + ", liczba kcal: " + products[i].calories + ", kolor: " + products[i].color + ", sprzedanych: " + products[i].sold);
	}
}


function compareColor(product1, product2) {
	if(product1.color > product2.color){
		return 1;
		}
	else if (product1.color === product2.color){
		return 0;
		}
	else {
		return -1;
	}
}

function printProductsColor(products){
	console.log("Sortowanie po kolorze alfabetycznie:");
	for(var i=0; i<products.length; i++){
		console.log(" Nazwa: " + products[i].name + ", liczba kcal: " + products[i].calories + ", kolor: " + products[i].color + ", sprzedanych: " + products[i].sold);
	}
}





products.sort(compareSold);
printProductsSold(products);

products.sort(compareName);
printProductsName(products);

products.sort(compareKcal);
printProductsKcal(products);

products.sort(compareColor);
printProductsColor(products);
