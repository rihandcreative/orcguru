function inputUpper(x) {
    x.value = x.value.toUpperCase();
}

function inputLower(x) {
    x.value = x.value.toLowerCase();
}

Swal.fire({
    icon: 'info',
    title: 'Data Tidak Boleh Salah!',
    text: 'Seluruh data akan digunakan sampai pembuatan piagam dan medali dengan ukiran nama. Data tidak bisa diganti setelah disubmit.',
})

$('#daftarForm').submit(function (event) {

    document.getElementById('btnLoading').classList.remove('d-none');
    document.getElementById('btnKirim').classList.add('d-none');

    event.preventDefault()
    var extraData = {}
    $('#daftarForm').ajaxSubmit({
        data: extraData,
        // dataType: 'jsonp',
        error: function () {
            // alert('Form Submitted. Thanks.')
            // window.location = 'http://www.mydomain.com/thankyoupage.html'
            Swal.fire({
                icon: 'success',
                title: 'Pendaftaran Berhasil!',
                html: 'Seluruh peserta <strong>WAJIB</strong> bergabung ke group WA setelah pendaftaran.',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Gabung Group WA',
                denyButtonText: `Saya Sudah Bergabung`,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location = 'https://rihand.link/orcguru2022-group'
                } else {
                    window.location = './daftar'
                }
            })
        }
    })
})

function hitungHarga() {
    var biaya   = 91000;
    var biayaS  = document.getElementById('biaya');
    var ongkirS = document.getElementById('1108582854');
    var ongkir  = ongkirS.options[ongkirS.selectedIndex].getAttribute('data-harga');
    var biayaI  = document.getElementById('1802727729');
    if(document.getElementById('ongkirYa').checked) {
        if(ongkir === null) {
            biayaS.innerHTML    = "? (mohon mengisi data pengiriman terlebih dahulu)";
            biayaI.value        = '';
            console.log('Biaya: ?');
        } else {
            biayaS.innerHTML    = biaya + parseFloat(ongkir);
            biayaI.value        = biaya + parseFloat(ongkir);
            console.log('Biaya: ' + biaya + ' + ' + parseFloat(ongkir));
        }
    } else {
        biayaS.innerHTML    = 91000;
        biayaI.value        = 91000;
        console.log('Biaya: 91000');
    }

}