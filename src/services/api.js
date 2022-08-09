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
  bQ: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: () => `/employee`,
      providesTags:["Delete","Submit"]
    }),
    createEmployee:builder.mutation({
      query(body) {
        return {
          url: `/employee`,
          method: 'POST',
          body,
      }
      },
      invalidatesTags:["Submit"]
  }),
  employeeById:builder.query({
    query(id) {
      return {
        url: `/employee/${id}`,
        method: 'PATCH'
      }
    }, providesTags:["dETAILS"]
}),
  deleteemployee:builder.mutation({
  query(id) {
    return {
      url: `/employee/${id}`,
      method: 'DELETE'
    }
  },
  invalidatesTags:["Delete"]
}),
  updateEmployee:builder.mutation({
   query({id,body}) {
    return {
      url: `/employee/${id}`,
      method: 'PUT',
      body
    }
  },
  invalidatesTags:["Submit", "dETAILS"]
}),
login:builder.mutation({
  query(body) {
   return {
     url: `/employee/login`,
     method: 'POST',
     body
   }
 },
})
})
})
// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const{ useGetEmployeeQuery , useCreateEmployeeMutation , useDeleteemployeeMutation, useEmployeeByIdQuery , useUpdateEmployeeMutation , useLoginMutation} = baseApi
export default baseApi