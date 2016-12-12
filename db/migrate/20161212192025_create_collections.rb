class CreateCollections < ActiveRecord::Migration[5.0]
  def change
    create_table :collections do |t|
      t.string :title, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :collections, :user_id
  end
end
