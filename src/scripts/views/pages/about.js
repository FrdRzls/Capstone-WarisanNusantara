const About = {
  async render() {
    return `
    <div class="hero">
    <img class='img-jumbotron' src='/images/bg.gif'>
    <div class='overlay'></div>
    <div class="container">
        <div class="box-hero-about">
            <div class="box">
                <h1>About Us</h1>
                <p>Warisan Nusantara adalah sebuah platfom yang berfokus pada mengangkat dan mempromosikan kekayaan budaya dan warisan alam yang unik khususnya didaerah Jawa Barat,
                 Indonesia. Melalui platform ini, kami berkomitmen untuk  memperkenalkan keindahan Pariwsata, budaya, dan tradisi yang khas dari berbagai suku dan komunitas di Jawa Barat kepada dunia.
                </p>
            </div>
            </div>
        </div>
    </div>
</div>
      <section class="team">
        <div class="container">
          <div class="title">
            <h2>Our Team</h2>
          </div>
          <div class="card_Container">
            <div class="card-about">
              <div class="imgBx">
                <img src="/images/ricky.png" alt="Ricky Nugraha">
              </div>
              <div class="content-about">
                <div class="content-aboutBx">
                  <h3>Ricky Nugraha<br><span>Front-end</span></h3>
                </div>
                <ul class="sci">
                  <li style="--i: 1"><a href="https://www.instagram.com/rricky_nugraha?igsh=aWdkbjdtYXQyMjdn"><i class="fa-brands fa-instagram"></i></a></li>
                  <li style="--i: 2"><a href="https://github.com/Rickynugraha12"><i class="fa-brands fa-github"></i></a></li>
                  <li style="--i: 3"><a href="https://www.linkedin.com/in/ricky-nugraha-91929b284/?originalSubdomain=id"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="card-about">
              <div class="imgBx">
                <img src="/images/Farid.png" alt="Farid Rizal ">
              </div>
              <div class="content-about">
                <div class="content-aboutBx">
                  <h3>Farid Rizal <br><span>UI/UX Designer & back end</span></h3>
                </div>
                <ul class="sci">
                  <li style="--i: 1"><a href="https://www.instagram.com/farid_rizals/"><i class="fa-brands fa-instagram"></i></a></li>
                  <li style="--i: 2"><a href="https://github.com/FrdRzls"><i class="fa-brands fa-github"></i></a></li>
                  <li style="--i: 3"><a href="https://www.linkedin.com/in/farid-rizal-setiawan-0b8aa8220/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="card-about">
              <div class="imgBx">
                <img src="/images/Dion.png" alt="Dion Revaldy">
              </div>
              <div class="content-about">
                <div class="content-aboutBx">
                  <h3>Dion Revaldy <br><span>Back-End Web</span></h3>
                </div>
                <ul class="sci">
                  <li style="--i: 1"><a href="https://www.instagram.com/dionrevaldyp/"><i class="fa-brands fa-instagram"></i></a></li>
                  <li style="--i: 2"><a href="https://github.com/Dion122"><i class="fa-brands fa-github"></i></a></li>
                  <li style="--i: 3"><a href="http://www.linkedin.com/in/dion-revaldy-9a0b302a2"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      `;
  },

  async afterRender() {
  },
};

export default About;
