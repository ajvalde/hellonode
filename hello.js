
// printBackwards("Brent")
// printForwards("Joey")
findChar("Some Stuff", "u")


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
