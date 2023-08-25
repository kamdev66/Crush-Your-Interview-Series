//Replace a value in the object:-

const courseInfo={
    name:'Javascript',
    video:30,
}
//replace some part of name
courseInfo.name=courseInfo.name.replace("Java","Dot");
console.log(courseInfo);  //{ name: "Dotscript", video: 30}
//replace new name
courseInfo.name="react";
console.log(courseInfo);  //{ name: "react", video: 30}