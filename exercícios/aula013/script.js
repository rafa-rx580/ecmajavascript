function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    //var hora = data.getHours();
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas!`;
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'morning.jpg'
        document.body.style.background = '#ffe4c4'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'afternoon.jpg'
        document.body.style.background = '#e6840e'
    } else{
        //BOA NOITE
        img.src = 'night.jpg'
        document.body.style.background = '#000000'
    }
}