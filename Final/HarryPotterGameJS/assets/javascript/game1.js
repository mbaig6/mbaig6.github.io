// ----- Global Variables ----- //

// Has the user selected their character
var characterSelected = false;

// Has the user selected the defender
var defenderSelected = false;

// Variable to store the user's chosen character
var character = {};

// Variable to store the chosen enemy
var defender = {};

// Number of enemies defeated
var enemiesDefeated = 0;

// Boolean to indicate whether or not the game is over
gameOver = false;

// ----- Character Objects ----- //

var bellatrix = {
  name: "Bellatrix",
  health: 120,
  baseAttack: 8,
  attack: 8
};

var malfoy  = {
  name: "Malfoy",
  health: 100,
  baseAttack: 5,
  attack: 5
};

var harryPotter = {
  name: "Harry Potter",
  health: 150,
  baseAttack: 20,
  attack: 20
};

var voldemort = {
  name: "Lord Voldemort",
  health: 180,
  baseAttack: 25,
  attack: 25
};

// ----- Helper Functions ----- //

// This function will initialize the character value from the global object variables defined above
function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

// This function will initialize the enemy's value from the global object variables defined above
function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

// This function will reset the state of the game
function resetGame() {
  // Reset all the health values to the original
  $("#bellatrix-character").children(".health").html(bellatrix.health);
  $("#malfoy-character").children(".health").html(malfoy.health);
  $("#harrypotter-character").children(".health").html(harryPotter.health);
  $("#voldemort-character").children(".health").html(voldemort.health);

  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#game-message").empty();
  $("#restart").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};
}

// ----- Main Routine ----- //

// Run Javascript when the HTML has finished loading
$(document).ready(function() {

  // Hide the "Restart" button on document load
  $("#restart").hide();

  // Determine which character the user has clicked
  $("#bellatrix-character").on("click", function () {
    console.log("Bellatrix is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(bellatrix);
      characterSelected = true;

      // Display the chosen character
      $("#bellatrix-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#bellatrix-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(bellatrix);
        defenderSelected = true;

        // Add the character to the defender section
        $("#bellatrix-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#malfoy-character").on("click", function () {
    console.log("Malfoy is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(malfoy);
      characterSelected = true;

      // Display the chosen character
      $("#malfoy-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#malfoy-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(malfoy);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#malfoy-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#harrypotter-character").on("click", function () {
    console.log("Harry Potter is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(harryPotter);
      characterSelected = true;

      // Display the chosen character
      $("#harrypotter-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#harrypotter-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(harryPotter);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#harrypotter-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#voldemort-character").on("click", function () {
    console.log("Lord Voldemort is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(voldemort);
      characterSelected = true;

      // Display the chosen character
      $("#voldemort-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#voldemort-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(voldemort);
        defenderSelected = true;

        // Add the character to the defender section 
        $("voldemort-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#attack").on("click", function() {
    console.log("Attack selected");

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));

    // User is ready to attack the defender
    if (characterSelected && defenderSelected && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

      // User's attack power increases
      character.attack = character.attack + character.baseAttack;

      // If defender is still alive, they counter attack the user
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        // Check if the user survives the attack
        if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>You were defeated... womp womp...</p><p>Play again?</p>");
          $("#restart").show();
        }
      } else {
        // Defender is defeated
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        // Check if the user has won the game
        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
          $("#restart").show();
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));
  });

  $("#restart").on("click", function() {
    console.log("Restart selected");

    resetGame();
  });

}); // Main routine
