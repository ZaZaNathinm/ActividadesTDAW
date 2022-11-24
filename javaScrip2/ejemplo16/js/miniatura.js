class Miniatura {
  constructor(containerElement, fotoSrc) {
    this.containerElement = containerElement;
    this.fotoSrc = fotoSrc;
    this.onClick = this.onClick.bind(this)
    this.image = document.createElement('img')
    this.image.src = fotoSrc;
    this.image.addEventListener('click', this.onClick)
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
