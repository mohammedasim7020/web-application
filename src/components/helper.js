export const getData = (count) => {
  // console.log("NUmbefr : ", count);
  var numberType =
    count % 3 === 0
      ? "Remaininng is 0"
      : count % 3 === 1
      ? "Remaininng is 1"
      : count % 3 === 2
      ? "Remaininng is 2"
      : "Odd";

  return numberType;
};

export const cbExample = (cb) => {
  console.log(cb);
  cb({ name: "cbExample" });
};

const obj = {
  name: "Aasim",
  addrs: "Nanded",
  mNumber: "9988776655",
  educationalDetails: {
    Degree: "B.E",
    branch: "Mechanical",
    func: () => "METHOD",
    arr: ["10", "11", "12", "13", "14"],
  },
};

let data = {
  fName: "Tekisky",
  lName: "pvt ltd",
  addr: "Workshop",
  city: "Nanded",
  educationalDetails: {
    degree: "B.E",
    branch: "EverGreen",
    college: "Matoshiri",
    cAddr: "Wadiphati",
    marks: {
      firstYear: "60%",
      secondYear: "60%",
      thirdYear: "65%",
      schoolMarks: {
        tenth: "74%",
      },
    },
  },
};

const {
  name,
  educationalDetails: {
    Degree,
    branch,
    func,
    arr: [first, second, third],
  },
} = obj;

console.log(first);
