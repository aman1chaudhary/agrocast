import React from 'react'
import { MapContainer, TileLayer, Popup, Circle, FeatureGroup  } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import * as L from "leaflet";


const ListProjects = {"type":"FeatureCollection", "features": [
  { "type": "Feature", "properties": { "Sr No": 1, "ProjectName": "Flood inundation mapping for Surat Metro under climate change scenario", "District": "Surat", "State": "Gujarat", "Country": "India", "Lat": 21.1702, "Lon": 72.8311, "Client": "GMRC and IIT GN" }, "geometry": { "type": "Point", "coordinates": [ 72.8311, 21.1702 ] } },
  { "type": "Feature", "properties": { "Sr No": 2, "ProjectName": "Hydrology assessment and drainage design for Solar Park", "District": "Bhavnagar", "State": "Gujarat", "Country": "India", "Lat": 21.90139, "Lon": 72.113597, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 72.113597, 21.90139 ] } },
  { "type": "Feature", "properties": { "Sr No": 3, "ProjectName": "Drainage planning at Khavda, Kutch.", "District": "Kutchh", "State": "Gujarat", "Country": "India", "Lat": 24.063255, "Lon": 69.5216264, "Client": "NTPC and IIT GN" }, "geometry": { "type": "Point", "coordinates": [ 69.5216264, 24.063255 ] } },
  { "type": "Feature", "properties": { "Sr No": 4, "ProjectName": "Preparation of Bhutan’s Long-Term Low Greenhouse Gas Emission and Climate Resilient Development Strategy", "District": "All", "State": "All", "Country": "Bhutan", "Lat": 27.5142, "Lon": 90.4336, "Client": "Deloitte LLP" }, "geometry": { "type": "Point", "coordinates": [ 90.4336, 27.5142 ] } },
  { "type": "Feature", "properties": { "Sr No": 5, "ProjectName": "Climate change impacts on water availability", "District": "All", "State": "Meghalaya", "Country": "India", "Lat": 25.467, "Lon": 91.3662, "Client": "GCRS" }, "geometry": { "type": "Point", "coordinates": [ 91.3662, 25.467 ] } },
  { "type": "Feature", "properties": { "Sr No": 6, "ProjectName": "Hydrology Assessment for Solar Park Site Selection", "District": "Banaskatha", "State": "Gujarat", "Country": "India", "Lat": 24.476706, "Lon": 71.307829, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 71.307829, 24.476706 ] } },
  { "type": "Feature", "properties": { "Sr No": 7, "ProjectName": "Hydrology Report and Drainage Recommendation for Solar park", "District": "Jodhpur", "State": "Rajasthan", "Country": "India", "Lat": 27.525296, "Lon": 72.375228, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 72.375228, 27.525296 ] } },
  { "type": "Feature", "properties": { "Sr No": 8, "ProjectName": "Hydrological investigation -Carrying out for assessing aquifer capacity yield/life and detailed geophysical and geohydrological resistivity test and sub-surface micro-level investigation work for pinpointing the most feasible location for withdrawal and recharge for Bullet project", "District": "Ahmedabad", "State": "Gujarat", "Country": "India", "Lat": 23.099269, "Lon": 72.567737, "Client": "SCC and CASAD and NHRCL" }, "geometry": { "type": "Point", "coordinates": [ 72.567737, 23.099269 ] } },
  { "type": "Feature", "properties": { "Sr No": 9, "ProjectName": "Sharmishtha lake overflow study", "District": "Vadnagar", "State": "Gujarat", "Country": "India", "Lat": 23.788114, "Lon": 72.642637, "Client": "ASI and IIT GN" }, "geometry": { "type": "Point", "coordinates": [ 72.642637, 23.788114 ] } },
  { "type": "Feature", "properties": { "Sr No": 10, "ProjectName": "Groundwater availability study ", "District": "Jaisalmer", "State": "Rajasthan", "Country": "India", "Lat": 26.85152778, "Lon": 71.50566667, "Client": "Adani" }, "geometry": { "type": "Point", "coordinates": [ 71.50566667, 26.85152778 ] } },
  { "type": "Feature", "properties": { "Sr No": 11, "ProjectName": "Flood Risk Assessment (FRA) for upcoming solar plant", "District": "Mungeli", "State": "Chhattisgarh", "Country": "India", "Lat": 22.03067, "Lon": 81.640429, "Client": "Deloitte LLP" }, "geometry": { "type": "Point", "coordinates": [ 81.640429, 22.03067 ] } },
  { "type": "Feature", "properties": { "Sr No": 12, "ProjectName": "Hydrology study for the upcoming solar plant.", "District": "Mau", "State": "UttarPradesh", "Country": "India", "Lat": 25.939622, "Lon": 83.780663, "Client": "AMP Energy " }, "geometry": { "type": "Point", "coordinates": [ 83.780663, 25.939622 ] } },
  { "type": "Feature", "properties": { "Sr No": 13, "ProjectName": "Hydrology study for the upcoming substation.", "District": "Jamnagar", "State": "Gujarat", "Country": "India", "Lat": 22.369696, "Lon": 70.193238, "Client": "AMP Energy " }, "geometry": { "type": "Point", "coordinates": [ 70.193238, 22.369696 ] } },
  { "type": "Feature", "properties": { "Sr No": 14, "ProjectName": "Topography survey and Hydrology assessment for 10 MW solar plant", "District": "Chitradurga", "State": "Karnataka", "Country": "India", "Lat": 14.075201, "Lon": 76.676312, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 76.676312, 14.075201 ] } },
  { "type": "Feature", "properties": { "Sr No": 15, "ProjectName": "Topography survey and Hydrology assessment for 130 MW solar plant ", "District": "Chitradurga", "State": "Karnataka", "Country": "India", "Lat": 14.141461, "Lon": 76.687075, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 76.687075, 14.141461 ] } },
  { "type": "Feature", "properties": { "Sr No": 16, "ProjectName": "Hydrology assessment for 10 MW solar plant", "District": "Ramanathapuram", "State": "Tamil Nadu", "Country": "India", "Lat": 9.796764, "Lon": 78.900645, "Client": "Arja Energys" }, "geometry": { "type": "Point", "coordinates": [ 78.900645, 9.796764 ] } },
  { "type": "Feature", "properties": { "Sr No": 17, "ProjectName": "Flood Risk Assessment (FRA) for upcoming solar plant", "District": "Thooothukudi", "State": "Tamil Nadu", "Country": "India", "Lat": 9.025636, "Lon": 78.089215, "Client": "Deloitte LLP" }, "geometry": { "type": "Point", "coordinates": [ 78.089215, 9.025636 ] } },
  { "type": "Feature", "properties": { "Sr No": 18, "ProjectName": "Site suitability study for upcoming solar plant", "District": "Kutchh", "State": "Gujarat", "Country": "India", "Lat": 24.022837, "Lon": 69.560585, "Client": "BluPine Energy" }, "geometry": { "type": "Point", "coordinates": [ 69.560585, 24.022837 ] } },
  { "type": "Feature", "properties": { "Sr No": 19, "ProjectName": "Flood Risk Assessment (FRA) for upcoming solar plant", "District": "Jhansi", "State": "UttarPradesh", "Country": "India", "Lat": 25.558169, "Lon": 79.091772, "Client": "Deloitte LLP" }, "geometry": { "type": "Point", "coordinates": [ 79.091772, 25.558169 ] } },
  { "type": "Feature", "properties": { "Sr No": 20, "ProjectName": "Hydrology Report and Drainage Recommendation for Solar park", "District": "Jodhpur", "State": "Rajasthan", "Country": "India", "Lat": 27.593868, "Lon": 72.43868, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 72.43868, 27.593868 ] } }
  ]}



 const setDragging=()=> {
  var viewportWidth = window.innerWidth;
  var dragging;
  if (viewportWidth <= [767]) {
    dragging = false;
  } if (viewportWidth >= [768]) {
    dragging = true;
  } 
  return dragging;
}

