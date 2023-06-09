// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// https://spotify-clone-phi-one.vercel.app/
// http://localhost:3000/
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "https://spotify-clone-phi-one.vercel.app/";
const clientId = "f6623c49ae314e6e8a32522690727b22";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;




