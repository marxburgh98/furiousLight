/**
 * @author Mark Anthony
 */
function cartCreation(){
	var cartDiv = document.createElement('div');
	cartDiv.id = 'cart';
	document.body.appendChild(cartDiv);		

	var headingDiv = document.createElement('div');
	headingDiv.id = 'cartHeading';
	cartDiv.appendChild(headingDiv);
	
	var nameDiv = document.createElement('div');
	nameDiv.id ='cartItemNameHeading';
	var nameLabel = document.createTextNode('Item Name');
	nameDiv.appendChild(nameLabel);
	headingDiv.appendChild(nameDiv);

	var priceDiv = document.createElement('div');
	priceDiv.id ='cartPriceHeading';
	var priceLabel = document.createTextNode('Price');
	priceDiv.appendChild(priceLabel);	
	headingDiv.appendChild(priceDiv);

	var itemsDiv = document.createElement('div');
	itemsDiv.id = 'CartItems';
	cartDiv.appendChild(itemsDiv);	
	return cartDiv;	
				
}





function ShoppingCartView(containerNode,cartItem) {
	// Get item from shopping cart.

	this.containerNode = containerNode;
	this.cartItem = cartItem;

	// draw functions to display.
	this.drawItem = function(){

		var item = this.cartItem;
		//create my DOM nodes and add them to the container
		var itemDiv = document.createElement('div');
		itemDiv.className = 'cartItem';
		this.containerNode.appendChild(itemDiv);
		
		var nameDiv = document.createElement('div');
		nameDiv.className = 'cartItemName';
		nameDiv.text = item.name;
		nameDiv.appendChild(document.createTextNode(item.name));
		itemDiv.appendChild(nameDiv);
		
		var priceDiv = document.createElement('div');
		priceDiv.className = 'cartItemPrice';
		priceDiv.text = item.price;
		priceDiv.appendChild(document.createTextNode(item.price));
		itemDiv.appendChild(priceDiv);
		
		//remove Item button
		 var button = document.createElement("button");			
		 button.innerHTML = "Remove from Shopping Cart";
		 itemDiv.appendChild(button); 
		 button.onclick = function () { magicalStoreApp.ShopCart.removeItem(item);};	
		 console.log('button',button);
		 console.log('button.parentNode',button.parentNode);
		 //formating
		 var clearBr = document.createElement('br');
		 clearBr.style.clear ='both';
		 itemDiv.appendChild(clearBr);
	}

}


function drawFooter(containerNode,totalPrice){
	
	var headingDiv = document.createElement('div');
	headingDiv.id = 'cartFooter';
	containerNode.appendChild(headingDiv);
	
	var nameDiv = document.createElement('div');
	nameDiv.id ='TotalLabel';
	var nameLabel = document.createTextNode('Total');
	nameDiv.appendChild(nameLabel);
	headingDiv.appendChild(nameDiv);

	var priceDiv = document.createElement('div');
	priceDiv.id ='TotalPrice';
	priceDiv.appendChild(document.createTextNode(totalPrice));
	headingDiv.appendChild(priceDiv);
	
	
}


function ShopCartItemView (cart){
	var cartDiv = document.getElementById('cart');
	var cartItemsDiv = document.getElementById('CartItems');
	
	if (cartDiv) {
		removeItemsfromView(cartItemsDiv);
	}
	else {
		cartDiv = cartCreation();
		var cartItemsDiv = document.getElementById('CartItems');
		drawFooter(cartDiv,cart.totalCost);
	}
	var footerDiv = document.getElementById('cartFooter');
	if (cart.items) {		
		for (var i = 0, l = cart.items.length; i < l; i++) {
			var item = cart.items[i];
			var CartView = new ShoppingCartView(cartItemsDiv, item);
			CartView.drawItem();
		}
		cartDiv.removeChild(footerDiv);
	}
	drawFooter(cartDiv,cart.totalCost);

	if (cart.totalCost == 0) cartDiv.parentNode.removeChild(cartDiv);
	
}


/*
function ShopCartItemView (){
	var cartItemsDiv = document.getElementById('CartItems');
	var footerDiv = document.getElementById('cartFooter');
	var cartDiv = document.getElementById('cart');

	this.add = function (){
		if (this.totalCost == 0) cartCreation();
		if (this.totalCost == 0) drawFooter(cartDiv,this.totalCost);		
		var CartView = new ShoppingCartView(cartItemsDiv,item);
		CartView.drawItem();
	}
	
	this.remove = function()	{
		removeItemsfromView(cartItemsDiv);
		for (var i = 0, l = this.items.length; i < l; i++) {
			var item = this.items[i];
			var CartView = new ShoppingCartView(cartItemsDiv,item);
			CartView.drawItem();
		}	
	}
	
	if (this.totalCost > 0) cartDiv.removeChild(footerDiv);
	drawFooter(cartDiv,this.totalCost);
	if (this.totalCost == 0) cartDiv.parentNode.removeChild(cartDiv);
	
}*/
