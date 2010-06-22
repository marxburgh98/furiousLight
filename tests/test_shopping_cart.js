describe('ShoppingCart model', function () {

	var mgItems = [];  
	  
    beforeEach(function() {
        Cart = new ShoppingCart();
/*		
            var item1 = new MagicalItem();
            item1.name = 'Magic Wand';
            item1.price = 25;
            item1.description = 'Used to channel and amplify energy. Very useful in spell casting.';
            item1.hitPoints = 100;
            item1.mana = 100;
            item1.kilos = .2;
            mgItems.push(item1);
*/  
    });

    it('should have default values for members', function() {
        expect(Cart.totalCost).toEqual(0);
    });

    describe('Adding', function () {

 		beforeEach(function() {
	
		});
		
 		it('should receive fully defined items', function() {
			
		});
 
  		it('should have a value for its price ', function() {
			
		});
 
        

        
        describe('1 item', function () {

		    beforeEach(function() {
		        Cart = new ShoppingCart();
				
					
		            var item1 = new MagicalItem();
		            item1.name = 'Magic Wand';
		            item1.price = 25;
		            item1.description = 'Used to channel and amplify energy. Very useful in spell casting.';
		            item1.hitPoints = 100;
		            item1.mana = 100;
		            item1.kilos = .2;
		            mgItems.push(item1);
					
					var item2 = new MagicalItem();
		            item2.name = 'Funny Hat';
		            item2.price = 12;
		            item2.description = 'Funny hat provides an excellent disguise. You will not be recognized or remembered by anyone if you wear this hat!';
		            item2.hitPoints = 10;
		            item2.mana = 10;
		            item2.kilos = .3;
		            mgItems.push(item2);
					
		    });
  
			
			it('should cost 25 for the first item', function() {
				Cart.addItem(mgItems[0]);
        		expect(Cart.totalCost).toEqual(25);			
			});

			it('should cost 25 GTC for the first item', function() {
				Cart.addItem(mgItems[0]);
				console.log('getTotalCost: ', Cart.getTotalCost);
				console.log('TotalCost: ', Cart.TotalCost);
        		expect(Cart.getTotalCost()).toEqual(25);			
			});

			it('should cost 37 with the second item', function() {
 				Cart.addItem(mgItems[0]);
				Cart.addItem(mgItems[1]);
        		expect(Cart.totalCost).toEqual(37);       
			});
        });		       
        describe('More than 1 item', function () {
            

        });
		
		describe('More than 1 item from >0', function () {
        
        });
        
        
    });
});