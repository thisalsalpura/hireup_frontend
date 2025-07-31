import { toast } from "react-toastify";

export async function advancedSearch(setLoading, minPrice, maxPrice) {
    const gigTitle = document.getElementById("gigTitle").value;
    const category = document.getElementById("category").value;
    const subCategory = document.getElementById("subCategory").value;

    const searchObject = {
        gigTitle: gigTitle,
        category: category,
        subCategory: subCategory,
        minPrice: minPrice,
        maxPrice: maxPrice
    };

    const searchJson = JSON.stringify(searchObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/AdvancedSearch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: searchJson
        });

        if (response.ok) {
            const json = await response.json();
            let searchResultMain = document.getElementById("search-result-main");
            let searchGig = document.getElementById("search-gig");
            let notFound = document.getElementById("not-found");
            searchResultMain.innerHTML = "";
            if (json.status) {
                if (json.message === "NEMPTY") {
                    json.searchGigsList.forEach((gig, i) => {
                        let searchGigClone = searchGig.cloneNode(true);
                        searchGigClone.removeAttribute("id");
                        searchGigClone.classList.remove("hidden");
                        notFound.classList.add("hidden");
                        const imageURL = json.searchGigsImagesList[i];
                        searchGigClone.querySelector("#gig-image").src = imageURL;
                        searchGigClone.querySelector("#gig-seller-name").innerHTML = gig.user.fname + " " + gig.user.lname;
                        searchGigClone.querySelector("#gig-title").innerHTML = gig.title;
                        searchGigClone.querySelector("#gig-price").innerHTML = json.searchGigsPricesList[i];
                        searchResultMain.appendChild(searchGigClone);
                    });
                } else if (json.message === "EMPTY") {
                    searchGig.classList.add("hidden");
                    notFound.classList.remove("hidden");
                    searchResultMain.appendChild(notFound);
                }
            }
            searchResultMain.appendChild(searchGig);
            searchResultMain.appendChild(notFound);
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}