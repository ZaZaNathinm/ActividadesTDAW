class ModalScreen{
    constructor(containerElement, fotoSrc) {
        this.containerElement = containerElement;
        this.containerElement.innerHTML = '';
        this.currentIndex = null;
        this.fotoSrc = fotoSrc;
        this.nextPhoto = this.nextPhoto.bind(this);
        this.onModalClick = this.onModalClick.bind(this);
        this.containerElement.addEventListener('click', this.onModalClick)
    }
    hideModal(){
        document.body.classList.remove('no-scroll');
        this.containerElement.classList.add('hidden');
        this.containerElement.innerHTML = '';
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
        this.containerElement.innerHTML = '';
        const miniatura = new Miniatura(photoSrc);
        this.containerElement.appendChild(image.image);
        this.currentIndex = nextIndex;
    }
    onModalClick(){
        this.hideModal();
    }
}
