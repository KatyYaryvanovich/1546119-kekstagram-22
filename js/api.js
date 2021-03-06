const getData = async (onSuccess, onFail) => {
  let response;
  try {
    response = await fetch('https://22.javascript.pages.academy/kekstagram/data')
    if (response.ok) {
      const pictures = await response.json()
      return onSuccess(pictures)
    }
  } catch (error) {
    return onFail()
  }
}

const sendData = async (onSuccess, onFail, pictures) => {
  let response;
  try {
    response = await fetch(
      'https://22.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(pictures),
      },
    );
  } catch (error) {
    return onFail()
  }

  if (response.ok) {
    onSuccess();
  } else {
    throw new Error();
  }
}


export { getData, sendData };
