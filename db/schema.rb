# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20210917155828) do

  create_table "plants", force: :cascade do |t|
    t.string  "name"
    t.string  "latin_name"
    t.string  "season"
    t.string  "light"
    t.string  "water"
    t.integer "germ_days"
    t.string  "notes"
  end

  create_table "pods", force: :cascade do |t|
    t.integer "total_count"
    t.integer "germ_count"
    t.string  "season"
    t.string  "location"
    t.string  "additives"
    t.string  "soil"
    t.string  "water"
    t.integer "pkg_year"
    t.integer "sow_year"
    t.integer "plant_id"
    t.index ["plant_id"], name: "index_pods_on_plant_id"
  end

  create_table "tests", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
