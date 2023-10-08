let celciusidEl=document.getElementById("celciusid")
let fahrenheitidEl=document.getElementById("Fahrenheitid")
let KelvinidEl = document.getElementById("Kelvinid")
let clearbtnidEl=document.getElementById("clearbtnid")

function roundnum(num){
    return Math.round(num*100)/100
}

celciusidEl.addEventListener('input',function(){
    let numcelcius=parseFloat(celciusidEl.value)
    fahrenheitidEl.value=roundnum((numcelcius*(9/5))+32)
    KelvinidEl.value=roundnum(numcelcius+273.15)
})

fahrenheitidEl.addEventListener('input',function(){
    let numfarhenheit=parseFloat(fahrenheitidEl.value)
    celciusidEl.value=roundnum((numfarhenheit-32)*(5/9))
    KelvinidEl.value=roundnum((numfarhenheit-32)*(5/9)+(273.15))
})

KelvinidEl.addEventListener('input',function(){
    let numkelvin=parseFloat(KelvinidEl.value)
    fahrenheitidEl.value=roundnum((numkelvin - 273.15) * (9/5) + 32)
    celciusidEl.value=roundnum(numkelvin - 273.15)
})

function clearbtn(){
    celciusidEl.value = ""
    fahrenheitidEl.value=""
    KelvinidEl.value=""
}