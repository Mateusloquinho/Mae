function abrirLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.querySelector('.lightbox').style.display = 'flex';
  }
  function fecharLightbox() {
    document.querySelector('.lightbox').style.display = 'none';
  }
  