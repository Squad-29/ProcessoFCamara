$(document).ready(function(){
    let idSessao = 0
    function sessao(mentor,tipo,dia,hora,status){
        this.id = idSessao++
        this.mentor = mentor
        this.tipo = tipo;
        this.dia = dia;
        this.hora = hora
        this.status = status
    }
    
    $("#agendar").click(function(){       
        
        if($("#btn-mentoria,#btn-batepapo").hasClass("btn-tipo-selected") && $(".btn-sessao-dia").hasClass("btn-dia-selected") && 
        $("#select-hora option:selected").val() != "0"){
           // console.log('passou')
            let nomeMentor = $("#nomeMentor").html()
            let tipoSessao = $(".btn-tipo-selected").html()
            let diaSessao = $(".btn-dia-selected").html()
            let horaSessao = $("#select-hora option:selected").html()
            let statusSessao = 'marcada'
            let novaSessao = new sessao(nomeMentor, tipoSessao, diaSessao, horaSessao, statusSessao)

            let sessoes = []
            sessoes = JSON.parse(localStorage.getItem('sessoes')) ? JSON.parse(localStorage.getItem('sessoes')) : []
            
            sessoes.push(novaSessao)
        
            localStorage.setItem('sessoes', JSON.stringify(sessoes))
            $("#resultado-mentoria").html(function(){
                $(this).text('Cadastrado com sucesso');
                $(this).css('color','#008900')
            })
        } else {
            $("#resultado-mentoria").text('Verifique as opções!');
        }        
    });
    
    let cards = document.querySelector('#sessoes-info-cards')

    JSON.parse(localStorage.getItem('sessoes')).forEach(sessao => {
        if (sessao.status == "marcada"){
            // Criação dos elementos do card
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
            menuCard.innerHTML = "<button class='btn-sessao-agendada' id='btn-participar'>Participar</button>  <button class='btn-sessao-agendada' id='btn-remarcar'>Remarcar</button> <button class='btn-sessao-agendada' id='btn-cancelar'>Cancelar</button>"
            cardSessao.appendChild(tituloCard)
            cardSessao.appendChild(infoCard)        
            cardSessao.appendChild(menuCard)        
                                        
            cards.appendChild(cardSessao) 
        }
        return        
    }); 
    
    $("#btn-cancelar").click(function(){        
        console.log('cancelado')
    })
});





