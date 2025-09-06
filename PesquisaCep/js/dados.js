async function verificarLogin() {

    //Pega o token que foi atribuido a ele no localStorage
    let logado = localStorage.getItem("logado");

    //Valida o token, se for diferente do que está armazenado, manda ele direto para tela de login
    if(logado != "true"){

        alert("Você precisa fazer login primeiro");
        window.location.href = "index.html"

    }else{

        //Recebe alguma informação
        alert("Login realizado com sucesso!");
    }
}
async function sairDoSistema(){

    //Retira o token armazenado do localStorege
    localStorage.removeItem("logado");

    //Manda ele direto para tela do sistema
    window.location.href = "index.html";

}
async function verificarCep() {
    let cep = document.querySelector("#cep").value;

    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let data = await response.json();
    console.log(data);

    document.getElementById("resultado").innerHTML = `
    <p><strong>Endereço:</strong> ${data.logradouro}</p>
    <p><strong>Bairro:</strong> ${data.bairro}</p>
    <p><strong>Cidade:</strong> ${data.localidade}=</p>
    <p><strong>Estado:</strong> ${data.uf}=</p>
    <p><strong>Cep:</strong> ${data.cep}=</p>
    `;


}