class AddBodyColToIdentification < ActiveRecord::Migration[5.2]
  def change
    add_column :identifications, :body, :text
  end
end
