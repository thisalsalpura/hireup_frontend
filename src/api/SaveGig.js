import { toast } from "react-toastify";

export async function saveGig(setLoading, activStep, setActiveStep) {
    let gigTitle, gigDesc, categoryId, subCategoryId;

    if (activStep === 1) {
        gigTitle = document.getElementById("gigTitle").value;
        gigDesc = document.getElementById("gigDesc").value;
        categoryId = document.getElementById("category").value;
        subCategoryId = document.getElementById("subCategory").value;
    }

    let bronzePrice, bronzeDTime, bronzeNote, silverPrice, silverDTime, silverNote, goldPrice, goldDTime, goldNote;

    if (activStep === 2) {
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

    const gigObject = {
        activStep, activStep,
        ...(activStep === 1 && {
            gigTitle: gigTitle,
            gigDesc: gigDesc,
            categoryId: categoryId,
            subCategoryId: subCategoryId
        }),
        ...(activStep === 2 && {
            bronzePrice: bronzePrice,
            bronzeDTime: bronzeDTime,
            bronzeNote: bronzeNote,
            silverPrice: silverPrice,
            silverDTime: silverDTime,
            silverNote: silverNote,
            goldPrice: goldPrice,
            goldDTime: goldDTime,
            goldNote: goldNote
        })
    };

    const gigJson = JSON.stringify(gigObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/SaveGig", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: gigJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                setActiveStep(Number(json.setStep));
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