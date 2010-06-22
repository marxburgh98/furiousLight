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

function selectItemsByType(catalog,type) {
	var queryResult = [];

	for (var i = 0, l = catalog.length; i < l; i++) {

		if (catalog[i].type==type) queryResult.push(catalog[i]);
	}
	return queryResult;
			
}


function removeItemsfromView(containerNode){
	while (containerNode.childNodes[0]){
		containerNode.removeChild(containerNode.childNodes[0]);
	}
}

function MagicalTypeView(containerNode, type){
	//the containing node (div) to which this magical item view should be added
	this.containerNode = containerNode;

 //             document.getElementById('colorSelect').onchange = function() {
  //            var chosenOption = this.options[this.selectedIndex];            
//				var colorDiv = document.getElementById('colorDiv');
	//			colorDiv.style.backgroundColor = chosenOption.value;        


	var typeH3 = document.createElement('h3');
	typeH3.id = 'catalogType';
	this.containerNode.appendChild(typeH3);
	var itemType = document.createTextNode(type);
	typeH3.appendChild(itemType);

	var typeSelect = document.createElement('select');
	typeSelect.id ='typeSelect';


	for (var i = 0, l = characterTypes.length;i<l;i++) {
		var typeOption = document.createElement('option');
		typeOption.value = characterTypes[i];
		typeOption.appendChild(document.createTextNode(characterTypes[i]));
		typeSelect.appendChild(typeOption);
	}

	this.containerNode.appendChild(typeSelect);









	

	
	var linkType = document.createElement('a');
	linkType.onclick = function(){
		buildCatalog('wizard');
	};
	var linkTextNode = document.createTextNode('wizard');
	linkType.href='javascript://';
	linkType.appendChild(linkTextNode);
	this.containerNode.appendChild(linkType);
	
	var spacerNode = document.createTextNode('  ');
	this.containerNode.appendChild(spacerNode);
	
	var linkType2 = document.createElement('a');
	linkType2.onclick = function(){
		buildCatalog('dwarf');
	};
	var linkTextNode2 = document.createTextNode('dwarf');
	linkType2.href='javascript://';
	linkType2.appendChild(linkTextNode2);
	this.containerNode.appendChild(linkType2);
	
	

	this.containerNode.appendChild(spacerNode);
	
	var linkType3 = document.createElement('a');
	linkType3.onclick = function(){
		buildCatalog('hobbit');
	};
	var linkTextNode3 = document.createTextNode('hobbit');
	linkType3.href='javascript://';
	linkType3.appendChild(linkTextNode3);
	this.containerNode.appendChild(linkType3);
}
		
	
	
	


 function MagicalItemView(containerNode, itemModel) {
 
  
     //the containing node (div) to which this magical item view should be added
     this.containerNode = containerNode;
     this.magicalItem = itemModel;   
              	 
     this.draw = function() {
         var item = this.magicalItem;

         //create my DOM nodes and add them to the container
         var itemDiv = document.createElement('div');
		 itemDiv.className = 'catalogItem';
 		 this.containerNode.appendChild(itemDiv);
	       
         var nameDiv = document.createElement('div');
         nameDiv.className = 'catalogItemName';
         nameDiv.innerHTML = item.name;
         itemDiv.appendChild(nameDiv);
               
         var descriptionDiv = document.createElement('div');
         descriptionDiv.className = 'catalogItemDescription';
         descriptionDiv.innerHTML = item.description;
         itemDiv.appendChild(descriptionDiv);
                    
         var priceDiv = document.createElement('div');
         priceDiv.className = 'catalogItemPrice';
         itemDiv.appendChild(priceDiv);
         var priceLabel = document.createTextNode("Price: $");
         priceDiv.appendChild(priceLabel);
         var priceValue = document.createTextNode(item.price);
         priceDiv.appendChild(priceValue);

		//Button adds to Shopping Cart
		 var button = document.createElement("button");			
		 button.innerHTML = "Add 1 to Shopping Cart";


		 itemDiv.appendChild(button); 
		 button.onclick = function () {ShopCart.addItem(item);};	 	 
     }


	
 }
