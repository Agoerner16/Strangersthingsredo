let token
const  registerUser = async () => {
try {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'superman27',
      password: 'krypt0n0rbust'
    }
  })
})
const result = await response.json()
console.log(result)
} catch (error) {g
    console.log(error)
}
}

const runFile = async () => {
    await registerUser()
}

runFile()
