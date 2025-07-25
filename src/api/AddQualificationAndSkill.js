import { toast } from "react-toastify";

export async function addQualification(setLoading, setShowEduModal) {
    const qualificationNameValue = document.getElementById("qualificationName").value.trim();
    const qualificationPlaceValue = document.getElementById("qualificationPlace").value.trim();
    const eduQualificationMain = document.getElementById("edu-qualification-main");
    const existingQualification = eduQualificationMain.querySelectorAll(".edu-qualification-item:not(#edu-qualification-temp)");
    const existingQualificationName = eduQualificationMain.querySelectorAll("#edu-qualification-name");
    const existingQualificationPlace = eduQualificationMain.querySelectorAll("#edu-qualification-place");

    setLoading(true);

    try {
        if (qualificationNameValue === "") {
            toast.error("Please enter the Qualification Name!");
            return;
        } else if (qualificationNameValue.length >= 45) {
            toast.error("Qualification Name is too much longer!");
            return;
        } else if (qualificationPlaceValue === "") {
            toast.error("Please enter your Institute or University Name!");
            return;
        } else if (qualificationPlaceValue.length >= 45) {
            toast.error("Institute or University Name is too much longer!");
            return;
        }

        const onlyLettersAndSpaces = /^[A-Za-z\s]+$/;

        if (!onlyLettersAndSpaces.test(qualificationNameValue)) {
            toast.error("Invalid Qualification Name!");
            return;
        }

        if (!onlyLettersAndSpaces.test(qualificationPlaceValue)) {
            toast.error("Invalid Qualification Place!");
            return;
        }

        if (existingQualification.length >= 2) {
            toast.error("You can only add Maximum 2 Tag Qualification Name!");
            return;
        }

        let isQualificationNameDuplicate = false;
        let isQualificationPlaceDuplicate = false;

        existingQualificationName.forEach(qualificationName => {
            if (qualificationName.textContent === qualificationNameValue) {
                isQualificationNameDuplicate = true;
            }
        });

        existingQualificationPlace.forEach(qualificationPlace => {
            if (qualificationPlace.textContent === qualificationPlaceValue) {
                isQualificationPlaceDuplicate = true;
            }
        });

        if (isQualificationNameDuplicate || isQualificationPlaceDuplicate) {
            toast.error("This Education Qualification already exists!");
            return;
        }

        eduQualificationMain.classList.remove("hidden");
        eduQualificationMain.classList.add("flex");
        const eduQualificationTemplate = document.getElementById("edu-qualification-temp");
        const eduQualificationClone = eduQualificationTemplate.cloneNode(true);
        eduQualificationClone.removeAttribute("id");
        eduQualificationClone.classList.remove("hidden");
        eduQualificationClone.classList.add("flex");
        eduQualificationClone.querySelector("#edu-qualification-name").textContent = qualificationNameValue;
        eduQualificationClone.querySelector("#edu-qualification-place").textContent = qualificationPlaceValue;
        eduQualificationClone.querySelector("#edu-qualification-remove").addEventListener("click", () => {
            eduQualificationClone.remove();
            const existingQualificationCount = document.querySelectorAll(".edu-qualification-item:not(#edu-qualification-temp)");
            if (existingQualificationCount.length === 0) {
                eduQualificationMain.classList.remove("flex");
                eduQualificationMain.classList.add("hidden");
                document.getElementById("no-edu-qualification").classList.remove("hidden");
            }
        });
        eduQualificationMain.appendChild(eduQualificationClone);
        document.getElementById("no-edu-qualification").classList.add("hidden");
        document.getElementById("qualificationName").value = "";
        document.getElementById("qualificationPlace").value = "";
        toast.success("Education Qualification added Successfully!");
        setShowEduModal(false);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}

export async function addSkill(setLoading, setShowSkillModal) {
    const skillNameValue = document.getElementById("skillName").value.trim().toUpperCase();
    const skillMain = document.getElementById("skill-main");
    const existingSkill = skillMain.querySelectorAll(".skill-item:not(#skill-temp)");
    const existingSkillName = skillMain.querySelectorAll("#skill-name");

    setLoading(true);

    try {
        if (skillNameValue === "") {
            toast.error("Please enter the Skill Name!");
            return;
        } else if (skillNameValue.length >= 20) {
            toast.error("Skill Name is too much longer!");
            return;
        }

        const onlyLettersAndSpaces = /^[A-Za-z\s]+$/;

        if (!onlyLettersAndSpaces.test(skillNameValue)) {
            toast.error("Invalid Skill Name!");
            return;
        }

        if (existingSkill.length >= 10) {
            toast.error("You can only add Maximum 10 Tag Skill Name!");
            return;
        }

        let isDuplicate = false;

        existingSkillName.forEach(skillName => {
            if (skillName.textContent === skillNameValue) {
                isDuplicate = true;
            }
        });

        if (isDuplicate) {
            toast.error("This Skill Name already exists!");
            return;
        }

        skillMain.classList.remove("hidden");
        skillMain.classList.add("flex");
        const skillTemplate = document.getElementById("skill-temp");
        const skillClone = skillTemplate.cloneNode(true);
        skillClone.removeAttribute("id");
        skillClone.classList.remove("hidden");
        skillClone.classList.add("flex");
        skillClone.querySelector("#skill-name").textContent = skillNameValue;
        skillClone.querySelector("#skill-remove").addEventListener("click", () => {
            skillClone.remove();
            const existingSkillCount = document.querySelectorAll(".skill-item:not(#skill-temp)");
            if (existingSkillCount.length === 0) {
                skillMain.classList.remove("flex");
                skillMain.classList.add("hidden");
                document.getElementById("no-skill-name").classList.remove("hidden");
            }
        });
        skillMain.appendChild(skillClone);
        document.getElementById("no-skill-name").classList.add("hidden");
        document.getElementById("skillName").value = "";
        toast.success("Skill Name added Successfully!");
        setShowSkillModal(false);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}