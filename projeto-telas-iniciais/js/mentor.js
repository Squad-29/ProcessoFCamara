$(document).ready(function(){
    /* const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id'); */		

    fetch('db/dbmentores.json')
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        //response.data.forEach(function(user){
        response.forEach(function(user){
            if($("#idMentor").html() == user.id){
                $("#avatarMentor").attr("src",user.avatar)
                $("#idMentor").html(user.id)
                $("#nomeMentor").html(user.nome)
                $("#bioMentor").html(user.bio)
                $("#emailMentor").html(user.email)
                $("#cargoMentor").html(user.cargo)
                $("#especMentor").html(user.espec)
                $("#horarioMentor").html(user.horarios)
            }
        });            
    });
})  