import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToApp from '@material-ui/icons/ExitToApp'
import styles from './styles'

type Props = {
  children: any,
  classes: Object
}

const BaseLayout = ({children, classes, handleLogout}: Props) => {  
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Nuevo Servicio
            </Typography>            
            <div>
              <IconButton                
                aria-haspopup="true"
                onClick={handleLogout}
                color="inherit"
              >
                <ExitToApp />
              </IconButton>              
            </div>            
          </Toolbar>
        </AppBar>
      </div>
      <main className={classes.container}>
        {children}
      </main>    
    </React.Fragment>
  )
}

export default withStyles(styles)(BaseLayout)


