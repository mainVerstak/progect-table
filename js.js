//alert("l");


const TableResponsives = document.querySelectorAll('.table-responsive');

if (TableResponsives) {
	for (let i = 0; i < TableResponsives.length; i++) {
		let tableResponsive = TableResponsives[i];

		let tableResponsiveHedar = tableResponsive.querySelector('thead');
		let tableResponsiveHedarItem = tableResponsiveHedar.querySelectorAll('th');
		let tableResponsiveHedarValues = new Array();

		for (let i = 0; i < tableResponsiveHedarItem.length; i++) {
			tableResponsiveHedarValues.push(tableResponsiveHedarItem[i].textContent);
		}
		/*for (let iTwo = 0; iTwo < tableResponsiveHedarValues.length; iTwo++) {
			alert(tableResponsiveHedarValues[iTwo]);
		}*/

		let tableResponsiveBody = tableResponsive.querySelector('tbody');
		let tableResponsiveBodyTrs = tableResponsiveBody.querySelectorAll('tr');

		for (let i2 = 0; i2 < tableResponsiveBodyTrs.length; i2++) {
			let tableResponsiveBodyTr = tableResponsiveBodyTrs[i2];
			let tableResponsiveTds = tableResponsiveBodyTr.querySelectorAll('td');

			for (let i3 = 0; i3 < tableResponsiveTds.length; i3++) {
				tableResponsiveTds[i3].insertAdjacentHTML('afterbegin', `<span>${tableResponsiveHedarValues[i3]}</span>`);
			}
		}

	}
}
