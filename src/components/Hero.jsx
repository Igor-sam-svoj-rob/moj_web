import React from "react";
import Typed from "react-typed";
import Particles from "react-tsparticles";

function Hero() {
  return (
    <>
      <div className="hero-header">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 120,
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 100,
                  duration: 0.6,
                },
              },
            },
            particles: {
              color: {
                value: "##53b7e8",
              },
              links: {
                color: "#53b7e8",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
            },
            detectRetina: true,
          }}
        />
        <div className="hero-main-header">
          <h1>
            <span className="crvena">Z</span>o<span className="plava">M</span>a
            Design, vaše rješenje za
          </h1>
          <Typed
            className="typed-text"
            strings={[
              "Izradu web stranica",
              "Izradu web trgovina",
              "Izradu Landing stranica",
              "Web dizajn",
            ]}
            typeSpeed={60}
            backSpeed={80}
            loop
          />
          <a href="#" className="kontakt-btn">
            <span>Javite nam se</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
