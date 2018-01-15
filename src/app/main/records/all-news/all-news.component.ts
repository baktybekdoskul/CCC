import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  posts: any[] = [{
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
    }]
  constructor() { }

  ngOnInit() {
  }
  like(postId: number) {
    this.posts[postId-1].rating++;
  }
  dislike(postId: number) {
    this.posts[postId-1].rating--;
  }
}
