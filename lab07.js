/*inicia la primera parte de quiz sin la preguntas*/
 
 let mensaje = document.getElementById("mensaje");
 let initial = document.getElementById("initialScreen");
 let quiz = document.getElementById("quiz");
 let showName = document.getElementById("showname");
 const inputText = document.getElementById("miInput").value;
 const quizForm = document.getElementById("quiz-form");
 let botonenvio = document.getElementById("enviar");
 const resultContainer = document.getElementById("result");
 var modal = document.querySelector('#exampleModal');
 var modalBootstrap = new bootstrap.Modal(modal);

 /*inicia la funcion de boton begin sin la preguntas*/
  
  function showMessageName() {
    const inputText = document.getElementById("miInput").value;
    if (/^.+$/.test(inputText)) {
        $(document).ready(function() {
            $("#quiz").hide().fadeIn(1000);
          });
      console.log("El texto no esta vacio");
      document.getElementById("initialScreen").style.display = "none";
      document.getElementById("quiz").style.display = "block";


      document.getElementById("showname").innerHTML = inputText + "!";
      

    } else {
      console.log("El texto esta vacio");
      document.getElementById("mensaje").innerHTML = "Name not entered";
      document.getElementById("mensaje").style.color = "rgb(248, 203, 0)";
    }
  };
  /*termina la funcion de boton begin sin la preguntas*/

/*finaliza la primera parte de quiz sin la preguntas*/




/*inicia la segunda parte de quiz las preguntas*/



/*inicia el Cronometro*/

// Selecciona el elemento HTML donde para mostar la info
var cronometro = document.getElementById("cronometro");

// Establece la hora inicial


var horaInicial = new Date().getTime();

