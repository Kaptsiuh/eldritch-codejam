const ancientsData = [
    { firstStage: {blueCards: 1, brownCards: 2, greenCards: 1,},
      secondStage: {blueCards: 1, brownCards: 3, greenCards: 2,},
      thirdStage: {blueCards: 0, brownCards: 4, greenCards: 2, },
    },
    { firstStage: {blueCards: 2, brownCards: 2, greenCards: 0,},
      secondStage: {blueCards: 0, brownCards: 3, greenCards: 1,},
      thirdStage: {blueCards: 0, brownCards: 4, greenCards: 3,},
    },
    { firstStage: {blueCards: 1, brownCards: 2, greenCards: 0,},
      secondStage: {blueCards: 1, brownCards: 3, greenCards: 2,},
      thirdStage: {blueCards: 0, brownCards: 4, greenCards: 3,},
    },
    {firstStage: {blueCards: 1, brownCards: 2, greenCards: 1,},
      secondStage: {blueCards: 1, brownCards: 2, greenCards: 3,},
      thirdStage: {blueCards: 0, brownCards: 4, greenCards: 2,},
    },
  ]

  const blue = [
    './assets/MythicCards/blue/blue1.png', // шупальцы
    './assets/MythicCards/blue/blue2.png', // шупальцы
    './assets/MythicCards/blue/blue3.png', // снежинки
    './assets/MythicCards/blue/blue4.png', // снежинки
    './assets/MythicCards/blue/blue5.png', // снежинки
    './assets/MythicCards/blue/blue6.png', // шупальцы
    './assets/MythicCards/blue/blue7.png', // обычная
    './assets/MythicCards/blue/blue8.png', // шупальцы
    './assets/MythicCards/blue/blue9.png', // обычная
    './assets/MythicCards/blue/blue10.png', // снежинки
    './assets/MythicCards/blue/blue11.png', // обычная
    './assets/MythicCards/blue/blue12.png' // обычная
  ]

  const blueSlave = [blue[2], blue[3], blue[4], blue[9]];
  const blueEasy = [blue[2], blue[3], blue[4], blue[6], blue[8], blue[9], blue[10], blue[11]];
  const blueHard = [blue[0], blue[1], blue[5], blue[6], blue[7], blue[8], blue[10], blue[11]];
  const blueDungeonMaster = [blue[0], blue[1], blue[5], blue[7]];

  const brown = [
    './assets/MythicCards/brown/brown1.png', // обычная
    './assets/MythicCards/brown/brown2.png', // обычная
    './assets/MythicCards/brown/brown3.png', // обычная
    './assets/MythicCards/brown/brown4.png', // обычная
    './assets/MythicCards/brown/brown5.png', // обычная
    './assets/MythicCards/brown/brown6.png', // шупальцы
    './assets/MythicCards/brown/brown7.png', // шупальцы
    './assets/MythicCards/brown/brown8.png', // шупальцы
    './assets/MythicCards/brown/brown9.png', // шупальцы
    './assets/MythicCards/brown/brown10.png', // шупальцы
    './assets/MythicCards/brown/brown11.png', // снежинки
    './assets/MythicCards/brown/brown12.png', // снежинки
    './assets/MythicCards/brown/brown13.png', // снежинки
    './assets/MythicCards/brown/brown14.png', // снежинки
    './assets/MythicCards/brown/brown15.png', // обычная
    './assets/MythicCards/brown/brown16.png', // обычная
    './assets/MythicCards/brown/brown17.png', // обычная
    './assets/MythicCards/brown/brown18.png', // обычная
    './assets/MythicCards/brown/brown19.png', // обычная
    './assets/MythicCards/brown/brown20.png', // обычная
    './assets/MythicCards/brown/brown21.png' // снежинки
  ]

  const brownUsual = [brown[0], brown[1], brown[2], brown[3], brown[4], brown[14], brown[15], brown[16], brown[17], brown[18], brown[19]]
  const brownSlave = [brown[10], brown[11], brown[12], brown[13], brown[20]]; //добавить 4 простых
  const brownEasy = [brown[0], brown[1], brown[2], brown[3], brown[4], brown[10], brown[11], brown[12], brown[13], brown[14], brown[15], brown[16], brown[17], brown[18], brown[19], brown[20]];
  const brownHard = [brown[0], brown[1], brown[2], brown[3], brown[4], brown[5], brown[6], brown[7], brown[8], brown[9], brown[14], brown[15], brown[16], brown[17], brown[18], brown[19]];
  const brownDungeonMaster = [brown[5], brown[6], brown[7], brown[8], brown[9]]; //добавить 4 простых
