class AddDescriptionColumnToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :description, :text, default: ' is an Nspector.'
  end
end
