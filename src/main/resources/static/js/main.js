window.onload = function() {
    document.getElementById("siderbar1").innerHTML = '<a class="active" href="/"><i class="fas fa-home fa-2x"></i>Principal</a>' +
        '<a href="/public/noticias.html" class="tooltip"><i class="far fa-newspaper fa-2x"></i>Noticias</a>' +
        '<a href="/adicionarPessoa" class="tooltip"><i class="fas fa-user-plus fa-2x"></i>Adc pessoa</a>' +
        '<a href="/listarPessoas" class="tooltip"><i class="far fa-list-alt fa-2x"></i> Listar pessoas</a>' +
        '<a href="/public/contato.html" class="tooltip"><i class="fas fa-envelope-open-text fa-2x"></i>Enviar e-mail</a>' +
        '<a href="/public/sobre.html" class="tooltip"><i class="far fa-question-circle fa-2x"></i>Sobre o site</a>';
        
}

function openNewsWebPages(exp)
{
    switch(exp)
    {
        case 1:
            window.open("https://g1.globo.com/", "_blank");
            break;
        case 2:
            window.open("https://www.uol.com.br/","_blank");
            break;
    }
}

