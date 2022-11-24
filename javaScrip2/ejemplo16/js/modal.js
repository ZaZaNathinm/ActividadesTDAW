class Modal{
    constructor(contenedor, fotoSrc) {
        this.contenedor = contenedor;
        this.contenedor.innerHTML = '';
        this.currentIndex = null;
        this.fotoSrc = fotoSrc;
        this.nextPhoto = this.nextPhoto.bind(this);
        this.onModalClick = this.onModalClick.bind(this);
        this.contenedor.addEventListener('click', this.onModalClick)
    }
    hideModal(){
        document.body.classList.remove('no-scroll');
        this.contenedor.classList.add('hidden');
        this.contenedor.innerHTML = '';
        document.removeEventListener("keydown", this.nextPhoto)
    }
    nextPhoto(event) {
        if (event.key === 'Escape') {
            this.hideModal();
            return;
        }
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
            return;
        }
        let nextIndex = this.currentIndex;
        if (event.key === 'ArrowLeft') {
            nextIndex--;
        } else {
            nextIndex++;
        }
        if (nextIndex < 0 ) {
            nextIndex = this.fotoSrc.length-1;
        }
        if(nextIndex === this.fotoSrc.length){
            nextIndex = 0;
        }
        const photoSrc = this.fotoSrc[nextIndex];
        this.contenedor.innerHTML = '';
        const image = new Miniatura(photoSrc);
        this.contenedor.appendChild(image.image);
        this.currentIndex = nextIndex;
    }
    onModalClick(){
        this.hideModal();
    }
}
