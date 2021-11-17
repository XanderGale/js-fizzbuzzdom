const container = document.querySelector('.container');
console.log(container);

for (let i = 0; i <= 100; i++) {
    console.log(i);

    const boxNumber = `<div class="box number">${i}</div>`;
    const boxFizz = `<div class="box fizz">Fizz</div>`;
    const boxBuzz = `<div class="box buzz">Buzz</div>`;
    const boxFizzBuzz = `<div class="box fizzbuzz">FizzBuzz</div>`;

    if (i % 3 === 0 && i % 5 === 0) {

        container.innerHTML += boxFizzBuzz;

    } else if (i % 5 === 0) {

        container.innerHTML += boxBuzz;

    } else if (i % 3 === 0){

        container.innerHTML += boxFizz;

    } else {

        container.innerHTML += boxNumber;

    }
}