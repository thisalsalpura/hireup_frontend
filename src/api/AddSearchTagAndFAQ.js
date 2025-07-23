import { toast } from "react-toastify";

export async function addSearchTag(setLoading) {
    const searchTagValue = document.getElementById("searchTag").value.trim();

    setLoading(true);

    try {
        if (searchTagValue !== "") {
            let searchTagMain = document.getElementById("search-tag-main");
            let searchTag = document.getElementById("search-tag");
            let searchTagClone = searchTag.cloneNode(true);
            searchTagClone.querySelector("#search-tag-name").innerHTML = searchTagValue;
            searchTagMain.append(searchTagClone);
            document.getElementById("searchTag").value = "";
            toast.success("Search Tag Name added Successfully!");
        } else {
            toast.error("Please enter the Search Tag Name!");
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}