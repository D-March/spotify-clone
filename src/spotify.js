export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-clone-4ad54.web.app/";
const clientId = "aed47c0b8ce947be8ae6dd8468c52b0c";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        //Pull Access Token and split it
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// https://spotify-clone-4ad54.web.app/

// http://localhost:3000/