CREATE TABLE IF NOT EXISTS
  applicant(
    applicant_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
  );
  CREATE TABLE IF NOT EXISTS
  meeting(
    meeting_id SERIAL PRIMARY KEY,
    applicant_id integer NOT NULL REFERENCES applicant(applicant_id),
    gcalid VARCHAR(100),
    addedtoneuhauscal boolean NOT NULL DEFAULT FALSE
  );

INSERT INTO  applicant ( name , email )
VALUES
('Moe West','Moe@west.net'),
('Moe Money','moneymoneymoney@money.co.il');


INSERT INTO  meeting ( applicant_id, gcalid, addedtoneuhauscal )
VALUES
(1,'abcd',TRUE),
(1,'efgh',TRUE),
(1,'ijklm',TRUE),
(2,'nopqrs',TRUE),
(2,'tuvw',TRUE),
(2,NULL,FALSE);
