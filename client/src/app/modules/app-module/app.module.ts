import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from '../article/article/article.component';
import { ArticlesService } from '../../services/articles.service';
import { EditArticleComponent } from '../create-article/edit-article/edit-article.component';
import { ArticleModule } from '../article/article.module';
import { AuthorModule } from '../author/author.module';
import { AuthorComponent } from '../author/author/author.component';

import { TagComponent } from '../tag/tag.component';
import { LoginComponent } from '../login/login.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { StoreModule } from "@ngrx/store";
import * as fromReducers from '../../store/reducers/index';
import {EffectsModule} from "@ngrx/effects";
import {ArticlesEffects} from "../../store/effects/index";
import { SignupComponent } from '../signup/signup.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MainPageModule} from "../main-page/main-page.module";
import {MainPageComponent} from "../main-page/main-page/main-page.component";
import {SelfArticlesComponent} from "../articles/self-articles/self-articles.component";
import {ArticlesModule} from "../articles/articles.module";
import {FeedArticlesComponent} from "../articles/feed-articles/feed-articles.component";
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {CreateArticleModule} from "../create-article/create-article.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ArticlesModule,
    CreateArticleModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'articles/new', component: EditArticleComponent},
      {path: 'articles/:id', component: ArticleComponent},
      {path: 'articles/:id/edit', component: EditArticleComponent},
      {path: 'self-articles', component: SelfArticlesComponent},
      {path: 'feed-articles', component: FeedArticlesComponent},
      {path: 'authors/:id', component: AuthorComponent},
      {path: 'tags/:tag', component: TagComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent}
    ]),
    ArticleModule,
    AuthorModule,
    MainPageModule,
    EffectsModule.forRoot([ArticlesEffects]),
    StoreModule.forRoot(fromReducers.reducers, {metaReducers: fromReducers.metaReducers}),

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    ArticlesService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
