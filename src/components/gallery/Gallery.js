import React, { Component } from "react";
import LightBox from "../../modals/lightbox/LightBox";
import "./Gallery.css";

export default class gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplay: false,
      isLoaded: false,
      photos: [],
      photo: {},
    };
  }

  //adresten fotoğrafları json olarak çekiyoruz
  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          photos: data,
        });
      });
  }

  toggleModal = (photo) => {
    this.setState({
      isModalDisplay: !this.state.isModalDisplay,
      photo: photo,
    });
  };

  render() {
    const { isModalDisplay, photos, isLoaded } = this.state;
    return (
      <div className="Gallery">
        {!isLoaded && "Yükleniyor..."}
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => this.toggleModal(photo)}
            className="photo"
          >
            <img src={photo.download_url} />
            <p>{photo.author}</p>
          </div>
        ))}
        {isModalDisplay ? (
          <LightBox className="modal">
            <img src={this.state.photo.download_url} />
            <p>{this.state.photo.author}</p>
            <button className="close" onClick={this.toggleModal}>
              X
            </button>
          </LightBox>
        ) : null}
      </div>
    );
  }
}
