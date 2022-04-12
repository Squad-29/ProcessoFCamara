$(document).ready(function(){
    let $usuarioNome, $usuarioEmail, $usuarioSenha, $usuarioSenhaConfirm, $usuarioFoto, $usuarioEspecialidades;

    $('#usuarioTipo').prop('checked',false)

    $('#usuarioTipo').click(function(){
        $('#especialidades').toggle('slow');			
    })

    $('#btnInserir').click(function(){		

        $usuarioNome = $('#usuarioNome').val()
        $usuarioEmail = $('#usuarioEmail').val()
        $usuarioSenha = $('#usuarioSenha').val()
        $usuarioSenhaConfirm = $('#usuarioSenhaConfirm').val()
        $usuarioFoto = $('#usuarioFoto').val()
        $usuarioEspecialidades = $('#usuarioEspecialidades').val() 
        $usuarioTipo = $('#usuarioTipo')      
        
        let usuario_dados = new Array();
        
        usuario_dados = JSON.parse(localStorage.getItem('usuarios')) 
        ? JSON.parse(localStorage.getItem('usuarios'))
        : [];


        if($usuarioNome == '' || $usuarioEmail == '' || $usuarioSenha == '' || $usuarioSenhaConfirm == ''){
            alert('Verifique os campos em branco');
            return;
        } else if (usuario_dados.some((v) =>{return v.email == $usuarioEmail})){				
            $($('#usuarioEmail')).get(0).setCustomValidity('Email já cadastrado.');
            $($('#usuarioEmail')).get(0).reportValidity();
        } else {
            if($usuarioTipo.is(':checked') && $usuarioEspecialidades != ''){
                usuario_dados.push({
                    nome:$usuarioNome,
                    email:$usuarioEmail,
                    senha:$usuarioSenha,
                    foto:`https://github.com/${$usuarioFoto}.png`,
                    especialidades:$usuarioEspecialidades.split(','),
                    tipo: 'mentor'
                });				
            } else {
                usuario_dados.push({
                    nome:$usuarioNome,
                    email:$usuarioEmail,
                    senha:$usuarioSenha,
                    foto:`https://github.com/${$usuarioFoto}.png`,
                });
            };
            localStorage.setItem('usuarios', JSON.stringify(usuario_dados));
            alert('Usuário cadastrado com sucesso!')
            $('input').each(function(){
                $(this).val('')
            })
            window.location.href="login.html"
        };			
    });

    $('#usuarioSenhaConfirm').blur(function(){
        if($('#usuarioSenha').val() !== $(this).val()){
            $(this).get(0).setCustomValidity('Senhas não são iguais');
            $(this).get(0).reportValidity();
            $($('#usuarioSenha')).css('border','solid red')
            $(this).css('border','solid red')
            return false;
        } else {
            $(this).get(0).setCustomValidity('');
            $($('#usuarioSenha')).css('border','solid green')
            $(this).css('border','solid green')
            return true;
        }
    });
});