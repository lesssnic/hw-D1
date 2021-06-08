



function validateInn(){

let inn = innCode.value;

let birthdayPart = +inn.slice(0, 5);

let k = 0;

for (i = 0; i < inn.length - 1; i++){

    let control = [-1, 5, 7, 9, 4, 6, 10 , 5, 7];

    k += +inn[i] * control[i];
}

let kn = (k%11)%10;

let sex = 0;

let valid = 0;

let ms = birthdayPart * 86400000 - 2209075200000;

let birthday = new Date(ms);

if (kn == +inn[inn.length-1]){
    valid = 'Код валиден';
    if (+inn[inn.length-2]%2 == 1){
        sex = 'Мужчина';
    }else sex = 'Женщина';
    resultValidation.innerHTML = `<tr><th>${inn}</th><th>${valid}</th><th>${sex}</th><th>${birthday}</th></tr>`;
}else resultValidation.innerHTML = `<tr><th>${inn}</th><th>Ошибка в коде</th><th></th><th></th></tr>`;



    
}

