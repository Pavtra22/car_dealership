from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/analyze/<text>')
def analyze(text):
    blob = TextBlob(text)
    # Simple logic: polaritiy > 0 is positive
    res = "positive" if blob.sentiment.polarity > 0 else "neutral"
    return jsonify({"sentiment": res})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)