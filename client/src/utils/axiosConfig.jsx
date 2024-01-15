export const base_url = "http://localhost:5000/api/"

const getTokenFromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const Token = getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
console.log(Token)

export const config = {
    headers: {
        Authorization: `Bearer ${Token}`,
        Accept: "application/json",
    },
};


export const config2 = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${Token}`,
    },
};