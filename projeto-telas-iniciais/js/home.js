$(document).ready(function(){
    $("#exibir").load('mentores.html')        

    $('#sair').click(function(){
        sessionStorage.removeItem('nome')
        sessionStorage.removeItem('foto')
        window.location = 'home.html'
    });
    
    if(sessionStorage.nome != undefined){
        $('#usuario-nome').html(sessionStorage.nome)
        $('#usuario-foto').attr('src',sessionStorage.foto)
        $("#btn-login").hide()        
    } else {
        $("#usuario-nome,#usuario-foto,#config-usuario,#notificacoes").hide()         
    }         

    $("#buscaprof").click(function(){
        $("#exibir").load('mentores.html')
    })

    $("#btn-login").click(function(){
        window.location = 'login.html'
    })
})   