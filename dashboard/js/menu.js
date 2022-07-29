
let menu = document.getElementById("menu");
let close = document.getElementById("fechar");
menu.addEventListener("click", ()=>{
    let btn_menu = document.querySelector("button#menu");
    btn_menu.style.marginLeft = "-50%";
    let btn_fechar = document.querySelector("button#fechar");

    btn_fechar.style.marginLeft = "0";
    let col_menu = document.querySelector(".col_menu");
        col_menu.style.marginRight = "0";
})


close.addEventListener("click", ()=>{
    let btn_menu = document.querySelector("button#menu");
    btn_menu.style.marginLeft = "0";
    let btn_fechar = document.querySelector("button#fechar");

    btn_fechar.style.marginLeft = "-50%";
    let col_menu = document.querySelector(".col_menu");
        col_menu.style.marginRight = "-70%";
})