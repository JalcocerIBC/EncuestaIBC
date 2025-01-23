
document.addEventListener('DOMContentLoaded', () => {
  // Obtener las opciones de emoji
  const emojiOptions = document.querySelectorAll('.emoji-option');
  const submitButton = document.getElementById('submitButton');
  const radios = document.querySelectorAll('input[name="satisfaction"]');

  // Función para ocultar todas las secciones de preguntas
  function hideAllQuestions() {
    document.querySelectorAll('.survey-questions').forEach(question => {
      question.style.display = 'none';
    });
  }

  // Mostrar la sección correspondiente al emoji seleccionado
  emojiOptions.forEach(option => {
    option.addEventListener('click', () => {
      hideAllQuestions();
      const value = option.getAttribute('data-value');
      document.getElementById(`${value.toLowerCase()}-questions`).style.display = 'block';
    });
  });

  // Mostrar botón de enviar cuando se selecciona una opción
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        submitButton.classList.remove('d-none');
      }
    });
  });

  // Mostrar/ocultar campo de texto según la opción seleccionada
  document.getElementById('solutionEffectiveness')?.addEventListener('change', function () {
    const otherSolutionContainer = document.getElementById('otherSolutionContainer');
    otherSolutionContainer.style.display = this.value === 'Otro' ? 'block' : 'none';
  });
    
});