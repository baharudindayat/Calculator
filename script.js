function insert(num){
	document.form.text.value = document.form.text.value + num;
}

function equal(){
	var hasil = document.form.text.value;
	document.form.text.value = eval(hasil);
}

function clean(){
	document.form.text.value = "";
}

function back(){
	var hasil = document.form.text.value;
	document.form.text.value = hasil.substring(0,hasil.length-1);
}