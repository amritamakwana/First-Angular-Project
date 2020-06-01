import { Component } from '@angular/core';
import { IPost } from 'src/service/posts';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../service/posts.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'post-detail',
    templateUrl: './postDetail.component.html'
})

export class postDetail {
    postFromId : IPost[];
    constructor( private route : ActivatedRoute, private postsService : PostsService, private router : Router ) {

    }

    onBack() {
        this.router.navigate(['/posts']);
    }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.postsService.getPostfromId(Number(id)).
        subscribe(data => {
             this.postFromId = data 
            });
        
    }
}