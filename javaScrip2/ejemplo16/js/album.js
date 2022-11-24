class Album{
    constructor(contenedorAlbum,modalScreen) {
        this.contenedorAlbum = contenedorAlbum;
        this.miniaturas = [];
        const contenedor = document.querySelector('#modal-view');
        contenedor.innerHTML = '';
        this.modal = new Modal(contenedor,modalScreen);
        this.imagesSrc =modalScreen;
        this.onThumbnailClick = this.onThumbnailClick.bind(this)
        this.loadImages();
    }
    loadImages(){
        for(let i=0; i<this.imagesSrc.length; i++){
            const photoSrc = this.imagesSrc[i];
            const image = new Miniatura(photoSrc, i);
            document.addEventListener('click-image', this.onThumbnailClick);
            this.miniaturas.push(image);
            this.contenedorAlbum.appendChild(image.image);
        }
    }
    onThumbnailClick(event){
        if(event.detail.target.parentElement !== this.contenedorAlbum)
            return
        this.modal.currentIndex = event.detail.target.dataset.index;
        const image = new Miniatura(event.detail.target.src);
        this.modal.contenedor.appendChild(image.image);

        document.body.classList.add('no-scroll');
        this.modal.contenedor.style.top = window.pageYOffset + 'px';
        this.modal.contenedor.classList.remove('hidden');

        document.addEventListener('keydown', this.modal.nextPhoto)
    }
}
