

 // mudando a cor do header
let cabecalho = document.getElementById("cabecalho")

// adicionando link para o item cursos
let cursos = document.querySelector("#menu_opcoes nav a:first-child") 


//alterando link action o formulario
 let formAction = document.querySelector ("form")
 if (formAction) {
     formAction.action = "/sucesso.html";
}



cabecalho.style.backgroundColor = "#2E948A"

//Usando o query selector para chamar o seletor e o first-child para chamar o primeiro link (a)
cursos.setAttribute("href", "/cursos.html") 

// centralizando os elementos da introducao
let introducao = document.querySelector ("#introducao")
introducao.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;

`


 //---------ADICIONANDO CAMPO TELEFONE NO FORMULARIO--------//
function adicionarCampoTelefone() {
  //inserindo um campo de telefone abaixo do campo de email dentro do formulario
  let formTel = document.querySelector ("#formulario form") // criando variavel para selecionar o formulario
  let campoTelefone = document.createElement ("input") // cruando cariavel para criar um input
  
  //criando os atributos para o campo do telefone
  campoTelefone.type = "tel"
  campoTelefone.name = "telefone"
  campoTelefone.placeholder = "telefone"
  
  
  // criando varialvel para selecionar o input do tipo email do formulario
  let campoEmail = formTel.querySelector ("input[type='email']")
  // inserindo a variavel do telefone antes da varivel de email, através do (insertAdjacentElemnt) 
  campoEmail.insertAdjacentElement("afterend", campoTelefone) 



}
//fazendo com que o codigo seja adicionado somente quando html for carregado, assim chamando a funcao dentro dele
document.addEventListener("DOMContentLoaded", function() {
    adicionarCampoTelefone();
  })

//----------FIM DO CAMPO TELEFONE--------//



document.addEventListener("DOMContentLoaded", function() {
    // arrumando o campo de mensagem do formulario
let campoMensagem = document.querySelector (" #formulario textarea")
campoMensagem.style.boxSizing = "border-box"

  })

document.addEventListener("DOMContentLoaded", function() {
// alterando o tamanho do botão do formulario
let botaoForm = document.querySelector ("#enviar")
botaoForm.style.width = "200px"
    
})


document.addEventListener("DOMContentLoaded", function() {

let novaSecao = document.createElement("section")

novaSecao.innerHTML = `

<section class='titulo depoimento'>
            <h3>Depoimentos</h3>
        </section>

        <section id='falam_sobre'>
            <div class="depoimentos">
                <img src="imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
                <p>
                    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam.”
                    <br>
                    <br>
                    Wally, 25
                </p>
            </div>

            <div class="depoimentos">
                <img src="imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
                <p>
                    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam.”
                    <br>
                    <br>
                    Jaden Smith, 23
                </p>
            </div>

            <div class="depoimentos">
                <img src="imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
                <p>
                    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam.”
                    <br>
                    <br>
                    Whoopi Goldberg, 37
                </p>
            </div>

            <div class="depoimentos">
                <img src="imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
                <p>
                    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam.”
                    <br>
                    <br>
                    Janes Joplin, 29
                </p>
            </div>
        </section>


`

formTel = document.querySelector(".formulario")
formTel.insertAdjacentElement("afterend", novaSecao)




})

//alterando o tirulo dos depoimentos
let tituloDepoimentos = document.querySelector(".titulo.depoimento h3")
tituloDepoimentos.innerText = "O Que Falam Sobre Nós" 



// Alterando o nome de uma classe que se repete no html
// usando o for para percorrer os elementos da classe titulo e mudar o elemento desejado atraves de uma condição
let tituloBlog = document.querySelectorAll(".titulo h3")

for (var i = 0; i <  tituloBlog.length; i++) {
    if (tituloBlog[i].innerHTML == "Blog"){
        tituloBlog[i].innerHTML = "Mais Conteúdo para Você"
    }

}



//Transformando todos os elementos da classe titulo dentro da variavel utilizando o (Array.From)
//Usando map para percorrero array criado na variavel titulos, em seguida transformando todas letras em maiusculas
let titulos = Array.from(document.querySelectorAll(".titulo")) 
titulos.map(function(titulo){
    titulo.innerHTML = titulo.innerHTML.toUpperCase()
})


//inserindo link no id todos  os posts e direcionando para a pagina blog
let todosOsPosts = document.querySelector ("#todos_posts")
todosOsPosts.setAttribute("href", "/blog.html") 

//inserindo uma div nan seção dos cursos
let investimentos = document.querySelector("#investimentos_poupando_independencia")

investimentos.innerHTML += `

<div id="independencia">
<img src="imagens/independencia_financeira.png" width="180px"
alt="Independência Financeira">
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore
eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar agora</a>
</div>


`












