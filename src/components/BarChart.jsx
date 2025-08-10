import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const BarChart = ({ name, data }) => {

    const chartRef = useRef(null);

    useEffect(() => {
        if (!data || data.length === 0) return;

        const root = am5.Root.new(chartRef.current);

        // Apply theme
        root.setThemes([am5themes_Animated.new(root)]);

        // Chart container
        const chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                pinchZoomX: true,
                paddingLeft: 0,
                paddingRight: 1
            })
        );

        // Cursor
        const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        // X Axis renderer & labels
        const xRenderer = am5xy.AxisRendererX.new(root, {
            minGridDistance: 30,
            minorGridEnabled: true
        });

        xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p100,
            paddingRight: 15,
            fontFamily: "Ropa Sans, sans-serif",
            fontSize: 12,
            fontWeight: 500
        });

        xRenderer.grid.template.setAll({ location: 1 });

        const xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                maxDeviation: 0.3,
                categoryField: name,
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, {})
            })
        );

        // Y Axis renderer & labels
        const yRenderer = am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1
        });

        yRenderer.labels.template.setAll({
            fontFamily: "Ropa Sans, sans-serif",
            fontSize: 12,
            fontWeight: 500
        });

        const yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0.3,
                renderer: yRenderer
            })
        );

        // Add axis titles
        xAxis.set("title", am5.Label.new(root, {
            text: name,
            fontFamily: "Ropa Sans, sans-serif",
            fontSize: 14,
            fontWeight: "bold",
            paddingTop: 10
        }));

        yAxis.set("title", am5.Label.new(root, {
            text: "Value",
            fontFamily: "Ropa Sans, sans-serif",
            fontSize: 14,
            fontWeight: "bold",
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p50
        }));

        // Series
        const series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Series 1",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                sequencedInterpolation: true,
                categoryXField: name,
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                })
            })
        );

        // Tooltip font
        series.get("tooltip").label.setAll({
            fontFamily: "Ropa Sans, sans-serif",
            fontSize: 14,
            fontWeight: 500
        });

        series.columns.template.setAll({
            cornerRadiusTL: 5,
            cornerRadiusTR: 5,
            strokeOpacity: 0
        });

        // Colors
        series.columns.template.adapters.add("fill", (fill, target) =>
            chart.get("colors").getIndex(series.columns.indexOf(target))
        );

        series.columns.template.adapters.add("stroke", (stroke, target) =>
            chart.get("colors").getIndex(series.columns.indexOf(target))
        );

        xAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        chart.appear(1000, 100);

        return () => {
            root.dispose();
        };
    }, [data]);

    return (
        <div id="chartdiv" ref={chartRef} className="h-full w-full" />
    )
}

export default BarChart;
