export async function loadHomeData(setLoading, firstResult, gigsPerPage, setTotalPages, setPopularGigs, setPopularGigImages, setPopularGigPrices) {
    const searchText = document.getElementById("search-text").value;
    
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadHomeData?firstResult=" + firstResult + "&searchText=" + searchText, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            let recommendedResultHead = document.getElementById("recommended-result-head");
            let recommendedResultMain = document.getElementById("recommended-result-main");
            let recommendedGig = document.getElementById("recommended-gig");
            recommendedResultMain.innerHTML = "";

            let categoryResultMain = document.getElementById("category-result-main");
            let categoryResult = document.getElementById("category-result");
            categoryResultMain.innerHTML = "";

            let sellerResultMain = document.getElementById("seller-result-main");
            let sellerResult = document.getElementById("seller-result");
            sellerResultMain.innerHTML = "";

            let homeResultMain = document.getElementById("home-result-main");
            let homeResultContainer = document.getElementById("home-result-container");
            let homeResult = document.getElementById("home-result");
            let paginationContainer = document.getElementById("pagination-container");
            homeResultMain.innerHTML = "";
            homeResultContainer.innerHTML = "";
            if (json.status) {
                if (json.messageRG === "HRECOMMENDED") {
                    json.recommendedGigList.forEach((gig, i) => {
                        let recommendedGigClone = recommendedGig.cloneNode(true);
                        recommendedResultHead.classList.remove("hidden");
                        recommendedResultMain.classList.remove("hidden");
                        recommendedResultMain.classList.add("flex");
                        recommendedGigClone.removeAttribute("id");
                        recommendedGigClone.classList.remove("hidden");
                        recommendedGigClone.classList.add("flex");
                        recommendedGigClone.addEventListener("click", (e) => {
                            window.location.href = "singleGigView?id=" + gig.id;
                        });
                        const imageURL = json.recommendedGigImageList[i];
                        recommendedGigClone.querySelector("#gig-image").src = imageURL;
                        recommendedGigClone.querySelector("#gig-seller-name").innerHTML = gig.user.fname + " " + gig.user.lname;
                        recommendedGigClone.querySelector("#gig-title").innerHTML = gig.title;
                        recommendedGigClone.querySelector("#gig-price").innerHTML = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(json.recommendedGigPriceList[i]);
                        recommendedResultMain.appendChild(recommendedGigClone);
                    });
                } else if (json.messageRG === "NHRECOMMENDED") {
                    recommendedResultHead.classList.remove("flex");
                    recommendedResultMain.classList.remove("flex");
                    recommendedResultMain.classList.add("hidden");
                }

                json.categoryList.forEach((category, i) => {
                    let categoryResultClone = categoryResult.cloneNode(true);
                    categoryResultClone.removeAttribute("id");
                    categoryResultClone.classList.remove("hidden");
                    categoryResultClone.classList.add("flex");
                    categoryResultClone.querySelector("#category-name").innerHTML = category.name;
                    const toggleIcon = categoryResultClone.querySelector("#toggle-sub-menu");
                    const subMenu = categoryResultClone.querySelector("#sub-menu");

                    toggleIcon.addEventListener("click", () => {
                        const isOpen = subMenu.classList.contains("max-h-44");

                        if (isOpen) {
                            subMenu.classList.remove("max-h-44", "opacity-100", "translate-y-0");
                            subMenu.classList.add("max-h-0", "opacity-0", "-translate-y-2");
                            toggleIcon.classList.remove("rotate-45");
                        } else {
                            subMenu.classList.remove("max-h-0", "opacity-0", "-translate-y-2");
                            subMenu.classList.add("max-h-44", "opacity-100", "translate-y-0");
                            toggleIcon.classList.add("rotate-45");
                        }
                    });
                    const subCategoryMenu = categoryResultClone.querySelector("#sub-category-menu");
                    const subCategoryListKey = `subCategoryList${i}`;
                    const subCategoryList = json[subCategoryListKey];
                    subCategoryList.forEach((subCategory) => {
                        const li = document.createElement("li");
                        li.innerHTML = subCategory.name;
                        subCategoryMenu.appendChild(li);
                    });
                    categoryResultMain.appendChild(categoryResultClone);
                });

                json.sellerList.forEach(seller => {
                    let sellerResultClone = sellerResult.cloneNode(true);
                    sellerResultClone.removeAttribute("id");
                    sellerResultClone.classList.remove("hidden");
                    sellerResultClone.classList.add("flex");
                    sellerResultClone.querySelector("#seller-name").innerHTML = seller.user.fname + " " + seller.user.lname;
                    sellerResultClone.querySelector("#seller-about").innerHTML = seller.about;
                    sellerResultMain.appendChild(sellerResultClone);
                });

                json.gigList.forEach((gig, i) => {
                    let homeResultClone = homeResult.cloneNode(true);
                    homeResultClone.removeAttribute("id");
                    homeResultClone.classList.remove("hidden");
                    homeResultClone.addEventListener("click", (e) => {
                        window.location.href = "singleGigView?id=" + gig.id;
                    });
                    const imageURL = json.gigImageList[i];
                    homeResultClone.querySelector("#h-gig-image").src = imageURL;
                    homeResultClone.querySelector("#h-gig-seller-name").innerHTML = gig.user.fname + " " + gig.user.lname;
                    homeResultClone.querySelector("#h-gig-title").innerHTML = gig.title;
                    homeResultClone.querySelector("#h-gig-price").innerHTML = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(json.gigPriceList[i]);
                    homeResultContainer.appendChild(homeResultClone);
                });
                homeResultMain.appendChild(homeResultContainer);
                paginationContainer.classList.remove("hidden");

                const gigs_count = json.verifiedGigsListSize || 0;
                const page_count = Math.ceil(gigs_count / gigsPerPage);
                setTotalPages(page_count);

                setPopularGigs(json.popularGigList);
                setPopularGigImages(json.popularGigImageList);
                setPopularGigPrices(json.popularGigPriceList);
            } else {
                window.location = "/"
            }

            recommendedResultMain.appendChild(recommendedGig);
            categoryResultMain.appendChild(categoryResult);
            sellerResultMain.appendChild(sellerResult);
            homeResultContainer.appendChild(homeResult);
            homeResultMain.appendChild(homeResultContainer);
            homeResultMain.appendChild(paginationContainer);
        } else {
            window.location = "/"
        }
    } catch (error) {
        console.log(error);
        setTotalPages(1);
    } finally {
        setLoading(false);
    }
}