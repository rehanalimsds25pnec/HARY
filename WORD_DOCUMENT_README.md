# Interactive Colorful Word Document Generator

This project includes a script that generates a Microsoft Word document with interactive colors and beautiful formatting.

## Features

The generated Word document (`Interactive_Colorful_Document.docx`) includes:

- **Rainbow Text**: Display text in all colors of the rainbow
- **Text Styles**: Bold, italic, and underlined text in various colors
- **Colorful Table**: A data table with colored cells and headers
- **Mixed Colors**: Paragraphs with multiple colors in a single line
- **Gradient Effect**: Visual gradient using colored block characters
- **Professional Formatting**: Proper spacing, alignment, and heading levels

## How to Use

### Prerequisites
- Node.js installed on your system
- npm (comes with Node.js)

### Installation
The required dependencies are already installed:
```bash
npm install
```

### Generate the Document
Run the script to create the Word document:
```bash
node create-word-doc.js
```

This will create a file named `Interactive_Colorful_Document.docx` in the current directory.

### Open the Document
Open the generated `.docx` file with:
- Microsoft Word (Windows/Mac)
- Google Docs (upload the file)
- LibreOffice Writer
- Any other word processor that supports .docx format

## Customization

You can modify `create-word-doc.js` to:
- Change colors (use hex color codes like `FF0000` for red)
- Add more sections
- Modify text content
- Add images or other elements
- Change font sizes
- Adjust spacing and alignment

### Color Format
Colors are specified as hex codes without the `#` symbol:
- Red: `FF0000`
- Blue: `0000FF`
- Green: `00FF00`
- Custom colors: Use any 6-digit hex code

## Technology

This document is created using:
- **Node.js**: JavaScript runtime
- **docx library**: For creating Word documents programmatically
- **Express**: (part of the base project)

## Examples in the Document

1. **Rainbow Showcase**: All seven rainbow colors displayed boldly
2. **Style Variations**: Different combinations of bold, italic, and underline
3. **Data Table**: 5 beautiful colors with their hex codes
4. **Creative Text**: Mixed colors within a single paragraph
5. **Gradient Bar**: Visual color transition effect

Enjoy your colorful Word document! 🎨
