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
                $("#idMentor1").html(user.id)
                $("#nomeMentor").html(user.nome)
                $("#bioMentor").html(user.bio)
                $("#emailMentor").html(user.email)
                $("#cargoMentor").html(user.cargo)
                $("#especMentor").html(user.espec)
                $("#horarioMentor").html(user.horarios)
            }
        });            
    });

    $(".btn-sessao-tipo").click(function(){
        $(this).toggleClass('btn-tipo-selected'); 
    });

    $(".btn-sessao-dia").click(function(){
        $(this).toggleClass('btn-dia-selected');
        if ($(this).hasClass('btn-dia-selected')){
            $("#select-hora").css("background","#FFFFFF");
            $("#select-hora").css("border","2px solid #36357E");
            $("#select-hora").css("color","#666666");
            $("#select-hora").prop("disabled",false);
        } else {
            $("#select-hora").css("background","#E9E9E9");
            $("#select-hora").css("border","2px solid #CACACA");
            $("#select-hora").css("color","#A9A9A9");
            $("#select-hora").prop("disabled",true);
        }         
    });
});  