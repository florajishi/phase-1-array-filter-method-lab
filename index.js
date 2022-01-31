//findMatching()
  // 1) returns all drivers that match the passed in name
  // 2) returns matching drivers if case does not match but letters do
  // 3) returns empty Array if no match
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

  function findMatching(drivers, names){
    return drivers.filter(nameMatch => nameMatch.toLowerCase() === names.toLowerCase())
  }
  console.log(findMatching(drivers, `bobby`)) // [`Bobby`,`bobby`]
  console.log(findMatching(drivers, `Susan`)) // [ ]
  
  //fuzzyMatch()
    // 1) returns a driver if beginning provided letters match
    // 2) does not return drivers if only middle or ending letters match
  function fuzzyMatch(drivers, names){
    return drivers.filter(fuzzyName => fuzzyName.toLowerCase().indexOf(names.toLowerCase()) === 0)
  }
  console.log(fuzzyMatch(drivers, `sa`)) // [`Sammy`,`Sally`,`Sarah`]
  console.log(fuzzyMatch(drivers, `mm`)) // [ ]
  
  //matchName() checks data structure for exact element
  function matchName(drivers, name) {
    let newDrivers = [...drivers]
    newDrivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ]
    return newDrivers.filter(match => match.name === name)
  }
  console.log(matchName(drivers, `Bobby`))