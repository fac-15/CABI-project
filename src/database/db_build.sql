BEGIN;

DROP TABLE IF EXISTS pests CASCADE;

CREATE TABLE pests (
  id SERIAL PRIMARY KEY,
  pan NUMBER,
scientific_name VARCHAR(100),
  common VARCHAR(100),
  crop VARCHAR(20),
  country VARCHAR(20),
  description TEXT,
);

INSERT INTO users (team, username, password, email) VALUES
(  '',  'Sasspants_sally',   'password',  'grahlsan@gmail.com'),


INSERT INTO teams (name, location, user_id, size, genders, ages, skill, sport, solo, bio, image) VALUES
('fac',  'london',  '1',   '1', '3', '1', '3',  'football',  true, 'Baseball steal yankees fastball wild pitch doubleheader rhubarb. Outfield outfield around the horn 1-2-3 double play outfielder base on balls. Cy young tag center field outside outfielder defensive indifference stance inning. Appeal butcher boy hack peanuts bench 4-6-3 backstop walk off small ball. ', 'https://previews.123rf.com/images/kzenon/kzenon1401/kzenon140100148/25003751-men-and-women-in-mixed-sport-team-playing-football-or-soccer-indoor.jpg'),

INSERT INTO events(name, sport, event_date, start_time, users_id, location, genders, open, bio, image) VALUES
('fun at the park','Football', '2019-03-09', '12:00', '1', 'london', '3', true, 'Baseball steal yankees fastball wild pitch doubleheader rhubarb. Outfield outfield around the horn 1-2-3 double play outfielder base on balls. Cy young tag center field outside outfielder defensive indifference stance inning. Appeal butcher boy hack peanuts bench 4-6-3 backstop walk off small ball. ', 'https://www.csp.org.uk/sites/default/files/styles/full_width/public/media-image/2018-10/
COMMIT;
