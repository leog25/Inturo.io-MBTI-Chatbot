from flask import Flask, jsonify, request
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)  

load_dotenv()

openai = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY")
)


@app.route('/')
def hello():
    return jsonify(message="Hello from Flask!")

message_history = [
    {"role": "system", "content": "Your name is Inturo. Your goal is to predict the user's MBTI personality type based on normal human conversation."},
    {"role": "assistant", "content": "What is your name?"}
]

def get_gpt_response(user_input):

    message_history.append({"role": "user", "content": user_input})


    response = openai.chat.completions.create(
        messages=message_history,
        model="gpt-4",
        max_tokens = 100,
        temperature = 0.8
    )

    bot_response = response.choices[0].message.content

    message_history.append({"role": "assistant", "content": bot_response})
    
    return bot_response

def get_mbti():

    prompt = (
        "Based on the following conversation, analyze the personality of the user in terms of MBTI and provide "
        "a list of possible MBTI types along with their likelihood percentage. Format the response follows like the following example: "
        "[{\"MBTI\": \"ENFP\", \"percent\": 34}, {\"MBTI\": \"ISTJ\", \"percent\": 20}, ...]."
    )

    request_message = [{"role": "system", "content": prompt}] + message_history

    response = openai.chat.completions.create(
        messages=request_message,
        model="gpt-4",
        max_tokens = 100 ,
        temperature = 0.8
    )

    result = response.choices[0].message.content

    print(result)

    mbti_data = eval(result)

    print(mbti_data)
    
    return mbti_data



@app.route('/message', methods=['POST'])
def handle_message():
    data = request.get_json()  
    user_message = data.get('message', '')  
    bot_response = get_gpt_response(user_message) 
    return jsonify({'response': bot_response}) 

@app.route('/chart-data')
def chart_data():
    data = get_mbti()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True) 
            