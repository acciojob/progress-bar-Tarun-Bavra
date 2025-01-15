//your JS code here. If required.
const buttons = document.getElementsByClassName("btn");
const steps = document.getElementsByClassName("step");
const lines = document.getElementsByClassName("line");
const stepsArray = Array.from(steps);
let step=0; let line=1;
//prev btn
buttons[0].addEventListener("click",(e)=>{
	//prev btn
	if(step>=1){
		step--;
	stepsArray[step].style.backgroundColor = "transparent";
	}
	//prev line
	if(line>=1){
		line--;
	lines[line].style.backgroundColor = "transparent";
	}
});

//next btn
buttons[1].addEventListener("click",(e)=>{
	//next btn
	if (step < steps.length) {
        steps[step].style.backgroundColor = "skyblue"; // Highlight current step
        if (step > 0) {
            lines[line].style.backgroundColor = "skyblue"; // Highlight connecting line
            line++; // Move to the next line
        }
        step++; // Move to the next step
    }
});
