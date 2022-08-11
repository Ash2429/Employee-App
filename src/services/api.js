import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getStorage } from './utils';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api',
prepareHeaders: (headers) => {
  const idToken = getStorage("idToken");
  if(idToken) {
    headers.set("authorization", `Bearer ${idToken}`);
  }
  return headers;
} }),
refetchOnMountOrArgChange:true,
endpoints: ()=>({})
})