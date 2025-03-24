// code your solution here

function saturdayFun(string="roller-skate"){

    return `This Saturday, I want to ${string}!`
}
saturdayFun()

const mondayWork = function(string="go to the office"){

  return `This Monday, I will ${string}.`
}
mondayWork()

function wrapAdjective(flair = "*") {
    
  
    function createMessage(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  
    return createMessage;
  }
  

  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing"));  
  console.log(encouragingPromptFunction());  
  