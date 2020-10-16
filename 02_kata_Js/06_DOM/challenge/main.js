function areaCuadrado(){
    var l = Number(document.getElementById('n1').value);
    var resultado = (l*4);

    document.getElementById('resultado').innerHTML = resultado;
}

function areaRec(){
    var b = Number(document.getElementById('nu1').value);
    var h = Number(document.getElementById('nu2').value);
    var resultado1 = (b*h);

    document.getElementById('resultado1').innerHTML = resultado1;
}

function areaTrian(){
    var bas = Number(document.getElementById('num1').value);
    var alt = Number(document.getElementById('num2').value);
    var resultado2 = (bas*alt)/2;
    
    document.getElementById('resultado2').innerHTML = resultado2;
}