function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotomenino.png')
            } else if (idade < 21) {
                //jovem
                  img.setAttribute('src', 'fotogaroto.png')
            } else if (idade < 60) {
                //adulto
                  img.setAttribute('src', 'fotoadulto.png')
            } else {
                //idoso
                  img.setAttribute('src', 'fotoidoso.png')
            }
            

        } else if (fsex[1].checked) {
            gênero = 'Mulher'

         if (idade >=0 && idade < 10) {
                //criança
                  img.setAttribute('src', 'fotomenina.png')
            } else if (idade < 21) {
                //jovem
                  img.setAttribute('src', 'fotogarota.png')
            } else if (idade < 60) {
                //adulta
                  img.setAttribute('src', 'fotoadulta.png')
            } else {
                //idosa
                  img.setAttribute('src', 'fotoidosa.png')
            }
            
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        res.style.img = 'center'
    }

}