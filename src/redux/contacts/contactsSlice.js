import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://626824b43f45bffa83885742.mockapi.io/api/v1/' }),
  tagTypes:['Contact'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags:['Contact']
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'delete', 
      }),
      invalidatesTags:['Contact']
    }),
  }),
})

export const { useFetchContactsQuery, useDeleteContactMutation } = contactApi