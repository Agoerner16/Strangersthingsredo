
// get posts 

const  getPosts = async () => {
    try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts')

        const result = await response.json()
        console.log(result)
        } catch (error) {
            console.log(error)
        }
}

// make new post
const  makePost = async () => {
  try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'token'
  },
  body: JSON.stringify({
    post: {
      title: "My favorite stuffed animal",
      description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
      price: "$480.00",
      willDeliver: true
    }
  })
})
const result = await response.json()
console.log(result)
} catch (error) {
    console.log(error)
}
}

// edit post
const  editPost = async () => {
  try {
      const response = await fetch('http://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts/5e8d1bd48829fb0017d2233b', {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'token'
  },
  body: JSON.stringify({
    post: {
      title: "My favorite stuffed animal",
      description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
      price: "$480.00",
      location: "New York, NY",
      willDeliver: true
    }
  })
})
const result = await response.json()
console.log(result)
} catch (error) {
    console.log(error)
}
}

// delete post

const  deletePost = async () => {
  try { 
    const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts/5e8d1bd48829fb0017d2233b', {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'token'
    }
  })
  const result = await response.json()
  console.log(result)
  } catch (error) {
      console.log(error)
  }
  }