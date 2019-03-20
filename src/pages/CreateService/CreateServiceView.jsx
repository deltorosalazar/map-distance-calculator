// @flow
import React from 'react'
import BaseLayout from '../../layouts/BaseLayout'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Timer from '@material-ui/icons/Timer'
import Commute from '@material-ui/icons/Commute'
import { withStyles } from '@material-ui/core/styles'
import DistanceMap from '../../components/DistanceMap'
import CreateServiceForm from '../../components/CreateServiceForm'
import './styles.scss'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '350px'
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})

type Props = {
  onRequest: Function,
  onRequestSuccess: Function,
  onRequestFailure: Function,
  resetRequestValues: Function,
  findDistance: Function,
  handleLogout: Function,
  results: Object,
  classes: Object
}

const CreateServiceView = (props: Props) => {
  const { onRequest, onRequestSuccess, onRequestFailure, resetRequestValues, handleLogout, classes } = props

  return (
    <BaseLayout handleLogout={handleLogout}>
      <div className={classes.root}>
        <Grid container spacing={24}>          
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <CreateServiceForm 
                handleSearch={props.findDistance}
              />            
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>   
              {!onRequestSuccess && (
                <Typography variant="h6" color="inherit">
                  Ingrese la dirección de Origen y Destino
                </Typography> 
              )} 

              {onRequest && <CircularProgress className={classes.progress} />}

              {onRequestSuccess && (
                <div className='resultsContainer'>
                  <div className='infoContainer'>
                    <div className='infoItemContainer'>
                      <Typography variant="h6" color="inherit">
                        Tiempo Estimado
                      </Typography> 
                      <div className='infoItemResultsContainer'>
                        <Timer />
                        <Typography variant="subtitle1" color="inherit">
                          {props.results.estimatedTime}
                        </Typography> 
                      </div>
                    </div>
                    <div className='infoItemContainer'>
                      <Typography variant="h6" color="inherit">
                        Distancia
                      </Typography>
                      <div className='infoItemResultsContainer'>
                        <Commute />                
                        <Typography variant="subtitle1" color="inherit" >
                          {props.results.distance}
                        </Typography> 
                      </div>
                    </div>              
                  </div>

                  <div className='mapContainer'>
                    <DistanceMap        
                      className='mapContainer'             
                      markers={props.results.markers}
                    />                  
                  </div>
                </div>

              )}
              
            </Paper>
          </Grid>          
        </Grid>        
      </div>
      <Dialog
          open={onRequestFailure}          
          onClose={resetRequestValues}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Ha ocurrido un error"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              No se ha podido encontrar la distancia entre las direcciones ingresadas. Por favor espere unos minutos e intente nuevamente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.resetRequestValues} color="primary">
              Cerrar
            </Button>            
          </DialogActions>
        </Dialog>
    </BaseLayout>
  )
}

export default withStyles(styles)(CreateServiceView)