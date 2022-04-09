let pessoas = [
    {nome:'joao',especialidade:'fullstack', imagem:'https://images.generated.photos/0HyDfAAsfM62dNsBrMV85kJfhfJ-1-5gq1dtKb_bJ9o/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk1NTk3LmpwZw.jpg'},
    {nome:'maria',especialidade:'ux', imagem:'https://images.generated.photos/JRcpTlyqO1LbwGhtUJ5qEgGdIoFo095lL_QB-KHUgPE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDM0MjIzLmpwZw.jpg'},
    {nome:'jose',especialidade:'fullstack',imagem:'https://images.generated.photos/98gyEJ1W1pPYiWGUOJZyMq1uxV8ARBr6MgQ7sXSa59Y/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQ2NTMwLmpwZw.jpg'},
    {nome:'carla',especialidade:'front',imagem:'https://images.generated.photos/pkrD5PR2qVVPWIXkCrBm827F2aAUB3dO_KejqAheIv4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTgyMTA5LmpwZw.jpg'},
    {nome:'joana',especialidade:'back',imagem:'https://images.generated.photos/vXkuHUvMcoZlaGn-4bOKNc3tfmoAzIiZq1HZ3pGFCwU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjU0ODE0LmpwZw.jpg'},
];

let categorias = [];
let divInfo = document.getElementById('info')
let elemento = document.getElementById('lista');
elemento.addEventListener('change', altera);

if (categorias.length == 0){
    addCat();
}

exibeInfo(0);

// FUNÇÃO QUE RETORNA A OPÇÃO SELECIONADA NO SELECT CONFORME A CATEGORIA
function altera(){ 
    divInfo.innerHTML = ''
    var opcao = elemento.options[elemento.selectedIndex].value;
    console.log(opcao);
    exibeInfo(opcao)
};

// FUNÇÃO QUE ATUALIZA O SELECT COM AS CATEGORIAS
function updateLista(){
    let opZero = `<option value='0'>- Área -</option>`
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
    for (var p in pessoas){
        let divMentor = document.createElement("div");
        divMentor.setAttribute("id","divMentor");
        let imagemMentor = `<img class='imagemMentor' width='100px' src='${pessoas[p].imagem}'>`;
        if(pessoas[p].especialidade == op){             
            divMentor.innerHTML = pessoas[p].nome + " - " + pessoas[p].especialidade + '<br>' + imagemMentor;
            divInfo.appendChild(divMentor);
        } else if (op == '0'){            
            divMentor.innerHTML = pessoas[p].nome + " - " + pessoas[p].especialidade + '<br>' + imagemMentor;
            divInfo.appendChild(divMentor);
        };               
    };
};