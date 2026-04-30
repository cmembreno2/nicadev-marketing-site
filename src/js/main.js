const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
const form = document.querySelector('.form');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const contact = (formData.get('contact') || '').toString().trim();
    const service = (formData.get('service') || '').toString().trim();
    const details = (formData.get('details') || '').toString().trim();

    if (!name || !contact) {
      alert('Por favor completá tu nombre y contacto');
      return;
    }

    const message = `Hola, quiero cotizar:\n\nNombre: ${name}\nContacto: ${contact}\nServicio: ${service}\nDetalles: ${details}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/50588173282?text=${encodedMessage}`;

    window.open(url, '_blank');
    form.reset();
  });
}
