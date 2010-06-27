
function ShoppingCart() {
                
	this.items = new Array();
	this.totalCost = 0;
    var me = this;            
	this.addItem = function(item ) {
		if (this.totalCost == 0) cartCreation();
		var cartDiv = document.getElementById('cart');
		if (this.totalCost == 0) drawFooter(cartDiv,this.totalCost);		
//TODO: add ability to add more than one of an item
		//add the item to the array
		this.items.push(item);
		this.totalCost += item.price;
	


		var cartItemsDiv = document.getElementById('CartItems');
		var CartView = new ShoppingCartView(cartItemsDiv,item);
		CartView.drawItem();
		if (this.totalCost > 0) {
			var footerDiv = document.getElementById('cartFooter');
			cartDiv.removeChild(footerDiv);
		}
			drawFooter(cartDiv,this.totalCost);
			console.log('Addeditems ',ShopCart.items);		
		
	}
	this.removeItem = function (item) {
// Problem: getItem Row will break any time.  We want it to only match.

		var cartItemsDiv = document.getElementById('CartItems');
		removeItemsfromView(cartItemsDiv);

		
	this.totalCost -= item.price;


		var j = getItemRow(ShopCart,item.name);
	
		ShopCart.items.splice(j,1);
		

		
			for (var i = 0, l = ShopCart.items.length; i < l; i++) {
		var item = ShopCart.items[i];
		var CartView = new ShoppingCartView(cartItemsDiv,item);
		CartView.drawItem();

				}	
		var cartDiv = document.getElementById('cart');
	
			var footerDiv = document.getElementById('cartFooter');
			cartDiv.removeChild(footerDiv);
		
			drawFooter(cartDiv,this.totalCost);

		
		if (this.totalCost == 0) {
						cartDiv.parentNode.removeChild(cartDiv);
		}
		
		
		
		
		
		
	}
             
	this.getTotalCost = function() {
         return this.totalCost;
	}
}








