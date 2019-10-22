class CreateIdentifications < ActiveRecord::Migration[5.2]
  def change
    create_table :identifications do |t|
      t.integer :observation_id, null: false
      t.integer :identifier_id, null: false
      t.string :guess, null: false
      t.timestamps

      t.index :observation_id
      t.index :identifier_id
    end
  end
end
