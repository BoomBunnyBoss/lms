//import "../css/style";

document.getElementById("app").innerHTML = ``;

let listRating = [
    {
        icon: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
        secondname: "Кушнір",
        name: "Олександра",
        dz: "11",
        grade: "687",
    },
    {
        icon: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
        secondname: "Одінцов",
        name: "Олександр",
        dz: "10",
        grade: "680",
    },
    {
        icon: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
        secondname: "Ващенко",
        name: "Давід",
        dz: "9",
        grade: "675",
    },
    {
        icon: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
        secondname: "Яременко",
        name: "Олександр",
        dz: "8",
        grade: "657",
    },
    {
        icon: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
        secondname: "Сквирский",
        name: "Антон",
        dz: "7",
        grade: "648",
    },
    {
        icon: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
        secondname: "Шапка",
        name: "Євгеній",
        dz: "6",
        grade: "578",
    },
];

const result = listRating.filter(function (element) {
    const isFilter = element.dz > 8;
    return isFilter;
});

console.log(result);

    result.forEach(function (element) {
    document.getElementById("app").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>
                <img src=${element.icon} alt="">
            </td>
            <td>
            <div>${element.secondname}</div>
            <div>${element.name}</div>
            </td>
            <td>
            <div>${element.dz}</div>
            <div>${element.grade}</div>
            </td>
        </tr>
      `
    );
  });