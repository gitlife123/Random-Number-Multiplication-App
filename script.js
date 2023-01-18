let randomNumber1 = Math.ceil(Math.random() * 10);
// console.log(randomNumber1);
let randomNumber2 = Math.ceil(Math.random() * 10);
// console.log(randomNumber2);
// console.log(typeof randomNumber2);

let randomQuestionEl = document.getElementById("question");

let inputScrEl = document.getElementById("input");

let rewardEl = document.getElementById("reward");

let containEl = document.getElementById("form");

const correctAns = randomNumber1 * randomNumber2;

let correctQns = randomQuestionEl.innerText = `What is answer the of ${randomNumber1} multiply by ${randomNumber2} ?`

containEl.addEventListener("submit", () => {
    const userAns = +inputScrEl.value;
    if (userAns === correctAns) {
        rewardEl.innerHTML = ("Yes!! your answer is correct :)")
    }
    else {
        rewardEl.innerHTML = ("Oops!! your answer is not correct :( try again")
    }
}
)