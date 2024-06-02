const MY_MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoibmlrb2xhaTA0MTMiLCJhIjoiY2x2c2RnaWN6MTF4djJxcXo2ODY2NmtxMiJ9.y8L-rGYZQNrfJmwCfGMhXg"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MY_MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15
  })

  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const directionControl = new MapboxDirections({
    accessToken: MY_MAPBOX_ACCESS_TOKEN
  })

  map.addControl(directionControl, "top-left")
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([87.28855, 26.82053])
}
