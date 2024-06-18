const wisataCard = (dataWisata) => {
  return dataWisata.map((item) => {
    return `
        <div class="card">
          <div class="card_city">
            <img src="${item.image}" alt="${item.place_name}"/>
            <span>${item.city_name}</span>
          </div>
          <div class="card_rating">
            <i class="fas fa-star"></i>
            <span class="rating">${item.rating}</span>
          </div>
          <h3><a href="#/detail/${item.id}" class="card__button">${item.place_name}</a> <!-- URL diperbaiki --></h3>
          <p>${item.description}</p>
        </div>
        `;
  }).join('');
};

export default wisataCard;
