function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO! FALTAM DADOS')
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = `<p> Contando <br></p>`;
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <= 0){
            window.alert('PASSO INVÁLIDO')
        } else{
        //Contagem normal
        if (i < f) {
        for (c = i; c <= f; c += p){
            res.innerHTML += `${c}  \u{27A1}  `
        }
        }
        //Contagem regressiva
        else{
            for (c = i; c >= f; c -= p){
                res.innerHTML += `${c}  \u{27A1}`
            }
                 
        }

        res.innerHTML += `\u{1F3C1}`
    }
}
    
}