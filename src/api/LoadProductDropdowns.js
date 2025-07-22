var subCategoryList;

export async function loadProductDropdowns() {
    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadProductDropdowns");

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                loadDropdownData("category", json.categoryList, "name");
                subCategoryList = json.subCategoryList;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

function loadDropdownData(selectId, list, property) {
    const select = document.getElementById(selectId);

    list.forEach(item => {
        const option = document.createElement("option");
        option.className = "text-black text-base";
        option.value = item.id;
        option.innerHTML = item[property];
        select.appendChild(option);
    });
}

export function loadOtherDropdownsData() {
    const categoryId = document.getElementById("category").value;
    const subCategorySelector = document.getElementById("subCategory");

    subCategorySelector.length = 1;

    let subCategoryCount = 0;

    subCategoryList.forEach(item => {
        if (item.country.id == countryId) {
            const option = document.createElement("option");
            option.className = "text-black text-base";
            option.value = item.id;
            option.innerHTML = item.name;
            citySelector.appendChild(option);
            cityCount++;
        }
    });

    if (cityCount !== 0) {
        citySelector.disabled = false;
        citySelector.classList.remove("opacity-50");
    } else {
        citySelector.disabled = true;
        citySelector.classList.add("opacity-50");
    }

    localeList.forEach(item => {
        if (item.country.id == countryId) {
            const option = document.createElement("option");
            option.className = "text-black text-base";
            option.value = item.id;
            option.innerHTML = item.value;
            localeSelector.appendChild(option);
            localeCount++;
        }
    });

    if (localeCount !== 0) {
        localeSelector.disabled = false;
        localeSelector.classList.remove("opacity-50");
    } else {
        localeSelector.disabled = true;
        localeSelector.classList.add("opacity-50");
    }
}