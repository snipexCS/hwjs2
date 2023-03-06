 let one=+prompt("first number")
 let two=+prompt("second number")
 let three=+prompt("third number")

 if(one>two && one<three|| one>three&& one<two){
    alert(one);
 }else if(two>one&& two<three || two>three&& two<one){
    alert(two)
 }else if(three>one&& three<two|| three>two&& three<one){
    alert(three);
 }