$(document).ready(function(){

    let mentores = document.querySelector('#info')
    
    // fetch('https://reqres.in/api/users')
    fetch('db/dbmentores.json')
    .then(function(response){
        return response.json()
    })
    .then(function(response){

        //const pessoasFiltradas = response.filter((resposta) => resposta.cargo == 'Scrum Master')
        //const nomePessoa = pessoasFiltradas.map(p => p.espec) 
        //console.log(pessoasFiltradas)
        //console.log(response[1].espec.filter())

        //response.data.forEach(function(user){
        response.forEach(function(user){
            let divMentor = document.createElement('div');
            divMentor.setAttribute("id",user.id)
            divMentor.classList.add('divMentor');
            divMentor.innerHTML = '<img class="mentorImg" src="'+ user.avatar +'"/><span class="mentorNome">'+ user.nome +'</span><span class="mentorCargo">'+ user.cargo +'</span><div class="mentorEsp"><span class="itemEspc">'+user.espec[0]+'</span><span class="itemEspc">'+user.espec[1]+'</span></div>';
            mentores.appendChild(divMentor);
        });

        // INSERE TODOS OS VALORES UNICOS DE HABILIDADE EM UM SELECT
        $('#listaHab').html(function(){
            let habilidades = []
            response.forEach((mentor) => {                    
                for(var i in response){                                              
                    if (mentor.espec[i] != undefined && !habilidades.includes(mentor.espec[i])){                         
                        habilidades.push(mentor.espec[i])
                    }                                                             
                }         
            })            

            for (var h in habilidades){
                let option = document.createElement('option');
                option.setAttribute('value',habilidades[h])
                option.innerHTML = `${habilidades[h]}`;
                $(this).append(option);
            }            
        })

        //INSERE TODOS OS VALORES ÚNICOS DE CARGOS EM UM SELECT 
        $('#listaCargo').html(function(){
            let cargos = []
            response.forEach((mentor) => {                                                                
                if (mentor.cargo != undefined && !cargos.includes(mentor.cargo)){                         
                    cargos.push(mentor.cargo)
                }                                                             
            })            

            for (var c in cargos){
                let option = document.createElement('option');
                option.setAttribute('value',cargos[c])
                option.innerHTML = `${cargos[c]}`;
                $(this).append(option);
            }            
        })

        // DIRECIONA O USUÁRIO PARA A PÁGINA DO MENTOR SELECIONADO    
        $('.divMentor').click(function(){
            var idMentor = $(this).attr('id')
            $("#idMentor").html(idMentor)
            //window.location = 'mentor.html?id=' + $(this).attr('id')
            $("#exibir").load('mentor.html?id=' + $(this).attr('id'))
        });
    });  
    
    // RETORNA O VALOR DA HABILIDADE SELECIONADA
    $("#listaHab").change(function(){
        var valor = $("#listaHab option:selected").val();
        console.log(valor);
    });
    
    
    // FILTROS 
    
})