//  SESSOES.JS
$(document).ready(function(){

    $("#sessoes-passadas, #sessoes-canceladas, #sucess-cadastro").hide()
    
    $(".btn-menu").click(function(){
        $(".btn-menu").removeClass('btn-menu-active')
        $(this).addClass('btn-menu-active')             
    })

    $("#btn-futuras").click(function(){
        $("#sessoes-futuras").show()
        $("#sessoes-passadas, #sessoes-canceladas").hide()
    })

    $("#btn-passada").click(function(){
        $("#sessoes-passadas").show()
        $("#sessoes-futuras, #sessoes-canceladas").hide()
    })

    $("#btn-canceladas").click(function(){
        $("#sessoes-canceladas").show()
        $("#sessoes-futuras, #sessoes-passadas").hide()
    })     
        
    function sessao(idSessao,mentor,tipo,dia,hora,status){
        this.id = idSessao
        this.mentor = mentor
        this.tipo = tipo;
        this.dia = dia;
        this.hora = hora
        this.status = status
    }
    
    $("#agendar").click(function(){      
        let idSessao;
        if (localStorage.getItem('sessoes') === null){
            idSessao = 0
        } else {
            idSessao = JSON.parse(localStorage.getItem('sessoes')).length
        }

        if($("#btn-mentoria,#btn-batepapo").hasClass("btn-tipo-selected") && $(".btn-sessao-dia").hasClass("btn-dia-selected") && 
        $("#select-hora option:selected").val() != "0"){
           // console.log('passou')
            let nomeMentor = $("#nomeMentor").html()
            let tipoSessao = $(".btn-tipo-selected").html()
            let diaSessao = $(".btn-dia-selected").html()
            let horaSessao = $("#select-hora option:selected").html()
            let statusSessao = 'marcada'
            let novaSessao = new sessao(idSessao,nomeMentor, tipoSessao, diaSessao, horaSessao, statusSessao)

            let sessoes = []
            sessoes = JSON.parse(localStorage.getItem('sessoes')) ? JSON.parse(localStorage.getItem('sessoes')) : []
            
            sessoes.push(novaSessao)
        
            localStorage.setItem('sessoes', JSON.stringify(sessoes))
            $("#resultado-mentoria").html(function(){
                $(this).text('Cadastrado com sucesso');
                $(this).css('color','#008900')
                $("#form-agendamento, .modal-footer").hide()
                $("#sucess-cadastro").show()

            })
        } else {
            $("#resultado-mentoria").text('Verifique as opções!');
        }        
    });
    
    let cardsAtivos = document.querySelector('#sessoes-futuras')
    let cardsCancelados = document.querySelector('#sessoes-canceladas')
    
    JSON.parse(localStorage.getItem('sessoes')).forEach(sessao => {

        let cardSessao = document.createElement('div')  
        let tituloCard = document.createElement('label')  
        let infoCard = document.createElement('div')  
        let menuCard = document.createElement('div')  
        
        // Definição dos atributos do card
        cardSessao.setAttribute("id",sessao.id)
        cardSessao.classList.add("sessao-card")
        tituloCard.setAttribute("id","sessao-card-titulo")
        infoCard.setAttribute("id","sessao-card-info")
        menuCard.setAttribute("id","sessao-card-menu")

        // atribuição de elementos
        tituloCard.innerHTML = `Sessão de <span style="color:rgb(254, 68, 0);">${(sessao.tipo).toLowerCase()}</span> com ${sessao.mentor}`
        infoCard.innerHTML = `<i class="fa-solid fa-clipboard"></i> ${sessao.dia}   |   <i class="fa-solid fa-clock"></i> ${sessao.hora} horário de Brasília`

        if (sessao.status == "marcada"){            
            
            menuCard.innerHTML = `<button class='btn-sessao-agendada' id='btn-participar'>Participar</button>  <button class='btn-sessao-agendada' id='btn-remarcar'>Remarcar</button> <button class='btn-sessao-agendada btn-cancelar' id='btn-cancelar' value='${sessao.id}'>Cancelar</button>`
            cardSessao.appendChild(tituloCard)
            cardSessao.appendChild(infoCard)        
            cardSessao.appendChild(menuCard)        
                                        
            cardsAtivos.appendChild(cardSessao) 

        } else if ((sessao.status == "cancelada")){            

            menuCard.innerHTML = `<button class='btn-sessao-agendada' id='btn-reativar' value='${sessao.id}'>Reativar</button>`
            cardSessao.appendChild(tituloCard)
            cardSessao.appendChild(infoCard)        
            cardSessao.appendChild(menuCard)        
                                        
            cardsCancelados.appendChild(cardSessao) 
        }
        return        
    }); 

    // CANCELAMENTO DE MENTORIA
    $(".btn-cancelar").click(function(){
        let sessaoAlterada; 
        let btnClicado = $(this).attr('value');
        let sessoes = JSON.parse(localStorage.getItem('sessoes'));

        for (let s in sessoes){ 
            if (sessoes[s].id == btnClicado){ 
                sessoes[s].status = 'cancelada'
                sessaoAlterada = sessoes[s]
                console.log(sessaoAlterada)
                sessoes.splice(sessoes[s].id,1,sessaoAlterada)
                console.log(sessoes)               
            };       
        };
        localStorage.setItem('sessoes',JSON.stringify(sessoes));
        $("#exibir").load('sessoes.html')       
    });

    // REATIVAÇÃO DE MENTORIA
    $("#btn-reativar").click(function(){
        let sessaoAlterada; 
        let btnClicado = $(this).attr('value');
        let sessoes = JSON.parse(localStorage.getItem('sessoes'));

        for (let s in sessoes){ 
            if (sessoes[s].id == btnClicado){ 
                sessoes[s].status = 'marcada'
                sessaoAlterada = sessoes[s]
                console.log(sessaoAlterada)
                sessoes.splice(sessoes[s].id,1,sessaoAlterada)
                console.log(sessoes)
            };       
        };
        localStorage.setItem('sessoes',JSON.stringify(sessoes));
        $("#exibir").load('sessoes.html')
    });
    
    
});