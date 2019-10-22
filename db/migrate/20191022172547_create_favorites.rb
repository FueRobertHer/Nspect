class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :observation_id, null: false
      t.timestamps

      t.index [:user_id, :observation_id], unique: true
    end
  end
end
