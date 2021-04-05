function scuberGreetingForFeet(n){
  // 1 check the number if le4ss than 400 return ...
  if (n <= 400){
    return `This one is on me!`;
  }
  // 2 if request (argument) if above 2000 but less that 2500 return...
  else if (n >= 2000 && n < 2500){
    return `I will gladly take your thirty bucks.`;
  }
  else {
    return `No can do.`
  }
}

function ternaryCheckCity(s){
  // Write your code here!
  return (s === `NYC` ? `Ok, sounds good.` : `No go.`)
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case `generous`:
      return `Thank you so much.`;
      break;
    case `not as generous`:
      return `Thank you.`;
      break;
    case `thanks for everything`:
      return `Bye.`;
      break
  }
}