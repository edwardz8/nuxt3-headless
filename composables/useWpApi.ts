import { Post } from '~~/types/Post';

export default () => {
    const config = useRuntimeConfig();
    const WP_URL: string = config.wpUri;

    // get
    const get = async <T>(endpoint: string) =>
        useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);

    // Get All Posts
    const getPosts = async (
        category?: number,
        page: number = 1,
        perPage: number = 9,
        fields: string = "author,id,excerpt,title,link,slug,date"
    ) => {
        let query: string = `posts?page=${page}&per_page=${perPage}&_embed=1`;
        if (category) {
            query += `&categories=${category}`;
        }
        return get<Post[]>(query);
    };

    // Get a Single Post
    const getPost = async (slug: string) =>
        get<Post[]>(`posts?slug=${slug}&_embed=1`);

    // Get All Categories
    const getCategories = async (fields: string = "name,slug,count") => {
        return get<any>(`categories`);
    };

    // Get a Single Category
    const getCategory = async (slug: string) =>
        get<any>(`categories?slug=${slug}`);

    return {
        get,
        getPosts,
        getPost,
        getCategories,
        getCategory,
    };
};