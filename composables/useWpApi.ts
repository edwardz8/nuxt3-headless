import { Post } from '~~/types/Post'

export default async () => {
    const config = useRuntimeConfig();
    const WP_URL: string = config.wpUri;

    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
    };

    const getPosts = async (
        category?: number,
        page: number = 1,
        perPage: number = 20,
        fields: string = "author,id,excerpt,title,link,slug,date"
    ) => {
        let query: string = `posts?page=${page}&per_page=${perPage}&_embed=1`;
        if (category) {
            query += `&categories=${category}`;
        }
        return get<Post[]>(query); 
    };

    const getPost = async (slug: string) => {
        return get<Post>(`posts?slug=${slug}&_embed=1`);
    };

    const getCategories = async (fields: string = "name,slug,count") => {
        return get<any>(`categories`);
    };

    const getCategory = async (slug: string) => {
        return get<any>(`categories?slug=${slug}`);
    };

    return {
        get,
        getPosts,
        getPost,
        getCategories,
        getCategory,
    };
};