function sessao(tipo,dia,hora){
    this.tipo = tipo;
    this.dia = dia;
    this.idade = hora
}

let sessoes = []

$("#agendar").click(function(){
    let tipoSessao = $(".btn-sessao-selected").html()
    //let novaSessao = new sessao('mentoria','14','07:00')
    //sessoes.push(novaSessao)
    console.log(tipoSessao)
})



