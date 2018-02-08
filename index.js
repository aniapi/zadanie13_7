var fs = require('fs');
// var StatMode = require('stat-mode');
var colors = require('colors');

// fs.stat('./cat.jpg', function(err, stats) {
// 	var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

fs.readdir('./node_modules', 'utf-8', function(err, file) {
    // console.log('Dane przed zapisem!'.blue);
    // console.log(file);
	fs.writeFile('./tekst.txt', './node_modules', function(err) {
        if (err) throw err;
        // console.log('Zapisano!'.blue);
        fs.readdir('./node_modules', 'utf-8', function(err, file) {
            // console.log('Dane po zapisie'.blue)
            console.log(file);
        });
    });
  });






//    });

// fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
//     if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
//     console.log('Zapisano!');
// });



// fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
//         if (err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue)
//             console.log(data);
//         });
//     });
// });



// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//     console.log(data);
// });

// fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
//     if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
//     console.log('Zapisano!');
// });