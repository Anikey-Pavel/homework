let surname = prompt('Ваша фамилия')

let username = prompt('Ваше имя')

let patronymic = prompt('Ваша отчество')

let age = prompt('Ваш возврост в годах')

let gender = confirm('Ваш пол мужской?')

gender ? gender = 'Мужской' : gender = 'Женский';

pension = age < 55 ? pension = 'Нет' : pension = 'Да'

let questionnaire = alert('ФИО: ' + surname + username + patronymic + "\r\n" +
	'Ваш возраст в годах: ' + age + "\r\n" +
	'Ваш возраст в днях: ' + (age * 365) + "\r\n" +
	'Через 5 лет вам будет: ' + (age++ + 5) + "\r\n" +
	'Ваш пол: ' + gender + "\r\n" +
	'Вы на пенсии: ' + pension
)