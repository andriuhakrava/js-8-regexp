/*	Створіть проект validator з формою вводу даних:
	1. Напишіть функцію валідації імені, ім'я повинно складатися лише з латинських літер, 
			без пробілів, перша літера велика.  
	2. Напишіть функцію валідації e-mail.
			Логін повинен складатися з латинських символів, символів мінус, підкреслювання та крапка.
			Домен повинен складатися лише з латинських символів.
			Доменна зона може складатися з 2-5 латинських символів.
			Регістр не має значення.
	3. Напишіть функцію валідації телефона. Пробіли, дужки, мінуси, можуть бути відсутні.
	 		+380 - обов'язкові цифри, приймаються телефони лише України, 12 цифр. */

	let regexpName = /^[A-Z][a-z]+$/;
	let regexpMail = /^[-a-z_.]+@[a-z]+\.[a-z]{2,5}$/i;
	let regexpTel = /^\+\d+ ?\(?\d+\)? ?\d+\-?\d+\-?\d+$/;
	let errorMessageName = 'Невірний формат імені!\nФормат: латинські літери, перша - велика.';
	let errorMessageMail = 'Невірний формат поштової адреси!\nДопустиму символи логіну: латинські, мінус, підкреслювання та крапка.';;
	let errorMessagePhone = 'Невірний формат телефону!\n+380 - обов\'язкові цифри, приймаються телефони лише України, 12 цифр.';
	let form = document.getElementById('formValid');
	let fields = document.querySelectorAll('input');
	let nameField = document.getElementById('fname');
	let mailField = document.getElementById('fmail');
	let telField = document.getElementById('ftel');

	form.addEventListener('submit', function(event){
		event.preventDefault();
		validFunc(nameField, nameField.value, regexpName, errorMessageName);
		validFunc(mailField, mailField.value, regexpMail, errorMessageMail);
		validFunc(telField, telField.value, regexpTel, errorMessagePhone);
	});

	function validFunc(field, text, reg, err){
		if (reg.test(text)){
			field.classList.remove('error');
			field.classList.add('success');
		} else {
			alert(err);
			field.classList.add('error');
		}
	}