import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { IPost } from './posts';
import { ReturnStatement } from '@angular/compiler';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable(
)

export class PostsService {
    private postsUrl = "https://jsonplaceholder.typicode.com/posts";
    constructor(private http : HttpClient) {

     }

     getPosts() : Observable<IPost[]> {
         var posts = this.http.get<IPost[]>(this.postsUrl);
         return posts;
     }

     getPostfromId(posts_id : number) : Observable<IPost[]> { 
         let idParam = new HttpParams().set("id", posts_id.toString());
        var postfromId = this.http.get<IPost[]>(this.postsUrl, {params: idParam}).pipe(
            catchError(this.handleError)
        );
        return postfromId;
     }

     private handleError(err: HttpErrorResponse) {
         let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = "An error occured: ", err.error.message; 
        }
        else {
            errorMessage = "Server returned: ", err.status, "message is: ", err.message;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
     }

}