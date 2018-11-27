/*
Attendre le chargement du dom
*/
    document.addEventListener('DOMContentLoaded', ()=>{

        /*
        Déclaration des variables
        */
       let myform = document.querySelector('form');
       let email = document.querySelector('[placeholder="Adresse email"]');
       let mdp = document.querySelector('[placeholder="Mot de passe"]');
       let msgErreur = document.querySelector('#errorMessage');
       let popinAppear= document.querySelector('#popin');
        //

        /*
        Méthodes
        */
        

        //

        /*
        Lancer le programme
        */

        //
        //Fonction pour se connecter et vérifier les champs
const seConnecter = ()=>{
    

    //On 
    myform.addEventListener('submit', (event)=>{
        let erreurs = 0;
        
        msgErreur.innerHTML = '';

        event.preventDefault();

        if(email.value.length<10){
            erreurs++
            console.log("erreur email");
            msgErreur.innerHTML += `Erreur d'email `;
     } 


        if(mdp.value.length < 8){
            erreurs++;
            console.log("erreur mdp");
            msgErreur.innerHTML += `Erreur dans le mdp `;

        }

        if(erreurs === 0){
            console.log("formulaire validé");
        
            //On récupere le popin pour l'afficher
            popinAppear.style.opacity = 100;
            popinAppear.style.top = 0;
            let validation = document.getElementById('connectedUserEmail');
            validation.innerHTML += `${email.value}`;
            

            //On vide les champs
            email.value = '';
            mdp.value = '';
        }
    })
}

seConnecter();

    })
// fin de la fonction d'attente de chargement du DOM

