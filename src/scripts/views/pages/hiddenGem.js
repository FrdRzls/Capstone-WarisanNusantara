import hiddenGem from '../../data/hidden';
import wisataCard from '../templates/template-creator';

const HIDDEN_GEM = {
  async render() {
    return `
    <div class="hero">
    <img class='img-jumbotron' src='/images/bg.gif'>
    <div class='overlay'></div>
    <div class="container">
        <div class="box-hero-hidden">
            <div class="box">
                <h1>Hidden Gems</h1>
                <p>Jelajahi sisi gelap yang indah dari destinasi wisata dengan koleksi Hidden Gems kami, di mana petualangan menanti untuk dijalani.</p>
                <button id="selengkapnyaButton">Selengkapnya</button>
            </div>
            </div>
        </div>
    </div>
</div>

<section id="content" class="content">
<div class="text_header">
                <h2 class="text_title">Hidden Gems</h2>
    <div class="container">
    <div class="services" id="services">
        <div class="box-services">
          <div class="box">
            <i class="fa-solid fa-coins"></i>
            <h4>Harga Terjangkau</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, labore.</p>
          </div>
          <div class="box">
            <i class="fa-solid fa-certificate"></i>
            <h4>Sudah Tersertifikasi</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, labore.</p>
          </div>
          <div class="box">
            <i class="fa-solid fa-people-roof"></i>
            <h4>Aman dan Ramah</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, labore.</p>
          </div>
        </div>
      </div>
    </div>
        <div class="card-container"></div>
    </div>
</section>
`;
  },

  async afterRender() {
    const wisataContainer = document.querySelector('.card-container');
    const wisata = wisataCard(hiddenGem); // Gunakan hidden_gem dari data
    wisataContainer.innerHTML = wisata;
  },
};

export default HIDDEN_GEM;
