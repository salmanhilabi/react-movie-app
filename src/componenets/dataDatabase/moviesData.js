const movieData = {
  latestmovies: [
    {
      id: 1,
      index: 0,
      title: "Interstellar",
      year: "2014",
      runtime: "169",
      genres: ["Adventure ", " Sci-Fi"],
      director: "Christopher Nolan",
      actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      plot:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg"
    },
    {
      id: 2,
      index: 1,
      title: "Big Nothing",
      year: "2006",
      runtime: "86",
      genres: ["Comedy, ", " Crime"],
      director: "Jean-Baptiste Andrea",
      actors: "David Schwimmer, Simon Pegg, Alice Eve, Natascha McElhone",
      plot:
        "A frustrated, unemployed teacher joining forces with a scammer and his girlfriend in a blackmailing scheme.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTc2NjYwOV5BMl5BanBnXkFtZTcwMzk5OTY0MQ@@._V1_SX300.jpg"
    },
    {
      id: 3,
      index: 2,
      title: "Das Boot",
      year: "1981",
      runtime: "149",
      genres: ["Adventure, ", " Thriller"],
      director: "Wolfgang Petersen",
      actors:
        "Jürgen Prochnow, Herbert Grönemeyer, Klaus Wennemann, Hubertus Bengsch",
      plot:
        "The claustrophobic world of a WWII German U-boat; boredom, filth, and sheer terror.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5Mzk5OTQ0Nl5BMl5BanBnXkFtZTYwNzUwMTQ5._V1_SX300.jpg"
    },
    {
      id: 4,
      index: 3,
      title: "Shrek 2",
      year: "2004",
      runtime: "93",
      genres: ["Animation, ", "Comedy "],
      director: "Andrew Adamson, Kelly Asbury, Conrad Vernon",
      actors: "Mike Myers, Eddie Murphy, Cameron Diaz, Julie Andrews",
      plot:
        "Princess Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg"
    },
    {
      id: 5,
      index: 4,
      title: "The Cotton Club",
      year: "1984",
      runtime: "127",
      genres: ["Crime, ", " Drama"],
      director: "Francis Ford Coppola",
      actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
      plot:
        "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
    },
    {
      id: 6,
      index: 5,
      title: "Crocodile Dundee",
      year: "1986",
      runtime: "97",
      genres: ["Adventure, ", " Comedy"],
      director: "Peter Faiman",
      actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
      plot:
        "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    },
    {
      id: 7,
      index: 6,
      title: "Valkyrie",
      year: "2008",
      runtime: "121",
      genres: ["Drama, ", " History"],
      director: "Bryan Singer",
      actors: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
      plot:
        "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
      posterUrl:
        "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"
    },
    {
      id: 8,
      index: 7,
      title: "Ratatouille",
      year: "2007",
      runtime: "111",
      genres: ["Animation, ", " Comedy"],
      director: "Brad Bird, Jan Pinkava",
      actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
      plot:
        "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
    },
    {
      id: 9,
      index: 8,
      title: "City of God",
      year: "2002",
      runtime: "130",
      genres: ["Crime, ", "Drama"],
      director: "Fernando Meirelles, Kátia Lund",
      actors:
        "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
      plot:
        "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
    },
    {
      id: 10,
      index: 9,
      title: "The Intouchables",
      year: "2011",
      runtime: "112",
      genres: ["Biography, ", " Comedy"],
      director: "Olivier Nakache, Eric Toledano",
      actors: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
      plot:
        "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
      posterUrl:
        "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"
    },
    {
      id: 11,
      index: 10,
      title: "Stardust",
      year: "2007",
      runtime: "127",
      genres: ["Adventure, ", " Fantasy"],
      director: "Matthew Vaughn",
      actors: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
      plot:
        "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
    },
    {
      id: 12,
      index: 11,
      title: "Apocalypto",
      year: "2006",
      runtime: "139",
      genres: ["Action, ", " Adventure"],
      director: "Mel Gibson",
      actors:
        "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
      plot:
        "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
    },
    {
      id: 13,
      index: 12,
      title: "The Impossible",
      year: "2012",
      runtime: "114",
      genres: ["Drama, ", "Thriller"],
      director: "J.A. Bayona",
      actors: "Naomi Watts, Ewan McGregor, Tom Holland, Samuel Joslin",
      plot:
        "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg"
    },
    {
      id: 14,
      index: 13,
      title: "All Quiet Western",
      year: "1930",
      runtime: "136",
      genres: ["Drama, ", "War"],
      director: "Lewis Milestone",
      actors: "Louis Wolheim, Lew Ayres, John Wray, Arnold Lucy",
      plot:
        "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM5OTg2NDY1NF5BMl5BanBnXkFtZTcwNTQ4MTMwNw@@._V1_SX300.jpg"
    },
    {
      id: 15,
      index: 14,
      title: "I-See-You.Com",
      year: "2006",
      runtime: "92",
      genres: ["Comedy"],
      director: "Eric Steven Stahl",
      actors: "Beau Bridges, Rosanna Arquette, Mathew Botuchis, Shiri Appleby",
      plot:
        "A 17-year-old boy buys mini-cameras and displays the footage online at I-see-you.com. The cash rolls in as the site becomes a major hit. Everyone seems to have fun until it all comes crashing down....",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMDUzNzA5Nl5BMl5BanBnXkFtZTcwMjQ2Njk3MQ@@._V1_SX300.jpg"
    },
    {
      id: 16,
      index: 15,
      title: "Dallas Buyers Club",
      year: "2013",
      runtime: "117",
      genres: ["Biography, ", "Drama"],
      director: "Jean-Marc Vallée",
      actors: "Matthew McConaughey, Jennifer Garner, Jared Leto, Denis O'Hare",
      plot:
        "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg"
    },
    {
      id: 17,
      index: 16,
      title: "Frida",
      year: "2002",
      runtime: "123",
      genres: ["Drama, ", "Romance"],
      director: "Julie Taymor",
      actors: "Salma Hayek, Mía Maestro, Alfred Molina, Antonio Banderas",
      plot:
        "A biography of artist Frida Kahlo, who channeled the pain of a crippling injury and her tempestuous marriage into her work.",
      posterUrl:
        "http://ia.media-imdb.com/images/M/MV5BMTMyODUyMDY1OV5BMl5BanBnXkFtZTYwMDA2OTU3._V1_SX300.jpg"
    },
    {
      id: 18,
      index: 17,
      title: "Before Sunrise",
      year: "1995",
      runtime: "105",
      genres: ["Drama, ", "Romance"],
      director: "Richard Linklater",
      actors: "Ethan Hawke, Julie Delpy, Andrea Eckert, Hanno Pöschl",
      plot:
        "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMTM3MTQxMl5BMl5BanBnXkFtZTcwMDAzNjQ4Mg@@._V1_SX300.jpg"
    },
    {
      id: 19,
      index: 18,
      title: "The Rum Diary",
      year: "2011",
      runtime: "120",
      genres: ["Comedy, ", "Drama"],
      director: "Bruce Robinson",
      actors: "Johnny Depp, Aaron Eckhart, Michael Rispoli, Amber Heard",
      plot:
        "American journalist Paul Kemp takes on a freelance job in Puerto Rico for a local newspaper during the 1960s and struggles to find a balance between island culture and the expatriates who live there.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5ODA4MjYxM15BMl5BanBnXkFtZTcwMTM3NTE5Ng@@._V1_SX300.jpg"
    },
    {
      id: 20,
      index: 19,
      title: "The Last Samurai",
      year: "2003",
      runtime: "154",
      genres: ["Action, ", "History"],
      director: "Edward Zwick",
      actors: "Ken Watanabe, Tom Cruise, William Atherton, Chad Lindberg",
      plot:
        "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
      posterUrl:
        "http://ia.media-imdb.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg"
    },
    {
      id: 21,
      index: 20,
      title: "Chinatown",
      year: "1974",
      runtime: "130",
      genres: ["Drama, ", "Mystery"],
      director: "Roman Polanski",
      actors: "Jack Nicholson, Faye Dunaway, John Huston, Perry Lopez",
      plot:
        "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyNDE5NzItMjAwNC00MGQxLTllNjktZGIzMWFkZjA3OWQ0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
      id: 22,
      index: 21,
      title: "Calvary",
      year: "2014",
      runtime: "102",
      genres: ["Comedy, ", "Drama"],
      director: "John Michael McDonagh",
      actors: "Brendan Gleeson, Chris O'Dowd, Kelly Reilly, Aidan Gillen",
      plot:
        "After he is threatened during a confession, a good-natured priest must battle the dark forces closing in around him.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MjQ1MjE2M15BMl5BanBnXkFtZTgwNTMzNjE4MTE@._V1_SX300.jpg"
    },
    {
      id: 23,
      index: 22,
      title: "Before Sunset",
      year: "2004",
      runtime: "80",
      genres: ["Drama, ", "Romance"],
      director: "Richard Linklater",
      actors:
        "Ethan Hawke, Julie Delpy, Vernon Dobtcheff, Louise Lemoine Torrès",
      plot:
        "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
      posterUrl:
        "http://ia.media-imdb.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_SX300.jpg"
    },
    {
      id: 24,
      index: 23,
      title: "Spirited Away",
      year: "2001",
      runtime: "125",
      genres: ["Animation, ", "Adventure"],
      director: "Hayao Miyazaki",
      actors: "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô",
      plot:
        "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_SX300.jpg"
    },
    {
      id: 25,
      index: 24,
      title: "Indochine",
      year: "1992",
      runtime: "159",
      genres: ["Drama, ", "Romance"],
      director: "Régis Wargnier",
      actors: "Catherine Deneuve, Vincent Perez, Linh Dan Pham, Jean Yanne",
      plot:
        "This story is set in 1930, at the time when French colonial rule in Indochina is ending. A widowed French woman who works in the rubber fields, raises a Vietnamese princess as if she was ...",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MTkzNzA3NF5BMl5BanBnXkFtZTYwNTI2MzU5._V1_SX300.jpg"
    },
    {
      id: 26,
      index: 25,
      title: "Birdman",
      year: "2014",
      runtime: "119",
      genres: ["Comedy, ", "Romance"],
      director: "Alejandro G. Iñárritu",
      actors: "Michael Keaton, Emma Stone, Kenny Chin, Jamahl Garrison-Lowe",
      plot:
        "Illustrated upon the progress of his latest Broadway play, a former popular actor's struggle to cope with his current life as a wasted actor is shown.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg"
    },
    {
      id: 27,
      index: 26,
      title: "Boyhood",
      year: "2014",
      runtime: "165",
      genres: ["Drama"],
      director: "Richard Linklater",
      actors:
        "Ellar Coltrane, Patricia Arquette, Elijah Smith, Lorelei Linklater",
      plot:
        "The life of Mason, from early childhood to his arrival at college.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg"
    },
    {
      id: 28,
      index: 27,
      title: "12 Angry Men",
      year: "1957",
      runtime: "96",
      genres: ["Crime", "Drama"],
      director: "Sidney Lumet",
      actors: "Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall",
      plot:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg"
    },
    {
      id: 29,
      index: 28,
      title: "The Imitation Game",
      year: "2014",
      runtime: "114",
      genres: ["Biography, ", "Drama"],
      director: "Morten Tyldum",
      actors:
        "Benedict Cumberbatch, Keira Knightley, Matthew Goode, Rory Kinnear",
      plot:
        "During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SX300.jpg"
    },
    {
      id: 30,
      index: 29,
      title: "Interstellar",
      year: "2014",
      runtime: "169",
      genres: ["Adventure, ", "Sci-Fi"],
      director: "Christopher Nolan",
      actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      plot:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg"
    }
  ],

  comingsoon: [
    {
      id: 1,
      title: "Interstellar",
      releasedate: "24/8/2019",
      ratings: "7.4",
      posterUrl: require("../../images/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@.jpg")
    },
    {
      id: 2,
      title: "Inglourious Basterds",
      releasedate: "22/4/2019",
      ratings: "4.4",
      posterUrl: require("../../images/large_keAMrS08NxKvMxh8GRDhS9UCph4.jpg")
    },
    {
      id: 3,
      title: "Terminator",
      releasedate: "14/9/2019",
      ratings: "5.4",
      posterUrl: require("../../images/vxiKtcxAJxHhlg2H1X8y7zcM3k6.jpg")
    },
    {
      id: 4,
      title: "Shrek 2",
      releasedate: "15/3/2019",
      ratings: "7.9",
      posterUrl: require("../../images/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@.jpg")
    },
    {
      id: 5,
      title: "Rocketman",
      releasedate: "15/3/2019",
      ratings: "5.8",
      posterUrl: require("../../images/MV5BZGI2YjhlY2EtZGI3OS00NDNmLTkyZjMtMjg2Y2RiMGEzYzgwXkEyXkFqcGdeQXVyNTI4MzE4MDU@.jpg")
    }
  ],

  boxoffice: [
    {
      id: 1,
      title: "Captive State",
      budget: "$24.3M-$32.7M",
      ratings: "8.4",
      posterUrl: require("../../images/MV5BMTc5NTQ5MDg4MV5BMl5BanBnXkFtZTgwMTAwMDU5NjM@.jpg")
    },
    {
      id: 2,
      title: "Pokemon Detective",
      budget: "$33.6M-$37.3M",
      ratings: "5.4",
      posterUrl: require("../../images/MV5BMTk1MjgwNjM2MV5BMl5BanBnXkFtZTgwMzMyODM3NjM@.jpg")
    },
    {
      id: 3,
      title: "The Aftermath",
      budget: "$21.3M-$35.7M",
      ratings: "5.4",
      posterUrl: require("../../images/495958_m1539731118.jpg")
    },
    {
      id: 4,
      title: "Kung Fu Panda 3",
      budget: "$44.3M-$62.7M",
      ratings: "5.8",
      posterUrl: require("../../images/KungFuPanda3.jpg")
    },
    {
      id: 5,
      title: "Happy Death Day 2U",
      budget: "$34.5M-$37.2M",
      ratings: "5.9",
      posterUrl: require("../../images/MV5BMTg0NzkwMzQyMV5BMl5BanBnXkFtZTgwNDcxMTMyNzM@.jpg")
    }
  ],

  newrelease: [
    {
      id: 1,
      title: "Shazam!",
      releaseon: "14/9/2019",
      ratings: "5.4",
      posterUrl: require("../../images/MV5BNzRmNzdmOTUtNDA0MS00Nzc0LTg3ZWYtNmQ2YTU3ZDMzMjM3XkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg")
    },
    {
      id: 2,
      title: "Stardust",
      releaseon: "14/9/2019",
      ratings: "5.4",
      posterUrl: require("../../images/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@.jpg")
    },
    {
      id: 3,
      title: "Apocalypto",
      releaseon: "14/9/2019",
      ratings: "5.4",
      posterUrl: require("../../images/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@.jpg")
    },
    {
      id: 4,
      title: "Escape Plan 2",
      releaseon: "24/3/2019",
      ratings: "4.4",
      posterUrl: require("../../images/0959d7a27facc3187d5b4f4fcbf06a09.jpg")
    },
    {
      id: 5,
      title: "Mortal Engines",
      releaseon: "14/9/2019",
      ratings: "5.4",
      posterUrl: require("../../images/51p7kWQV7LL.jpg")
    }
  ],

  griddata: [
    {
      id: 1,
      title: "The Caribbean",
      year: "2011",
      runtime: "136",
      genres: ["Action / ", " Adventure / ", " Fantasy"],
      director: "Rob Marshall",
      actors: "Johnny Depp, Penélope Cruz, Geoffrey Rush, Ian McShane",
      plot:
        "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.",
      posterUrl:
        "http://ia.media-imdb.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg"
    },
    {
      id: 2,
      title: "Looper",
      year: "2012",
      runtime: "119",
      genres: ["Action / ", " Crime / ", " Drama"],
      director: "Rian Johnson",
      actors: "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
      plot:
        "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
      posterUrl:
        "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg"
    },
    {
      id: 3,
      title: "Crash",
      year: "2004",
      runtime: "112",
      genres: ["Crime / ", " Drama / ", " Thriller"],
      director: "Paul Haggis",
      actors: "Karina Arroyave, Dato Bakhtadze, Sandra Bullock, Don Cheadle",
      plot:
        "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_SX300.jpg"
    },
    {
      id: 4,
      title: "Hellboy II",
      year: "2008",
      runtime: "120",
      genres: ["Action / ", " Adventure / ", " Fantasy"],
      director: "Guillermo del Toro",
      actors: "Ron Perlman, Selma Blair, Doug Jones, John Alexander",
      plot:
        "The mythical world starts a rebellion against humanity in order to rule the Earth, so Hellboy and his team must save the world from the rebellious creatures.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_SX300.jpg"
    }
  ],

  videourl: [
    {
      id: 1,
      src: "https://www.youtube.com/embed/UgBWSPD6MUU?controls=0",
      imgsrc: require("../../images/kung=fu=panda.jpg")
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/3AsOdX7NcJs?controls=0",
      imgsrc: require("../../images/Qunexc-London-Has-Fallen.jpg")
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/vn9mMeWcgoM?controls=0",
      imgsrc: require("../../images/JurassicWorld.jpg")
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/Q7ztHi9ejp4?controls=0",
      imgsrc: require("../../images/GLASS.jpg")
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/cuL5yXsOAIA?controls=0",
      imgsrc: require("../../images/mortal-engines.jpg")
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/hA6hldpSTF8?controls=0",
      imgsrc: require("../../images/avengers-endgame.jpg")
    },
    {
      id: 7,
      src: "https://www.youtube.com/embed/cSp1dM2Vj48?controls=0",
      imgsrc: require("../../images/Ready-Player-One.jpg")
    },
    {
      id: 8,
      src: "https://www.youtube.com/embed/G8S-EuCuO1U?controls=0",
      imgsrc: require("../../images/aquaman.jpg")
    }
  ]
};
export default movieData;
