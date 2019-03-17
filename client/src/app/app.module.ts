import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ArticleComponent } from './article/article/article.component';
import { ArticlesService } from './service/articles.service';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticlesModule } from './articles/articles.module';
import { ArticleModule } from './article/article.module';
import { AuthorModule } from './author/author.module';
import { AuthorComponent } from './author/author/author.component';

import { SharedModule } from './shared/shared.module';
import { TagComponent } from './tag/tag.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StoreModule } from "@ngrx/store";
import { reducer } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    EditArticleComponent,
    TagComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ArticlesComponent},
      {path: 'articles/new', component: EditArticleComponent},
      {path: 'articles/:id', component: ArticleComponent},
      {path: 'articles/:id/edit', component: EditArticleComponent},
      {path: 'authors/:id', component: AuthorComponent},
      {path: 'tags/:tag', component: TagComponent},
      {path: 'login', component: LoginComponent}
    ]),
    ArticlesModule,
    ArticleModule,
    AuthorModule,
    SharedModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [
    ArticlesService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
