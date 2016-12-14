class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :collection_id, null: false
      t.integer :subscription_id, null: false

      t.timestamps
    end
  end
end
