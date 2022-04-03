var dob;
let personDob = new Array();
let num=0;
//set a range of years
let min = 1992;
let max = 1993;
for(let i=1; i<=50; i++){
// Math.ceil prevents the value from being 0;
let month = Math. ceil(Math. random() * 12);
let day = Math. ceil(Math. random() * 28);
let year = Math. floor(Math. random() * (max - min) + min);

//this ensures that the format will stay mm/dd/yyyy;
if(month < 10) {
	month = "0" + month;
}
if(day < 10) {
	day = "0" + day;
}
//concatenates random dob in mm/dd/yyyy format;
dob = month + "/" + day + "/" + year;
a++;
personDob. push(dob);
}
let dobSorted = personDob. sort();
console. log(dobSorted);
let dobMap = new Map();
console. log(dobMap. set(num,dobSorted))