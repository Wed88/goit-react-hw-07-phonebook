import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://626824b43f45bffa83885742.mockapi.io/api/v1/' }),
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
})

export const { useFetchContactsQuery } = contactApi