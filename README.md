# Medical Question Bank Generator

🩺 A comprehensive web application for creating, managing, and exporting medical question banks with AI-powered features.

## 🌐 Live Demo
**Access the app**: [https://qbgenerator.aimedipedia.com](https://qbgenerator.aimedipedia.com)

*Powered by Cloudflare for blazing-fast global performance and enterprise-grade security.*

## ✨ Features

### 📝 Question Management
- **Create Questions**: Rich text editor with image support
- **Edit & Delete**: Click any question to modify or remove it
- **Import/Export**: Excel (XLSX/CSV) and PDF support
- **Smart Organization**: Filter by exam, subject, topic, and source

### 🤖 AI-Powered Generation
- **Multiple AI Models**: OpenAI GPT, Google Gemini, DeepSeek
- **Generate Questions**: Create questions from topics or context
- **Smart Explanations**: AI-generated detailed explanations
- **Context-Aware**: Upload files for targeted question generation

### 📱 User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Local Storage**: All data saved in your browser
- **No Server Required**: Pure client-side application
- **Fast & Secure**: No data sent to external servers (except AI APIs)

## 🚀 How to Use

### 1. Adding Questions
1. Fill in the exam name, subject, and topic
2. Enter your question using the rich text editor
3. Add multiple choice options (A-G supported)
4. Select the correct answer
5. Add an explanation (optional but recommended)
6. Click "Save Question"

### 2. Importing Questions
1. Click "Import from Excel"
2. Use the provided CSV format:
   ```csv
   Question,Options,Answer,Subject,Exam,Topic,Source
   Your question?,Option A;Option B;Option C;Option D,Option A,Subject Name,Exam Name,Topic Name,Source
   ```
3. Options should be separated by semicolons (`;`)

### 3. AI Question Generation
1. Click the gear icon to open AI settings
2. Enter your API key for your chosen AI provider:
   - **OpenAI**: Get key from [OpenAI Platform](https://platform.openai.com/api-keys)
   - **Google Gemini**: Get key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - **DeepSeek**: Get key from [DeepSeek Platform](https://platform.deepseek.com/api_keys)
3. Fill in the AI generation form
4. Click "Generate Question" and wait for AI response
5. Review and save the generated question

### 4. Exporting Your Questions
- **Excel Export**: Download as XLSX file for sharing or backup
- **PDF Export**: Generate formatted PDF for printing or distribution

### 5. Data Management
- All questions are stored locally in your browser
- Use Export/Import to backup or transfer your question bank
- Data persists between sessions

## 🔧 Technical Details

### File Structure
```
├── index.html                 # Landing page with redirect
├── qBankdbGenerator.html     # Main application
├── sample_import_questions.csv # Example import format
└── README.md                 # This file
```

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Edge
- ✅ Firefox
- ✅ Safari
- 📱 Mobile browsers

### Local Development
1. Clone this repository
2. Open `index.html` or `qBankdbGenerator.html` in a web browser
3. No server setup required!

## 🔐 Privacy & Security
- **Local Storage Only**: All questions stored in your browser
- **No Data Collection**: We don't collect or store your personal data
- **AI API Usage**: Only when you use AI features with your own API keys
- **Secure**: HTTPS required for GitHub Pages deployment

## 🎯 Use Cases
- Medical students preparing for exams
- Educators creating question banks
- Medical professionals for continuing education
- Study groups and collaborative learning
- Custom quiz creation for any subject

## 📋 API Key Setup

### OpenAI
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account and add billing information
3. Generate a new API key
4. Paste in the AI settings panel

### Google Gemini
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Paste in the AI settings panel

### DeepSeek
1. Visit [DeepSeek Platform](https://platform.deepseek.com/api_keys)
2. Create an account
3. Generate a new API key
4. Paste in the AI settings panel

## 🤝 Contributing
This is an open-source project. Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share with others

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments
- Built with vanilla HTML, CSS, and JavaScript
- Uses CDN libraries: jsPDF, SheetJS, jQuery, Select2
- AI integration with multiple providers

---

**Made with ❤️ for the medical education community**

*Start building your question bank today!* 🎓
