import React from "react";
import ReactApexChart from "react-apexcharts";
import "../RoundChartComponent/RoundComponent.css";

const RoundComponent = () => {
    const series = [35, 25, 20, 12, 8];

    const options = {
        chart: {
            type: "donut",
            toolbar: {
                show: false,
            },
        },

        labels: [
            "Direct",
            "Organic",
            "Social Media",
            "Referral",
            "Travel Agent",
        ],

        colors: [
            "#2196F3",
            "#14B8A6",
            "#F59E0B",
            "#F43F5E",
            "#8B5CF6",
        ],

        plotOptions: {
            pie: {
                expandOnClick: false,

                donut: {
                    size: "70%",

                    labels: {
                        show: true,

                        name: {
                            show: true,
                            color: "#64748b",
                            fontSize: "15px",
                            fontWeight: 400,
                            offsetY: -8,
                        },

                        value: {
                            show: true,
                            color: "#111827",
                            fontSize: "28px",
                            fontWeight: 600,
                            offsetY: 8,
                        },

                        total: {
                            show: true,
                            showAlways: true,
                            label: "Total Bookings",
                            color: "#64748b",
                            fontSize: "15px",
                            fontWeight: 400,

                            formatter: (w) => {
                                return w.globals.seriesTotals.reduce(
                                    (a, b) => a + b,
                                    0
                                );
                            },
                        },
                    },
                },
            },
        },

        stroke: {
            width: 9,
            colors: ["#ffffff"],
            lineCap: "round",
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },

        tooltip: {
            y: {
                formatter: (value) => `${value}%`,
            },
        },

        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300,
                    },
                },
            },
        ],
    };

    return (
        <div className="round-chart-card">
            <div className="round-chart-title">
                <h3>Bookings by Source</h3>
                <p>Booking traffic overview</p>
            </div>

            <div className="round-chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="donut"
                    width={400}
                />
            </div>
        </div>
    );
};

export default RoundComponent;