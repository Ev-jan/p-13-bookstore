import { NextResponse, NextRequest } from "next/server";
import { IBook } from "../../interfaces";

export async function GET(request: NextRequest) {
  const subjectStr = request.nextUrl.searchParams.get("q");
  const startIndex = request.nextUrl.searchParams.get("startIndex") ?? 1;
  const maxResults = request.nextUrl.searchParams.get("maxResults") ?? 10;
  const langRestrict = "en";
  const printType = "books";

  if (!subjectStr) {
    return NextResponse.json(
      {
        error: true,
        message: "The 'subject' query parameter is required",
      },
      {
        status: 400,
      }
    );
  }

  if (!startIndex) {
    return NextResponse.json(
      {
        error: true,
        message: "No pageIndex in query params",
      },
      {
        status: 400,
      }
    );
  }

  const apiUrl = "https://www.googleapis.com/books/v1/volumes";
  const urlWithParams = new URL(apiUrl);
  urlWithParams.searchParams.set("printType", printType);
  urlWithParams.searchParams.set("langRestrict", langRestrict);
  urlWithParams.searchParams.set("maxResults", `${maxResults}`);
  urlWithParams.searchParams.set("startIndex", `${startIndex}`);
  urlWithParams.searchParams.set("q", `${subjectStr}`);
  urlWithParams.searchParams.set(
    "key",
    "AIzaSyAV1Pfj6dTytZrCYtRXnjOIgt0YuFbWMLA"
  );

  const res = await fetch(urlWithParams.toString(), {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    const processedData: IBook[] = data.items.map((item: any) => {
      const processedItem: IBook = {
        id: item.id,
        authors: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        averageRating: item.volumeInfo.averageRating,
        ratingsCount: item.volumeInfo.ratingsCount,
        description: item.volumeInfo.description,
        amount: item.volumeInfo.amount ?? 30,
        currencyCode: item.volumeInfo.currencyCode ?? "$",
        thumbnail: item.volumeInfo.imageLinks?.thumbnail,
        coverMedium:
          item.volumeInfo.imageLinks?.medium ??
          item.volumeInfo.imageLinks?.thumbnail,
      };
      return processedItem;
    });

    return NextResponse.json(processedData);
  }
}
