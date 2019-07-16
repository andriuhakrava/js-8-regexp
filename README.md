# JS-8-regexp

## Educational tasks from Circle WebAcademy

1. В онлайн-сервісі знайдіть:
	
	- всі символи;
	- всі пробіли;
	- всі пробільні символи;
	- всі цифри;
	- всі числа;
	- всі слова;
	- перше слово другого речення
	- слова, що починаються на f, s, t, w
	- останнє слово кожного речення;
	- домени верхнього рівня.

	**File: regexp-online-service.js**

1. Створіть проект validator з формою вводу даних:

	```
	<form id="form1" action="#" method="GET">
	  <p><label><input id="fname" name="name" placeholder="Введіть ім'я"></label></p>
	  <p><label><input id="fmail" name="email" placeholder="Введіть e-mail"> формат: email@site.com</label></p>
	  <p><label><input id="ftel" name="phone" placeholder="Введіть телефон"> формат: +38 (099) 999-99-99</label></p>
	  <p><input type="submit" value="Відправити"></p>
	</form>
	```

	Напишіть функцію валідації імені, ім'я повинно складатися лише з латинських літер, без пробілів, перша літера велика.

	```
	function validName(s){
	  var err = 'Невірний формат імені!\nФормат: латинські літери, перша - велика.';   ...
	  якщо введено невірні дані: alert(err);
	  return true або false;
	}
	```

	Доступ до введених користувачем даних здійснюється таким чином:

	```
	змінна = document.getElementById('ідентифікатор').value;
	var a = document.getElementById('fname').value;
	```

2. Напишіть функцію валідації e-mail. Логін повинен складатися з латинських символів, символів мінус, підкреслювання та крапка. Домен повинен складатися лише з латинських символів. Доменна зона може складатися з 2-5 латинських символів. Регістр не має значення.

3. Напишіть функцію фалідації телефона. Пробіли, дужки, мінуси, можуть бути відсутні.
+380 - обов'язкові цифри, приймаються телефони лише України, 12 цифр.
	
	```
	+380682091234
	+38068 209-12-34
	+3 8 (068) 209 12 34
	+38(068)209-12-34
	і т.п.
	```

**File: optimal.js**