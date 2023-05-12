-- ending me vowel check krna hai isiliye isme % and uske bad vowel hai

SELECT DISTINCT(CITY) FROM STATION WHERE CITY LIKE '%a' OR CITY LIKE '%e' OR CITY LIKE '%i' OR CITY LIKE '%o' 
OR CITY LIKE '%u';