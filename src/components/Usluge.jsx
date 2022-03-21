import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFileCode,
  faCartPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Usluge() {
  return (
    <div className="usluge">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <FontAwesomeIcon icon={faFileCode} size="4x" />
                <h3>Izrada web stranica</h3>
                <p class="usluge-p1">Svaka web stranica je odraz Vašeg poslovanja.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <FontAwesomeIcon icon={faCartPlus} size="4x" />
                <h3>Izrada web trgovina</h3>
                <p class="usluge-p2">Danas svi prodaju online, zašto ne bi i vi?</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <FontAwesomeIcon icon={faDesktop} size="4x" />
                <h3>Izrada Landing stranica</h3>
                <p class="usluge-p3">Trebate brzu, jednostavnu, prezentacijsku stranicu?</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <FontAwesomeIcon icon={faSearch} size="4x" />
                <h3>SEO</h3>
                <p class="usluge-p4">Bez dobre optimizacije, nitko neće znati za Vaš web.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usluge;
