import {prisma} from '../src/lib/prisma'

async function seed(){
  await prisma.event.create({
    data: {
      id: 'e110ca6f-99b5-44e5-be7a-2dd4a7b125de',
      title: 'Unite Summit Ana',
      slug: 'unite-summit-ana',
      details: 'um evento muito legal',
      maximumAttendees: 120
    }
  })
}
seed().then(()=>{
  console.log('database seeded')
  prisma.$disconnect()
})