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
