const ipAddress = "192.168.1.77";
const port = "8080";
const version = "ver100";
const endpoint = `http://${ipAddress}:${port}/ccapi/${version}/shooting/control/shutterbutton`;

const body = JSON.stringify({
    "af": true,
})

const requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow"
}

const shutter = (press) => {
    if (press) {
        fetch(endpoint, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
        document.getElementById('demo').innerHTML = JSON.stringify({endpoint, body});
    }
}