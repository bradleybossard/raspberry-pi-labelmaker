const fetch = require('fetch');
const cheerio = require('cheerio');
const fs = require('fs');
const exec = require('child_process').exec;

const filename = 'index.html';

function getRevision(callback) {
  const revisionCmd = "cat /proc/cpuinfo | grep 'Revision' | awk '{print $3}' | sed 's/^1000//'";
  const child = exec(revisionCmd,  function (err, stdout, stderr) {
    if (err !== null) {
      console.log('exec error: ' + err);
    }
    const revision = stdout.trim();
    callback(revision);
  });
}


function readFile(model) {
  // Read the file and print its contents.
  //
  let revisions = {};
  fs.readFileSync(filename, 'utf8', function(err, body) {
    if (err) throw err;

    let $ = cheerio.load(body);
    const $table = $('table:nth-of-type(2)');
    $table.find('tr').each(function(i, el) {
      const $td = $(el).find('td');
      const revision = $($td.get(0)).text().trim();
      const releaseDate = $($td.get(1)).text().trim();
      const model = $($td.get(2)).text().trim();
      const pcbRevision = $($td.get(3)).text().trim();
      const memory = $($td.get(4)).text().trim();
      const notes = $($td.get(5)).text().trim();
      revisions[revision] = { revision: revision,
                              releaseDate: releaseDate,
                              model: model,
                              pcbRevision: pcbRevision,
                              memory: memory,
                              notes: notes
                            };
    });
    //console.log(revisions);
  }).then(function() {
    console.log(model, revisions);
    return revisions[model];
  });
}

function fetchFile(callback) {
  const url = 'http://elinux.org/RPi_HardwareHistory#Board_Revision_History';
  fetch.fetchUrl(url, function(err, meta, body) {
    fs.writeFile(filename, body, function(err) {
      if(err) {
        callback(err);
      }
      callback();
    }); 
  });
}


try {
  // Query the entry
  stats = fs.lstatSync(filename);
}
catch (e) {
  console.log('File does not exist');
  fetchFile(function() {
  });
}



getRevision(function(revision) {
  const details = readFile(revision);
  console.log(details);
});
