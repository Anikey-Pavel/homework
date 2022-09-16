let username = prompt('Введите вашу Фамилию')

let surname = prompt('Введите ваше Имя')

let patronymic = prompt('Введите ваше Отчество')

let age = prompt('Сколько вам полных лет')

let gender = confirm('Ваш пол - мужской?')

if (gender) {
    gender = 'мужской'
} else {
    gender = 'женский'
}

if (age < 60) {
    pension = 'нет'
} else {
    pension = 'да'
}

let questionnaire = alert('ФИО: ' + surname + username + patronymic + "\r\n" +
    'Ваш возраст в годах: ' + age + "\r\n" +
    'Ваш возраст в днях: ' + (age * 365) + "\r\n" +
    'Через 5 лет вам будет: ' + (age++ + 5) + "\r\n" +
    'Ваш пол: ' + gender + "\r\n" +
    'Вы на пенсии: ' + pension
)