//   brownSlave.unshift(brown[1], brown[3], brown[14], brown[16]);
//   brownDungeonMaster.unshift(brown[0], brown[2], brown[4], brown[15]);

  const green = [
    './assets/MythicCards/green/green1.png', // снежинки
    './assets/MythicCards/green/green2.png', // шупальцы
    './assets/MythicCards/green/green3.png', // шупальцы
    './assets/MythicCards/green/green4.png', // шупальцы
    './assets/MythicCards/green/green5.png', // шупальцы
    './assets/MythicCards/green/green6.png', // шупальцы
    './assets/MythicCards/green/green7.png', // обычная
    './assets/MythicCards/green/green8.png', // обычная
    './assets/MythicCards/green/green9.png', // обычная
    './assets/MythicCards/green/green10.png', // обычная
    './assets/MythicCards/green/green11.png', // обычная
    './assets/MythicCards/green/green12.png', // снежинки
    './assets/MythicCards/green/green13.png', // обычная
    './assets/MythicCards/green/green14.png', // обычная
    './assets/MythicCards/green/green15.png', // обычная
    './assets/MythicCards/green/green16.png', // снежинки
    './assets/MythicCards/green/green17.png', // снежинки
    './assets/MythicCards/green/green18.png' // снежинки
  ]

  const greenUsual = [green[6], green[7], green[8], green[9], green[12], green[13], green[14]];
  const greenSlave = [green[0], green[11], green[15], green[16], green[17]]; //добавить 1 обычную
  const greenEasy = [green[0], green[6], green[7], green[8], green[9], green[10], green[11], green[12], green[13], green[14], green[15], green[16], green[17]];
  const greenHard = [green[1], green[2], green[3], green[4], green[5], green[6], green[7], green[8], green[9], green[10], green[12], green[13], green[14]];
  const greenDungeonMaster = [green[1], green[2], green[3], green[4], green[5]]; //добавить 1 обычную
//   greenSlave.unshift(green[6]);
//   greenDungeonMaster.unshift(green[7]);
  
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const ancient = document.querySelectorAll('.ancient'); //карты древних
const antients = document.querySelector('.ancients'); //родительский элемент карт древних
const level = document.querySelectorAll('.level'); //уровни сложности
const levels = document.querySelector('.levels'); //Родительский элемент уровней сложности
const image = document.querySelectorAll('.image'); //картинки древних
const newCard = document.querySelector('.new-card');
const lastCardVisible = document.querySelector('.last-card-visible');
let firstStage = [];
let secondStage = [];
let thirdStage = [];
const imageCard = document.createElement('img');
let blueNum = [];
let brownNum = [];
let greenNum = [];
let levelNamber;
let antientNamber;

antients.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        for(let i = 0; i < ancient.length; i++) {
            if (image[i].classList[1] === 'active') {
                for(let j = 0; j < ancient.length; j++) {
                    image[j].classList.remove('active');  // при клике по древнему снимает класс со всех древних
                }
            }
        }
        e.target.classList.toggle('active'); //вешает стиль при нажатии на древнего
        for(let i = 0; i < ancient.length; i++) {
            if (image[i].classList[1] === 'active') {
                firstStage = Object.values(ancientsData[i].firstStage); //создаём массив для первого этапа
                secondStage = Object.values(ancientsData[i].secondStage); //создаём массив для второго этапа
                thirdStage = Object.values(ancientsData[i].thirdStage); //создаём массив для третьего этапа
                antientNamber = i; // номер древнего
            }
        }
    }
})