const ProjectMap = () => {

  return (
    <>
      <MapContainer
        center={[23, 86]}
        // zoomControl={false}
        style={{ width: '100%', height: "600px",borderRadius:"5px", backgroundColor: 'white', boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.1)" }}
        zoom={4.5}
        zoomDelta={0.5}
        zoomSnap={0}
        maxZoom={7}

        attributionControl={false}
        scrollWheelZoom={false}
        minZoom={3}
        keyboard={false}
        dragging={setDragging()}
        touchZoom={false}
        doubleClickZoom={false}
      >

        <TileLayer
          url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />

                {/* <GeoJSON
                  data={indiastates.features}
                  style={{
                    fillColor: "#84857e",
                    fillOpacity: 0.5,
                    weight: 2,
                    color: "whitesmoke",
                    interactive: false,
                  }}
                /> */}






        <FeatureGroup>

          {ListProjects.features.map((station, index) => {
            return (
              <Circle
                key={index}
                center={[station.properties.Lat, station.properties.Lon]}
                radius={30000}
                color="blue"
                fillColor="blue"
                fillOpacity={1}
              >
                <Popup>
                <div className="popup_content">
                    
                <h6>Project: </h6> {station.properties.ProjectName}<br />
                  </div>
                </Popup>
              </Circle>
            );
          })}

          
        </FeatureGroup>
        <div className="legend_container">
        <p>In our journey at AgroCast, we take immense pride in our past projects, each a testament to our unwavering commitment to agriculture, water, and climate change sectors. Our history is woven with successes in climate-resilient farming initiatives, the implementation of solar-powered agricultural solutions, optimizing water resource management, and providing crop-specific advisory programs. Through these projects, we've not only enhanced agricultural practices but also empowered communities with knowledge and tools to thrive in an ever-changing environment. Explore our rich portfolio of past endeavors, a testament to our dedication to sustainable growth and resilience</p>
            {/* <h5>Legend</h5> */}
                {/* <div  className="legend_item">
                  
                    <span className="legend_item_circle" style={{ backgroundColor: "blue" }} />
                    <span className="legend-label">Sites we have worked so far.</span>
                </div> */}
        </div>



      </MapContainer>

    </>
  )
}

export default ProjectMap