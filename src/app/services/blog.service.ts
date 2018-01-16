import {Injectable, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {SYS_ORIGIN} from '../constants/constants';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {IBlog} from '../model_interfaces/blog.interface';

@Injectable()
export class BlogService {
  res: IBlog[] = [{
    content: 'barcelone must win real madrid on 23rd december',
    id: 1,
    title: 'some intersting post'
  },
    {
      content: 'we made some system updates',
      id: 2,
      title: 'some intersting post'
    }];
  private basePath = SYS_ORIGIN;
  private getAllBlogsPath = this.basePath + '/blogs';
  constructor(private http: Http,
              private httpClient: HttpClient) {
    }

    public getAllBlogs(): IBlog[] {
      return this.res;
    }
}
