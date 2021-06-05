import {outer,outerKeys} from "./closet/closetOuters.js";
alert(outerKeys[1]);

function showItemsInDict(itemDict,keyList,sectionId,itemClass){
  if (keyList.length == 0){
    var item = document.createElement('p');
    var text = document.createTextNode("NO ITEMS AVAILfu.");
    item.appendChild(text);
    item.className = "noItemMsg";
    var section = document.getElementById(sectionId);
    section.appendChild(item);
  }
  else{
    for(var i=0;i<keyList.length;i++){
      var product = itemDict[keyList[i]];
      var item = document.createElement('div');
      item.className = itemClass;
			item.id = keyList[i];
			var imgSection = document.createElement('div');
			imgSection.className = "imgSection";
			
			for(var j=0;j<product["imgList"].length;j++){
				var prodImg = document.createElement('img');
				prodImg.className = "prodImg";
				if(j==product["imgIndex"]){
					prodImg.classList.add("imgShow");
				}
      	prodImg.src = product["imgList"][j];
				imgSection.appendChild(prodImg);
			}
     
			if(product["imgList"].length > 1){
				var next = document.createElement('p');
				next.className="next";
				
				next.onclick = function(){
					var key = this.parentElement.parentElement.id;
					var images = this.parentElement.getElementsByClassName("prodImg");
					var product = itemDict[key];
					var imgList = product["imgList"];
					var imgIndex = product["imgIndex"];
					if(imgIndex == imgList.length-1){
						var newIndex = 0;
					} else{
						var newIndex = product["imgIndex"]+1;
					}
					for(var i=0;i<images.length;i++){
						if(i==imgIndex || i==newIndex){
							images[i].classList.toggle("imgShow");
						}
					}
					product["imgIndex"] = newIndex;
				};
				
				next.innerHTML = ">";
				var prev = document.createElement('p');
				prev.className="prev";
				
				prev.onclick = function(){
					var key = this.parentElement.parentElement.id;
					var images = this.parentElement.getElementsByClassName("prodImg");
					var product = outer[key];
					var imgList = product["imgList"];
					var imgIndex = product["imgIndex"];
					if(imgIndex == 0){
						var newIndex = imgList.length-1;
					} else{
						var newIndex = product["imgIndex"]-1;
					}
					for(var i=0;i<images.length;i++){
						if(i==imgIndex || i==newIndex){
							images[i].classList.toggle("imgShow");
						}
					}
					product["imgIndex"] = newIndex;	
				};
				
				prev.innerHTML = "<";
				imgSection.appendChild(next);
				imgSection.appendChild(prev);
			}
			var infoSection = document.createElement('div');
			infoSection.className = "infoSection";
      var prodBrand = document.createElement('p');
			prodBrand.className = "prodBrand";
      prodBrand.innerHTML = product["brand"];
			var prodName = document.createElement('p');
			prodName.className = "prodName";
      prodName.innerHTML = product["name"];
			var prodPrice = document.createElement('p');
			prodPrice.className = "prodPrice";
      prodPrice.innerHTML = product["price"];
			infoSection.appendChild(prodBrand);
			infoSection.appendChild(prodName);
			infoSection.appendChild(prodPrice);
			item.appendChild(imgSection);
			item.appendChild(infoSection);
      var section = document.getElementById(sectionId);
      section.appendChild(item);
    }
  }
}

function showAllItems(){
	showItemsInDict(outer,outerKeys,"outerSection","outer");
}

showAllItems();


