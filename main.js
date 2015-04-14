function convertNmb (numberUser) {

	// if  var numberUser is not a number or if var numberUser is not between 0 and 999
	if (isNaN(numberUser) || numberUser < 0 || numberUser > 999 ) {
		
		return 'Prosze wpisac poprawny numer';

	} 
	// if  var numberUser is a zero
	if (numberUser === 0){
		
		return 'zéro';

	} 
	// var numberUser is correct so I proceed on conversion
	
	// I create two arrays with numbers
	var unitsArray = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
	var tensArray = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
	
	// I collect units, ten, and hundreds
	var units = numberUser % 10;
	var tens = (numberUser % 100 - units) / 10;
	var hundreds = (numberUser - numberUser % 100) / 100;

	// I create four variables which i use later
	var convertUnits,
		convertTens,	
		convertHundreds,
		convertNumber;

	// exeption 1: I treat three exceptions together for numbers 10..., 70..., 90...,
	if (tens === 1 || tens === 7 || tens === 9) {
		
		// I isolate an exception for number 71
		if (tens === 7 && units === 1 ) {
			convertTens = 'soixante-et-onze';
		
		} else {

			// if number is different of one I add '-' otherwise I do nothing
			convertTens = tensArray[tens] + (tens !== 1 ? '-' : '');
			convertTens += unitsArray[ 10 + units];
		}
	
	// exeption 2: if tens equal 0, I add only units
	} else if (tens === 0){

			convertTens = unitsArray[units];
	
	// Other case, tens equal: 2,3,4,5,6,8
	} else {
		
		// I assigns tens from a tensArray	
		convertTens = tensArray[tens];
		
		// if number is 80 I add '-' otherwise I do nothing 	
		if (tens === 8 && units === 0) {
			convertTens += 's';
		}

		// exection 1: if a unit is 1 I add 'and' between units ans tens
		if (units === 1) {
			convertTens += '-et';
		} 
		
		// I assigns units from a unitsArray	
		convertUnits = unitsArray[units];
		
		// if units is different of 0 I add '-' otherwise I do nothing 	
		convertTens += (convertUnits ? '-' : '') + convertUnits;
	}
	
	// I treat hundreds which are bigger than 0
	if (hundreds > 1 ){
		
		// I assigns hundred from a unitsArray and I add the word cent 
		convertHundreds = unitsArray[hundreds] + '-cent';
		
		// I check if tens and units exist otherwise I add 's' to the end
		if (units === 0 && tens === 0 ) {
			convertHundreds += 's';
		}
		
	// I treat two cases: 0 and 1 for hundreds if hundreds exist I add just the word 'cent'
	} else if (hundreds === 1) {
		convertHundreds = 'cent';
	} 
	
	// I create a variable final and I check if tens exist I add '-' between hundreds and tens
	convertNumber = convertHundreds + (convertHundreds && convertTens ? '-': '') + convertTens;
	return convertNumber;

}

var receiveNamber;

while (receiveNamber = prompt('Wpisz liczbe od 0 do 999 do zamiany:')){
	receiveNamber = parseInt(receiveNamber, 10);
	
	alert(convertNmb(receiveNamber));
}