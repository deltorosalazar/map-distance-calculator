// @flow
import React from 'react'
import { Field, reduxForm } from "redux-form"
import Button from '@material-ui/core/Button'
import renderTextField from '../MuiFields/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import validate from './validate'

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '97%'
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column'
  },
})

type Props = {
  handleSubmit: Function,
  pristine: bool,
  submitting: bool,
  valid: bool,
  classes: Object
}

const LoginFormView = (props: Props) => {
  const { handleSubmit, pristine, submitting, valid, classes } = props

  return (
    <form className={classes.form}>
      <Field name="email" component={renderTextField} label="Correo Electrónico" className={props.classes.textField} style={{ margin: 8 }} multiline rowsMax="4" fullWidth/>
      <Field name="password" type="password" component={renderTextField} label="Contraseña" className={props.classes.textField} style={{ margin: 8 }} fullWidth/>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.submit}
        disabled={pristine || submitting || !valid}
      >
        Iniciar Sesión
      </Button>
    </form>
  )
}

export default withStyles(styles)(reduxForm({
  form: 'loginForm',
  validate
})(LoginFormView))