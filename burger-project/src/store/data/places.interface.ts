export interface PlacesData {
    restaurants: Restaurant[];
}

export interface Restaurant {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    description: string;
    openingHours: OpeningHours[];
    reviews: Review[];
}

export interface OpeningHours {
    [key: string]: string;
}

export interface Review {
//TODO review interface
}