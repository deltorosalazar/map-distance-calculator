import React from 'react'
import LoginForm from '../../components/LoginForm'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './styles'

type Props = {
  classes: Object
}

function LoginView(props: Props) {
  const { handleLogin, classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicio de Sesión
        </Typography>
        <LoginForm 
          handleLogin={handleLogin}
        />
      </Paper>
    </main>
  );
}

export default withStyles(styles)(LoginView);