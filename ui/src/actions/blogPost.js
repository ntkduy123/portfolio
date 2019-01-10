import { GET_POST_BY_ID } from './types';

export const getPostById = id => ({
  type: GET_POST_BY_ID,
  request: {
    url: `api/post/${id}`,
    method: "GET"
  }
})
