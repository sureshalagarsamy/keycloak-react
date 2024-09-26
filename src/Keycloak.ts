import Keycloak from "keycloak-js";

let initOptions = {
    url: "http://localhost:8080/",
    realm: "myrealm",
    clientId: "myclient",
    onLoad: "login-required", // check-sso | login-required,
};

let kc = new Keycloak(initOptions);

const doLogin = kc.login;
const doLogout = kc.logout;
const getToken = () => kc.token;
const isLoggedIn = () => !!kc.token;

//Start: Initialize keycloak
const initKeycloak = (onAuthenticatedCallback: any) => {
    kc.init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
        pkceMethod: "S256",
    })
        .then((authenticated: any) => {
            if (!authenticated) {
                doLogin();
            } else {
                console.log(kc);
                onAuthenticatedCallback();
            }
        })
        .catch();
};

export const UserService = {
    doLogin,
    doLogout,
    getToken,
    isLoggedIn,
    initKeycloak,
};
