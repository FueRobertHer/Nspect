class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :observation_id, null: false
      t.integer :commenter_id, null: false
      t.string :body, null: false
      t.timestamps

      t.index :observation_id
      t.index :commenter_id
    end
  end
end
