let val = [4, 3, 2, 5];
/* 
for (let pos = 0; pos < val.length; pos++){
    console.log(`A posição ${pos} corresponde ao valor ${val[pos]}`)
} */
for (let pos in val){
    console.log(`A posição ${pos} possui valor ${val[pos]}`)
}