const getData = async (onSuccess, onFail) => {

  try {
    const response = await fetch('https://22.javascript.pages.academy/kekstagram/data')
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const pictures = await response.json()
    return onSuccess(pictures)
  } catch (error) {
    onFail(error.message || error)
  }
}

const sendData = async (formData) => {
  try {
    const response = await fetch(
      'https://22.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error(error.message || error)
  }
}

export { getData, sendData };
