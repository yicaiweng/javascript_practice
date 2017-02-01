
  function myClick(){
    var firstname = document.getElementById("firstname").value
    alert("Hello, " + firstname);
    window.location = "formpage.html";
  }
  function myPost(){
    var title = document.getElementById("title").value;
    var postBody = document.getElementById("postBody").value;
    var confirmInfo = confirm("Do you want to view your post?");

    if(confirmInfo == true){
      document.write(title + "\n" + postBody);
    } else{
      alert("going back to form page");
      window.location = "formpage.html";
    }
}
