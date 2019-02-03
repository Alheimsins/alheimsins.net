const axios = require('axios')

export default async url => {
  try {
    const { data } = await axios(url)
    return data
  } catch (error) {
    throw error
  }
}
