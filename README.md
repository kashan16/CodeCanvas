---

# CodeCanvas 

CodeCanvas is a collaborative code editor built for teams, enabling seamless code editing, sharing, and real-time collaboration.

## Table of Contents 📑

- [CodeCanvas](#codecanvas)
  - [Table of Contents 📑](#table-of-contents-)
  - [Tech Stack 🛠️](#tech-stack-️)
    - [Frontend 🖥️](#frontend-️)
    - [Backend ⚙️](#backend-️)
    - [Real-time Collaboration 🌐](#real-time-collaboration-)
    - [Authentication \& Authorization 🔐](#authentication--authorization-)
    - [Database 📊](#database-)
    - [Chat Feature 💬](#chat-feature-)
    - [Deployment \& Hosting ☁️](#deployment--hosting-️)
  - [Getting Started 🚀](#getting-started-)
    - [Forking the Repository 🍴](#forking-the-repository-)
    - [Cloning the Repository 🌀](#cloning-the-repository-)
  - [Making Contributions 💡](#making-contributions-)
    - [Creating a Branch 🌳](#creating-a-branch-)
    - [Making Changes ✏️](#making-changes-️)
    - [Committing Changes 📝](#committing-changes-)
    - [Pushing Changes 🚀](#pushing-changes-)
    - [Creating a Pull Request 🔄](#creating-a-pull-request-)
  - [MAKE CHANGE(create component) IN app/src directory by creating a new folder named after the problem / feature](#make-changecreate-component-in-appsrc-directory-by-creating-a-new-folder-named-after-the-problem--feature)
  - [Issues and Support 🆘](#issues-and-support-)
  - [License 📜](#license-)

## Tech Stack 🛠️

### Frontend 🖥️

- **React**: A JavaScript library for building user interfaces.
- **WebSocket**: For real-time communication between clients and server.
- **Monaco Editor**: The same editor that powers VS Code.

### Backend ⚙️

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **Socket.io**: Enables real-time, bidirectional, and event-driven communication.

### Real-time Collaboration 🌐

- **Operational Transformation (OT)** or **Conflict-Free Replicated Data Types (CRDTs)**: Techniques to handle concurrent edits in real-time collaboration.
- **ShareDB** or **Yjs**: Libraries that handle real-time collaboration for text editing and data structures.

### Authentication & Authorization 🔐

- **Firestore Auth**: For social logins using Emails(for now).

### Database 📊

- **Firebase**:

### Chat Feature 💬

- **Socket.io**: With separate namespaces or rooms for chat.
- **Simple WebSockets**: For basic text-based chat.

### Deployment & Hosting ☁️

- **Vercel**: For hosting the frontend.
- **Heroku**: For hosting the backend.

## Getting Started 🚀

### Forking the Repository 🍴

1. Navigate to the [CodeCanvas repository](https://github.com/kashan16/CodeCanvas.git) on GitHub.
2. Click on the `Fork` button in the top-right corner.
3. After forking, you'll have your own copy of the repository in your GitHub account.

### Cloning the Repository 🌀

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/CodeCanvas.git
```

## Making Contributions 💡

### Creating a Branch 🌳

To create a new branch effectively, follow these steps:

1. Start with a branch name that describes your changes. Use hyphens to separate words.
2. Use a prefix like `feature/` for new features or `fix/` for bug fixes followed by a short description.
3. For example:

   ```bash
   git checkout -b feature/add-login-feature
   ```

### Making Changes ✏️

Make your desired changes to the codebase.

### Committing Changes 📝

1. Stage your changes:

   ```bash
   git add .
   ```

2. Commit your changes with a meaningful commit message:

   ```bash
   git commit -m "Your commit message here"
   ```

### Pushing Changes 🚀

Push your changes to your forked repository:

```bash
git push origin [BRANCH_NAME]
```

### Creating a Pull Request 🔄

When creating a pull request, ensure you include a descriptive title and detailed description of your changes.

1. Navigate to your forked repository on GitHub.
2. Click on the `New Pull Request` button.
3. In the dropdown menu for the base repository and base branch, select the main repository and the main branch (`main` or `master`).
4. In the "compare" dropdown, select the branch you just pushed.
5. Add a descriptive title and detailed description of your changes.
6. If your pull request is related to an existing issue, you can reference it in the description using `#issue_number`.
7. Click on `Create Pull Request`.

By following these guidelines, you help maintain a clean and organized repository, making it easier for collaborators to review and merge your contributions.

## MAKE CHANGE(create component) IN app/src directory by creating a new folder named after the problem / feature 

## Issues and Support 🆘

If you encounter any issues or have any questions, feel free to [open an issue](https://github.com/kashan16/CodeCanvas/issues) in the

 repository.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---