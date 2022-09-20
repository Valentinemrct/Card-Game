import "./card.component.css";
import template from "./card.component.html";
import { Component } from "../../../utils/component";

/* class CardComponent constructor */
export class CardComponent extends Component {
  constructor(id) {
    super("card");
    // is this card flipped ?
    this._flipped = false;

    // has the matching card has been discovered already ?
    this.matched = false;

    this._id = id;

    this._imageElt = this.getElement().querySelector(".card-wrapper");

    this._imageElt.querySelector(
      "img.front-face"
    ).src = require("./assets/card-" + this._id + ".png");
    this._imageElt.querySelector(
      "img.back-face"
    ).src = require("./assets/back.png");
  }
  getTemplate() {
    return template;
  }

  /* method CardComponent.getElement */
  getElement() {
    if (!this._elt) {
      this._elt = document
        .getElementById("card-template")
        .content.cloneNode(true).firstElementChild;
    }
    return this._elt;
  }

  /* method CardComponent.flip */
  flip() {
    this._imageElt.classList.toggle("flip");
    this._flipped = !this._flipped;
  }

  /* method CardComponent.equals */
  equals(card) {
    return card._id === this._id;
  }

  /* CardComponent.get flipped() */
  getflipped() {
    return this._flipped;
  }
}

// put component in global scope, to be runnable right from the HTML.
