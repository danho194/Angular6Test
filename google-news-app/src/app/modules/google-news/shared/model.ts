export class NewsResult {
    status: string;
    totalResults: number;
    articles?: (Article)[] | null;
  }

  export class Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

  export class Source {
    id: string;
    name: string;
  }
