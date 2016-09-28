
// printBackwards("Brent")
// printForwards("Joey")
//findChar("Some Stuff", "u")
  //console.log(reverse("More stuff"))
  //console.log(repeatString("hi", 5))
//console.log(repeatString("hi",5))

//console.log(head("House",3))

console.log(tail("Chair", 4))

function tail(leString, leNumber)
{
  var leWant = ""

  for (var i = leString.length - 1; i > leString.length - 1 - leNumber; i--)
  {
    leWant = leWant + leString[i]
  }
  leWant =reverse(leWant)
  return leWant;
}







function head(string, number)
{
  var theWant= ""
  for (var i = 0; i <= number - 1; i++)
  {
    theWant = theWant + string[i]
  }
  return theWant;
}




function repeatString(strings, theNumber)
{
  var strangs = ""
  for (var i = 0; i <= theNumber; i++)
  {
    strangs = strangs + strings
    //console.log(i,strings,strangs)
  }
  return strangs;
}



function reverse (Stuff)
{
  var slab = ""
  for (var i = Stuff.length - 1; i >= 0; i--)
  {
    //console.log(slab + Salls[i])
    slab = slab + Stuff[i]
    //console.log(slab)
  }
  return slab;
}


function findChar (input, character)
{
    for (var  i = 0; i < input.length; i++)
    {
      //console.log(i, input, character)
      if (character === input[i])
      {
        console.log(i,"Found")
      }
      else
      {
        console.log("Not Found")
      }
    }
}

function printBackwards (myName)
{

  for (var i= myName.length - 1; i >= 0; i--)
  {
    console.log(myName[i]);
  }

}

function printForwards (myName)
{

  for (var i= 0; i < myName.length; i++)
  {
    console.log(myName[i]);
  }

}
