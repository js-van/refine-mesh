'use strict'

module.exports = flipEdges

function flipEdges(numCells, cells, corners, numVerts, valence) {
  var flip = true
  while(flip) {
    flip = false
    for(var i=0; i<numCells; ++i) {
      var a = cells[3*i]
      var b = cells[3*i+1]
      var c = cells[3*i+2]

      var oa = corners[3*i]
      var ob = corners[3*i+1]
      var oc = corners[3*i+2]

      var va = valence[a]
      var vb = valence[b]
      var vc = valence[c]

      var da0 = Math.abs(va - 5)|0
      var da1 = Math.abs(va - 6)|0
      var da2 = Math.abs(va - 7)|0

      var db0 = Math.abs(vb - 5)|0
      var db1 = Math.abs(vb - 6)|0
      var db2 = Math.abs(vb - 7)|0

      var dc0 = Math.abs(vc - 5)|0
      var dc1 = Math.abs(vc - 6)|0
      var dc2 = Math.abs(vc - 7)|0

      if(oa >= 0) {
        var j  = oa >> 2
        var jx = oa & 3
        var d  = cells[3*j + jx]
        var vd = valence[d]
        var dd0 = Math.abs(vd - 5)|0
        var dd1 = Math.abs(vd - 6)|0

        if(da0 + db2 + dc2 + dd0 <
           da1 + db1 + dc1 + dd1) {

          var yi = 3*j + ((jx+1)%3)
          var y  = cells[yi]
          var oy = corners[yi]
          var oz = corners[3*j+((jx+2)%3)]

          if(cells[yi] === b) {
            var tmp = oy
            oy = oz
            oz = tmp
          }

          cells[3*i]   = a
          cells[3*i+1] = b
          cells[3*i+2] = d

          corners[3*i]   = oy
          corners[3*i+1] = 4*j+2
          corners[3*i+2] = oc

          if(oy >= 0) {
            corners[3*(oy>>2)+(oy&3)] = 4*i
          }
          if(oc >= 0) {
            corners[3*(oc>>2)+(oc&3)] = 4*i+2
          }

          cells[3*j]   = a
          cells[3*j+1] = d
          cells[3*j+2] = c

          corners[3*j]   = oz
          corners[3*j+1] = ob
          corners[3*j+2] = 4*i+1

          if(oz >= 0) {
            corners[3*(oz>>2)+(oz&3)] = 4*j
          }
          if(ob >= 0) {
            corners[3*(ob>>2)+(ob&3)] = 4*j+1
          }

          valence[a] += 1
          valence[b] -= 1
          valence[c] -= 1
          valence[d] += 1

          flip = true

          continue
        }
      }

      if(ob >= 0) {
        var j  = ob >> 2
        var jx = ob & 3
        var d  = cells[3*j + jx]
        var vd = valence[d]
        var dd0 = Math.abs(vd - 5)|0
        var dd1 = Math.abs(vd - 6)|0

        if(da2 + db0 + dc2 + dd0 <
           da1 + db1 + dc1 + dd1) {

          var yi = 3*j + ((jx+1)%3)
          var y  = cells[yi]
          var oy = corners[yi]
          var oz = corners[3*j+((jx+2)%3)]

          if(cells[yi] === c) {
            var tmp = oy
            oy = oz
            oz = tmp
          }

          cells[3*i]   = b
          cells[3*i+1] = c
          cells[3*i+2] = d

          corners[3*i]   = oy
          corners[3*i+1] = 4*j+2
          corners[3*i+2] = oa

          if(oy >= 0) {
            corners[3*(oy>>2)+(oy&3)] = 4*i
          }
          if(oa >= 0) {
            corners[3*(oa>>2)+(oa&3)] = 4*i+2
          }

          cells[3*j]   = b
          cells[3*j+1] = d
          cells[3*j+2] = a

          corners[3*j]   = oz
          corners[3*j+1] = oc
          corners[3*j+2] = 4*i+1

          if(oz >= 0) {
            corners[3*(oz>>2)+(oz&3)] = 4*j
          }
          if(oc >= 0) {
            corners[3*(oc>>2)+(oc&3)] = 4*j+1
          }

          valence[a] -= 1
          valence[b] += 1
          valence[c] -= 1
          valence[d] += 1

          flip = true

          continue
        }
      }

      if(oc >= 0) {
        var j  = oc >> 2
        var jx = oc & 3
        var d  = cells[3*j + jx]
        var vd = valence[d]
        var dd0 = Math.abs(vd - 5)|0
        var dd1 = Math.abs(vd - 6)|0

        if(da2 + db2 + dc0 + dd0 <
           da1 + db1 + dc1 + dd1) {

          var yi = 3*j + ((jx+1)%3)
          var y  = cells[yi]
          var oy = corners[yi]
          var oz = corners[3*j+((jx+2)%3)]

          if(cells[yi] === a) {
            var tmp = oy
            oy = oz
            oz = tmp
          }

          cells[3*i]   = c
          cells[3*i+1] = a
          cells[3*i+2] = d

          corners[3*i]   = oy
          corners[3*i+1] = 4*j+2
          corners[3*i+2] = ob

          if(oy >= 0) {
            corners[3*(oy>>2)+(oy&3)] = 4*i
          }
          if(ob >= 0) {
            corners[3*(ob>>2)+(ob&3)] = 4*i+2
          }

          cells[3*j]   = c
          cells[3*j+1] = d
          cells[3*j+2] = b

          corners[3*j]   = oz
          corners[3*j+1] = oa
          corners[3*j+2] = 4*i+1

          if(oz >= 0) {
            corners[3*(oz>>2)+(oz&3)] = 4*j
          }
          if(oa >= 0) {
            corners[3*(oa>>2)+(oa&3)] = 4*j+1
          }

          valence[a] -= 1
          valence[b] -= 1
          valence[c] += 1
          valence[d] += 1

          flip = true

          continue
        }
      }
    }
  }
}