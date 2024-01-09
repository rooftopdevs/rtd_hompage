window.addEventListener('DOMContentLoaded', () => {
	const forms = document.querySelectorAll('.js-contact-form');
	const formsParent = document.querySelectorAll('.js-contact');
	const inputs = document.querySelectorAll(".Input");
	const breakpoint = window.matchMedia('(max-width: 992px)');

	const formMobile = () => {
		let couterFlag = 0;

		formsParent.forEach((el, index) => {
			let counter = 0;
			const Lables = el.querySelectorAll(".InputBox");
			const stepBtn = el.querySelectorAll(".btn-step");
			const inputsValidation = el.querySelectorAll(".input-invalid");
			const stepBtns = document.querySelectorAll(".div-step");
			const inputHeadings = document.querySelectorAll(".InputBox-heading");

			stepBtn.forEach((elemento, index) => {
				elemento.addEventListener("click", () => {
					if (couterFlag == 1) {
						counter = 0;
						couterFlag = 0;
					}
					if (index == counter && index > 0) {
						if (
							Lables[counter].childNodes[3].firstChild.nextSibling.checkValidity()
						) {
							Lables[counter + 1].style.display = "block";
							Lables[counter].style.display = "none";
							counter++;
						} else {
							inputsValidation[counter - 1].style.display = "block";
						}
					} else if (counter == 0) {
						Lables[counter + 1].style.display = "block";
						Lables[counter].style.display = "none";
						counter++;
					}
				});
			});
		});
	};

	forms.forEach(form => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const sendSuccess = form.querySelector(".send-success");

			const displayError = () => {
				sendSuccess.innerHTML = `
					<h2>Something went wrong</h2>
					<p>Please Try Again</p>
				`;
			};

			form.querySelector('button[type="submit"]').classList.add('loading');
			const formData = new FormData(form);

			fetch("sendmail.php", {
				method: "POST",
				body: formData
			}).then(response => {
				if (response && response.status === 200) {
					return response.json()
				}
			}).then(data => {
				form.closest('.js-contact').classList.add('sent');
				sendSuccess.classList.add('visible');
				form.querySelector('button[type="submit"]').classList.remove('loading');

				if (data.status == 1) {
					window.dataLayer.push({'event': 'contact_form_submitted'});
				}
				else {
					displayError();
				}
			}).catch(error => {
				displayError();
			});
		});
	});

	formMobile();
});