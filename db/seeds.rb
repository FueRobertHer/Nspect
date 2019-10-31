# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.delete_all
Identification.delete_all
Observation.delete_all
User.delete_all

user1 = User.create!(
  username: 'DemoUser',
  email: 'demo@user.io',
  password: 'password',
  name: 'Demo',
  description: "I'm the Demo account! Feel free to look around and have fun!",
)

user2 = User.create!(
  username: 'Fue',
  email: 'fue@testmail.io',
  password: 'password',
  name: 'Fue Robert Her',
  description: "I'm the developer of this iNaturalist clone! More functions to come!",
)
pic2 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/fue_her.png')
user2.profile_pic.attach(io: pic2, filename: 'fue_her.png')

user3 = User.create!(
  username: 'Gas',
  email: 'charles@darwin.io',
  password: 'evolution',
  name: 'Charles Darwin',
  description: "I developed the theory of evolution by natural selection. Pidgeons are amazing!",
)
pic3 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/charles_darwin.jpg')
user3.profile_pic.attach(io: pic3, filename: 'charles_darwin.jpg')

user4 = User.create!(
  username: 'Linnaeus',
  email: 'carl@linnaeus.io',
  password: 'nomenclature',
  name: 'Carl Linnaeus',
  description: "Binomial nomenclature. Life can be categorized",
)
pic4 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/carl_linnaeus.jpg')
user4.profile_pic.attach(io: pic4, filename: 'carl_linnaeus.jpg')

user5 = User.create!(
  username: 'Carrie',
  email: 'caroline@dormon.io',
  password: 'forestry',
  name: 'Caroline Dormon',
  description: 'First female United State Forestry Service employee',
)
pic5 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/caroline_dormon.jpg')
user5.profile_pic.attach(io: pic5, filename: 'caroline_dormon.jpg')

user6 = User.create!(
  username: 'mills',
  email: 'enos@mills.io',
  password: 'rockymountain',
  name: 'Enos Mills',
  description: '',
)
pic6 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/enos_mills.jpg')
user6.profile_pic.attach(io: pic6, filename: 'enos_mills.jpg')

user7 = User.create!(
  username: 'florence',
  email: 'florence@merriam.io',
  password: 'protectbirds',
  name: 'Florence Augusta Merriam Bailey',
  description: 'Protection for the birds',
)
pic7 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/florence_merriam.jpg')
user7.profile_pic.attach(io: pic7, filename: 'florence_merriam.jpg')

user8 = User.create!(
  username: 'heritage',
  email: 'freeman@tilden.io',
  password: 'heritage',
  name: 'Freeman Tilden',
  description: 'National Park service and interp',
)
pic8 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/freeman_tilden.jpg')
user8.profile_pic.attach(io: pic8, filename: 'freeman_tilden.jpg')

user9 = User.create!(
  username: 'audubon',
  email: 'johnjames@audubon.io',
  password: 'americanbirds',
  name: 'John James Audubon',
  description: 'Birds of America',
)
pic9 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/john-james-audubon.jpg')
user9.profile_pic.attach(io: pic9, filename: 'john_james_audubon.jpg')

user10 = User.create!(
  username: 'MountainJohn',
  email: 'john@muir.io',
  password: 'yosemite',
  name: 'John Muir',
  description: 'Yosemite',
)
pic10 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/john-muir.jpg')
user10.profile_pic.attach(io: pic10, filename: 'john_muir.jpg')

user11 = User.create!(
  username: 'JohnnyAppleseed',
  email: 'john@chapman.io',
  password: 'apples',
  name: 'John Chapman',
  description: 'Apples for all!',
)
pic11 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/john_chapman.jpg')
user11.profile_pic.attach(io: pic11, filename: 'john_chapman.jpg')

user12 = User.create!(
  username: 'SilentSpring',
  email: 'rachel@carson.io',
  password: 'marinebio',
  name: 'Rachel Carson',
  description: 'Marine bio and silent spring. DDT is bad.',
)
pic12 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/rachel_carson.jpg')
user12.profile_pic.attach(io: pic12, filename: 'rachel_carson.jpg')

user13 = User.create!(
  username: 'CrocHunter',
  email: 'steve@irwon.io',
  password: 'crocodiles',
  name: 'Steve Irwin',
  description: 'The one and only Crocodile Hunter!',
)
pic13 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/steve_irwin.jpg')
user13.profile_pic.attach(io: pic13, filename: 'steve_irwin.jpg')

user14 = User.create!(
  username: 'humboldt',
  email: 'alexander@humboldt.io',
  password: 'biogeography',
  name: 'Alexander von Humboldt',
  description: 'Plant travels to South America',
)
pic14 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/alexander_von_humboldt.jpg')
user14.profile_pic.attach(io: pic14, filename: 'alexander_von_humboldt.jpg')

user15 = User.create!(
  username: 'slime',
  email: 'kumagusu@minakata.io',
  password: 'slimemoud',
  name: 'Minakata Kumagusu',
  description: 'Slime molds are awesome!',
)
pic15 = open('https://nspect-pro.s3-us-west-1.amazonaws.com/seed_profile_pics/minakata_kumagusu.jpg')
user15.profile_pic.attach(io: pic15, filename: 'minakata_kumagusu.jpg')


# ------------------------------------------------------------------------------------------------------------------------


obs1 = Observation.create!(
  observer_id: user1.id,
  lat: 10.1,
  lng: 1.1,
  description: "test observation 1"
)

obs2 = Observation.create!(
  observer_id: user1.id,
  lat: 20.2,
  lng: 2.2,
  description: "test observation 2"
)

obs3 = Observation.create!(
  observer_id: user1.id,
  lat: 30.3,
  lng: 3.3,
  description: "test observation 3"
)

obs4 = Observation.create!(
  observer_id: user2.id,
  lat: 40.4,
  lng: 4.4,
  description: "test observation 4"
)

obs5 = Observation.create!(
  observer_id: user2.id,
  lat: 50.5,
  lng: 5.5,
  description: "test observation 5"
)

obs6 = Observation.create!(
  observer_id: user2.id,
  lat: 60.6,
  lng: 6.6,
  description: "test observation 6"
)


# ------------------------------------------------------------------------------------------------------------------------


Identification.create!(
  observation_id: obs1.id,
  identifier_id: user1.id,
  guess: 'something 1',
  body: 'i saw this thing here'
)

Identification.create!(
  observation_id: obs2.id,
  identifier_id: user2.id,
  guess: 'something 2',
  body: 'i saw this thing here'
)

Identification.create!(
  observation_id: obs3.id,
  identifier_id: user3.id,
  guess: 'something 3',
  body: 'i saw this thing here'
)

Comment.create!(
  observation_id: obs4.id,
  commenter_id: user4.id,
  body: 'test comment 1'
)

Comment.create!(
  observation_id: obs5.id,
  commenter_id: user5.id,
  body: 'test comment 2'
)

Comment.create!(
  observation_id: obs6.id,
  commenter_id: user6.id,
  body: 'test comment 3'
)
