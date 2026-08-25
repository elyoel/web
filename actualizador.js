const fs = require('fs');
const https = require('https');

const url = 'https://gestiondocente.info.unlp.edu.ar/cartelera/data/0/10?idMateria=';

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            fs.writeFileSync('horarios.json', data);
            console.log('Ok');
        } catch (e) {
            console.error('Error ', e);
            process.exit(1);
        }
    });
}).on('error', (err) => {
    console.error('Error ', err.message);
    process.exit(1);
});