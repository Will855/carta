const textoPoema = [
    "Desde que entraste en mi vida, has creado un lazo invisible que me atrae hacia ti de una manera que nunca imaginé posible.",
    "",
    "Cada día a tu lado es una nueva aventura, un descubrimiento constante. Tu risa ilumina mis momentos más oscuros, y tus palabras son el faro que guía mi camino. En tu abrazo, encuentro un refugio, un lugar donde el tiempo se detiene y todo lo que importa eres tú y yo.",
    "",
    "A veces, me pregunto cómo sería mi vida sin tu luz. La idea de perderte es aterradora, pues has transformado mi mundo en un lugar lleno de color 🌈 y significado ✨. Eres mi inspiración, mi razón para seguir adelante, y quiero que sepas cuánto significas para mí 💖.",
    "",
    "Espero que esta carta 💌 te recuerde lo especial que eres y lo profundamente que te valoro 💞. Estoy agradecido por cada instante que compartimos y por el amor que florece entre nosotros 🌹."
];

/* Iniciar música de fondo
const bgMusic = document.getElementById('backgroundMusic');
bgMusic.volume = 0.3;

document.body.addEventListener('click', () => {
    bgMusic.play();
});*/

document.querySelector('.progress-bar').style.width = '100%';

setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');

    gsap.fromTo('.poema-container',
        { opacity: 0, y: 50, scale: 0.95 },
        {
            duration: 2,
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "elastic.out(1, 0.5)",
            onComplete: () => {
                // Iniciar efecto máquina de escribir después de la animación
                typePoem();
            }
        }
    );
    
    const poemaContainer = document.getElementById('poema');
    poemaContainer.style.display = 'block';

    // Efecto de escritura mejorado
    let lineIndex = 0;
    let charIndex = 0;
    let isAddingNewLine = false;

    function typePoem() {
        if (lineIndex < textoPoema.length) {
            if (!isAddingNewLine) {
                const nuevaLinea = document.createElement('p');
                nuevaLinea.style.opacity = '0';
                nuevaLinea.style.transform = 'translateY(20px)';
                poemaContainer.appendChild(nuevaLinea);
                isAddingNewLine = true;
            }

            const currentLine = textoPoema[lineIndex];
            const currentParagraph = poemaContainer.lastElementChild;

            if (charIndex < currentLine.length) {
                currentParagraph.innerHTML = currentLine.substring(0, charIndex + 1) + 
                    `<span class="typing-cursor" style="color: ${getRandomColor()}">❤</span>`;
                charIndex++;
                setTimeout(typePoem, charIndex % 3 === 0 ? 20 : 40);
            } else {
                currentParagraph.innerHTML = currentLine;
                animateElement(currentParagraph);
                lineIndex++;
                charIndex = 0;
                isAddingNewLine = false;
                setTimeout(typePoem, 600);

                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }
        } else {
            addFinalEffects();
        }
    }

    function animateElement(el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.transition = 'all 0.5s ease';
    }

    function getRandomColor() {
        return `hsl(${Math.random() * 360}, 70%, 60%)`;
    }

    function addFinalEffects() {
        // Efecto de confetti
        for(let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${getRandomColor()};
                top: -10px;
                left: ${Math.random() * 100}%;
                animation: fall ${Math.random() * 3 + 2}s linear;
                border-radius: 50%;
            `;
            document.body.appendChild(confetti);
        }
    }

    setTimeout(typePoem, 700);
}, 3000);

// Interacción con emojis
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('.interactive-emoji').addEventListener('click', (e) => {
//         const emoji = document.createElement('div');
//         emoji.textContent = '🌸';
//         emoji.style.cssText = `
//             position: fixed;
//             font-size: 2em;
//             animation: floatEmoji 2s ease-out;
//             left: ${e.random}px;
//             top: ${e.random}px;
//         `;
//         document.body.appendChild(emoji);
        
//         setTimeout(() => emoji.remove(), 2000);
//     });
// });