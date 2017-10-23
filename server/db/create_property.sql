INSERT INTO properties
  (name
  , description
  , address
  , city
  , state
  , zip
  , image_url
  , loan_amount
  , monthly_amount
  , desired_rent)
  /*removes user_id for the time being*/
VALUES
  (${name}
  , ${description}
  , ${address}
  , ${city}
  , ${state}
  , ${zip}
  , ${image_url}
  , ${loan_amount}
  , ${monthly_amount}
  , ${desired_rent})
    /*removes user_id for the time being*/
;

-- SELECT
--   id
--   , name
--   , description
--   , address
--   , city
--   , state
--   , zip
--   , image_url
--   , loan_amount
--   , monthly_amount
--   , desired_rent
-- FROM properties
-- WHERE user_id = ${user_id};
