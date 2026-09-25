export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: 'Burgers' | 'Tenders & Baskets' | 'Appetizers & Starters';
  description: string;
  badge?: string;
  image: string;
  isVerifiedPrice: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const RESTAURANT_INFO = {
  name: 'The Chow Hall',
  tagline: 'Classic American Casual Dining in Knoxville',
  phone: '(865) 985-2893',
  phoneRaw: '8659852893',
  address: {
    street: '5706 E Emory Rd #5704',
    city: 'Knoxville',
    state: 'TN',
    zip: '37938',
    full: '5706 E Emory Rd #5704, Knoxville, TN 37938',
  },
  cuisine: 'American Restaurant & Casual Dining',
  rating: {
    score: 4.9,
    maxScore: 5.0,
    reviewCount: 570,
    source: 'Google Reviews',
  },
  hours: {
    known: 'Monday – Friday: 11:00 AM – 8:00 PM',
    note: 'Weekend hours may vary. Please call (865) 985-2893 to confirm holiday & weekend schedule.',
    schedule: [
      { days: 'Monday – Friday', hours: '11:00 AM – 8:00 PM', isOpenDay: true },
      { days: 'Saturday & Sunday', hours: 'Please call ahead to confirm', isOpenDay: false },
    ],
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Chow+Hall+5706+E+Emory+Rd+%235704+Knoxville+TN+37938',
  googleMapsEmbed: 'https://maps.google.com/maps?q=5706+E+Emory+Rd+%235704,+Knoxville,+TN+37938&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

// ONLY the 4 verified menu items requested with their exact prices:
export const FEATURED_MENU_ITEMS: MenuItem[] = [
  {
    id: 'basic-burger',
    name: 'Basic Burger',
    price: '$7.99',
    category: 'Burgers',
    description: 'Juicy, seared all-American beef patty served on a toasted bun with crisp lettuce, ripe tomato, pickles, and classic fixings.',
    badge: 'Classic Favorite',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isVerifiedPrice: true,
  },
  {
    id: 'bacon-cheese-burger',
    name: 'Bacon Cheese Burger',
    price: '$9.29',
    category: 'Burgers',
    description: 'Fresh grilled beef patty layered with melted cheese, savory thick-cut crispy bacon, and traditional burger toppings on a toasted bun.',
    badge: 'Guest Favorite',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isVerifiedPrice: true,
  },
  {
    id: 'chicken-tenders',
    name: 'Chicken Tenders',
    price: '$6.79',
    category: 'Tenders & Baskets',
    description: 'Golden-fried, crispy tender chicken strips cooked fresh to order. Tender and flavorful on the inside with a crisp, seasoned coating.',
    badge: 'Popular Basket',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    isVerifiedPrice: true,
  },
  {
    id: 'loaded-nachos',
    name: 'Loaded Nachos',
    price: '$7.99',
    category: 'Appetizers & Starters',
    description: 'Generous platter of crisp warm tortilla chips piled high with bubbling melted cheese, savory toppings, jalapeños, and salsa.',
    badge: 'Crowd Pleaser',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80',
    isVerifiedPrice: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Handcrafted Cheeseburgers',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    description: 'Hearty American burgers griddled fresh and served hot.',
  },
  {
    id: 'gal-2',
    title: 'Crispy Golden Chicken Tenders',
    category: 'Crispy Baskets',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    description: 'Cooked to golden crisp perfection for maximum crunch.',
  },
  {
    id: 'gal-3',
    title: 'Loaded Nacho Platter',
    category: 'Shareable Starters',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80',
    description: 'Piled high with melted cheese and zesty toppings.',
  },
  {
    id: 'gal-4',
    title: 'Classic Diner Burger & Fixings',
    category: 'American Classics',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless comfort food made with hearty portions.',
  },
  {
    id: 'gal-5',
    title: 'Golden Seasoned Fries',
    category: 'Sides & Baskets',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    description: 'Crisp, hot fries — the classic companion to any order.',
  },
  {
    id: 'gal-6',
    title: 'Welcoming Casual Dining Ambiance',
    category: 'Dining Experience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'A friendly and relaxed space for friends, families, and neighbors.',
  },
];
