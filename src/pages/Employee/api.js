import {baseApi} from "../../services/api";

const employeeAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
  
  export const { useEmployeeByIdQuery} = employeeAPi