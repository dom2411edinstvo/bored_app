document.querySelector(".js-btn").addEventListener("click", function () {
    fetch("https://api.adviceslip.com/advice")
        .then(data => data.json())
        .then(result => {
            const whatToDo = result.slip.advice; // Получаем текст совета
            // меняем цвет body
            const bodyElement = document.querySelector(".js-body");
            bodyElement.style.transition = "background 0.5s";
            bodyElement.style.background =
                "linear-gradient(180deg, rgba(0, 176, 28, 0.2) 24.48%, rgba(255, 255, 255, 0) 100%)";
            const textElement = document.querySelector(".js-text");
            textElement.innerText = whatToDo; // Устанавливаем текст
            const heading = document.querySelector("span"); // получаем заголовок
            heading.innerText = "Ура, теперь не скучно"; // Меняем текст заголовка
            const oldSmile = document.querySelector(".js-oldSmile");
            oldSmile.style.display = "none";
            const newSmile = document.querySelector(".js-newSmile");
            newSmile.style.display = "inline";

        })
        .catch(error => console.error("Error fetching advice:", error)); // Обрабатываем ошибки 
});