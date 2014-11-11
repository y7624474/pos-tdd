describe('pos', function () {
	
    
	it('input only one item ', function () 
	{
		var inputs = [
            'ITEM000001',           
        ];
        spyOn(console, 'log');
        printInventory(inputs);       
        var expectText =
            '***<没钱赚商店>购物清单***\n' +   
            '名称：雪碧，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n' +           
            '----------------------\n' +
            '总计：3.00(元)\n' +           
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText);
	});
	
	it('input multiple items ', function () 
	{
		var inputs = [
            'ITEM000002',  
			'ITEM000002',	
			'ITEM000002',
        ];
        spyOn(console, 'log');
        printInventory(inputs);       
        var expectText =
            '***<没钱赚商店>购物清单***\n' +   
            '名称：苹果，数量：3斤，单价：5.50(元)，小计：16.50(元)\n' +           
            '----------------------\n' +
            '总计：16.50(元)\n' +           
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText);
	});
	
	it('input multiple items and special characters', function () 
	{
		var inputs = [
            'ITEM000002',  
			'ITEM000002',	
			'ITEM000003-4',
        ];
        spyOn(console, 'log');
        printInventory(inputs);       
        var expectText =
            '***<没钱赚商店>购物清单***\n' +   
            '名称：苹果，数量：2斤，单价：5.50(元)，小计：11.00(元)\n' + 
			'名称：荔枝，数量：4斤，单价：15.00(元)，小计：60.00(元)\n' +			
            '----------------------\n' +
            '总计：71.00(元)\n' +           
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText);
	});
	
	it('input multiple items include free item', function () 
	{
		var inputs = [
            'ITEM000002',  
			'ITEM000002',	
			'ITEM000003-4',
			'ITEM000005-5',
            
        ];
        spyOn(console, 'log');
        printInventory(inputs);       
        var expectText =
            '***<没钱赚商店>购物清单***\n' +   
            '名称：苹果，数量：2斤，单价：5.50(元)，小计：11.00(元)\n' + 
			'名称：荔枝，数量：4斤，单价：15.00(元)，小计：60.00(元)\n' +	
			'名称：方便面，数量：5袋，单价：4.50(元)，小计：18.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +           
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：89.00(元)\n' +
            '节省：4.50(元)\n' +
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText);
	});
	
    it('final result: print correct text', function () 
	{
		var inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
        spyOn(console, 'log');
        printInventory(inputs);       
        var expectText =
            '***<没钱赚商店>购物清单***\n' +   
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
