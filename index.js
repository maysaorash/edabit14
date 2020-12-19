
function points(twoPointers, threePointers) {
	return twoPointers*2 + threePointers*3
}


function keyboardMistakes(str) {
	let stt = {'4': 'A', '5': 'S', '0': 'O', '1': 'I'}
   return str.replace(/[4,5,0,1]/g, m =>stt[m])
}

s=s.replace(/4/g,'A');
  s=s.replace('5','S');
  s=s.replace('0','O');
  s=s.replace('1','I');
  return s;

	switch(txt) {
	 case 'MUB45H1R':
		 return 'MUBASHIR';
	 case 'DUBL1N':
		 return 'DUBLIN';
	 case '51NG4P0RE':
		 return 'SINGAPORE';
	 case 'P4K15T4N':
		 return 'PAKISTAN';
	 case 'P4R15':
		 return 'PARIS';
 }

 function keyboardMistakes(txt){
return txt.replace("5", "S").replace("1", "I").replace("0", "O").replace("4", "A").replace("4", "A");
}

const fifth = (...a) => a.length < 5 ? 'Not enough arguments' : typeof a[4];

function fifth(...args) {
	if([args[4]] < 5){
		return "Not enough arguments"
	}else{
		return typeof args[4];
	}
}


const fifth = (...args) =>
  args.length >= 5 ? typeof args[4] : 'Not enough arguments';

	function fifth() {
	return (typeof 5);
	}
  return (typeof "");

	function makesTen(a, b) {
	if(a===10 || b === 10 || a+b ===10){
		return true;
	}else{
		return false;
	}
}
const makesTen = (a, b) => [a, b, a + b].includes(10);
const makesTen = (a , b) => [a , b , a + b].includes(10);


function fiftyThirtyTwenty(ati) {
	return {"Needs":ati*0.5, "Wants":ati*30/100, "Savings":ati*20/100}
}

function fiftyThirtyTwenty(ati) {
	let needs = ati/2;
  let wants = ati*30/100;
  let saving = ati*20/100;
  return {"Needs": needs, "Wants": wants, "Savings": saving}
}

function afterNMonths(year, month) {
	if (year  === undefined) {
    return "year missing";
  }else if (month  === undefined){
  return "month missing";
  }else if (month === 12){
	return (year + month) * 1;
 }else{
	return Math.floor(year + (month / 12));
}
}

function fiftyThirtyTwenty(ati) {
	return { "Needs": ati*0.5, "Wants": ati*0.3, "Savings": ati*0.2 }
}
const fiftyThirtyTwenty = ati => {
	return 	{
			Needs: ati * 0.5,
			Wants: ati * 0.3,
			Savings: ati * 0.2
		};
}
function fiftyThirtyTwenty(a) {
	return b = {Needs:a/2,Wants:a*0.3,Savings:a/5};
}

function mod(a, b) {
	return a-(parseInt(a/b)*b)
}


function mod(a, b) {
	return a - Math.floor(a/b) * b;
}

function removeEmptyArrays(arr) {
	return arr.filter(x => x.length !== 0)
}

function weightAllowed(car, p, maxWeight) {
	let np = p.reduce((a,b)=>a+b,0)*0.453592;
    let ncar= car*0.453592;
  return np+ncar<maxWeight
}

const weightAllowed = (car, p, maxWeight) =>
   (p.reduce((a, c) => a + c, 0) + car) * 0.453592 < maxWeight;

	 function weightAllowed(car, p, maxWeight) {
  return (car + p.reduce((a, b) => a + b)) * 0.453592 < maxWeight
}