levels.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        for(let i = 0; i < level.length; i++) {
            if (level[i].classList[1] === 'active') {
                for(let j = 0; j < level.length; j++) {
                    level[j].classList.remove('active');  // при клике по уровню сложности снимает все стили
                }
            }
        }
        e.target.classList.toggle('active'); //вешает стиль при нажатии на уровень сложности
        for(let i = 0; i < level.length; i++) {
            if (level[i].classList[1] === 'active') {
                levelNamber = i; //получаем порядковый номер уровня сложности
            }
        }
    }

    if (levelNamber === 2) {
        let from = 0, to = 11, n = 11;
        blueNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности синих карт
        to = 20, n = 20;
        brownNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности коричневых карт
        to = 17, n = 17;
        greenNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности зелёных карт
    } else if (levelNamber === 1) {
        let from = 0, to = 7, n = 7;
        blueNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности синих карт
        to = 15, n = 15;
        brownNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности коричневых карт
        to = 12, n = 12;
        greenNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности зелёных карт
    } else if (levelNamber === 3) {
        let from = 0, to = 7, n = 7;
        blueNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности синих карт
        to = 15, n = 15;
        brownNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности коричневых карт
        to = 12, n = 12;
        greenNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности зелёных карт
    } else if (levelNamber === 0 || levelNamber === 4) {
        let from = 0, to = 3, n = 3;
        blueNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности синих карт
        to = 5, n = 5;
        brownNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности коричневых карт
        to = 4, n = 4;
        greenNum = [...Array(to - from + 1).keys()].map(i => i + from) 
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) 
        .slice(0, n); // создаём массив очередности зелёных карт
    } 
})

