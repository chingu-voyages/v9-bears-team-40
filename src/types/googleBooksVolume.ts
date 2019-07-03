type googleBooksVolume = {
  volumeInfo: {
    title: string;
    authors?: Array<string>;
    description?: string;
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    industryIdentifiers?: Array<{
      type: string;
      identifier: string;
    }>;
    pageCount?: number;
    publishedDate?: string;
    averageRating: number;
    ratingsCount: number;
  };
};

export default googleBooksVolume;
