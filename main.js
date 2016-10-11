document.querySelector("#inject-html button").addEventListener('click', function() {
    // TASK #1
    var answerBoxEl = document.querySelector('#inject-html .answer-box')
    answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})


document.querySelector("#double button").addEventListener('click', function() {
    // TASK #2
    var answerPTagWithValue = document.querySelector('#compoundInvestment')
    console.log(answerPTagWithValue.innerHTML);
    answerPTagWithValue.innerHTML *= 2;

})


document.querySelector("#color-circle button").addEventListener('click', function() {
    // TASK #3
    var circleSelector = document.querySelector('.exercise-container #circle-bw');
    if (circleSelector.style.background === "black") {
        circleSelector.style.background = "white";

    } else {

        circleSelector.style.background = "black";
    }
})

document.querySelector("#blow-up button").addEventListener('click', function() {
    // TASK #4

    // (1) Properly select the element.
    var blowUpCircleSelector = document.querySelector('.circle-red');
    //console.log(blowUpCircleSelector);

    // (2) Capture the current height and width of Circle Element
    var elementStyles = window.getComputedStyle(blowUpCircleSelector);
    // console.log("W",elementStyles.width);
    // console.log("H" ,elementStyles.height);

    // elements as Strings to be converted:
    var elementHeightString= elementStyles.height;
    var elementWidthString = elementStyles.width;

    // (3) Convert the height/width of circle element from a string to a number

    var elementHeightNum = elementHeightString.slice(0, -2);
    var elementWidthNum = elementWidthString.slice(0, -2); //how does slice() work????
    //converting to Int
    var currentElementHeight = parseInt(elementHeightNum);
    var currentElementWidth = parseInt(elementWidthNum);

    // (4) Perform an operation to double the integer value of the height and width of the Element
    var doubleWidth = currentElementWidth * 2;
    var doubleHeight = currentElementHeight * 2;



    if (doubleWidth > 320) {
      blowUpCircleSelector.style.height = "40px";
      blowUpCircleSelector.style.width = "40px";

    } else {

      blowUpCircleSelector.style.height = doubleHeight + "px";
      blowUpCircleSelector.style.width = doubleWidth + "px";
    }

      // var height = blowUpCircleSelector.style.height;
      // console.log(height);
      // var stringHeightArray = blowUpCircleSelector.style.height.split("p")
      // var numStringToDouble = stringHeightArray[0];
      //
      // var numToDouble = parseInt(numStringToDouble);
      //
      // numToDouble = numToDouble * 2;
      // var newString = numToDouble + 'px';
      // blowUpCircleSelector.style.height = newString;
      // blowUpCircleSelector.style.width = newString;
      //console.log('|n--------------------------------------');
    //bg.style.width = imgWidth + "px";

})

document.querySelector("#remove button").addEventListener('click', function() {
    // TASK #5
    var userListItems = document.querySelectorAll('#user-list li');
    console.log(userListItems);
    var newArrayOfItems = [];
    for (var i = 0; i < userListItems.length; i++) {
      console.log(userListItems[i]);
      if(userListItems[i].innerHTML === "inactive user") {
        userListItems[i].style.display = "none";
      }
    }
})


document.querySelector("#reverse-squares button").addEventListener('click', function() {
    // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click', function() {
    // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click', function() {
    //TASK #8
    var imageElement = document.querySelector('#city-img');
    console.log('are you the one?', imageElement.src);
    var imageSrc = ""

    //split full file path into array to isolate the relative path
    var splitSourceStringArray = imageElement.src.split('/');
    console.log(splitSourceStringArray);
    //accessing the city-photo-<<n>>
    var stringToModify = splitSourceStringArray.pop();
    console.log(stringToModify);

    //isolate the number part of the stringToModify
    var cityPhotoXString = stringToModify.split('.')[0];
    console.log(cityPhotoXString);

    //isolate the number itself
    var cityPhotoXArr = cityPhotoXString.split('-')
    console.log(cityPhotoXArr);
    var cityPhotoNumber = cityPhotoXArr.pop();
    console.log(cityPhotoNumber);

    //modify the number
    var modifiedNum = parseInt(cityPhotoNumber);
    console.log(modifiedNum);

    var nextImgNum = modifiedNum % 10 + 1;

    imageElement.src = './images/city-photo-' + nextImgNum + '.jpg';

})
