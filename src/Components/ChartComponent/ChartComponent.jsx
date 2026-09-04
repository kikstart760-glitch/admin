import React, { useState } from "react";
import "../ChartComponent/ChartComponent.css";
import ReactApexChart from "react-apexcharts";

const ChartComponent = () => {
    const [period, setPeriod] = useState("monthly");

    const bookingData = {
        daily: {
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
            ],
            data: [25, 32, 28, 40, 35, 52, 45],
        },

        weekly: {
            categories: [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4",
                "Week 5",
                "Week 6",
            ],
            data: [145, 178, 156, 210, 195, 235],
        },

        monthly: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            data: [
                520,
                610,
                580,
                720,
                680,
                790,
                850,
                920,
                870,
                980,
                1050,
                1150,
            ],
        },
    };

    const currentData = bookingData[period];

    const options = {
        chart: {
            type: "area",
            height: 350,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },

        dataLabels: {
            enabled: false,
        },

        stroke: {
            curve: "smooth",
            width: 3,
        },

        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.05,
                stops: [0, 100],
            },
        },

        colors: ["#6366f1"],

        xaxis: {
            categories: currentData.categories,
            labels: {
                style: {
                    colors: "#777",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },

        yaxis: {
            min: 0,
            title: {
                text: "Bookings",
            },
            labels: {
                style: {
                    colors: "#777",
                },
            },
        },

        grid: {
            borderColor: "#eeeeee",
            strokeDashArray: 4,
        },

        tooltip: {
            y: {
                formatter: (value) => `${value} bookings`,
            },
        },

        legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
        },
    };

    const series = [
        {
            name: "Bookings",
            data: currentData.data,
        },
    ];

    return (
        <div className="chart-container">

            <div className="chart-header">

                <div className="chart-title">
                    <h3>Booking Overview</h3>
                    <p>Track your booking performance</p>
                </div>

                <div className="period-buttons">

                    <button
                        className={period === "daily" ? "active" : ""}
                        onClick={() => setPeriod("daily")}
                    >
                        Daily
                    </button>

                    <button
                        className={period === "weekly" ? "active" : ""}
                        onClick={() => setPeriod("weekly")}
                    >
                        Weekly
                    </button>

                    <button
                        className={period === "monthly" ? "active" : ""}
                        onClick={() => setPeriod("monthly")}
                    >
                        Monthly
                    </button>

                </div>

            </div>

            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="area"
                    height={350}
                />
            </div>

        </div>
    );
};

export default ChartComponent;
