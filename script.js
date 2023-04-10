/*
Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу: 
- если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"` ;
- в противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`;
- в противном случае, если меньше часа, вывести `"m мин. назад"`;
- в противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`. 

*/

function formatDate(date){
    let now = new Date;
    let fullYear = `${now.getFullYear()}`;
    let year = fullYear.substring(2);
    let hours = `${now.getHours()}`.length > 1 ? now.getHours() : '0' + now.getHours();
    let nowDate = `${now.getDate()}`.length > 1 ? now.getDate() : '0' + now.getDate();
    let minutes = `${now.getMinutes()}`.length > 1 ? now.getMinutes() : '0' + now.getMinutes();
    let month = `${now.getMonth()}`.length > 1 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);

    let numNow = +now;
    let numDate = +date;
    if((numNow - numDate) / 1000 < 1) console.log('прямо сейчас');
    else if((numNow - numDate) / 1000 / 60 < 1) console.log(`${Math.floor((numNow - numDate) / 1000)} сек. назад`);
    else if((numNow - numDate) / 1000 / 60 / 60 < 1) console.log(`${Math.floor((numNow - numDate) / 1000 / 60)} мин. назад`);
    else console.log(`${nowDate}.${month}.${year}  ${hours}:${minutes}`);
}