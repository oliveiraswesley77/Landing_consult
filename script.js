const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-interest]').forEach((link) => {
  link.addEventListener('click', () => {
    const interest = document.querySelector('select[name="interest"]');
    if (interest) interest.value = link.dataset.interest;
  });
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const message = [
    'Olá, Claudiane! Gostaria de saber mais sobre a consultoria.',
    '',
    `Nome: ${formData.get('name')}`,
    `E-mail: ${formData.get('email')}`,
    `Interesse: ${formData.get('interest')}`,
    `Mensagem: ${formData.get('message') || 'Não informada'}`,
  ].join('\n');

  const whatsappUrl = `https://wa.me/5571991985227?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
