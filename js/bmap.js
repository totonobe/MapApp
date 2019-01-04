//************************************************************************************
// BingMaps Functions
//************************************************************************************
"use strict";

/**
 * MapView
 * @method mapStart
 * @param target (string)  ["#id"]
 * @param lat    (float)   [47.6149]
 * @param lon    (float)   [-122.1941]
 * @param id     (string)  ["load","aerial","canvasDark","canvasLight","birdseye","grayscale","streetside"]
 * @param num    (int)     [1...20]
 * @returns {boolean=false} OR {Object=Map}
 */

//custom style
var sampleStyle = {
    "elements": {
        "park": { "fillColor": "#A9A9D4BE" },
        "controlledAccessHighway": { "fillColor": "#e6c317", "strokeColor": "#D3B300", "labelColor": "#444444", "labelOutlineColor": "#60ffffff" },
        "highway": { "fillColor": "#e6c317", "strokeColor": "#D3B300", "labelColor": "#444444", "labelOutlineColor": "#60ffffff" },
        "water": { "fillColor": "#B7CDDE" },
        "medicalBuilding": { "fillColor": "#fceced" },
        "majorRoad": { "fillColor": "#f0d85a" },
        "education": { "fillColor": "#f0e8f8" },
        "arterialRoad": { "fillColor": "#ffed91" },
        "structure": { "fillColor": "#faf8ed" },
        "buildinglobal": { "fillColor": "#e5e0d8" },
        "forest": { "fillColor": "#deebdd" },
        "vegetation": { "fillColor": "#deebdd" },
        "reserve": { "fillColor": "#deebdd" },
        "street": { "fillColor": "#ffffff", "strokeColor": "#e6e3df" },
        "roadShield": { "fillColor": "#ffffff" },
        "medical": { "fillColor": "#ffddee" },
        "educationBuildinglobal": { "fillColor": "#f6f0f1" },
        "golfCourse": { "fillColor": "#c5dabb" }
    },
    "settings": { "landColor": "#F6F4E3" }
};
var sampleStyle2 = {
    "elements": {
        "water": { "fillColor": "#a1e0ff" },
        "waterPoint": { "iconColor": "#a1e0ff" },
        "transportation": { "strokeColor": "#aa6de0" },
        "road": { "fillColor": "#b892db" },
        "railway": { "strokeColor": "#a495b2" },
        "structure": { "fillColor": "#ffffff" },
        "runway": { "fillColor": "#ff7fed" },
        "area": { "fillColor": "#f39ebd" },
        "political": { "borderStrokeColor": "#fe6850", "borderOutlineColor": "#55ffff" },
        "point": { "iconColor": "#ffffff", "fillColor": "#FF6FA0", "strokeColor": "#DB4680" },
        "transit": { "fillColor": "#AA6DE0" }
    }
};
var sampleStyle3 = {
    "elements": {
        "vegetation": { "fillColor": "#c5dea2" },
        "naturalPoint": { "visible": false, "labelVisible": false },
        "transportation": { "labelOutlineColor": "#ffffff", "fillColor": "#ffffff", "strokeColor": "#d7d6d5" },
        "water": { "fillColor": "#b1bdd6", "labelColor": "#ffffff", "labelOutlineColor": "#9aa9ca" },
        "structure": { "fillColor": "#d7d6d5" },
        "indigenousPeoplesReserve": { "visible": false },
        "military": { "visible": false }
    },
    "settings": { "landColor": "#e7e6e5" }
};
var midnightCommander = {
    "version": "1.0",
    "settings": {
        "landColor": "#0B334D"
    },
    "elements": {
        "mapElement": {
            "labelColor": "#FFFFFF",
            "labelOutlineColor": "#000000"
        },
        "political": {
            "borderStrokeColor": "#144B53",
            "borderOutlineColor": "#00000000"
        },
        "point": {
            "iconColor": "#0C4152",
            "fillColor": "#000000",
            "strokeColor": "#0C4152"
        },
        "transportation": {
            "strokeColor": "#000000",
            "fillColor": "#000000"
        },
        "highway": {
            "strokeColor": "#158399",
            "fillColor": "#000000"
        },
        "controlledAccessHighway": {
            "strokeColor": "#158399",
            "fillColor": "#000000"
        },
        "arterialRoad": {
            "strokeColor": "#157399",
            "fillColor": "#000000"
        },
        "majorRoad": {
            "strokeColor": "#157399",
            "fillColor": "#000000"
        },
        "railway": {
            "strokeColor": "#146474",
            "fillColor": "#000000"
        },
        "structure": {
            "fillColor": "#115166"
        },
        "water": {
            "fillColor": "#021019"
        },
        "area": {
            "fillColor": "#115166"
        }
    }
};
var countriesOnly = {
    "version": "1.0",
    "elements": {
        "mapElement": {
            "labelVisible": false
        },
        "area": {
            "visible": false
        },
        "transportation": {
            "visible": false
        },
        "countryRegion": {
            "borderStrokeColor": "#444444",
            "borderOutlineColor": "#00000000",
            "borderWidthScale": 2,
            "fillColor": "#888888",
            "visible": true
        },
        "adminDistrict": {
            "borderVisible": false
        },
        "water": {
            "fillColor": "#FFFFFF"
        },
        "point": {
            "visible": false
        }
    }
};
var fadedMap = {
    "version": "1.0",
    "elements": {
        "vegetation": {
            "fillColor": "#c5dea2"
        },
        "naturalPoint": {
            "visible": false,
            "labelVisible": false
        },
        "transportation": {
            "labelOutlineColor": "#ffffff",
            "fillColor": "#ffffff",
            "strokeColor": "#d7d6d5"
        },
        "water": {
            "fillColor": "#b1bdd6",
            "labelColor": "#ffffff",
            "labelOutlineColor": "#9aa9ca"
        },
        "structure": {
            "fillColor": "#d7d6d5"
        },
        "indigenousPeoplesReserve": {
            "visible": false
        },
        "military": {
            "visible": false
        }
    },
    "settings": {
        "landColor": "#e7e6e5",
        "shadedReliefVisible": false
    }
};

