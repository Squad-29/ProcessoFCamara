
 //const myModal=new bootstrap.Modal("#register-modal");
 let logged=sessionStorage.getItem("logged");
 const session=localStorage.getItem("session");
checkLogged();

//LOGAR NO  SISTEMA
document.getElementById("login-form").addEventListener("submit",function(e){
    e.preventDefault();
   

    const email=document.getElementById("email-input").value;
    const password=document.getElementById("password-input").value;
    const checksession=document.getElementById("session-check").checked;
   
    const account=getAccount(email);


 if(!account){
     alert("Ops! Verifique o usuário ou a  senha");
     return;
 }
 if(account){
    if(account.password !== password){
        alert("verfique usuário e senha");
        return;
    }
    saveSession(email,checksession);
   window.location.href="index.html";
}
});









//CRIAR CONTA


document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    const email=document.getElementById("email-create-input").value;
    const senha=document.getElementById("password-create-input").value;
    console.log(email,senha);

    if (email.length<10){
        alert("tamanho de email incorreto")
        return;
    }

    if (senha.length<4){
        alert("tamanho da senha incorreto")
        return;
    }
        saveAccount({
            login:email,
            password:senha,
            transactions:[]

        });

      // myModal.hide();
       alert("Conta criada com sucesso!");
    });

    function saveAccount(data){
        localStorage.setItem(data.login, JSON.stringify(data));

    }





    function saveSession(data, saveSession){
        if(saveSession){
            localStorage.setItem("session", data);
        }
        sessionStorage.setItem("logged",data);

    }


    function getAccount(key){
        const account=localStorage.getItem(key);
        if (account){  
        return JSON.parse(account);
        }
        return "";

    }

    function checkLogged(){
        if (session){
            sessionStorage.setItem("logged", session);
            logged=session;
            }
            if (logged){
            saveSession(logged, session);
            window.location.href="home.html";
            }        
    }
   
