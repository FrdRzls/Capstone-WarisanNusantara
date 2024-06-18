/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import FavoriteWisataIdb from "../../data/favorite-wisata-idb";
import wisataCard from "../templates/template-creator";

const FAVORITE = {
  async render() {
    return `
      <div id="favorite" class="favorite-content">
           <h2>Your Favorite Places</h2>
        <div class="container">
                <div class="card-container"></div>
            </div>
      </div>
      
    `;
  },
  async afterRender() {
    const wisataContainer = document.querySelector('.card-container');
    const favoriteWisata=  await FavoriteWisataIdb.getAllWisata()
    console.log(favoriteWisata);
    const wisata = wisataCard(favoriteWisata);
    wisataContainer.innerHTML = wisata;
  }
}
export default FAVORITE; // Export the FAVORITE component