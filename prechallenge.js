var teststring = ["2-2","3-3","4-4"]
var cnum = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']
console.log(maxNum(cnum))


function replaceChar(cnum,value,repValue)
{
  var cardNum = ""
  for (i = 0; i < cnum.length; i++)
  {
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

 function addNum(cardNum)
 {
   var sums = []
   for (i = 0,sums = 0; i < cardNum.length; sums += cardNum[i++])
   {

   }
   return sums;
 }

 function maxNum(numbers)
 {
   var maxValue = numbers[0]


   for (j = 0; j < numbers.length; j++)
   {
      if (cardProcess(numbers[j]) >= cardProcess(maxValue))
      {
        maxValue = numbers[j]

     }
   }

   return maxValue;
 }

 function cardProcess (cardnumber)
 {

      var random = replaceChar(cardnumber,"-",0)
      var nums = convert(random)
      var sums = addNum(nums)

      return sums;
  }
