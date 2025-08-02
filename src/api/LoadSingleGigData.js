export async function loadSingleGigData(setLoading, setGigBronzePackage, setGigSilverPackage, setGigGoldPackage) {
    const searchParams = new URLSearchParams(window.location.search);

    setLoading(true);

    if (searchParams.has("id")) {
        const gigId = searchParams.get("id");

        try {
            const response = await fetch("http://localhost:8080/hireup_backend/LoadSingleGigData?id=" + gigId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.status) {
                    document.getElementById("category").innerHTML = json.singleGig.sub_Category.category.name;
                    document.getElementById("sub-category").innerHTML = json.singleGig.sub_Category.name;
                    document.getElementById("gig-title").innerHTML = json.singleGig.title;
                    document.getElementById("seller-name").innerHTML = json.singleGig.user.fname + " " + json.singleGig.user.lname;
                    document.getElementById("gigMainImage").src = json.gigImage1;
                    document.getElementById("gigImage1").src = json.gigImage1;
                    document.getElementById("gigImage1").classList.add("opacity-25");
                    document.getElementById("gigImage2").src = json.gigImage2;
                    document.getElementById("gigImage3").src = json.gigImage3;
                    document.getElementById("gigDocument").href = json.gigDocument;
                    document.getElementById("gig-desc").innerHTML = json.singleGig.description;
                    document.getElementById("category2").innerHTML = json.singleGig.sub_Category.category.name;
                    document.getElementById("sub-category2").innerHTML = json.singleGig.sub_Category.name;

                    const searchTagsMain = document.getElementById("search-tags-main");
                    const searchTagTemplate = document.getElementById("search-tag-temp");
                    searchTagsMain.innerHTML = "";
                    json.gigSearchTags.forEach(searchTag => {
                        searchTagsMain.classList.remove("hidden");
                        searchTagsMain.classList.add("flex");
                        let searchTagClone = searchTagTemplate.cloneNode(true);
                        searchTagClone.removeAttribute("id");
                        searchTagClone.classList.remove("hidden");
                        searchTagClone.classList.add("flex");
                        searchTagClone.querySelector("#search-tag-name").textContent = searchTag;
                        searchTagsMain.appendChild(searchTagClone);
                    });

                    const faqMain = document.getElementById("faq-main");
                    const faqTemplate = document.getElementById("faq-temp");
                    faqMain.innerHTML = "";
                    Object.entries(json.gigFaqs).forEach(([question, answer]) => {
                        faqMain.classList.remove("hidden");
                        faqMain.classList.add("flex");
                        let faqClone = faqTemplate.cloneNode(true);
                        faqClone.removeAttribute("id");
                        faqClone.classList.remove("hidden");
                        faqClone.classList.add("flex");
                        faqClone.querySelector("#faq-ques").textContent = question;
                        faqClone.querySelector("#faq-ans").textContent = answer;
                        faqMain.appendChild(faqClone);
                    });

                    setGigBronzePackage(json.gigBronzePackage);
                    setGigSilverPackage(json.gigSilverPackage);
                    setGigGoldPackage(json.gigGoldPackage);
                } else {
                    window.location = "/home";
                }
            } else {
                window.location = "/home";
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    } else {
        window.location = "/home";
    }
}

export function changeMainImage(e) {
    const imageSrc = e.currentTarget.querySelector("img").src;
    const mainImg = document.getElementById("gigMainImage");

    mainImg.src = imageSrc;
    mainImg.classList.remove("fade-in");
    void mainImg.offsetWidth;
    mainImg.classList.add("fade-in");

    const gigImages = document.querySelectorAll(".gig-img-container");
    gigImages.forEach((gigImage) => {
        gigImage.classList.remove("fade-in-transform");
        gigImage.classList.remove("opacity-25");
    });
    e.currentTarget.querySelector("img").classList.add("fade-in-transform");
    e.currentTarget.querySelector("img").classList.add("opacity-25");
}