function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#ecbd8e'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#d6d0c5'
    } else {
        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#57321d'
    }
}


