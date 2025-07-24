import { toast } from "react-toastify";

export async function saveGig(setLoading, activeStep, setActiveStep) {
    let requestBody;
    let headers = {};
    let requestOptions = {
        method: "POST",
        credentials: "include"
    };

    let gigTitle, gigDesc, categoryId, subCategoryId;

    if (activeStep === 1) {
        gigTitle = document.getElementById("gigTitle").value;
        gigDesc = document.getElementById("gigDesc").value;
        categoryId = document.getElementById("category").value;
        subCategoryId = document.getElementById("subCategory").value;
    }

    let bronzePrice, bronzeDTime, bronzeNote, silverPrice, silverDTime, silverNote, goldPrice, goldDTime, goldNote;

    if (activeStep === 2) {
        bronzePrice = document.getElementById("bronzePrice").value;
        bronzeDTime = document.getElementById("bronzeDTime").value;
        bronzeNote = document.getElementById("bronzeNote").value;
        silverPrice = document.getElementById("silverPrice").value;
        silverDTime = document.getElementById("silverDTime").value;
        silverNote = document.getElementById("silverNote").value;
        goldPrice = document.getElementById("goldPrice").value;
        goldDTime = document.getElementById("goldDTime").value;
        goldNote = document.getElementById("goldNote").value;
    }

    let searchNamesList, faqsList;

    if (activeStep === 3) {
        searchNamesList = Array.from(
            document.querySelectorAll("#search-tag-main .search-tag-item:not(#search-tag-temp) #search-tag-name")
        ).map(searchName => searchName.textContent);

        faqsList = Array.from(
            document.querySelectorAll("#faq-main .faq-item:not(#faq-temp)")
        ).map(faq => ({
            question: faq.querySelector("#faq-ques").textContent,
            answer: faq.querySelector("#faq-ans").textContent,
        }));
    }

    let image1, image2, image3, doc, form;

    if (activeStep === 4) {
        image1 = document.getElementById("image1").files[0];
        image2 = document.getElementById("image2").files[0];
        image3 = document.getElementById("image3").files[0];
        doc = document.getElementById("doc").files[0];

        form = new FormData();
        form.append("activeStep", activeStep.toString());
        form.append("image1", image1);
        form.append("image2", image2);
        form.append("image3", image3);
        form.append("doc", doc);
    }

    const gigObject = {
        activeStep, activeStep,
        ...(activeStep === 1 && {
            gigTitle: gigTitle,
            gigDesc: gigDesc,
            categoryId: categoryId,
            subCategoryId: subCategoryId
        }),
        ...(activeStep === 2 && {
            bronzePrice: bronzePrice,
            bronzeDTime: bronzeDTime,
            bronzeNote: bronzeNote,
            silverPrice: silverPrice,
            silverDTime: silverDTime,
            silverNote: silverNote,
            goldPrice: goldPrice,
            goldDTime: goldDTime,
            goldNote: goldNote
        }),
        ...(activeStep === 3 && {
            searchNamesList: searchNamesList,
            faqsList: faqsList
        })
    };

    const gigJson = JSON.stringify(gigObject);

    if (activeStep !== 4) {
        requestBody = gigJson;
        headers["Content-Type"] = "application/json";
        requestOptions.headers = headers;
    } else {
        requestBody = form;
    }

    requestOptions.body = requestBody;

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/SaveGig", requestOptions);

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                if (json.setStep === "FINISH") {
                    toast.success(json.message);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    setActiveStep(Number(json.setStep));
                }
            } else {
                toast.error(json.message);
            }
        } else {
            toast.error("Something went wrong! Please try again later.");
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}