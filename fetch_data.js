const fetch = require('fetch');
const cheerio = require('cheerio');
const fs = require('fs');

const filename = 'index.html';
/*
const url = 'http://elinux.org/RPi_HardwareHistory#Board_Revision_History';
fetch.fetchUrl(url, function(err, meta, body) {
  fs.writeFile(filename, body, function(err) {
    if(err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  }); 
});
*/

// Read the file and print its contents.
fs.readFile(filename, 'utf8', function(err, body) {
  if (err) throw err;

	let $ = cheerio.load(body);
	//console.log($('table:nth-of-type(2)').html());
	const $table = $('table:nth-of-type(2)');
  $table.find('tr').each(function(i, el) {
    const $td = $(el).find('td');
    //console.log($($td.get(0)).text());
    const revision = $($td.get(0)).text().trim();
    const releaseDate = $($td.get(1)).text().trim();
    const model = $($td.get(2)).text().trim();
    const pcbRevision = $($td.get(3)).text().trim();
    const memory = $($td.get(4)).text().trim();
    const notes = $($td.get(5)).text().trim();
    console.log(revision, releaseDate, model, pcbRevision, memory, notes);
	});

});
