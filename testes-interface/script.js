let pessoas = [
    {nome:'joao',especialidade:'fullstack'},
    {nome:'maria',especialidade:'ux'},
    {nome:'jose',especialidade:'fullstack'},
    {nome:'carla',especialidade:'front'},
    {nome:'joana',especialidade:'back'},
];

let categorias = [];
let divInfo = document.getElementById('info')
let btnInserir = document.querySelector('#inserir');
let btnMenu = document.querySelector('#menu');
let elemento = document.querySelector('#lista');
let resultado = document.querySelector('#resultado');
elemento.addEventListener('change', altera);
btnInserir.addEventListener('click', inserir);

addCat();
exibeInfo(0);

// FUNÇÃO QUE INSERE UM NOVO MENTOR
function inserir(){
    elemento.innerHTML = ''    
    let campoNome = document.getElementById('nomeNovo').value;
    let campoEspc = document.getElementById('especNovo').value;

    if (campoNome == '' || campoEspc == ''){
        resultado.innerHTML = 'Verifique os campos de cadastro'
        updateLista(); 
    } else {
        var pessoa = {};
        pessoa.nome = campoNome;
        pessoa.especialidade = campoEspc;
        pessoas.push(pessoa); 
        addCat();        
    }
    divInfo.innerHTML = ''
    exibeInfo(0);
};

// FUNÇÃO QUE RETORNA A OPÇÃO SELECIONADA NO SELECT CONFORME A CATEGORIA
function altera(){
    divInfo.innerHTML = ''
    var opcao = elemento.options[elemento.selectedIndex].value;
    //console.log(opcao);

    exibeInfo(opcao)
};

// FUNÇÃO QUE ATUALIZA O SELECT COM AS CATEGORIAS
function updateLista(){
    let opZero = `<option value='0'>-----</option>`
    let opcoes = ''
    for (let cat in categorias){
        opcoes += `<option value='${categorias[cat]}'>${categorias[cat]}</option>`
    };
    elemento.innerHTML = opZero + opcoes
};


//FUNÇÃO QUE ADICIONA UMA NOVA CATEGORIA CASO NÃO ESTEJA NA LISTA DE CATEGORIAS
function addCat() {
    for (var i in pessoas){
        if(!categorias.includes(pessoas[i].especialidade)){
            categorias.push((pessoas[i].especialidade));
        };
    };
    updateLista();    
};


// FUNÇÃO QUE EXIBE A LISTA DE MENTORES CADASTRADOS
function exibeInfo(op){ 
    //console.log(op)
    
    for (var p in pessoas){
        if(pessoas[p].especialidade == op){
            let divMentor = document.createElement("div");
            divMentor.setAttribute("id","divMentor");
            divMentor.innerHTML = pessoas[p].nome;            
            divInfo.appendChild(divMentor);

            //divInfo.innerHTML += pessoas[p].nome + '<br>'
        } else if (op == '0'){
            let divMentor = document.createElement("div");
            divMentor.setAttribute("id","divMentor");
            divMentor.innerHTML = pessoas[p].nome;            
            divInfo.appendChild(divMentor);
        }       
    }
}

$('#navbar button#menu').click(function(){
    $('#info').load('menu.html');
});

$('#navbar button#cadastro').click(function(){
    $('#info').load('cadastro.html');
});

