let randomNumber1 = Math.ceil(Math.random() * 10);
// console.log(randomNumber1);
let randomNumber2 = Math.ceil(Math.random() * 10);
// console.log(randomNumber2);
// console.log(typeof randomNumber2);

let randomQuestionEl = document.getElementById("question");

let inputScrEl = document.getElementById("input");
/* inputScrEl = Number.parseInt(inputScrEl);
 userAns = inputScrEl.value; */   // not worked 

let rewardEl = document.getElementById("reward");


let buttonEl = document.getElementById("btn");

const correctAns = randomNumber1 * randomNumber2;

let correctQns = randomQuestionEl.innerText = `What is answer the of ${randomNumber1} multiply by ${randomNumber2} ?`

btn.addEventListener("click", () => {
    const userAns = +inputScrEl.value;
    if (userAns === correctAns) {
        rewardEl.innerHTML = ("Yes!! your answer is correct :)")
    }
    else {
        rewardEl.innerHTML = ("Oops!! your answer is not correct :( try again")
    }
}
)