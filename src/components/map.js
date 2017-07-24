
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class SimpleExample extends Component {
  constructor (){
    super()
  }

  state = {
    lat: 41.890251,
    lng:  12.492373,
    zoom: 6,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
 
      <Map center={position} zoom={this.state.zoom}>

        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png&APPID=698009a4dde62e48490582289f422bd2"
        />

        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://g.maps.owm.io/map/precipitation_new/{z}/{x}/{y}?appid=b1b15e88fa797225412429c1c50c122a1"
        />

        <Marker position={position}>
          <Popup>
            <span>When in Rome... <br /> Enjoy it! :)</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}