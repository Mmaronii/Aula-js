var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Então agora é manha')
} else 
    if (hora <= 18 || hora <= 23) {
        console.log('Agora é tarde') 
    } else{
        console.log('Agora é noite')
    }  