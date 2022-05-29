// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data danebih mudah dibaca struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar l
const favColor1 = new Set()
    favColor1.add("yellow");
    favColor1.add("pink");
    favColor1.add("white");
    favColor1.add("purple");

const favRestaurant1 = new Set()
    favRestaurant1.add("Bento");
    favRestaurant1.add("Sushi");
    favRestaurant1.add("Pancake");
    favRestaurant1.add("Eggy");
    favRestaurant1.add("Tempura");
    favRestaurant1.add("Bento");
    favRestaurant1.add("Eggy");
    favRestaurant1.add("Padang");
    favRestaurant1.add("Tteok");
    favRestaurant1.add("Sushi");
    favRestaurant1.add("Sushi");

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: "17",
    email: "monica@dingdong.com",
    favoriteColor: Array.from(favColor1),
    isHavePet: "Yes",
    education: [
        { name: "SD 01", city: "Jakarta", graduate: "2016"},
        { name: "SMP 02", city: "Jakarta", graduate: "2019" },
        { name: "SMA 03", city: "Tangerang" }
        ],
    favoriteRestaurant: Array.from(favRestaurant1),
    };


    const favColor2 = new Set()
    favColor2.add("blue");
    favColor2.add("black");
    favColor2.add("gray");

    const favRestaurant2 = new Set();    
        favRestaurant2.add("Tempura");
        favRestaurant2.add("Bento");
        favRestaurant2.add("Sushi");
        favRestaurant2.add("Pancake");
        favRestaurant2.add("Padang");
        favRestaurant2.add("Katsu");
        favRestaurant2.add("Geprek");
        favRestaurant2.add("Pancake");
        favRestaurant2.add("Eggy");
       

    const secondUser = {
        name: "Wendy",
        gender: "Male",
        age: "23",
        email: "wendy@dingdong.com",
        favoriteColor: Array.from(favColor2),
        isHavePet: "No",
        education: [
            { name: "SD 02", city: "Jakarta", graduate: "2010"},
            { name: "SMP 03", city: "Bogor", graduate: "2013" },
            { name: "SMA 01", city: "Surabay", graduate: "2016" },
            { name: "Universitas Maju", city: "Tangerang"}
        ],
        favoriteRestaurant: Array.from(favRestaurant2)
        };



// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};