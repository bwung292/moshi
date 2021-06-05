
function menuClick(bars){
  bars.classList.toggle("change");
	if(bars.classList.contains("change")){
		bars.parentElement.classList.toggle("navActive");
	}
  var menu = document.getElementById("menu");
  var menuItems = document.getElementsByClassName("menuItem");
  for(i=0;i<menuItems.length;i++){
    menuClickTimeout(menuItems,i);
  }
	if(!bars.classList.contains("change")){
		setTimeout(function(){
			bars.parentElement.classList.toggle("navActive");
		},800);
	}
  menu.classList.toggle("open");
}

function menuClickTimeout(menuItems,index){
  setTimeout(function(){
    var target = menuItems[index];
    if(!target.classList.contains("show") && !target.classList.contains("hide")){
      target.classList.add("show");
    }
    else{
      target.classList.toggle("show");
      target.classList.toggle("hide");
    }
  },100*index);
}
