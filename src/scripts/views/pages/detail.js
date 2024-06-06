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
    const place = warisanNusantara.find((item) => item.id === parseInt(placeId)); // Ubah placeId menjadi integer karena data ID adalah integer

    if (place) {
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('#detailContent').innerHTML = `
        <div class="card-wrapper">
          <div class="card">
            <!-- card left -->
            <div class="product-imgs">
              <div class="img-display">
                <div class="img-showcase">
                  <img src="${place.image}" alt="${place.place_name}">
                </div>
              </div>
              <div class="img-select">
                <div class="img-item">
                  <a href="#" data-id="1">
                    <img src="${place.image}" alt="${place.place_name}">
                  </a>
                </div>
              </div>
            </div>
            <!-- card right -->
            <div class="product-content">
              <h2 class="product-title">${place.place_name}</h2>
              <div class="product-rating">
                ${[...Array(5)].map((_, index) => `
                  <i class="fas fa-star${index < Math.floor(place.rating) ? '' : (index < place.rating ? '-half-alt' : '')}"></i>
                `).join('')}
                <span>${place.rating}</span>
              </div>

              <div class="product-detail">
                <h2>About this place:</h2>
                <p>${place.description}</p>
                <ul>
                  <li>City: <span>${place.city_name}</span></li>
                  <li>Created at: <span>${place.created_at}</span></li>
                  <li>Updated at: <span>${place.updated_at}</span></li>
                </ul>
              </div>

              <div class="social-links">
                <p>Share At: </p>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-whatsapp"></i>
                </a>
                <a href="#">
                  <i class="fab fa-pinterest"></i>
                </a>
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
