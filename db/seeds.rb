# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Observation.delete_all
User.delete_all

user1 = User.create!(
  username: 'DemoUser',
  email: 'demo@user.io',
  password: 'password'
)

user2 = User.create!(
  username: 'tester',
  email: 'tester@test.io',
  password: 'tester'
)



Observation.create!(
  observer_id: user1.id,
  lat: 1.1,
  lng: 1.1,
  description: "test observation"
)

Observation.create!(
  observer_id: user1.id,
  lat: 2.2,
  lng: 2.2,
  description: "test observation"
)

Observation.create!(
  observer_id: user1.id,
  lat: 3.3,
  lng: 3.3,
  description: "test observation"
)

Observation.create!(
  observer_id: user2.id,
  lat: 4.4,
  lng: 4.4,
  description: "test observation 2"
)

Observation.create!(
  observer_id: user2.id,
  lat: 5.5,
  lng: 5.5,
  description: "test observation 2"
)

Observation.create!(
  observer_id: user2.id,
  lat: 6.6,
  lng: 6.6,
  description: "test observation 2"
)