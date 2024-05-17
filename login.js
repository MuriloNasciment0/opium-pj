function cadastro() {
  // criando variáveis para receber os valores das inputs
  const nome = document.getElementById("input_nome").value;
  const email = document.getElementById("cadastro_input_email").value;
  const senha = document.getElementById("cadastro_input_senha").value;
  const confirmSenha = document.getElementById("confirmacaoSenha").value;

  // criando váriaveis de verificação com REGEX
  let regexMaiuscula = /[A-Z]/;
  let regexMinuscula = /[a-z]/;

  // criando variáveis auxiliares para validação dos campos
  let senhaValidaRegex = false;
  let senhaValidaNumeros = false;
  let senhaValida = false;
  let confirmSenhaValida = false;
  let nomeValido = false;
  let emailValido = false;

  // criando variáveis de mensagens
  let mensagemErroNome = "O nome deve conter pelo três um caracteres.";

  let mensagemEmailInvalido = "Insira um email válido. Ex: windas@gmail.com";

  let mensagemSenhaCurta = "A senha deve conter pelo menos 6 caracteres";

  let mensagemSenhaInvalida = `A senha deve conter pelo menos uma letra maiúscula, 
      além de uma minúscula, um caracter numérico e pelo menos um caracter especial <br> (@, #, %, *, ?, $, &, !, -, /).`;

  let mensagemErroConfirmSenha = "As senhas devem ser iguais.";

  /* ------------------- VERIFICAÇÃO DE NOME ------------------ */

  if (nome.length > 2) {
    nomeValido = true;
  }

  if (!nomeValido) {
    document.getElementById("nomeErro").innerHTML = mensagemErroNome;
  } else if (nomeValido) {
    document.getElementById("nomeErro").innerHTML = "";
  }

  /* ------------------ VERIFICAÇÃO DE SENHA ----------------------- */

  // testando se os valores da variavel 'senha' contém os valores aceitos pelos REGEX
  if (
    regexMaiuscula.test(senha) &&
    regexMinuscula.test(senha) &&
    senha.length >= 6
  ) {
    senhaValidaRegex = true;
  }

  // verificando se existem números na senha

  for (let contador = 0; contador <= 9; contador++) {
    if (senha.indexOf(`${contador}`) > -1) {
      senhaValidaNumeros = true;
    }
  }

  // caso a senha passe no teste de REGEX e números...
  if (senhaValidaRegex && senhaValidaNumeros) {
    senhaValida = true;
  }

  // verificando o tamanho da senha

  if (senha.length < 6) {
    document.getElementById("cadastroSenhaErro").innerHTML = mensagemSenhaCurta;
  } else {
    document.getElementById("cadastroSenhaErro").innerHTML = "";
  }

  // verificando se a senha passa em todos os testes

  if (!senhaValida && senha.length >= 6) {
    document.getElementById("cadastroSenhaErro").innerHTML =
      mensagemSenhaInvalida;
  } else if (senhaValida && senha.length >= 6) {
    document.getElementById("cadastroSenhaErro").innerHTML = "";
  }

  /* ------------------ VERIFICAÇÃO DECONFIRMAÇÃO DE SENHA ----------------------- */

  if (confirmSenha != senha) {
    document.getElementById("cadastroConfirmSenhaErro").innerHTML =
      mensagemErroConfirmSenha;
  } else {
    confirmSenhaValida = true;
    document.getElementById("cadastroConfirmSenhaErro").innerHTML = "";
  }

  /* ------------------------------ CONFIRMAÇÃO DE EMAIL ------------------------------- */

  if (
    email.indexOf("@") > 0 &&
    (email.indexOf(".com") > email.indexOf("@") ||
      email.indexOf(".school") > email.indexOf("@"))
  ) {
    emailValido = true;
  }

  if (!emailValido) {
    document.getElementById("cadastroEmailErro").innerHTML =
      mensagemEmailInvalido;
  } else if (emailValido) {
    document.getElementById("cadastroEmailErro").innerHTML = "";
  }

  /* ------------------------------ VERIFICANDO SE TODOS OS CAMPOS ESTÃO CORRETOS ----------------------------- */

  if (nomeValido && emailValido && senhaValida && confirmSenhaValida) {
    document.getElementById("cadastroSucesso").style.display = "flex";
    document.getElementById("cadastroSucesso").style.animation =
      "cadastroComSucesso";
    document.getElementById("cadastroSucesso").style.animationDuration = "5s";

    setTimeout(
      () => (document.getElementById("cadastroSucesso").style.display = "none"),
      4900
    );
  }
}

/* ------------------ CONFIGURANDO ANIMAÇÕES DA PÁGINA ----------------- */
function habilitarCadastro() {
  // animação da imagem central (esquerda => direita)
  document.getElementById("imagem_cama").style.animation = "imgAnim";
  document.getElementById("imagem_cama").style.animationDuration = "2s";
  document.getElementById("imagem_cama").style.left = "-.375rem";

  // fazendo os campos do login desaparecerem
  document.getElementById("container_login").style.animation = "fadeOut";
  document.getElementById("container_login").style.animationDuration = "1s";
  setTimeout(
    () => (document.getElementById("container_login").style.display = "none"),
    800
  ); // esta função define um tempo de espera antes de fazer uma
  // determinada ação, que no caso é fazer o container_login desaparecer

  // fazendo os campos do cadastro aparecerem
  setTimeout(
    () =>
      (document.getElementById("container_cadastro").style.display = "flex"),
    800
  );
  document.getElementById("container_cadastro").style.animation = "fadeIn";
  document.getElementById("container_cadastro").style.animationDuration = "1s";
}

function habilitarLogin() {
  // animação da imagem central (direita => esquerda)
  document.getElementById("imagem_cama").style.animation = "imgAnim2";
  document.getElementById("imagem_cama").style.animationDuration = "2s";
  document.getElementById("imagem_cama").style.left = "50%";

  // fazendo os campos do login aparecerem
  document.getElementById("container_login").style.animation = "fadeIn";
  document.getElementById("container_login").style.animationDuration = "1s";
  setTimeout(
    () => (document.getElementById("container_login").style.display = "flex"),
    800
  );

  // fazendo os campos do cadastro desaparecerrem
  setTimeout(
    () =>
      (document.getElementById("container_cadastro").style.display = "none"),
    800
  );
  document.getElementById("container_cadastro").style.animation = "fadeOut";
  document.getElementById("container_cadastro").style.animationDuration = "1s";
}
