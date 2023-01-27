from flask import Flask, request, render_template
# import openai_secret_manager
import openai
import speech_recognition as sr
from gtts import gTTS
import os
import json
from dotenv import load_dotenv
load_dotenv()  

app = Flask(__name__)

# Use the API key to authenticate with the OpenAI API
openai.api_key = os.getenv("KEY")
# openai.Model.list()

# initialize the recognizer
r = sr.Recognizer()

# Function to transcribe audio to text
def transcribe_audio_to_text(audio):
    prompt = r.recognize_google(audio, show_all=True)
    return prompt

# Function to input text to ChatGPT and get a response
def get_chatgpt_response(prompt):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=1024,
        n =1,
        stop=None,
        temperature=0.5,
    )
    return response["choices"][0]["text"]

# Function to convert text to speech
def text_to_speech(text):
    tts = gTTS(text)
    tts.save("response.mp3")
    os.system("response.mp3")

@app.route("/")
def index():
    return render_template('toots.html')
# API endpoint to handle audio data
@app.route("/audio", methods=["POST"])
def audio():
    # Get the audio data from the request
    audio_data = request.data
    # Transcribe audio to text
    audio = sr.AudioData(audio_data, sample_rate=44100, sample_width=2)
    speech = transcribe_audio_to_text(audio)
    print(speech)
    # Get response from ChatGPT
    response = get_chatgpt_response(speech)
    print(response)
    # Convert response to speech
    text_to_speech(response)
    # Return the ChatGPT response
    return json.dumps({"response": response})

if __name__ == "__main__":
    app.run(debug=True, host='192.168.68.104', port=8002)
