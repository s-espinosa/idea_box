require 'rails_helper'

RSpec.describe 'When a user adds an idea' do
  it 'the new idea is displayed', :js => true do
    visit '/'
    find('#new-idea').click
    within('#idea-form') do
      fill_in('title', with: "Title")
      fill_in('body', with: "Body")
      find('#idea-submit').click
    end

    within('main') do
      expect(page).to have_content('Title')
      expect(page).to have_content('Body')
      expect(page).to have_content("swill")
    end
  end
end
