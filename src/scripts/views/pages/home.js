// eslint-disable-next-line import/extensions
import warisanNusantara from '../../data/wisata';
import wisataCard from '../templates/template-creator-home';

const HOME = {
  async render() {
    return `
        <div class="hero">
            <img class='img-jumbotron id='overlay' src='/images/bg.gif'>
            <div class='overlay'></div>
            <div class="container">
                <div class="box-hero">
                    <div class="box">
                        <h1>Jelajahi Keindahan dan Kearifan Lokal Nusantara!</h1>
                        <p>Warisan Nusantara adalah platform yang didedikasikan untuk melestarikan dan mempromosikan warisan sosial, budaya, pariwisata, dan lingkungan di Indonesia.</p>
                        <button id="selengkapnyaButton">Selengkapnya</button>
                    </div>
                    <div class="box carousel-container">
                        <div class="carousel">
                            <img src="/images/Curug_Cibareubeuy.jpg" alt="Image 1" class="carousel-image active">
                            <img src="/images/Gunung_Papandayan.jpg" alt="Image 2" class="carousel-image">
                            <img src="/images/Kampung_Adat_Ciptagelar.jpg" alt="Image 3" class="carousel-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="content" class="content">
            <div class="text_header">
                <h2 class="text_title">Rekomendasi Wisata Jawa Barat</h2>
                <p class="text_caption">Nikmati keindahan alam dan budaya Jawa Barat dengan rekomendasi destinasi wisata terbaik yang wajib Anda kunjungi. Dari pegunungan yang menakjubkan hingga pantai yang mempesona, temukan pengalaman tak terlupakan di Jawa Barat.</p>
            </div>
            <div class="container_card">
                <div class="card__container"></div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const wisataContainer = document.querySelector('.card__container');
    console.log(warisanNusantara);
    const wisata = wisataCard(warisanNusantara);
    wisataContainer.innerHTML = wisata;

    // Add event listener to "Selengkapnya" button
    const selengkapnyaButton = document.getElementById('selengkapnyaButton');
    selengkapnyaButton.addEventListener('click', () => {
      document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
    });

    // Carousel functionality
    const images = document.querySelectorAll('.carousel .carousel-image');
    let currentIndex = 0;

    function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
  },
};

export default HOME;
