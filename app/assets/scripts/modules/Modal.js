import $ from 'jquery';

export default class Modal {
  constructor(){
    this.$openModalButton = $(".open-modal");
    this.$modal = $('.modal');
    this.$closeModalButton = $('.modal__close');
    this.events();
  }

  events(){
    //CLicking the open modal button
    this.$openModalButton.click(this.openModal.bind(this));
    //CLicking the close modal button
    this.$closeModalButton.click(this.closeModal.bind(this));

    //pushes the escape key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  openModal(){
    this.$modal.addClass("modal--is-visible");
    //Remove default behaviour of scrolling up
    return false;
  }

  closeModal(){
    this.$modal.removeClass("modal--is-visible");
  }

  keyPressHandler(e){
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }
}
