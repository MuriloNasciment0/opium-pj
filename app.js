var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;
var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var votoRouter = require("./src/routes/votoUsuario");
var albumRouter = require("./src/routes/album");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/votoUsuario", votoRouter);
app.use("/album", albumRouter);

app.listen(PORTA_APP, function () {
    console.log(`
        ▒█████   ██▓███   ██▓ █    ██  ███▄ ▄███▓   
        ▒██▒  ██▒▓██░  ██▒▓██▒ ██  ▓██▒▓██▒▀█▀ ██▒    ##      ##
        ▒██░  ██▒▓██░ ██▓▒▒██▒▓██  ▒██░▓██    ▓██░      ## ##                                          
        ▒██   ██░▒██▄█▓▒ ▒░██░▓▓█  ░██░▒██    ▒██     #########                                                    
        ░ ████▓▒░▒██▒ ░  ░░██░▒▒█████▓ ▒██▒   ░██▒      ## ##
        ░ ▒░▒░▒░ ▒▓▒░ ░  ░░▓  ░▒▓▒ ▒ ▒ ░ ▒░   ░ 🩸░   ##     ##
          ░ ▒ ▒░ ░▒ ░      ▒ ░░░▒░ ░ ░ ░  ░     🩸░   
        ░ ░ ░ ▒  ░░        ▒ ░ ░░░ ░ ░ ░      ░      
            ░ ░            ░     ░            ░                                                         
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://${HOST_APP}:${PORTA_APP} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
