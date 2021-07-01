chrome.runtime.onMessage.addListener((message) => {
    if(message.txt == "fill-entries") fill_entry();
});

const fill_entry = () => {
    const name = document.getElementById('IDToken1');
    const password = document.getElementById('IDToken2');
    const button = document.getElementsByName('Login.Submit');
    const data = {
        name: "user",
        pass: "password"
    }
    name.setAttribute("value", data.name);
    password.setAttribute("value", data.pass);
    button[0].click();
};