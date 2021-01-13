import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  genericGet(key, params?, query?, headers?) {
    let url = `${this.serverUrl}/${key}`;

    if (params && query) {
      url += `?params=${JSON.stringify(params)}&query=${JSON.stringify(query)}`;
    } else if (params || query) {
      url += params ? `?params=${JSON.stringify(params)}` : `?query=${JSON.stringify(query)}`;
    };

    let options = { headers: {} };

    if (headers) {
      options.headers['additionals'] = JSON.stringify(headers);
    } else {
      options.headers['responseType'] = 'json';
    }

    return this.http.get(url, options).pipe(map(res => res));
  }

  genericPost(key, payload, params?, query?, headers?) {
    let url = `${this.serverUrl}/${key}`;

    if (params && query) {
      url += `?params=${JSON.stringify(params)}&query=${JSON.stringify(query)}`;
    }
    else if (params || query) {
      url += params ? `?params=${JSON.stringify(params)}` : `?query=${JSON.stringify(query)}`;
    }
    // tslint:disable-next-line: prefer-const
    let options = { headers: {} };
    if (headers) { options.headers['additionals'] = JSON.stringify(headers); }
    else {
      options.headers['responseType'] = 'json';
      return this.http.post(url, payload, options);
    }
  }

  updatePost(key, payload, params?, query?, headers?) {
    let url = `${this.serverUrl}/${key}`;

    if (params && query) {
      url += `?params=${JSON.stringify(params)}&query=${JSON.stringify(query)}`;
    }
    else if (params || query) {
      url += params ? `?params=${JSON.stringify(params)}` : `?query=${JSON.stringify(query)}`;
    }
    // tslint:disable-next-line: prefer-const
    let options = { headers: {} };
    if (headers) { options.headers['additionals'] = JSON.stringify(headers); }
    else {
      options.headers['responseType'] = 'json';
      return this.http.put(url, payload, options);
    }
  }

  deletePost(key, payload, params?, query?, headers?) {
    let url = `${this.serverUrl}/${key}`;

    if (params && query) {
      url += `?params=${JSON.stringify(params)}&query=${JSON.stringify(query)}`;
    }
    else if (params || query) {
      url += params ? `?params=${JSON.stringify(params)}` : `?query=${JSON.stringify(query)}`;
    }
    // tslint:disable-next-line: prefer-const
    let options = { headers: {} };
    if (headers) { options.headers['additionals'] = JSON.stringify(headers); }
    else {
      options.headers['responseType'] = 'json';
      return this.http.delete(url, payload);
    }
  }
}



    //   getPosts() {
    //     this.http.get<{ message: string; posts: any }>(this.backendUrl)
    //       .pipe(
    //         map(postData => {
    //           return postData.posts.map(post => {
    //             return {
    //               title: post.title,
    //               content: post.content,
    //               id: post._id,
    //             };
    //           });
    //         })
    //       )
    //       .subscribe(transformedPosts => {
    //         console.log(transformedPosts)
    //       },
    //         err => {
    //           console.log(err)
    //         });
    //   }

    //   getPost(id: string) {
    //     return this.http.get<{
    //       _id: string, title: string, content: string, imagePath: string,
    //       creator: string;
    //     }>(
    //       this.backendUrl + "/" + id
    //     );
    //   }

    // deletePost(postId: string) {
    //   this.http
    //     .delete(this.backendUrl + "/" + postId)
    //     .subscribe((data) => {
    //       this.router.navigate(["/"]);
    //     },
    //       e => {
    //         console.log(e)
    //       });
    // }
