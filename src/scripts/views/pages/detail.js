import UrlParser from '../../routes/url-parser';
import warisanNusantara from '../../data/wisata'; // Import data warisanNusantara

const DETAIL = {
  async render() {
    return `
      <div id="detailContent" class="detail-content">
        <div class="loading">Loading...</div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const placeId = url.id;
    // eslint-disable-next-line max-len, radix
    const place = warisanNusantara.find((item) => item.id === parseInt(placeId)); // Ubah placeId menjadi integer karena data ID adalah integer

    if (place) {
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('#detailContent').innerHTML = `
        <div class="detail">
          <img src="${place.image}" alt="${place.place_name}" class="detail__img">
          <div class="detail__data">
            <h2 class="detail__title">${place.place_name}</h2>
            <span class="detail__city">${place.city_name}</span>
            <p class="detail__description">${place.description}</p>
            <div class="detail__rating">
              <i class="fas fa-star"></i>
              <span>${place.rating}</span>
            </div>
          </div>
        </div>
      `;
    } else {
      document.querySelector('.loading').innerText = 'Place not found!';
    }
  },
};

export default DETAIL; // Export komponen detail
