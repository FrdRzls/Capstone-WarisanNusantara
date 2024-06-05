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
          <h3>${item.place_name}</h3>
          <p>${item.description}</p>
        </div>
        `;
  }).join('');
};

export default wisataCard;