var airport_style = {
    "elements": {
        "airport": { "fillColor": "#FF00FF" },
        "park": { "fillColor": "#A9A9D4BE" },
        "controlledAccessHighway": { "fillColor": "#e6c317", "strokeColor": "#D3B300", "labelColor": "#444444", "labelOutlineColor": "#60ffffff" },
        "highway": { "fillColor": "#e6c317", "strokeColor": "#D3B300", "labelColor": "#444444", "labelOutlineColor": "#60ffffff" },
        "water": { "fillColor": "#B7CDDE" },
        "medicalBuilding": { "fillColor": "#fceced" },
        "majorRoad": { "fillColor": "#f0d85a" },
        "education": { "fillColor": "#f0e8f8" },
        "arterialRoad": { "fillColor": "#ffed91" },
        "structure": { "fillColor": "#faf8ed" },
        "buildinglobal": { "fillColor": "#e5e0d8" },
        "forest": { "fillColor": "#deebdd" },
        "vegetation": { "fillColor": "#deebdd" },
        "reserve": { "fillColor": "#deebdd" },
        "street": { "fillColor": "#ffffff", "strokeColor": "#e6e3df" },
        "roadShield": { "fillColor": "#ffffff" },
        "medical": { "fillColor": "#ffddee" },
        "educationBuildinglobal": { "fillColor": "#f6f0f1" },
        "golfCourse": { "fillColor": "#c5dabb" }
    },
    "settings": { "landColor": "#F6F4E3" }
};

