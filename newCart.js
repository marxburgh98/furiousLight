/**
 * @author markH
 */
var magicalStoreApp = {
    characterItems: [],
    ShopCart: new ShoppingCart()
}


window.onload = function(){
    initStuff();
}

function starter(allItems){
 	var items = allItems;
    magicalStoreApp.characterItems['wizard'] = [items[0], items[1]];
    magicalStoreApp.characterItems['dwarf'] = [items[0]];
    magicalStoreApp.characterItems['hobbit'] = [items[2]];
    magicalStoreApp.characterItems['dracula'] = [items[0], items[1], items[2]];
    var catalogDiv = document.getElementById('catalog');
    
    var containerNode = catalogDiv;
    
    for (var i = 0, l = items.length; i < l; i++) {
        var item = items[i];
        var viewItem = new MagicalItemView(containerNode, item);
        viewItem.draw();
    }
    viewItem.DropDown();
    
}




function MagicalItemView(containerNode, itemModel){
    //the containing node (div) to which this magical item view should be added
    this.containerNode = containerNode;
    this.magicalItem = itemModel;
    this.inCart = false;
}

MagicalItemView.prototype = {
    draw: function(){
        var me = this;
        var item = this.magicalItem;
        /**Is this an object? new or no new?*/
        var itemDiv = this.buildDiv(this.containerNode, 'catalogItem');
        var nameDiv = this.buildDiv(itemDiv, 'catalogItemName', item.name);
        var descriptionDiv = this.buildDiv(itemDiv, 'catalogItemDescription', item.description);
        var priceDiv = this.buildDiv(itemDiv, 'catalogItemPrice', 'Price: $' + item.price);

        //Button adds to Shopping Cart
        var button = document.createElement("button");         
        if (this.inCart) {
			// Cart Item Views Button Functionality
        	button.innerHTML = "Remove from Shopping Cart";
			button.onclick = function() {
				magicalStoreApp.ShopCart.removeItem(item);
				if (magicalStoreApp.ShopCart.totalCost==0) {
					itemDiv.parentNode.parentNode.parentNode.removeChild(itemDiv.parentNode.parentNode);
				}
				else {
					itemDiv.parentNode.removeChild(itemDiv);
	                var footerDiv = document.getElementById('cartFooter');				
	                me.drawFooter(footerDiv, magicalStoreApp.ShopCart.totalCost);

					
										
				}
			}
        }
        else {
			// Store Views Button Functionality
            button.innerHTML = "Add 1 to Shopping Cart";
            button.onclick = function(){   
	   			magicalStoreApp.ShopCart.addItem(item);
				var cartDiv = document.getElementById('cart');
                if (!cartDiv) {	cartDiv = me.cartCreation();}
				else {	}
				var cartItemsDiv = document.getElementById('CartItems');
                var cartViewItem = new MagicalItemView(cartItemsDiv, item);
				cartViewItem.inCart= true;
                cartViewItem.draw();
				
                var footerDiv = document.getElementById('cartFooter');				
                me.drawFooter(footerDiv, magicalStoreApp.ShopCart.totalCost);

            };
        }
        itemDiv.appendChild(button);
        
    },
    buildDiv: function(containerNode, varClassName, varTextNode){
        var varDiv = document.createElement('div');
        if (varClassName) 
            varDiv.className = varClassName;
        if (varTextNode) {
            var varLabel = document.createTextNode(varTextNode);
            varDiv.appendChild(varLabel);
        }
        containerNode.appendChild(varDiv);
        return varDiv;
    },
    buildDivId: function(containerNode, varDivId, varTextNode){
    
        var varDiv = document.createElement('div');
        if (varDivId) 
            varDiv.id = varDivId;
        if (varTextNode) {
            var varLabel = document.createTextNode(varTextNode);
            varDiv.appendChild(varLabel);
        }
        containerNode.appendChild(varDiv);
        return varDiv;
    },
    
    removeItemsfromView: function(containerNode){
        while (containerNode.childNodes[0]) {
            containerNode.removeChild(containerNode.childNodes[0]);
        }
    },
    DropDown: function(){
    
        var typeSelect = document.createElement('select');
        typeSelect.id = 'typeSelect';
        
        // Null Value Intro
        var typeOption = document.createElement('option');
        typeOption.value = 0;
        typeOption.appendChild(document.createTextNode('Select from the list..'));
        typeSelect.appendChild(typeOption);
        
        // Enter values based on character items array.
        for (var character in magicalStoreApp.characterItems) {
            if (character != 'indexOf') { //IE Bug Fix Part II
                var typeOption = document.createElement('option');
                typeOption.value = character;
                typeOption.appendChild(document.createTextNode(character));
                typeSelect.appendChild(typeOption);
            }
            
        }
        var me = this;
        typeSelect.onchange = function(){
            var chosenOption = typeSelect.options[typeSelect.selectedIndex];
            me.removeItemsfromView(me.containerNode);
            var characterItems = magicalStoreApp.characterItems[chosenOption.value];
            if (characterItems) {
                for (var i = 0, l = characterItems.length; i < l; i++) {
                    var item = characterItems[i];
                    var viewItem = new MagicalItemView(me.containerNode, item);
                    viewItem.draw();
                }
            }
            
        }
        
        // Insert into Document
        var headerDiv = document.createElement('div');
        headerDiv.id = 'header';
        this.containerNode.parentNode.insertBefore(headerDiv, this.containerNode);
        headerDiv.appendChild(typeSelect);
        
    },
    //Creates Cart HTML. Returns cartDiv
    cartCreation: function(){
        var cartDiv = this.buildDivId(document.body, 'cart');
        var itemsDiv = this.buildDivId(cartDiv, 'CartItems');
        var footerDiv = this.buildDivId(cartDiv, 'cartFooter');
        return cartDiv;
        
    },
    // updates Cart footer. 
    drawFooter: function(footerDiv, totalPrice){
        var containerNode = footerDiv.parentNode;
        containerNode.removeChild(footerDiv);
        var footerDiv = this.buildDivId(containerNode, 'cartFooter');
        var nameDiv = this.buildDivId(footerDiv, 'TotalLabel', 'Total');
        var priceDiv = this.buildDivId(footerDiv, 'TotalPrice', totalPrice)
    }
    
    
}
