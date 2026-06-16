# Overview

Include a brief overview of the project, include:

- How do you deploy and run the project?
- What are its core dependencies?
- Who is it for and why?

## Dependencies

pytesseract requires the Tesseract OCR engine to be installed separately. The tesseract executable must be available on the system PATH so that pytesseract can call it.

On macOS:

```bash
brew install tesseract
