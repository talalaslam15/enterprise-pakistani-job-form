# Pakistani Enterprise Employee Form

## 🌐 [Live Demo](https://talalaslam15.github.io/enterprise-pakistani-job-form/)

A comprehensive multi-step employee onboarding form built with React, TypeScript, and Vite. This application is specifically designed for Pakistani enterprises with localized formatting and validation.

## Features

### 🇵🇰 Pakistani Localization

- **Pakistani Phone Numbers**: Supports format `(+92) 333 - 1234567` with validation for numbers starting with 3
- **CNIC Integration**: Pakistani Computerized National Identity Card format `12345 - 1234567 - 9`
- **PKR Currency**: Salary expectations displayed in Pakistani Rupees (PKR)

### 📋 Multi-Step Form Flow

1. **Personal Information**: Basic details including name, email, phone, CNIC, and address
2. **Employment History**: Previous employers and educational background
3. **Skills Assessment**: Technical skills with proficiency levels
4. **Additional Information**: Portfolio links, availability, salary expectations, and references
5. **Review & Submit**: Final review of all entered information

### 🎨 Modern UI/UX

- Material-UI components with custom theming
- Responsive grid layout
- Dark/Light theme toggle
- Real-time form validation
- Progress stepper
- Error handling with user-friendly messages

### 🛠 Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Material-UI (MUI)** for components
- **React Hook Form** with Zod validation
- **React Router** for navigation
- **Zustand** for state management
- **React Number Format** for input formatting

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Form Validation

The application includes comprehensive validation for Pakistani-specific formats:

- **Phone Numbers**: Must start with 3 and contain exactly 10 digits
- **CNIC**: Must be exactly 13 digits in the format specified
- **Email**: Standard email validation
- **Dates**: Age restrictions (18-100 years) for date of birth
- **Required Fields**: All essential information is mandatory

## Project Structure

```
src/
├── components/           # Reusable UI components
├── features/            # Feature-based modules
│   ├── employee/        # Employee form modules
│   │   ├── personal-info/
│   │   ├── history/
│   │   ├── skills/
│   │   ├── additional-info/
│   │   └── review/
│   ├── form/           # Form components and utilities
│   └── layout/         # Layout components
├── utils/              # Utility functions and constants
└── routes.tsx          # Application routing
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Credits

This project is based on the original [Complex Form Enterprise](https://github.com/codegenixdev/complex-form-enterprise) template by [codegenixdev](https://github.com/codegenixdev). The original codebase has been significantly modified and localized for Pakistani business requirements.

## License

This project is licensed under the MIT License.
