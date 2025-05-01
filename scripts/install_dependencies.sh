#!/bin/bash
cd /home/ec2-user/app

# Install Node.js 18 via NodeSource
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Verify
node -v
npm -v

# Install dependencies
npm ci
