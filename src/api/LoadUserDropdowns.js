var cityList;
var localeList;

export async function loadUserDropdowns() {
    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadUserDropdowns");

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                loadCountryDropdownData("country", json.countryList, "name");
                cityList = json.cityList;
                localeList = json.localeList;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

function loadCountryDropdownData(selectId, list, property) {
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
    const countryId = document.getElementById("country").value;
    const citySelector = document.getElementById("city");
    const localeSelector = document.getElementById("locale");

    citySelector.length = 1;
    localeSelector.length = 1;

    let cityCount = 0;
    let localeCount = 0;

    cityList.forEach(item => {
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