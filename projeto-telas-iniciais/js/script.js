$(document).ready( function(){

    $(function(){
        $("#datepicker").datepicker({ minDate: -0, maxDate: "+1M" });;
    });

    if (sessionStorage.nome == undefined){
        $('.menuHome').hide()
        $(".infoUsuario").hide()
    } else {
        $(".regLog").hide()
        $('.menuHome').show()
        $('.content').load('home.html')
    }
// funções do menu
    $('.menuHome').click(function(){
        $('.content').load('home.html');
    });
    
    $('.menuMentores').click(function(){
        let c = 0;
        if (c == 0){
            $('.content').load('mentores.html')
            c = 1
        } else {
            return
        }
        
    });
    
    $('.menuFaq').click(function(){
        $('.content').load('faq.html');
    });
    
    //$('.infoUsuario').html(`Bem vindo ${sessionStorage.nome}`);
    $('.infoUsuario').html(function(){
        $(this).append(`<p>Bem vindo ${sessionStorage.nome}</p>`)
        $(this).append(`<img src='${sessionStorage.foto}' width='30px' style='border-radius:100%;'>`)
        $(this).append('<i class="sair fa-solid fa-arrow-right-from-bracket"></i>')
    });
    
    $('.sair').click(function(){
        sessionStorage.removeItem('nome')
        window.location.reload('index.html')
    });
    
    $('.chat').click(function(){
        $('.chatScreen').toggle(200)
    });

    $('.btnRegistrar').click(function(){
        window.location ='cadastro.html'
    });

    $('.btnLogin').click(function(){
        window.location ='login.html'
    });
})



