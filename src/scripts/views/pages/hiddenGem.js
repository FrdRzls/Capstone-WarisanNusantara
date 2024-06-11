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
            <i class="fa-solid fa-leaf"></i>
            <h4>Suasana Unik</h4>
            <p>Nikmati ketenangan dan kedamaian yang jauh dari hiruk pikuk kota</p>
          </div>
          <div class="box">
            <i class="fa-solid fa-people-robbery"></i>
            <h4>Pengalaman berbeda</h4>
            <p>Temukan pengalaman yang berbeda dari tempat wisata yang ramai dikunjungi</p>
          </div>
          <div class="box">
           <i class="fa-solid fa-binoculars"></i>
            <h4>Belum diketahui banyak orang </h4>
            <p>Jadilah salah satu orang pertama yang menemukan hidden gems ini dan ciptakan kenangan indah</p>
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
