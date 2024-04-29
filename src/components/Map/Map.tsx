import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    lat: number;
    lng: number;
    zoom: number;
    markerOptions?: L.MarkerOptions;
}

const MapComponent: React.FC<MapProps> = ({ lat, lng, zoom, markerOptions }) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = L.map(mapRef.current, {
                zoomControl: false
            }).setView([lat, lng], zoom);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            L.marker([lat, lng], markerOptions).addTo(map);

            const tilePane = mapRef.current.querySelector('.leaflet-tile-pane');
            if (tilePane) {

                (tilePane as HTMLElement).style.filter = "grayscale(70%) brightness(100%) contrast(130%)";
            }
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.innerHTML = '';
            }
        };
    }, [lat, lng, zoom, markerOptions]);

    return <div ref={mapRef} style={{ height: '200px', width: '320px', borderRadius:'5px' }} />;
}

export default MapComponent;
