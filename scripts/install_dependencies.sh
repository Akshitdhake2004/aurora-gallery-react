#!/bin/bash
cd /home/ec2-user/app

# Source the NVM script
source /home/ec2-user/.nvm/nvm.sh

# Use Node.js version 18 for building
nvm use 18

# Install dependencies and build
npm install
npm run build
