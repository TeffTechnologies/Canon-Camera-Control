const ipAddress = "192.168.1.77";
const port = "8080";
const version = "ver100";
const endpoint = `http://${ipAddress}:${port}/ccapi/${version}`;

const body = JSON.stringify({
    "af": true,
})

const requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow",
}

const shutter = (press) => {
    const target = endpoint + "/shooting/control/shutterbutton"
    if (press) {
        fetch(target, requestOptions)
        .catch((error) => console.error(error));
    }
}

const cameraInfo = async (press) => {
    const target = endpoint + "/deviceinformation"
    if (press) {
        await fetch(target)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }
    
}
