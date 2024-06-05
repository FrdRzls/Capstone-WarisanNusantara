// template-creator-home.js
const wisataCard = (dataWisata) => {
  return dataWisata.map((item) => `
        <article class="card__article">
            <img src="${item.image}" alt="${item.place_name}" class="card__img">
            <div class="card__data">
            <div class="card_rating">
            <i class="fas fa-star"></i>
            <span class="rating">${item.rating}</span></div>
                <span class="card__description">${item.city_name}</span>
                <h2 class="card__title">${item.place_name}</h2>
                <a href="${item.link}" class="card__button">Read More</a>
            </div>
        </article>
    `).join('');
};

export default wisataCard;
