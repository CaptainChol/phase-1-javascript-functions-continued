function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I have to ${activity}.`;
  }
  
  function wrapAdjective(adjective = 'special', visualFlair = '*') {
    return `You are ${visualFlair}${adjective}${visualFlair}`;
  }
  
  const encouragingPromptFunction = wrapAdjective('!!!');
  
  console.log(saturdayFun()); // This Saturday, I want to roller-skate!
  console.log(saturdayFun('go to the park')); // This Saturday, I want to go to the park!
  console.log(mondayWork()); // This Monday, I have to go to the office.
  console.log(mondayWork('work from home')); // This Monday, I have to work from home.
  console.log(encouragingPromptFunction()); // You are !!!special!!!
  console.log(wrapAdjective('cool', '**')); // You are **cool**
  
