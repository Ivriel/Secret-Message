function show () {
    event.preventDefault() // agar data diolah oleh javascript. 
    let nama = document.getElementById("nama")
    let pesan = document.getElementById("pesan") // ambil data
    if (nama.value ==  "" || pesan.value == "" ) { // mengecek apakah ada data kosong
        alert("isi semua")
    } else { // jika tidak ada data kosong maka akan diproses
        let anonim = nama.value.split("") // untuk memisahkan tiap huruf dari input nama
        for (let index = 0; //index dari 0
         index<anonim.length; //agar for berjalan sampai semua huruf dibaca 
          index++ // setiap perulangan nilai index bertambah
        ) {
            if (index != 0 && index != anonim.length - 1) {
                anonim[index] = "*"
           }
        }
        let tampil = document.createElement("div") // membuat wadah untuk menampilkan pesan
        tampil.innerHTML = "<h2>" + anonim.join("") + "</h2>" + "<p>" +  pesan.value + "</p>" // mengisi wadah
        tampil.className = "pesan" // untuk mengedit tampilan di css
        document.getElementById("comments").appendChild(tampil) // menampilkan wadah + isinya di bagian div comments
        nama.value = "" // setelah data diinput, maka data akan dikosongkan
        pesan.value = ""
    }
}
// 20 anonim.join : untuk menggabungkan semua huruf menjadi satu string
// 9 for untuk membaca tiap huruf
// length menghitung jumlah data bukan index