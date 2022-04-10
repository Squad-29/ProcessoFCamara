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
        $('#usuario-nome').hide()
        $('#usuario-foto').hide()
        $('#config-usuario').hide()            
    }         

    $("#buscaprof").click(function(){
        $("#exibir").load('mentores.html')
    })

    $("#btn-login").click(function(){
        window.location = 'login.html'
    })
})   