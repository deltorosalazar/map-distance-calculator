import axios from "axios"

export const ON_REQUEST = '@liftit/service/ON_REQUEST'
export const ON_REQUEST_SUCCESS = '@liftit/service/ON_REQUEST_SUCCESS'
export const ON_REQUEST_FAILURE = '@liftit/service/ON_REQUEST_FAILURE'
export const RESET_REQUEST_VALUES = '@liftit/service/RESET_REQUEST_VALUES'
export const SAVE_RESULTS = '@liftit/service/SAVE_RESULTS'

export const onRequest = () => {
  return {
    type: ON_REQUEST
  }
}

export const onRequestSuccess = () => {
  return {
    type: ON_REQUEST_SUCCESS
  }
}

export const onRequestFailure = () => {
  return {
    type: ON_REQUEST_FAILURE
  }
}

export const resetRequestValues = () => {
  return {
    type: RESET_REQUEST_VALUES
  }
}

export const getLatLng = (address, type) => (dispatch, getState) => {
  const outputFormat = 'json'  
  const key = process.env.REACT_APP_GEOCODING_API_KEY

  const baseURL = key ? 'https://maps.googleapis.com/maps/api/geocode/' : process.env.REACT_APP_MOCK_SERVER_URL

  const requestURL = !key ? 
                      `${baseURL}/service/getLatLng/${type}` : 
                      `https://cors-anywhere.herokuapp.com/${baseURL}${outputFormat}?address=${encodeURIComponent(address)}&key=${key}`

  return axios.get(requestURL)
}

export const findDistance = () => async (dispatch, getState) => {  
  dispatch(onRequest())

  const { form } = getState()

  const fromAddress = encodeURIComponent(form.createServiceForm.values.fromAddress)
  const toAddress = encodeURIComponent(form.createServiceForm.values.toAddress)

  const outputFormat = 'json'  
  const key = process.env.REACT_APP_G_MAPS_API_KEY

  const baseURL = key ? 'https://maps.googleapis.com/maps/api/distancematrix/' : process.env.REACT_APP_MOCK_SERVER_URL
  const requestURL = !key ? 
                      `${baseURL}/service/create` : 
                      `https://cors-anywhere.herokuapp.com/${baseURL}${outputFormat}?origins=${fromAddress}&destinations=${toAddress}&key=${key}`

  try {
    const { distanceResults, origin, destination } = await axios.get(requestURL).then(response => {      
      return {
        distanceResults: response.data.rows[0].elements[0],
        origin: response.data.origin_addresses[0],
        destination: response.data.destination_addresses[0]        
      }
    })
    
    const latLng = await Promise.all([
      dispatch(getLatLng(origin, 'origin')), 
      dispatch(getLatLng(destination, 'destination'))
    ])

    const results = {
      distance: distanceResults.distance.text,
      estimatedTime: distanceResults.duration.text,
      markers: latLng.map(response => {        
        return {
          ...response.data.results[0].geometry.location,
          address: response.data.results[0].formatted_address
        }
      })
    }

    dispatch(onRequestSuccess())
    dispatch(saveResults(results))      

  } catch (error) {
    dispatch(onRequestFailure())
  }
}

export const saveResults = ({distance, estimatedTime, markers}) => {
  return {
    type: SAVE_RESULTS,
    payload: {
      distance,
      estimatedTime,
      markers
    }
  }
}
