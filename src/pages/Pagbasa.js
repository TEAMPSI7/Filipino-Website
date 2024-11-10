import React from 'react';
import './Pagbasa.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pagbasa = () => {
  return (
    <div>
      {/* Use the Header Component */}
      <Header />
      {/* Red Background Section */}
      <section className="red-background2">
        <p className="red-paragraph22">
        Ang "Pagbasa at Pagsulat sa Iba't Ibang Disiplina"</p> 
        <p className="red-paragraph2">ay tumutukoy sa mga kasanayan at estratehiya na ginagamit sa pag-unawa</p> 
        <p className="red-paragraph2">at paglikha ng mga teksto sa iba't ibang larangan ng pag-aaral. Ang bawat disiplina ay may kanya-kanyang estilo at layunin,</p> 
        <p className="red-paragraph2">kaya mahalagang maunawaan ang konteksto ng pagbasa at pagsulat sa bawat isa. Narito ang ilang aspeto:</p>
      </section>

      {/* Main Content Section */}
      <main className="main-content2">
        <div className="container left-container2">
          {/*Title Box*/}
          <div className="titleb">
            <h2 className="title11">Disiplina ng Agham</h2> {/* Title for the paragraph */}
      </div>
          {/*Content*/}
      <p className="commu1">
      Sa mga disiplina tulad ng biyolohiya, kimika, at pisika, ang pagbasa at pagsulat ay nakatuon sa mga teknikal na ulat, 
      pananaliksik, at pagsusuri. Mahalaga ang pagkaunawa sa mga terminolohiya at metodolohiya.
    </p>
      {/*Content 2*/}
      <div className="titleb2">
            <h2 className="title22">Sining at Humanidades</h2> {/* Title for the paragraph */}
      </div>
          {/*Content2*/}
      <p className="commu2">
      Sa mga larangang ito, ang pagbasa at pagsulat ay madalas na naglalayong magpahayag ng mga damdamin, ideya, at interpretasyon. Ang mga sanaysay, tula, 
      at kuwento ay nagiging paraan ng pagtalakay sa mga komplikadong tema.
    </p>
      {/*Content 3*/}
      <div className="titleb3">
              <h2 className="title33">Agham Panlipunan</h2> {/* Title for the paragraph */}
        </div>
            {/*Content3*/}
        <p className="commu3">
        Sa mga disiplina tulad ng sosyolohiya, antropolohiya, at ekonomiks, ang pagbasa at pagsulat ay kadalasang naglalaman ng pagsusuri ng mga datos, opinyon, at argumento. 
        Mahalaga ang kakayahang bumuo ng mga kritikal na pagsusuri.
      </p>
      {/*Content 4*/}
      <div className="titleb4">
              <h2 className="title44">Teknolohiya at Inhinyeriya</h2> {/* Title for the paragraph */}
        </div>
            {/*Content4*/}
        <p className="commu4">
        Sa mga larangang ito, ang pagbasa at pagsulat ay nakatuon sa mga manwal, dokumentasyon, at teknikal na ulat. 
        Kailangan ang pagiging tiyak at malinaw sa mga paliwanag.
      </p>
      {/*Content 5*/}
      <div className="titleb5">
              <h2 className="title55">Edukasyon</h2> {/* Title for the paragraph */}
        </div>
            {/*Content5*/}
        <p className="commu5">
        Ang mga guro at mag-aaral ay nangangailangan ng mga kasanayan sa pagbasa at pagsulat upang makipagtulungan at makipagpalitan ng ideya. Mahalaga ang pagbuo ng mga lesson plan, 
        pagsusulit, at iba pang materyal na pang-edukasyon.
      </p>
  </div>
    {/*Right Side */}
  <div className="container right-container2">
    <img src="/agham.jpg" alt="Agham" className="agham-image" />
    <img src="/arts.jpg" alt="Arts" className="arts-image" />
    <img src="/panlipunan.jpg" alt="Panlipunan" className="panlipunan-image" />
    <img src="/technology.jpg" alt="Technology" className="technology-image" />
    <img src="/education.jpg" alt="Education" className="education-image" />
  </div>
</main>

<section className="rbackground2">
        <p className="rparagraph2">
        Ang pag-unawa sa mga konteksto ng pagbasa at pagsulat sa iba't ibang disiplina</p> 
        <p className="rparagraph22">ay mahalaga hindi lamang para sa akademikong tagumpay kundi pati na rin sa pagpapalawak ng kaalaman at kasanayan sa buhay.</p>
      </section>
      {/* Add Footer Here */}
      <Footer />  {/* Include Footer at the bottom */}
    </div>
    
  );
};

export default Pagbasa;
