class AddDateColToObsAddNameColToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :observations, :date, :date
  end
end
