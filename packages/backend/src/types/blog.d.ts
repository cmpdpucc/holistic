export interface Post {
    id: string;
    title: string;
    content: string;
    author_id: string;
    published: boolean;
    created_at: string;
    updated_at: string;
    category: "personal" | "educational";
    tags?: string[];
}
