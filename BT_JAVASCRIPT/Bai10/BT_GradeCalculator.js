const mathScore = 85;
const physicsScore = 78;
const chemistryScore = 92;
const ave = (mathScore+physicsScore+chemistryScore)/3;

// Tính trung bình, xếp loại, kiểm tra đỗ/trượt

console.log('GRADE CALCULATOR');
console.log('Math:', mathScore);
console.log('Physics:', physicsScore);
console.log('Chemistry:', chemistryScore);
console.log('Average Score:', (mathScore+physicsScore+chemistryScore)/3);

//way1: khuyen khich dung trong TH nay
if ((mathScore+physicsScore+chemistryScore)/3 >= 90) {
    console.log('Grade: Excellent'); 
} else if ((mathScore+physicsScore+chemistryScore)/3 >= 80) {
    console.log('Grade: Very Good');
} else if ((mathScore+physicsScore+chemistryScore)/3 >= 70) {
    console.log('Grade: Good');
} else if ((mathScore+physicsScore+chemistryScore)/3 >= 60) {
    console.log('Grade: Fair');
} else if ((mathScore+physicsScore+chemistryScore)/3 >= 50) {
    console.log('Grade: Pass');
} else {console.log('Grade: Fail')}

//way2:
switch (true) {                             // neu dung switch (ave) tuc la ave === (ave>=90) ---> invalid ---> chuyen sang true, nghia la true === (ave>=90)
    case ave >= 90:                         // ave>=90 tra ve true/false, ko phai number
      console.log('Grade: Excellent');
      break;
    case ave >= 80:
      console.log('Grade: Very Good');
      break;
    case ave >= 70:
      console.log('Grade: Good');
      break;
    case ave >= 60:
      console.log('Grade: Fair');
      break;
    case ave >= 50:
      console.log('Grade: Pass');
      break;
    default: 
        console.log('Grade: Fail');
}


if ((mathScore+physicsScore+chemistryScore)/3 >= 50 && mathScore > 40 && physicsScore > 40 && chemistryScore > 40) {
    console.log('Status: PASSED');
} else {
    console.log('Status: FAILED');
}