class CreateObservations < ActiveRecord::Migration[5.2]
  def change
    create_table :observations do |t|
      t.integer :observer_id, null: false
      t.float :lat
      t.float :lng
      t.text :description
      t.timestamps
      
      t.index :observer_id
    end
  end
end
