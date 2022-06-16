function temperatureconvert(valNum){
    valNum=parseFloat(valNum)
    document.getElementById('celcius').innerHTML=(valNum-32) / 1.8;
}