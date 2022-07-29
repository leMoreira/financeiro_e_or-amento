let chamarLogin = document.getElementById("chamarLogin");
var chamarCadastro = document.getElementById("chamarCadastro");


chamarCadastro.addEventListener("click", () =>{
    let col_cadastro = document.getElementById("col-cadastro");
    col_cadastro.style.display = "flex";
    let col_login = document.getElementById("col-login");
    col_login.style.display="none";

})

chamarLogin.addEventListener("click", () =>{
    let col_cadastro = document.getElementById("col-login");
    col_cadastro.style.display = "flex";
    let col_login = document.getElementById("col-cadastro");
    col_login.style.display="none";

})