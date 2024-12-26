function verificar() {
  var data = new Date();
  var ano = data.getFullYear()
  var fano = document.getElementById('textano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(ano.value) > ano) {
  window.alert(`[ERRO] Favor verifique os dados e tente novamente!`)

  } else {
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(fano.value)
  var gênero = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')

  if(fsex[0].checked) {
    gênero = 'Homem'
    if ( idade >= 0 && idade < 3) {
        // Bebê
      img.setAttribute('src', './imagens/bebe_menino.png')
        
      } else if (idade < 10) {
       // Criança 
        img.setAttribute('src', './imagens/menino_criança.png')

      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', './imagens/homem_adolescente.png')

  } else if (idade < 50) {
      // adulto
      img.setAttribute('src', './imagens/homem_adulto.png')
  
  } else {
    // idoso
    img.setAttribute('src', './imagens/homem_idoso.png')
  }

  
  
  
  }
   else if (fsex[1].checked) {
    gênero = 'Feminino'

   if ( idade >= 0 && idade < 3) {
      // Bebê
      img.setAttribute('src', './imagens/bebe_menina.png')

   } else if ( idade < 10) {
    // Criança
    img.setAttribute('src', './imagens/menina_criança.png')
  } else if (idade < 21) {
    // Jovem
    img.setAttribute('src', './imagens/mulher_adolescente.png')

} else if (idade < 50) {
  // adulto

  img.setAttribute('src', './imagens/mulher_adulta.png')

} else {
// idoso

img.setAttribute('src', './imagens/mulher_idosa.png')
}

  }
 res.style.textAlign = 'center'
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
  res.appendChild(img);
  }
}
