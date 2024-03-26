function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var val = Number(txtv.value)
    res.innerHTML = `<font size="5"><p>Você nasceu em <strong>${val}</strong>.</font></p>`
    
    if (val > 1994 && val < 2011 ) {
    res.innerHTML += `<font size="5">Você pertence a <strong>Geração Z</strong></font>`
    }

    else if(val > 1983 && val < 1996) {
    res.innerHTML +=`<font size="5">Você pertence a <strong>Geração Y</strong></font>`  
    }

    else if(val > 1963 && val < 1985) {
    res.innerHTML += `<font size="5">Você pertence a <strong>Geração X</strong></font>`    
    }

    else if(val > 2010) {
    res.innerHTML += `<font size="5">Você pertence a <strong>Geração Alpha</strong></font>`   
    }

    else if(val > 1944 && val < 1965) {
    res.innerHTML += `<font size="5">Você pertence a <strong>Geração Baby Boomer</strong></font>`   
    }

    else if(val < 1944) {
    res.innerHTML += `<font size="5"><strong>Geração Antecessora</strong></font>`   
    }

res.innerHTML += `<font size="6"><p><strong>Parabéns!</strong></p></font>`
}