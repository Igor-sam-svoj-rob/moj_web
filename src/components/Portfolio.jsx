import React from "react";
import apartmani from "../portfolio/apartmani-karin.jpg";
import dalia from "../portfolio/dalia-made.jpg";
import ghliving from "../portfolio/gh-living.jpg";
import malimuzej from "../portfolio/malimuzejcuda.jpg";
import nevidni from "../portfolio/nevidni-zobni-aparat.jpg";
import onebymarlu from "../portfolio/onebymarlu.jpg";
import papirnica from "../portfolio/papirnica.jpg";
import top2floor from "../portfolio/top2floor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

function Portfolio() {

    //Top2Floor
  const openPopupboxTopFloor = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={top2floor}
          alt="Top2Floor"
        />
        <p>Top2Floor je tvrtka koja kupcima nudi široki asortiman proizvoda
          visoke kvalitete.</p>
          <p>Stacionirana u Buzinu, smještena je na 3 etaže i
          nudi:</p> 
          <ul>
          <li>keramičke pločice,</li> 
          <li>sanitarnu opremu,</li> 
          <li>kupaonski namještaj,</li> 
          <li>kade i tuš kade,</li> 
          <li>slavine,</li>
          <li>laminate i parkete,</li>
          <li>madrace</li>
          </ul>
        <p><b>Top2Floor:</b>{" "}<a className="hyper-link" onClick={() => window.open("https://top2floor.hr/")}>top2floor.hr</a></p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Top2Floor",
        },
      },
    });
  };
  
  const popupboxConfigTopFloor = {
    fadeIn: true,
    fadeInSpeed: 500
  };
  //Kraj Top2Floor

  //Dalia
  const openPopupboxDalia = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={dalia}
          alt="Dalia"
        />
        <p>Dalia Katavić, dizajnerica unikatnog nakita, satova, naočala i instalacija.</p>
        <p>Ljubav prema nakitu pretočila je u djelatnost kreativnog naziva Pinkica kreative.</p> 
        <p><b>Dalia-Made:</b>{" "}<a className="hyper-link" onClick={() => window.open("https://dalia-made.com/")}>dalia-made.com</a></p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Dalia-Made",
        },
      },
    });
  };
  const popupboxConfigDalia = {
    fadeIn: true,
    fadeInSpeed: 500
  };
 //Kraj Dalia

//Gh-living
const openPopupboxGh = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={ghliving}
          alt="GH-living"
        />
        <p>Stranica za prezentaciju i prodaju stanova. Kompleks od 2 zgrade, po 7 katova.</p>
        <p>Zgrade su na odličnoj lokaciji u Karlovcu.</p>
        <p><b>GH-living:</b>{" "}<a className="hyper-link" onClick={() => window.open("https://gh-living.hr/")}>gh-living.hr</a></p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "GH-living",
        },
      },
    });
  };
  const popupboxConfigGh = {
    fadeIn: true,
    fadeInSpeed: 500
  };
 //Kraj GH-living

 //Papirnica
const openPopupboxPapirnica = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popup"
        src={papirnica}
        alt="Papirnica"
      />
      <p>Stranica tvrtke TIP Kutina s velikim izborom kvalitetnih artikala za ured i školu.</p>
      <p><b>TIP Kutina:</b>{" "}<a className="hyper-link" onClick={() => window.open("https://papirnica.hr/")}>papirnica.hr</a></p>
    </>
  );
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "TIP Kutina",
      },
    },
  });
};
const popupboxConfigPapirnica = {
  fadeIn: true,
  fadeInSpeed: 500
};
//Kraj Papirnica

//MMZ
const openPopupboxMmz = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popup"
        src={malimuzej}
        alt="Mali Muzej Čuda"
      />
      <p>Muzej igračaka je čudesno mjesto okupljanja male i velike djece.</p> 
      <p>Čudesni je to  prostor za igru u Ilici 92 i Ilici 67.</p>
      <p><b>Mali muzej čuda:</b>{" "}<a className="hyper-link" onClick={() => window.open("https://malimuzejcuda.eu/")}>malimuzejcuda.eu</a></p>
    </>
  );
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Mali Muzej Čuda",
      },
    },
  });
};
const popupboxConfigMmz = {
  fadeIn: true,
  fadeInSpeed: 500
};
//Kraj MMZ

