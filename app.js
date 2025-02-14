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