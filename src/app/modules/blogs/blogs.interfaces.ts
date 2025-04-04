
export type TAuthor = {
  name : string;
  email : string;
  profilePicture ?: string;
}

export type TBlog = {
    title: string;
    summury: string;
    tags: string[];
    description: string;
    likes?: number;
    views?: number;
    publishedDate: string;
    author: TAuthor;
    images ?: string[];
}
