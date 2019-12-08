export default class GradeSchool {
    private students: Map<String, String[]>;

    constructor() {
        this.students = new Map();
    }

    addStudent(name:string, grade:number) {
        let key = grade.toString();
        if (this.students.has(key)) {
            let names = this.students.get(key);
            if (names) {
                names.push(name);
                this.students.set(key, names.sort())
            }
        }
        else {
            this.students.set(key, [name])
        }
    }

    getAllStudents(): Map<String, String[]> {
        return new Map([...this.students.entries()].sort())
    }

    getGradeStudents(grade:number): string[] {
        let key = grade.toString()
        let names: any = [];
        if (this.students.has(key)) {
            names = this.students.get(key);
        }
        return names;
    }
}
