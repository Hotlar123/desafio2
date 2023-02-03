//1 - crie uma função que exiba uma mensagem no console

function oi(mensagem) {
    console.log(mensagem);
}

oi("oi bom dia")

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function mostrarNome(nome){
    console.log(nome)
}
mostrarNome("Caio")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function infos(nome, idade, musica){
    console.log(nome)
    console.log(idade)
    console.log(musica)
}
infos("Caio", 16, "relaxante")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function info(filme, musica){
    console.log(filme)
    console.log(musica)
}
info("Bladerunner 2077", "Stars,sleepy soul")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(valor){
    console.log(valor)
}
triplo(3*3)

//6 - crie uma função que  verifique se uma  variável é true ou false

let bool = true;

function verificarVerdade() {
    if (bool ==  true) {
        return true
    } else {
        return false
    }
}
console.log(verificarVerdade())