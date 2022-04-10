$(document).ready(function(){

    let mentores = document.querySelector('#info')
    
    // fetch('https://reqres.in/api/users')
    fetch('db/dbmentores.json')
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        //response.data.forEach(function(user){
        response.forEach(function(user){
            let divMentor = document.createElement('div');
            divMentor.setAttribute("id",user.id)
            divMentor.classList.add('divMentor');
            divMentor.innerHTML = '<img class="mentorImg" src="'+ user.avatar +'"/><span class="mentorNome">'+ user.nome +'</span><span class="mentorCargo">'+ user.cargo +'</span><div class="mentorEsp"><span class="itemEspc">'+user.espec[0]+'</span><span class="itemEspc">'+user.espec[1]+'</span></div>';
            mentores.appendChild(divMentor);
            
            $('#listaHab').html(function(){
                let option = document.createElement('option');
                option.innerHTML = `${user.nome}`;
                $(this).append(option)
            })

            $('#listaHab2').html(function(){
                let option = document.createElement('option');
                option.innerHTML = `${user.email}`;
                $(this).append(option)
            })
        });

        $('.divMentor').click(function(){
            var idMentor = $(this).attr('id')
            $("#idMentor").html(idMentor)
            //window.location = 'mentor.html?id=' + $(this).attr('id')
            $("#exibir").load('mentor.html?id=' + $(this).attr('id'))
        });
    });

    
})