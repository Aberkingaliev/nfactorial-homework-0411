// 1 task - create User
// const User = {
//     name: prompt("Введите ваше имя"),
//     age: prompt("Сколько вам лет"),
//     gender: prompt("Какой у вас пол?"),
// }

// console.log(`Имя: ${User.name}, возраст: ${User.age}, пол: ${User.gender}`)

// 2 task - if..else, number, alert
// let Time = prompt() 
// let numTime = Number(Time) // преобразования в число
// if(numTime){
//     alert("Это число")
// } else{
//     alert("Это не число")
// }

// 3 task - перевести в swtich
// let a = +prompt('a?', '')
// switch (a) {
//     case 0: 
//         alert(0)
//         break;
//     case 1: 
//         alert(1)
//         break;
//     case 2 || 3: 
//         alert('2,3')
//         break;
//     default:
//         alert("У нас этого числа нету")
// }

// 4 task - сумма всех четных чисел 1-100
// let evenList = 0
// for(i=1; i<=100; i+=2){ // все нечетные числа 1-100
//     evenList += i-1 // отнимаем -1 чтобы они стали четными
// }
// console.log(evenList)

// 5 task - переписать на while
let i = 0
while(i<3){
    alert(`number ${i}!`) // сначала показываем i
    i+=1 // потом выполняем итерационный код, и заново сверху обновляем i
}