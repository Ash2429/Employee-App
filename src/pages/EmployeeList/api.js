import {baseApi} from "../../services/api";

const listApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployee: builder.query({
            query: () => `/employee`,
            providesTags:["Delete","Submit"]
          }),
  getEmployeeByStatus:builder.query({
    query(status) {
      return {
        url: `/employee/${status}`,
        method: 'GET'
      }
    },
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
    overrideExisting: false,
})
})
  
  export const { useGetEmployeeQuery , useGetEmployeeByStatusQuery, useDeleteemployeeMutation} = listApi