const  createMessage = async () => {
    try { 
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts/5e8929ddd439160017553e06/messages', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'token'
        },
        body: JSON.stringify({
          message: {
            content: "Do you still have this?  Would you take $10 less?"
          }
        })
      })
      const result = await response.json()
      console.log(result)
      } catch (error) {
          console.log(error)
      }
      }