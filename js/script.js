const input = document.querySelector('input');
const maxLength = input.getAttribute('maxlength');
const textLengthSpan = document.querySelector('.text__length span');
textLengthSpan.innerHTML = maxLength;
const form = document.querySelector('form');
const d1Span = document.querySelector('.d1 > span');


input.addEventListener("keyup", keyup);
input.addEventListener("keydown", keydown);

function keydown(event) {
	
	if (event.repeat) {
		keyup()
	}
}
function keyup(event) {
	
	const result = maxLength - input.value.length;
	textLengthSpan.innerHTML = result;
}

document.addEventListener('click', function (event) {
	const searchIcon = event.target.closest('.search__icon');
	if (searchIcon) {
		form.classList.toggle("form__active");
		d1Span.classList.toggle("none");
	} else if (!event.target.closest("form")){
		form.classList.remove("form__active");
		d1Span.classList.remove("none");
	}

	event.preventDefault();
	
});

document.addEventListener('keydown', function (event) {
	
	if (event.code === "Escape") {
		form.classList.remove("form__active");
	}
});

