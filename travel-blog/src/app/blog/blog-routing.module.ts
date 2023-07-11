import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [{
  path: 'article-list',
  component: ArticleComponent
},
{
  path: 'article-details/:id',
  component: ArticleDetailsComponent
}, {
  path: '**',
  redirectTo: 'article-list'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
