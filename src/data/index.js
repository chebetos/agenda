const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  date: '19 Diciembre 2020',
  isTimezoneSelectorEnabled: false,
  eventType: eventTypes.online,
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/274849426/',
  eventLink: 'https://www.twitch.tv/osweekends',
  startTime: '10:00',
  endTime: '12:00',
  title: 'Agenda',
  description: '💃 Último evento del año ¡Apúntate! 👉',
  tracks: [
    {
      name: 'The Awesome Track Online',
      content: [
        {
          title: 'Bienvenida y café virtual ☕️',
          description: [
            '- Puntos del día 🔥',
            '- Agenda 📇',
            '- OSWorld 👨‍🎤👩‍🎤'
          ],
          startTime: { h: '10', m: '00' },
          // endTime: { h: '10', m: '20' },
          speakers: [
            {
              name: 'Jorge Baumann',
              avatar: 'https://pbs.twimg.com/profile_images/1307954103058866183/UQ1_k5fX_400x400.jpg',
              bio: [
                'FullStack Engineer at GuideSmiths. Open Source developer at #RambitoJs.'
              ],
              social: {
                twitter: 'https://twitter.com/baumannzone',
                instagram: 'https://instagram.com/baumannzone',
                twitch: 'https://twitch.tv/baumannzone',
                github: 'https://github.com/baumannzone'
                // url: ['1', 2 , 4]
              }
            },
            {
              name: 'Teba Gómez',
              avatar: 'https://pbs.twimg.com/profile_images/1051712960484257794/BUwHnV91_400x400.jpg',
              bio: [
                'Software engineer at #Devo'
              ],
              social: {
                twitter: 'https://twitter.com/KoolTheba',
                github: 'https://github.com/kooltheba'
              }
            },
            {
              name: 'Chechu',
              avatar: 'https://avatars2.githubusercontent.com/u/18353937?s=400&u=ef9c88f5f189e61dc3d049a57ccaccfe9c4f808d&v=4',
              bio: [
                'Desarrollador frontend. El que te banea si te portas mal en directo de OSWeekends ⛔️.'
              ],
              social: {
                twitter: 'https://twitter.com/Xexuline'
              }
            },
            {
              name: 'Coding Carlos',
              avatar: 'https://pbs.twimg.com/profile_images/648425461215793152/TbmUPkW2_400x400.jpg',
              bio: [
                'Showman, barbudo, programador y contador de cuentos. Conecto gente en @communitytools. Se me ve mucho en @commitsans. Tengo tierras.'
              ],
              social: {
                twitter: 'https://twitter.com/codingcarlos',
                url: 'https://codingcarlos.com/',
                twitch: 'https://twitch.tv/codingcarlos'
              }
            }
          ]
        },
        {
          title: 'Animaciones con Three.js',
          description: [
            '...'
          ],
          startTime: { h: '10', m: '20' },
          tags: ['🔥 Startups', '💪 Emprendimiento '],
          speakers: [
            {
              name: 'Stivali Serna',
              avatar: 'https://avatars3.githubusercontent.com/u/6487058?s=460&u=37a0001b5db966f73d2bba229ac9d4bd3dca0248&v=4',
              bio: [
                '...'
              ],
              social: {
                // linkedin: 'https://www.linkedin.com/in/jonathan-b-clarke-06174a38/'
                // twitter: 'https://twitter.com/iosamuel',
                // github: 'https://github.com/iosamuel',
                // twitch: 'https://twitch.com/iosamuel',
                // youtube: 'https://youtube.com/iosamuel',
                // instagram: 'https://instagram.com/_iosamuel',
                // facebook: 'https://facebook.com/iosamuel.dev',
                // url: 'https://iosamuel.dev'
              }
            }
          ]
        },
        {
          title: 'Viabilidad económica en proyectos Open Source',
          description: [
            '...'
          ],
          startTime: { h: '10', m: '40' },
          tags: ['✨ Open Source', '💻 Desarrollo'],
          speakers: [
            {
              name: 'Guillermo Rauch',
              avatar: 'https://pbs.twimg.com/profile_images/1029230542716264448/LgLb--Of_400x400.jpg',
              bio: [
                'CEO de Vercel'
              ],
              social: {
                twitter: 'https://twitter.com/rauchg',
                // github: 'https://github.com/mafesernaarboleda',
                // linkedin: 'https://www.linkedin.com/in/mafesernaarboleda/',
                url: 'https://rauchg.com'
              }
            }
          ]
        },
        {
          title: 'Verdadero o Falsedad 👾',
          description: [
            '🤡'
          ],
          startTime: { h: '11', m: '00' },
          tags: ['💻 Desarrollo', '✍️ Naming'],
          speakers: [
            // {
            //   name: 'Clara Dios 🙏',
            //   bio: [
            //     '...'
            //   ],
            //   social: {
            //     twitter: 'https://twitter.com/ClaraDios'
            //   }
            // }
          ]
        },
        {
          title: 'BDD & Cucumber 🥒',
          description: [
            '...'
          ],
          startTime: { h: '11', m: '20' },
          tags: ['💻 Desarrollo', '✍️ Naming'],
          speakers: [
            {
              name: 'Clara Dios 🙏',
              avatar: 'https://pbs.twimg.com/profile_images/1168536594967650305/Hnn-LmlY_400x400.jpg',
              bio: [
                '...'
              ],
              social: {
                twitter: 'https://twitter.com/ClaraDios'
              }
            }
          ]
        },
        {
          title: 'Sensores y cosas',
          description: [
            '...'
          ],
          startTime: { h: '11', m: '40' },
          tags: ['💻 Desarrollo', '✨ Diseño', '🗣 Marketing'],
          speakers: [
            {
              name: 'Sergio Morcuende',
              avatar: 'https://avatars3.githubusercontent.com/u/1575830?s=460&u=c7e92b31b8509f1025a7ad8c25e5b096421a6dc3&v=4',
              bio: [
                '...'
              ],
              social: {
                twitter: 'https://twitter.com/_serxius_'
                // github: 'https://github.com/Dawntraoz',
                // linkedin: 'https://linkedin.com/in/dawntraoz',
                // twitch: 'https://twitch.tv/dawntraoz',
                // instagram: 'https://instagram.com/dawntraoz',
                // dev: 'https://dev.to/dawntraoz',
                // url: 'https://www.dawntraoz.com'
              }
            }
          ]
        },
        {
          title: 'Networking & Beers online 💃🍻',
          startTime: { h: '12', m: '00' },
          endTime: { h: '12', m: '15' }
        }
      ]
    }
  ],
  sponsors: [
    // {
    //   name: 'OVHcloud',
    //   link: 'https://www.ovhcloud.com/es-es/',
    //   img: 'ovh2.png'
    // }
  ]
}

export default data
