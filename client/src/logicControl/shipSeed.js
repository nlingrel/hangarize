const shipSeed = [
    {
        id: 1,
        name: '100i',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 45,
        userPrice: 45,
        role: 'Touring',
        size: 'Small',
    },
    {
        id: 2,
        name: '125a',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 55,
        userPrice: 55,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 3,
        name: '135c',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 60,
        userPrice: 60,
        role: 'Light Freight',
        size: 'Small',
    },
    {
        id: 4,
        name: '300i',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 55,
        userPrice: 55,
        role: 'Touring',
        size: 'Small',
    },
    {
        id: 5,
        name: '315p',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 65,
        userPrice: 65,
        role: 'Pathfinder',
        size: 'Small',
    },
    {
        id: 6,
        name: '325a',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 70,
        userPrice: 70,
        role: 'Interdiction',
        size: 'Small',
    },
    {
        id: 7,
        name: '350r',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 125,
        userPrice: 125,
        role: 'Racing',
        size: 'Small',
    },
    {
        id: 8,
        name: '600i',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 435,
        userPrice: 435,
        role: 'Personal Transport',
        size: 'Small',
    },
    {
        id: 9,
        name: '85X',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 50,
        userPrice: 50,
        role: 'Touring',
        size: 'Snub',
    },
    {
        id: 10,
        name: '890 Jump',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 950,
        userPrice: 950,
        role: 'Touring',
        size: 'Capital',
    },
    {
        id: 11,
        name: 'A2 Hercules',
        manufacturer: 'Crusader Industries',
        defaultPrice: 700,
        userPrice: 700,
        role: 'Heavy Military Lifting',
        size: 'Large',
    },
    {
        id: 12,
        name: 'Apollo Medivac',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 275,
        userPrice: 275,
        role: 'Support - Medical',
        size: 'Medium',
    },
    {
        id: 13,
        name: 'Apollo Triage',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 250,
        userPrice: 250,
        role: 'Support - Medical',
        size: 'Medium',
    },
    {
        id: 14,
        name: 'Ares Inferno',
        manufacturer: 'Crusader Industries',
        defaultPrice: 220,
        userPrice: 220,
        role: 'Anti-Capital',
        size: 'Medium',
    },
    {
        id: 15,
        name: 'Ares Ion',
        manufacturer: 'Crusader Industries',
        defaultPrice: 220,
        userPrice: 220,
        role: 'Anti-Capital',
        size: 'Medium',
    },
    {
        id: 16,
        name: 'Arrow',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 75,
        userPrice: 75,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 17,
        name: 'Aurora CL',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 45,
        userPrice: 45,
        role: 'Light Freight',
        size: 'Small',
    },
    {
        id: 18,
        name: 'Aurora ES',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 20,
        userPrice: 20,
        role: 'Pathfinder',
        size: 'Small',
    },
    {
        id: 19,
        name: 'Aurora LN',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 35,
        userPrice: 35,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 20,
        name: 'Aurora LX',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 30,
        userPrice: 30,
        role: 'Pathfinder',
        size: 'Small',
    },
    {
        id: 21,
        name: 'Aurora MR',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 25,
        userPrice: 25,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 22,
        name: 'Avenger Stalker',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 60,
        userPrice: 60,
        role: 'Interdiction',
        size: 'Small',
    },
    {
        id: 23,
        name: 'Avenger Titan',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 50,
        userPrice: 50,
        role: 'Light Freight',
        size: 'Small',
    },
    {
        id: 24,
        name: 'Avenger Titan Renegade',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 75,
        userPrice: 75,
        role: 'Light Freight',
        size: 'Small',
    },
    {
        id: 25,
        name: 'Avenger Warlock',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 85,
        userPrice: 85,
        role: 'Interdiction',
        size: 'Small',
    },
    {
        id: 26,
        name: 'Ballista',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 140,
        userPrice: 140,
        role: 'Military',
        size: 'Small',
    },
    {
        id: 27,
        name: 'Blade (replica)',
        manufacturer: 'Esperia',
        defaultPrice: 275,
        userPrice: 275,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 28,
        name: 'Buccaneer',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 110,
        userPrice: 110,
        role: 'Interdiction',
        size: 'Small',
    },
    {
        id: 29,
        name: 'C2 Hercules',
        manufacturer: 'Crusader Industries',
        defaultPrice: 360,
        userPrice: 360,
        role: 'Heavy Lifting',
        size: 'Large',
    },
    {
        id: 30,
        name: 'C8 Pisces',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 0,
        userPrice: 0,
        role: 'Pathfinder',
        size: 'Snub',
    },
    {
        id: 31,
        name: 'C8X Pisces Expedition',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 45,
        userPrice: 45,
        role: 'Pathfinder',
        size: 'Snub',
    },
    {
        id: 32,
        name: 'Carrack',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 600,
        userPrice: 600,
        role: 'Expedition',
        size: 'Large',
    },
    {
        id: 33,
        name: 'Caterpillar',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 295,
        userPrice: 295,
        role: 'Transport',
        size: 'Large',
    },
    {
        id: 34,
        name: 'Constellation Andromeda',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 225,
        userPrice: 225,
        role: 'Medium Freight',
        size: 'Large',
    },
    {
        id: 35,
        name: 'Constellation Aquila',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 310,
        userPrice: 310,
        role: 'Expedition',
        size: 'Large',
    },
    {
        id: 36,
        name: 'Constellation Phoenix',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 350,
        userPrice: 350,
        role: 'Touring',
        size: 'Large',
    },
    {
        id: 37,
        name: 'Constellation Taurus',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 150,
        userPrice: 150,
        role: 'Medium Freight',
        size: 'Large',
    },
    {
        id: 38,
        name: 'Corsair',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 215,
        userPrice: 215,
        role: 'Exploration',
        size: 'Large',
    },
    {
        id: 39,
        name: 'Crucible',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 350,
        userPrice: 350,
        role: 'Heavy Repair',
        size: 'Large',
    },
    {
        id: 40,
        name: 'Cutlass Black',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 100,
        userPrice: 100,
        role: 'Medium Fighter / Medium Freight',
        size: 'Medium',
    },
    {
        id: 41,
        name: 'Cutlass Blue',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 150,
        userPrice: 150,
        role: 'Interdiction',
        size: 'Medium',
    },
    {
        id: 42,
        name: 'Cutlass Red',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 135,
        userPrice: 135,
        role: 'Search & Rescue',
        size: 'Medium',
    },
    {
        id: 43,
        name: 'Cyclone',
        manufacturer: 'Tumbril Land Systems',
        defaultPrice: 55,
        userPrice: 55,
        role: 'Transport',
        size: 'Small',
    },
    {
        id: 44,
        name: 'Cyclone-AA',
        manufacturer: 'Tumbril Land Systems',
        defaultPrice: 80,
        userPrice: 80,
        role: 'Anti-Air',
        size: 'Small',
    },
    {
        id: 45,
        name: 'Cyclone-RC',
        manufacturer: 'Tumbril Land Systems',
        defaultPrice: 65,
        userPrice: 65,
        role: 'Racing',
        size: 'Small',
    },
    {
        id: 46,
        name: 'Cyclone-RN',
        manufacturer: 'Tumbril Land Systems',
        defaultPrice: 65,
        userPrice: 65,
        role: 'Reconnaissance',
        size: 'Small',
    },
    {
        id: 47,
        name: 'Cyclone-TR',
        manufacturer: 'Tumbril Land Systems',
        defaultPrice: 65,
        userPrice: 65,
        role: 'Combat',
        size: 'Small',
    },
    {
        id: 48,
        name: 'Defender',
        manufacturer: 'Banu Souli',
        defaultPrice: 220,
        userPrice: 220,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 49,
        name: 'Dragonfly',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 40,
        userPrice: 40,
        role: 'Racing',
        size: 'Snub',
    },
    {
        id: 50,
        name: 'Eclipse',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 300,
        userPrice: 300,
        role: 'Stealth Bomber',
        size: 'Medium',
    },
    {
        id: 51,
        name: 'Endeavor',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 350,
        userPrice: 350,
        role: 'Heavy Science',
        size: 'Capital',
    },
    {
        id: 52,
        name: 'F7C Hornet',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 110,
        userPrice: 110,
        role: 'Medium fighter',
        size: 'Small',
    },
    {
        id: 53,
        name: 'F7C Hornet Wildfire',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 175,
        userPrice: 175,
        role: 'Medium Fighter',
        size: 'Small',
    },
    {
        id: 54,
        name: 'F7C-M Super Hornet',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 180,
        userPrice: 180,
        role: 'Medium Fighter',
        size: 'Small',
    },
    {
        id: 55,
        name: 'F7C-R Hornet Tracker',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 140,
        userPrice: 140,
        role: 'Pathfinder',
        size: 'Small',
    },
    {
        id: 56,
        name: 'F7C-S Hornet Ghost',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 125,
        userPrice: 125,
        role: 'Stealth Fighter',
        size: 'Small',
    },
    {
        id: 57,
        name: 'Freelancer',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 110,
        userPrice: 110,
        role: 'Medium Freight',
        size: 'Medium',
    },
    {
        id: 58,
        name: 'Freelancer DUR',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 135,
        userPrice: 135,
        role: 'Expedition',
        size: 'Medium',
    },
    {
        id: 59,
        name: 'Freelancer MAX',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 150,
        userPrice: 150,
        role: 'Heavy Freight',
        size: 'Medium',
    },
    {
        id: 60,
        name: 'Freelancer MIS',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 175,
        userPrice: 175,
        role: 'Gun ship',
        size: 'Medium',
    },
    {
        id: 61,
        name: 'G12',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 55,
        userPrice: 55,
        role: 'Touring',
        size: 'Small',
    },
    {
        id: 62,
        name: 'G12a',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 60,
        userPrice: 60,
        role: 'Combat',
        size: 'Small',
    },
    {
        id: 63,
        name: 'G12r',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 55,
        userPrice: 55,
        role: 'Racing',
        size: 'Small',
    },
    {
        id: 64,
        name: 'Genesis Starliner',
        manufacturer: 'Crusader Industries',
        defaultPrice: 400,
        userPrice: 400,
        role: 'Passenger Transport',
        size: 'Large',
    },
    {
        id: 65,
        name: 'Gladiator',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 165,
        userPrice: 165,
        role: 'Light Bomber',
        size: 'Small',
    },
    {
        id: 66,
        name: 'Gladius',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 90,
        userPrice: 90,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 67,
        name: 'Gladius Valiant',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 110,
        userPrice: 110,
        role: 'Short-range Dogfighter',
        size: 'Small',
    },
    {
        id: 68,
        name: 'Glaive (replica)',
        manufacturer: 'Esperia',
        defaultPrice: 350,
        userPrice: 350,
        role: 'Medium Fighter',
        size: 'Medium',
    },
    {
        id: 69,
        name: 'Hammerhead',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 725,
        userPrice: 725,
        role: 'Heavy Gun Ship',
        size: 'Large',
    },
    {
        id: 70,
        name: 'Hawk',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 100,
        userPrice: 100,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 71,
        name: 'Herald',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 85,
        userPrice: 85,
        role: 'Medium Data',
        size: 'Small',
    },
    {
        id: 72,
        name: 'Hull A',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 60,
        userPrice: 60,
        role: 'Cargo',
        size: 'Small',
    },
    {
        id: 73,
        name: 'Hull B',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 90,
        userPrice: 90,
        role: 'Heavy Freight',
        size: 'Medium',
    },
    {
        id: 74,
        name: 'Hull C',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 250,
        userPrice: 250,
        role: 'Heavy Freight',
        size: 'Large',
    },
    {
        id: 75,
        name: 'Hull D',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 350,
        userPrice: 350,
        role: 'Transport',
        size: 'Capital',
    },
    {
        id: 76,
        name: 'Hull E',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 650,
        userPrice: 650,
        role: 'Transport',
        size: 'Capital',
    },
    {
        id: 77,
        name: 'Hurricane',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 195,
        userPrice: 195,
        role: 'Heavy Fighter',
        size: 'Small',
    },
    {
        id: 78,
        name: 'Idris-K',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 1800,
        userPrice: 1800,
        role: 'Frigate',
        size: 'Capital',
    },
    {
        id: 79,
        name: 'Idris-M',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 1000,
        userPrice: 1000,
        role: 'Frigate',
        size: 'Capital',
    },
    {
        id: 80,
        name: 'Idris-P',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 1500,
        userPrice: 1500,
        role: 'Frigate',
        size: 'Capital',
    },
    {
        id: 81,
        name: 'Javelin',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 3000,
        userPrice: 3000,
        role: 'Destroyer',
        size: 'Capital',
    },
    {
        id: 82,
        name: 'Khartu-al',
        manufacturer: 'Aopoa',
        defaultPrice: 170,
        userPrice: 170,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 83,
        name: 'Kraken',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 1650,
        userPrice: 1650,
        role: 'Support',
        size: 'Capital',
    },
    {
        id: 84,
        name: 'Kraken Privateer',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 2000,
        userPrice: 2000,
        role: 'Multi-role, light carrier',
        size: 'Capital',
    },
    {
        id: 85,
        name: 'M2 Hercules',
        manufacturer: 'Crusader Industries',
        defaultPrice: 480,
        userPrice: 480,
        role: 'Heavy Military Lifting',
        size: 'Large',
    },
    {
        id: 86,
        name: 'M50',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 100,
        userPrice: 100,
        role: 'Racing/Interdiction',
        size: 'Small',
    },
    {
        id: 87,
        name: 'Mantis',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 150,
        userPrice: 150,
        role: 'Interdiction',
        size: 'Small',
    },
    {
        id: 88,
        name: 'Merchantman',
        manufacturer: 'Banu Souli',
        defaultPrice: 350,
        userPrice: 350,
        role: 'Heavy Freight',
        size: 'Large',
    },
    {
        id: 89,
        name: 'Mercury Star Runner',
        manufacturer: 'Crusader Industries',
        defaultPrice: 225,
        userPrice: 225,
        role: 'Blockade Runner',
        size: 'Medium',
    },
    {
        id: 90,
        name: 'MOLE',
        manufacturer: 'Argo Astronautics',
        defaultPrice: 315,
        userPrice: 315,
        role: 'Mining',
        size: 'Medium',
    },
    {
        id: 91,
        name: 'MPUV-1C',
        manufacturer: 'Argo Astronautics',
        defaultPrice: 35,
        userPrice: 35,
        role: 'Light Freight',
        size: 'Snub',
    },
    {
        id: 92,
        name: 'MPUV-1P',
        manufacturer: 'Argo Astronautics',
        defaultPrice: 40,
        userPrice: 40,
        role: 'Passenger',
        size: 'Snub',
    },
    {
        id: 93,
        name: 'Mustang Alpha',
        manufacturer: 'Consolidated Outland',
        defaultPrice: 30,
        userPrice: 30,
        role: 'Light Freight',
        size: 'Small',
    },
    {
        id: 94,
        name: 'Mustang Beta',
        manufacturer: 'Consolidated Outland',
        defaultPrice: 40,
        userPrice: 40,
        role: 'Pathfinder',
        size: 'Small',
    },
    {
        id: 95,
        name: 'Mustang Delta',
        manufacturer: 'Consolidated Outland',
        defaultPrice: 65,
        userPrice: 65,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 96,
        name: 'Mustang Gamma',
        manufacturer: 'Consolidated Outland',
        defaultPrice: 55,
        userPrice: 55,
        role: 'Racing',
        size: 'Small',
    },
    {
        id: 97,
        name: 'Nautilus',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 725,
        userPrice: 725,
        role: 'Minelayer',
        size: 'Large',
    },
    {
        id: 98,
        name: 'Nova',
        manufacturer: 'Tumbril Land Systems',
        defaultPrice: 105,
        userPrice: 105,
        role: 'Heavy Tank',
        size: 'Small',
    },
    {
        id: 99,
        name: 'Nox',
        manufacturer: 'Aopoa',
        defaultPrice: 45,
        userPrice: 45,
        role: 'Space and Ground Racing',
        size: 'Snub',
    },
    {
        id: 100,
        name: 'Orion',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 575,
        userPrice: 575,
        role: 'Mining',
        size: 'Capital',
    },
    {
        id: 101,
        name: 'P-52 Merlin',
        manufacturer: 'Kruger Intergalactic',
        defaultPrice: 25,
        userPrice: 25,
        role: 'Snub Fighter',
        size: 'Snub',
    },
    {
        id: 102,
        name: 'P-72 Archimedes',
        manufacturer: 'Kruger Intergalactic',
        defaultPrice: 35,
        userPrice: 35,
        role: 'Racing',
        size: 'Snub',
    },
    {
        id: 103,
        name: 'Pioneer',
        manufacturer: 'Consolidated Outland',
        defaultPrice: 850,
        userPrice: 850,
        role: 'Heavy Construction',
        size: 'Capital',
    },
    {
        id: 104,
        name: 'Polaris',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 750,
        userPrice: 750,
        role: 'Corvette',
        size: 'Capital',
    },
    {
        id: 105,
        name: 'Prospector',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 155,
        userPrice: 155,
        role: 'Mining',
        size: 'Small',
    },
    {
        id: 106,
        name: 'Prowler',
        manufacturer: 'Esperia',
        defaultPrice: 440,
        userPrice: 440,
        role: 'Drop ship',
        size: 'Medium',
    },
    {
        id: 107,
        name: 'PTV',
        manufacturer: 'Greycat Industrial',
        defaultPrice: 15,
        userPrice: 15,
        role: 'Transport',
        size: 'Small',
    },
    {
        id: 108,
        name: 'Ranger CV',
        manufacturer: 'Tumbril Land Systems',
        defaultPrice: 30,
        userPrice: 30,
        role: '',
        size: 'Small',
    },
    {
        id: 109,
        name: 'Ranger RC',
        manufacturer: 'Tumbril Land Systems',
        defaultPrice: 35,
        userPrice: 35,
        role: '',
        size: 'Small',
    },
    {
        id: 110,
        name: 'Ranger TR',
        manufacturer: 'Tumbril Land Systems',
        defaultPrice: 40,
        userPrice: 40,
        role: '',
        size: 'Small',
    },
    {
        id: 111,
        name: 'Razor',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 145,
        userPrice: 145,
        role: 'Racing',
        size: 'Small',
    },
    {
        id: 112,
        name: 'Razor EX',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 155,
        userPrice: 155,
        role: 'Stealth',
        size: 'Small',
    },
    {
        id: 113,
        name: 'Razor LX',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 150,
        userPrice: 150,
        role: 'Racing',
        size: 'Small',
    },
    {
        id: 114,
        name: 'Reclaimer',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 400,
        userPrice: 400,
        role: 'Heavy Salvage',
        size: 'Large',
    },
    {
        id: 115,
        name: 'Redeemer',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 250,
        userPrice: 250,
        role: 'Gunship',
        size: 'Medium',
    },
    {
        id: 116,
        name: 'Reliant Kore',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 65,
        userPrice: 65,
        role: 'Light Freight',
        size: 'Small',
    },
    {
        id: 117,
        name: 'Reliant Mako',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 95,
        userPrice: 95,
        role: 'Reporting',
        size: 'Small',
    },
    {
        id: 118,
        name: 'Reliant Sen',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 85,
        userPrice: 85,
        role: 'Light Science',
        size: 'Small',
    },
    {
        id: 119,
        name: 'Reliant Tana',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 75,
        userPrice: 75,
        role: 'Light Fighter',
        size: 'Small',
    },
    {
        id: 120,
        name: 'Retaliator',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 275,
        userPrice: 275,
        role: 'Heavy Bomber',
        size: 'Large',
    },
    {
        id: 121,
        name: 'Sabre',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 170,
        userPrice: 170,
        role: 'Stealth Fighter',
        size: 'Small',
    },
    {
        id: 122,
        name: 'Sabre Comet',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 185,
        userPrice: 185,
        role: 'Combat',
        size: 'Small',
    },
    {
        id: 123,
        name: "San'tok.yāi",
        manufacturer: 'Aopoa',
        defaultPrice: 220,
        userPrice: 220,
        role: 'Medium Fighter',
        size: 'Small',
    },
    {
        id: 124,
        name: 'Scythe',
        manufacturer: 'Vanduul Clans',
        defaultPrice: 300,
        userPrice: 300,
        role: 'Medium Fighter',
        size: 'Small',
    },
    {
        id: 125,
        name: 'SRV',
        manufacturer: 'Argo Astronautics',
        defaultPrice: 150,
        userPrice: 150,
        role: 'Tugging',
        size: 'Small',
    },
    {
        id: 126,
        name: 'Starfarer',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 300,
        userPrice: 300,
        role: 'Refueling',
        size: 'Large',
    },
    {
        id: 127,
        name: 'Starfarer Gemini',
        manufacturer: 'Musashi Industrial and Starflight Concern',
        defaultPrice: 340,
        userPrice: 340,
        role: 'Military Refueling',
        size: 'Large',
    },
    {
        id: 128,
        name: 'Terrapin',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 220,
        userPrice: 220,
        role: 'Scout',
        size: 'Small',
    },
    {
        id: 129,
        name: 'Ursa',
        manufacturer: 'Roberts Space Industries',
        defaultPrice: 50,
        userPrice: 50,
        role: 'Exploration',
        size: 'Small',
    },
    {
        id: 130,
        name: 'Valkyrie',
        manufacturer: 'Anvil Aerospace',
        defaultPrice: 375,
        userPrice: 375,
        role: 'Heavy Dropship',
        size: 'Medium',
    },
    {
        id: 131,
        name: 'Vanguard Harbinger',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 290,
        userPrice: 290,
        role: 'Bomber',
        size: 'Medium',
    },
    {
        id: 132,
        name: 'Vanguard Hoplite',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 235,
        userPrice: 235,
        role: 'Dropship',
        size: 'Medium',
    },
    {
        id: 133,
        name: 'Vanguard Sentinel',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 275,
        userPrice: 275,
        role: 'Electronic Warfare',
        size: 'Medium',
    },
    {
        id: 134,
        name: 'Vanguard Warden',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 260,
        userPrice: 260,
        role: 'Heavy Fighter',
        size: 'Medium',
    },
    {
        id: 135,
        name: 'Vulcan',
        manufacturer: 'Aegis Dynamics',
        defaultPrice: 200,
        userPrice: 200,
        role: 'Medium Repair / Medium Refuel',
        size: 'Medium',
    },
    {
        id: 136,
        name: 'Vulture',
        manufacturer: 'Drake Interplanetary',
        defaultPrice: 140,
        userPrice: 140,
        role: 'Salvage',
        size: 'Small',
    },
    {
        id: 137,
        name: 'X1',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 40,
        userPrice: 40,
        role: 'Ultra-light Space and Ground',
        size: 'Snub',
    },
    {
        id: 138,
        name: 'X1 Force',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 50,
        userPrice: 50,
        role: 'Ultra-light Space and Ground',
        size: 'Snub',
    },
    {
        id: 139,
        name: 'X1 Velocity',
        manufacturer: 'Origin Jumpworks',
        defaultPrice: 45,
        userPrice: 45,
        role: 'Space and Ground Racing',
        size: 'Snub',
    },
]

export default shipSeed
