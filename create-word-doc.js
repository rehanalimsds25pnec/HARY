const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, HeadingLevel, BorderStyle } = require("docx");
const fs = require("fs");

// Create a new document with interactive colors
const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                // Title with large, colorful text
                new Paragraph({
                    text: "Interactive Colorful Document",
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        after: 400,
                    },
                }),

                // Subtitle
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        after: 300,
                    },
                    children: [
                        new TextRun({
                            text: "A Microsoft Word Document with Beautiful Colors",
                            bold: true,
                            size: 28,
                            color: "4472C4",
                        }),
                    ],
                }),

                // Section 1: Rainbow Text
                new Paragraph({
                    text: "Rainbow Color Showcase",
                    heading: HeadingLevel.HEADING_2,
                    spacing: {
                        before: 300,
                        after: 200,
                    },
                }),

                new Paragraph({
                    spacing: {
                        after: 200,
                    },
                    children: [
                        new TextRun({
                            text: "Red ",
                            color: "FF0000",
                            bold: true,
                            size: 32,
                        }),
                        new TextRun({
                            text: "Orange ",
                            color: "FF7F00",
                            bold: true,
                            size: 32,
                        }),
                        new TextRun({
                            text: "Yellow ",
                            color: "FFFF00",
                            bold: true,
                            size: 32,
                        }),
                        new TextRun({
                            text: "Green ",
                            color: "00FF00",
                            bold: true,
                            size: 32,
                        }),
                        new TextRun({
                            text: "Blue ",
                            color: "0000FF",
                            bold: true,
                            size: 32,
                        }),
                        new TextRun({
                            text: "Indigo ",
                            color: "4B0082",
                            bold: true,
                            size: 32,
                        }),
                        new TextRun({
                            text: "Violet",
                            color: "9400D3",
                            bold: true,
                            size: 32,
                        }),
                    ],
                }),

                // Section 2: Text Styles with Colors
                new Paragraph({
                    text: "Text Styles with Colors",
                    heading: HeadingLevel.HEADING_2,
                    spacing: {
                        before: 300,
                        after: 200,
                    },
                }),

                new Paragraph({
                    spacing: {
                        after: 150,
                    },
                    children: [
                        new TextRun({
                            text: "Bold Blue Text",
                            bold: true,
                            color: "0070C0",
                            size: 28,
                        }),
                    ],
                }),

                new Paragraph({
                    spacing: {
                        after: 150,
                    },
                    children: [
                        new TextRun({
                            text: "Italic Purple Text",
                            italics: true,
                            color: "7030A0",
                            size: 28,
                        }),
                    ],
                }),

                new Paragraph({
                    spacing: {
                        after: 150,
                    },
                    children: [
                        new TextRun({
                            text: "Underlined Green Text",
                            underline: {},
                            color: "00B050",
                            size: 28,
                        }),
                    ],
                }),

                new Paragraph({
                    spacing: {
                        after: 150,
                    },
                    children: [
                        new TextRun({
                            text: "Bold Italic Red Text",
                            bold: true,
                            italics: true,
                            color: "C00000",
                            size: 28,
                        }),
                    ],
                }),

                // Section 3: Colorful Table
                new Paragraph({
                    text: "Colorful Data Table",
                    heading: HeadingLevel.HEADING_2,
                    spacing: {
                        before: 300,
                        after: 200,
                    },
                }),

                new Table({
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    rows: [
                        // Header row
                        new TableRow({
                            children: [
                                new TableCell({
                                    shading: {
                                        fill: "4472C4",
                                    },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [
                                                new TextRun({
                                                    text: "Color Name",
                                                    bold: true,
                                                    color: "FFFFFF",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    shading: {
                                        fill: "4472C4",
                                    },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [
                                                new TextRun({
                                                    text: "Hex Code",
                                                    bold: true,
                                                    color: "FFFFFF",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    shading: {
                                        fill: "4472C4",
                                    },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [
                                                new TextRun({
                                                    text: "Sample",
                                                    bold: true,
                                                    color: "FFFFFF",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        // Data rows with different colors
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph("Coral")],
                                }),
                                new TableCell({
                                    children: [new Paragraph("#FF7F50")],
                                }),
                                new TableCell({
                                    shading: {
                                        fill: "FF7F50",
                                    },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [new TextRun({ text: "★★★", bold: true })],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph("Turquoise")],
                                }),
                                new TableCell({
                                    children: [new Paragraph("#40E0D0")],
                                }),
                                new TableCell({
                                    shading: {
                                        fill: "40E0D0",
                                    },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [new TextRun({ text: "★★★", bold: true })],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph("Gold")],
                                }),
                                new TableCell({
                                    children: [new Paragraph("#FFD700")],
                                }),
                                new TableCell({
                                    shading: {
                                        fill: "FFD700",
                                    },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [new TextRun({ text: "★★★", bold: true })],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph("Lavender")],
                                }),
                                new TableCell({
                                    children: [new Paragraph("#E6E6FA")],
                                }),
                                new TableCell({
                                    shading: {
                                        fill: "E6E6FA",
                                    },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [new TextRun({ text: "★★★", bold: true })],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph("Salmon")],
                                }),
                                new TableCell({
                                    children: [new Paragraph("#FA8072")],
                                }),
                                new TableCell({
                                    shading: {
                                        fill: "FA8072",
                                    },
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [new TextRun({ text: "★★★", bold: true })],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // Section 4: Mixed Colors Paragraph
                new Paragraph({
                    text: "Creative Color Combinations",
                    heading: HeadingLevel.HEADING_2,
                    spacing: {
                        before: 300,
                        after: 200,
                    },
                }),

                new Paragraph({
                    spacing: {
                        after: 200,
                    },
                    children: [
                        new TextRun({
                            text: "This document demonstrates ",
                            size: 24,
                        }),
                        new TextRun({
                            text: "interactive ",
                            size: 24,
                            color: "FF6B6B",
                            bold: true,
                        }),
                        new TextRun({
                            text: "and ",
                            size: 24,
                        }),
                        new TextRun({
                            text: "colorful ",
                            size: 24,
                            color: "4ECDC4",
                            bold: true,
                        }),
                        new TextRun({
                            text: "text formatting in ",
                            size: 24,
                        }),
                        new TextRun({
                            text: "Microsoft Word",
                            size: 24,
                            color: "95E1D3",
                            bold: true,
                        }),
                        new TextRun({
                            text: ". You can mix different ",
                            size: 24,
                        }),
                        new TextRun({
                            text: "colors",
                            size: 24,
                            color: "F38181",
                            italics: true,
                        }),
                        new TextRun({
                            text: ", ",
                            size: 24,
                        }),
                        new TextRun({
                            text: "styles",
                            size: 24,
                            color: "AA96DA",
                            underline: {},
                        }),
                        new TextRun({
                            text: ", and ",
                            size: 24,
                        }),
                        new TextRun({
                            text: "formats",
                            size: 24,
                            color: "FCBAD3",
                            bold: true,
                            italics: true,
                        }),
                        new TextRun({
                            text: " to create visually appealing documents!",
                            size: 24,
                        }),
                    ],
                }),

                // Section 5: Gradient-like effect
                new Paragraph({
                    text: "Gradient Effect",
                    heading: HeadingLevel.HEADING_2,
                    spacing: {
                        before: 300,
                        after: 200,
                    },
                }),

                new Paragraph({
                    spacing: {
                        after: 150,
                    },
                    children: [
                        new TextRun({ text: "█", color: "FF0000", size: 40 }),
                        new TextRun({ text: "█", color: "FF1A00", size: 40 }),
                        new TextRun({ text: "█", color: "FF3300", size: 40 }),
                        new TextRun({ text: "█", color: "FF4D00", size: 40 }),
                        new TextRun({ text: "█", color: "FF6600", size: 40 }),
                        new TextRun({ text: "█", color: "FF8000", size: 40 }),
                        new TextRun({ text: "█", color: "FF9900", size: 40 }),
                        new TextRun({ text: "█", color: "FFB300", size: 40 }),
                        new TextRun({ text: "█", color: "FFCC00", size: 40 }),
                        new TextRun({ text: "█", color: "FFE600", size: 40 }),
                        new TextRun({ text: "█", color: "FFFF00", size: 40 }),
                    ],
                }),

                // Footer
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 400,
                    },
                    children: [
                        new TextRun({
                            text: "Created with Node.js and docx library",
                            size: 20,
                            color: "808080",
                            italics: true,
                        }),
                    ],
                }),
            ],
        },
    ],
});

// Generate the document
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Interactive_Colorful_Document.docx", buffer);
    console.log("✓ Document created successfully!");
    console.log("✓ File saved as: Interactive_Colorful_Document.docx");
    console.log("✓ The document includes:");
    console.log("  - Rainbow colored text");
    console.log("  - Various text styles (bold, italic, underline)");
    console.log("  - Colorful table with different cell backgrounds");
    console.log("  - Mixed color paragraphs");
    console.log("  - Gradient effect using colored blocks");
});
