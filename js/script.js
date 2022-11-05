const input = document.querySelector('input');
const maxLength = input.getAttribute('maxlength');
const textLengthSpan = document.querySelector('.text__length span');
textLengthSpan.innerHTML = maxLength;

input.addEventListener("keyup", keyup);
input.addEventListener("keydown", keydown);

function keydown(event) {
	if (event.repeat) {
		keyup()
	}
}

function keyup(event) {
	const maxLength = input.getAttribute('maxlength');
	const result = maxLength - input.value.length;
	textLengthSpan.innerHTML = result;
}

document.addEventListener('click', function (event) {
	const form = document.querySelector('form');
	const searchIcon = event.target.closest('.search__icon');
	if (searchIcon) {
		form.classList.toggle("form__active");
	} else if (!event.target.closest("form")){
		form.classList.remove("form__active");
	}
	
	event.preventDefault();
	
});

document.addEventListener('keydown', function (event) {
	const form = document.querySelector('form');
	if (event.code === "Escape") {
		form.classList.remove("form__active");
	}
});

