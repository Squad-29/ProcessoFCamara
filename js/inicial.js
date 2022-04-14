$(document).ready(function(){
    $("#btn-orientacao").click(function(){
        $("#exibir").load("mentores.html")
    });
    
    let cardsAtivos = document.getElementById("sessoes-ativas")

    JSON.parse(localStorage.getItem('sessoes')).forEach(sessao => {
        
        let cardSessao = document.createElement('div')  
        let tituloCard = document.createElement('label')  
        let infoCard = document.createElement('div') 

        if (sessao.status == "marcada"){
                        
            // Definição dos atributos do card
            cardSessao.setAttribute("id",sessao.id)
            cardSessao.classList.add("sessao-card")
            tituloCard.setAttribute("id","sessao-card-titulo")
            infoCard.setAttribute("id","sessao-card-info")

            // atribuição de elementos
            tituloCard.innerHTML = `Sessão de <span style="color:rgb(254, 68, 0);">${(sessao.tipo).toLowerCase()}</span> com ${sessao.mentor}`
            infoCard.innerHTML = `<i class="fa-solid fa-clipboard"></i> ${sessao.dia}   |   <i class="fa-solid fa-clock"></i> ${sessao.hora} horário de Brasília`

            cardSessao.appendChild(tituloCard)
            cardSessao.appendChild(infoCard)				 
        }
        cardsAtivos.appendChild(cardSessao)        
    }); 
});