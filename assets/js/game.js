// this creates a function named "fight" 

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiplevalues at once like this

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var fight = function(enemyNames) {
    // repeat and execute as long as the enemy robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
    // alert players that they are starting the round

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {

            //subtract the value of 'playerAttack' from the value of enemyHealth
            //and use that result to update the value in 'enemyHealth' variable
            var damage = randomNumber(playerAttack - 3, playerAttack);

            enemyHealth = Math.max(0, enemyHealth - damage);

            //log a resultng message to the console so we know that it worked
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " remaining health."
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");
            }

            else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }

            //subtract the value of 'eemyAttack' from the value of 'playerHealth' 
            //and use that result to update the value in teh 'playerHealth' variable
            var damage = randomNumber(enemyAttack - 3, enemyAttack);

            playerHealth = Math.max(0, playerHealth - damage);
            //log a resulting message to the console so we know taht it worked
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining."
            )

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died.");
                break;
            }

            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } 
        //if player chooses skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //comfirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
            }
        }
    }

};

var endGame = function () {
    //if player still alice, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game!  You now have a score of " + playerMoney + ".");
    }

    else {
        window.alert("You've lost your robot in battle");
    }
    
    var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            //restart game
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};

//shop
var shop = function () {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, of LEAVE the store?  Please enter one: REFILL, UPGRADE, or LEAVE to make a choice."
    );
    //switch option
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney > 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "UPGRADE": //new case
        case "upgrade":
            if (playerMoney > 7) {
                window.alert ("Upgraing player's attack by 6 for 7 dollars.");
                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            //do nothing so fn will end
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop again to pick a valid item
            shop();
            break;

    }
};

//function start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators!  Round " + ( i + 1 ) );
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting new fight
            //enemyHealth = Math.floor(Math.random() * 21) + 40;
            enemyHealth = randomNumber(40, 60);
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
            //if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
                    //if yes, take them to the store function
                    if (storeConfirm) {
                    shop();
                    }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
};

//play gamea gain
startGame();

// Games states
//"LOSE" - Player robtos's health is zero or less

