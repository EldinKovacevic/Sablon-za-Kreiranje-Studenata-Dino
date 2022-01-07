
class Student {
    constructor(name, adress, phone, course) {
        this.name = name;
        this.adress = adress;
        this.phone = phone;
        this.course = course;
    }

    getInfo() {
        return "Name: " + this.name + "\n" +
            "Adress: " + this.adress + "\n" +
            "Phone: " + this.phone + "\n" +
            "Course: " + this.course
    }
}

var student1 = new Student("Dino Kovacevic-1", "High Park 36", "(507) 833-3567", "Pyton");
var student2 = new Student("Dino Kovacevic-2", "High Park 52", "(507) 833-3568", "Java");
var student3 = new Student("Dino Kovacevic-3", "High Park 12", "(507) 833-3569", "HTML/CSS");


console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());

