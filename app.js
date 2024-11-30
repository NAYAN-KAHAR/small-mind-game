let logicArray  = [
	{step1:"Choose Any Number From 0-50"},
	{step1:"Choose Any Number From 0-50 For Your Friend And Add Them"},
	{step1:"Now Add 6 With This Number"},
	{step1:"Give Half Of Them To Charity"},
	{step1:"Now Give Back Friend's Money"},
	{step1:"Now You Have 3 "},
];

 
console.log(logicArray);

let index = 0;
const nextBtnLogic = () => {
	nextBtn.innerText = "Next";
	let mainDiv = document.querySelector('#main-div') 
	mainDiv.innerHTML = `<p><b>${logicArray[index].step1}</b></p>`
	index++;
	if (index === 6) {
		nextBtn.innerText = "Play Again"
		index = 0;
	}
}

let nextBtn = document.querySelector('#nextBtn')
nextBtn && nextBtn.addEventListener('click',nextBtnLogic)