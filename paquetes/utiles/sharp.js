// trabajar con imagenes 
const sharp = require('sharp');

sharp('1.jpeg')
    .resize(80)
    .grayscale()
    .toFile('resized.png');