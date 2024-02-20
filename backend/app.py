from flask import Flask, request, jsonify
from PyPDF2 import PdfFileReader

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    print("HII")
    files = request.files.get('files')
    print(files)
    if 'file' not in request.files:
        print("hii")
        return jsonify({'error': 'No file part'}), 400
    print("HLO")
    # pdf_file = request.files['file']
    # if pdf_file.filename == '':
    #     return jsonify({'error': 'No selected file'}), 400
    
    # try:
    #     pdf_reader = PdfFileReader(pdf_file)
    #     num_pages = pdf_reader.numPages
    #     text = ''
    #     for page_num in range(num_pages):
    #         page = pdf_reader.getPage(page_num)
    #         text += page.extractText()
    #     return jsonify({'text': text}), 200
    # except Exception as e:
    #     return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
