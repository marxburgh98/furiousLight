
function ShoppingCart() {
                
	this.items = new Array();
	this.totalCost = 0;
    var me = this;            
	this.addItem = function(item ) {  // TODO: add ability to add more than one of an item
	//add the item to the array
	this.items.push(item);
	this.totalCost += item.price;

 //console.log('Addeditems ',this.items);	
 		
	var booly = new ShopCartItemView(me);
	}
	this.removeItem = function (item) {
		// Problem: getItem Row will break any time.  We want it to only match.

		this.items.splice(this.items.indexOf(item),1);
		this.totalCost -= item.price;		
	var booly =	new ShopCartItemView(me);
	}
             
	this.getTotalCost = function() {
         return this.totalCost;
	}
	
}

function findIndexes(array,element) {
	var foundItems = [];
	var index = array.indexOf(element)
	while (index != -1) {
	  foundItems.push(index);
	  index = array.indexOf(element, ++index);
	}
	return foundItems;

}




