import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id = "tsparticles";
  particlesOptions = {
    particles: {
      number: {
          value: 80,
          density: {
              enable: !0,
              value_area: 500
          }
      },
      color: {
          value: "#ffffff"
      },
      shape: {
          type: "circle",
          stroke: {
              width: 0,
              color: "#000000"
          },
          polygon: {
              nb_sides: 5
          },
          image: {
              src: "img/github.svg",
              width: 100,
              height: 100
          }
      },
      opacity: {
          value: .6,
          random: !1,
          anim: {
              enable: !1,
              speed: 1,
              opacity_min: .2,
              sync: !1
          }
      },
      size: {
          value: 4,
          random: !0,
          anim: {
              enable: !1,
              speed: 35,
              size_min: .8,
              sync: !1
          }
      },
      line_linked: {
          enable: !0,
          distance: 150,
          color: "#ffffff",
          opacity: .3,
          width: 2
      },
      move: {
          enable: !0,
          speed: 1,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
              enable: !1,
              rotateX: 600,
              rotateY: 1200
          }
      }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: !0,
                mode: "repulse"
            },
            onclick: {
                enable: !1,
                mode: "repulse"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: .8
                }
            },
            bubble: {
                distance: 800,
                size: 80,
                duration: 2,
                opacity: .8,
                speed: 3
            },
            repulse: {
                distance: 100,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
  }

particlesLoaded(container: Container): void {
  console.log(container);
}

particlesInit(main: Main): void {
  console.log(main);
  
  // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
}

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateProject() {
    this.route.navigate(['/project'])
  }

  public checkSection(e) {
    console.log(e)
  }

}
