import express, { Express } from 'express';
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';
import { postCreateStudent } from './endpoints_/postCreateStudent';
import { postCreateMission } from './endpoints_/postCreateMission';
import { createNewTeacher } from './endpoints_/createNewTeacher';
import { getStudentAgeById } from './endpoints_/getStudentAgeById';
import { patchStudentToClass } from './endpoints_/patchStudentToClass';
import { patchTeacherToClass } from './endpoints_/patchTeacherToClass';
import { getStudentsInAClass } from './endpoints_/getStudentsInAClass';
import { createNewStudentHobby } from './endpoints_/createNewStudentHobby';
import { getTeacherInAClass } from './endpoints_/getTeacherInAClass';
import { getStudentsWithSameHobbies } from './endpoints_/getStudentsWithSameHobbies';
import { deleteStudentFromAClass } from './endpoints_/deleteStudentFromAClass';
import { deleteTeacherFromAClass } from './endpoints_/deleteTeacherFromAClass';
import { deleteStudent } from './endpoints_/deleteStudent';
import { putChangeStudent } from './endpoints_/putChangeStudent';


dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
});

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/studentAge/:id", getStudentAgeById);
app.get("/missionStudents/:missionId", getStudentsInAClass);
app.get("/missionTeacher/:missionId", getTeacherInAClass);
app.get("/studentsWithSameHobbies/:hobby", getStudentsWithSameHobbies);

app.post("/createStudent", postCreateStudent);
app.post("/createTeacher", createNewTeacher);
app.post("/createMission", postCreateMission);
app.post("/createStudentHobby/:id", createNewStudentHobby);

app.patch("/addStudentToClass", patchStudentToClass);
app.patch("/addTeacherToClass", patchTeacherToClass);
app.put("/changeMission/:id", putChangeStudent);

app.delete("/removeStudent/:id", deleteStudent);
app.delete("/removeStudentFromAClass/:studentId", deleteStudentFromAClass);
app.delete("/removeTeacherFromAClass/:teacherId", deleteTeacherFromAClass);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       console.log(`Server is running...`);
    } else {
       console.error(`Failure upon starting server.`);
    };
});