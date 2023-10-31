const city = 1301;
const date = new Date();
const dd = String(date.getDate()).padStart(2, "0");
const mm = String(date.getMonth() + 1).padStart(2, "0");
const yyyy = date.getFullYear();

const now = yyyy + '-' + mm + '-' + dd;

// Jadwal Sholat API
const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`;

fetch(jadwalApi)
    .then(function(response) {
        if (!response.ok) {
            throw new Error("API tidak dapat diakses, ada yang salah!");
        }
        return response.json();
    })
    .then((data) => {
        const jadwal = data.data;
        const list = jadwal.jadwal;
        const listJadwal = document.getElementById('list-jadwal');
        const kota = document.getElementById('city');
        const prov = document.getElementById('prov');

        kota.innerHTML = jadwal.lokasi;
        prov.innerHTML = jadwal.daerah;

        list.forEach((el) => {
            const tr = document.createElement("tr");
            if (el.date === now) {
                tr.classList.add("table-primary")
            }

            // Tanggal
            const Td = document.createElement("td");
            Td.innerText = el.tanggal;
            Td.classList.add("date");

            // imsak
            const imsak = document.createElement("td");
            imsak.innerText = el.imsak;
            // terbit 
            const terbit = document.createElement("td");
            terbit.innerText = el.terbit
            // subuh
            const subuh = document.createElement("td");
            subuh.innerText = el.subuh
            // zuhur 
            const dzuhur = document.createElement("td");
            dzuhur.innerText = el.dzuhur
            // ashar
            const ashar = document.createElement("td");
            ashar.innerText = el.ashar;
            const maghrib = document.createElement("td");
            maghrib.innerText = el.maghrib;
            const isya = document.createElement("td");
            isya.innerText = el.isya;
            
            

            listJadwal.appendChild(tr);
            tr.appendChild(Td);
            tr.appendChild(imsak);
            tr.appendChild(subuh);
            tr.appendChild(terbit);
            tr.appendChild(dzuhur);
            tr.appendChild(ashar);
            tr.appendChild(maghrib);
            tr.appendChild(isya)
        });
    });
    // .catch((error) => {
    //     console.error(error);
    // });