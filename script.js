const letters = [
    "S", "B","T","I","E",
    "F","G","H","A","D",
    "U","A","B","F","I",
    "E","A","E","T","T",
    "M","A","G","N","R","L",
    "H", "D","U","X","A",
    "U", "A","H","I","N",
    "M","F","G","P",
];

const letters2 = [
    "S", "B","T","I","E","A",
    "F","G","H","A","D","N",
    "U","A","B","F","I","P",
    "Q","Y","W","X","K","T","C",
    "E","A","E","T","T","S","V","N","j",
    "M","A","G","N","R","L",
    "H", "D","U","X","A",
    "U", "A","H","I","N",
    "M","F","G","P","Q","O","R","D","B","M","F","H","V"
];

const letters3 = [
    "S", "B","T","I","E","A",
    "F","G","H","A","D","N",
    "U","A","B","F","I","P",
    "Q","Y","W","X","K","T","C",
    "E","A","E","T","T","S","V","N","j",
    "M","A","G","N","R","L",
    "H", "D","U","X","A","B","H","N","E","B",
    "U", "A","H","I","N","Q",
    "Y","L","F","B","A",
    "Z","U","R","K","N","E",
    "S","N","P","T","H","A","O","D",
    "M","F","G","P","Q","O",
    "R","D","B","M","F","H","V"
];

var city = ["SATARA", "MUMBAI", "THANE", "PUNE", "DELHI"];
var city2 = ["SATARA", "MUMBAI", "THANE"];
var city3 = ["SATARA", "MUMBAI"];

let currentLevel = 1; // Initialize the current level to 1 at the beginning of the game


function resetGame() {
    // Clearing currentLevel and stopping intervals
    currentLevel = 1;
    clearInterval(refreshIntervalId);
    time=2*60;
    refreshIntervalId = setInterval(updateCountdown, 1000); // Start the timer for Level 2
    updateCountdown(); 

    // Clearing game-related variables, arrays, and scores
    citynames = [];
    idarray = [];
    CharArray = [];
    count = 0;

    // Clearing UI elements and resetting styles
    document.getElementById("blocks").innerHTML = "";
    document.getElementById("city_names").innerHTML = "";
    document.getElementById("score").innerHTML = "";

    // Resetting visibility and styles of game sections
    document.getElementById("startgame").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("endgame").style.display = "none";
    document.getElementById("chooselevel").style.display = "none";
    document.getElementById("chooselevel3").style.display = "none";
    document.getElementById("check").style.display = "none";
    document.getElementById("check2").style.display = "none";
    document.getElementById("check3").style.display = "none";

    showdiv();
}



// let currentLevel = 1; // Initialize the current level to 1 at the beginning of the game
//----------------------------------------------------------------------LEVEL - 1 -------------------------------------------------------------
function showdiv() {

  


    document.getElementById("startgame").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("endgame").style.display = "none";
    document.getElementById("chooselevel").style.display="none";
    document.getElementById("chooselevel3").style.display="none";
    document.getElementById("check").style.display="block";
    document.getElementById("check2").style.display="none";
    document.getElementById("check3").style.display="none";

    currentLevel = 1; // Set the current level to 1 when showing level 1

    for (let i = 0; i <letters.length; i++) 
    {
        $("#blocks").append(
            "<div id=" +i +' style="display:inline-block; background:#AED6F1; height:70px; width:70px; margin:20px;padding: 24px 11px 10px 27px;border-radius:25%;border:2px solid white" onclick="adddiv(' +i + ')">' + letters[i] +"</div>");
    }
    for (let j = 0; j < 5; j++) {
        $("#city_names").append(
            '<div id="city' +
            j +
            '"style="margin:10px; padding:20px;" >' +
            city[j] +
            "</div>"
        );
    }
}

// function hidediv() {
//     document.getElementById("blocks").style.display = "none";
//     window.location.reload();
// }

function hidediv() {



    clearInterval(refreshIntervalId); // Stop the timer

    // Reset the time variable to the respective initial values for each level
    if (currentLevel === 1) {
        time = 2 * 60; // Level 1: 2 minutes
    } else if (currentLevel === 2) {
        time = 1.5 * 60; // Level 2: 1.5 minutes
    } else if (currentLevel === 3) {
        time = 1 * 60; // Level 3: 1 minute
    }

    // Reset all game-related variables, arrays, and scores
    citynames = [];
    idarray = [];
    CharArray = [];
    count = 0;

    // Clear UI elements
    document.getElementById("blocks").innerHTML = "";
    document.getElementById("city_names").innerHTML = "";
    document.getElementById("score").innerHTML = "";

    // Reset displayed elements' style or visibility
    document.getElementById("blocks").style.display = "none";
    document.getElementById("endgame").style.display = "none";
    document.getElementById("chooselevel").style.display = "none";
    document.getElementById("chooselevel3").style.display = "none";
    document.getElementById("check").style.display = "none";
    document.getElementById("check2").style.display = "none";
    document.getElementById("check3").style.display = "none";

    // Reload the page
    // window.location.reload();
    window.location.reload();
    // clearInterval(refreshIntervalId); // Stop the timer
    // time = 0; // Reset the time variable to 0
    // document.getElementById("blocks").style.display = "none";
    // document.getElementById("endgame").style.display = "none"; // Hide the endgame display
}



