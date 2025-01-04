MBTI Career Exploration Chatbot for ENGR 110

This project is an educational chatbot application designed for the University of Michigan's ENGR 110 course, which helps students explore careers in engineering. The chatbot leverages the OpenAI API to provide MBTI (Myers-Briggs Type Indicator)-based career guidance and insights into different engineering disciplines.

Introduction

The MBTI Career Exploration Chatbot provides a conversational interface where students can discover engineering fields that align with their personality types. It is intended to foster self-reflection and assist students in making informed decisions about their engineering career paths.

The chatbot uses:

OpenAI's API for generating personalized responses.

Node.js (Vite) for the frontend application.

Python Flask for managing the backend and API communication.

Features

MBTI-based guidance: Tailored career insights for all 16 MBTI personality types.

Engineering career recommendations: Specific advice about different engineering disciplines.

Responsive user interface: Intuitive and user-friendly interface for students.

Educational tool: Designed to support career exploration activities within ENGR 110.

Prerequisites

Ensure you have the following tools installed:

Node.js (version 14 or higher)

Python 3

npm (comes with Node.js)

Flask: Install via pip install flask

OpenAI API key (create an account and generate your key at OpenAI)

Installation

Clone the repository:

git clone <repository-url>
cd <repository-folder>

Install frontend dependencies:
Navigate to the frontend folder and run:

npm install

Set up the backend:
In the project root directory, ensure the app.py file exists and Flask is installed:

pip install -r requirements.txt  # If provided

Add your OpenAI API Key:
In app.py, add your OpenAI API key in the designated variable:

openai.api_key = "YOUR_API_KEY_HERE"

Running the Application

Step 1: Start the Flask backend

Open a terminal, navigate to the project root, and run:

python app.py

This will start the backend API service at http://localhost:5000/.

Step 2: Run the Vite frontend

Open a new terminal, navigate to the frontend folder, and run:

npm run dev

This will start the frontend application (usually accessible at http://localhost:5173/).

Usage

Open your browser and navigate to the provided localhost link.

Interact with the chatbot to:

Input your MBTI personality type.

Explore career advice for different MBTI types.

Learn about how each engineering discipline aligns with certain strengths and preferences.

Acknowledgments

ENGR 110: Special thanks to the University of Michigan Engineering Department for fostering career exploration.

OpenAI: For the GPT API powering personalized guidance.

Instructors and TAs: For their support and feedback.

Feel free to reach out with any questions or suggestions! We hope this chatbot enhances your career exploration experience!
