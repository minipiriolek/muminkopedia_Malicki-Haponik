import Character from '../models/Character';
import Artifact from '../models/Artifact';

export const seed = async () => {
    console.log("Start seeding...");

    await Character.deleteMany();
    await Artifact.deleteMany();

    // ===== CHARACTERS =====
    const characters = await Character.insertMany([
        {
            name: "Muminek",
            description: "Główny bohater",
            species: "Muminek",
            isHibernating: false
        },
        {
            name: "Włóczykij",
            description: "Wolny duch",
            species: "Inny",
            isHibernating: false
        },
        {
            name: "Mała Mi",
            description: "Charakterna",
            species: "Miukk",
            isHibernating: false
        },
        {
            name: "Paszczak",
            description: "Botanik",
            species: "Paszczak",
            isHibernating: false
        },
        {
            name: "Ryjek",
            description: "Lubi skarby",
            species: "Ryjek",
            isHibernating: true
        },
        {
            name: "Mama Muminka",
            description: "Serce domu",
            species: "Muminek",
            isHibernating: false
        },
        {
            name: "Tata Muminka",
            description: "Pisarz",
            species: "Muminek",
            isHibernating: false
        }
    ]);

    // ===== MAPA name -> _id =====
    const map = {};
    characters.forEach(c => {
        map[c.name] = c._id;
    });

    // ===== BEST FRIEND =====
    await Character.updateOne(
        { name: "Muminek" },
        { bestFriend: map["Włóczykij"] }
    );

    await Character.updateOne(
        { name: "Włóczykij" },
        { bestFriend: map["Muminek"] }
    );

    await Character.updateOne(
        { name: "Mama Muminka" },
        { bestFriend: map["Tata Muminka"] }
    );

    await Character.updateOne(
        { name: "Tata Muminka" },
        { bestFriend: map["Mama Muminka"] }
    );

    // ===== ARTIFACTS =====
    await Artifact.insertMany([
        {
            name: "Złota Harmonijka",
            properties: "Piękne dźwięki",
            owner: map["Włóczykij"]
        },
        {
            name: "Czarna Torebka",
            properties: "Mieści wszystko",
            owner: map["Mama Muminka"]
        },
        {
            name: "Maszyna do Pisania",
            properties: "Do pisania przygód",
            owner: map["Tata Muminka"]
        },
        {
            name: "Wysoki Cylinder",
            properties: "Elegancki kapelusz",
            owner: map["Tata Muminka"]
        },
        {
            name: "Lupa Botaniczna",
            properties: "Do badań roślin",
            owner: map["Paszczak"]
        },
        {
            name: "Srebrna Taca",
            properties: "Skarb",
            owner: map["Ryjek"]
        },
        {
            name: "Kapelusz Włóczykija",
            properties: "Symbol wolności",
            owner: map["Włóczykij"]
        }
    ]);

    console.log("Seeding done");
};