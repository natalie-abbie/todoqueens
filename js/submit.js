

function submitcomment() {
    debugger
    
var strText = document.getElementById("full_name").value;
var strText1 = document.getElementById("review").value;     
document.getElementById("p1").innerHTML = strText;
document.getElementById("p2").innerHTML = strText1;
document.getElementById("review-form").reset();
alert("Thank you!, you review was submitted");

}


   

//         // validation .
// function validation(){
//     var full_name = document.getElementById("full_name").value;
//     var review = document.getElementById("review").value;
//     if( full_name ==='' || review ===''){
//     alert("Please fill all fields...!!!!!!");
//     return false;
//     }else{
//     return true;
//     }
// }
    
