import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  
  studies: any = [
    {
      id: "1",
      title: 'Auxiliar en mantenimiento y sistemas de computo',
      description: "ANDAP (Alianza con MINTIC)",
      subdescription: 'Año 2018 - Alianza MINTIC',
      image: "./assets/logos-academia/andap.png"
    },
    {
      id: "2",
      title: 'Tecnólogía en electrónica',
      description: "Universidad Distrital Francisco José de caldas",
      subdescription: ' Año 2020 ',
      image: "./assets/logos-academia/udistrital.png"
    },
    {
      id: "3",
      title: 'Ingeniería en telecomunicaciones',
      description: "Universidad Distrital Francisco José de caldas",
      subdescription: 'En proceso...',
      image: "./assets/logos-academia/udistrital.png"
    }
  ];

  certifications = [
    {
      id: "1",
      title: 'Fundamentos de programación y creación de páginas web',
      description: "Bictia",
      subdescription: 'Año 2020',
      image: "./assets/logos-academia/bictia.png"
    },
    {
      id: "2",
      title: 'Desarrollo web Full Stack',
      description: "Bictia",
      subdescription: 'Año 2020',
      image: "./assets/logos-academia/bictia.png"
    },
    {
      id: "3",
      title: 'Angular: De cero a experto',
      description: "Udemy",
      subdescription: 'Año 2021',
      image: "./assets/logos-academia/udemy-logo-letra.jpg.webp"
    },
    {
      id: "4",
      title: 'Construyendo redes inalámbricas comunitarias',
      description: "OEA-CITEL | Internet Society",
      subdescription: 'Año 2021',
      image: "./assets/logos-academia/oeacitel.jpg"
    },
    {
      id: "5",
      title: 'Angular Avanzado: Lleva tus bases al siguiente niveL - MEAN',
      description: "Udemy",
      subdescription: 'Año 2022',
      image: "./assets/logos-academia/udemy-logo-letra.jpg.webp"
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }



  
 
  constructor() { }

  ngOnInit(): void {

  }
}

