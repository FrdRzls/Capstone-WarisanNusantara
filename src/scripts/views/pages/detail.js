/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import UrlParser from '../../routes/url-parser';
// eslint-disable-next-line import/extensions
import warisanNusantara from '../../data/wisata'; // Import data warisanNusantara
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../templates/template-favorite';
import LikeButtonInitiator from '../../utils/like-button';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAcTAZpeD-2cpQH0cWIJ5OFYc0ivimww6Q';

const DETAIL = {
  async render() {
    return `
      <div id="detailContent" class="detail-content">
        <div class="loading">Loading...</div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const placeId = url.id;
    const place = warisanNusantara.find((item) => item.id === parseInt(placeId, 10));
    console.log(place);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      wisata: {
        id: place.id,
        place_name: place.place_name,
        city_name: place.city_name,
        description: place.description,
        descriptionDetail: place.descriptionDetail,
        rating: place.rating,
        image: place.image,
        address: place.address,
        operating_hours: place.operating_hours,
        ticket_price: place.ticket_price,
        created_at: place.created_at,
        updated_at: place.updated_at,
      },
    });

    if (place) {
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('#detailContent').innerHTML = `
        <div class="card-wrapper">
          <div class="card-detail">
            <!-- card left -->
            <div class="img-detail">
              <img src="${place.image}" alt="${place.place_name}" class="main-image">
              <div class="img-thumbnails">
                ${place.thumbnails ? place.thumbnails.map((thumbnail) => `
                  <img src="${thumbnail}" alt="${place.place_name}" class="thumbnail">
                `).join('') : ''}
              </div>
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
                <div class="detail-map">
                  <iframe
                    class="map"
                    frameborder="0"
                    style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(place.place_name)}"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const mapIframe = document.querySelector('.map');
      mapIframe.style.width = '100%';
      mapIframe.style.height = '100%';
    } else {
      document.querySelector('.loading').innerText = 'Place not found!';
    }
  },

};

export default DETAIL; // Export the DETAIL component
