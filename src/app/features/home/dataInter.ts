export interface ProductData {
  limit: number;
  products: Products[];
  skip: number;
  isDeleted?: string;
  total: number;
}

export interface Products {
  stock: number;
  rating: number;
  price: number;
  id: number;
  title: string;
  description: string;
  images: string[];
  thumbnail: string;
  brand: string;
  discountPercentage: number;
  category: string;
}
