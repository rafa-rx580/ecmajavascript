function contar(){
    let start = document.getElementById('txti')
    let end = document.getElementById('txte')
    let step = document.getElementById('txts')
    let res = document.getElementById('res')
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert('ERRO, FALTAM DADOS')
    } else if (Number(start.value) < Number(end.value)){
        res.innerHTML = 'Contando...'
        let t = Number(start.value)
        let e = Number(end.value)
        let p = Number(step.value)
        for(let n = t; n <= e; n += p){
            res.innerHTML += ` ${n} `
        }
    } else{
        res.innerHTML = 'Contando...'
        let t = Number(start.value)
        let e = Number(end.value)
        let p = Number(step.value)
        for (let n = t; n >= e; n -= p){
            res.innerHTML += ` ${n} `
        } 
    }
}