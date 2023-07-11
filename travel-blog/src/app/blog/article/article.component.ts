import { Component } from '@angular/core';
import { Articles } from '../models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  articles?: Articles;

  constructor(private readonly articlesService: ArticlesService) {}

  onArticleChange(value: string): void {
    console.log('clicked on', value);
  }

  onClick(): void {
    this.articles = this.articlesService.getArticles();
  }
}
