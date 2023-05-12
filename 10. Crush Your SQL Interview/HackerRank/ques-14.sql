-- method 1:-
SELECT DISTINCT CITY
FROM STATION
WHERE CITY NOT LIKE 'A%' 
AND CITY NOT LIKE 'E%' 
AND CITY NOT LIKE 'I%' 
AND CITY NOT LIKE 'O%' 
AND CITY NOT LIKE 'U%';

-- Explanation:- In this query, we use the DISTINCT keyword to eliminate duplicates 
-- in the result set. We also use the NOT LIKE operator to filter out the cities 
-- that start with vowels ('A', 'E', 'I', 'O', or 'U').
-- Here's a breakdown of the code:
-- SELECT DISTINCT CITY: This selects all unique city names from the STATION table.
-- FROM STATION: This specifies the STATION table as the source of data for the query.
-- WHERE CITY NOT LIKE 'A%' AND CITY NOT LIKE 'E%' AND CITY NOT LIKE 'I%' AND CITY NOT
-- LIKE 'O%' AND CITY NOT LIKE 'U%': This specifies the conditions that a city name 
-- must satisfy in order to be included in the query result. The NOT LIKE operator 
-- is used to exclude any city names that start with vowels.


-- method 2:- Using the REGEXP_LIKE function:
SELECT DISTINCT CITY 
FROM STATION 
WHERE CITY NOT RLIKE '^[aeiouAEIOU]';


-- method 3:- Using the REGEXP_LIKE function:
SELECT DISTINCT CITY
FROM STATION
WHERE NOT REGEXP_LIKE(CITY, '^[AEIOU]');


-- method 4:- Using the SUBSTR function:
SELECT DISTINCT CITY
FROM STATION
WHERE SUBSTR(CITY, 1, 1) NOT IN ('A', 'E', 'I', 'O', 'U');

