
document.getElementById('cep').addEventListener("change", function(event){
    event.preventDefault()

    var cep = document.getElementById('cep')
    var estado = document.getElementById('estado')
    var cidade = document.getElementById('cidade')
    var bairro = document.getElementById('bairro')
    var rua = document.getElementById('rua')

    estado.value = ``
    cidade.value = ``
    bairro.value = ``
    rua.value = ``
    
    var cepNumero = cep.value
    var req = new XMLHttpRequest()
    req.open("GET", `https://viacep.com.br/ws/${cepNumero}/json/`)
    req.onload = function(){
        if(req.status == 200){
            resObj = JSON.parse(req.responseText)

            estado.value = resObj.uf
            cidade.value = resObj.localidade
            bairro.value = resObj.bairro
            rua.value = resObj.logradouro
        }
    }
    req.send()
})

document.getElementById('formCadastro').addEventListener("submit", function(event){
    // event.preventDefault()

    alert('cadastrado na lista de espera')

})



















// ====================================================================================================

// const data = new Date()
// console.log(data)

// console.log("Ano: " + data.getFullYear())// Retorna o ano da data.
// console.log("Mes: " + data.getMonth())// Retorna o mês da data (0-11, onde 0 representa janeiro).
// console.log("Dia: " + data.getDate())// Retorna o dia do mês da data.
// console.log("Hora: " + data.getHours())// Retorna a hora da data.
// console.log("Minuto: " + data.getMinutes())// Retorna os minutos da data.
// console.log("Segundo: " + data.getSeconds())// Retorna os segundos da data.
// console.log("Milisegundo: " + data.getMilliseconds())// Retorna os milisegundos da data.

// console.log(data.toISOString())// Transforma para String para outros processamentos

// ====================================================================================================

// class Pilha{
//     constructor(){
//         this.lista = []
//     }
//     empilhar(elemento){
//         this.lista.push(elemento);
//     }
//     desempilhar(){
//         if (this.lista.length === 0) {
//             throw new Error("Pilha vazia");
//         } else {
//             this.lista.pop();
//         }
//     }
//     mostrar(){
//         console.log(this.lista);
//     }
// }

// const novaLista = new Pilha();
// novaLista.empilhar("primeiro")
// novaLista.mostrar()
// novaLista.empilhar("segundo")
// novaLista.mostrar()
// novaLista.empilhar("terceiro")
// novaLista.mostrar()
// novaLista.desempilhar()
// novaLista.mostrar()

// ====================================================================================================

// var req = new XMLHttpRequest()

// // var nomePokemon = "ditto"
// var nomePokemon = "charmander"

// // var resp = req.open("GET", `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
// var resp = req.open("GET", `https://pokeapi.co/api/v2/ability/155/`)

// req.onload = function(){
//     if(req.status == 200){
//         resObj = JSON.parse(req.responseText)
//         console.log(resObj)
//     }
// }

// req.send()

// ====================================================================================================

// ====================================================================================================
