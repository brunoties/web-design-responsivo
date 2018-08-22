$(function () {
  $('.menu-abrir').click(exibeMenu);
  $('.menu-fechar').click(ocultaMenu);
});
function exibeMenu() {
  $('html').addClass('menu-ativo');
}
function ocultaMenu() {
  $('html').removeClass('menu-ativo');
}

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};
