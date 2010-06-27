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


function removeItemsfromView(containerNode){
	while (containerNode.childNodes[0]){
		containerNode.removeChild(containerNode.childNodes[0]);
	}
}

function insertDropDown(){
	var catalogDiv = document.getElementById('catalog');
	var headerDiv = document.createElement('div');
	headerDiv.id= 'header';
	catalogDiv.parentNode.insertBefore(headerDiv,catalogDiv);
	var selectBox = new selectView(headerDiv);
	
	
}

function selectView(containerNode){
	this.containerNode = containerNode;
	console.log('containerNode:',containerNode);
	console.log('this.containerNode:',this.containerNode);
	var typeSelect = document.createElement('select');
	typeSelect.id ='typeSelect';

    var typeOption = document.createElement('option');
	typeOption.value = '0';
	typeOption.appendChild(document.createTextNode('Select from the list..'));
	typeSelect.appendChild(typeOption);
//	for (var i = 0, l = characterTypes.length;i<l;i++) {
for (var character in characterItems) {

		var typeOption = document.createElement('option');
		typeOption.value = character;
		typeOption.appendChild(document.createTextNode(character));
		typeSelect.appendChild(typeOption);
	}

	this.containerNode.appendChild(typeSelect);


	document.getElementById('typeSelect').onchange = function(){
		var chosenOption = this.options[this.selectedIndex];
		buildCatalog(chosenOption.value);
		
		
	};

}



function MagicalTypeView(containerNode, type){
	//the containing node (div) to which this magical item view should be added
	this.containerNode = containerNode;

	var typeH3 = document.createElement('h3');
	typeH3.id = 'catalogType';
	this.containerNode.appendChild(typeH3);
	var itemType = document.createTextNode(type);
	typeH3.appendChild(itemType);

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
