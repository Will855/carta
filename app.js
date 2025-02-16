const textoPoema = [
    "En tu amor encuentro esa luz que Newton explicó con números,",
    "la fuerza silenciosa que nos une sin necesidad de palabras ✨.",
    "",
    "Eres el sol que ilumina mis días y la luna que guía mis noches 🌙,",
    "un imán que atrae hasta mis gestos más simples hacia tu calor 🔗.",
    "",
    "No soy científico, pero sé que contigo la vida tiene más sentido:",
    "tus abrazos son la gravedad que me mantiene firme en la tierra 🌍,",
    "tus besos, las estrellas que me enseñan a brillar 💫.",
    "",
    "Juntos escribimos leyes nuevas:",
    "donde hay dudas, creamos certezas 📖;",
    "donde hay frío, inventamos el verano 🔆.",
    "",
    "Y si un día la física olvida nuestro secreto 💌,",
    "basta un roce de tus manos para recordar...",
    "que eres la gravedad que me atrae en el vasto universo 💞."
];

/* Iniciar música de fondo
const bgMusic = document.getElementById('backgroundMusic');
bgMusic.volume = 0.3;

document.body.addEventListener('click', () => {
    bgMusic.play();
});*/

document.querySelector('.progress-bar').style.transition = 'width 3s linear';

setTimeout(() => {

    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');

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
        el.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'; // Más suave
    }

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
}, 3500);

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