export async function advancedSearch(setLoading, minPrice, maxPrice, firstResult, gigsPerPage, setTotalPages) {
    const gigTitle = document.getElementById("gigTitle").value;
    const category = document.getElementById("category").value;
    const subCategory = document.getElementById("subCategory").value;
    const sortBy = document.getElementById("sortBy").value;

    const searchObject = {
        firstResult: firstResult,
        gigTitle: gigTitle,
        category: category,
        subCategory: subCategory,
        minPrice: minPrice,
        maxPrice: maxPrice,
        sortBy: sortBy
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
                        searchGigClone.addEventListener("click", (e) => {
                            window.location.href = "singleGigView?id=" + gig.id;
                        });
                        const imageURL = json.searchGigsImagesList[i];
                        searchGigClone.querySelector("#gig-image").src = imageURL;
                        searchGigClone.querySelector("#gig-seller-name").innerHTML = gig.user.fname + " " + gig.user.lname;
                        searchGigClone.querySelector("#gig-title").innerHTML = gig.title;
                        searchGigClone.querySelector("#gig-price").innerHTML = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(json.searchGigsPricesList[i]);
                        searchResultMain.appendChild(searchGigClone);
                    });
                    document.getElementById("pagination-container").classList.remove("hidden");
                } else if (json.message === "EMPTY") {
                    searchGig.classList.add("hidden");
                    notFound.classList.remove("hidden");
                    searchResultMain.appendChild(notFound);
                    document.getElementById("pagination-container").classList.add("hidden");
                }
                const gigs_count = json.searchGigsListSize || 0;
                const page_count = Math.ceil(gigs_count / gigsPerPage);
                setTotalPages(page_count);
            }
            searchResultMain.appendChild(searchGig);
            searchResultMain.appendChild(notFound);
        }
    } catch (error) {
        console.log(error);
        setTotalPages(1);
    } finally {
        setLoading(false);
    }
}

export function clear(setPriceRange) {
    document.getElementById("gigTitle").value = "";
    document.getElementById("category").value = 0;
    document.getElementById("subCategory").value = 0;
    document.getElementById("sortBy").value = 0;
    setPriceRange([0, 1000]);
    window.location.reload();
}