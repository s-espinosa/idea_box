require 'rails_helper'

RSpec.describe 'When a user adds an idea' do
  it 'the new idea is displayed', :js => true do
    idea = create(:idea)

    visit '/'
    within("#idea-#{idea.id}") do
      find('.title-input').click
      find('.title-input').set("New Title")
    end
    find('h1').click

    within("#idea-#{idea.id}") do
      expect(page).to have_content('New Title')
    end
  end
end
