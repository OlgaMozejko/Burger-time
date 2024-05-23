import { PlacesData } from './places.interface';

export const mockRestaurants:PlacesData = { restaurants: [
  {
    id: '1',
    name: 'Burger Queen',
    latitude: 10.73061,
    longitude: -13.935242,
    description: 'Home of the best burgers in town!',
    openingHours: [
      { Monday: '10:00 AM - 10:00 PM' },
    ],
    reviews: [],
  },
  {
    id: '2',
    name: 'Patty Palace',
    latitude: 14.052235,
    longitude: -18.243683,
    description: 'Royal treatment for your taste buds.',
    openingHours: [
      { Monday: '11:00 AM - 11:00 PM' },
    ],
    reviews: [],
  },
  {
    id: '3',
    name: 'Grill Master',
    latitude: 17.774929,
    longitude: -12.419418,
    description: 'Grilled to perfection every time.',
    openingHours: [
      { Monday: '12:00 PM - 12:00 AM' },
    ],
    reviews: [],
  },
]};

export const mockTags = ['good location', 'wheelchair accessible', 'no reservation needed', 'fast food', 'family friendly', 'great service', 'vegetarian friendly', 'vegan friendly'];