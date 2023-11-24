const title = document.getElementById('content')
const input = document.getElementById('input')
const button = document.getElementById('button')

button.addEventListener('click', () => {
    alert('dadsad')
})
const array = [
    {
        "name": "Pansy_Predovic52",
        "age": "2",
        "adress": "8913 Langworth Ranch",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/250.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "1"
    },
    {
        "name": "Lafayette96",
        "age": "1",
        "adress": "33232 Deron Meadows",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/369.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "2"
    },
    {
        "name": "Mateo.Bruen",
        "age": "3",
        "adress": "445 Robel Extension",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/301.jpg",
        "desprition": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "3"
    },
    {
        "name": "Melissa.Stoltenberg",
        "age": "4",
        "adress": "481 Retha Estate",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/830.jpg",
        "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "4"
    },
    {
        "name": "Shania.Heidenreich",
        "age": "6",
        "adress": "297 Mitchell Shores",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "5"
    },
    {
        "name": "Akeem14",
        "age": "6",
        "adress": "551 Buster Parkway",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/726.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "6"
    },
    {
        "name": "Lewis_Abernathy33",
        "age": "7",
        "adress": "2897 Ramiro Springs",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/315.jpg",
        "desprition": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "7"
    },
    {
        "name": "Jerod_Reichel",
        "age": "5",
        "adress": "50580 Murray Mall",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/796.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "8"
    },
    {
        "name": "Presley_Wisozk9",
        "age": "6",
        "adress": "5876 Schaden Trafficway",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/233.jpg",
        "desprition": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "9"
    },
    {
        "name": "Gabriel_Smitham40",
        "age": "2",
        "adress": "50603 Mackenzie Springs",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/606.jpg",
        "desprition": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "10"
    },
    {
        "name": "Jerald.Moen",
        "age": "8",
        "adress": "721 Gerlach Walk",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1022.jpg",
        "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "11"
    },
    {
        "name": "Rogelio91",
        "age": "7",
        "adress": "273 Waelchi Plains",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1065.jpg",
        "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "12"
    },
    {
        "name": "Carolanne_Haag",
        "age": "7",
        "adress": "641 Turner Rue",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg",
        "desprition": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "13"
    },
    {
        "name": "Minnie_Emmerich29",
        "age": "7",
        "adress": "040 Nasir Mall",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/54.jpg",
        "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "14"
    },
    {
        "name": "Octavia_Hackett53",
        "age": "7",
        "adress": "36204 Dickens Square",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1106.jpg",
        "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "15"
    },
    {
        "name": "Nigel35",
        "age": "8",
        "adress": "9048 Cathy Mills",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/545.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "16"
    },
    {
        "name": "Tyshawn.Grant",
        "age": "7",
        "adress": "7359 Marion Way",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/874.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "17"
    },
    {
        "name": "Nat9",
        "age": "2",
        "adress": "447 America Course",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/340.jpg",
        "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "18"
    },
    {
        "name": "Roman_Harber81",
        "age": "8",
        "adress": "4566 Koch Roads",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/532.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "19"
    },
    {
        "name": "Eduardo96",
        "age": "5",
        "adress": "08316 Sarai Fork",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1150.jpg",
        "desprition": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "20"
    },
    {
        "name": "Orion.Gleason98",
        "age": "1",
        "adress": "9060 Abdiel Crossing",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg",
        "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "21"
    },
    {
        "name": "Karianne_Boehm45",
        "age": "6",
        "adress": "08928 Sylvia Garden",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/563.jpg",
        "desprition": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "22"
    },
    {
        "name": "Mavis_Farrell74",
        "age": "3",
        "adress": "083 Laurianne Dam",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/664.jpg",
        "desprition": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "id": "23"
    },
    {
        "name": "Antonette_Orn78",
        "age": "8",
        "adress": "0105 Salma Drives",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1192.jpg",
        "desprition": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "id": "24"
    },
    {
        "name": "Melany_Fay99",
        "age": "9",
        "adress": "0178 Kara Circle",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/465.jpg",
        "desprition": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "25"
    },
    {
        "name": "Toney_Kris72",
        "age": "1",
        "adress": "36203 April Gateway",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/610.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "26"
    },
    {
        "name": "Chanel5",
        "age": "8",
        "adress": "0051 Blanda Fields",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg",
        "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "27"
    },
    {
        "name": "Frieda40",
        "age": "3",
        "adress": "768 Dino Falls",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg",
        "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "28"
    },
    {
        "name": "Beatrice.Hessel",
        "age": "4",
        "adress": "1930 Abernathy Glen",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1145.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "29"
    },
    {
        "name": "Jarod.Boyle",
        "age": "1",
        "adress": "505 Bednar Villages",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/206.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "30"
    },
    {
        "name": "Shawn12",
        "age": "2",
        "adress": "53390 Hintz Mountain",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
        "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "31"
    },
    {
        "name": "Ayla.Thompson",
        "age": "9",
        "adress": "0420 Delfina Lane",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1069.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "32"
    },
    {
        "name": "Dawson_Mayer",
        "age": "2",
        "adress": "852 Alberto Heights",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/863.jpg",
        "desprition": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "33"
    },
    {
        "name": "Salvador84",
        "age": "5",
        "adress": "90026 O'Reilly River",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/288.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "34"
    },
    {
        "name": "Keaton.Krajcik76",
        "age": "1",
        "adress": "92562 Nils Pike",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1213.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "35"
    },
    {
        "name": "Vernie72",
        "age": "2",
        "adress": "42139 Carlotta Keys",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/888.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "36"
    },
    {
        "name": "Eliza.Larkin33",
        "age": "3",
        "adress": "656 Ana Rapid",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
        "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "37"
    },
    {
        "name": "Justen_Kuhic",
        "age": "5",
        "adress": "60642 Yoshiko Harbors",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/680.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "38"
    },
    {
        "name": "Maxwell_Fisher",
        "age": "3",
        "adress": "33062 Demarco Falls",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/187.jpg",
        "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "39"
    },
    {
        "name": "Grayson15",
        "age": "4",
        "adress": "8340 Orn Knoll",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/407.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "40"
    },
    {
        "name": "Wilson_Nienow",
        "age": "2",
        "adress": "8413 Loraine Haven",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/330.jpg",
        "desprition": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "41"
    },
    {
        "name": "Marcel12",
        "age": "6",
        "adress": "722 Rohan Camp",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/499.jpg",
        "desprition": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "id": "42"
    },
    {
        "name": "Darren86",
        "age": "2",
        "adress": "438 Carol Mall",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/782.jpg",
        "desprition": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "43"
    },
    {
        "name": "Morris33",
        "age": "2",
        "adress": "44269 Golden Drives",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1228.jpg",
        "desprition": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "44"
    },
    {
        "name": "Zoey6",
        "age": "3",
        "adress": "7849 Santa Trace",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/20.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "45"
    },
    {
        "name": "Sylvester.Boyle",
        "age": "6",
        "adress": "88070 Lockman Gardens",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1041.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "46"
    },
    {
        "name": "Elinore_Stokes20",
        "age": "3",
        "adress": "0639 Parker Falls",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/76.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "47"
    },
    {
        "name": "Kenyatta79",
        "age": "3",
        "adress": "2841 Ritchie Station",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/472.jpg",
        "desprition": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "48"
    },
    {
        "name": "Consuelo99",
        "age": "1",
        "adress": "2791 Merritt Curve",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/108.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "49"
    },
    {
        "name": "Lindsay.OHara61",
        "age": "4",
        "adress": "484 Margie Manors",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1079.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "50"
    },
    {
        "name": "Claudia_Franey35",
        "age": "2",
        "adress": "805 Cydney Crescent",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/781.jpg",
        "desprition": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "id": "51"
    },
    {
        "name": "August7",
        "age": "7",
        "adress": "491 Dibbert Burg",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/964.jpg",
        "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "52"
    },
    {
        "name": "Alfredo_Auer",
        "age": "4",
        "adress": "667 Taya Unions",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "53"
    },
    {
        "name": "Neha.Kunze",
        "age": "8",
        "adress": "481 Dickens Burgs",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/662.jpg",
        "desprition": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "54"
    },
    {
        "name": "Jacynthe.Roberts",
        "age": "7",
        "adress": "356 Feest Roads",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/118.jpg",
        "desprition": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "55"
    },
    {
        "name": "Freddy.Blick",
        "age": "3",
        "adress": "609 Forest Bypass",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/551.jpg",
        "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "56"
    },
    {
        "name": "Lizeth51",
        "age": "4",
        "adress": "27901 Cheyenne Haven",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/759.jpg",
        "desprition": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "57"
    },
    {
        "name": "Skyla75",
        "age": "3",
        "adress": "628 Destany Vista",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/508.jpg",
        "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "58"
    },
    {
        "name": "Clifford5",
        "age": "4",
        "adress": "81929 Alena Corners",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/104.jpg",
        "desprition": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "59"
    },
    {
        "name": "Dakota.Ratke",
        "age": "7",
        "adress": "961 Senger Port",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1069.jpg",
        "desprition": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "60"
    },
    {
        "name": "Edwin_OReilly",
        "age": "2",
        "adress": "07837 Doyle Divide",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/249.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "61"
    },
    {
        "name": "Dorthy.Beatty",
        "age": "2",
        "adress": "44313 Sedrick Trafficway",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/150.jpg",
        "desprition": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "62"
    },
    {
        "name": "Jana7",
        "age": "7",
        "adress": "05985 Beier Shores",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/410.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "63"
    },
    {
        "name": "Billie.Dickinson",
        "age": "2",
        "adress": "84381 Wisozk Square",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1120.jpg",
        "desprition": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "64"
    },
    {
        "name": "Alfonzo_Yost73",
        "age": "2",
        "adress": "113 Koss River",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1117.jpg",
        "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "65"
    },
    {
        "name": "Madge82",
        "age": "7",
        "adress": "708 Aidan Rapid",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/184.jpg",
        "desprition": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "id": "66"
    },
    {
        "name": "Deonte56",
        "age": "8",
        "adress": "55393 Yost Parks",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/368.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "67"
    },
    {
        "name": "Erwin.Ryan25",
        "age": "5",
        "adress": "17186 Citlalli Villages",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/164.jpg",
        "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "68"
    },
    {
        "name": "Jeanette_Bayer70",
        "age": "1",
        "adress": "8254 Rodriguez Park",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/677.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "69"
    },
    {
        "name": "Marquis78",
        "age": "1",
        "adress": "8861 Hertha Pines",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/383.jpg",
        "desprition": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "70"
    },
    {
        "name": "Brandon.Gerlach15",
        "age": "8",
        "adress": "97366 Dietrich Spring",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/705.jpg",
        "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "71"
    },
    {
        "name": "Afton.Greenfelder",
        "age": "6",
        "adress": "085 Avery Road",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/426.jpg",
        "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "72"
    },
    {
        "name": "Brigitte_DuBuque",
        "age": "7",
        "adress": "9091 Katherine Tunnel",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1035.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "73"
    },
    {
        "name": "Alexane96",
        "age": "6",
        "adress": "455 Hammes Well",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/698.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "74"
    },
    {
        "name": "Fredy.Rowe",
        "age": "8",
        "adress": "2821 Crist Bypass",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/143.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "75"
    },
    {
        "name": "Misael25",
        "age": "3",
        "adress": "6378 Yundt Station",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/566.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "76"
    },
    {
        "name": "Clement12",
        "age": "4",
        "adress": "9362 Anjali Camp",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/423.jpg",
        "desprition": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "id": "77"
    },
    {
        "name": "Raphael20",
        "age": "1",
        "adress": "9345 Tyrese Light",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/557.jpg",
        "desprition": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "78"
    },
    {
        "name": "Jerry.Wyman",
        "age": "2",
        "adress": "540 Edmund Mills",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/345.jpg",
        "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "79"
    },
    {
        "name": "Kennedy.Boyer",
        "age": "9",
        "adress": "3503 Vance Lake",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/731.jpg",
        "desprition": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "id": "80"
    },
    {
        "name": "Brook4",
        "age": "7",
        "adress": "36576 Enid Summit",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/762.jpg",
        "desprition": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "id": "81"
    },
    {
        "name": "Kacie98",
        "age": "2",
        "adress": "785 Sherman Point",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1208.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "82"
    },
    {
        "name": "Declan.Zemlak15",
        "age": "6",
        "adress": "7438 Darian Streets",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/55.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "83"
    },
    {
        "name": "Felicita_Kunde83",
        "age": "1",
        "adress": "9732 Witting Fork",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1196.jpg",
        "desprition": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "84"
    },
    {
        "name": "Antonina.Weissnat47",
        "age": "3",
        "adress": "061 Rosalee Dale",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1000.jpg",
        "desprition": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "85"
    },
    {
        "name": "Paula.OHara79",
        "age": "5",
        "adress": "95002 Anthony Walks",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/921.jpg",
        "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "86"
    },
    {
        "name": "Cecile.OKon",
        "age": "7",
        "adress": "168 Willms Oval",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/879.jpg",
        "desprition": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "87"
    },
    {
        "name": "Camila99",
        "age": "6",
        "adress": "94157 Douglas Pine",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1003.jpg",
        "desprition": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "88"
    },
    {
        "name": "Jade_Langworth57",
        "age": "3",
        "adress": "620 Runolfsdottir Manor",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/470.jpg",
        "desprition": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "89"
    },
    {
        "name": "Karen_Heller",
        "age": "3",
        "adress": "38004 Josianne Point",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1113.jpg",
        "desprition": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "90"
    },
    {
        "name": "Adolf_Toy",
        "age": "2",
        "adress": "14190 Beer Walks",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/680.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "91"
    },
    {
        "name": "Skye72",
        "age": "3",
        "adress": "60363 Graciela Landing",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/56.jpg",
        "desprition": "The Football Is Good For Training And Recreational Purposes",
        "id": "92"
    },
    {
        "name": "Germaine_Dibbert50",
        "age": "9",
        "adress": "611 Leatha Spurs",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/415.jpg",
        "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "93"
    },
    {
        "name": "Jamal.Jacobson",
        "age": "4",
        "adress": "86654 Schmeler Park",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1241.jpg",
        "desprition": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "94"
    },
    {
        "name": "Rosalinda94",
        "age": "2",
        "adress": "637 Hyman Dale",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1008.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "95"
    },
    {
        "name": "Meaghan91",
        "age": "2",
        "adress": "8951 Douglas Cape",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/179.jpg",
        "desprition": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "96"
    },
    {
        "name": "Ressie.Heaney72",
        "age": "6",
        "adress": "69694 Wiegand Shore",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1097.jpg",
        "desprition": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "97"
    },
    {
        "name": "Nicola69",
        "age": "9",
        "adress": "1135 Hintz Turnpike",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/569.jpg",
        "desprition": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "id": "98"
    },
    {
        "name": "Jailyn.Lynch20",
        "age": "7",
        "adress": "89106 Grayce Avenue",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1039.jpg",
        "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "99"
    },
    {
        "name": "Elise.Schmidt92",
        "age": "8",
        "adress": "2868 Jasper Keys",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/168.jpg",
        "desprition": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "100"
    }
]
input.addEventListener('input', (e) => {
    console.log(e.target.value);

    const value = e.target.value
    const searchArray = []
    for (let iu = 0; iu < array.length; iu++) {
        const element = array[iu];
        if (value === element.name) {
            searchArray.push(element)
        }

    }

    for (let i = 0; i < searchArray.length; i++) {
        const element = searchArray[i];

        title.innerHTML += `<div class='coll'>
                             <img src="${element.avatar}" alt="">
                              <h2>${element.name}</h2>
                              <p>${element.desprition}</p>
                              
                            </div>`

    }
})
console.log(title);


document.getElementById("button").addEventListener("click", function() {
    createCircle();
});

function createCircle() {
    var circle = document.createElement("div");

    circle.classList.add("circle");

    document.getElementById("content").appendChild(circle);
}