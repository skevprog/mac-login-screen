const arrow = document.getElementById('arrow');

const password = document.getElementById('password');

if (!password.value.length) {
  arrow.classList.add('hide');
}

password.addEventListener('input', e => {
  if (!e.target.value) {
    return arrow.classList.add('hide');
  }
  arrow.classList.remove('hide');
});
