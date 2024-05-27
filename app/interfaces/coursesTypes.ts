interface Author {
    name: string;
  }
  
export interface Price {
    price: number;
    currency: string;
    discount: number;
}

export interface Content {
    description: string;
    includes: string[];
    programDetails: ProgramDetails[];
}

export interface ProgramDetails {
    id: number;
    description: string;
    title: string;
}
  
export interface CourseContent {
    id?: string;
    imageUri: string;
    imageHeaderUri: string;
    isBestSeller: boolean;
    isDigital: boolean;
    categories: string[];
    title: string;
    ingress: string;
    starRating: number;
    reviews: string;
    likesInProcent: string;
    likes: string;
    hours: string;
    authors: Author[];
    prices: Price;
    content: Content;
}
