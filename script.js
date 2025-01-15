//your JS code here. If required.
const buttons = document.getElementsByClassName("btn");
const steps = document.getElementsByClassName("step");
const stepsArray = Array.from(steps);
const [step1,step2,step3,step4,step5] = stepsArray;
let step=0;
buttons[0].addEventListener("click",(e)=>{
	if(step>0){
	stepsArray[step].style.backgroundColor = "transparent";
		step = step - 1;
	}
})
buttons[1].addEventListener("click",(e)=>{
	if(step<=5){
	stepsArray[step].style.backgroundColor = "skyblue";
	}
	step = step + 1;
})