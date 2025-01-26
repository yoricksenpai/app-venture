interface Author {
    authorId: number;
    name: string;
  }
  
  export interface StartupCardType {
    _id: number;
    _createdAt: Date;
    views: number;
    author: Author;
    description: string;
    image: string;
    category: string;
    title: string;
  }