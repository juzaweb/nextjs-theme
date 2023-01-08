import axios from 'axios';

export async function getThemeSetting() {
  try {
    const response = await axios.get(`theme/setting`);
    return response.data;
  } catch (error: any) {
    console.error(error);
  }
}

export async function getPostBySlug(slug: string, type: string = 'posts') {
    try {
      const response = await axios.get(`post-type/${type}/${slug}`);
      return response.data;
    } catch (error: any) {
      console.error(error);
    }
}

export async function getPostComments(slug: string, type: string = 'posts') {
  try {
    const response = await axios.get(`post-type/${type}/${slug}/comments`);
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