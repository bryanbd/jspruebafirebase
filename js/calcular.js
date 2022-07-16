function calcularimc(){
    var p = document.getElementById("peso").value;
    var alt = document.getElementById("altura").value;
    var IMC = p/(alt*alt);
    var IMCF = IMC.toFixed(1);
    var comentario;
    var cor;

  
    
    if (IMCF < 18.5) 
{comentario = "bajo de peso";
}
if (IMCF >=18.5 && IMCF <=24.9) 
{comentario = "con peso adecuado";
}
if (IMCF >=25 && IMCF <=29.9) 
{comentario = "con sobrepeso";
}
if (IMCF >=30 && IMCF <=34.9) 
{comentario = "con Obesidad Grado 1";
}
if (IMCF >=35 && IMCF <=39.9) 
{comentario = "con Obesidad Grado 2";
}
if (IMCF >40) 
{comentario = "con Obesidad Grado 3";
}
document.fimc.IMC.value = IMCF;
document.fimc.ustp.value = "Usted esta "+ comentario;

guardar();
}
function custRound(x,places) {
    return (Math.round(x*Math.pow(10,places)))/Math.pow(10,places)
}