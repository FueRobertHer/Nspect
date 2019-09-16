class ChangeObsDateColToDatetime < ActiveRecord::Migration[5.2]
  def change
    remove_column :observations, :date
    add_column :observations, :datetime, :datetime
  end
end
