$(document).ready(function(){
    $("#exibir").load('mentores.html')        

    $('#sair').click(function(){
        sessionStorage.removeItem('nome')
        sessionStorage.removeItem('foto')
        window.location = 'home.html'
    });
    
    if(sessionStorage.nome != undefined){
        $('#usuario-nome').html(sessionStorage.nome[0].toUpperCase()+sessionStorage.nome.slice(1))
        $('#usuario-foto').attr('src','https://www.citypng.com/public/uploads/small/11639594360nclmllzpmer2dvmrgsojcin90qmnuloytwrcohikyurvuyfzvhxeeaveigoiajks5w2nytyfpix678beyh4ykhgvmhkv3r3yj5hi.png')
        $("#btn-login").hide()        
    } else {
        $("#usuario-nome,#usuario-foto,#config-usuario,#notificacoes").hide()         
    }         

    
    $(".menu-item").click(function(){
        $(".menu-item").removeClass('menu-item-active')
        $(this).addClass('menu-item-active')             
    })

    $("#sessoes").click(function(){            
        $("#exibir").load('sessoes.html')
    })  

    $("#buscaprof").click(function(){
        $("#exibir").load('mentores.html')
    })

    $("#btn-login").click(function(){
        window.location = 'login.html'
    })    
})   