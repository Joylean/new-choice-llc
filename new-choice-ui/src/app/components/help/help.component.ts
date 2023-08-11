import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  msg:String="";
  subj:String="";
  emailID:String="";
  subjectForOrder:String="";
  title:String="Email Us For Queries";
  ph:String="";
  bodyTitle:String="";

  admitForm!: FormGroup;

  @Input() titleData: any;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.admitForm= this.fb.group ({
      quote: ['',[Validators.required, Validators.minLength(10)]]
    });
    this.emailID =encodeURI("newchoicemedical80@gmail.com");
    this.subjectForOrder="Urgent Order";
    if(this.titleData){
      this.title=this.titleData;
      this.subjectForOrder="Order Items";
      this.ph="Enter your order details";
      this.bodyTitle="Body of Order";
    }else{
      this.subjectForOrder="Query";
      this.ph="Enter your queries here";
      this.bodyTitle="Body of Query";
    }
  }

  onSubmit(){
    // console.log(this.admitForm.value.quote)
    this.msg=encodeURIComponent(this.admitForm.value.quote);
    if(this.titleData){
      this.subj=encodeURIComponent("Order Items");
    }else{
      this.subj=encodeURIComponent("Query");
    }
    
    window.open(`mailto:${this.emailID}?&subject= ${this.subj} &body=${this.msg}%20`,"_blank",'noopener,noreferrer,resizable')

// \r = %0D (Ctrl+M = carriage return)
// \n = %0A (Ctrl+A = line feed)
  }
}
