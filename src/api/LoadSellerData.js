export async function loadSellerData() {
    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadSellerData", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                document.getElementById("sellerName").innerHTML = json.name;
                document.getElementById("sellerCountry").innerHTML = json.country;
                const eduQualificationMain = document.getElementById("edu-qualification-main");
                const eduQualificationTemplate = document.getElementById("edu-qualification-temp");
                const skillMain = document.getElementById("skill-main");
                const skillTemplate = document.getElementById("skill-temp");
                eduQualificationMain.innerHTML = "";
                skillMain.innerHTML = "";
                if (json.profile === "UPDATED") {
                    document.getElementById("about").value = json.about;

                    Object.entries(json.qualificationsMap).forEach(([course_name, institute_name]) => {
                        eduQualificationMain.classList.remove("hidden");
                        eduQualificationMain.classList.add("flex");
                        let eduQualificationClone = eduQualificationTemplate.cloneNode(true);
                        eduQualificationClone.removeAttribute("id");
                        eduQualificationClone.classList.remove("hidden");
                        eduQualificationClone.classList.add("flex");
                        eduQualificationClone.querySelector("#edu-qualification-name").textContent = course_name;
                        eduQualificationClone.querySelector("#edu-qualification-place").textContent = institute_name;
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
                    });

                    json.skillsList.forEach(skill => {
                        skillMain.classList.remove("hidden");
                        skillMain.classList.add("flex");
                        let skillClone = skillTemplate.cloneNode(true);
                        skillClone.removeAttribute("id");
                        skillClone.classList.remove("hidden");
                        skillClone.classList.add("flex");
                        skillClone.querySelector("#skill-name").textContent = skill.seller_Skills.name;
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
                    });
                }
                eduQualificationMain.appendChild(eduQualificationTemplate);
                skillMain.appendChild(skillTemplate);
            }
        }
    } catch (error) {
        console.log(error);
    }
}