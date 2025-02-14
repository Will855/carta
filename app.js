const textoPoema = [
    "Desde que entraste en mi vida, has creado un lazo invisible que me atrae hacia ti de una manera que nunca imaginé posible.",
    "",
    "Cada día a tu lado es una nueva aventura, un descubrimiento constante. Tu risa ilumina mis momentos más oscuros, y tus palabras son el faro que guía mi camino. En tu abrazo, encuentro un refugio, un lugar donde el tiempo se detiene y todo lo que importa eres tú y yo.",
    "",
    "A veces, me pregunto cómo sería mi vida sin tu luz. La idea de perderte es aterradora, pues has transformado mi mundo en un lugar lleno de color 🌈 y significado ✨. Eres mi inspiración, mi razón para seguir adelante, y quiero que sepas cuánto significas para mí 💖.",
    "",
    "Espero que esta carta 💌 te recuerde lo especial que eres y lo profundamente que te valoro 💞. Estoy agradecido por cada instante que compartimos y por el amor que florece entre nosotros 🌹."
];

setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
    const poemaContainer = document.getElementById('poema');
    poemaContainer.style.display = 'block';

    let lineIndex = 0;
    let charIndex = 0;
    let isAddingNewLine = false;

    function typePoem() {
        if (lineIndex < textoPoema.length) {
            if (!isAddingNewLine) {
                const nuevaLinea = document.createElement('p');
                poemaContainer.appendChild(nuevaLinea);
                isAddingNewLine = true;
            }

            const currentLine = textoPoema[lineIndex];
            const currentParagraph = poemaContainer.lastElementChild;

            if (charIndex < currentLine.length) {
                currentParagraph.innerHTML = currentLine.substring(0, charIndex + 1) + '<span class="typing-cursor"></span>';
                charIndex++;
                window.scrollTo(0, document.body.scrollHeight);
                setTimeout(typePoem, charIndex % 3 === 0 ? 30 : 50);
            } else {
                currentParagraph.innerHTML = currentLine;
                lineIndex++;
                charIndex = 0;
                isAddingNewLine = false;
                setTimeout(typePoem, 500);
            }
        }
    }

    setTimeout(typePoem, 500);
    poemaContainer.style.opacity = '1';
}, 3000);