import { toast } from "react-toastify";

export async function addSearchTag(setLoading) {
    const searchTagValue = document.getElementById("searchTag").value.trim().replace(/\s+/g, " ").toUpperCase();
    const searchTagMain = document.getElementById("search-tag-main");
    const existingSearchTag = searchTagMain.querySelectorAll(".search-tag-item:not(#search-tag-temp)");
    const existingSearchTagName = searchTagMain.querySelectorAll("#search-tag-name");

    setLoading(true);

    try {
        if (searchTagValue === "") {
            toast.error("Please enter the Search Tag Name!");
            return;
        } else if (searchTagValue.length >= 20) {
            toast.error("Search Tag Name is too much longer!");
            return;
        }

        const onlyLetters = /^[A-Z]+$/;

        if (!onlyLetters.test(searchTagValue)) {
            toast.error("Invalid Search Tag Name!");
            return;
        }

        if (existingSearchTag.length >= 10) {
            toast.error("You can only add 10 Tag Names!");
            return;
        }

        let isDuplicate = false;

        existingSearchTagName.forEach(tagName => {
            if (tagName.textContent === searchTagValue) {
                isDuplicate = true;
            }
        });

        if (isDuplicate) {
            toast.error("This Tag Name already exists!");
            return;
        }

        const searchTagTemplate = document.getElementById("search-tag-temp");
        const searchTagClone = searchTagTemplate.cloneNode(true);
        searchTagClone.removeAttribute("id");
        searchTagClone.classList.remove("hidden");
        searchTagClone.classList.add("flex");
        searchTagClone.querySelector("#search-tag-name").textContent = searchTagValue;
        searchTagClone.querySelector("#search-tag-remove").addEventListener("click", () => {
            searchTagClone.remove();
        });
        searchTagMain.appendChild(searchTagClone);
        document.getElementById("searchTag").value = "";
        toast.success("Search Tag Name added Successfully!");
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}

export async function addFAQ(setLoading) {
    const faqQuesValue = document.getElementById("faqQues").value.trim();
    const faqAnsValue = document.getElementById("faqAns").value.trim();
    const faqMain = document.getElementById("faq-main");
    const existingFaq = faqMain.querySelectorAll(".faq-item:not(#faq-temp)");
    const existingFaqQues = faqMain.querySelectorAll("#faq-ques");
    const existingFaqAns = faqMain.querySelectorAll("#faq-ans");

    setLoading(true);

    try {
        if (faqQuesValue === "") {
            toast.error("Please enter the FAQ Question!");
            return;
        }

        if (faqAnsValue === "") {
            toast.error("Please enter the FAQ Answer!");
            return;
        }

        if (existingFaq.length >= 3) {
            toast.error("You can only add 3 FAQs!");
            return;
        }

        let isFaqQuesDuplicate = false;
        let isFaqAnsDuplicate = false;

        existingFaqQues.forEach(ques => {
            if (ques.textContent === faqQuesValue) {
                isFaqQuesDuplicate = true;
            }
        });

        existingFaqAns.forEach(ans => {
            if (ans.textContent === faqAnsValue) {
                isFaqAnsDuplicate = true;
            }
        });

        if (isFaqQuesDuplicate || isFaqAnsDuplicate) {
            toast.error("This FAQ already exists!");
            return;
        }

        const faqTemplate = document.getElementById("faq-temp");
        const faqClone = faqTemplate.cloneNode(true);
        faqClone.removeAttribute("id");
        faqClone.classList.remove("hidden");
        faqClone.classList.add("flex");
        faqClone.querySelector("#faq-ques").textContent = faqQuesValue;
        faqClone.querySelector("#faq-ans").textContent = faqAnsValue;
        faqClone.querySelector("#faq-remove").addEventListener("click", () => {
            faqClone.remove();
        });
        faqMain.appendChild(faqClone);
        document.getElementById("faqQues").value = "";
        document.getElementById("faqAns").value = "";
        toast.success("FAQ added Successfully!");
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}