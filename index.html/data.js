// CATÁLOGO DE PRODUCTOS - ÉLITE SCENTS
const products = [
    //  ÁRABES 
    { id: 1, name: "Khamrah Lattafa", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0032.jpg", category: "Arabe" },
    { id: 2, name: "Asad Lattafa", price: "$88.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0047.jpg", category: "Arabe" },
    { id: 3, name: "Club de Nuit Intense", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0017.jpg", category: "Arabe" },
    { id: 4, name: "Yara Lattafa", price: "$88.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0044.jpg", category: "Arabe" },
    { id: 5, name: "Mandarin Sky", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0006.jpg", category: "Arabe" },

    //  ARMAF 
    { id: 6, name: "Armaf Yum Yum 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0001.jpg", category: "Arabe" },
    { id: 7, name: "Armaf Set Yum Yum x3 50 ml", price: "$130.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0002.jpg", category: "Arabe" },
    { id: 8, name: "Armaf Island Blish 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0003.jpg", category: "Arabe" },
    { id: 9, name: "Armaf Lion Heart 100 ml", price: "$110.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0004.jpg", category: "Arabe" },
    { id: 10, name: "Armaf Mandarin Sky Elixir 100 ml", price: "$92.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0005.jpg", category: "Arabe" },
    { id: 11, name: "Armaf Mandarin Sky 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0006.jpg", category: "Arabe" },
    { id: 12, name: "Armaf Odyssey Candy 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0007.jpg", category: "Arabe" },
    { id: 13, name: "Armaf Odyssey Homme 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0008.jpg", category: "Arabe" },
    { id: 14, name: "Armaf Odyssey Aoud 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0009.jpg", category: "Arabe" },
    { id: 15, name: "Armaf Odyssey Wild One 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0010.jpg", category: "Arabe" },
    { id: 16, name: "Armaf Odyssey Tyrant 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0011.jpg", category: "Arabe" },
    { id: 17, name: "Armaf Odyssey Spectra 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0012.jpg", category: "Arabe" },
    { id: 18, name: "Armaf Odyssey Artisto 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0013.jpg", category: "Arabe" },
    { id: 19, name: "Armaf Odyssey Mega 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0014.jpg", category: "Arabe" },
    { id: 20, name: "Armaf Odyssey Limoni 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0015.jpg", category: "Arabe" },
    { id: 21, name: "Armaf Odyssey Dubai Chocolate 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0016.jpg", category: "Arabe" },
    { id: 22, name: "Armaf Club de Nuit Intense 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0017.jpg", category: "Arabe" },
    { id: 23, name: "Armaf Club de Nuit Untold 100 ml", price: "$88.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0018.jpg", category: "Arabe" },
    { id: 24, name: "Armaf Club de Nuit Milestone 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0019.jpg", category: "Arabe" },
    { id: 25, name: "Armaf Club de Nuit Woman 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0020.jpg", category: "Arabe" },

    //  AL HARAMAIN 
    { id: 26, name: "Al Haramain Aqua Dubai", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0021.jpg", category: "Arabe" },
    { id: 27, name: "Al Haramain Ultra Violet", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0022.jpg", category: "Arabe" },
    { id: 28, name: "Al Haramain Amber Oud Gold Edition 120 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0023.jpg", category: "Arabe" },
    { id: 29, name: "Al Haramain Amber Rouge 120 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0024.jpg", category: "Arabe" },

    //  LATTAFA
    { id: 30, name: "Lattafa Victoria 100 ml", price: "$105.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0026.jpg", category: "Arabe" },
    { id: 31, name: "Lattafa Yara Elixir 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0028.jpg", category: "Arabe" },
    { id: 32, name: "Lattafa Asad Elixir 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0029.jpg", category: "Arabe" },
    { id: 33, name: "Lattafa Khamrah 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0032.jpg", category: "Arabe" },
    { id: 34, name: "Lattafa Khamrah Qahwa 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0033.jpg", category: "Arabe" },
    { id: 35, name: "Lattafa Khamrah Dukhan 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0034.jpg", category: "Arabe" },
    { id: 36, name: "Lattafa Musamam White Intense 100 ml", price: "$125.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0035.jpg", category: "Arabe" },
    { id: 37, name: "Lattafa Musamam 100 ml", price: "$125.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0036.jpg", category: "Arabe" },
    { id: 38, name: "Lattafa Now Woman 100 ml", price: "$95.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0037.jpg", category: "Arabe" },
    { id: 39, name: "Lattafa Teriaq 100 ml", price: "$98.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0038.jpg", category: "Arabe" },
    { id: 40, name: "Lattafa Haya 100 ml", price: "$130.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0039.jpg", category: "Arabe" },
    { id: 41, name: "Lattafa Eclaire 100 ml", price: "$129.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0040.jpg", category: "Arabe" },
    { id: 42, name: "Lattafa Mayar 100 ml", price: "$110.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0041.jpg", category: "Arabe" },
    { id: 43, name: "Lattafa Mayar Natural Intense 100 ml", price: "$110.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0042.jpg", category: "Arabe" },
    { id: 44, name: "Lattafa Yara Candy 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0043.jpg", category: "Arabe" },
    { id: 45, name: "Lattafa Yara 100 ml", price: "$88.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0044.jpg", category: "Arabe" },
    { id: 46, name: "Lattafa Yara Tous 100 ml", price: "$88.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0045.jpg", category: "Arabe" },
    { id: 47, name: "Lattafa Yara Moi 100 ml", price: "$88.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0046.jpg", category: "Arabe" },
    { id: 48, name: "Lattafa Asad 100 ml", price: "$88.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0047.jpg", category: "Arabe" },
    { id: 49, name: "Lattafa Asad Bourbon 100 ml", price: "$100.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0048.jpg", category: "Arabe" },
    { id: 50, name: "Lattafa Asad Zanzibar 100 ml", price: "$95.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0049.jpg", category: "Arabe" },
    { id: 51, name: "Lattafa Oud For Glory 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0050.jpg", category: "Arabe" },
    { id: 52, name: "Lattafa Amethyst 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0051.jpg", category: "Arabe" },
    { id: 53, name: "Lattafa Sublime 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0052.jpg", category: "Arabe" },
    { id: 54, name: "Lattafa Honor & Glory 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0053.jpg", category: "Arabe" },
    { id: 55, name: "Lattafa Noble Blush 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0054.jpg", category: "Arabe" },
    { id: 56, name: "Lattafa Ajwad 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0055.jpg", category: "Arabe" },
    { id: 57, name: "Lattafa Maahir 100 ml", price: "$110.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0056.jpg", category: "Arabe" },
    { id: 58, name: "Lattafa Maahir Legacy 100 ml", price: "$110.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0057.jpg", category: "Arabe" },
    { id: 59, name: "Lattafa Maahir Black 100 ml", price: "$110.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0058.jpg", category: "Arabe" },
    { id: 60, name: "Lattafa Fakhar Black 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%2026-0059.jpg", category: "Arabe" },
    { id: 61, name: "Lattafa Fakhar Rose 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0060.jpg", category: "Arabe" },
    { id: 62, name: "Lattafa Fakhar Gold Extrait 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0061.jpg", category: "Arabe" },

    // RASASI 
    { id: 300, name: "Rasasi Hawas for Him 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0096.jpg", category: "Arabe" },
    { id: 301, name: "Rasasi Hawas Ice 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0097.jpg", category: "Arabe" },
    { id: 302, name: "Rasasi Hawas Fire 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0098.jpg", category: "Arabe" },
    { id: 303, name: "Rasasi Hawas Elixir 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0099.jpg", category: "Arabe" },
    { id: 304, name: "Rasasi Hawas for Her 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0100.jpg", category: "Arabe" },

    //  AFNAN 
    { id: 305, name: "Afnan 9PM 100 ml", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0107.jpg", category: "Arabe" },
    { id: 306, name: "Afnan 9PM Rebel 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0108.jpg", category: "Arabe" },
    { id: 307, name: "Afnan 9AM Dive 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0109.jpg", category: "Arabe" },
    { id: 308, name: "Afnan 9AM Pour Femme 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0110.jpg", category: "Arabe" },
    { id: 309, name: "Afnan 9PM Pour Femme 100 ml", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0111.jpg", category: "Arabe" },

    //  BHARARA 
    { id: 310, name: "Bharara King 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0086.jpg", category: "Arabe" },
    { id: 311, name: "Bharara Niche Femme 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0081.jpg", category: "Arabe" },
    { id: 312, name: "Bharara Double Bleu 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0082.jpg", category: "Arabe" },
    { id: 313, name: "Bharara Chocolate 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0083.jpg", category: "Arabe" },
    { id: 314, name: "Bharara Scarlet 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0084.jpg", category: "Arabe" },
    { id: 315, name: "Bharara Rose 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0085.jpg", category: "Arabe" },
    { id: 316, name: "Bharara King Parfum 100 ml", price: "$128.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0086.jpg", category: "Arabe" },
    { id: 317, name: "Bharara Viking Dubai 100 ml", price: "$128.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0087.jpg", category: "Arabe" },
    { id: 318, name: "Bharara Viking Kashmir 100 ml", price: "$128.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0088.jpg", category: "Arabe" },
    { id: 319, name: "Bharara Viking Cairo 100 ml", price: "$128.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0089.jpg", category: "Arabe" },

    //  ORIENTICA
    { id: 320, name: "Orientica Rouge 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0072.jpg", category: "Arabe" },
    { id: 321, name: "Orientica Royal 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0073.jpg", category: "Arabe" },
    { id: 322, name: "Orientica Velvet 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0074.jpg", category: "Arabe" },
    { id: 323, name: "Orientica Azure 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0075.jpg", category: "Arabe" },
    { id: 324, name: "Orientica Dania 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0076.jpg", category: "Arabe" },
    { id: 325, name: "Orientica Bleu 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0077.jpg", category: "Arabe" },
    { id: 326, name: "Orientica Oud Saffron 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0078.jpg", category: "Arabe" },
    { id: 327, name: "Orientica Noir 100 ml", price: "$120.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0079.jpg", category: "Arabe" },

    // OTRAS MARCAS / INSPIRACIONES / NICHO 
    { id: 328, name: "Valentino Uomo", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0092.jpg", category: "Arabe" },
    { id: 329, name: "Valentino Donna", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0093.jpg", category: "Arabe" },
    { id: 330, name: "Valentino Intense", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0090.jpg", category: "Arabe" },
    { id: 331, name: "Valentino Born in Roma", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0091.jpg", category: "Arabe" },
    { id: 332, name: "Emporio Armani Stronger With You", price: "$88.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0094.jpg", category: "Arabe" },
    { id: 333, name: "Emporio Armani Stronger Intensely", price: "$93.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0095.jpg", category: "Arabe" },
    { id: 334, name: "Parfums de Marly Pegasus", price: "$100.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0112.jpg", category: "Arabe" },
    { id: 335, name: "Parfums de Marly Layton Royal", price: "$98.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0113.jpg", category: "Arabe" },
    { id: 336, name: "Parfums de Marly Kalan", price: "$100.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0114.jpg", category: "Arabe" },
    { id: 337, name: "Parfums de Marly Delina Royal", price: "$115.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0115.jpg", category: "Arabe" },
    { id: 338, name: "Xerjoff Erba Pura", price: "$125.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0116.jpg", category: "Arabe" },
    { id: 339, name: "Xerjoff Naxos", price: "$115.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0117.jpg", category: "Arabe" },
    { id: 340, name: "Xerjoff Alexandria II", price: "$116.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0118.jpg", category: "Arabe" },
    { id: 341, name: "Bianco Latte", price: "$113.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0119.jpg", category: "Arabe" },
    { id: 342, name: "Initio Oud For Greatness", price: "$125.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0120.jpg", category: "Arabe" },
    { id: 343, name: "Le Labo Santal 33", price: "$88.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0122.jpg", category: "Arabe" },
    { id: 344, name: "Maison Francis Kurkdjian Baccarat Rouge 540", price: "$90.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0126.jpg", category: "Arabe" },
    { id: 345, name: "Mancera Cedrat Boise", price: "$95.000", image: "images/catalogos/arabe/CATALOGO%20%C3%81RABE%20-%202026-0127.jpg", category: "Arabe" },

    // HOMBRE 
    // Dumont
    { id: 100, name: "Dumont Nitro Red", price: "$95.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0001.jpg", category: "Hombre" },

    // Jean Paul Gaultier
    { id: 101, name: "Jean Paul Gaultier Scandal Parfum Men", price: "$80.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0002.jpg", category: "Hombre" },
    { id: 102, name: "Jean Paul Gaultier Scandal Men", price: "$80.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0003.jpg", category: "Hombre" },
    { id: 103, name: "Jean Paul Gaultier Le Male La Parfum", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0004.jpg", category: "Hombre" },
    { id: 104, name: "Jean Paul Gaultier Le Male Elixir Absolu", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0005.jpg", category: "Hombre" },
    { id: 105, name: "Jean Paul Gaultier Le Male Elixir", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0006.jpg", category: "Hombre" },
    { id: 106, name: "Jean Paul Gaultier Le Male", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0007.jpg", category: "Hombre" },
    { id: 107, name: "Jean Paul Gaultier Le Beau", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0008.jpg", category: "Hombre" },
    { id: 108, name: "Jean Paul Gaultier Le Beau Parfum", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0009.jpg", category: "Hombre" },
    { id: 109, name: "Jean Paul Gaultier Paradise Garden", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0010.jpg", category: "Hombre" },
    { id: 110, name: "Jean Paul Gaultier Ultra Male", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0011.jpg", category: "Hombre" },

    // YSL
    { id: 111, name: "Yves Saint Laurent Y", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0012.jpg", category: "Hombre" },

    // Dior
    { id: 112, name: "Dior Sauvage", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0013.jpg", category: "Hombre" },
    { id: 113, name: "Dior Sauvage Elixir", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0014.jpg", category: "Hombre" },
    { id: 114, name: "Dior Fahrenheit", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0015.jpg", category: "Hombre" },

    // Paco Rabanne One Million
    { id: 115, name: "Paco Rabanne One Million", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0016.jpg", category: "Hombre" },
    { id: 116, name: "Paco Rabanne One Million Gold", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0017.jpg", category: "Hombre" },
    { id: 117, name: "Paco Rabanne One Million Lucky", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0018.jpg", category: "Hombre" },
    { id: 118, name: "Paco Rabanne One Million Privé", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0019.jpg", category: "Hombre" },
    { id: 119, name: "Paco Rabanne One Million Elixir", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0020.jpg", category: "Hombre" },
    { id: 120, name: "Paco Rabanne One Million Royal", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0021.jpg", category: "Hombre" },
    { id: 121, name: "Paco Rabanne One Million Parfum", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0022.jpg", category: "Hombre" },

    // Paco Rabanne Invictus
    { id: 122, name: "Paco Rabanne Invictus", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0023.jpg", category: "Hombre" },
    { id: 123, name: "Paco Rabanne Invictus Parfum", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0024.jpg", category: "Hombre" },
    { id: 124, name: "Paco Rabanne Invictus Legend", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0025.jpg", category: "Hombre" },
    { id: 125, name: "Paco Rabanne Invictus Intense", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0026.jpg", category: "Hombre" },
    { id: 126, name: "Paco Rabanne Invictus Victory", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0027.jpg", category: "Hombre" },
    { id: 127, name: "Paco Rabanne Invictus Victory Elixir", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0028.jpg", category: "Hombre" },
    { id: 128, name: "Paco Rabanne Invictus Aqua", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0029.jpg", category: "Hombre" },
    { id: 129, name: "Paco Rabanne Invictus Platinum", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0030.jpg", category: "Hombre" },

    // Paco Rabanne Phantom
    { id: 130, name: "Paco Rabanne Phantom", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0031.jpg", category: "Hombre" },
    { id: 131, name: "Paco Rabanne Phantom Intense", price: "$95.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0032.jpg", category: "Hombre" },
    { id: 132, name: "Paco Rabanne Phantom Parfum", price: "$95.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0033.jpg", category: "Hombre" },
    { id: 133, name: "Paco Rabanne Phantom Legion", price: "$100.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0034.jpg", category: "Hombre" },

    // Paco Rabanne XS
    { id: 134, name: "Paco Rabanne Pure XS", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0035.jpg", category: "Hombre" },
    { id: 135, name: "Paco Rabanne Black XS", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0036.jpg", category: "Hombre" },
    { id: 136, name: "Paco Rabanne Black XS L'Exces", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0037.jpg", category: "Hombre" },
    { id: 137, name: "Paco Rabanne Black XS L'Aphrodisiaque", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0038.jpg", category: "Hombre" },

    // Carolina Herrera
    { id: 138, name: "CH Bad Boy", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0040.jpg", category: "Hombre" },
    { id: 139, name: "CH Men", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0041.jpg", category: "Hombre" },
    { id: 140, name: "CH 212 Men NYC", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0042.jpg", category: "Hombre" },
    { id: 141, name: "CH 212 VIP Men", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0043.jpg", category: "Hombre" },
    { id: 142, name: "CH 212 VIP Black", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0044.jpg", category: "Hombre" },
    { id: 143, name: "CH 212 VIP Wild Party Men", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0045.jpg", category: "Hombre" },
    { id: 144, name: "CH 212 Heroes Men", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0046.jpg", category: "Hombre" },
    { id: 145, name: "CH 212 VIP Red Men", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0047.jpg", category: "Hombre" },
    { id: 146, name: "CH 212 VIP Wins Men", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0048.jpg", category: "Hombre" },
    { id: 147, name: "CH 212 Sexy Men", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0049.jpg", category: "Hombre" },
    { id: 148, name: "CH 212 Men Aqua", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0050.jpg", category: "Hombre" },
    { id: 149, name: "CH 212 VIP Black I Love NY", price: "$92.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0051.jpg", category: "Hombre" },

    // Chanel
    { id: 150, name: "Bleu de Chanel", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0052.jpg", category: "Hombre" },
    { id: 151, name: "Chanel Allure Homme Sport", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0053.jpg", category: "Hombre" },

    // Otras Marcas
    { id: 152, name: "Moschino Toy Boy", price: "$95.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0039.jpg", category: "Hombre" },
    { id: 153, name: "Clinique Happy Men", price: "$84.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0054.jpg", category: "Hombre" },
    { id: 154, name: "Victorinox Swiss Army", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0055.jpg", category: "Hombre" },

    // Creed
    { id: 155, name: "Creed Aventus", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0056.jpg", category: "Hombre" },
    { id: 156, name: "Creed Silver Mountain Water", price: "$87.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0057.jpg", category: "Hombre" },
    { id: 157, name: "Creed Millésime Impérial", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0058.jpg", category: "Hombre" },
    { id: 158, name: "Creed Vetiver", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0059.jpg", category: "Hombre" },
    { id: 159, name: "Creed Santal", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0060.jpg", category: "Hombre" },
    { id: 160, name: "Creed Green Irish Tweed", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0061.jpg", category: "Hombre" },

    // Bvlgari
    { id: 161, name: "Bvlgari Aqva", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0062.jpg", category: "Hombre" },
    { id: 162, name: "Bvlgari Man In Black", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0063.jpg", category: "Hombre" },
    { id: 163, name: "Bvlgari Pour Homme", price: "$92.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0064.jpg", category: "Hombre" },

    // Dolce & Gabbana
    { id: 164, name: "Dolce & Gabbana Light Blue Men", price: "$92.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0067.jpg", category: "Hombre" },
    { id: 165, name: "Dolce & Gabbana Pour Homme", price: "$92.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0068.jpg", category: "Hombre" },
    { id: 166, name: "Dolce & Gabbana K", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0069.jpg", category: "Hombre" },
    { id: 167, name: "Dolce & Gabbana The One Men", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0070.jpg", category: "Hombre" },

    // Hugo Boss
    { id: 168, name: "Hugo Boss Bottled", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0072.jpg", category: "Hombre" },
    { id: 169, name: "Hugo Boss Tonic", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0073.jpg", category: "Hombre" },
    { id: 170, name: "Hugo Boss Night", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0074.jpg", category: "Hombre" },
    { id: 171, name: "Hugo Boss Unlimited", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0075.jpg", category: "Hombre" },
    { id: 172, name: "Hugo Boss The Scent", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0080.jpg", category: "Hombre" },
    { id: 173, name: "Hugo Boss In Motion", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0081.jpg", category: "Hombre" },
    { id: 174, name: "Hugo Boss Orange", price: "$92.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0082.jpg", category: "Hombre" },
    { id: 175, name: "Hugo Boss Hugo", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0076.jpg", category: "Hombre" },
    { id: 176, name: "Hugo Boss Red", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0077.jpg", category: "Hombre" },
    { id: 177, name: "Hugo Boss Just Different", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0078.jpg", category: "Hombre" },
    { id: 178, name: "Hugo Boss Dark Blue", price: "$85.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0079.jpg", category: "Hombre" },

    // Más Marcas
    { id: 179, name: "Issey Miyake Men", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0083.jpg", category: "Hombre" },
    { id: 180, name: "Nautica Voyage", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0085.jpg", category: "Hombre" },
    { id: 181, name: "Montblanc Legend", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0095.jpg", category: "Hombre" },
    { id: 182, name: "Montblanc Explorer", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0098.jpg", category: "Hombre" },

    // Versace
    { id: 183, name: "Versace Eros", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0085.jpg", category: "Hombre" },
    { id: 184, name: "Versace Eros Flame", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0106.jpg", category: "Hombre" },
    { id: 185, name: "Versace Dylan Blue", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0109.jpg", category: "Hombre" },

    // Armani
    { id: 186, name: "Acqua Di Gio", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0111.jpg", category: "Hombre" },
    { id: 187, name: "Acqua Di Gio Profondo", price: "$90.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0112.jpg", category: "Hombre" },
    { id: 188, name: "Acqua Di Gio Parfum", price: "$95.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0113.jpg", category: "Hombre" },

    // Jean Pascal
    { id: 189, name: "Jean Pascal Caja", price: "$88.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0119.jpg", category: "Hombre" },
    { id: 190, name: "Jean Pascal Cuero", price: "$110.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0120.jpg", category: "Hombre" },

    // Ted Lapidus
    { id: 191, name: "Ted Lapidus", price: "$92.000", image: "images/catalogos/caballero/CATALOGO%20CABALLERO%20-%202026-0121.jpg", category: "Hombre" },

    // --- MUJER ---
    // Carolina Herrera Good Girl
    { id: 200, name: "CH Good Girl", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0003.jpg", category: "Mujer" },
    { id: 201, name: "CH Good Girl Velvet Fatale", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0001.jpg", category: "Mujer" },
    { id: 202, name: "CH Good Girl Blush", price: "$100.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0002.jpg", category: "Mujer" },
    { id: 203, name: "CH Good Girl Légère", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0004.jpg", category: "Mujer" },
    { id: 204, name: "CH Good Girl So Very", price: "$100.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0005.jpg", category: "Mujer" },
    { id: 205, name: "CH Good Girl Suprême", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0006.jpg", category: "Mujer" },
    { id: 206, name: "CH Good Girl Fantastic Pink", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0007.jpg", category: "Mujer" },
    { id: 207, name: "CH Good Girl Glorious Gold", price: "$100.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0008.jpg", category: "Mujer" },
    { id: 208, name: "CH Good Girl Dazzling Garden", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0009.jpg", category: "Mujer" },

    // Carolina Herrera 212
    { id: 209, name: "CH 212 Heroes Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0010.jpg", category: "Mujer" },
    { id: 210, name: "CH 212 VIP Rosé", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0011.jpg", category: "Mujer" },
    { id: 211, name: "CH 212 VIP Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0012.jpg", category: "Mujer" },
    { id: 212, name: "CH 212 Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0013.jpg", category: "Mujer" },
    { id: 213, name: "CH 212 Sexy Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0014.jpg", category: "Mujer" },
    { id: 214, name: "CH 212 VIP Red Rosé", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0015.jpg", category: "Mujer" },
    { id: 215, name: "CH 212 VIP Wins Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0016.jpg", category: "Mujer" },
    { id: 216, name: "CH 212 VIP Wild Party Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0017.jpg", category: "Mujer" },
    { id: 217, name: "CH Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0018.jpg", category: "Mujer" },

    // Ariana Grande
    { id: 218, name: "Ariana Grande Cloud", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0019.jpg", category: "Mujer" },
    { id: 219, name: "Ariana Grande Cloud Pink", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0020.jpg", category: "Mujer" },
    { id: 220, name: "Ariana Grande Thank U Next", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0021.jpg", category: "Mujer" },
    { id: 221, name: "Ariana Grande Thank U Next 2.0", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0022.jpg", category: "Mujer" },
    { id: 222, name: "Ariana Grande Sweet Like Candy", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0023.jpg", category: "Mujer" },
    { id: 223, name: "Ariana Grande Mod Vanilla", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0024.jpg", category: "Mujer" },
    { id: 224, name: "Ariana Grande R.E.M.", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0025.jpg", category: "Mujer" },
    { id: 225, name: "Ariana Grande Ari", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0026.jpg", category: "Mujer" },

    // Jean Paul Gaultier
    { id: 226, name: "Jean Paul Gaultier Scandal Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0027.jpg", category: "Mujer" },
    { id: 227, name: "Jean Paul Gaultier La Belle Parfum", price: "$100.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0028.jpg", category: "Mujer" },
    { id: 228, name: "Jean Paul Gaultier Divine", price: "$100.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0029.jpg", category: "Mujer" },
    { id: 229, name: "Jean Paul Gaultier La Belle Fleur Terrible", price: "$100.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0030.jpg", category: "Mujer" },

    // Dior
    { id: 230, name: "Dior Miss Dior", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0031.jpg", category: "Mujer" },
    { id: 231, name: "Dior J'adore", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0032.jpg", category: "Mujer" },

    // Moschino
    { id: 232, name: "Moschino Toy 2", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0033.jpg", category: "Mujer" },
    { id: 233, name: "Moschino Toy 2 Bubble Gum", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0034.jpg", category: "Mujer" },
    { id: 234, name: "Moschino Toy 2 Pearl", price: "$100.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0035.jpg", category: "Mujer" },
    { id: 235, name: "Moschino Set 30ml", price: "$120.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0036.jpg", category: "Mujer" },
    { id: 236, name: "Moschino Funny", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0037.jpg", category: "Mujer" },
    { id: 237, name: "Moschino Fresh", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0038.jpg", category: "Mujer" },

    // Bvlgari
    { id: 238, name: "Bvlgari Omnia Coral", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0039.jpg", category: "Mujer" },
    { id: 239, name: "Bvlgari Omnia Amethyste", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0040.jpg", category: "Mujer" },
    { id: 240, name: "Bvlgari Omnia Crystalline", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0041.jpg", category: "Mujer" },
    { id: 241, name: "Bvlgari Omnia Pink", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0042.jpg", category: "Mujer" },

    // Escada & Lancôme
    { id: 242, name: "Escada Sorbetto Rosso", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0043.jpg", category: "Mujer" },
    { id: 243, name: "Escada Miami Blossom", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0044.jpg", category: "Mujer" },
    { id: 244, name: "Lancôme La Vida es Bella", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0045.jpg", category: "Mujer" },
    { id: 245, name: "Lancôme Trésor", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0046.jpg", category: "Mujer" },
    { id: 246, name: "Lancôme Idôle", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0047.jpg", category: "Mujer" },

    // Chanel
    { id: 247, name: "Chanel Coco Mademoiselle", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0048.jpg", category: "Mujer" },
    { id: 248, name: "Chanel Nº5", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0049.jpg", category: "Mujer" },
    { id: 249, name: "Chanel Chance", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0050.jpg", category: "Mujer" },
    { id: 250, name: "Chanel Chance Tendre", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0051.jpg", category: "Mujer" },
    { id: 251, name: "Chanel Chance Fraîche", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0052.jpg", category: "Mujer" },

    // Britney Spears
    { id: 252, name: "Britney Spears Fantasy", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0053.jpg", category: "Mujer" },
    { id: 253, name: "Britney Spears Fantasy Midnight", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0054.jpg", category: "Mujer" },

    // Dolce & Gabbana
    { id: 254, name: "Dolce & Gabbana Light Blue Woman", price: "$80.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0055.jpg", category: "Mujer" },
    { id: 255, name: "Dolce & Gabbana Devotion", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0056.jpg", category: "Mujer" },
    { id: 256, name: "Dolce & Gabbana The One Woman", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0057.jpg", category: "Mujer" },

    // Hugo Boss
    { id: 257, name: "Hugo Boss The Scent For Her", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0059.jpg", category: "Mujer" },

    // Lacoste
    { id: 258, name: "Lacoste Sparkling", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0060.jpg", category: "Mujer" },
    { id: 259, name: "Lacoste Elegant", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0061.jpg", category: "Mujer" },
    { id: 260, name: "Lacoste Natural", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0062.jpg", category: "Mujer" },
    { id: 261, name: "Lacoste Touch of Pink", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0063.jpg", category: "Mujer" },

    // Paco Rabanne
    { id: 262, name: "Paco Rabanne Fame", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0064.jpg", category: "Mujer" },
    { id: 263, name: "Paco Rabanne Lady Million", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0065.jpg", category: "Mujer" },
    { id: 264, name: "Paco Rabanne Olympéa", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0066.jpg", category: "Mujer" },
    { id: 265, name: "Paco Rabanne Pure XS Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0067.jpg", category: "Mujer" },

    // Paris Hilton
    { id: 266, name: "Paris Hilton Can Can", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0068.jpg", category: "Mujer" },
    { id: 267, name: "Paris Hilton Can Can Burlesque", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0069.jpg", category: "Mujer" },
    { id: 268, name: "Paris Hilton", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0070.jpg", category: "Mujer" },
    { id: 269, name: "Paris Hilton Heiress", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0071.jpg", category: "Mujer" },
    { id: 270, name: "Paris Hilton Dazzle", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0072.jpg", category: "Mujer" },

    // Katy Perry
    { id: 271, name: "Katy Perry Meow", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0073.jpg", category: "Mujer" },
    { id: 272, name: "Katy Perry Purr", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0074.jpg", category: "Mujer" },

    // Armani
    { id: 273, name: "Armani Acqua di Gioia", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0075.jpg", category: "Mujer" },
    { id: 274, name: "Armani Sí", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0076.jpg", category: "Mujer" },

    // Calvin Klein
    { id: 275, name: "Calvin Klein CK In2U Woman", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0077.jpg", category: "Mujer" },
    { id: 276, name: "Calvin Klein Euphoria", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0078.jpg", category: "Mujer" },

    // Perry Ellis
    { id: 277, name: "Perry Ellis 360 Woman", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0079.jpg", category: "Mujer" },
    { id: 278, name: "Perry Ellis 360 Coral", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0080.jpg", category: "Mujer" },

    // Ralph Lauren
    { id: 279, name: "Ralph Lauren Ralph", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0081.jpg", category: "Mujer" },

    // Versace
    { id: 280, name: "Versace Bright Crystal", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0082.jpg", category: "Mujer" },
    { id: 281, name: "Versace Yellow Diamond", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0083.jpg", category: "Mujer" },
    { id: 282, name: "Versace Dylan Blue Woman", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0084.jpg", category: "Mujer" },
    { id: 283, name: "Versace Dylan Purple", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0085.jpg", category: "Mujer" },
    { id: 284, name: "Versace Dylan Turquoise", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0086.jpg", category: "Mujer" },

    // Creed
    { id: 285, name: "Creed Aventus Her", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0087.jpg", category: "Mujer" },
    { id: 286, name: "Creed Love in White", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0088.jpg", category: "Mujer" },
    { id: 287, name: "Creed Love in Black", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0089.jpg", category: "Mujer" },

    // Más marcas
    { id: 288, name: "Victoria's Secret Bombshell", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0090.jpg", category: "Mujer" },
    { id: 289, name: "Issey Miyake Woman", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0091.jpg", category: "Mujer" },
    { id: 290, name: "Tommy Hilfiger Tommy Girl", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0092.jpg", category: "Mujer" },
    { id: 291, name: "Burberry Her", price: "$90.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0093.jpg", category: "Mujer" },
    { id: 292, name: "Halloween", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0094.jpg", category: "Mujer" },
    { id: 293, name: "DKNY Be Delicious", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0095.jpg", category: "Mujer" },
    { id: 294, name: "Kenzo Flower", price: "$95.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0096.jpg", category: "Mujer" },
    { id: 295, name: "Tous Touch", price: "$85.000", image: "images/catalogos/dama/CATALOGO%20DAMA%20-%202026-0097.jpg", category: "Mujer" }
];
