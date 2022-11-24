class Miniatura{
    constructor(containerElement, fotoSrc) {
        this.containerElement = containerElement
        this.onClick = this.onClick.bind(this)
        this.image = this.createImage(fotoSrc);
        this.image.addEventListener('click', this.onClick)
    }
    createImage(dataset){
        const image = document.createElement('img');
        image.src = this.containerElement;
        image.dataset.index = dataset;
        return image;
    }
    onClick(event){
        console.log(event.target)
        const eventInfo = {target: event.target};
        document.dispatchEvent(new CustomEvent('click-image', {
            detail:
            eventInfo
        }));
    }
}
