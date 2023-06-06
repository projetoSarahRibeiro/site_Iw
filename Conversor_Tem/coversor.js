document.getElementById('corverter').onclick = ConversorTem;
document.getElementById('limpar').onclick = limpafren;

function ConversorTem(){
    var fahrenheit = document.getElementById("fahrenheit").value; 
    var celsius = document.getElementById("celsius").value; 
    
    if(isNaN(fahrenheit) || isNaN(fahrenheit)){
        alert("Digite um valor!");
        return
    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    } else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }

    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}
 

function limpafren(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celcius").value = "";
}
