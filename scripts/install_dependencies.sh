#!/bin/bash
cd /home/ec2-user/app

# Install Node.js 18 via DNF (native support in AL2023)
sudo dnf module enable nodejs:18 -y
sudo dnf install nodejs -y

# Verify installation
node -v
npm -v

# Install project dependencies
npm ci