var cud1 = {
    "elements": {
        "water": { "fillColor": "#6bc8f3" },
        "transportation": { "strokeColor": "#8a3b2c" },
        "road": { "fillColor": "#fff100" },
        "railway": { "strokeColor": "#006fbc" },
        "structure": { "fillColor": "#04af7a" },
        "area": { "fillColor": "#f5a200" },
    }
};

var cud2 = {
    "elements": {
        "water": { "fillColor": "#c6b7d9" },
        "transportation": { "strokeColor": "#fff9b0" },
        "road": { "fillColor": "#f9d1cb" },
        "railway": { "strokeColor": "#8a3b2c" },
        "structure": { "fillColor": "#04af7a" },
        "area": { "fillColor": "#f5a200" },
    }
};









//customstyle done


function mapStart(target, lat, lon, id, num){
    //MapObject
    return new Microsoft.Maps.Map(target, {
        center: new Microsoft.Maps.Location(lat,lon), //Location center position
        mapTypeId: eval("Microsoft.Maps.MapTypeId."+id), //Type: [load, aerial,canvasDark,canvasLight,birdseye,grayscale,streetside]
        zoom: num,  //Zoom:1=zoomOut, 20=zoomUp[ 1~20 ]
    });
}

/**
 * MapViewMove
 * @method mapChangeView
 * @param map    (object)  [mapObject]
 * @param lat    (float)   [47.6149]
 * @param lon    (float)   [-122.1941]
 * @param id     (string)  ["load","aerial","canvasDark","canvasLight","birdseye","grayscale","streetside"]
 * @param num    (int)     [1...20]
 */
function mapChangeView(map, lat, lon, id, num){
    //MapObject
    const loc = new Microsoft.Maps.Location(lat,lon);
    map.setView({
        mapTypeId: eval("Microsoft.Maps.MapTypeId."+id),
        center: loc,
        zoom: num,
        bounds:loc.bestView
    });
}

/**
* Pushpin:Add
* @method mapPushpin
* @param map    (object)   [mapObject]
* @param lat    (float)    [47.6149]
* @param lon    (float)    [-122.1941]
* @param color  (string)   ["#ff0000"]
* @param[arguments] drag   (boolean)  [true or false]
* @param[arguments] clicked (boolean) [true or false]
* @param[arguments] hover  (boolean)  [true or false]
* @param[arguments] visib  (boolean)  [true or false]
* @returns {boolean=false OR void }
*/
function mapPushpin(map, lat, lon, color){
    //Param Check
    let drag,clicked,hover,visib;
    if(map=="" || lat=="" || lon=="" || color==""){
        return false;
    }
    //arguments[4...7]
    if(typeof arguments[4]=="undefined" || arguments[4]==false){drag=false;}else{drag=true;};
    if(typeof arguments[5]=="undefined" || arguments[5]==false){clicked=false;}else{clicked=true;};
    if(typeof arguments[6]=="undefined" || arguments[6]==false){hover=false;}else{hover=true;};
    if(typeof arguments[7]=="undefined" || arguments[7]==true){visib = true;}else{visib=false;};
    const location =  new Microsoft.Maps.Location(lat,lon);
    const pin = new Microsoft.Maps.Pushpin(location, {
        color: color,                //Color
        draggable:drag,              //MouseDraggable
        enableClickedStyle:clicked,  //Click
        enableHoverStyle:hover,      //MouseOver
        visible:visib                //show/hide
    });
    map.entities.push(pin);
}

/**
 * Infobox:Add
 * @method mapInfobox
 * @param map    (object)   [mapObject]
 * @param lat    (float)    [47.6149]
 * @param lon    (float)    [-122.1941]
 * @param t      (string)   ["title"]
 * @param d      (string)   ["description"]
 */
function mapInfobox(map, lat, lon, t, d){
    //Infobox
    const location = new Microsoft.Maps.Location(lat,lon);
    const infobox  = new Microsoft.Maps.Infobox(location,{
        title: t,
        description: d
    });
    infobox.setMap(map); //Add infobox to Map
}