let num = document.getElementById('inum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function numero(){
    if(isNumero(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        //quando for adicionado novos números e o resultados já estiver finalizado ele apagara da tela e quando for finalizar ele mostrará outro resultado com os novos números que foram adicionados.
    }else{
        alert('Valor inválido ou já encontrado  na lista')
    }
    //aqui ele vai apagar o número depois de ser adicionado na lista e o num.focus() vai deixar o cursor focano na caixa de texto, assim não será preciso clicar dentro dela todas as vezes para adiconar um novo número.
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] <  menor)
            menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número da lista é ${maior} e o menor é ${menor}.</p>`
        res.innerHTML+=`<p>Somando todos os valores, temos um de total de ${soma}.</p>`
        res.innerHTML+=`<p>A média dos valores é ${media}</p>`
    }
}