let citynames = [];
let idarray = [];
var CharArray = [];

function adddiv(id) {
    document.getElementById(id).style.backgroundColor = "#2980B9";
    if (!idarray.includes(id)) {
        citynames.push(letters[id]);
        CharArray.push(id);
        idarray.push(id);
        // document.getElementById("show_city").innerHTML=citynames;
    } else {
        alert("Please select another letter");
    }
    console.log(CharArray);
}

let count = 0;

function check() {
    let foundMatch = false; // Flag to indicate if a match was found

    var citycheck = citynames.join("");
    console.log(citycheck);

    for (let i = 0; i < city.length; i++) {
        if (city[i] === citycheck) {
            alert("Congratulations!");
            document.getElementById("city" + i).style.textDecoration = "line-through";
            document.getElementById("city" + i).style.color = "red";
           
           
            citynames = [];
            idarray = [];
            CharArray=[];
            foundMatch = true; // Set flag to true when a match is found

            count++;
            document.getElementById("score").innerHTML = count;
            // alert(count);
            if (count == 5) {
                goto_level2();
            }
            
        }
    }

    if (!foundMatch) {
        // Execute this block only if no match was found

        // alert("Wrong selection!---1");
        citynames = [];
        idarray = [];
        removechar();
    }
}

function removechar() {
    alert("Wrong Selection try again --1");
    CharArray.forEach((value) => {  //check for each value of array CharArray
        
        // alert(value);
        document.getElementById(value).style.backgroundColor="#AED6F1";
    });
}

function goto_level2() {
    // window.location.reload();
    // alert(" stop-->");
    document.getElementById("chooselevel").style.display="block";
    // document.getElementById("endgame").style.display = "block";
    document.getElementById("startgame").style.display = "none";

    currentLevel = 2; // Set the current level to 2 when transitioning to level 2

}

let time = 2 * 60; //minutes * 60 seconds
let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

function updateCountdown() {
    const minutes = Math.floor(time / 60); // rounds a number DOWN to the nearest integer
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    const contdownEl = document.getElementById("timer");
    contdownEl.innerHTML = `${minutes}:${seconds}`;

    time--;

    if (time < 0) {
        //stop the setInterval whe time < 0 for avoid negative time
        clearInterval(refreshIntervalId);
        document.getElementById("endgame").style.display = "block";
    }
}




// ---------------------------------------------------------- LEVEL - 2-------------------------------------------------------------


 // Reset variables for Level 2
 let count2 = 0; // Reset score for Level 2
 let citynames2 = [];
 let idarray2 = [];
 let CharArray2 = []; 

function showdiv2() {

    // currentLevel = 2;
    
    // Clear UI elements
    document.getElementById("blocks").innerHTML = "";
    document.getElementById("city_names").innerHTML = "";
    document.getElementById("score").innerHTML = " ";


    // Reset the score display to 0
    document.getElementById("score").innerHTML = count2;

   // Reset timer for Level 2
    clearInterval(refreshIntervalId); // Clear the existing timer for Level 1
    time = 1.5 * 60; //new time limit
    refreshIntervalId = setInterval(updateCountdown, 1000); // Start the timer for Level 2
    updateCountdown(); 

    document.getElementById("startgame").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("endgame").style.display = "none";
    document.getElementById("chooselevel").style.display="none";
    document.getElementById("chooselevel3").style.display="none";
    document.getElementById("check").style.display="none";
    document.getElementById("check2").style.display="block";
    document.getElementById("check3").style.display="none";


    for (let k = 0; k <letters2.length; k++) {
        $("#blocks").append(
            '<div id="L1' + k + '" style="display:inline-block; background:#AED6F1; height:65px; width:65px; margin:15px;padding: 24px 11px 10px 27px;border-radius:25%;border:2px solid white" onclick="adddiv2('+ k + ')">' + letters2[k] + '</div>');

    }
    for (let j = 0; j < city2.length; j++) {
        $("#city_names").append(
            '<div id="city2' + j + '"style="margin:10px; padding:20px;" >' + city2[j] + "</div>"
        );
    }
}


function adddiv2(id2) {
    // alert("ID" +id);
    document.getElementById("L1"+id2).style.backgroundColor = "#2980B9";
    if (!idarray2.includes(id2)) {
        citynames2.push(letters2[id2]);
        CharArray2.push(id2);
        idarray2.push(id2);
        // document.getElementById("show_city").innerHTML=citynames;
    } else {
        alert("Please select another letter");
    }
    console.log(CharArray2);
}


