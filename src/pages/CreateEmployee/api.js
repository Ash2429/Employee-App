import {baseApi} from "../../services/api";

const createApi =baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
    employeeById:builder.query({
                query(id) {
                return {
                    url: `/employee/${id}`,
                    method: 'PATCH'
                }
                }, providesTags:["dETAILS"]
            }),
    overrideExisting: false,
  })})
  
  export const {useCreateEmployeeMutation,useUpdateEmployeeMutation, useEmployeeByIdQuery} = createApi