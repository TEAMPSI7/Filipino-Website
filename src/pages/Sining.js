import React from 'react';
import './Sining.css';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

const Sining = () => {
  return (
    <div>
       {/* Use the Header Component */}
       <Header />
      {/* Red Background Section */}
      <section className="red-background">
        <p className="red-paragraph1">
        Ang "Sining ng Pakikipagtalastasan"</p> 
        <p className="red-paragraph">ay tumutukoy sa masining at epektibong paraan ng pakikipag-ugnayan at</p> 
        <p className="red-paragraph">pagpapahayag ng mga ideya, damdamin, at impormasyon sa iba. Sa kontekstong ito,</p> 
        <p className="red-paragraph">may ilang pangunahing aspeto na dapat isaalang-alang:</p>
      </section>

      {/* Main Content Section */}
      <main className="main-content">
        <div className="container left-container">
          {/*Title Box*/}
          <div className="title-box">
            <h2 className="title1">Talastasan</h2> {/* Title for the paragraph */}
      </div>
          {/*Content*/}
      <p className="pcommu1">
        Ito ay hindi lamang basta pagsasalita o pagsusulat, kundi pati na rin ang pakikinig at 
        pag-unawa sa sinasabi ng iba. Mahalaga ang aktibong pakikinig upang maging mas epektibo ang talastasan.
    </p>
      {/*Content 2*/}
      <div className="title-box2">
            <h2 className="title2">Wika at Estilo</h2> {/* Title for the paragraph */}
      </div>
          {/*Content2*/}
      <p className="pcommu2">
      Ang pagpili ng tamang wika at istilo ay mahalaga sa pagpapahayag ng mensahe. 
      Dapat isaalang-alang ang audience o tagapakinig upang makamit ang nais na epekto.
    </p>
      {/*Content 3*/}
      <div className="title-box3">
              <h2 className="title3">Konteksto at Kultura</h2> {/* Title for the paragraph */}
        </div>
            {/*Content3*/}
        <p className="pcommu3">
        Ang mga salik tulad ng konteksto ng usapan at kultura ng mga kalahok ay may malaking epekto sa 
        kung paano naiintindihan at natatanggap ang mensahe.
      </p>
      {/*Content 4*/}
      <div className="title-box4">
              <h2 className="title4">Non-verbal na Komunikasyon</h2> {/* Title for the paragraph */}
        </div>
            {/*Content4*/}
        <p className="pcommu4">
        Kasama sa sining ng pakikipagtalastasan ang mga galaw, 
        ekspresyon ng mukha, at iba pang di-verbal na senyales na nagdadala ng karagdagang kahulugan sa sinasabi.
      </p>
      {/*Content 5*/}
      <div className="title-box5">
              <h2 className="title5">Emosyon at Empatiya</h2> {/* Title for the paragraph */}
        </div>
            {/*Content5*/}
        <p className="pcommu5">
        Ang kakayahang umunawa at makaramdam sa nararamdaman ng 
        iba ay mahalaga sa pagtataguyod ng mas malalim na ugnayan at pag-unawa.
      </p>
  </div>
    {/*Right Side */}
  <div className="container right-container">
    <img src="/communication.jpg" alt="Communication" className="commu-image" />
    <img src="/wika.jpg" alt="Wika" className="wika-image" />
    <img src="/kultura.png" alt="Kultura" className="kultura-image" />
    <img src="/nonverbal.jpg" alt="NonVerbal" className="nonverbal-image" />
    <img src="/emotion.jpg" alt="emotion" className="emotion-image" />
  </div>
</main>

{/* last */}
<section className="rbackground1">
        <p className="rparagraph1">
        Sa kabuuan, ang sining ng pakikipagtalastasan ay isang mahalagang aspeto ng</p>
        <p className="rparagraph11">ating pang-araw-araw na buhay na nakakatulong hindi lamang sa personal na relasyon kundi pati na rin sa propesyonal na konteksto.</p>
      </section>
      {/* Add Footer Here */}
      <Footer />  {/* Include Footer at the bottom */}
    </div>
    
  );
};

export default Sining;
