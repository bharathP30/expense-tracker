# $ Expense Tracker

A simple React + Vite application that lets users moniter their expenses. Users can add expenses with a description, amount, and category (Food, Transport, or Fun), filter the list by category, delete individual entries, and view the total amount spent. Built with modern React hooks and styled using Tailwind CSS for a clean, gradient-based UI.

## Live 
Vercel : https://expense-tracker-rosy-mu.vercel.app/

## ✨ Features
-- Add Expenses: Input description, amount (supports decimals), and select a category.
-- Filter by Category: View all expenses or filter by Food, Transport, or Fun.
-- Delete Entries: Remove individual expenses with a simple click.
-- Total Calculation: Automatically sums up all expenses in real-time.
-- Responsive Design: Works on mobile and desktop with Tailwind CSS.
-- No Backend : All data is managed in local state (persists only during session).

---

## 🛠️ Tech Stack
- **[React](guide://action?prefill=Tell%20me%20more%20about%3A%20React)** – Core framework with useState for state management.
- **[Vite](guide://action?prefill=Tell%20me%20more%20about%3A%20Vite)** – Fast build tool with HMR  
- **[Tailwind CSS](guide://action?prefill=Tell%20me%20more%20about%3A%20Tailwind%20CSS)** – For styling and responsive layouts.
- **[JavaScript (ES6+)](guide://action?prefill=Tell%20me%20more%20about%3A%20JavaScript%20(ES6%2B))** – Logic for features  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/bharathP30/expense-tracker.git

# Navigate into the project folder
cd expense-tracker

# Install dependencies
npm install
```

### Run the app
```bash
# Start the development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

---

## Usage

**Adding an Expense:**
Enter a description (e.g., "Lunch at cafe").
Input the amount (e.g., "12.50").
Select a category from the dropdown.
Click Add Expense.

**Viewing and Filtering:**
Expenses appear in a list below the form.
Use the filter buttons (All, Food, Transport, Fun) to narrow down the view.

**Deleting:**
Click the ✕ button next to any expense to remove it.

**Total Spent:**
Displayed at the bottom, updating automatically.

## Contribution
Feel free to fork the repo, submit issues, or pull requests for improvements like localStorage persistence or additional categories.

## License
MIT License - Free to use and modify.

---

