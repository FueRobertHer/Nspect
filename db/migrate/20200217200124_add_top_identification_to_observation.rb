class AddTopIdentificationToObservation < ActiveRecord::Migration[5.2]
  def change
    add_column :observations, :top_identification, :string
  end
end
