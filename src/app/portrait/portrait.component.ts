import { Component, OnInit } from '@angular/core';
import {ImageSrc} from '../img-obj';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit {
img: ImageSrc[] = [
  {url: '../../assets/portraits/1.jpg' },
  {url: '../../assets/portraits/2.jpg'},
  {url: '../../assets/portraits/3.jpg' },
  {url: '../../assets/portraits/4.jpg'},
  {url: '../../assets/portraits/5.jpg' },
  {url: '../../assets/portraits/6.jpg'},
  {url: '../../assets/portraits/9.jpg'},
  {url: '../../assets/portraits/8.jpg'},
  {url: '../../assets/portraits/16.JPG'},
  {url: '../../assets/portraits/10.jpg'},
  {url: '../../assets/portraits/11.jpg' },
  {url: '../../assets/portraits/22.JPG'},
  {url: '../../assets/portraits/7.jpg' },
  {url: '../../assets/portraits/20.JPG'},
  {url: '../../assets/portraits/14.jpg' },
  {url: '../../assets/portraits/24.JPG'},
  {url: '../../assets/portraits/17.JPG'},
  {url: '../../assets/portraits/18.JPG'},
  {url: '../../assets/portraits/19.jpg'},
  {url: '../../assets/portraits/15.JPG'},
  {url: '../../assets/portraits/21.jpg'},
  {url: '../../assets/portraits/23.JPG'},
  {url: '../../assets/portraits/12.jpg'},
  {url: '../../assets/portraits/13.JPG'},
  {url: '../../assets/portraits/24.JPG'},
 /* <!--
  <img src="../../assets/portraits/4.png" alt="">
        <img src="../../assets/portraits/1.png" alt="">
        <img src="../../assets/portraits/5.png" alt="">
        <img src="../../assets/portraits/1.jpeg" alt="">
        <img src="../../assets/portraits/2.jpeg" alt="">
        <img src="../../assets/portraits/3.JPEG" alt="">
        <img src="../../assets/portraits/4.JPEG" alt="">
        <img src="../../assets/portraits/5.JPEG" alt="">
-->*/
  ];
  constructor() { }

  ngOnInit() {
  }

}
