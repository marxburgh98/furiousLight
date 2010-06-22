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
		 button.onclick = function () { ShopCart.removeItem(item);};	
		 //formating
		 var clearBr = document.createElement('br');
		 clearBr.style.clear ='both';
		 itemDiv.appendChild(clearBr);
}


}

function getItemRow(searchThisArray, searchItem){
	var myPosition = -1;		
	for (var i = 0; i < searchThisArray.items.length; i++) {	
		if (searchThisArray.items[i].name == searchItem) {
			myPosition = i;
			break;
		}
	}
	return myPosition;
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
