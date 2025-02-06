# StudentManageTokenService

## Overview
The `StudentManageTokenService` is a full-stack application built using Angular for the client-side and ASP.NET Core for the server-side. It is designed to manage tokens and secrets for Local Education Agencies (LEAs) to access student backpack data securely and efficiently.

### Features
- **LEA Token Management**: Allows LEAs to manage their tokens and secrets.
- **Role-Based Access Control (RBAC)**: Implements RBAC to provide fine-grained control over permissions.
- **Custom Role Assignment**: Enables assigning custom roles to users invited via Azure AD B2C.
- **Secure App Registrations**: Ensures each application registration has dual ownership by LEA and SIS vendors.
- **Angular Client**: Provides an interactive UI for managing tokens and secrets.

## Folder Structure

### `studentmanagetokenservice.client`
- **`src/`**: Contains the Angular application code.
- **`public/`**: Holds static files for the Angular client.
- **Angular Configuration Files**: Includes `angular.json`, `tsconfig.json`, and other configuration files required for Angular.

### `StudentManageTokenService.Server`
- **`Controllers/`**: Contains API controllers for handling requests.
- **`Properties/`**: Includes configuration and assembly information.
- **`appsettings.json`**: Centralized configuration file for application settings.
- **`Program.cs`**: Entry point of the server-side application.

## Goals
1. **LEA Management**:
   - Implement APIs for token creation, update, and deletion.
   - Allow LEAs to securely manage their secrets.

2. **Azure AD B2C Integration**:
   - Configure authentication and authorization with Azure AD B2C.
   - Assign custom roles to users invited via Azure AD.

3. **RBAC Implementation**:
   - Establish role-based access control to ensure only authorized users can perform sensitive operations.

4. **Dual Ownership for App Registrations**:
   - Ensure each app registration has two owners: one LEA and one SIS vendor.

5. **Angular Client Enhancements**:
   - Build intuitive and responsive UI components.
   - Provide seamless integration with server-side APIs.

## Next Steps
- **Update README**: Ensure documentation reflects the latest goals and features.
- **Set Up Development Environment**: Configure the Angular and ASP.NET Core environments.
- **Start Implementation**:
   - Begin with RBAC and token management APIs.
   - Build UI components for token management in the Angular client.
- **Test Integration**: Ensure seamless communication between the client and server.

## Development Environment Setup

### Prerequisites
1. **Node.js**: Install Node.js for Angular development.
2. **.NET SDK**: Install the .NET SDK for ASP.NET Core development.
3. **Azure Account**: Set up an Azure account with Azure AD B2C enabled.

### Steps
1. Clone the repository.
2. Navigate to the client and server directories:
   ```bash
   cd studentmanagetokenservice.client
   npm install
   cd ../StudentManageTokenService.Server
   dotnet restore
   ```
3. Run the applications:
   - Angular Client:
     ```bash
     cd studentmanagetokenservice.client
     ng serve
     ```
   - ASP.NET Core Server:
     ```bash
     cd StudentManageTokenService.Server
     dotnet run
     ```

## Contribution Guidelines
- Follow the coding standards set for Angular and .NET projects.
- Write unit tests for all new functionality.
- Submit pull requests for code reviews before merging into the main branch.

## License
This project is licensed under the MIT License.

