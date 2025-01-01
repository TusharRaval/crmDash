import React, { useState, useRef } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { jsPDF } from 'jspdf';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dashboardRef = useRef();

    // Original Chart Data
    const originalData = {
        bar: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Sales',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
            ],
        },
        line: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [65, 59, 80, 81, 56, 55],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: false,
                },
            ],
        },
        pie: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [
                {
                    label: 'Customer Satisfaction',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                    ],
                },
            ],
        },
    };

    // Filter Chart Data Helper
    const filterChartData = (data) => {
        const filteredLabels = data.labels.filter((label) =>
            label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const filteredData = data.datasets[0].data.filter((_, index) =>
            data.labels[index].toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            ...data,
            labels: filteredLabels,
            datasets: [{ ...data.datasets[0], data: filteredData }],
        };
    };

    // Filtered Data
    const filteredBarData = filterChartData(originalData.bar);
    const filteredLineData = filterChartData(originalData.line);
    const filteredPieData = filterChartData(originalData.pie);

    // Share Functionality
    const handleShare = () => {
        const shareLink = window.location.href;
        navigator.clipboard.writeText(shareLink).then(() => {
            alert('Dashboard link copied to clipboard!');
        });
    };

    // Export to PDF Functionality
    const handleExportToPDF = () => {
        const pdf = new jsPDF();
        pdf.html(dashboardRef.current, {
            callback: function (doc) {
                doc.save('dashboard.pdf');
            },
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            {/* Search and Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        width: '200px',
                    }}
                />
                <div>
                    <button style={buttonStyle('#007bff')} onClick={handleShare}>
                        Share
                    </button>
                    <button style={buttonStyle('#28a745')} onClick={handleExportToPDF}>
                        Export to PDF
                    </button>
                </div>
            </div>

            {/* Dashboard Header */}
            <h1>CRM Dashboard</h1>

            {/* Charts */}
            <div ref={dashboardRef} style={gridStyle}>
                <ChartSection title="Sales Data" ChartComponent={Bar} data={filteredBarData} />
                <ChartSection title="Revenue Data" ChartComponent={Line} data={filteredLineData} />
                <ChartSection title="Customer Satisfaction" ChartComponent={Pie} data={filteredPieData} />
            </div>
        </div>
    );
};

// Button Style Helper
const buttonStyle = (bgColor) => ({
    padding: '10px 15px',
    marginRight: '10px',
    backgroundColor: bgColor,
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
});

// Grid Style Helper
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
};

// Chart Section Component
const ChartSection = ({ title, ChartComponent, data }) => (
    <div>
        <h2>{title}</h2>
        <ChartComponent data={data} />
    </div>
);

export default Home;
