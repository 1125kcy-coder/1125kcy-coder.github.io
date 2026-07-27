const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));


const emailButton = document.querySelector('#copy-email');

if (emailButton) {
  emailButton.addEventListener('click', async () => {
    const email = emailButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
    } catch (error) {
      const tempInput = document.createElement('input');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      tempInput.remove();
    }

    emailButton.textContent = 'Email copied!';
    setTimeout(() => {
      emailButton.textContent = 'Email';
    }, 1600);
  });
}
function toggleLinks(id){

    const element = document.getElementById(id);

    if(element.style.display==="block"){

        element.style.display="none";

    }else{

        element.style.display="block";

    }

}
