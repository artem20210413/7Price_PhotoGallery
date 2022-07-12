import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {  Comments } from '../container-images/container-images.component';

@Component({
  selector: 'app-UploadAComponent',
  templateUrl: './UploadAComponent.component.html'
})


export class UploadAComponent implements OnInit {

  @Input() uploadacomments?: Comments;


  ngOnInit(): void {}

}
