alert("got it");
var outer = {
	supremeJacket : {
		imgList:["https://img.stadiumgoods.com/supreme-reversible-ma-1-jacket-undercover_14377920_27545781_2048.jpg","https://img.stadiumgoods.com/supreme-reversible-ma-1-jacket-undercover_14377920_27545783_2048.jpg"],
		imgIndex:0,
		brand:"SUPREME x UNDERCOVER",
		name:"Reversible MA-1 Jacket (Black+Pink)",
		price:"$638.00"
	},
	stuCoat : {
		imgList:["http://m.stuoffice.com/web/product/big/202010/1073c9c577030c0b986589fdbbb09b9e.jpg","http://m.stuoffice.com/web/product/extra/big/202010/78faaab5ec3b0cf8593287ea029cd5d1.jpg","http://m.stuoffice.com/web/product/extra/big/202010/99fdd6d3b50fa6d13b54322446cd0e9d.jpg","http://m.stuoffice.com/web/product/extra/big/202010/d23046fea79178548d817a27e1b1514a.jpg"],
		imgIndex:2,
		brand:"STU",
		name:"Check Duffle Coat (Melange Grey)",
		price:"$402.00"
	},
	bapeFlannel : {
		imgList:["https://images.stockx.com/products/streetwear/Bape-Shark-Flannel-Check-Shirt-FW18-Black.jpg?fit=clip&bg=FFFFFF&auto=compress&q=90&dpr=2&trim=color&updated_at=1603481985&fm=webp&ixlib=react-9.1.1&w=2257","https://images.stockx.com/products/streetwear/Bape-Shark-Flannel-Check-Shirt-FW18-Black-2.jpg?fit=clip&bg=FFFFFF&auto=compress&q=90&dpr=2&trim=color&updated_at=1603481985&fm=webp&ixlib=react-9.1.1&w=2257"],
		imgIndex:1,
		brand:BAPE,
		name:"Shark Flannel Check Shirt (Black)",
		price:"$384.25"
	}
};

alert("ok");

var outerKeys = Object.keys(outer);
	 
alert("exporting");
export {outer,outerKeys};


