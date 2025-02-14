#!/bin/bash

# Цвета для вывода
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Vue 3 Microfrontends Setup${NC}"
echo -e "${GREEN}Installing root dependencies...${NC}"
npm install

echo -e "${GREEN}Installing packages dependencies...${NC}"
npx lerna bootstrap

echo -e "${GREEN}Setup completed successfully!${NC}"
echo -e "Run ${BLUE}npm start${NC} to start all applications" 