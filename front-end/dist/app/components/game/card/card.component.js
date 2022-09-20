(function () {
  class CardComponent {
    constructor(id) {
      this._flipped = false;

      this.matched = false;
      this._id = id;
      this._imageElt = this.getElement().querySelector(".card-wrapper");

      this._imageElt.querySelector("img.front-face").src =
        "./card/assets/card-" + this._id + ".png";
      this._imageElt.querySelector("img.back-face").src = "./assets/back.png";
    }

    getElement() {
      if (!this._elt) {
        this._elt = document
          .getElementById("card-template")
          .content.cloneNode(true).firstElementChild;
      }

      return this._elt;
    }

    flip() {
      this._imageElt.classList.toggle("flip");

      this._flipped = !this._flipped;
    }

    equals(card) {
      return card._id === this._id;
    }

    getflipped() {
      return this._flipped;
    }
  }

  window.CardComponent = CardComponent;
})();

const environment = {
  api: {
    host: "See that ? Without closures, I can override variables from other files that belongs to the global scope.",
  },
};
