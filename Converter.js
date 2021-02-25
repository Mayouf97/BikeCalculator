function convertSpeed (v , u) {
  if (u == true) {
    return kmh(v);
  } else {
    return mph(v);
  }
}

function kmh (v) {
    return ((v*3600) / 1000).toFixed(1);
}

function mph (v) {
    return ((v*3600) / 1609.34).toFixed(1);
}

function lbsTokg (lbs) {
  return parseInt(((lbs * 0.453592) + 1) , 10);
}

function kgTolbs (kg){
  return parseInt(((kg * 2.20462)) , 10);
}

function getSpeedLable (u) {
  if (u == true) {
    return 'Kmh';
  }

  return 'Mph'
}
