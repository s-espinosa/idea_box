FactoryGirl.define do
  factory :idea do
    sequence(:title) { |n| "Title#{n}" }
    sequence(:body) { |n| "Body#{n}" }
  end
end
