import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {IBlog} from '../../model_interfaces/blog.interface';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: IBlog[] ;
  constructor(private blogService: BlogService) { }
  ngOnInit() {
    this.blogs = this.blogService.getAllBlogs();
  }
}
