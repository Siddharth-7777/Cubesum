
function combo() {
    array = []
    xy = k
    cubo = 0
    for (j = 0; j < 20; j++) {
        p = xy.toString()
        cubo = 0
        for (i = 0; i < p.length; i++) {
            y = p.charAt(i)
            w = parseInt(y)
            cubo += w**3
    }
    array.push(cubo)
    xy = cubo
    }
    console.log(array)
}

function cubesum() {
    document.getElementById("ans").innerHTML = ""
    for (k = 1; k < 5000; k++) {
         xy = k
         combo()
         array.unshift(k)
         document.getElementById("ans").innerHTML += "<h4>" + array + "</h4>"
    }
}
    
        
    
   




    
    

    

    
        
        
    
    
    

