import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;  
  @Input() postContent: string;
  @Input() postLike: number;
  createDate = new Promise((resolve, reject) => {
    const date = new Date();
    
    setTimeout(
      () => {
        resolve(date);
        
      }, 2000
    );
  });
  constructor() { }

  ngOnInit(): void {
  }

}
