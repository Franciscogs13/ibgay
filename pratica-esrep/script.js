function contar(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('ifim')
    let pass = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        alert("[ERRO] Verifique se os campos foram preenchidos corretamente e tente novamente.")
    }else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if (p <= 0){
            alert("Passo inválido considerando PASSO 1")
            p = 1
        }
        if (i < f){
            for(c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F436}`
            }
        
        }else{
            for(c=i; c >= f; c -= p){
                res.innerHTML +=`${c} \u{1F638}`
            }
        }
        res.innerHTML += `\u{1F6A9}`
    }
}