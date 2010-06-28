function ShoppingCart() {
                
	this.items = new Array();
	this.totalCost = 0;
    var me = this;  
	          
	this.addItem = function(item ) {  // TODO: add ability to add more than one of an item
		//add the item to the array
		this.items.push(item);
		this.totalCost += item.price;
		//console.log('Addeditems ',this.items);			
		var addThisItem = new AddItemView(me,item);
	}
	
	this.removeItem = function (item,button) {
		this.items.splice(this.items.indexOf(item),1);
		this.totalCost -= item.price;	
		// Notice: Array is not row for row with DOM.	
		var removeThisItem =	new RemoveItemView(me,button);
	}
             
	this.getTotalCost = function() {
         return this.totalCost;
	}
	
}

/*IE Bug FIX.
 * Problem: All array will have attribute indexOf.  
 * Fix added to character type select array.
 * */
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}
/*
function findIndexes(array,element) {
	var foundItems = [];
	var index = array.indexOf(element)
	while (index != -1) {
	  foundItems.push(index);
	  index = array.indexOf(element, ++index);
	}
	return foundItems;

}
*/