// Actualiza el cronómetro cada segundo
var intervalo = setInterval(function() {
    // Obtiene la hora actual
    var horaActual = new Date().getTime();

    // Calcula la diferencia de tiempo entre la hora actual y la hora inicial
    var tiempoTranscurrido = horaActual - horaInicial;

    // Calcula los minutos y segundos
    var minutos = Math.floor((tiempoTranscurrido % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000);

    // Agrega un cero inicial si los segundos son menores a 10
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    // Muestra el tiempo transcurrido en el elemento HTML
    cronometro.innerHTML = minutos + ":" + segundos;
}, 2000);


/*finaliza  el Cronometro*/


 /*inicia la funcion de boton submit de las preguntas*/
function envio(){


  const inputText = document.getElementById("miInput").value;



  const q1Answer = document.getElementById("q2").value;

   const q2AnswerA = quizForm.elements.q2a.checked;
   const q2AnswerC = quizForm.elements.q2c.checked;
   const q2AnswerD = quizForm.elements.q2d.checked;

   const q3AnswerA = quizForm.elements.q3a.checked;
   const q3AnswerB = quizForm.elements.q3b.checked;
   const q3AnswerC = quizForm.elements.q3c.checked;
   const q3AnswerD = quizForm.elements.q3d.checked;

   const q4AnswerA = quizForm.elements.q4a.checked;
   const q4AnswerB = quizForm.elements.q4b.checked;
   const q4AnswerC = quizForm.elements.q4c.checked;
   const q4AnswerD = quizForm.elements.q4d.checked;

  const q5AnswerA = quizForm.elements.q5a.checked;
  const q5AnswerB = quizForm.elements.q5b.checked;
  const q5AnswerC = quizForm.elements.q5c.checked;
  const q5AnswerD = quizForm.elements.q5d.checked;

//   /*validacion*/
 let score =0;
   if(q1Answer == "b"){
    console.log("correto");
     score++
     console.log(score);
   }
   if (q2AnswerA === false && q2AnswerC === true && q2AnswerD === false) {
    score++;
    console.log("muy bien");
    console.log(score);
  }
   if (q3AnswerA === true && q3AnswerB === false && q3AnswerC === false && q3AnswerD === true) {
    score++;
    console.log("muy excelente");
    console.log(score);
   }
   if (q4AnswerA === true && q4AnswerB === false && q4AnswerC === false && q4AnswerD === true) {
     score++;
     console.log("muy eavemaria");
     console.log(score);
   }
   if (q5AnswerA === false  && q5AnswerB === false && q5AnswerC === true && q5AnswerD ===false) {
     score++;
     console.log("que berraquera");
     console.log(score);
   }
/*  inicio validacion de campos vacios o preguntas que no se respondieron*/

   var preguntas = document.querySelectorAll('.question-container');
   var todasRespondidas = true;
 
   for (var i = 0; i < preguntas.length; i++) {
     var inputs = preguntas[i].querySelectorAll('input');
     var respondida = false;
 
     for (var j = 0; j < inputs.length; j++) {
       if (inputs[j].checked) {
         respondida = true;
         break;
       }
     }
 
     if (!respondida) {
       todasRespondidas = false;
       break;
     }
   }
 
   if (todasRespondidas) {
    const resultModal = document.getElementById("resultModal");
    const timeModal = document.getElementById("timeModal");
  
    resultContainer.innerHTML =`Obtuviste ${score} de 5 respuestas correctas.`;
    

    modalBootstrap.show();
    clearInterval(intervalo);

    /*funcionalidad parpadeo*/
    var parpadeos = 0;
    var parpadearIntervalo = setInterval(function() {
        if (parpadeos < 10) {
            if (modal.style.visibility === "hidden") {
                modal.style.visibility = "visible";

            } else {
                modal.style.visibility = "hidden";
            }
            parpadeos++;
        } else {
            // Detiene el intervalo de parpadeo
            clearInterval(parpadearIntervalo);
            // Muestra la ventana modal permanentemente
            modal.style.visibility = "visible";
            $("#result").hide().fadeIn(1000);
            
        }
    }, 200);
     /*funcionalidad parpadeo*/
    resultModal.innerHTML = `Result for ${inputText}: ${score} / 5 respuestas correctas.`;
    resultModal.style.background = "yellow";
    resultModal.style.color = "red";
    resultModal.style.fontWeight = "bold";
    resultModal.style.fontSize = "1.5rem";
    resultModal.style.textAlign = "center";

    const tiempoTranscurrido = cronometro.innerHTML;
    timeModal.innerHTML = `you finished in ${tiempoTranscurrido}.`;
    timeModal.style.background = "black";
    timeModal.style.color = "white";
    timeModal.style.fontWeight = "bold";
    timeModal.style.fontSize = "1.5rem";
    timeModal.style.textAlign = "center";
   } else {
     alert('Por favor, responda todas las preguntas antes de enviar el formulario.');
     
   }
   /*  final validacion de campos vacios o preguntas que no se respondieron*/
   
   if(q1Answer == "b" && q2AnswerA === false && q2AnswerC === true && q2AnswerD === false && q3AnswerA === true && q3AnswerB === false && q3AnswerC === false && q3AnswerD === true && q4AnswerA === true && q4AnswerB === false && q4AnswerC === false && q4AnswerD === true && q5AnswerA === false  && q5AnswerB === false && q5AnswerC === true && q5AnswerD ===false)
   {
    $("#miInput").hide().fadeIn(1000);
   resultModal.innerHTML = `Result for ${inputText}: ${score} / 5 respuestas correctas. perfect`;
   resultModal.style.background = "yellow";
   resultModal.style.color = "red";
   resultModal.style.fontWeight = "bold";
   resultModal.style.fontSize = "1.5rem";
   resultModal.style.textAlign = "center";


    const tiempoTranscurrido = cronometro.innerHTML;
    timeModal.innerHTML = `you finished in ${tiempoTranscurrido}.`;
    timeModal.style.background = "black";
    timeModal.style.color = "white";
    timeModal.style.fontWeight = "bold";
    timeModal.style.fontSize = "1.5rem";
    timeModal.style.textAlign = "center";
   
    
  }  
   
   modalBootstrap.hide();

  /*validacion*/  
 }


/*finaliza la segunda parte de quiz las preguntas*/





/*inicia la ayuda de los hint con el fadein and fade out*/
$('#hint1').mouseover(function(){
  $('#hint_q_1').stop().fadeIn(1000);
}).mouseout(function(){
  $('#hint_q_1').stop().fadeOut(100);
});


$('#hint2').mouseover(function(){
  $('#hint_q_2').stop().fadeIn(1000);
}).mouseout(function(){
  $('#hint_q_2').stop().fadeOut(100);
});

$('#hint3').mouseover(function(){
  $('#hint_q_3').stop().fadeIn(1000);
}).mouseout(function(){
  $('#hint_q_3').stop().fadeOut(100);
});

$('#hint4').mouseover(function(){
  $('#hint_q_4').stop().fadeIn(1000);
}).mouseout(function(){
  $('#hint_q_4').stop().fadeOut(100);
});

$('#hint5').mouseover(function(){
  $('#hint_q_5').stop().fadeIn(1000);
}).mouseout(function(){
  $('#hint_q_5').stop().fadeOut(100);
});

/*inicia la ayuda de los hint con el fadein and fade out*/

