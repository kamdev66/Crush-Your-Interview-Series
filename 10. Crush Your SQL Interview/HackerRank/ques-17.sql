-- method 1:---
SELECT DISTINCT CITY FROM STATION WHERE LOWER(SUBSTR(CITY,1,1)) 
NOT IN ('a','e','i','o','u') AND LOWER(SUBSTR(CITY,LENGTH(CITY),1)) 
NOT IN ('a','e','i','o','u');


-- method 2:---
SELECT DISTINCT CITY 
FROM STATION 
WHERE CITY NOT LIKE 'A%' 
    AND CITY NOT LIKE 'E%' 
    AND CITY NOT LIKE 'I%' 
    AND CITY NOT LIKE 'O%' 
    AND CITY NOT LIKE 'U%' 
    AND CITY NOT LIKE '%a' 
    AND CITY NOT LIKE '%e' 
    AND CITY NOT LIKE '%i' 
    AND CITY NOT LIKE '%o' 
    AND CITY NOT LIKE '%u';


-- method 3:---
SELECT DISTINCT CITY 
FROM STATION 
WHERE CITY REGEXP '^[^AEIOUaeiou].*[^AEIOUaeiou]$';


-- method 4:-
SELECT DISTINCT CITY
FROM STATION
WHERE SUBSTR(CITY, 1, 1) NOT IN ('A', 'E', 'I', 'O', 'U')
  AND SUBSTR(CITY, -1, 1) NOT IN ('A', 'E', 'I', 'O', 'U');




