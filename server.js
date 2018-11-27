/*
 Imports
 */
    //Importer express pour configurer le serveur
    const express = require('express');

    //Importer ejs pour le moteur de rendu
    const ejs = require('ejs');

    //IMporter path pour gérer le dossier des vues client
    const path = require('path');

    //Créer une variable pour le serveur
    const server = express();
//


/*
Serveur config
*/
        class ServerClass{
            
            //Créer une méthode pour initialiser le serveur
            init(){
                //Définir le port
                const port = 9876;
                
                //Configurer le moteur de rendu (engine) (permet de rendre des fichier en un langage)
                server.engine( 'html', ejs.renderFile );
                server.set('view engine', 'html');

                //Configurer le dossier pour les vues client
                server.set( 'views',  __dirname + '/www' );
                server.use( express.static( path.join(__dirname, '/www') ) );

                //lancer le serveur
                this.launch(port);
            }

            //Methode pour lancer le serveur
            launch(port){
                //ecouter le port pour lancer le serveur
                server.listen( port, ()=>{
                    console.log(`Le server est lancé sur le port ${port}`);
                });
            }
        }
    //    

/*
Start Server
*/
    new ServerClass().init();
//