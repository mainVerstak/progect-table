//alert("l");


const TableResponsives = document.querySelectorAll('.table-responsive');

if (TableResponsives) {
	for (let i = 0; i < TableResponsives.length; i++) {
		let tableResponsive = TableResponsives[i];

		let tableResponsiveHedar = tableResponsive.querySelector('thead');
		let tableResponsiveBody = tableResponsive.querySelector('tbody');
		let tableResponsiveBodyTrs = tableResponsiveBody.querySelectorAll('tr');
		let tableResponsiveHedarValues = new Array();
		let tableNumber = 0;

		if (tableResponsiveHedar) {
			let tableResponsiveHedarItem = tableResponsiveHedar.querySelectorAll('th');

			for (let i = 0; i < tableResponsiveHedarItem.length; i++) {
				tableResponsiveHedarValues.push(tableResponsiveHedarItem[i].textContent);
			}
		} else {
			let tableResponsiveHedarItem = tableResponsiveBodyTrs[0].querySelectorAll('th');

			for (let i = 0; i < tableResponsiveHedarItem.length; i++) {
				tableResponsiveHedarValues.push(tableResponsiveHedarItem[i].textContent);
			}

			tableNumber = 1;
		}

		for (let i2 = tableNumber; i2 < tableResponsiveBodyTrs.length; i2++) {
			let tableResponsiveBodyTr = tableResponsiveBodyTrs[i2];
			let tableResponsiveTds = tableResponsiveBodyTr.querySelectorAll('td');

			for (let i3 = 0; i3 < tableResponsiveTds.length; i3++) {
				tableResponsiveTds[i3].insertAdjacentHTML('afterbegin', `<span>${tableResponsiveHedarValues[i3]}</span>`);
			}
		}

	}
}
