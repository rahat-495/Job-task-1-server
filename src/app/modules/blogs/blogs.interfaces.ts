
type Blog = {
    title: string;
    tags: string[];
    description: string;
    likes: number;
    views: number;
    images: string[];
    publishedDate: string;
    author: {
      name: string;
      profilePicture: string;
    };
}
