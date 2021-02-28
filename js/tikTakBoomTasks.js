const tasks = `

    [
        {
            "question": "Какой тэг HTML формирует параграф?",
            "answer1": { "result": false, "value": "<br>" },
            "answer2": { "result": false, "value": "<b>" },
            "answer3": { "result": true, "value": "<p>" },
            "answer4": { "result": false, "value": "<par>" }
        },
        {
            "question": "Какой тэг HTML формирует цитату?",
            "answer1": { "result": false, "value": "<p>" },
            "answer2": { "result": true, "value": "<q>" },
            "answer3": { "result": false, "value": "<c>" },
            "answer4": { "result": false, "value": "<b>" }
        },
        {
            "question": "Где свойство padding в CSS устанавливает отступы?",
            "answer2": { "result": false, "value": "снаружи" },
            "answer3": { "result": false, "value": "слева" },
            "answer1": { "result": true, "value": "внутри" },
            "answer4": { "result": false, "value": "справа" }
        },
        {
            "question": "Где свойство margin в CSS устанавливает отступы?",
            "answer1": { "result": false, "value": "справа" },
            "answer2": { "result": false, "value": "внутри" },
            "answer3": { "result": false, "value": "слева" },
            "answer4": { "result": true, "value": "снаружи" }
        },
        {
            "question": "Каким знаком в CSS обозначается псевдокласс?",
            "answer1": { "result": false, "value": "#" },
            "answer2": { "result": true, "value": ":" },
            "answer3": { "result": false, "value": "." },
            "answer4": { "result": false, "value": "::" }
        },
        {
            "question": "Каким знаком в CSS обозначается псевдоэлементы?",
            "answer1": { "result": true, "value": "::" },
            "answer2": { "result": false, "value": "#" },
            "answer3": { "result": false, "value": "." },
            "answer4": { "result": false, "value": ":" }
        },
        {
            "question": "Что определяет псевдокласс hover в CSS? Стиль элемента при ... курсора",
            "answer1": { "result": false, "value": "отведении от него" },
            "answer2": { "result": false, "value": "ажатии на него" },
            "answer3": { "result": true, "value": "наведении на него" },
            "answer4": { "result": false, "value": "задержке на нём" }
        },
        {
            "question": "Каким знаком в CSS обозначается класс?",
            "answer1": { "result": false, "value": "::" },
            "answer2": { "result": false, "value": "#" },
            "answer3": { "result": false, "value": ":" },
            "answer4": { "result": true, "value": "." }
        },
        {
            "question": "Каким знаком в CSS обозначается id?",
            "answer1": { "result": false, "value": "." },
            "answer2": { "result": true, "value": "#" },
            "answer3": { "result": false, "value": ":" },
            "answer4": { "result": false, "value": "::" }
        },
        {
            "question": "Как вывести предупреждение (всплывающее окно)?",
            "answer1": { "result": false, "value": "aler();" },
            "answer2": { "result": false, "value": "promt();" },
            "answer3": { "result": true, "value": "alert();" },
            "answer4": { "result": false, "value": "alarm();" }
        },
        {
            "question": "Как вывести диалоговое окно с запросом на ввод текста?",
            "answer1": { "result": false, "value": "alarm();" },
            "answer2": { "result": false, "value": "alert();" },
            "answer3": { "result": false, "value": "aler();" },
            "answer4": { "result": true, "value": "promt();" }
        },
        {
            "question": "Как правильнее найти элемент на странице по id",
            "answer1": { "result": true, "value": "document.querySelector('#')" },
            "answer2": { "result": false, "value": "document.getElementById()" },
            "answer3": { "result": false, "value": "addEventListener('#')" },
            "answer4": { "result": false, "value": "document.idSelector('id')" }
        }
    ]
`;
