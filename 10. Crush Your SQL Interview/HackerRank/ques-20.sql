-------------Draw The Triangle 2-----------------

-- method 1:- 

SET @TEMP:=0; 
SELECT REPEAT('* ', @TEMP:= @TEMP + 1) 
FROM INFORMATION_SCHEMA.TABLES
WHERE @TEMP < 20;
-- or,
SET @i:=0; 
SELECT REPEAT('* ', @i:= @i + 1) 
FROM INFORMATION_SCHEMA.TABLES
WHERE @i < 20;