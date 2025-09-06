//localStorage.setItem("nome","Thiago");
// //localStorage.removeItem("nome")

async function login() {

    //Pega a informação do input do usuario
    let usuario = document.querySelector("#usuario").value;

    //Pega a informação do input da senha
    let senha = document.querySelector("#senha").value;
    alert(usuario);
    alert(senha);

    //Se a senhas baterem
    if(usuario == "admin" && senha == "123"){
        //Adiciona estes dados no localStorage
        localStorage.setItem("logado","true");

        //Redireciona para outra pagina
        window.location.href = "dados.html";
    }else{
        alert("Usuario ou senha inválidos!");
    }
}