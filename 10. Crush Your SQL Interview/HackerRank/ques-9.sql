-- number of city entries find krne ke liye hum count likhenge
select count(city)-count(distinct city) from station;