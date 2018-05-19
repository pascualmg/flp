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
Una vez que Entiendes como funciona FP y la Funcional-ligera , es como si literalmente del segundo snippet mentalmente hubieras leido esto:
> Vamos a crear primero una función que se llama , sumOnlyFavorites(..) que es la combilación de 3 funciones . Combinamos 2 filtros, uno que chequea si el valor es mayor o igual que el 10 y otro si es menor o igual que 20. Entoneces incluimos el reductor suma a la composición del transductor.La función resultante sumOnlyFavorites(..) es un reductor que comprueba que el valor pasado en ambos filtros , y si es así suma el valor en el acumulador ( acc para los amigos)

>Entonces nos hacemos otra función llamada printMagicNumber(..) la cual reduce una lista de numeros usando esa función reductora sumOnlyFavorites(..) que acabamos de definir, resultando en un sumatorio que contiene únicamente los números que pasen los _checks de favoritos_. Tras ello pritnMagicNumber(..) _pipea_  esa suma final a construcMsg(..) , el cual crea una string que finalmente también se le pasa a console.log. 

Toda esta mierda es la que suena en la cabeza de un FP developer y es normal que te suene a chino, este libro te ayudará a hablar ese chino de tal forma que puedas leer ese tipo de códigos y los entiendas como cualquier otro ... si no más.

Algunas otras observaciones interesantes respecto a la comparación de los 2 snippets:

   * Así lo pueden ver la mayoría de lectores, el primer fragmento parece más confortable/legible/mantenible que el segundo. Si es tu caso es normal y está bien, de hecho es que estás donde tienes que estar. Confío en que si sigues este libro y practicas los temas de los que se hablan, el segundo snippet poco a poco se hirá haciendo mucho más entendible y será de forma natural, incluso terminarás prefiriendolo.
    
   * Hubiera hecho lo mismo pero de direrente forma al snippet presentado. Eso está bien también , este libro no pretende para nada decirte como tienes que hacer las cosas ni quiere dictar como hacer las cosas de una manera concreta. La meta es ilustrar únicamente pros y contras de los 2 patrones que ahí entran en juego de tal forma que te permita ser capaz de decidir cual usar según te convenga. Al final de este libro, el cómo afrontes la tarea quizá se parezca más a lo que has visto en el 2 snippet que ahora.
    
   * También es posible que seas un curtido ya FP developer, y que solamente ojeaba el principio del libro a ver si había algo que no supiera interesante que leer. Ciertametne, ese segundo snippet tiene muchas cosas que son familiares.Pero me apuesto lo algo a que has pensado, "Hmmmmm, yo lo habría echo de esta otra forma..." un par de veces. Y eso también está bien, y es perfectametne razonable. Pero este no es un libro ortodoxo ni tradicionalista en cuanto a FP, algunas veces se hace más de una heregía en las soluciones. Lo que se pretende con esto es precisamente conseguir un balance pargmático entre los claros e innegables beneficios de la FP y la necesidad de hacer un codigo en JS mantenible sin tener que escalar una gran montaña de notación matemática y terminología. esto no es la FP que tu conoces ... es "Programación funcional ligera".
   
Sean cueles sean tus razones para leer este libro, bienvenido seas.

## Confianza
Tengo una premisa muy simple que siempre subyace en todo lo que hago como profesor de JS, y es que:
> __Code that you cannot trust is code that you not understand__ _El codigo en el que no puedes confiar es codigo que no entiendes_

Además a la inversa también es cierto:
>    Codigo que no entiendas es código en el que no confías. 

Además si ni puedes confiar ni entender tu código, entonces tampoco puedes tener ninguna confianda  en que que el codigo que escribes sea adecuado para la tarea.
Es cuando ejecutas el programa , y cruzas los dedos.

A que me refiero con confianza? quiero decir que puedes verificar, leyendo y razonando, no solamente ejecutando, a que puedas entender todas y cada una de las líneas de código y que tengas claro _QUE HARAN_; No sólamente confiando en _QUE DEBERIAN_ de hacer. Más a menudo de lo que se podría considerar prudente, tendemos a confiar tanto en nuestros _Tests_ para verificar que el funcionamiento de nuestro programa es correcto. No quiero sugerir con esto que los test sean malos.Pero pienso que deberíamos de ser capaces a aspirar a ser capacez de entender nuestro código lo suficientemente bién que ya sepamos que va a pasar los test antes de ejecutarlos.

 
    
   
