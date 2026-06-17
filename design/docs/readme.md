# Overview

Put your design documentation in this folder.
This should include rough notes from the familiarization phase.


## Persona

Write a brief persona of your user using design thinking. You can use the following template:

- **Name**: [Jake Finn]
- **Age**: [27]
- **Occupation**: [University Student and Junior Software Developer]
- **Location**: [Perth, Western Australia]
- **Goals**: [Learn software development, complete programming courses successfully, and build practical coding skills for a career in technology.]
- **Frustrations**: [Coding videos often display important code snippets that are not fully described by the narrator. It can be difficult to follow demonstrations when code changes quickly on screen.]
- **Motivations**: [Improve programming skills, gain industry experience, and become more independent when studying technical content.]
- **Technology**: [Uses a laptop with screen reader software, web browsers, Visual Studio Code, Python development tools, and accessibility features built into the operating system.]
- **Experience**: [Intermediate programming knowledge with experience in Python, web development concepts, and command-line tools. Comfortable using assistive technology in daily study activities.]
- **Personality**: [Curious, determined, patient, and enjoys solving technical problems. Prefers tools that are efficient and easy to use.]
- **Interests**: [Software development, technology, accessibility, automation, and continuous learning.]

Notice: This project focuses on assistive technology for people with disabilities. It is important to treat the topic with respect and sensitivity.

Consider:

- People are not defined by their disabilities.
- People with disabilities are not a homogeneous group.

Your persona should reflect the diversity of people with disabilities and their experiences.

## User Journey

What is the user journey? What are the steps the user takes to achieve their goals?

- **Step 1**: O usuário encontra um vídeo de programação que deseja estudar.
- **Step 2**: O usuário abre o vídeo na aplicação e navega para uma parte específica da aula.
- **Step 3**: O usuário solicita a captura do frame atual ou de um timestamp específico.
- **Step 4**: A aplicação executa OCR e apresenta o código extraído em um formato mais acessível e fácil de ler.
- **Step 5**: O usuário ajusta as opções de visualização (personalisation) para melhorar a legibilidade.
- **Step 6**: O usuário continua estudando o vídeo utilizando o texto extraído para acompanhar a explicação do instrutor.

## UI Interaction Patterns

The application will use a simple web-based interface focused on accessibility and ease of use.

### Video Selection

The user selects a coding video to study.

### Timestamp Navigation

The user enters or selects a timestamp to navigate to a specific part of the video.

### OCR Extraction

The user requests OCR processing for a selected frame to extract code displayed in the video.

### Content Review

The extracted code is displayed in a readable text area that can be reviewed independently from the video.

### Personalisation

The user can enable a high contrast mode to improve readability and accessibility when viewing extracted code and application content.

### Validation

Client-side validation is used to ensure valid timestamps are entered before requests are sent to the server.

## AI Prompts

- What types of visual impairments do people have? Please explain in simple language and give some examples.
- What assistive tecnology is commonly used by people with visual impairments when using a computer?
- What challenges can a programming student with low vision have when watching coding videos?
- I need to create a persona for a programming student with a visual impairment. Can you help me create a realistic persona with goals, frustrations and motivations?
- What features could help make coding videos more acessible for people with visual impairments?
- Can you suggest a simple user journey for a student using a web application that extracts code from video frames?
- What personalisation features could improve accessibility in a coding video application?
- What client-side validation could be useful in a web application where a user enters a timestamp to request a video frame?
- What interaction patterns would be simple and easy to use for a student trying to extract code from a programming video?