// @flow
import * as React from 'react'
import { Field, reduxForm } from "redux-form"
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import renderTextField from '../MuiFields/TextField'
import validate from './validate'

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
})

type Props = {
  handleSubmit: Function,
  pristine: bool,
  submitting: bool,
  valid: bool,
  classes: Object
}

const CreateServiceForm = (props: Props) => {
  const { handleSubmit, pristine, submitting, valid, classes } = props

  return (
    <form onSubmit={handleSubmit}>    
      <Field name="description" component={renderTextField} label="Descripción" className={props.classes.textField} style={{ margin: 8 }} multiline rowsMax="4" fullWidth/>
      <Field name="fromAddress" component={renderTextField} label="Dirección de Origen" className={props.classes.textField} style={{ margin: 8 }} fullWidth/>
      <Field name="toAddress" component={renderTextField} label="Dirección de Destino" className={props.classes.textField} style={{ margin: 8 }} fullWidth/>
          
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={pristine || submitting || !valid}
      >
        Crear Servicio
      </Button>
    </form>
  )
}

export default withStyles(styles)(reduxForm({
  form: 'createServiceForm',
  validate
})(CreateServiceForm))

