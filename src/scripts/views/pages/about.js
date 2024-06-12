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
                <p>WarisanNusantara adalah sebuah platform yang berdedikasi untuk mengangkat dan mempromosikan kekayaan budaya dan
                warisan Indonesia, yang meliputi seni, budaya, tradisi, serta kekayaan alam yang mempesona.
                Di Warisan Nusantara, kami berkomitmen untuk melestarikan dan memperkenalkan keindahan serta
                keunikan Nusantara kepada dunia. Dibangun atas semangat cinta dan kebanggaan akan
                keberagaman budaya Indonesia, Warisan Nusantara hadir sebagai wadah bagi para pelaku seni,
                pengrajin, pelestari budaya, dan para pecinta budaya Indonesia untuk berbagi pengetahuan,
                pengalaman, serta karya-karya yang memukau.
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
                  <h3>Ricky Nugraha<br><span>Web Analyst</span></h3>
                </div>
                <ul class="sci">
                  <li style="--i: 1"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                  <li style="--i: 2"><a href="#"><i class="fa-brands fa-github"></i></a></li>
                  <li style="--i: 3"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="card-about">
              <div class="imgBx">
                <img src="/images/Farid.png" alt="Farid Rizal ">
              </div>
              <div class="content-about">
                <div class="content-aboutBx">
                  <h3>Farid Rizal <br><span>UI/UX Designer</span></h3>
                </div>
                <ul class="sci">
                  <li style="--i: 1"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                  <li style="--i: 2"><a href="#"><i class="fa-brands fa-github"></i></a></li>
                  <li style="--i: 3"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
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
                  <li style="--i: 1"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                  <li style="--i: 2"><a href="#"><i class="fa-brands fa-github"></i></a></li>
                  <li style="--i: 3"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    // Implementasi afterRender jika diperlukan
  },
};

export default About;
