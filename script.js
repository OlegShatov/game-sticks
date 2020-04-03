alert("Игра \"Палочки\". На игровом поле перед Вами находятся двадцать деревянных палочек. " +
  "Каждый игрок, по очереди, берёт одну, две или три палочки. " +
  "Взявший последнюю палочку проигрывает");
let n = 0, //счётчик палочек при осуществлении хода
    gameover = false; // метка окончания игры

/* ставим лисенеры на события клик всех 20 палочек */
st1.addEventListener("click", function(event) {
  if (n < 3 || st1.className == 'stick active') {
    st1.classList.toggle('active');
    if (st1.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st2.addEventListener("click", function(event) {
  if (n < 3 || st2.className == 'stick active') {
    st2.classList.toggle('active');
    if (st2.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st3.addEventListener("click", function(event) {
  if (n < 3 || st3.className == 'stick active') {
    st3.classList.toggle('active');
    if (st3.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st4.addEventListener("click", function(event) {
  if (n < 3 || st4.className == 'stick active') {
    st4.classList.toggle('active');
    if (st4.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st5.addEventListener("click", function(event) {
  if (n < 3 || st5.className == 'stick active') {
    st5.classList.toggle('active');
    if (st5.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st6.addEventListener("click", function(event) {
  if (n < 3 || st6.className == 'stick active') {
    st6.classList.toggle('active');
    if (st6.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st7.addEventListener("click", function(event) {
  if (n < 3 || st7.className == 'stick active') {
    st7.classList.toggle('active');
    if (st7.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st8.addEventListener("click", function(event) {
  if (n < 3 || st8.className == 'stick active') {
    st8.classList.toggle('active');
    if (st8.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st9.addEventListener("click", function(event) {
  if (n < 3 || st9.className == 'stick active') {
    st9.classList.toggle('active');
    if (st9.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st10.addEventListener("click", function(event) {
  if (n < 3 || st10.className == 'stick active') {
    st10.classList.toggle('active');
    if (st10.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st11.addEventListener("click", function(event) {
  if (n < 3 || st11.className == 'stick active') {
    st11.classList.toggle('active');
    if (st11.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st12.addEventListener("click", function(event) {
  if (n < 3 || st12.className == 'stick active') {
    st12.classList.toggle('active');
    if (st12.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st13.addEventListener("click", function(event) {
  if (n < 3 || st13.className == 'stick active') {
    st13.classList.toggle('active');
    if (st13.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st14.addEventListener("click", function(event) {
  if (n < 3 || st14.className == 'stick active') {
    st14.classList.toggle('active');
    if (st14.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st15.addEventListener("click", function(event) {
  if (n < 3 || st15.className == 'stick active') {
    st15.classList.toggle('active');
    if (st15.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st16.addEventListener("click", function(event) {
  if (n < 3 || st16.className == 'stick active') {
    st16.classList.toggle('active');
    if (st16.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st17.addEventListener("click", function(event) {
  if (n < 3 || st17.className == 'stick active') {
    st17.classList.toggle('active');
    if (st17.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st18.addEventListener("click", function(event) {
  if (n < 3 || st18.className == 'stick active') {
    st18.classList.toggle('active');
    if (st18.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st19.addEventListener("click", function(event) {
  if (n < 3 || st19.className == 'stick active') {
    st19.classList.toggle('active');
    if (st19.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});
st20.addEventListener("click", function(event) {
  if (n < 3 || st20.className == 'stick active') {
    st20.classList.toggle('active');
    if (st20.className == 'stick active') {  
      n++; // если палочка выбрана, то счётчик увеличивается на +1
    } else {
      n--; 
    };
  }
});

/* обработчик события на кнопке Ок */
ok.addEventListener("click", function(event) {
  ok.style.visibility = 'hidden'; // кнопка становится невидимой
  
  let delSticks = document.querySelectorAll('.active'); // определение выбранных палочек
  for (let stick of delSticks) {
    stick.classList.add('shifted'); // выбранные палочки удаляются из игры
  };
  //n = 0; // обнуляем счётчик
  setTimeout(computerStep, 1000); // спустя секунду оппонент делает ход
  
});
 
/* функция вычисления хода оппонента */
  function computerStep() {
    
      jQuery(document).ready(function($){ 
        let sticks = $('div[class$=stick]'); // вычисляем, сколько палочек осталось
      
        switch (sticks.length) { // выбор количества палочек оппонента
          case 18: n = 1; break;
          case 16: n = 3; break;
          case 15: n = 2; break;
          case 14: n = 1; break;
          case 8: n = 3; break;
          case 7: n = 2; break;
          case 6: n = 1; break;
          case 4: {
            n = 3; 
            setTimeout(() => alert("Вы проиграли"), 1000); 
            gameover = true;
            break
          };
          case 3: {
            n = 2; 
            setTimeout(() => alert("Вы проиграли"), 1000);
            gameover = true;
            break
          };
          case 2: {
            n = 1; 
            setTimeout(() => alert("Вы проиграли"), 1000);
            gameover = true;
          break
          };
          case 1: {
            alert("Поздравляем! Вы выиграли");
            gameover = true;
            break
          };
          default: n = randomInteger(1, 3); // генерируем, сколько палочек возьмёт оппонент
        };
        if (sticks.length > 1) { // оппонент совершит ход, только если палочек >1
          for (let i = 0; i < n; i++) { 
            jQuery(document).ready(function($){ // определяем какие именно палочки в доступности, чтобы 
              let sticks = $('div[class$=stick]'); // не было совпадений 2 шага на одну и ту же палочку
              stickNumber = randomInteger(0, (sticks.length - 1)); // генерируем, какую именно палочку оппонент выберет
              sticks[stickNumber].classList.add('active');
              sticks[stickNumber].classList.add('shifted');
            });
          }
        }; 
        n = 0;
        if (gameover === false) {
          ok.style.visibility = 'visible';
        }
      });
    
  };

  /* функция-генератор случайных чисел */
  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }


/* обработчик события на кнопке Start again */
start_again.addEventListener("click", function(event) {
  let sticks = document.querySelectorAll('.stick'); // все палочки возвращаем к начальному состоянию
  for (let stick of sticks) {
    stick.classList.remove('shifted');
    stick.classList.remove('active');
  };
  /* приводим все переменные к первоначальному значению */
  n = 0;
  gameover = false;
  ok.style.visibility = 'visible';
});