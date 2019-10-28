@identifications.each do |identification|
  json.set! identification.id do
    json.partial! 'api/identifications/identification', identification: identification
  end
end