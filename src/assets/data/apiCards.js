import { api_category } from "./apiCategori.js";
const babys = require ("../images/c_babys.svg").default;
const happy = require ("../images/c_happy_child.svg").default;
const mom = require ("../images/c_mom.svg").default;
const playing = require ("../images/c_playing.svg").default;
const sleep = require ("../images/c_sleep.svg").default;
const workers = require ("../images/happy_workers.jpg");

export const api_cards = [
  {
    id: 1,
    tittle: "Juego para pasar un día de verano en casa",
    text: "¿Quieres conocer algunos juegos divertidos para pasar un día de verano en casa? Presta atención a este artículo. ¡Te damos...",
    category: api_category[1].name,
    rank: 1, 
    image: happy,
  },
  {
    id: 2,
    tittle: "Cómo actuar cuando un niño golpea a su hermanito?",
    text: "Para un padre siempre es duro observar cómo su hijo agrede a otras personas. Pero el impacto es mayor cuando…",
    category: api_category[1].name,
    rank: 2, 
    image: babys
  },
  {
    id: 3,
    tittle: "5 Ventajas de Salir de la Rutina",
    text: "Inseguridad y baja autoestima tienen una relación directa. Son muchas las personas que viven en esa cuerda floja donde todo…",
    category: api_category[0].name,
    rank: 3, 
    image: playing
  },
  {
    id: 4,
    tittle: "Colapso mental: cuando siento el peso del mundo sobre mí",
    text: "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…",
    category: api_category[0].name,
    rank: 3, 
    image: sleep
  },
  {
    id: 5,
    tittle: "¿Se puede olvidar la lengua materna?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consequuntur modi? Iste veniam vero quam quibusdam blanditiis quasi quae temporibus dolor quidem quos optio omnis.",
    category: api_category[2].name,
    rank: 3, 
    image: mom
  },
  {
    id: 6,
    tittle: "Los 5 tipo de reconocimiento laboral",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consequuntur modi? Iste veniam vero quam quibusdam blanditiis quasi quae temporibus dolor quidem quos optio omnis.",
    category: api_category[2].name,
    rank: 2, 
    image: workers 
  },
  {
    id: 7,
    tittle: "¿Cómo saber si le gustas a alguien por WhatsApp?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consequuntur modi? Iste veniam vero quam quibusdam blanditiis quasi quae temporibus dolor quidem quos optio omnis.",
    category: api_category[2].name,
    rank: 2, 
    image: "http://www.seobook.com/images/happy-app-users.jpg" 
  },
  {
    id: 8,
    tittle: "9 lecciones para novatos en el amor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consequuntur modi? Iste veniam vero quam quibusdam blanditiis quasi quae temporibus dolor quidem quos optio omnis.",
    category: api_category[2].name,
    rank: 2, 
    image: "https://extremisimo.net/wp-content/uploads/2012/02/frases-amor-pareja.jpg" 
  },
];
