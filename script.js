const student = "Жуков Кирилл Николаевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
const err = 0.2;

function throwRandomError(chance){
    let max = 1;
    random = Math.random(max).toFixed(1)
    alert(`Выпало число ${random}`)
    if(chance >= random){
        throw new Error('Что-то пошло не так :/ Попробуйте нажать F5')
    }
}

try{
    throwRandomError(err)
    alert('Всё под контролем')
} 
catch (err){
    alert(`Ошибка. Текст ошибки: ${err.message}`)
}