//ДЗ 1
function myBlend(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);


//ДЗ2
function findValueByKey(companyName, company) {
  if (company.name === companyName) {
    return company;
  } else if (company.subCompanies) {
    for (const subCompany of company.subCompanies) {
      const result = findValueByKey(companyName, subCompany);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

const companyObject = {
  name: "MainCompany",
  subCompanies: [
    {
      name: "SubCompany1",
      subCompanies: [
        {
          name: "SubSubCompany1",
        },
        {
          name: "SubSubCompany2",
        },
      ],
    },
    {
      name: "SubCompany2",
      subCompanies: [
        {
          name: "SubSubCompany3",
        },
      ],
    },
  ],
};

const result = findValueByKey("SubSubCompany2", companyObject);
console.log(result);
