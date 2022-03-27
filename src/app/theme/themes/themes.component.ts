import { Component } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IPost, ITheme } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {

  themes: ITheme[] | undefined;
  recentPosts: IPost[] | undefined;

  constructor(private contentService: ContentService, private userService : UserService) {
    this.fetchThemes();
    this.fetchResentPosts();
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }


  fetchThemes(): void  {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(x => this.themes = x);
  }

  fetchResentPosts(): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(x => this.recentPosts = x)
  }
}
