const validate = values => {
  const errors = {}

  const requiredFields = [
    'email',
    'password'
  ]

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Este campo es requerido'
    }

    if ( values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Correo Electrónico inválido'
    }
  })
  
  return errors
}

export default validate