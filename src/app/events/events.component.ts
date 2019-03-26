import { Component, OnInit } from '@angular/core';
import {ImageSrc} from '../img-obj';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  img: ImageSrc[] = [
    {url: '.../../assets/events/1.JPG' },
    {url: '../../assets/events/2.JPG'},
    {url: '../../assets/events/3.jpg' },
    {url: '../../assets/events/4.jpg'},
    {url: '../../assets/events/5.JPG' },
    {url: '../../assets/events/6.JPG'},
    {url: '../../assets/events/7.jpg' },
    {url: '../../assets/events/8.jpg'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
