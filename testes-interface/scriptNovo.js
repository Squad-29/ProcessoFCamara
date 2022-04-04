let pessoas = [
    {nome:'joao',especialidade:'fullstack'},
    {nome:'maria',especialidade:'ux'},
    {nome:'jose',especialidade:'fullstack'},
    {nome:'carla',especialidade:'front'},
    {nome:'joana',especialidade:'back'},
];

let categorias = [];

let divInfo = document.getElementById('info')
let btnMenu = document.querySelector('#menu');
let elemento = document.querySelector('#lista');
let resultado = document.querySelector('#resultado');
let btnInserir = document.querySelector('#inserir');
btnInserir.addEventListener('click', inserir);
elemento.addEventListener('change', altera);

addCat();
exibeInfo(0);

function inserir(){
    
    elemento.innerHTML = ''    
    let campoNome = document.getElementById('nomeNovo').value;
    let campoEspc = document.getElementById('especNovo').value;

    if (campoNome == '' || campoEspc == ''){
        resultado.innerHTML = 'Verifique os campos de cadastro'
        updateLista(); 
    } else {
        //localStorage.setItem(campoNome,campoEspc);
        
        let pessoa = {}
        pessoa.nome = campoNome;
        pessoa.especialidade = campoEspc;
        pessoas.push(pessoa);
        addCat();        
    };
    exibeInfo();
};

function altera(){
    divInfo.innerHTML = ''
    var opcao = elemento.options[elemento.selectedIndex].value;
    //console.log(opcao);

    exibeInfo(opcao)
};

function updateLista(){
    let opZero = `<option value='0'>-----</option>`
    let opcoes = ''
    for (let cat in categorias){
        opcoes += `<option value='${categorias[cat]}'>${categorias[cat]}</option>`
    };
    elemento.innerHTML = opZero + opcoes
};

function addCat() {
    for (var i in pessoas){
        if(!categorias.includes(pessoas[i].especialidade)){
            categorias.push((pessoas[i].especialidade));
        };
    };
    updateLista();    
};

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

/* function exibeinfo(op){ 
    console.log(op)   
    for (var p in pessoas){
        if(pessoas[p].especialidade == op){
            divinfo.innerhtml += pessoas[p].nome + '<br>'
        } else if (op == '0'){
            
            divinfo.innerhtml += pessoas[p].nome + '<br>'
        }       
    }
} */

$('#navbar button#menu').click(function(){    
    $('#info').load('menu.html');
});

$('#navbar button#cadastro').click(function(){
    $('#info').load('cadastro.html');
});

