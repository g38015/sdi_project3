// alert("JavaScript works!");
// Github https://github.com/g38015/sdi_project3
// Peter Hitchcock
// SDI 1304
// April 21, 2013
// Project 3

// Global Variables
var checkForSnow =true;
var skiDecision = "we need to check how many inches and see if the roads are clear to decide where we are going to ski today.";
var slopes = ["The Wall", " Sentinal Bowl", " Cornice"];


// Object Did it Snow (refactored from main variables, proceedure function and bool function)
var didItSnow = {

    snowInches: 10,
    slopes: [
            "The Wall", 
            " Sentinal Bowl", 
            " Cornice"
            ],
    snow: function (checkForSnow) { // Method: Procedure 
      if (checkForSnow === true)
      {
        console.log("Awesome! It Snowed, " + skiDecision);
      }
      else
      {
        console.log("Since it did not snow let's get ready to head to Sierra.");
      }

    },
    snowedRoadsClear: function(snowed, roadClear) { // Method: Function
      if (snowed === true || (snowed && roadClear === true))
      {
        console.log("Let's head to Kirkwood.");
      }
      else
      {
        console.log("Let's go to Sierra for the day.");
      }
      return roadClear;

    }
}

// Object howMuchDidItSnow (code refactored from number func, string func, and array func)
var howMuchDidItSnow = {
    howMuchSnow: function(snowToday) {
    for (var inches = 1; inches <= snowToday; inches = inches + 1) {
      if (inches < snowToday) {
        console.log("This is crazy! We now have " + inches + " inches of new snow to ski on.")
      } else {
        console.log("Cool! Time to pack up the car.")
      }
    }
    return snowToday;
  },

  getReady: function(grabBoots, grabSkis) {
    var skiEquipment = "I am ready to start skiing, putting on my " + grabBoots + " boots and my " + grabSkis + " skis, let's get it on!";
    return skiEquipment;    
  },

  skiRuns: function(numberOfRuns, slopeNames) {
    var runs = numberOfRuns;
    var addRun = slopeNames.push(" Lightning")
    while (runs > slopeNames.length ) {
      console.log("We have " + runs + " runs left");
      runs--; 
    }
    return slopeNames; 
  }


}


// Main Code
didItSnow.snow(true); //Method Procedure
var newSnow = howMuchDidItSnow.howMuchSnow(15); //Number Function
console.log("With " + newSnow + " inches of new snow,");
var areWeReady = didItSnow.snowedRoadsClear(true, true); //Method Function
console.log("It helped us make a decision knowing that it is " + areWeReady + " that the roads are clear.");
var readyToSki = howMuchDidItSnow.getReady("Salomon", "Rossignol"); //String Function
console.log(readyToSki);
var decideRuns = howMuchDidItSnow.skiRuns(8, slopes); //Array Function
console.log("Didn't quite finish our day. We added some extra runs including" + decideRuns[3] + " so we ended up missing " + decideRuns.length + " runs. Let's come back tomorrow:) and finish the remaining runs " + decideRuns + ".");

