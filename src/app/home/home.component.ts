import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  masonryItems = [
    { src: '../../assets/home/1.jpg' },
    { src: '../../assets/home/2.jpg' },
    { src: '../../assets/home/3.jpg' },
    { src: '../../assets/home/4.jpg' },
    { src: '../../assets/home/5.jpg' },
    { src: '../../assets/home/6.jpg' },
    { src: '../../assets/home/1.jpg' },
    { src: '../../assets/home/2.jpg' },
    { src: '../../assets/home/3.jpg' },
    { src: '../../assets/home/4.jpg' },
    { src: '../../assets/home/5.jpg' },
    { src: '../../assets/home/6.jpg' },
    { src: '../../assets/home/1.jpg' },
    { src: '../../assets/home/2.jpg' },
    { src: '../../assets/home/3.jpg' },
    { src: '../../assets/home/4.jpg' },
    { src: '../../assets/home/5.jpg' },
    { src: '../../assets/home/6.jpg' },
    { src: '../../assets/home/1.jpg' },
    { src: '../../assets/home/2.jpg' },
    { src: '../../assets/home/3.jpg' },
    { src: '../../assets/home/4.jpg' },
    { src: '../../assets/home/5.jpg' },
    { src: '../../assets/home/6.jpg' },


  ];
  constructor() { }

  ngOnInit() {
  }

}
