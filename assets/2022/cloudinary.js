// BUKTI PEMBAYARAN //
var widgetBukti = cloudinary.createUploadWidget({
    cloudName: 'rihandcreative',
    uploadPreset: 'orcguru',
    sources: ['local', 'camera']
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Bukti Pembayaran: ', result.info.secure_url);
        document.getElementById(inputBukti).value           = result.info.secure_url;
        document.getElementById('gambarBukti').innerHTML    = '<img src="' + result.info.secure_url + '" width="80%" class="mt-3">';
    }
})
document.getElementById("btnBukti").addEventListener("click", function() {
    widgetBukti.open();
}, false);

// KARTU IDENTITAS //
var widgetIdentitas = cloudinary.createUploadWidget({
    cloudName: 'rihandcreative',
    uploadPreset: 'orcguru',
    sources: ['local', 'camera']
    // language: 'id'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Kartu Identitas: ', result.info.secure_url);
        document.getElementById(inputIdentitas).value           = result.info.secure_url;
        document.getElementById('gambarIdentitas').innerHTML    = '<img src="' + result.info.secure_url + '" width="80%" class="mt-3">';
    }
})
document.getElementById("btnIdentitas").addEventListener("click", function() {
    widgetIdentitas.open();
}, false);