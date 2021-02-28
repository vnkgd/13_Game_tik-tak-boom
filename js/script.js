
//фукнция, которая сработает при загрузке страницы
window.onload = function()
{
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),//
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        // VAL добавил 2 ответа
        document.getElementById('answer3'),
        document.getElementById('answer4'),
    )
    tikTakBoom.run();
}



