export interface SearchPage {
  kind: string;
  items?: [
    {
      cacheId: string;
      displayLink: string;
      formattedUrl: string;
      htmlFormattedUrl: string;
      htmlTitle: string;
      kind: string;
      link: string;
      snippet: string;
      title: string;
    }
  ];
  queries: {
    nextPage?: any[];
    request: any[];
  };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  url: {
    type: string;
    template: string;
  };
}