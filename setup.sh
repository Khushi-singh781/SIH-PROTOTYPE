#!/bin/bash

echo "🚀 Setting up SIH Crypto Fraud Investigation Platform..."
echo "========================================================="

# Backend setup
echo ""
echo "📦 Setting up backend..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
deactivate
cd ..

# Frontend setup
echo ""
echo "📦 Setting up frontend..."
cd frontend
npm install
cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "========================================================="
echo "🚀 To start the backend:"
echo "  cd backend && source venv/bin/activate && uvicorn app.main:app --reload"
echo ""
echo "🚀 To start the frontend:"
echo "  cd frontend && npm run dev"
echo ""
echo "📊 Access the application:"
echo "  Frontend: http://localhost:3000"
echo "  Backend API: http://localhost:8000"
echo "  API Docs: http://localhost:8000/docs"
echo "========================================================="
