//your JS code here. If required.
const buttons = document.getElementsByClassName("btn");
const steps = document.getElementsByClassName("step");
const lines = document.getElementsByClassName("line");
const stepsArray = Array.from(steps);
let step=0; let line=0;
//prev btn
buttons[0].addEventListener("click",(e)=>{
	if(step>0){
		step = step - 1;line = line - 1;
	stepsArray[step].style.backgroundColor = "transparent";
	lines[line].style.backgroundColor = "transparent";
	}
});
//next btn
buttons[1].addEventListener("click",(e)=>{
	if(step<5){
	stepsArray[step].style.backgroundColor = "skyblue";
	lines[line].style.backgroundColor = "skyblue";
		step = step + 1;line = line + 1;
	}
	
})