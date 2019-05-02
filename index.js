//zaladowanie modulow
const color = require('colors');
const fs = require('fs');

//odczyt plikow w katalogu biezacym
fs.readdir('./', { 'withFileTypes': true }, function(err, files) {
	if(err) throw err;
	//zapis listy plikow 
	fs.writeFile('./tekst.txt', files, function(err) {
		if (err) throw err;
	});
});
