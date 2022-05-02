document.querySelector('#show-words button').addEventListener('click', () => {
  document.querySelector('#show-words').style.display = 'none'
  document.querySelector('#login').style.display = 'flex'
})

const loginButton = document.getElementById('login-button')
loginButton.addEventListener('click', () => {
  setTimeout(() => {
    const word1 = document.getElementById('word1').value
    const word2 = document.getElementById('word2').value
    console.log({ word1, word2 })
    if (word1 === 'Courage' && word2 === 'Lovely') {
      loginButton.innerText = 'Success!'
    } else {
      loginButton.innerText = 'Try again'
      setTimeout(() => {
        loginButton.innerText = 'Log in'
      }, 2000)
    }
  }, 1000)
})
