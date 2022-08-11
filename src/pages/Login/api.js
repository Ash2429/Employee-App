import {baseApi} from "../../services/api";

const loginApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
login:builder.mutation({
  query(body) {
   return {
     url: `/employee/login`,
     method: 'POST',
     body
   }
 },
}),
    overrideExisting: false,
  })})
  
  export const { useLoginMutation} = loginApi