//OneByMarlu
const openPopupboxMarlu = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popup"
        src={onebymarlu}
        alt="OneByMarlu"
      />
      <p>Orijentirani prema slow fashion-u i kvaliteti, oneByMarlu kreira odjevne predmete</p>
      <p>Njihova misija je stvoriti bezvremenske komade koje ćete obožavati i nositi godinama.</p>
      <p><b>onByMarlu:</b>{" "}<a className="hyper-link"onClick={() => window.open("https://onebymarlu.com/")}>oneByMarlu.com</a></p>
    </>
  );
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "OneByMarlu",
      },
    },
  });
};
const popupboxConfigMarlu = {
  fadeIn: true,
  fadeInSpeed: 500
};
//Kraj oneByMarlu

//Nevidni zobni aparat
const openPopupboxNevidni = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popup"
        src={nevidni}
        alt="Invisalign"
      />
      <p>Ortodonska ordinacija iz Poreča, pruža vrhunske usluge zasnovane na digitalnim tehnologijama.</p>
      <p>Invisalign, novi sistem ortodoncije, nevidljivi ortodontski aparat</p>
      <p><b>Invisalign:</b>{" "}<a className="hyper-link"onClick={() => window.open("https://nevidni-zobni-aparat.com/")}>nevidni-zobni-aparat.com</a></p>
    </>
  );
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Invisalign",
      },
    },
  });
};
const popupboxConfigNevidni = {
  fadeIn: true,
  fadeInSpeed: 500
};
//Kraj Nevidni zobni aparat

//Apartmani Karin
const openPopupboxKarin = () => {
  const content = (
    <>
      <img
        className="portfolio-image-popup"
        src={apartmani}
        alt="Apartmani Karin"
      />
      <p>Apartmani na otoku Krku, višejezična booking stranica.</p>
      <p>Jedna od najstarijih stranica koje smo radili.</p>
      <p><b>Apartmani Karin:</b>{" "}<a className="hyper-link"onClick={() => window.open("http://www.apartmani-karin.com/")}>apartmani-karin.com</a></p>
    </>
  );
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Apartmani Karin",
      },
    },
  });
};
const popupboxConfigKarin = {
  fadeIn: true,
  fadeInSpeed: 500
};
//Kraj Apartmani Karin


  return (
    <div className="portfolio-container">
      <h2 className="text-uppercase text-center glow">
        Projekti na kojima smo sudjelovali
      </h2>
      <div className="portfolio-inner-container">
        <div
          className="image-box-wrapper row justify-content-center"
          onClick={openPopupboxTopFloor}
        >
          <img className="portfolio-image" src={top2floor} alt="Top2Floor" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center" onClick={openPopupboxDalia}>
          <img className="portfolio-image" src={dalia} alt="Dalia" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center" onClick={openPopupboxGh}>
          <img className="portfolio-image" src={ghliving} alt="GH living" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center" onClick={openPopupboxPapirnica}>
          <img className="portfolio-image" src={papirnica} alt="Papirnica" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center" onClick={openPopupboxMmz}>
          <img
            className="portfolio-image"
            src={malimuzej}
            alt="Mali Muzej Čuda"
          />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center" onClick={openPopupboxMarlu}>
          <img className="portfolio-image" src={onebymarlu} alt="OneByMarlu" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center" onClick={openPopupboxNevidni}>
          <img className="portfolio-image" src={nevidni} alt="OneByMarlu" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center" onClick={openPopupboxKarin}>
          <img
            className="portfolio-image"
            src={apartmani}
            alt="Apartmani Karin"
          />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
      </div>
      <PopupboxContainer {...popupboxConfigTopFloor} />
      <PopupboxContainer {...popupboxConfigDalia} />
      <PopupboxContainer {...popupboxConfigGh} />
      <PopupboxContainer {...popupboxConfigPapirnica} />
      <PopupboxContainer {...popupboxConfigMmz} />
      <PopupboxContainer {...popupboxConfigMarlu} />
      <PopupboxContainer {...popupboxConfigNevidni} />
      <PopupboxContainer {...popupboxConfigKarin} />
    </div>
  );
}

export default Portfolio;
