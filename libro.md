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

A que me refiero con confianza? quiero decir que puedes verificar, leyendo y razonando, no solamente ejecutando, a que puedas entender todas y cada una de las líneas de código y que tengas claro _QUE HARAN_; No sólamente confiando en _QUE DEBERIAN_ de hacer. Más a menudo de lo que se podría considerar prudente, tendemos a confiar tanto en nuestros _Tests_ para verificar que el funcionamiento de nuestro programa es correcto. No quiero sugerir con esto que los test sean malos.Pero pienso que deberíamos de ser capaces a aspirar a entender nuestro código lo suficientemente bién que ya sepamos que va a pasar los test antes de ejecutarlos.

La confianza también se incrementa cuando se usan estas técnicas que previenen, o minimizan las posibles fuentes de bugs. Este quizá sea el punto más usado para vender la FP: Los programas en FP, suelen tener muchos menos bugs, y los bugs que existen están en sitios que son localizados rápidamente por su evidencia, así que son mucho más fáciles de corregir. El código FP tiende a ser más "resistente a los bugs" ... aunque lógicamente no a prueba de ellos.
 
Conforme avances en tu viaje a través de este libro, empezarás a desarrollar mucha más confianza en el código que escribes, por que usarás patrones y prácticas que ya está muy bien probadas; y así evitarás todas las posibles causas comunes de bugs!!

## Comunicación

Porqué es la programación funcional tan importante? Para responder a esto, necesitas dar un gran paso hacia atrás y preguntarte por qué la propia programación ,es importante.
Te podrás sorprender al oír esto, pero no creo que el código sea primariamente un conjunto de instrucciones de código máquina. De hecho, actualmente, pienso que las instrucciones de codigo máquina son casi un feliz accidente.   

Creo muy en el fondo que el principal papel del codigo es comunicarse con otros seres humanos.
Sabes posiblemente por experirencia propia que es horrible cuando pasas la mayor parte del tiempo "codificando" y en reaalidad lo que estás haciedo es leer código existente. Muy pocos de nosotros , somos tan privilegiados como para pasarnos la mayor parte del tiempo picando código nuevo y nunca teniendo que lidiar con el código de otros han escrito ( o nuestro YO del pasado ).

Se estima a grosso modo que los desarrolladores pasan un 70% del tiempo que pasan manteniendo código leyendo lo que ya hay escrito para poder entenderlo. Eso ciertamente es algo revelador. 70%. No importa que la media de líneas de código que pica un programador sean 10, pasamos hasta 7 horas del día leyendo código para hacernos una idea de donde y como tienen que ir esas líneas de código!!

Tenemos entonces que centrarnos precisamente en la legibilidad de nuestro código. Y por cierto, legibilidad no va de unos cuantos caracteres.

