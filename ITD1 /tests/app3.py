from flask import Flask, request, render_template
import openai
import flask
from flask import request, jsonify
import speech_recognition as sr
from gtts import gTTS
import os
from dotenv import load_dotenv
load_dotenv()  

app = flask.Flask(__name__)
openai.api_key = os.getenv("KEY")

@app.route("/")
def index():
    return render_template('toots.html')

@app.route('/audio', methods=['POST'])
def transcribe_audio():
    # Get audio data from request
    audio_data = request.data

    # Use SpeechRecognition to transcribe audio
    r = sr.Recognizer()
    audio = sr.AudioData(audio_data, sample_rate=44100, 
                         sample_width=2, channels=2)
    transcription = r.recognize_google(audio)

    # Use OpenAI's GPT-3 to generate a response
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=f"{transcription}",
        max_tokens=1024,
        n =1,
        stop=None,
        temperature=0.5
    )
    response_text = response["choices"][0]["text"]

    # Speak the response
    tts = gTTS(response_text)
    tts.save("response.mp3")
    os.system("mpg321 response.mp3")

    # Return the response
    return jsonify(response_text)

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=8002)
