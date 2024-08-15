console.log('components');
document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.cart__item_count_quatity').forEach(function (container) {
		var decrementButton = container.querySelector('.decrement');
		var incrementButton = container.querySelector('.increment');
		var quantityInput = container.querySelector('.quantity');

		decrementButton.addEventListener('click', function () {
			var currentValue = parseInt(quantityInput.value);
			if (currentValue > 1) {
				quantityInput.value = currentValue - 1;
			}
		});

		incrementButton.addEventListener('click', function () {
			var currentValue = parseInt(quantityInput.value);
			quantityInput.value = currentValue + 1;
		});
	});

	document.querySelectorAll('.delivery__inputfile input[type="file"]').forEach(function (input) {
		input.addEventListener('change', function () {
			let file = this.files[0];
			if (file) {
				this.nextElementSibling.innerHTML = file.name;
			}
		});
	});
});