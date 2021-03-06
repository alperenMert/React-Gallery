import React, { Component } from "react";
import { createPortal } from "react-dom";

const portal_modal = document.getElementById("modal-lightbox");

export default class LightBox extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement("div");
  }

  //aç tuşuna basmadan portalın içeriği render edilmeyecek
  componentDidMount() {
    portal_modal.appendChild(this.element);
  }
  componentWillUnmount(){
      portal_modal.removeChild(this.element);
  }
  render() {
    return createPortal(this.props.children, this.element);
  }
}
