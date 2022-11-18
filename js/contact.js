function diklikaja() {
    // console.log("sudah di klik")
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let pesan = document.getElementById("pesan").value
    console.log(name, email, phone, subject, pesan)

    // let emailReceiver = "akudandia@gmail.com"
// validation
// return = untuk menutup agar tidak membaca kode selanjutnya


if(name==""){
 return alert(`isi dulu bos`)
}else if (email==""){
    return alert(`email isi dulu bos`)
}else if (phone==""){
    return alert(`no telephone isi dulu bang`)
}else if (subject==""){
    return alert(`subject udah di isi??`)
}else if (pesan==""){
    return alert(`massangenya di isi dulu ya sayang`)
}
//

// bikin kaya a href
    let link = document.createElement('a')
    // mailto = ngirim email
    link.href = `mailto:${email}?subject=${subject}
    &body=Hi Selamat Datang Di Sini 
    ${name}, ${pesan}, Hubungi Saya di ${phone}`
    link.click()


    let siswa = {
        // objeck
        name,
        phone,
        email,
        subject,
        pesan
    }
    console.log(siswa)
}