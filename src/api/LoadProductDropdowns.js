var subCategoryList;

export async function loadProductDropdowns() {
    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadProductDropdowns");

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                loadCategoryDropdownData("category", json.categoryList, "name");
                subCategoryList = json.subCategoryList;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

function loadCategoryDropdownData(selectId, list, property) {
    const select = document.getElementById(selectId);

    select.length = 1;

    list.forEach(item => {
        const option = document.createElement("option");
        option.className = "text-black text-base";
        option.value = item.id;
        option.innerHTML = item[property];
        select.appendChild(option);
    });
}

export function loadSubCategoryDropdownsData() {
    const categoryId = document.getElementById("category").value;
    const subCategorySelector = document.getElementById("subCategory");

    subCategorySelector.length = 1;

    let subCategoryCount = 0;

    subCategoryList.forEach(item => {
        if (item.category.id == categoryId) {
            const option = document.createElement("option");
            option.className = "text-black text-base";
            option.value = item.id;
            option.innerHTML = item.name;
            subCategorySelector.appendChild(option);
            subCategoryCount++;
        }
    });

    if (subCategoryCount !== 0) {
        subCategorySelector.disabled = false;
        subCategorySelector.classList.remove("opacity-50");
    } else {
        subCategorySelector.disabled = true;
        subCategorySelector.classList.add("opacity-50");
    }
}