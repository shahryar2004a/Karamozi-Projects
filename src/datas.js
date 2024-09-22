

const continentsData = [
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

export default {continentsData}