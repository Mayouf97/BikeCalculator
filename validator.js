/**
 * Look for number or double within text
 * and return it as pure double.
 */
function findNumber(txt) {
    txt = txt.trim();//remove any withspace before and after the text.

    if (txt.length > 0) {
        var p = "[+-]?([0-9]*[.])?[0-9]+";//pattern

        var to = txt.match(p);


        if (to != null) {
            return parseFloat(to[0]);
        }
    }

    return 0;
}

function validateBodyWeight (u , v) {
  //body min: 20kg max:300kg.

  if (u == true) {
    //Metrical
    if (v >= 20 && v <=300) {
      return v; //weight is valide
    }

    return 70;//return default value.

  } else {
    //Imperial
    if (v >= 44.0925 && v <= 661.387) {
      return v; //weight is valide
    }

    return 154;
  }

}

function validateBikeWeight (u , v) {
  //body min: 6.8kg max:25kg.

  if (u == true) {
    //Metrical
    if (v >= 6.8 && v <=25) {
      return v; //weight is valide
    }

    return 6.8;//return default value.

  } else {
    //Imperial
    if (v >= 14.9914 && v <= 55.1156) {
      return v; //weight is valide
    }

    return 14.9914;
  }
}


function validateAge (txt) {
  //age between 10 to 90.
  txt = txt.trim();//remove any withspace before and after the text.

  if (txt.length > 0) {
      var p = "[+-]?([0-9])?[0-9]+";//pattern

      var to = txt.match(p);

      if (to != null) {
        var va = to[0];
        if (va >= 10 && va <= 90) {
          return va;
        }
      }

      return 18;//return default value when text is not a valide age number.
  }
}
