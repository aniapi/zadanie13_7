var fs = require('fs');
// var StatMode = require('stat-mode');
var colors = require('colors');

// fs.stat('./cat.jpg', function(err, stats) {
// 	var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

fs.readdir('./node_modules', 'utf-8', function(err, files) {
    // console.log('Dane przed zapisem!'.blue);
    console.log(files);
	fs.writeFile('./tekst.txt', files, function(err) {
        if (err) throw err;
        // console.log('Zapisano!'.blue);
        // fs.readdir('./node_modules', 'utf-8', function(err, files) {
        //     // console.log('Dane po zapisie'.blue)
        //     console.log(files);
        // });
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