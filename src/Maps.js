import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//Icono para la posicion seleccionada.
const icon = L.icon({
    iconUrl: "./placeholder.png",
    iconSize: [38, 38],
});

//Mostrara en le mapa Playa del Carmen.
const position = [20.6274, -87.07987];

function ResetCenterView(props) {
    const { selectPosition } = props;
    const map = useMap();

    useEffect(() => {
        if (selectPosition) {
            map.setView(
                L.latLng(selectPosition?.lat, selectPosition?.lon),
                map.getZoom(),
                {
                    animate: true
                }
            )
        }
    }, [selectPosition]);

    return null;
}

export default function Maps(props) {
    const { selectPosition } = props;
    const locationSelection = [selectPosition?.lat, selectPosition?.lon];

    return (
        <MapContainer
            center={position}
            zoom={15}
            style={{ width: "95vw", height: "95vh" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=2pjnwbMEidaBRfA48kib"
            />
            {selectPosition && (
                <Marker position={locationSelection} icon={icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            )}
            <ResetCenterView selectPosition={selectPosition} />
        </MapContainer>
    );
}