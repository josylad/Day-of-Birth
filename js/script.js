function day (cc,yy,mm,dd){
return ((((cc/4)-2*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)
}
function dayofbirth(form){
var cc = document.forms["myform"]["century"].value;
var yy = document.forms["myform"]["year"].value;
var mm = document.forms["myform"]["month"].value;
var dd = document.forms["myform"]["date"].value;
var gender= document.forms["myform"]["gender"].value;
var result=day(cc,yy,mm,dd).toFixed();
   // alert(result);
   var males=["Kwasi","kwadwo","Kwabena","Kwaku","Yaw", "Kofi", "Kwame"];
   var females=["Akosua","Adwoa","Abenaa","Akua", "Yaa", "Afua", "Ama"];
   if (gender=="male" && result== 0){
   alert("Your Akan Name is" + males[0]);
   }
   else if(gender == "male" && result==1){
   alert("Your Akan Name is " + males[1]);
   }
   else if(gender == "male" && result==2){
   alert("Your Akan Name is " + males[2]);
   }
   else if(gender == "male" && result==3){
   alert("Your Akan Name is " + males[3]);
   }
   else if(gender == "male" && result==4){
   alert("Your Akan Name is " + males[4]);
   }
   else if(gender == "male" && result==5){
   alert("Your Akan Name is" + males[5]);
   }
   else if(gender == "male" && result==6){
   alert("Your Akan Name is " + males[6]);
   }
   else if(gender == "female" && result==0){
   alert("Your Akan Name is " + females[0]);
   }
   else if(gender == "female" && result==1){
   alert("Your Akan Name is " + females[1]);
   }
   else if(gender == "female" && result==2){
   alert("Your Akan Name is " + females[2]);
   }
   else if(gender == "female" && result==3){
   alert("Your Akan Name is " + females[3]);
   }
   else if(gender == "female" && result==4){
   alert("Your Akan Name is " + females[4]);
   }
   else if(gender == "female" && result==5){
   alert("Your Akan Name is " + females[5]);
   }
   else if (gender == "female" && result==6){
   alert("Your Akan Name is " + females[6]);
   }
   else{
   alert("null");
   }
 }
