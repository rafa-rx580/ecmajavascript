function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let n = Number(num.value)
    var s = undefined
    if (num.value.length == 0){
        window.alert('ERRO, DADO INVÁLIDO')
    } else{
        tab.innerHTML = ''
        let item = document.createElement('option')
        for (c = 1; c <= 10; c++){
            let item = document.createElement('option')
                item.value = `tab${c}`
            s = n * c
            item.text = `${n} x ${c} = ${s}`
            tab.appendChild(item)
        }
    }
}