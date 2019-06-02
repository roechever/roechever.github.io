function calcTip() {
	var subtotalElem = document.getElementById('subtotal');
	var tipElem = document.getElementById('tip');
	var subtotal = parseFloat(subtotalElem.value);
	var tip = parseFloat(tipElem.value);
	var totalElem = document.getElementById('total');
	var total = subtotal*(tip/100);
	totalElem.innerHTML = '$' + total;
}