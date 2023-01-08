import axios, { AxiosError } from 'axios'

export async function getPostBySlug(slug: string) {
    try {
      const response = await axios.get(`post-type/posts/${slug}`);
      return response.data;
    } catch (error: any) {
      console.error(error);
    }
}

export async function getPosts(type: string = 'posts', options: object = {}) {
    try {
      const response = await axios.get(`post-type/${type}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}