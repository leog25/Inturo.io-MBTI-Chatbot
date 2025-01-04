# Conversational Personality Test for MBTI (this is not boring and tedious)
This project is an educational chatbot application designed for the University of Michigan's ENGR 110 course, which helps students explore careers in engineering. The chatbot leverages the OpenAI API to provide MBTI (Myers-Briggs Type Indicator)-based career guidance and insights into different engineering disciplines. The project stemmed from the class requiring the students to take a tedious multiple choice question in order to determine personality type. These type of tests are unengaging and thus unable to accurately gauge a students personality. By leveraging conversational AI, I developed a fun project that turned a long tedious personality test into a natural conversation. 

## **Introduction**
The MBTI Career Exploration Chatbot provides a conversational interface where students can discover engineering fields that align with their personality types. It is intended to foster self-reflection and assist students in making informed decisions about their engineering career paths.

The chatbot uses:
- **OpenAI's API** for generating personalized responses.
- **Node.js** (Vite) for the frontend application.
- **Python Flask** for managing the backend and API communication.

## **Features**
- **MBTI-based guidance:** Tailored career insights for all 16 MBTI personality types.
- **Engineering career recommendations:** Specific advice about different engineering disciplines.
- **Responsive user interface:** Intuitive and user-friendly interface for students.
- **Educational tool:** Designed to support career exploration activities within ENGR 110.

## **Prerequisites**
Ensure you have the following tools installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Python 3](https://www.python.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Flask: Install via `pip install flask`
- OpenAI API key (create an account and generate your key at [OpenAI](https://platform.openai.com/signup/))

## **Installation**
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. **Install frontend dependencies:**
   Navigate to the `frontend` folder and run:
   ```bash
   npm install
   ```
3. **Set up the backend:**
   In the project root directory, ensure the `app.py` file exists and Flask is installed:
   ```bash
   pip install -r requirements.txt  # If provided
   ```
4. **Add your OpenAI API Key:**
   In `app.py`, add your OpenAI API key in the designated variable:
   ```python
   openai.api_key = "YOUR_API_KEY_HERE"
   ```

## **Running the Application**
### Step 1: Start the Flask backend
Open a terminal, navigate to the project root, and run:
```bash
python app.py
```
This will start the backend API service at `http://localhost:5000/`.

### Step 2: Run the Vite frontend
Open a new terminal, navigate to the `frontend` folder, and run:
```bash
npm run dev
```
This will start the frontend application (usually accessible at `http://localhost:5173/`).


## **Acknowledgments**
- **ENGR 110:** Special thanks to the University of Michigan Engineering Department for fostering career exploration.
- **OpenAI:** For the GPT API powering personalized guidance.
- **Instructors and TAs:** For their support and feedback.

Feel free to reach out with any questions or suggestions! We hope this chatbot enhances your career exploration experience!

