# 📐 Gauss-Jordan RREF Web Solver

**Solve systems of linear equations quickly and accurately by visualizing the Reduced Row Echelon Form (RREF) steps.**

## 🌟 Overview

The **Gauss-Jordan RREF Web Solver** is a client-side web application designed to automatically solve systems of linear equations. It implements the **Gauss-Jordan Elimination** algorithm to convert the augmented matrix into the **Reduced Row Echelon Form (RREF)**.

The primary goal of this tool is twofold: to provide a **fast and accurate solver** for complex matrices, and to serve as an **educational resource** by displaying the **step-by-step row operations** performed during the calculation.

## 🚀 Live Demo and Access

You can access and use the solver immediately via the live deployment:

  * **Live Application:** [https://mahmoudragab24.github.io/gaussian-solver/](https://mahmoudragab24.github.io/gaussian-solver/)

## ✨ Features

  * **RREF Calculation:** Solves systems of equations using the robust Gauss-Jordan elimination method.
  * **Step-by-Step Solution:** Displays all elementary row operations performed to reach the final solution.
  * **Client-Side:** Runs entirely in the browser (no server required), ensuring fast performance and privacy.
  * **Intuitive UI:** Dynamic matrix creation based on user input (number of variables).

## 💻 Tech Stack

The entire application is built using standard web technologies:

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Structure** | **HTML5** | Web page layout and forms. |
| **Styling** | **CSS3** | Visual design and responsiveness. |
| **Logic** | **JavaScript (Vanilla JS)** | Core algorithm, matrix manipulation, and dynamic updates. |

## 🛠️ Local Setup and Installation

You can easily run this project locally on your machine:

### Prerequisites

  * A modern web browser (Chrome, Firefox, Edge, etc.).

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/mahmoudragab24/gaussian-solver.git
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd gaussian-solver
    ```
3.  **Run the App:**
    Simply **double-click the `index.html` file**. This will open the application in your default web browser.

> **Developer Note:** If you are using VS Code, you can use the **Live Server** extension to launch the application for better development workflow.

## ⚙️ How to Use

1.  **Input Size:** Enter the number of equations (and variables) you wish to solve.
2.  **Enter Matrix:** The system will display a corresponding input grid. Enter the coefficients for your system of equations.
3.  **Solve:** Click the "Solve" button.
4.  **Review Steps:** The solution page will display the full matrix transformation steps alongside the final variable solutions ($X_1, X_2, \dots$).

-----

## 🤝 Contribution

This project was developed as a university project. Contributions are not actively sought at this time, but feel free to fork the repository and adapt it for your own use\!
