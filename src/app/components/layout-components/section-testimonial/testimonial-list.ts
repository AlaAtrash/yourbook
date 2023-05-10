import { testimonial } from './testimonial.interface';

export const TESTIMONIALS: testimonial[] = [
  {
    id: 1,
    name: 'Marion M.',
    location: 'Toulouse',
    comment:
      "Je suis inscrit depuis quelques mois à l'association de prêt de livre et je ne regrette pas une seule seconde ! Grâce à elle, j'ai découvert des livres que je n'aurais jamais achetés. En plus, j'ai économisé pas mal d'argent, c'est un vrai plus !",
    picture: 'assets/imgs/marion-m.jpg',
  },
  {
    id: 2,
    name: 'Yann B.',
    location: 'Lyon',
    comment:
      "Je suis abonné depuis plusieurs années et j'ai vu l'association grandir et se développer. Aujourd'hui, elle compte des milliers de membres à travers toute la France et l'ambiance est toujours aussi conviviale et chaleureuse.",
    picture: 'assets/imgs/yann-b.jpg',
  },
  {
    id: 3,
    name: 'Sarah L.',
    location: 'Annecy',
    comment:
      "Je suis étudiante et mon budget est assez serré. Grâce à l'association de prêt de livre, je peux emprunter des bouquins pour mes études sans me ruiner. C'est un véritable soulagement pour moi, et en plus, cela m'aide à réussir mes examens.",
    picture: 'assets/imgs/sarah-l.jpg',
  },
];
