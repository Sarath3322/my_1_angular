import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  images_1="";
  img_chge(aa:string){
    if(aa=="apple"){

 
    this.images_1="assets/aple.jpg";
  }
 else if(aa=="pinaple"){

 
    this.images_1="assets/pinaple.jpg";
  }
  else if(aa=="carrot"){

 
    this.images_1="assets/carrot.jpg";
  }
  else{
    
    this.images_1="assets/mango.jpg";
  }
  }
  data={
    name:"",
    age:0,
  };
  gg=true;
  num=0;
  res="-----------------";
  clear_1(){
    this.num=0
    this.res="-----------------";
  }

  result=0
  vals={
v1:0,
v2:0,
  };
 
  check(){
    if(this.num==0)
      {
            this.res="the number is zero"
    }
    else if(this.num%2==0)
      {
            this.res="the number is even"
    }
    else{
      this.res="the number is odd";
    }

  }
  adms(ii:string){
    if(ii=='addition'){
      this.result=Number(this.vals.v1)+Number(this.vals.v2);
    }
    else if(ii=='mul'){
      this.result=Number(this.vals.v1)*Number(this.vals.v2);
    
    }
   else if(ii=='sub'){
      this.result=Number(this.vals.v1)-Number(this.vals.v2);
    }
    else if(ii='div'){
      this.result=Number(this.vals.v1)/Number(this.vals.v2);
    }

  }
  mm(){
this.gg=false;
  }
  c=0;
  dd=true;
  vv=0;
  color='';
  opacity:Number=1;
  increaseOpacity():void{
    this.opacity=Number(this.opacity) + 0.1;
    if (Number(this.opacity) > 1) {
      this.opacity = 1; // Ensure opacity does not exceed 1
    }
  }
  decreseOpacity():void{
    this.opacity=Number(this.opacity)-0.1;
    if (Number(this.opacity) == 0.1) {
      this.opacity = 0.1; // Ensure opacity does not exceed 1
    }
  }
my_grade_result="--------";
  styles()
 {
  let hhh={
    'background-color':this.color,
    'opacity':this.opacity,

  }
  return hhh;

  }
  g_color="black";
  grade={
    sub:"",
    mark:0,
  }
  cdo=true;
  bvc=false;
  grade_find(){
    if(this.grade.mark<40){
      this.my_grade_result="Your failed in  "+this.grade.sub;
      this.g_color="red";
    }
    else if(this.grade.mark>40){
      this.my_grade_result="Your passed in  "+this.grade.sub;
      this.g_color="green";
    }
  }
  ngOnInit(): void {
  }

}
