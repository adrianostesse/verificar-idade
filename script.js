function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src' , 'bebe-m.jpg')
            } else if (idade <21) {
                img.setAttribute('src' , 'jovem-m.jpg')
            } else if (idade <50) {
                img.setAttribute('src' , 'adulto-m.jpg')
            } else {
                img.setAttribute('src' , 'idoso-m.jpg')
            }

        }else if(fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src' , 'bebe-f.jpg')
            } else if (idade <21) {
                img.setAttribute('src' , 'jovem-f.jpg')
            } else if (idade <50) {
                img.setAttribute('src' , 'adulto-f.jpg')
            } else {
                img.setAttribute('src' , 'idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
        res.appendChild(img)
    }
}