import { Component } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { IPost } from 'src/service/posts';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './starComponent/stars.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularProject';
  posts : IPost[];
  _filterdata : string;
  filteredList : IPost[];
  errorMessage : string;
  constructor( private postsService : PostsService ){

  }

  get filterdata() {
    return this._filterdata;
  }

  set filterdata( value: string ) {
    this._filterdata = value;
    this.filteredList = this.filterdata ? this.performFilter(this.filterdata) : this.posts;
    // this.performFilter( this._filterdata );
  }

  performFilter( filterdata : string ) : IPost[] {
    filterdata = filterdata.toLocaleLowerCase();
    var filtered_data = this.posts.filter( ( post : IPost ) => {
        return post.title.toLocaleLowerCase().indexOf(filterdata) !== -1;
    } );
    return filtered_data;
  }

  ngOnInit() {
    this.postsService.getPosts().subscribe({
      next : iposts => {this.posts = iposts;
        this.filteredList = this.posts;
      },
      error : err => this.errorMessage = err
    });
    
  }
}
