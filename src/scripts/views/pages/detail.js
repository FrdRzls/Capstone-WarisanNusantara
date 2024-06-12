/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
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
    const place = warisanNusantara.find((item) => item.id === parseInt(placeId, 10)); // Ubah placeId menjadi integer karena data ID adalah integer

    if (place) {
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('#detailContent').innerHTML = `
       
        <div class="card-wrapper">
          <div class="card-detail">
            <!-- card left -->
            <div class="img-detail">
              <img src="${place.image}" alt="${place.place_name}">
            </div>
            <!-- card right -->
            <div class="detail-content">
              <h2 class="detail-title">${place.place_name}</h2>
              <h3 class="detail-city">City: ${place.city_name}</h3> 
              <div class="detail-rating">
                ${[...Array(5)].map((_, index) => `
                  <i class="fas fa-star${index < Math.floor(place.rating) ? '' : (index < place.rating ? '-half-alt' : '')}"></i>
                `).join('')}
                <span>${place.rating}</span>
              </div>

              <div class="detail-detail">
                <h2>About this place:</h2>
                <p>${place.descriptionDetail}</p>
                <h3>More information:</h3>
                <div class="more-info">
                  <div><span><i class="fas fa-clock"></i> Operating Hours:</span> ${place.operating_hours}</div>
                  <div><span><i class="fas fa-money-bill-wave"></i> Ticket Price:</span> ${place.ticket_price}</div>
                  <div><span><i class="fas fa-map-marker-alt"></i> Address:</span> ${place.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      document.querySelector('.loading').innerText = 'Place not found!';
    }
  },
};

export default DETAIL; // Export the DETAIL component
