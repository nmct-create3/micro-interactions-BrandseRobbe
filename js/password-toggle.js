const init = function() {
  let knop = document.querySelector('#togglePasswordCheckbox');
  let inputvak = document.querySelector('#password');

  knop.addEventListener('input', function() {
    console.log(this.checked);
    if (this.checked) {
      inputvak.type = 'text';
    } else {
      inputvak.type = 'password';
    }
  });
};

document.addEventListener('DOMContentLoaded', init);
