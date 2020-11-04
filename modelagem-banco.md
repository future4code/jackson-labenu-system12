# Modelagem do banco de dados Labenu System.

## 1. Tabela estudante

```sql
    CREATE TABLE students(
        id VARCHAR(255) PRIMARY KEY UNIQUE,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        birth_date DATE NOT NULL
    );
```

## 2. Tabela Docente
```sql
    CREATE TABLE teacher(
        id VARCHAR(255) PRIMARY KEY UNIQUE,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        birth_date DATE NOT NULL,
        specialism ENUM("React", "Redux", "CSS", "TypeScript", "POO", "Backend")
    );
```

## 3. Tabela turma
```sql
    CREATE TABLE class(
        id VARCHAR(255) PRIMARY KEY UNIQUE,
        name VARCHAR(255) NOT NULL UNIQUE,        
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        students VARCHAR(255),
        teachers VARCHAR(255),
        type_class ENUM("integral", "noturna"),
        module ENUM("1","2","3","4","5","6","7"),
        FOREIGN KEY (students) REFERENCES students(id),
        FOREIGN KEY (teachers) REFERENCES teacher(id)
    );
```

## 4. Tabela de relações entre alunos, turmas e professores

```sql
```