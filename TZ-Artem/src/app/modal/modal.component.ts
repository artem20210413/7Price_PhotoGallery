import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { imageObject } from '../app.component';
import { imageInform, Comments } from '../container-images/container-images.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit {
  
  @Input() imageObjectmodal!: imageObject;
  @Input() imageinform!: imageInform;
  @Input() imageinform2!: imageInform;
  //@Input() idmod: number = 0;
  //@Input() responseComment: any;
  @Input() commentt: Comments | undefined;
  @Input() commen: Comments | undefined;

  URLIMAGE = "https://boiling-refuge-66454.herokuapp.com/images/";
  responseImform!: any;

  constructor(private http: HttpClient) { }
  //@Input() Tital = "My mode;";

    

  /*searchCom(image: imageObject) { //
    this.http.get(this.URLIMAGE + image.id)
      .subscribe((data) => {
        this.imageinform = data;
        console.log("-------------------------------------------");
        console.log("this.imageinform.url: " + this.imageinform.url);
        console.log("this.imageinform.id: " + this.imageinform.id);
        //this.comments = this.responseComment;
        for (var comment in this.imageinform.comments) {
          this.commentt =  this.imageinform.comments[Number(comment)]
          console.log("for comment.id: " + this.commentt.id);
          console.log("for comment.text: " + this.commentt.text);
          console.log("for comment.data: " + this.commentt.data);
        }
        
        //console.log("this.imageinform.comments: " + this.imageinform.comments);
        //console.log("this.imageinform: " + this.imageinform);
      });
  }*/

 


//send a comment
  postComment(image: imageInform, name: string, comment: string) {
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

//output information about received images to the console and initialize 'comment'
  SearchComment(imgobj: imageInform){
    console.log("-------------------------------------------");
        console.log("imgobj.url: " + imgobj.url);
        console.log("imgobj.id: " + imgobj.id);
        //this.comments = this.responseComment;
        for (var comment in imgobj.comments) {
          this.commentt =  imgobj.comments[Number(comment)]
          console.log("for comment.id: " + this.commentt.id);
          console.log("for comment.text: " + this.commentt.text);
          //console.log("for comment.data: " + this.commentt.data);
        }
  }
  ngOnInit(): void {
    this.SearchComment(this.imageinform2);
    //this.searchCom(this.imageObjectmodal);
  }

}
