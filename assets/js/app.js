

function validateInn(inn = innCode.value){

let firstTimeStamp = new Date(1900, 0, 0).getTime();

let birthdayTimeStamp = (+inn.slice(0, 5)) * 86400000 + firstTimeStamp;

let novaTimeStamp = new Date().getTime();

let fullYears = (new Date(firstTimeStamp + (novaTimeStamp - birthdayTimeStamp)).getYear());

let birthday = `${(new Date(birthdayTimeStamp).getFullYear())}-${(new Date(birthdayTimeStamp).getMonth()+1)}-${(new Date(birthdayTimeStamp).getDate())}`;

let k = 0;

for (i = 0; i < inn.length - 1; i++){
    let control = [-1, 5, 7, 9, 4, 6, 10 , 5, 7];
    k += +inn[i] * control[i];
}

let kn = (k%11)%10;

let sex = 0;

let valid = 0;

if (kn == +inn[inn.length-1]){
    valid = 'Код валиден';
    if (+inn[inn.length-2]%2 == 1){
        sex = 'Мужчина';
    }else sex = 'Женщина';
    resultValidation.innerHTML = `<tr><th>${inn}</th><th>${valid}</th><th>${sex}</th><th>${birthday}</th><th>${fullYears}</th></tr>`;
}else resultValidation.innerHTML = `<tr><th>${inn}</th><th>Ошибка в коде</th><th></th><th></th><th></th></tr>`;
}

