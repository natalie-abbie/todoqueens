// validation .
function validation(){
    var full_name = document.getElementById("full_name").value;
    var review = document.getElementById("review").value;
    if( full_name ==='' || review ===''){
    alert("Please fill all fields...!!!!!!");
    return false;
    }else{
    return true;
    }
    }
        
        function submitcomment() {
            debugger
            // var x = document.getElementsByTagName("form");
            // x[0].submit();// Form submission
            // alert("Form Submitted Successfully......");
            var strText = document.getElementById("full_name").value;
            var strText1 = document.getElementById("review").value;        
            document.getElementById("p1").innerHTML = strText;
            document.getElementById("p2").innerHTML = strText1;
            document.getElementById("review-form").reset();
            

        }
   

      




