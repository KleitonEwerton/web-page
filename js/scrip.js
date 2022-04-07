function openNav(){

    var x = document.getElementById("navagation");

    if(x.className === "navigation-bar"){
        x.className += " menujs"
        document.getElementById("icon").className = "fa-solid fa-xmark"

    }else{
        x.className = "navigation-bar"
        document.getElementById("icon").className = "fa-bars fa-solid"
        
    }


}