const arrownBtn = document.querySelectorAll("#arrow");
const hiddenP = document.querySelectorAll(".hidden-p");
const mainP = document.querySelectorAll(".main-p");
const newParagraphs = [];
const mainParagraphs = [];

// pushing all hidden paragraphs into a new array with an ascending order
hiddenP.forEach((p, index) => {
  p.classList.add(`para-${index + 1}`);
  newParagraphs.push(p);
});

// pushing all main paragraphs into a new array with an ascending order
mainP.forEach((p, index) => {
  mainParagraphs.push(p);
  p.addEventListener("click", function (e) {
    // loop through the arrows arr & match if the index of paragraph is matching the index of arrows and
    // contains the animation prop
    for (let i = 0; i < arrownBtn.length; i++) {
      console.log(index);
      if (index === i && !arrownBtn[i].classList.contains("reverseArrow")) {
        arrownBtn[i].classList.add("reverseArrow");
      } else if (
        index === i &&
        arrownBtn[i].classList.contains("reverseArrow")
      ) {
        arrownBtn[i].classList.add("reverseTheReverseAnimation");
        arrownBtn[i].classList.remove("reverseArrow");
      }

      if (
        index === i &&
        arrownBtn[i].classList.contains("reverseTheReverseAnimation") &&
        index === i &&
        arrownBtn[i].classList.contains("reverseArrow")
      ) {
        arrownBtn[i].classList.remove("reverseTheReverseAnimation");
      }
    }
    // if the button is not active remove all classes

    // loop for iterating through the array to match the index of btn to paragraph
    for (let i = 0; i < mainParagraphs.length; i++) {
      if (index === i) {
        mainParagraphs[i].style.fontWeight =
          mainParagraphs[i].style.fontWeight === "bold" ? "300" : "bold";
      }
    }

    // loop for iterating through the array to match the index of btn to paragraph
    for (let i = 0; i < newParagraphs.length; i++) {
      if (index === i) {
        newParagraphs[i].style.display =
          newParagraphs[i].style.display === "block" ? "none" : "block";
      }
    }
  });
});
