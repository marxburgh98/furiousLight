/**
 * @author Mark Anthony
 */


function buildDivId (containerNode,varDivId,varTextNode){
 	
	var varDiv = document.createElement('div');
	if (varDivId)	varDiv.id =varDivId;
	if (varTextNode) {
		var varLabel = document.createTextNode(varTextNode);
		varDiv.appendChild(varLabel);
	}
	containerNode.appendChild(varDiv);
	return varDiv;
	
 }

//Creates Cart HTML. Returns cartDiv
function cartCreation(){
	
	var cartDiv = buildDivId(document.body,'cart');
	var headingDiv = buildDivId(cartDiv,'cartHeading');
	var nameDiv = buildDivId(headingDiv,'cartItemNameHeading','Item Name');
	var priceDiv = buildDivId(headingDiv,'cartPriceHeading','Price');
	var itemsDiv = buildDivId(cartDiv,'CartItems');
	return cartDiv;	
				
}


//Inserts individual item into cart.
function ShoppingCartView(containerNode,cartItem) {
	// Get item from shopping cart.

	this.containerNode = containerNode;
	this.cartItem = cartItem;

	// draw functions to display.
	this.drawItem = function(){

		var item = this.cartItem;
		//create my DOM nodes and add them to the container
		itemDiv = buildDiv(this.containerNode,'cartItem');
		nameDiv = buildDiv(itemDiv,'cartItemName',item.name)
		priceDiv = buildDiv(itemDiv,'cartItemPrice',item.price)
		
		//remove Item button
		 var button = document.createElement("button");			
		 button.innerHTML = "Remove from Shopping Cart";
		 itemDiv.appendChild(button); 
		 button.onclick = function () { magicalStoreApp.ShopCart.removeItem(item,button);};	
		 //formating
		 var clearBr = document.createElement('br');
		 clearBr.style.clear ='both';
		 itemDiv.appendChild(clearBr);
	}

}


function drawFooter(containerNode,totalPrice,footerDiv){
	if (footerDiv) containerNode.removeChild(footerDiv);

	var footerDiv = buildDivId(containerNode,'cartFooter');
	var nameDiv = buildDivId(footerDiv,'TotalLabel','Total');
	var priceDiv = buildDivId(footerDiv,'TotalPrice',totalPrice)
}



/** Change Heights when certain amount of items bought */

function AddItemView (cart,item){
	var cartDiv = document.getElementById('cart');
	var cartItemsDiv = document.getElementById('CartItems');
	var footerDiv = document.getElementById('cartFooter');
	
	if (!cartDiv) {
		cartDiv = cartCreation();
		var cartItemsDiv = document.getElementById('CartItems');
	}
	var CartView = new ShoppingCartView(cartItemsDiv, item);
	CartView.drawItem();

	var makeFooter = new drawFooter(cartDiv,cart.totalCost,footerDiv);

}

function RemoveItemView (cart,button){
	var cartDiv = document.getElementById('cart');
	var cartItemsDiv = document.getElementById('CartItems');
	var footerDiv = document.getElementById('cartFooter');
	button.parentNode.parentNode.removeChild(button.parentNode);
	
	var makeFooter = new drawFooter(cartDiv,cart.totalCost,footerDiv);

	if (cart.totalCost == 0) cartDiv.parentNode.removeChild(cartDiv);
	
}

