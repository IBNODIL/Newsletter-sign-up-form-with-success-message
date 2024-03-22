let signUpForm = document.getElementById('sign-up-form')
let success = document.getElementById('success')

let signUpFormSubmit = document.getElementById('sign-up-form-submit')
let dissmis = document.getElementById('dissmis-massage')


signUpFormSubmit.addEventListener('click', () => {
  signUpForm.classList.add('hidden')
  success.classList.remove('hidden')
})

dissmis.addEventListener('click', () => {
  signUpForm.classList.remove('hidden')
  success.classList.add('hidden')
})
