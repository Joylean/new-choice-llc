import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.css']
})
export class ShareButtonsComponent implements OnInit {
  facebookbtn:any;
  whatsappbtn:any;
  twitterbtn:any;
  linkedinbtn:any;
  emailbtn:any;
  postUrl:String="";
  postTitle:String="";
  msg:String="";
  subject:String="";
  emailID:String="";
  emailIntro:String="";


  constructor(){}

  ngOnInit() {
    this.facebookbtn=document.querySelector(".facebook-btn");
    this.whatsappbtn=document.querySelector(".whatsapp-btn");
    this.twitterbtn=document.querySelector(".twitter-btn");
    this.linkedinbtn=document.querySelector(".linkedin-btn");
    this.emailbtn=document.querySelector(".email-btn");

    this.socialshare();
  }
  
  socialshare(){
    this.postUrl = encodeURI(document.location.href);
    // this.postUrl = encodeURI("https://angular.io/");
    this.subject=encodeURIComponent("Hey, Check this out!");
    this.emailIntro=encodeURIComponent("For more, check out the website:");
    this.postTitle = encodeURIComponent("Hi Everyone, Check this out: Get medical and surgical supplies delivered to your doorstep.");
    this.msg=encodeURIComponent("I found this website online for buying medical and surgical supplies. They have delivery option for the products all over UAE.")
    this.emailID =encodeURI("newchoicemedical80@gmail.com");
    // this.emailID =encodeURI("joyleanannakingston10@gmail.com");

    this.facebookbtn.setAttribute("href",`https://www.facebook.com//sharer/sharer.php?u=${this.postUrl}`);
    this.whatsappbtn.setAttribute("href",`https://api.whatsapp.com/send?text=${this.postTitle} + %0A${this.emailIntro} + ${this.postUrl} + ${this.msg}`);
    this.twitterbtn.setAttribute("href",`https://twitter.com/share?url=${this.postUrl}&text=${this.postTitle}%0A + ${this.emailIntro}%0A&hashtags=medicalsupplies,surgicalsupplies`);
    this.linkedinbtn.setAttribute("href",`https://www.linkedin.com/sharing/share-offsite/?url=${this.emailIntro} + ${this.postUrl}`);
    this.emailbtn.setAttribute("href",`mailto:?&subject= ${this.subject} &body=${this.msg}%20%0A%0A${this.emailIntro}%0A${this.postUrl}`);
  }
}
