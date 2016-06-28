require 'rails_helper'

RSpec.describe 'When a user visits root' do
  it 'they see a list of ideas' do
    skip("come back when you learn how to test JS")
    idea1, idea2 = create_list(:idea, 2)

    visit '/'

    expect(page).to have_content(idea1["title"])
    expect(page).to have_content(idea2["description"])
    expect(page).to have_content(idea1["quality"])
  end
end
