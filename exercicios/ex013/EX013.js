var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

//console.log(`Agora são ${hora}:${minuto}.`)

if (hora < 12) {
    console.log(`Agora são ${hora}:${minuto}. Bom dia!`)
} else if (hora < 18) {
    console.log(`Agora são ${hora}:${minuto}. Boa tarde!`)
} else {
    console.log(`Agora são ${hora}:${minuto}. Boa noite!`)
}