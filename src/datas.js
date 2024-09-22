
/*
let locationData=[
    {
        id:1,
        continent:'Asia',
        countries:[
            {
                id:1,
                country:'Iran',
                provinces:[
                    {
                        id:1,
                        province:'Tehran',
                        cities:[
                            {
                                id:1,
                                city:'Tehran',
                            },
                            {
                                id:2,
                                city:'shahriar',
                            },
                            {
                                id:3,
                                city:'Islamshahr',
                            },
                            {
                                id:4,
                                city:'Mallard',
                            }
                        ]
                    },
                    {
                        id:2,
                        province:'Kermanshah',
                        cities:[
                            {
                                id:1,
                                city:'Kermanshah',
                            },
                            {
                                id:2,
                                city:'Javanrud',
                            },
                            {
                                id:3,
                                city:'Harsin',
                            },
                            {
                                id:4,
                                city:'Paveh',
                            }
                        ]
                    },
                    {
                        id:3,
                        province:'Kurdistan',
                        cities:[
                            {
                                id:1,
                                city:'Sanandaj',
                            },
                            {
                                id:2,
                                city:'Marivan',
                            },
                            {
                                id:3,
                                city:'Baneh',
                            },
                            {
                                id:4,
                                city:'Sarvabad',
                            }
                        ]
                    },
                    {
                        id:4,
                        province:'Fars',
                        cities:[
                            {
                                id:1,
                                city:'Shiraz',
                            },
                            {
                                id:2,
                                city:'Jahrom',
                            },
                            {
                                id:3,
                                city:'Lar',
                            },
                            {
                                id:4,
                                city:'Marvdasht',
                            }
                        ]
                    },
                
                ]
            },
            {
                id:2,
                country:'Turkiye',
                provinces:[
                    {
                        id:1,
                        province:'Ankara',
                        cities:[
                            {
                                id:1,
                                city:'Ankara',
                            },
                            {
                                id:2,
                                city:'Hattusa',
                            },
                            {
                                id:3,
                                city:'Bursa',
                            },
                            {
                                id:4,
                                city:'Kartalkaya',
                            }
                        ]
                    },
                    {
                        id:2,
                        province:'Antalya',
                        cities:[
                            {
                                id:1,
                                city:'Antalya',
                            },
                            {
                                id:2,
                                city:'Akseki',
                            },
                            {
                                id:3,
                                city:'Aksu',
                            },
                            {
                                id:4,
                                city:'Alanya',
                            }
                        ]
                    },
                    {
                        id:3,
                        province:'Adana',
                        cities:[
                            {
                                id:1,
                                city:'Feke',
                            },
                            {
                                id:2,
                                city:'Kozan',
                            },
                            {
                                id:3,
                                city:'Karaisali',
                            },
                            {
                                id:4,
                                city:'Ceyhan',
                            }
                        ]
                    },

                
                ]
            },
        ]
    },
    {
        id:1,
        continent:'North America',
        countries:[
            {
                id:1,
                country:'United States',
                provinces:[
                    {
                        id:1,
                        province:'Washington',
                        cities:[
                            {
                                id:1,
                                city:'Olympia',
                            },
                            {
                                id:2,
                                city:'Seattle',
                            },
                        ]
                    },
                    {
                        id:2,
                        province:'NewYork',
                        cities:[
                            {
                                id:1,
                                city:'Albani',
                            },
                            {
                                id:2,
                                city:'NewYork',
                            },
                        ]
                    },

                
                ]
            },
            {
                id:2,
                country:'Mexico',
                provinces:[
                    {
                        id:1,
                        province:'Mexico City',
                        cities:[
                            {
                                id:1,
                                city:'Mexico City',
                            },
                        ]
                    },
                    {
                        id:2,
                        province:'Baja California',
                        cities:[
                            {
                                id:1,
                                city:'Mkhikali',
                            },
                            {
                                id:2,
                                city:'Tijuana',
                            },
                        ]
                    },
    
                ]
            },
        ]
    },
]
*/

const continents = [
    {
      id: 1,
      name: 'Asia',
      countries: [
        {
          id: 101,
          name: 'Japan',
          states: [
            {
              id: 1011,
              name: 'Tokyo Prefecture',
              cities: [
                { id: 10111, name: 'Tokyo' },
                { id: 10112, name: 'Shibuya' },
                { id: 10113, name: 'Shinjuku' }
              ]
            },
            {
              id: 1012,
              name: 'Osaka Prefecture',
              cities: [
                { id: 10121, name: 'Osaka' },
                { id: 10122, name: 'Sakai' },
                { id: 10123, name: 'Hirakata' }
              ]
            }
          ]
        },
        {
          id: 102,
          name: 'India',
          states: [
            {
              id: 1021,
              name: 'Maharashtra',
              cities: [
                { id: 10211, name: 'Mumbai' },
                { id: 10212, name: 'Pune' },
                { id: 10213, name: 'Nagpur' }
              ]
            },
            {
              id: 1022,
              name: 'Delhi',
              cities: [
                { id: 10221, name: 'New Delhi' },
                { id: 10222, name: 'Old Delhi' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Europe',
      countries: [
        {
          id: 201,
          name: 'Germany',
          states: [
            {
              id: 2011,
              name: 'Bavaria',
              cities: [
                { id: 20111, name: 'Munich' },
                { id: 20112, name: 'Nuremberg' },
                { id: 20113, name: 'Augsburg' }
              ]
            },
            {
              id: 2012,
              name: 'Hesse',
              cities: [
                { id: 20121, name: 'Frankfurt' },
                { id: 20122, name: 'Wiesbaden' },
                { id: 20123, name: 'Darmstadt' }
              ]
            }
          ]
        },
        {
          id: 202,
          name: 'France',
          states: [
            {
              id: 2021,
              name: 'Île-de-France',
              cities: [
                { id: 20211, name: 'Paris' },
                { id: 20212, name: 'Boulogne-Billancourt' },
                { id: 20213, name: 'Saint-Denis' }
              ]
            },
            {
              id: 2022,
              name: 'Provence-Alpes-Côte d\'Azur',
              cities: [
                { id: 20221, name: 'Marseille' },
                { id: 20222, name: 'Nice' },
                { id: 20223, name: 'Cannes' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Africa',
      countries: [
        {
          id: 301,
          name: 'Egypt',
          states: [
            {
              id: 3011,
              name: 'Cairo Governorate',
              cities: [
                { id: 30111, name: 'Cairo' },
                { id: 30112, name: 'Helwan' }
              ]
            },
            {
              id: 3012,
              name: 'Alexandria Governorate',
              cities: [
                { id: 30121, name: 'Alexandria' },
                { id: 30122, name: 'Borg El Arab' }
              ]
            }
          ]
        },
        {
          id: 302,
          name: 'Nigeria',
          states: [
            {
              id: 3021,
              name: 'Lagos State',
              cities: [
                { id: 30211, name: 'Lagos' },
                { id: 30212, name: 'Ikeja' }
              ]
            },
            {
              id: 3022,
              name: 'Kano State',
              cities: [
                { id: 30221, name: 'Kano' },
                { id: 30222, name: 'Wudil' }
              ]
            }
          ]
        }
      ]
    }
  ];

export default {continents}