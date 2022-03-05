import {OfferDTO} from '../types/offer';
import {FilterType} from '../const';

export const offers: OfferDTO[] = [
  {
    'city': {
      'name': FilterType.Cologne,
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/13.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
    ],
    'title': 'The house among olive ',
    'isFavorite': true,
    'isPremium': true,
    'rating': 3.5,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 6,
    'price': 154,
    'goods': [
      'Coffee machine',
      'Breakfast',
      'Laptop friendly workspace',
      'Fridge',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Washing machine',
      'Dishwasher',
    ],
    'host': {
      'id': 25,
      'name': 'Alexa',
      'isPro': false,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16,
    },
    'id': 1,
  },
  {
    'city': {
      'name': FilterType.Paris,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/13.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
    ],
    'title': 'Tile House',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8,
    'type': 'apartment',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 238,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace',
      'Washer',
      'Baby seat',
      'Air conditioning',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16,
    },
    'id': 2,
  },
  {
    'city': {
      'name': FilterType.Hamburg,
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/9.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 123,
    'goods': [
      'Laptop friendly workspace',
      'Washer',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Breakfast',
      'Fridge',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 53.529341,
      'longitude': 9.975654,
      'zoom': 16,
    },
    'id': 3,
  },
  {
    'city': {
      'name': FilterType.Brussels,
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/7.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
    ],
    'title': 'Wood and stone place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 176,
    'goods': [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16,
    },
    'id': 4,
  },
  {
    'city': {
      'name': FilterType.Amsterdam,
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/9.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
    ],
    'title': 'Waterfront with extraordinary view',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 224,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
      'Baby seat',
      'Air conditioning',
      'Washer',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 52.37154,
      'longitude': 4.889976,
      'zoom': 16,
    },
    'id': 5,
  },
  {
    'city': {
      'name': FilterType.Cologne,
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/7.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 235,
    'goods': [
      'Washer',
      'Breakfast',
      'Laptop friendly workspace',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16,
    },
    'id': 6,
  },
  {
    'city': {
      'name': FilterType.Dusseldorf,
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/10.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
    ],
    'title': 'Nice, cozy, warm big bed apartment',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5,
    'type': 'apartment',
    'bedrooms': 2,
    'maxAdults': 4,
    'price': 325,
    'goods': [
      'Towels',
      'Air conditioning',
      'Baby seat',
      'Washer',
      'Breakfast',
      'Laptop friendly workspace',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 51.243402,
      'longitude': 6.791314,
      'zoom': 16,
    },
    'id': 7,
  },
  {
    'city': {
      'name': FilterType.Brussels,
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/7.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9,
    'type': 'house',
    'bedrooms': 3,
    'maxAdults': 5,
    'price': 561,
    'goods': [
      'Air conditioning',
      'Baby seat',
      'Laptop friendly workspace',
      'Towels',
      'Dishwasher',
      'Coffee machine',
      'Fridge',
      'Breakfast',
      'Washer',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 50.862556999999995,
      'longitude': 4.375697,
      'zoom': 16,
    },
    'id': 8,
  },
  {
    'city': {
      'name': FilterType.Cologne,
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/5.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4,
    'type': 'house',
    'bedrooms': 2,
    'maxAdults': 5,
    'price': 537,
    'goods': [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast',
      'Air conditioning',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16,
    },
    'id': 9,
  },
  {
    'city': {
      'name': FilterType.Brussels,
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/19.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
    ],
    'title': 'Perfectly located Castro',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 6,
    'price': 319,
    'goods': [
      'Baby seat',
      'Cable TV',
      'Coffee machine',
      'Laptop friendly workspace',
      'Fridge',
      'Breakfast',
      'Towels',
      'Air conditioning',
      'Washing machine',
      'Washer',
      'Dishwasher',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16,
    },
    'id': 10,
  },
  {
    'city': {
      'name': FilterType.Paris,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/2.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2,
    'type': 'house',
    'bedrooms': 3,
    'maxAdults': 6,
    'price': 580,
    'goods': [
      'Fridge',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Laptop friendly workspace',
      'Dishwasher',
      'Washer',
      'Coffee machine',
      'Breakfast',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16,
    },
    'id': 19,
  },
];
