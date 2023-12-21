function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.getElementById('res');
  if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = ''
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    res.innerHTML = `Sua idade é ${idade} ano(s).<br>`
    if (fsex[0].checked){
      genero = 'Masculine'
       if (idade == 0 && idade <= 10) {
        res.innerHTML += ('Você é uma criança viada!')
        img.setAttribute('src' , 'crianca.png')
      }else if (idade > 10 && idade <= 20){
        res.innerHTML += ('Você é um twink fã de taylor swift!')
        img.setAttribute('src' , 'adolescente.png')
      }else if (idade > 20){
        res.innerHTML += ('Já é maricona!')
        img.setAttribute('src', 'maricona.png')       
      }
    }else if (fsex[1].checked){
      genero = 'Feminine'
      if (idade == 0 && idade <= 10) {
        res.innerHTML += ('É uma sapa mirim')
        img.setAttribute('src', 'crianca2.png')
      
      }else if (idade > 10 && idade <= 20){
        res.innerHTML += ('Sapadrão')
        img.setAttribute('src', 'sapa2.png')
      
      }else if (idade > 20){
        res.innerHTML += ('Caminhoneira FOM FOM ')
        img.setAttribute('src', 'sapa.png')

      }
    }
    res.style.textAlign = 'center'
    res.appendChild(img)
  }
}