import './style.scss';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

interface ChartData {
    country: string;
    litres: number;
}

function createDonutChart(data: ChartData[]) {
    am4core.useTheme(am4themes_animated);

    const chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0;

    chart.data = data;

    chart.innerRadius = 0;

    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "percent";
    series.dataFields.category = "MBTI";

    series.labels.template.disabled = true;
    series.tooltip.label.fontSize = 15;

    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.fontSize = 12;
    chart.legend.valueLabels.template.fontSize = 12;

    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#333333");
    series.tooltip.label.fill = am4core.color("#ffffff");

    series.labels.template.fill = am4core.color("#ffffff");

    chart.legend.labels.template.fill = am4core.color("#ffffff");
    chart.legend.valueLabels.template.fill = am4core.color("#ffffff");

    return chart;
}

async function fetchDataAndCreateChart() {
    try {
        const response = await fetch('http://127.0.0.1:5000/chart-data'); 
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        const data: ChartData[] = await response.json(); 
        createDonutChart(data); 
    } catch (error) {
        console.error("Error fetching chart data:", error);
    }
}

document.getElementById("loadChartButton")?.addEventListener("click", fetchDataAndCreateChart);


document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});


document.getElementById("user-input")?.addEventListener("keydown", function(event: KeyboardEvent) {
    if (event.key === "Enter") {
        sendMessage();
        event.preventDefault();
    }
});


window.sendMessage = function sendMessage(): void {
    const userInputElement = document.getElementById("user-input") as HTMLInputElement;
    const userInput = userInputElement?.value.trim();

    if (userInput) {
        addMessage(userInput, "user-message");
        userInputElement.value = ""; 

        showTypingIndicator();



        fetch('http://127.0.0.1:5000/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput }),  
        })
        
        .then(response => response.json())
        .then(data => {
            removeTypingIndicator();
            const botResponse = data.response;  
            addMessage(botResponse, "bot-message");  
        })
        .catch(error => {
            console.error("Error:", error);  
        });
        
    }
}



function addMessage(message: string, className: string): void {
    const chatBox = document.getElementById("chat-box");

    if (chatBox) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${className}`;
        messageElement.textContent = message;

        chatBox.appendChild(messageElement);

        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function showTypingIndicator() {
    const chatBox = document.getElementById("chat-box");
    
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "message typing-indicator";
    typingIndicator.setAttribute("id", "typing-indicator");
    typingIndicator.innerHTML = `
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    `;

    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) {
        typingIndicator.remove(); 
    }
}
