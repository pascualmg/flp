# Programación Funcional Ligera
Nota: ten en cuenta que el libro original del autor es público
y que esta traducción es meramente personal, por lo que 
no me hago responsable de cualquier fallo en ella . 
Cambiaré cualquier cosa que me suene mal si considero que se adapta más al significado que a la traducción literal, respetando en todo momento al maestro , pero con la necesidad
de entenderlo :P . 
Aquí tienes el libro original https://github.com/getify/Functional-Light-JS si deseas ver la versión online 

## Echando un Vistazo
Ilustremos la noción de lo que podemos considerar "Functional-Light Javascript" con un trozo de codigo viendo el antes ( con objetos ) y un después ( con funcional ), ahí van: 

```javascript
var numbers = [4,10,0,27,42, 17, 15,-6,58];
var faves = [];
var magicNumber = 0;

pickFavoriteNumbers();
calculateMagicNumber();
outputMsg();

//*******************************************
function pickFavoriteNumbers() {
  for (let num of numbers) {
    if ( num >= 10 && num <= 20 ) {
      faves.push(num)
    }
  } 
}
function calculateMagicNumber() {
  for ( let fave of faves) {
    magicNumber = magicNumber + fave; 
  }
}
function outputMsg() {
 var msg = `The magic number is ${magicNumber}`;
 console.log( msg );
}
```
Ahora vamos a probar con un estilo totalmente diferente que hace exactamente lo mismo:
```javascript
var FP = {
  compose: function() {/*magic*/},
  map:     function() {/*magic*/},
  filter:  function() {/*magic*/},
  reduce:  function() {/*magic*/},
  filterReducer: function() {/*magic*/},
  gte: function() {/*magic*/},
  lte: function() {/*magic*/},
  pipe: function() {/*magic*/},
};

var numbers = [4,10,0,27,42, 17, 15,-6,58];
var sumOnlyFavorites = FP.compose(
  [
    FP.filterReducer( FP.gte(10) ),
    FP.filterReducer( FP.lte(20) ),
  ]
)(sum);

var printMagicNumber = FP.pipe(
 [
   FP.reduce(sumOnlyFavorites, 0),
   constructMsg,
   console.log
 ]
);

printMagicNumber(numbers);//OmG the magic has come!!!
//**********************************************
function constructMsg(v) { return `The magic number is ${v}`;} 
function sum(x,y) { return x+y; }

```