function check2() {
    // alert("check");
    let foundMatch2 = false; // Flag to indicate if a match was found

    var citycheck2 = citynames2.join('');
    console.log(citycheck2);

    for (let i = 0; i < city2.length; i++) {
        if (city2[i] === citycheck2) {
            alert("Congratulations!");
            document.getElementById("city2" + i).style.textDecoration = "line-through";
            document.getElementById("city2" + i).style.color = "red";
           
           
            citynames2 = []; // if match found then empty the array 
            idarray2 = [];   // if match found then empty the array 
            CharArray2=[];   // if match found then empty the array 

            foundMatch2 = true; // Set flag to true when a match is found

            count2++;
            document.getElementById("score").innerHTML = count2; //display score
            // alert(count2);

            if (count2 == 3) {
                goto_level3();  // when score is equal to 3 then call goto_level3 function
            }
            
        }
    }

    if (!foundMatch2) {
        // Execute this block only if no match was found
        // alert("Wrong selection!");

        citynames2 = [];  //empty the array 
        idarray2 = [];
        removechar2();  //call removechar2 function
        // document.getElementById(i).style.backgroundColor='#AED6F1';
    }
}

function removechar2() {
    alert("Wrong Selection try again"); 
    CharArray2.forEach((value) => {  //check for each value of array CharArray
        
        document.getElementById("L1"+value).style.backgroundColor="#AED6F1";  //changing the color 
    });
}

function goto_level3() {

    document.getElementById("chooselevel3").style.display="block";
    document.getElementById("chooselevel").style.display="none";
    document.getElementById("startgame").style.display = "none";

    currentLevel = 3; // Set the current level to 3 when transitioning to level 3
}

//---------------------------------------------------- LEVEL - 3 ------------------------------------------------------

// Reset variables for Level 3
let count3 = 0; // Reset score for Level 3
let citynames3 = [];
let idarray3 = [];
let CharArray3 = []; 

function showdiv3() {
   

    // currentLevel = 3;
   // Clear UI elements
   document.getElementById("blocks").innerHTML = "";
   document.getElementById("city_names").innerHTML = "";
   // document.getElementById("timer").innerHTML = " ";
   document.getElementById("score").innerHTML = " ";


   // Reset the score display to 0
   document.getElementById("score").innerHTML = count2;

  // Reset timer for Level 3
   clearInterval(refreshIntervalId); // Clear the existing timer for Level 3
   time = 1 * 60;                    //new time limit
   refreshIntervalId = setInterval(updateCountdown, 1000); // Start the timer for Level 3
   updateCountdown();

   document.getElementById("startgame").style.display = "none";
   document.getElementById("container").style.display = "block";
   document.getElementById("endgame").style.display = "none";
   document.getElementById("chooselevel").style.display="none";
   document.getElementById("chooselevel3").style.display="none";
   document.getElementById("check").style.display="none";
   document.getElementById("check2").style.display="none";
   document.getElementById("check3").style.display="block";


   for (let p = 0; p <letters3.length; p++) {
       $("#blocks").append(
           '<div id="L2' + p + '" style="display:inline-block; background:#AED6F1; height:55px; width:55px; margin:12px;padding: 24px 11px 10px 27px;border-radius:25%;border:2px solid white" onclick="adddiv3('+ p + ')">' + letters3[p] + '</div>');

   }
   for (let j = 0; j < city3.length; j++) {
       $("#city_names").append(
           '<div id="city3' + j + '"style="margin:10px; padding:20px;" >' + city3[j] + "</div>"
       );
   }
}

// function hidediv() {
//    document.getElementById("blocks").style.display = "none";
//    window.location.reload();
// }



function adddiv3(id3) {
   document.getElementById("L2"+id3).style.backgroundColor = "#2980B9";
   if (!idarray3.includes(id3)) {
       citynames3.push(letters3[id3]);
       CharArray3.push(id3);
       idarray3.push(id3);
       // document.getElementById("show_city").innerHTML=citynames;
   } else {
       alert("Please select another letter");
   }
   console.log(CharArray3);
}


function check3() 
{
//    alert("check");
   let foundMatch3 = false; // Flag to indicate if a match was found

   var citycheck3 = citynames3.join('');
   console.log(citycheck3);

   for (let i = 0; i < city3.length; i++) {
       if (city3[i] === citycheck3) {
           alert("Congratulations!");
           document.getElementById("city3" + i).style.textDecoration = "line-through";
           document.getElementById("city3" + i).style.color = "red";
          
          
           citynames3 = [];
           idarray3 = [];
           CharArray3=[];
           foundMatch3 = true; // Set flag to true when a match is found

           count3++;
           document.getElementById("score").innerHTML = count3;
           
        //    alert(count3);
           if (count3 == 2) {
               EndOfGame();
           }
           
       }
   }

   if (!foundMatch3) {
       // Execute this block only if no match was found
       citynames3 = [];
       idarray3 = [];
       removechar3();
   }
}

function removechar3() {
   alert("Wrong Selection try again");
   CharArray3.forEach((value) => {  //check for each value of array CharArray3
       
       document.getElementById("L2"+value).style.backgroundColor="#AED6F1";
   });
}

 function EndOfGame()
 {
    alert("END OF GAME--->");
    window.location.reload(); //reload the page to restart the game 
 }
