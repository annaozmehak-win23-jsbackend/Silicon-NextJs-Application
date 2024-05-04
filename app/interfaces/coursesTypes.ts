export interface Course {
    id: string;
    image: string;
    partitionKey: string;
    isBestseller: boolean;
    isDigital: boolean;
    categories: string[];
    title: string;
    ingress: string;
    starRating: number;
    reviews: string;
    likes: string;
    likesInProcents: string;
    hours: number;
    authors: string[];
    prices: {
        current: string;
        price: number;
        discount: number;
    };
    content: {
        description: string;
        includes: string[];
        programDetails: ProgramDetail[];
    
    };
}

export interface ProgramDetail {
    id: number;
    title: string;
    description: string;
}