newCard.addEventListener('click', () => {
    let color; //рандомное число цвета карты
        if (levelNamber === 2) {
            color = Math.floor(Math.random() * 3);
                for (let i = 0; i < 3; i++) {
                    if (firstStage[color] === 0) {
                        if (color < 2) {
                            color += 1;
                        } else {
                            color = 0;
                        }
                    }
                    if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                        for(let j = 0; j < 3; j++) {
                            if (secondStage[color] === 0) {
                                if (color < 2) {
                                    color += 1;
                                } else {
                                    color = 0;
                                }
                            } 
                            if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                for(let j = 0; j < 3; j++) {
                                    if (thirdStage[color] === 0) {
                                        if (color < 2) {
                                            color += 1;
                                        } else {
                                            color = 0;
                                        }
                                    } 
                                    
                                }
                            }
                        }
                    }
                }
                if (color === 0) {
                    if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                        console.log('finish');
                    } else {
                        imageCard.src = blue[blueNum[blueNum.length - 1]];
                        blueNum.pop();
                        lastCardVisible.appendChild(imageCard);
                        if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                            if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                    thirdStage[0] = thirdStage[0] - 1
                                } else {
                                    secondStage[0] = secondStage[0] - 1;
                                }
                        } else {
                            firstStage[0] = firstStage[0] - 1;  
                        }
                    }
                } else if (color === 1) {
                    if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                        console.log('finish');
                    } else {
                        imageCard.src = brown[brownNum[brownNum.length - 1]];
                        brownNum.pop();
                        lastCardVisible.appendChild(imageCard);
                        if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                            if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                thirdStage[1] = thirdStage[1] - 1
                            } else {
                                secondStage[1] = secondStage[1] - 1;
                            }
                        } else {
                            firstStage[1] = firstStage[1] - 1;  
                        }
                    }
                } else if (color === 2) {
                    if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                        console.log('finish');
                    } else {
                        imageCard.src = green[greenNum[greenNum.length - 1]];
                        greenNum.pop();
                        lastCardVisible.appendChild(imageCard);
                        if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                            if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                thirdStage[2] = thirdStage[2] - 1
                            } else {
                                secondStage[2] = secondStage[2] - 1;
                            }
                        } else {
                            firstStage[2] = firstStage[2] - 1;  
                        }
                    }
                }
            }

            if (levelNamber === 1) {
                color = Math.floor(Math.random() * 3);
                    for (let i = 0; i < 3; i++) {
                        if (firstStage[color] === 0) {
                            if (color < 2) {
                                color += 1;
                            } else {
                                color = 0;
                            }
                        }
                        if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                            for(let j = 0; j < 3; j++) {
                                if (secondStage[color] === 0) {
                                    if (color < 2) {
                                        color += 1;
                                    } else {
                                        color = 0;
                                    }
                                } 
                                if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                    for(let j = 0; j < 3; j++) {
                                        if (thirdStage[color] === 0) {
                                            if (color < 2) {
                                                color += 1;
                                            } else {
                                                color = 0;
                                            }
                                        } 
                                        
                                    }
                                }
                            }
                        }
                    }
                    if (color === 0) {
                        if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                            console.log('finish');
                        } else {
                            imageCard.src = blueEasy[blueNum[blueNum.length - 1]];
                            blueNum.pop();
                            lastCardVisible.appendChild(imageCard);
                            if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                        thirdStage[0] = thirdStage[0] - 1
                                    } else {
                                        secondStage[0] = secondStage[0] - 1;
                                    }
                            } else {
                                firstStage[0] = firstStage[0] - 1;  
                            }
                        }
                    } else if (color === 1) {
                        if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                            console.log('finish');
                        } else {
                            imageCard.src = brownEasy[brownNum[brownNum.length - 1]];
                            brownNum.pop();
                            lastCardVisible.appendChild(imageCard);
                            if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                    thirdStage[1] = thirdStage[1] - 1
                                } else {
                                    secondStage[1] = secondStage[1] - 1;
                                }
                            } else {
                                firstStage[1] = firstStage[1] - 1;  
                            }
                        }
                    } else if (color === 2) {
                        if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                            console.log('finish');
                        } else {
                            imageCard.src = greenEasy[greenNum[greenNum.length - 1]];
                            greenNum.pop();
                            lastCardVisible.appendChild(imageCard);
                            if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                    thirdStage[2] = thirdStage[2] - 1
                                } else {
                                    secondStage[2] = secondStage[2] - 1;
                                }
                            } else {
                                firstStage[2] = firstStage[2] - 1;  
                            }
                        }
                    }
                }

                if (levelNamber === 3) {
                    color = Math.floor(Math.random() * 3);
                        for (let i = 0; i < 3; i++) {
                            if (firstStage[color] === 0) {
                                if (color < 2) {
                                    color += 1;
                                } else {
                                    color = 0;
                                }
                            }
                            if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                for(let j = 0; j < 3; j++) {
                                    if (secondStage[color] === 0) {
                                        if (color < 2) {
                                            color += 1;
                                        } else {
                                            color = 0;
                                        }
                                    } 
                                    if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                        for(let j = 0; j < 3; j++) {
                                            if (thirdStage[color] === 0) {
                                                if (color < 2) {
                                                    color += 1;
                                                } else {
                                                    color = 0;
                                                }
                                            } 
                                            
                                        }
                                    }
                                }
                            }
                        }
                        if (color === 0) {
                            if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                                console.log('finish');
                            } else {
                                imageCard.src = blueHard[blueNum[blueNum.length - 1]];
                                blueNum.pop();
                                lastCardVisible.appendChild(imageCard);
                                if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                    if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                            thirdStage[0] = thirdStage[0] - 1
                                        } else {
                                            secondStage[0] = secondStage[0] - 1;
                                        }
                                } else {
                                    firstStage[0] = firstStage[0] - 1;  
                                }
                            }
                        } else if (color === 1) {
                            if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                                console.log('finish');
                            } else {
                                imageCard.src = brownHard[brownNum[brownNum.length - 1]];
                                brownNum.pop();
                                lastCardVisible.appendChild(imageCard);
                                if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                    if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                        thirdStage[1] = thirdStage[1] - 1
                                    } else {
                                        secondStage[1] = secondStage[1] - 1;
                                    }
                                } else {
                                    firstStage[1] = firstStage[1] - 1;  
                                }
                            }
                        } else if (color === 2) {
                            if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                                console.log('finish');
                            } else {
                                imageCard.src = greenHard[greenNum[greenNum.length - 1]];
                                greenNum.pop();
                                lastCardVisible.appendChild(imageCard);
                                if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                    if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                        thirdStage[2] = thirdStage[2] - 1
                                    } else {
                                        secondStage[2] = secondStage[2] - 1;
                                    }
                                } else {
                                    firstStage[2] = firstStage[2] - 1;  
                                }
                            }
                        }
                    }

                    if (levelNamber === 0) {
                        color = Math.floor(Math.random() * 3);
                            for (let i = 0; i < 3; i++) {
                                if (firstStage[color] === 0) {
                                    if (color < 2) {
                                        color += 1;
                                    } else {
                                        color = 0;
                                    }
                                }
                                if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                    for(let j = 0; j < 3; j++) {
                                        if (secondStage[color] === 0) {
                                            if (color < 2) {
                                                color += 1;
                                            } else {
                                                color = 0;
                                            }
                                        } 
                                        if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                            for(let j = 0; j < 3; j++) {
                                                if (thirdStage[color] === 0) {
                                                    if (color < 2) {
                                                        color += 1;
                                                    } else {
                                                        color = 0;
                                                    }
                                                } 
                                                
                                            }
                                        }
                                    }
                                }
                            }

                            if (brownNum.length === 1) {
                                brownSlave.unshift(brown[1], brown[3], brown[14], brown[16]);
                                brownNum.push(0, 1, 2, 3);
                            }
                            if (brownNum.length === 1) {
                                greenSlave.unshift(green[6]);
                                brownNum.push(0);
                            }
                            if (brownNum.length === 1) {
                                brownDungeonMaster.unshift(brown[0], brown[2], brown[4], brown[15]);
                                brownNum.push(0, 1, 2, 3);
                            }
                            if (brownNum.length === 1) {
                                greenDungeonMaster.unshift(green[7]);
                                brownNum.push(0);
                            }

                            if (color === 0) {
                                if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                                    console.log('finish');
                                } else {
                                    imageCard.src = blueSlave[blueNum[blueNum.length - 1]];
                                    blueNum.pop();
                                    lastCardVisible.appendChild(imageCard);
                                    if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                        if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                                thirdStage[0] = thirdStage[0] - 1
                                            } else {
                                                secondStage[0] = secondStage[0] - 1;
                                            }
                                    } else {
                                        firstStage[0] = firstStage[0] - 1;  
                                    }
                                }
                            } else if (color === 1) {
                                if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                                    console.log('finish');
                                } else {
                                    imageCard.src = brownSlave[brownNum[brownNum.length - 1]];
                                    brownNum.pop();
                                    lastCardVisible.appendChild(imageCard);
                                    if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                        if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                            thirdStage[1] = thirdStage[1] - 1
                                        } else {
                                            secondStage[1] = secondStage[1] - 1;
                                        }
                                    } else {
                                        firstStage[1] = firstStage[1] - 1;  
                                    }
                                }
                            } else if (color === 2) {
                                if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                                    console.log('finish');
                                } else {
                                    imageCard.src = greenSlave[greenNum[greenNum.length - 1]];
                                    greenNum.pop();
                                    lastCardVisible.appendChild(imageCard);
                                    if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                        if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                            thirdStage[2] = thirdStage[2] - 1
                                        } else {
                                            secondStage[2] = secondStage[2] - 1;
                                        }
                                    } else {
                                        firstStage[2] = firstStage[2] - 1;  
                                    }
                                }
                            }
                        }

                        if (levelNamber === 4) {
                            color = Math.floor(Math.random() * 3);
                                for (let i = 0; i < 3; i++) {
                                    if (firstStage[color] === 0) {
                                        if (color < 2) {
                                            color += 1;
                                        } else {
                                            color = 0;
                                        }
                                    }
                                    if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                        for(let j = 0; j < 3; j++) {
                                            if (secondStage[color] === 0) {
                                                if (color < 2) {
                                                    color += 1;
                                                } else {
                                                    color = 0;
                                                }
                                            } 
                                            if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                                for(let j = 0; j < 3; j++) {
                                                    if (thirdStage[color] === 0) {
                                                        if (color < 2) {
                                                            color += 1;
                                                        } else {
                                                            color = 0;
                                                        }
                                                    } 
                                                    
                                                }
                                            }
                                        }
                                    }
                                }
    
                                if (brownNum.length === 1) {
                                    brownDungeonMaster.unshift(brown[0], brown[2], brown[4], brown[15]);
                                    brownNum.push(0, 1, 2, 3);
                                }
                                if (brownNum.length === 1) {
                                    greenDungeonMaster.unshift(green[7]);
                                    brownNum.push(0);
                                }
                                if (brownNum.length === 1) {
                                    brownSlave.unshift(brown[1], brown[3], brown[14], brown[16]);
                                    brownNum.push(0, 1, 2, 3);
                                }
                                if (brownNum.length === 1) {
                                    greenSlave.unshift(green[6]);
                                    brownNum.push(0);
                                }
    
                                if (color === 0) {
                                    if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                                        console.log('finish');
                                    } else {
                                        imageCard.src = blueDungeonMaster[blueNum[blueNum.length - 1]];
                                        blueNum.pop();
                                        lastCardVisible.appendChild(imageCard);
                                        if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                            if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                                    thirdStage[0] = thirdStage[0] - 1
                                                } else {
                                                    secondStage[0] = secondStage[0] - 1;
                                                }
                                        } else {
                                            firstStage[0] = firstStage[0] - 1;  
                                        }
                                    }
                                } else if (color === 1) {
                                    if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                                        console.log('finish');
                                    } else {
                                        imageCard.src = brownDungeonMaster[brownNum[brownNum.length - 1]];
                                        brownNum.pop();
                                        lastCardVisible.appendChild(imageCard);
                                        if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                            if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                                thirdStage[1] = thirdStage[1] - 1
                                            } else {
                                                secondStage[1] = secondStage[1] - 1;
                                            }
                                        } else {
                                            firstStage[1] = firstStage[1] - 1;  
                                        }
                                    }
                                } else if (color === 2) {
                                    if (thirdStage[0] === 0 && thirdStage[1] === 0 && thirdStage[2] === 0) {
                                        console.log('finish');
                                    } else {
                                        imageCard.src = greenDungeonMaster[greenNum[greenNum.length - 1]];
                                        greenNum.pop();
                                        lastCardVisible.appendChild(imageCard);
                                        if (firstStage[0] === 0 && firstStage[1] === 0 && firstStage[2] === 0) {
                                            if (secondStage[0] === 0 && secondStage[1] === 0 && secondStage[2] === 0) {
                                                thirdStage[2] = thirdStage[2] - 1
                                            } else {
                                                secondStage[2] = secondStage[2] - 1;
                                            }
                                        } else {
                                            firstStage[2] = firstStage[2] - 1;  
                                        }
                                    }
                                }
                            }

                one.innerText = `${firstStage[0]}`;
                two.innerText = `${firstStage[1]}`;
                three.innerText = `${firstStage[2]}`;
                four.innerText = `${secondStage[0]}`;
                five.innerText = `${secondStage[1]}`;
                six.innerText = `${secondStage[2]}`;
                seven.innerText = `${thirdStage[0]}`;
                eight.innerText = `${thirdStage[1]}`;
                nine.innerText = `${thirdStage[2]}`;
    } 
)