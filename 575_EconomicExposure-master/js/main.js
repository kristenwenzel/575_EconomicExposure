//begin script when window loads
window.onload = setMap();

function setMap(){
    d3.queue()
        .defer(d3.csv, "data/ne_10m_airports.csv")
        .defer(d3.json, "data/ne_10m_admin_0_sovereignty.topojson")
        .defer(d3.json, "data/ne_10m_airports.topojson")
        .await(callback);
    
    function callback(error, csvData, soverignty, airports) {
        var soverigntycities = topojson.feature(soveri)
        console.log(error);
        console.log(csvData);
        console.log(soverignty);
        console.log(airports);
    };
};