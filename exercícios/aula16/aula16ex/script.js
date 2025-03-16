let num = document.getElementById('txtnum')
let sel = document.getElementById('fsel')
let res = document.getElementById('res')
let valores = []

function isnum(n){
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function insel(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function vet(){
    if (isnum(num.value) && !insel(num.value, valores)){

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        sel.appendChild(item)
        res.innerHTML = ''

    } else{
        window.alert('Valor inválido ou já registrado.')
    }
    num.value = ''
    num.focus()
}

function analise(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else{
        let tot = valores.length
        
        //total de itens adicionados

        res.innerHTML = ''
        res.innerHTML += `<p>O total de itens adicionados foi ${tot}</p>`
        res.innerHTML += `<p></p>`

        // maior e menor

        let mai = valores[0]
        let men = valores[0]

        for(let pos in valores){
            if (valores[pos] > mai){
                mai = valores[pos]
            }
            if (valores[pos] < men){
                men = valores[pos]
            }
        }

        res.innerHTML += `<p>O menor valor é ${men}</p>`
        res.innerHTML += `<p>O maior valor é ${mai}</p>`

        //soma e media

        soma = 0
        media = 0

        for(let pos in valores){
            soma = soma += valores[pos]
        }

        media = (soma / tot)

        res.innerHTML += `<p>A soma é igual a ${soma}</p>`
        res.innerHTML += `<p>A média é igual a ${media}</p>`

        
    }

}