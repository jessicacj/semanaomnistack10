module.exports = function parseStringAsArray(ArrayAsString){
    return ArrayAsString.split(',').map(tecnologias => tecnologias.trim());
}