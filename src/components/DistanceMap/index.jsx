// @flow
import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

type Props = {
  markers: Array<Object>,
  className: string
}

const DistanceMap = (props: Props) => {
  return (
    <Map center={props.markers && [props.markers[0].lat, props.markers[0].lng]} zoom={11} className={props.className}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.markers && props.markers.map((marker, index) => {
        return (        
          <Marker position={[marker.lat, marker.lng]} key={marker.address + index}>
            <Popup>
              {marker.address}
            </Popup>
          </Marker>          
        )
      })}
    </Map>
  )
}

export default DistanceMap