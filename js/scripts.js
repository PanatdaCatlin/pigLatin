$(document).ready(function() {

  var vowels = ["a", "e", "i", "o", "u"];
  var userInput;
  var firstLetterVowel = false;
  var results;
  var setFirstLetterVowel = function(userInput) {

    var firstLetter = userInput[0];
    vowels.forEach(function(vowel) {
      if (firstLetter === vowel) {
        firstLetterVowel = true;
      };
    });
  };


  $("#pig-latin").submit(function(event) {
    userInput = $("#word-input").val();
    userInput = userInput.split("");

    setFirstLetterVowel(userInput);
    console.log(firstLetterVowel);

    if (firstLetterVowel === true) {
      userInput = userInput.join("");
        userInput = userInput.concat("-way");
          $("#result").text(userInput);
            firstLetterVowel = false;

    };
    alert (userInput);
    if (firstLetterVowel === false) {};




      alert(typeof(userInput))
    event.preventDefault();

  });

});




























//
//   alert (findVowel);
//
//
//
//
// //user interface logic
// $(document).ready(function() {
//   $("#pig-latin").submit(function(event) {
//     event.preventDefault();
//     var userInput = $("input#word-input").val();
//     var resultShow = wordInput(userInput);
//     $("#result").show();
//     $("#result").text(resultShow);
//
//
//   });
// });
