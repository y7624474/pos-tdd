var str= '***<没钱赚商店>购物清单***\n',freestr='';
var total=0,save=0;	
function FreeStrHandle(freeitemcount)
{	
	if(IfPromotion(item[freeitemcount].barcode,buycount))
	{	
		freecount++;
		freestr+='名称：'+item[freeitemcount].name+'，数量：'+freecount+item[freeitemcount].unit+'\n';
		save+=parseFloat(item[freeitemcount].price);
	}
}

function TotalStrHandle(totalitemcount)
{
	if(0!=buycount)
	{
		str+='名称：'+item[totalitemcount].name+
		'，数量：'+buycount+item[totalitemcount].unit+
		'，单价：'+item[totalitemcount].price.toFixed([2]) +'(元)，小计：'+
		(item[totalitemcount].price*(buycount-freecount)).toFixed([2])+'(元)\n';			
		total+=parseFloat(item[totalitemcount].price*(buycount-freecount));									
	}	
}



function ConsoleStr()
{	
	str+='----------------------\n';
	if(''!=freestr)
	{
		str+='挥泪赠送商品：\n'+freestr+'----------------------\n';
	}
	str+='总计：'+total.toFixed([2])+'(元)\n';
	if(0!=save)
	{
		str+='节省：'+save.toFixed([2])+'(元)\n';		
	}	
	str+='**********************'
	console.log(str);
}