function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
        if (fano.value.length == 0 || Number(fano.value) > ano){
            window.alert('ERRO! VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
        } else{
            var fsex = document.getElementsByName('radsex');
            var idade = ano - Number(fano.value);
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked){
                genero = 'homem'
                if (idade >= 0 && idade < 13){
                    //criança
                    img.setAttribute('src', 'mbaby.jpg')
                } else if (idade < 22){
                    // jovem
                    img.setAttribute('src', 'myoung.jpg')
                } else if (idade < 60){
                    //adulto
                    img.setAttribute('src', 'madult.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'mold.jpg')
                }
            } else{
                genero = 'mulher'
                if (idade >= 0 && idade < 13){
                    //criança
                    img.setAttribute('src', 'fbaby.jpg')
                } else if (idade < 22){
                    // jovem
                    img.setAttribute('src', 'fyoung.jpg')
                } else if (idade < 60){
                    //adulto
                    img.setAttribute('src', 'fadult.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'fold.jpg')
                }
            }
            res.innerHTML = `Detectamos um(a) ${genero} com ${idade} ano(s)!`
            res.appendChild(img)
        }
    

}