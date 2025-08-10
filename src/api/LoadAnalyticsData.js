export async function loadAnalyticsData(setLoading, setChartData, setReportURL) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadAnalyticsData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                const dataSet = json.categoryList.map((category, i) => ({
                    Category: category.name,
                    value: json.gigCountForCategory[i]
                }));
                setChartData(dataSet);
                setReportURL(json.reportURL);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}