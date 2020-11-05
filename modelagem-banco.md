# Modelagem do banco de dados Labenu System.

## Todas as tabelas

```sql
CREATE TABLE mission(
	id VARCHAR(255) PRIMARY KEY UNIQUE,
	name VARCHAR(255) NOT NULL UNIQUE,        
	start_date DATE NOT NULL,
	end_date DATE NOT NULL,
	type_class ENUM("integral", "noturna"),
	module ENUM("1","2","3","4","5","6","7")
);

CREATE TABLE teacher(
	id VARCHAR(255) PRIMARY KEY UNIQUE,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	birth_date DATE NOT NULL,
    class VARCHAR(255),
    FOREIGN KEY (class) REFERENCES mission(id)
);

CREATE TABLE students(
	id VARCHAR(255) PRIMARY KEY UNIQUE,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	birth_date DATE NOT NULL,
    class VARCHAR(255),
    FOREIGN KEY (class) REFERENCES mission(id)    
);

CREATE TABLE students_hobbies(
	id VARCHAR(255) PRIMARY KEY UNIQUE,
	student_id VARCHAR(255) NOT NULL,
    hobbie VARCHAR(255) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE teacher_specialty(
	id VARCHAR(255) PRIMARY KEY UNIQUE,
    teacher_id VARCHAR(255) NOT NULL,
    specialty ENUM("React", "Redux", "CSS", "TypeScript", "POO", "Backend"),
    FOREIGN KEY (teacher_id) REFERENCES teacher(id)
);


```