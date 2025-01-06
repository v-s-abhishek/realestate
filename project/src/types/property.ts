export interface Property {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  description: string;
  type: string;
  additional_images?: {
    url: string;
    description: string;
  }[];
  amenities?: string;
  year_built?: string;
  furnishing?: string;
  parking?: string;
  availability?: string;
}