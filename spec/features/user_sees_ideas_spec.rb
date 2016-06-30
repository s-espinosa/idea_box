require 'rails_helper'

RSpec.describe 'When a user visits root' do
  it 'they see a list of ideas', :js => true do
    idea1, idea2 = create_list(:idea, 2)

    visit '/'

    wait_for_ajax
    expect(page).to have_content(idea1.title)
    expect(page).to have_content(idea2.body)
    expect(page).to have_content("swill")
  end
end
