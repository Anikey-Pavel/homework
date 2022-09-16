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

let questionnaire = alert(
	` 
        Ваше ФИО: ${surname}  ${username}  ${patronymic}
        Ваш возраст в годах:  ${age}
        Ваш возраст в днях:  ${age * 365}
        Через 5 лет вам будет:  ${Number(age) + 5}
        Ваш пол: ${gender}
        Вы на песнии:  ${pension}
    `
)