> __La Legibilidad se ve más impactada por la familiaridad__ ("Learning a metric for Code Readability) 

Si vamos a pasar nuestro tiempo preocupados por hacer código qeu será más legible y entendible,la FP va a ser el pilar central de ese esfuerzo. Los principios de la FP están ya muy bien establecidos, profundamente estudiados e investigados y probablemente verificables. Si te tomas el tiempo necesario y luego empleas estos principios de la FP al final llegarás a códigos más entendibles , y legibles por tí y por los demás. Cuanto más te familiarices con el código, y seas consciente de ello, mejorará tu legibilidad del código.

Por ejemplo, una vez que aprendas lo que hace la __map()__, serás capaz casi instantáneamente de detectar y entender que hace en cuanto la veas en cada programa.  Pero cada vez que veas un for-loop, vas a tener que leer el for entero para entenderlo.La sintaxis del for-loop te puede resultar muy familiar, pero el meollo de que está haciendo seguro que no tanto, y tiene que ser leído cada vez.

Teniendo más código que es reconocible a primera vista, y por ende pasando menos tiempo imaginando que hace ese código, unuestro foco está libre de pensar en niveles superiores de la lógica del programa; Esto es el tema más importante y al que debemos prestar más atención.

Fp ( al menos , sin toda la terminología que le subyace) es una de las más efectivas herramientas para obtener codigo legible, __Por eso es tan importante__.

## Legilibilidad. 

La legibilidad no es una característica binaria , Es mucho más un factor subjetivo totalmente humano que se describe con la relación entre tu código. Y de manera natural con el paso del tiempo y conforme mejoren tus habilidades y conocimiento también irá mejorando
He experimentado efectos similares a los de la figura y anecdóticamente coincide con la experiencia de muchos otros.

 https://github.com/getify/Functional-Light-JS/blob/master/manuscript/images/fig17.png

Podrias estar notando ya lo mismo, pero aguanta si insistes la curva pronto empezará a subir.

_código imperativo_ describe el código que posiblemente ya escribes de manera natural;Se centra precisamente decirle a la máquina _como_ hacer algo.
_Código declarativo_ - osea del tipo que vamos a aprender y el cual se adhiere a los principios de la FP- is código que se centra más en describir _que es_ el resultado.

Revisitemos los 2 snippets presentados antes.

El primero es _imperativo_, centrado casi enteramente en _como_ hacer la tarea; está lleno de sucios *ifs* , *fors*, y variables temporales, reasignaciones, mutaciones de valores, llamadas a función con efectos colaterales , y flujo implícito de datos entre funciones. Podrías desde luego si quieres seguir el flujo de la lógica y ver como los números fluyen y cambian hacia el final del estado, pero no está todo tan claro ni es tan sencillo como parece.

El segundo snipped es mucho más declarativo; Elimina la mayoría de esas antes mencionadas técnicas imperativas. Fijate bien en que no hay condicionales explícitos, loops , efectos colaterales, reasignaciones , o mutaciones; Por supuesto , emplea los ampliamente bien conocidos (si estás metido en el mundo de la FP!!) y confiables patrones como el de filtrado , reducción , transducción y composición.

El foco cambia de ser de un bajo-nivel _como_ a un nivel algo superior de _que tiene que dar_

En vez de ensuciar con un if para testear un número , delegamos eso en una bien-conocida utilidad FP como el gte ( greater-than-or-equal-to) , y entoences , nos centramos más en lo importante que es realmente , combinar ese filtro con otro en una composición con la función sumatorio.

Además , el flujo de datos a través de segundo programa es explítico: 

1. Una lista de números va a printMagicNumber(..)
2. Del tirón son procesados por sumOnlyFavorites(..), resultando de ello un único número con el total de solamente los del tipo favorito.
3. Ese total se convierte a una string que forma el mensaje con construcMsg(..).
4. La cadena con el mensaje es mostrada por console.log(..).

Aún puedes estar pensando que esta solución es complejilla , y que el snippet imperativo es mucho más facil de entender, eso es por que estás mucho más acostumbrado;La familiaridad tiene en tí una profunda influencia en tu percepción de la legibilidad. Por el final de este libro , espero , habrás internalizado los beneficios de la solución del segundo snippet. Esa familiaridad hará que florezca la legibilidad.

Se que te estoy pidiendo que des un salto de fé.

Cuesta mucho esfuerzo, a veces mucho más código, el mejorar la legibilidad como te comento, y minimizar o eliminar muchos de los errores que luego conducen a bugs.
De verdad honestamente, cuando empecé a escribir este libro, nunca había podido haber escrito ( o incluso entenderlo perfectamente!!!) el segundo snippet. Pero como ahora mismo ya estoy mucho más lejos en mi viaje de aprendizaje se ha convertido en algo más natural y conformable.

Si ya estás pensando que refactorizar en FP es la panacea, que en nada transformará tu código en algo más elegante , chulo , listo , resistente y conciso ... podría parecerlo a corto plazo. Por desgracia nada que ver con la realidad ^^ 

La FP es una manera muy diferente de pensar en como se puede estructurar el código, para conseguir que el flujo de datos sea mucho más obvio y ayudar al lector de ese código a que siga lo que estabas pensando. Tomará tiempo, y esfuerzo. Y este esfuerzo es de esos que de verdad valen la pena, pero puede ser un arduo viaje.

Aún me cuestan muchos intentos ,refactorizar un snippet imperativo a uno que sea más declarativo usando FP antes de que consiga dejarlo de tal forma que considere que después voy a poder entenderlo perfectamente y que se queda lo suficientemente legible.Me he dado cuenta ,que el refactor de imperativos a declarativos con FP es un proceso lento más que un cambio instantáneo entre un paradigma y otro.

También le aplico el test "enseñalo después" a cada trozo de código que escribo. Tras escribirlo, Lo dejo reposar unas cuantas horas o días, entondces vuelvo e intento leerlo con nuesvos ojos , y finjo que necesito tener que explicarlo a alguien. Normalmente y normalmente me confunden los primeros pasos , así que lo tuneo y repito!

Con esto no intento desalentar a vuestros espíritus, realmente lo que quiero que que paseis a través de la malas hiervas. Estoy orgulloso por que yo ya lo hice, I finalmente ya empiezo a ver como esa curva de legilibilidad va ya subiendo. El esfuerzo ha merecido la pena, y también a tí te la merecerá.


