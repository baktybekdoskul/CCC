import {Injectable} from '@angular/core';
import {SYS_ORIGIN} from '../constants/constants';
import {SessionService} from './session.service';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../model_interfaces/IPost.interface';

@Injectable()
export class PostService {
  allPosts: IPost[] = [{
    imgurl: '',
    name: 'vasia',
    surname: 'pupkin',
    content: 'barcelone must win real madrid on 23rd december',
    date: new Date(2017, 12, 21, 16, 21),
    id: 1,
    rating: 2
  },
    {
      imgurl: '',
      name: 'vasia',
      surname: 'pupkin',
      content: 'barcelone must win real madrid on 23rd december',
      date: new Date(2017, 12, 21, 16, 21),
      id: 2,
      rating: 2
    },
    {
      imgurl: '',
      name: 'vasia',
      surname: 'pupkin',
      content: 'barcelone must win real madrid on 23rd december',
      date: new Date(2017, 12, 21, 16, 21),
      id: 3,
      rating: 2
    },
    {
      imgurl: '',
      name: 'vasia',
      surname: 'pupkin',
      content: 'barcelone must win real madrid on 23rd december',
      date: new Date(2017, 12, 21, 16, 21),
      id: 4,
      rating: 2
    }];

  popular: IPost[] = [{
    imgurl: '',
    name: 'vasia',
    surname: 'pupkin',
    content: 'barcelone must win real madrid on 23rd december',
    date: new Date(2017, 12, 21, 16, 21),
    id: 4,
    rating: 2
  },
    {
    imgurl: '',
    name: 'novas',
    surname: 'moron',
    content: 'some other content',
    date: new Date(2017, 12, 21, 16, 21),
    id: 3,
    rating: 5
  }];
  followed: IPost[] = [{
    imgurl: '',
    name: 'followed',
    surname: 'post',
    content: 'jingle or jungle',
    date: new Date(2017, 12, 21, 16, 21),
    id: 3,
    rating: 5
  }];
  private basePath: string = SYS_ORIGIN;
  createNewPost = this.basePath + '/post/create';
  getAllPostsPath = this.basePath + '/post';
  editPost = this.basePath + '/post/edit';
  deletePostPath = this.basePath + '/post/delete';
  likePostPath = this.basePath + '/post/like';
  constructor(private http: Http,
              private router: Router,
              private httpService: HttpClient
  ) {
  }


  public getAllPosts(): IPost[] {
    return this.allPosts;
  }
  public getPopular(): IPost[] {
    return this.popular;
  }

  public getFollowed(): IPost[] {
    return this.followed;
  }

  public createPost(content: string): void {
    console.log(content);
  }

  public deletePost(id: number): void {
    console.log('deleted ' + id);
  }

  public likePost(id: number): void {
    console.log('liked post ' + id);
  }
}
