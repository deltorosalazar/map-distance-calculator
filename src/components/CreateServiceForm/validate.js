const validate = values => {
  const errors = {}

  const requiredFields = [
    'description',
    'fromAddress',
    'toAddress'
  ]

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Este campo es requerido'
    }
  })
  
  return errors
}

export default validate