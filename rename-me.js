// alert("JavaScript works!");
// Github https://github.com/g38015/sdi_project3
// Peter Hitchcock
// SDI 1304
// April 21, 2013
// Project 3

// Global Variables
var skiDecision = "we need to check how many inches and see if the roads are clear to decide where we are going to ski today.";
var slopes = ["The Wall", " Sentinal Bowl", " Cornice"];
var skiObject = {
    
    DiamondPeak: "Awesome",
    lifts: 22,
    runs: 115

};

// JSON
var skierInfo = {
    "skiers":   [
      {
        "skierFirstName": "Peter",
        "skierLastName": "Hitchcock"
      },
      {
        "skierFirstName": "Ellie",
        "skierLastName": "Ruiz-Hitchcock"
      }
    ]
};


// Object Did it Snow (refactored from main variables, proceedure function and bool function)
var didItSnow = {

    ski: "and we can get to the slopes safely.",
    checkForSnow: true,
    snowInches: 10,
    yesterdaySnow: 12,
    slopes: [
            "The Wall", 
            " Sentinal Bowl", 
            " Cornice"
            ],
    objProperty: {
            s: "a",
            r: "b"
            },

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

    },

    lotsOfSnow: function(){ // Method: Accessor
      var totalSnow = this.snowInches + this.yesterdaySnow;
      return totalSnow;
    },

    makeSnow: function(moreSnow){ // Method: Mutator
      this.snowInches = moreSnow;
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
  },

  resorts: function(resortObject, resortJson) {
    var resort = resortObject;
    var resortj = resortJson;
    console.log(resort.runs, resortj.skiers);
    return resort;

  }

}


// Main Code
console.log(didItSnow.objProperty);
howMuchDidItSnow.resorts(skiObject, skierInfo); // Main Var Object passed through function
console.log(skierInfo.skiers[1].skierFirstName + " and " + skierInfo.skiers[0].skierFirstName + " Have decided to go skiing today. Let's check if it snowed."); //JSON
didItSnow.snow(true); //Method Procedure
var newSnow = howMuchDidItSnow.howMuchSnow(15); //Number
console.log("With " + newSnow + " inches of new snow,");
var areWeReady = didItSnow.snowedRoadsClear(true, true); //Method Function
console.log("The total snow for the past 2 days is " + didItSnow.lotsOfSnow() + " inches."); // Method Accessor
didItSnow.makeSnow(21); //Method Mutator
console.log("The new snow amount is " + didItSnow.lotsOfSnow() + " inches.");
console.log("It helped us make a decision knowing that it is " + areWeReady + " that the roads are clear " + didItSnow.ski);
var readyToSki = howMuchDidItSnow.getReady("Salomon", "Rossignol"); //String
console.log(readyToSki);
var decideRuns = howMuchDidItSnow.skiRuns(8, slopes); //Array
console.log("Didn't quite finish our day. We added some extra runs including" + decideRuns[3] + " so we ended up missing " + decideRuns.length + " runs. Let's come back tomorrow:) and finish the remaining runs " + decideRuns + ".");

