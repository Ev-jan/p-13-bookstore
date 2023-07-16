import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "../interfaces";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/books" }),
  endpoints: (builder) => ({
    getBooks: builder.query<IBook[], { subject?: string; startIndex?: number }>({
      query: ({ subject, startIndex }) =>
        `?q=Subject:${subject}&startIndex=${startIndex}`,
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
