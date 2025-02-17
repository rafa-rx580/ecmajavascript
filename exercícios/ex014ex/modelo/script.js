function contar(){
    var start = document.getElementById('txtstart');
    var end = document.getElementById('txtend');
    var step = document.getElementById('txtstep');
    var res = document.getElementById('res')
    var n = 0
    var s = Number(start)
    var e = Number(end)
    var st = Number(step)
    for (n = s; n <= e; n = n + st ){
       res.innerHTML = `${n}` 
    }
}