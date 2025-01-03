import { Post } from "../types/blog";
export declare const blogService: {
    getPosts(): Promise<Post[]>;
    createPost(post: Omit<Post, "id" | "created_at" | "updated_at">): Promise<Post>;
};
