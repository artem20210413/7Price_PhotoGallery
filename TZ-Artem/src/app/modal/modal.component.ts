import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { imageObject } from '../app.component';
import { imageInform } from '../container-images/container-images.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  URLIMAGE = "https://boiling-refuge-66454.herokuapp.com/images/";
  responseImform!: any;
  imageinform!: imageInform;
  responseComment: any;


  constructor(private http: HttpClient) { }
  //@Input() Tital = "My mode;";
  @Input() idmod: number = 0;
  @Input() imageObjectmodal!: imageObject;

  searchCom(image: imageObject) {
    this.http.get(this.URLIMAGE + image.id)
      .subscribe((data) => {
        this.responseComment = data;
      });
    //this.imageinform = this.responseComment;
    console.log(this.responseComment.url);
  }



  postComment(image: imageObject, name: string, comment: string) {
    let header = new HttpHeaders()
    let body = "{\"name\": \"" + name + "\",\"comment\": \"" + comment + "\"}"
    console.log("id image: " + image.id);

    if (name == "" || comment == "")
      console.log("Fill in all the fields")
    else
      try {
        let result = this.http.post(this.URLIMAGE + image.id + "/comments", JSON.parse(body), { headers: header })
          .subscribe();
        console.log("Comment save");
      }
      catch (error) {
        console.log("Unknown error")
      }
  }

  ngOnInit(): void {
    
  }

}
