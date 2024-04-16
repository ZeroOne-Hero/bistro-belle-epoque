import {} from '@types/googlemaps';

declare global {
    interface Window {
        initMap?: () => void;
        google?: typeof google;
    }
}
