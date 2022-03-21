import React from "react";
import onama from "../images/o-nama.jpg";

function Omeni() {
  return (
    <div className="container py-5 omeni">
      <div className="row">
        <div className="col-lg-5 col-xm-10">
          <div className="fotka mb-5">
            <img className="profilka" src={onama} alt="o nama" />
          </div>
        </div>
        <div className="col-lg-7 col-xm-14">
          <h2 className="glow">O nama</h2>
          <p>
            Osnovani 2021., bavimo se izradom web stranica i
            web trgovina.
          </p>
          <p>
            Nalazimo se u Kutini, ali u današnje doba to nas ne spriječava da
            imamo klijente diljem Hrvatske i svijeta.
          </p>
          <p>
            Ako trebate ekipu koja radi posao na vrijeme i trudi se na svakom
            projektu napraviti dodatnu vrijednost, onda ste došli na pravo
            mjesto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Omeni;
