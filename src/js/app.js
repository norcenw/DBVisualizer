document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById('dropzone-file').addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const fileName = file.name.toLowerCase();

        if (fileName.endsWith('.csv')) {
            console.log('File CSV valido selezionato:', file.name);


        } else {
            alert('Il file selezionato non è un CSV.');
            event.target.value = '';
        }
    });
});

function spawnAlert(id, text) {
    hideAllAlert();
    document.querySelector(`${id}`);
}

function hideAllAlert() {
    let allIdAlert = ["common", "success", "error", "warning"];

    for (let i = 0; i < allIdAlert.length; i++) {
        document.querySelector(`#${allIdAlert[i]}-alert`).classList.remove("spawn-alert");
    }
}
