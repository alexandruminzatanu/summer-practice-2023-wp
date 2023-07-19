import { Component, OnDestroy } from '@angular/core';
import { Article, Articles } from '../models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnDestroy{
  articles?: Articles;
  articlesGetSubscription!: Subscription;
  articlesCreateSubscription!: Subscription;

  constructor(
    private readonly articlesService: ArticlesService,
    private readonly httpService: HttpService
    ) {}

  ngOnDestroy(): void {
    this.articlesGetSubscription.unsubscribe();
  }

  onArticleChange(value: string): void {
    console.log('clicked on', value);
  }

  onClick(): void {
    this.articlesGetSubscription = this.httpService.getArticles().subscribe(articles => {
      this.articles = articles;
    })
  }

  onClickCreateArticle(): void{
    const article: Article = {
      title: 'Rome',
      content: 'travel to Rome',
      publishDate: new Date()
    }

    this.articlesCreateSubscription = this.httpService.postArticle(article).subscribe(value => {
      console.log(value);
    })
  }
}
