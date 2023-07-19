import { Injectable } from '@angular/core';
import {
  Article,
  Articles,
  ServerArticle,
  ServerArticles,
} from '../blog/models/article';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly endpoint: string =
    'https://e8931a16-7d5f-4f06-966c-3a46e574c1eb.mock.pstmn.io';

  constructor(private readonly httpClient: HttpClient) {}

  getArticles(): Observable<Articles> {
    const url = `${this.endpoint}/articles`;
    return this.httpClient
      .get<ServerArticles>(url)
      .pipe(map((serverArticles) => this.mapArticlesFrom(serverArticles)));
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.endpoint}/articles/${id}`;
    return this.httpClient
      .get<ServerArticle>(url)
      .pipe(map((serverArticle) => this.mapArticleFrom(serverArticle)));
  }

  postArticle(article: Article): Observable<Article> {
    const url = `${this.endpoint}/articles`;
    const body = article;
    return this.httpClient.post<Article>(url, body);
  }

  private mapArticlesFrom(serverArticles: ServerArticle[]): Articles {
    return serverArticles.map((serverArticle) =>
      this.mapArticleFrom(serverArticle)
    );
  }

  private mapArticleFrom(serverArticle: ServerArticle): Article {
    return {
      title: serverArticle.title,
      content: serverArticle.content,
      publishDate: serverArticle.publishDate,
    };
  }
}
