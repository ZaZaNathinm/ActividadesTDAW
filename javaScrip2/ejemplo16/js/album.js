class Album{
    constructor(contenedorAlbum, modalScreen) {
        this.contenedorAlbum = contenedorAlbum;
        this.fotos  = [];
        const contenedor = document.querySelector('#modal-view');
        contenedor.innerHTML = '';
        this.modal = new ModalScreen(contenedor, modalScreen);
        this.imagesSrc = modalScreen;
        this.onThumbnailClick = this.onThumbnailClick.bind(this)
        this.loadImages();
    }
    loadImages(){
        for(let i=0; i<this.imagesSrc.length; i++){
            const photoSrc = this.imagesSrc[i];
            const miniatura = new Miniatura(photoSrc, i);
            document.addEventListener('click-miniatura', this.onThumbnailClick);
            this.fotos.push(miniatura);
            
        }
    }

    onThumbnailClick(event){
        if(event.detail.target.parentElement !== this.contenedorAlbum)
            return
        this.modal.currentIndex = event.detail.target.dataset.index;
        const miniatura = new Miniatura(event.detail.target.src);
        this.modal.contenedor.appendChild(miniatura.miniatura);

        document.body.classList.add('no-scroll');
        this.modal.contenedor.style.top = window.pageYOffset + 'px';
        this.modal.contenedor.classList.remove('hidden');

        document.addEventListener('keydown', this.modal.nextPhoto)
    }
}



/*class Album {
  constructor(contenedorAlbum, modalScreen) {
    this.contenedorAlbum = contenedorAlbum;
    this.modalScreen = modalScreen;
    this.fotos = [];
    const contenedor = document.querySelector('#modal-view');
    contenedor.innerHTML = '';
    const modal = new ModalScreen (contenedor,modalScreen);
    this.onThumbnailClick = this.onThumbnailClick.bind(this)
    this.cargarContenedorAlbum();
  }
  cargarContenedorAlbum(){
    for(let i=0; i<this.modalScreen.length; i++){
        const imgSrc = this.modalScreen[i];
        const miniatura = new Miniatura(imgSrc, i);
        document.addEventListener('click-image', this.onThumbnailClick);
        this.fotos.push(miniatura);
        this.albumView.appendChild(miniatura.miniatura);
    }
  }

  onThumbnailClick(event){
      if(event.detail.target.parentElement !== this.contenedorAlbum)
          return
      this.modal.currentIndex = event.detail.target.dataset.index;
      const miniatura = new Miniatura(event.detail.target.src);
      this.modal.contenedor.appendChild(miniatura.miniatura);

      document.body.classList.add('no-scroll');
      this.modal.contenedor.style.top = window.pageYOffset + 'px';
      this.modal.contenedor.classList.remove('hidden');

      document.addEventListener('keydown', this.modal.nextPhoto)
  }
}*/
/*
class Album{
    constructor(contenedorAlbum, modalScreen) {
        this.contenedorAlbum = contenedorAlbum;
        this.fotos  = [];
        const contenedor = document.querySelector('#modal-view');
        contenedor.innerHTML = '';
        this.modal = new ModalScreen(contenedor, modalScreen);
        this.imagesSrc = modalScreen;
        this.onThumbnailClick = this.onThumbnailClick.bind(this)
        this.loadImages();
    }
    loadImages(){
        for(let i=0; i<this.imagesSrc.length; i++){
            const photoSrc = this.imagesSrc[i];
            const miniatura = new Miniatura(photoSrc, i);
            document.addEventListener('click-image', this.onThumbnailClick);
            this.fotos .push(miniatura);
            this.contenedorAlbum.appendChild(image.image);
        }
    }
    onThumbnailClick(event){
        if(event.detail.target.parentElement !== this.contenedorAlbum)
            return
        this.modal.currentIndex = event.detail.target.dataset.index;
        const miniatura = new miniatura(event.detail.target.src);
        this.modal.contenedor.appendChild(miniatura.miniatura);

        document.body.classList.add('no-scroll');
        this.modal.contenedor.style.top = window.pageYOffset + 'px';
        this.modal.contenedor.classList.remove('hidden');

        document.addEventListener('keydown', this.modal.nextPhoto)
    }
}


*/

/*
function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

function onThumbnailClick(event) {
  const image = createImage(event.currentTarget.src);
  document.body.classList.add('no-scroll');
  modalView.style.top = window.pageYOffset + 'px';
  modalView.appendChild(image);
  modalView.classList.remove('hidden');
}

function onModalClick() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}
const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTO_LIST.length; i++) {
  const photoSrc = PHOTO_LIST[i];
  const image = createImage(photoSrc);
  image.addEventListener('click', onThumbnailClick);
  albumView.appendChild(image);
}
*/
