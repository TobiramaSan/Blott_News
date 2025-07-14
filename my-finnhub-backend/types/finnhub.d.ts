declare module "finnhub" {
  interface ApiKeyAuth {
    apiKey: string;
  }

  interface ApiClientInstance {
    authentications: {
      api_key: ApiKeyAuth;
      [key: string]: any;
    };
  }

  export interface MarketNewsItem {
    category: string;
    datetime: string;
    headline: string;
    id: number;
    image: string;
    source: string;
    summary: string;
    url: string;
  }

  interface MarketNewsOptions {
    minId?: number;
    from?: string;
    to?: string;
    [key: string]: any;
  }

  type FinnhubCallback<T> = (error: any, data: T | null, response: any) => void;

  export class DefaultApi {
    constructor();
    marketNews(
      category: string,
      options: MarketNewsOptions,
      callback: FinnhubCallback<MarketNewsItem[]>
    ): void;
  }

  const finnhub: {
    ApiClient: {
      instance: ApiClientInstance;
    };
    DefaultApi: typeof DefaultApi;
  };

  export = finnhub;
}
