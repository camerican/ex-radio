document.addEventListener("DOMContentLoaded",function(){
  document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    // we can access the form data via
    // document.forms[0].elements["door"].value 
    //
    // in this case, "this" is refering to the form
    // we are storing our radio button within.
    console.log( this.elements["door"].value );
  });
});