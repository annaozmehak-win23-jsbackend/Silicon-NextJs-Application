// interface CourseItemProps {
//     item: Course;
// }

interface Author {
    name: string;
  }
  
interface Price {
    price: number;
    currency: string;
    discount: number;
}
  
export interface CourseContent {
    id: string;
    isBestSeller: boolean;
    title: string;
    authors: Author[];
    prices: Price;
    hours: number;
    likesInProcent: number;
    likes: number;
}
