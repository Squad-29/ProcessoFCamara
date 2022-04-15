$(document).ready(function(){

    let testeFiltro = []
    let habilidadeFiltrada = []
    let mentores = document.querySelector('#info')
    
    fetch('https://fc29api.herokuapp.com/codejava/api/v1/mentores')
    .then(function(response){
        return response.json()
    })
    .then(function(response){

        exibeCards(response);

        function exibeCards(lista,habilidade){
            lista.forEach(function(user){
                let divMentor = document.createElement('div');
                divMentor.setAttribute("id",user.id)
                divMentor.classList.add('divMentor');
                divMentor.innerHTML = '<img class="mentorImg" src="'+ user.avatar +'"/><span class="mentorNome">'+ user.nome +'</span><span class="mentorCargo">'+ user.cargo +'</span><div class="mentorEsp"><span class="itemEspc">'+(user.espec).split(';')[0]+'</span><span class="itemEspc">'+(user.espec).split(';')[1]+'</span></div>';
                mentores.appendChild(divMentor);
            });

            if (habilidade !== "habilidade"){
                testeFiltro = lista
            }
            
            // DIRECIONA O USUÁRIO PARA A PÁGINA DO MENTOR SELECIONADO    
            $('.divMentor').click(function(){
                $(".menu-item").removeClass('menu-item-active')
                let idMentor = $(this).attr('id')
                $("#idMentor").html(idMentor)
                $("#exibir").load('mentor.html?id=' + $(this).attr('id'))
            });
        }

        // FILTRO QUE RETORNA OS VALORES DO CARGO SELECIONADO
        $("#listaCargo").change(function(){
            mentores.innerHTML = ''
            let cargoSelecionado = $("#listaCargo option:selected").val();
            if (cargoSelecionado == ''){
                 testeFiltro = response
            }           

            if (habilidadeFiltrada.length != 0){                
                const pessoasFiltradas = habilidadeFiltrada.filter((resposta) => resposta.cargo == cargoSelecionado)
                exibeCards(pessoasFiltradas,"");
                return        
            } else {
                const pessoasFiltradas = response.filter((resposta) => resposta.cargo == cargoSelecionado)
                if (cargoSelecionado != ""){
                    exibeCards(pessoasFiltradas,"");
                } else {
                    exibeCards(response,"");
                }
            }                       
        });
        
        // FILTRO QUE RETORNA OS VALORES DA HABILIDADE SELECIONADA
        $("#listaHab").change(function(){
            mentores.innerHTML = ''            
            habilidadeFiltrada = []
            let habilidadeSelecionada = $("#listaHab option:selected").val();

            for(let i in testeFiltro){
                for(let prop of testeFiltro[i].espec.split(";")){
                    if(prop == habilidadeSelecionada){
                        habilidadeFiltrada.push(testeFiltro[i])
                    }
                }
            }

            if (habilidadeSelecionada != ""){
                exibeCards(habilidadeFiltrada, "habilidade")
            } else {
                exibeCards(testeFiltro, "habilidade")
            }
        });

        // INSERE TODOS OS VALORES UNICOS DE HABILIDADE EM UM SELECT
        $('#listaHab').html(function(){
            let habilidades = []
            response.forEach((mentor) => {                    
                for(let i in response){  
                    if (mentor.espec.split(';')[i] != undefined && !habilidades.includes(mentor.espec.split(';')[i])){                         
                        habilidades.push(mentor.espec.split(';')[i])
                    }                                                             
                }         
            })            
            for (let h in habilidades.sort()){
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

            for (let c in cargos.sort()){
                let option = document.createElement('option');
                option.setAttribute('value',cargos[c])
                option.innerHTML = `${cargos[c]}`;
                $(this).append(option);
            }            
        })
    });   
})