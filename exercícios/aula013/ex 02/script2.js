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
                } else if (idade < 22){
                    // jovem
                } else if (idade < 60){
                    //adulto
                } else {
                    //idoso
                }
            } else{
                genero = 'mulher'
                if (idade >= 0 && idade < 13){
                    //criança
                } else if (idade < 22){
                    // jovem
                } else if (idade < 60){
                    //adulto
                } else {
                    //idoso
                }
            }
            res.innerHTML = `${genero} ${idade}`
        }
    

}