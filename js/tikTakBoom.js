tikTakBoom = {
    init(
        tasks,
        timerField,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        //Val - добавил ещё 2 ответа 
        textFieldAnswer3,
        textFieldAnswer4

    ) {
        this.boomTimer = 30;
        this.countOfPlayers = 2;
        this.tasks = JSON.parse(tasks);

        this.timerField = timerField;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        // Val - добавил ещё 2 ответа
        this.textFieldAnswer3 = textFieldAnswer3;
        this.textFieldAnswer4 = textFieldAnswer4;

        this.needRightAnswers = 3;
    },

    // начало игры, обнуляем количество правильных ответов и выдаём надпись
    run() {
        this.state = 1;

        this.rightAnswers = 0;

        this.turnOn();

        this.timer();
    },

    // надписи сверху Игра началась (это в index.html), вопрос к игроку Вы проиграли
    turnOn() {
        this.gameStatusField.innerText += ` Вопрос игроку №${this.state}`;

        const taskNumber = randomIntNumber(this.tasks.length - 1);
        this.printQuestion(this.tasks[taskNumber]);

        this.tasks.splice(taskNumber, 1);

        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
    },

    turnOff(value) {
        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!';
            this.rightAnswers += 1;
        } else {
            this.gameStatusField.innerText = 'Неверно!';
        }
        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
            } else {
                this.turnOn();
            }
        } else {
            this.finish('won');
        }

        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
        // Val - добавил ещё 2 ответа
        this.textFieldAnswer3.removeEventListener('click', answer3);
        this.textFieldAnswer4.removeEventListener('click', answer4);
    },

    printQuestion(task) {
        this.textFieldQuestion.innerText = task.question;
        this.textFieldAnswer1.innerText = task.answer1.value;
        this.textFieldAnswer2.innerText = task.answer2.value;
        // Val - добавил ещё 2 ответа
        this.textFieldAnswer3.innerText = task.answer3.value;
        this.textFieldAnswer4.innerText = task.answer4.value;

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff('answer1'));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff('answer2'));
        // Val - добавил ещё 2 ответа
        this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff('answer3'));
        this.textFieldAnswer4.addEventListener('click', answer4 = () => this.turnOff('answer4'));


        this.currentTask = task;
    },

    // если время вышло, выходит это окно, или когда выиграли, и Вопрос с ответами стираются
    finish(result = 'lose') {
        this.state = 0;
        if (result === 'lose') {
            this.gameStatusField.innerText = `Вы проиграли!`;
        }
        if (result === 'won') {
            this.gameStatusField.innerText = `Вы выиграли!`;
        }

        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        // Val - добавил ещё 2 ответа
        this.textFieldAnswer3.innerText = ``;
        this.textFieldAnswer4.innerText = ``;


        console.log(this);
    },

    timer() {
        if (this.state) {
            this.boomTimer -= 1;
            let sec = this.boomTimer % 60;
            let min = (this.boomTimer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;

            if (this.boomTimer > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose');
            }
        }
    },
}
