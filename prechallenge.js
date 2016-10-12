
var cnum = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']
//console.log (replaceChar(cnum,"-",0))

for (j = 0; j < cnum.length; j++)
{
  replaceChar(cnum[j],"-",0)
  var random = replaceChar(cnum[j],"-",0)
  console.log(convert(random))
}

function replaceChar(cnum,value,repValue)
{

  var cardNum = ""
  for (i = 0; i < cnum.length; i++)
  {
    //cardNum = cardNum + num
    if (value === cnum[i])
    {
      cardNum = cardNum + repValue
    }
    else {
      {
        cardNum = cardNum + cnum[i]
      }
    }
  }
  return cardNum;
}


 function convert(cardNum)
 {
   var num = []
   for ( i = 0; i < cardNum.length; i++)
   {
     num.push(parseInt(cardNum[i]))
}
   return num;
 }
