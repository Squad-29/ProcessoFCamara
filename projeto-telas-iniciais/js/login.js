// MOSTRAR SENHA
$(document).ready(function(){
    $('#mostrarSenha').mouseenter(function(){
        $(this).css('cursor','pointer');			

        $(this).click(function(){
            let campoSenha = $('#usuarioSenha')
            let campoSenhaTipo = $('#usuarioSenha').attr('type')

            if (campoSenhaTipo == 'password'){
                campoSenha.attr('type','text')
            } else {
                campoSenha.attr('type','password')
            }
        });			
    })

    // LOGIN DO USUÁRIO
    $('#btnEntrar').click(function(){
        let $usuarioEmail, $usuarioSenha;

        $usuarioEmail = $('#usuarioEmail').val()
        $usuarioSenha = $('#usuarioSenha').val()

        let user_records = new Array();

        user_records = JSON.parse(localStorage.getItem('usuarios')) ? JSON.parse(localStorage.getItem('usuarios')) : []

        if(user_records.some((v) => { return v.email == $usuarioEmail && v.senha == $usuarioSenha})){
            alert('login pass')

            let current_user = user_records.filter((v) => { return v.email == $usuarioEmail && v.senha == $usuarioSenha})[0]
            
            sessionStorage.setItem('nome',current_user.nome)
            sessionStorage.setItem('foto',current_user.foto)
            window.location.href="index.html"

        } else {
            alert('Usuário ou senha inválidos!')
        }
    });
});