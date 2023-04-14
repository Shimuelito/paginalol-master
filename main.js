function nComentario(){
    let li =document.createElement("li");
    let valoringresado = document.getElementById("nuevoComentario").values;
    let text = document.createTextNode(valoringresado);
    li.appendChild(text);

    if(valoringresado === ""){
        alert("Ingrese Comentario")
    } else {
        document.getElementById("Comentarios").appendChild(li);
    }

    document.getElementById("NuevoComentario").values="";
    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = ("Borrar");
    borrar.className = "close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    let i;
    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display ="none";
        }
    }

}