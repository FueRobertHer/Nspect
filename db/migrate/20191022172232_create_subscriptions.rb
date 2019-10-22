class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :subscriber_id, null: false
      t.integer :other_user_id, null: false
      t.timestamps

      t.index [:subscriber_id, :other_user_id], unique: true
    end
  end
end
