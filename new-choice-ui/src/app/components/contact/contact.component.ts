import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  title:any = "Email Us to Order Items";
  constructor(private clipboard: Clipboard) {}

  ngOnInit() {
    
  }

  locationShow(){
    window.open("https://goo.gl/maps/oGBSL9Gzk1CYfUnU8", "_blank",'noopener,noreferrer,resizable');
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    alert("Copied " + textToCopy);
    // console.log("copied")
}

}
