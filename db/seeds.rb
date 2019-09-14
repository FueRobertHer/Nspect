# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Observation.delete_all
User.delete_all

User.create!(
  username: 'DemoUser',
  email: 'demo@user.io',
  password: 'password'
)

User.create!(
  username: 'tester',
  email: 'tester@test.io',
  password: 'tester'
)

Observation.create!(
  observer_id: 1,
  lat: '',
  lng: '',
  description: "test observation"
)

Observation.create!(
  observer_id: 1,
  lat: '',
  lng: '',
  description: "test observation"
)

Observation.create!(
  observer_id: 1,
  lat: '',
  lng: '',
  description: "test observation"
)

Observation.create!(
  observer_id: 2,
  lat: '',
  lng: '',
  description: "test observation 2"
)

Observation.create!(
  observer_id: 2,
  lat: '',
  lng: '',
  description: "test observation 2"
)

Observation.create!(
  observer_id: 2,
  lat: '',
  lng: '',
  description: "test observation 2"
)