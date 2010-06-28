/**
 * @author lorien234
 */

/*
 * 

Code to view items: goes into MagicalItemView->Class
	Draw: adds DOM NODES to catalogDIV
		uses Magicalitem obejct for data
		add a button.
			buttonClick adds item to shoppingCart

Global functions 
	builds DOM NODES
	Start a new Instant of ViewClass
		passing catalogDiv and Magicalitem OBJECT
		
	
 * 
 */

// Remove childnodes from parent node. 
function removeItemsfromView(containerNode){
	while (containerNode.childNodes[0]){
		containerNode.removeChild(containerNode.childNodes[0]);
	}
}

 //Ideas: buildHTML
 
 function buildDiv (containerNode,/*varDivId,*/varClassName,varTextNode){
 	
	var varDiv = document.createElement('div');
//	if (varDivId)	varDiv.id =varDivId;
	if (varClassName)	varDiv.className =varClassName;
	if (varTextNode) {
		var varLabel = document.createTextNode(varTextNode);
		varDiv.appendChild(varLabel);
	}
	containerNode.appendChild(varDiv);
	return varDiv;
	
 }
 
 
 
 
 
 


 // Builds Catalog based on select box type
function buildCatalog(containerNode,ctype){

	removeItemsfromView(containerNode);
	
	// Header
	if (ctype != 0) {
		var typeH3 = document.createElement('h3');
		typeH3.id = 'catalogType';
		var itemType = document.createTextNode(ctype);
		typeH3.appendChild(itemType);
		containerNode.appendChild(typeH3);
	}
	
	// Draw Items
	for (var i = 0, l = magicalStoreApp.characterItems[ctype].length; i < l; i++) {
		var item = magicalStoreApp.characterItems[ctype][i];
		var viewItem = new MagicalItemView(containerNode, item);
		viewItem.drawSingle();		
	}	
}






		
/**
 * Bulky  function that fits onload.
 * @param {Object} containerNode
 * @param {Object} itemModel
 */*/	
	
 function MagicalItemView(containerNode, itemModel) {
 
  
     //the containing node (div) to which this magical item view should be added
     this.containerNode = containerNode;
     this.magicalItem = itemModel;   
 
     this.drawSingle = function() {
     	var item = this.magicalItem;
		/**Is this an object? new or no new?*/
		var itemDiv = buildDiv(this.containerNode,'catalogItem');
		var nameDiv = buildDiv(itemDiv,'catalogItemName',item.name);
		var descriptionDiv = buildDiv(itemDiv,'catalogItemDescription',item.description);
		var priceDiv = buildDiv(itemDiv,'catalogItemPrice','Price: $'+item.price);

		//Button adds to Shopping Cart
		var button = document.createElement("button");			
		button.innerHTML = "Add 1 to Shopping Cart";
		itemDiv.appendChild(button); 
		button.onclick = function () {magicalStoreApp.ShopCart.addItem(item); };	 	 
     }


// On Load Function. Inserts Character DropDown. 
	this.DropDown = function(){

		var typeSelect = document.createElement('select');
		typeSelect.id ='typeSelect';
	
		// Null Value Intro
	    var typeOption = document.createElement('option');
		typeOption.value = '0';
		typeOption.appendChild(document.createTextNode('Select from the list..'));
		typeSelect.appendChild(typeOption);
	
		// Enter values based on character items array.
		for (var character in magicalStoreApp.characterItems) {
			if (character!='indexOf'){			//IE Bug Fix Part II
				var typeOption = document.createElement('option');
				typeOption.value = character;
				typeOption.appendChild(document.createTextNode(character));
				typeSelect.appendChild(typeOption);
			}

		}
		var me = this
		// Call buildCatalog on selectBox operation.
		typeSelect.onchange = function(){
			var chosenOption = this.options[this.selectedIndex];
			buildCatalog(me.containerNode,chosenOption.value);
		}
		
		// Insert into Document
		var headerDiv = document.createElement('div');
		headerDiv.id= 'header';
		this.containerNode.parentNode.insertBefore(headerDiv,this.containerNode);
		headerDiv.appendChild(typeSelect);

	
		
	}
	
 }
 

 

 
 
 
 
