import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListItemComponent } from './article/article-list-item/article-list-item.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [{
  path: 'article-list',
  component: ArticleListItemComponent
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
