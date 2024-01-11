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
					<h2>일시적인 오류가 발생했습니다.</h2>
					<p>다시 시도해 주세요 :)</p>
				`;
			};

			form.querySelector('button[type="submit"]').classList.add('loading');

			const formData = new FormData(form);
		
			const name = formData.get("name")
			const email = formData.get("email")
			const company = formData.get("company")
			const content = formData.get("help-message")

			Email.send({
				Host: "smtp.elasticemail.com",
				Port: 2525,
				Username: "rooftopdevs@gmail.com",
				Password: "9AE5AF97637FAE2C81F3DC2CFB05702695D3",
				To: 'thkim@youngilvision.com',
				From: "rooftopdevs@gmail.com",
				Subject: `[${company}] ${name} 담당자 님의 상담 요청`,
				Body: `
				담당자: ${name}
				회사명: ${company}
				이메일: ${email}

				내용: ${content}
				`,
			}).then(rsp => {
				if (rsp !== "OK") {
					displayError();
				} else {
					form.closest('.js-contact').classList.add('sent');
					sendSuccess.classList.add('visible');
					form.querySelector('button[type="submit"]').classList.remove('loading');

					window.dataLayer.push({'event': 'contact_form_submitted'});
				}
			})
		});
	});

	formMobile();
});